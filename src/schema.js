const { gql } = require("apollo-server");
const typeDefs = gql`
    type Desk {
        _id: ID!
        title: String!
        cardIds: [ID]!
    }
    type Card {
        _id: ID!
        title: String!
        itemIds: [ID]!
    }
    type Item {
        _id: ID!
        title: String!
    }
    type DesksOrder {
        desksOrder: [ID]!
    }

    type Query {
        desks: DesksWithOrder
        cards(cardIds: [ID]!): CardsWithItems
    }

    type DesksWithOrder {
        desks: [Desk]
        desksOrder: DesksOrder
    }

    type CardsWithItems {
        cards: [Card]
        items: [Item]
    }

    type Mutation {
        addDesk(input: CreateDeskInput!): Desk!
        updateDesksOrder(desksOrder: [ID]!): DesksOrder!
        updateDesk(_id: ID!, input: UpdateDeskInput!): Desk!
        deleteDesk(_id: ID!): Desk!
        addCard(input: CreateCardInput!): Card!
        updateCard(_id: ID!, input: UpdateCardInput!): Card!
        deleteCard(_id: ID!): Card!
        addItem(title: CreateItemInput!): Item!
        updateItem(_id: ID!, input: UpdateItemInput!): Item!
        deleteItem(_id: ID!): Item!
    }

    input CreateDeskInput {
        title: String!
    }
    input CreateCardInput {
        title: String!
    }
    input CreateItemInput {
        title: String!
    }
    input UpdateDeskInput {
        title: String
        cardIds: [ID]
    }
    input UpdateCardInput {
        title: String
        itemIds: [ID]
    }
    input UpdateItemInput {
        title: String
    }
`;

module.exports = typeDefs;
