import { Payment, MercadoPagoConfig, } from 'mercadopago';


const client = new MercadoPagoConfig({ accessToken: 'TEST-4631404171392630-081618-2270e2e2fa2b6e58287ba588c61ca783-1948077339' });
const paymentData = async (req, res) => {
console.log(req.body)

const {transaction_amount,token,description,installments,payment_method_id,issuer_id,payer: {email,identification: { type, number }}} = req.body
console.log(transaction_amount,token,description,installments,payment_method_id,issuer_id,email,type,number)

const payments = new Payment(client);
payments.create({
    body: { 
        transaction_amount: transaction_amount,
        token: token,
        description: description,
        installments: installments,
        payment_method_id:payment_method_id,
        issuer_id:issuer_id,
            payer: {
            email: email,
            identification: {
        type: type,
        number: number
    }}},
    requestOptions: { idempotencyKey: '1234558887' }
})

.then((result) => console.log(result))
.catch((error) => console.log(error));
};

export default paymentData;






// const client = new MercadoPago({ accessToken: '<ACCESS_TOKEN>' });
// const payments = new Payment(client);

// payments.create({
//   body: {
//     additional_info: {
//       items: [
//         {
//           id: '1',
//           title: 'camisa',
//           description: 'camisa social',
//           picture_url: 
//           quantity: 1,
//           unit_price: 58.8,
//         }
//       ],
//       payer: {
//         first_name: 'Test',
//         last_name: 'Test',
//         phone: {
//           area_code: '11',
//           number: '987654321'
//         },
//         address: {
//           street_number: null
//         }
//       },
//       shipments: {
//         receiver_address: {
//           zip_code: '12312-123',
//           state_name: 'Rio de Janeiro',
//           city_name: 'Buzios',
//           street_name: 'Av das Nacoes Unidas',
//           street_number: 3003
//         }
//       }
//     },
//     application_fee: null,
//     binary_mode: false,
//     campaign_id: null,
//     capture: false,
//     coupon_amount: null,
//     description: 'Payment for product',
//     differential_pricing_id: null,
//     external_reference: 'MP0001',
//     installments: 1,
//     metadata: null,
//     payer: {
//       entity_type: 'individual',
//       type: 'customer',
//       email: 'test_user_123@testuser.com',
//       identification: {
//         type: 'CPF',
//         number: '95749019047'
//       }
//     },
//     payment_method_id: 'master',
//     token: 'ff8080814c11e237014c1ff593b57b4d',
//     transaction_amount: 58.8
//   },
//   requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
// })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));