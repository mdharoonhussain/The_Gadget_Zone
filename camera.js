let main=document.getElementById("main")
fetchdata()
async function fetchdata(){
    try {
        let res=await fetch("https://hot-flowers.onrender.com/data")
        let data=await res.json();
        console.log(data)
        display(data)
    } catch (error) {
        console.log(error)
    }
}
function display(data){
    data.forEach(element => {
        if(element.category=="cameras"){
            let div=document.createElement("div")
        div.setAttribute("class","camera")
        let div1=document.createElement("div")
        let div2=document.createElement("div")
        let img=document.createElement("img")
        img.setAttribute("src",element.image)
        let title=document.createElement("h2")
        title.innerText=element.title
        let brand=document.createElement("h3")
        brand.innerText=element.brand
        let category=document.createElement("h3")
        category.innerText=element.category
        let price=document.createElement("p")
        price.innerText=element.price
        div1.append(img)
        div2.append(title,brand,category,price)
        div.append(div1,div2)
        main.append(div)
        }
        

    });
}