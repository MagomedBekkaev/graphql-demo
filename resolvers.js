const posts = [
    {
        id: 1,
        title: "Apprendre GraphQL",
        content: "This is my first post.",
        published: true
    },
    {
        id: 2,
        title: "Apprendre Apollo",
        content: "This is my second post.",
        published: true
    },
]

export const resolvers = {
    Query: {
        getPosts() {
            return posts
        },
        getPost(parent, args) {
            const id = args.id
            return posts.find(post => post.id == id)
        }
    },

    Mutation: {
        addPost(parent, args) {
            const post = {
                id: posts.length + 1,
                title: args.title,
                content: args.content,
                published: true
            }
            posts.push(post)
            return post
        }
    }
};
