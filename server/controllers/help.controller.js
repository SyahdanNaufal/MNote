const help = require("../models/help");

const addHelp = async (req, res) => {
    try {
        const { key, title, answer } = req.body;

        const newData = await new help({
            key: key,
            title: title,
            answer: answer,
        });

        newData.save();
        res.json({ message: "new help data added to database" });
    } catch (error) {
        console.error(error.message);
    }
};

const getHelp = async (req, res) => {
    const data = await help.find();

    res.json(data);
};

module.exports = { addHelp, getHelp };
