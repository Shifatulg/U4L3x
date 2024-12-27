let currentPageIndex = 0;
const postsPerPage = 5;
let allPosts = [];

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    allPosts = data;
    renderPosts();
  });

function renderPosts() {
  const postsContainer = document.getElementById("posts");
  const endIndex = currentPageIndex + postsPerPage;

  allPosts.slice(currentPageIndex, endIndex).forEach(function (post) {
    const postContainer = document.createElement("div");
    postContainer.classList.add("post");

    const postTitle = document.createElement("h4");
    postTitle.textContent = post.title;
    postContainer.appendChild(postTitle);

    const postBody = document.createElement("p");
    postBody.textContent = post.body;
    postContainer.appendChild(postBody);

    postsContainer.appendChild(postContainer);
  });
  currentPageIndex = endIndex;
}

document.getElementById("next-btn").addEventListener("click", function () {
  if (currentPageIndex < allPosts.length) {
    renderPosts();
  } else {
    alert("No more posts to display!");
  }
});