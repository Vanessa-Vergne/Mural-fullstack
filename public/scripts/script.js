document.addEventListener("DOMContentLoaded", () => {
  updatePosts()
})

function updatePosts() {
  fetch("http://localhost:5000/api/all")
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      let postElements = ""

      let posts = JSON.parse(json)
      posts.forEach((post) => {
        let postElement = `<div class="card mb-4" id=${post.id}>
        <div class="card-header">
            <h5 class="cart-title">${post.title}</h5>
        </div>
        <div class="card-body">
            <div class="card-text">${post.description}</div>
        </div>
    </div>`
        postElements += postElement
      })

      document.getElementById("posts").innerHTML = postElements
    })
}

function newPost() {
  let title = document.getElementById("title").value
  let description = document.getElementById("desc").value

  let post = { title: title, description: description }

  const options = {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(post),
  }

  fetch("http://localhost:5000/api/new", options).then((res) => {
    updatePosts()
    document.getElementById("title").value = ""
    document.getElementById("desc").value = ""
  })
}
