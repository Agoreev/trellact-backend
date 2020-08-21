const mongoose = require("../config/db");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const cardSchema = new Schema({
    title: String,
    itemIds: [ObjectId],
});

const itemSchema = new Schema({
    title: String,
});

const Card = mongoose.model("card", cardSchema);
const Item = mongoose.model("item", itemSchema);

const getCardsByIds = async (cardIds) => {
    const cards = await Card.find({
        _id: {
            $in: cardIds,
        },
    });
    let itemIds = [];
    cards.forEach((card) => {
        itemIds = itemIds.concat(card.ItemIds);
    });
    const items = await Item.find({
        _id: {
            $in: itemIds,
        },
    });
    return {
        cards,
        items,
    };
};

const addItem = async (title) => {
    const newItem = new Item({ title });
    return await newItem.save();
};

const addCard = async (title) => {
    const newCard = new Card({ title, itemIds: [] });
    return await newCard.save();
};

module.exports = { getCardsByIds, addItem, addCard };
