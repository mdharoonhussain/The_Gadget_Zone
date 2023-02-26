let btn=document.getElementById("addproduct")
let id=document.getElementById("productid")
let image=document.getElementById("image")
let title=document.getElementById("title")
let brand=document.getElementById("brand")
let category=document.getElementById("category")
let description=document.getElementById("description")
let price=document.getElementById("price")
console.log("hello")
btn.addEventListener("click",()=>{

    let image1=image.value
    let id1=id.value
    let title1=title.value
    let brand1=brand.value
    let category1=category.value
    let description1=description.value
    let price1=price.value
  
  let obj={
    id:id1,
    image:image1,
    title:title1,
   brand:brand1,
   category:category1,
   description:description1,
   price:price1,
  }
  
  fetch("https://hot-flowers.onrender.com/data", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    alert("Successfully added Product")
    
  });
  
  })