export const typeDefs = `#graphql
    type Post {
        id: ID!
        title: String!
        content: String!
        author: Author
    },

    type Author {
        id: ID!
        name: String!
        email: String!
        age: Int!
    }

    type Query {
        getPosts: [Post]
        getPost(id: ID!): Post
        authors: [Author]
        author(id: ID!): Author
    }
    type Mutation {
        addPost(title: String!, content: String!): Post
        updatePost(id: ID!, title: String, content: String): Post
        deletePost(id: ID!): Post
    }

    `