module.exports = {
  posts: [
    {
      id: "teste",
      title: " testandooo",
      description: "testando o teste testado",
    },
  ],

  getAll() {
    return this.posts
  },

  newPost(title, description) {
    this.posts.push({ id: generateID(), title, description })
  },
}

function generateID() {
  return Math.random().toString(36)
}
