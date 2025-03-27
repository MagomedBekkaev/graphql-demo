const posts = [
    {
        id: 1,
        title: "Apprendre GraphQL",
        content: "This is my first post.",
        authorId: 1

    },
    {
        id: 2,
        title: "Apprendre Apollo",
        content: "This is my second post.",
        authorId: 2
    },
]

const authors = [
    { 
        id: 1,
        name: "John Doe",
        email: "johndoe@gmail.com",
        age: 25,
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "janedoe@gmail.com",
        age: 24,
    }
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

    Post: {
        author(parent) {
            return authors.find(author => author.id == parent.authorId)
        }
    },

    Mutation: {
        addPost(parent, args) {
            const newPost = {
                id: posts.length + 1,
                title: args.title,
                content: args.content,
                published: true
            }
            posts.push(newPost)
            return newPost
        },

        updatePost(parent, args) {
            const id = args.id
            const post = posts.find(post => post.id == id)
            post.title = args.title || post.title
            post.content = args.content || post.content
            return post
        },

        deletePost(parent, args) {
            const id = args.id
            const postIndex = posts.findIndex(post => post.id == id)
            const deletedPost = posts.splice(postIndex, 1)
            return deletedPost[0]
        }
    }
};
