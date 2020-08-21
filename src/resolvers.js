const { addDesk, getDesks, updateDesksOrder } = require("./dataSources/desks");
const { getCardsByIds } = require("./dataSources/cards");

const resolvers = {
    Query: {
        desks: () => getDesks(),
        cards: (cardIds) => getCardsByIds(cardIds),
    },
    Mutation: {
        addDesk: (_, { input }) => {
            return addDesk(input);
        },
        updateDesksOrder: (_, desksOrder) => {
            return updateDesksOrder(desksOrder);
        },
    },
};

module.exports = resolvers;
