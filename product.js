let container = document.getElementById("product")

window.addEventListener("load",()=>{
    displayData();
});

async function displayData(){
    try {
        let res = await fetch("https://hot-flowers.onrender.com/data")
        let data = await res.json()
        renderCardList(data)
    }

    catch (err){
        console.log(err)
    }
}

function renderCardList(carddata){
    let cardList = `
    <div  class = "card-list">
     ${carddata.map((item)=>
        getCard(
            item.id,
            item.title,
            item.Desc,
            item.price,
            item.category,
            item.image,
            item.brand
        )
        ).join("")}

        </div>    
    `;
    container.innerHTML = cardList
}

function getCard(id,title,Desc,price,category,image,brand){
    let card = `
    <div class="card" data-id=${id}>
      <div class="card-img">
        <img src=${image} alt="gadget"/>
      </div>
     <div class="card-datail">
      <h3 class = "card-item card-title">${title}</h3>
      <div class = "card-item card-description">
       ${Desc}
      </div>
      <h4 class = "card-item card-category">${category}</h4>
      <h4 class = "card-item card-brand">${brand}</h4>
      <div class=BtnPrice>
      <h2 class = "card-item card-price">Price -  ${price}</h2>
      <button class = "add-to-cart" id="buy" type="button">Add To Bag</button>
      </div>
     </div>
    </div>
    `
    return card;
}

document.getElementById("buy").addEventListener("click", function (event) {
    console.log("I am buy");

    let BuyData = JSON.parse(localStorage.getItem("BuyItem")) || [];
    let f = false;
    for (let i = 0; i < BuyData.length; i++) {
      if (BuyData[i].id == el.id) {
        f = true;
      }
    }
    if (f == true) alert("Already in Bag");
    else {
      BuyData.push(el);
      alert("Added to Bag");
      localStorage.setItem("BuyItem", JSON.stringify(BuyData));
    }
  });
