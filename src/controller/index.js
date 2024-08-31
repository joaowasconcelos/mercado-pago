const home = (req, res) => {
    try {
        res.render("index"); 
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

export default home;
