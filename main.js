async function getproducts(){
    const response = await fetch("https://dummyjson.com/products");
    const data= await response.json();
    const products=data.products;
    const result= products.map(function(ele){
        return `
        <div class="card">
            <img src="${ele.thumbnail}"/>
            <div class="detials">
                <h2>${ele.category}</h2>
                <h3>${ele.title}</h3>
                <p>${ele.description}</p>
                <div class="pricedetials">
                    <span>${ele.price}$</span>
                    <span>${ele.discountPercentage}%</span>
                </div>
                <button>
                    <i class="fa-solid fa-cart-shopping"></i>
                    Add to card
                </button>
           </div>
        </div>`;
    }).join('');
    document.querySelector(".products").innerHTML=result;
}
getproducts();