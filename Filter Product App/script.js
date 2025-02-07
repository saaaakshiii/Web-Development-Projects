const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const categoryBtns = document.querySelectorAll(".category-btn");

// Set "All products" as active category on page load
document.querySelector("[data-category='all']").classList.add("active");

function filter_product() {
    const searchValue = searchInput.value.toLowerCase();
    const productItems = document.querySelectorAll(".product-item");
    const activeCategory = document.querySelector(".category-btn.active")?.dataset.category || "all";

    productItems.forEach(item => {
        const title = item.querySelector("h3").innerText.toLowerCase();
        const category = item.dataset.category;

        // Show items that match search input & category
        if ((title.includes(searchValue) || searchValue === "") && (category === activeCategory || activeCategory === "all")) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function setCategory(e) {
    categoryBtns.forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
    filter_product();
}

// Event listeners
searchBtn.addEventListener("click", filter_product);
searchInput.addEventListener("keyup", filter_product);
categoryBtns.forEach(btn => {
    btn.addEventListener("click", setCategory);
});

// Run filter on page load to show all products
filter_product();
