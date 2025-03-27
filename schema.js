export const typeDefs = `#graphql
    type Post {
        id: ID!
        title: String!
        content: String!
    },

    type Query {
        getPosts: [Post]
        getPost(id: ID!): Post
    }
    type Mutation {
        addPost(title: String!, content: String!): Post
    }

    `