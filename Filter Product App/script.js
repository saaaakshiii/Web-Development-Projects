const productList=document.getElementById("product-list")
const searchInput=document.getElementById("search-input")
const searchBtn=document.getElementById("search-btn")
const categoryBtns=document.querySelectorAll(".category-btn")

function filter_product(){
    const searchValue=searchInput.value.toLocaleLowerCase();
}

searchBtn.addEventListener("click", filter_product);
searchInput.addEventListener("keyup", filter_product)
categoryBtns.forEach(btn=>{
    btn.addEventListener("click", setCategory)
    const productItems=document.querySelectorAll(".product-item")
    productItems.forEach(item=>{
        const title=item.querySelector("h3").innerText.toLowerCase()
        const category=item.dataset.category
    })
})
filter_product();