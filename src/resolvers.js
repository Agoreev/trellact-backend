const { addDesk, getDesks } = require("./dataSources/desks");

const resolvers = {
    Query: {
        desks: () => getDesks(),
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
