const mongoose = require("../config/db");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const deskSchema = new Schema({
    title: String,
    cardIds: [ObjectId],
});

const deskOrderSchema = new Schema({
    desksOrder: [ObjectId],
});

const Desk = mongoose.model("desk", deskSchema);
const DesksOrder = mongoose.model("desksOrder", deskOrderSchema);

const getDesks = () => {
    const desks = Desk.find({});
    const desksOrder = DesksOrder.find({});
    const desksWithOrder = {
        desks,
        desksOrder,
    };
    return desksWithOrder;
};
const addDesk = ({ title }) => {
    const newDesk = new Desk({ title, cardIds: [] });
    return newDesk.save();
};
const updateDesksOrder = ({ desksOrder }) => {
    const newDesksOrder = new DesksOrder({ desksOrder });
    return newDesksOrder.save();
};

module.exports = { getDesks, addDesk, updateDesksOrder };
