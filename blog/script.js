function toggleBlogs() {
    const blogList = document.getElementById("blog-list");
    if (blogList) {
        blogList.classList.toggle("hidden");
    }
}