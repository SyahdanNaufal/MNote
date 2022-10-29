const order = require("../models/order");

// retrieve all order data
const getAllOrder = (req, res) => {
    order.find({}, (err, result) => {
        if (err) {
            console.error(err);
        } else {
            res.json({ data: result });
        }
    });
};

// get order data based on name
const getOrderByName = async (req, res) => {
    const { name } = req.body;
    const orderData = await order.find({
        name: name,
    });

    if (orderData) {
        res.json({ message: "order data found", data: orderData });
    } else {
        res.json({ message: "order data not found" });
    }
};

// get order data based on date
const getOrderByDate = async (req, res) => {
    const { date } = req.body;
    const orderData = await order.find({ date: date });

    if (orderData) {
        res.json({ message: "data with specific date found", data: orderData });
        return orderData;
    } else {
        res.json({ message: "data not found" });
    }
};

// add new order data
const addOrder = async (req, res) => {
    const { name, amount, totalPrice } = req.body;

    const newOrder = await new order({
        name: name,
        amount: amount,
        date: `${new Date().getDate()}-${
            new Date().getMonth() + 1
        }-${new Date().getFullYear()}`,
        totalPrice: totalPrice,
    });

    await newOrder.save();
    res.json({ message: "Success add order data", data: newOrder });
};

// update order data

module.exports = { getAllOrder, getOrderByName, addOrder, getOrderByDate };
