let addBtn = document.querySelectorAll(".addBtn")
let price = document.querySelectorAll(".price span")
let names = document.querySelectorAll(".product-name")
let cartItems = document.querySelector("#cart-items")

let l = []
for(let i = 0;i < addBtn.length;i++){
l.push({
    name: names[i].innerHTML,
    price: price[i].innerHTML,
    quantity: 0, 
})
}

let count = 0
let totalamount = 0
let cents = 0
var whatsappLink = "https://api.whatsapp.com/send?phone=918075227102&text=Order%20details"

function whatsappApi(){
    l.forEach((ele) => {
        if(ele.quantity !== 0){
            whatsappLink += "%0A" + ele.name + "%20" + ele.quantity
        }
    })

    whatsappLink += "%0A" + "The total amount is " + totalamount + "$ and "+ cents + " cents"
}



for(let i = 0;i < addBtn.length;i++){
    addBtn[i].addEventListener("click", () => {
        count += 1
        cartItems.innerHTML = `Cart Items(${count})`
        l[i].quantity += 1
    })
}
cartItems.addEventListener("click",() =>{
    
    for(let i = 0;i < addBtn.length;i++){
        if (l[i].quantity > 0){
            console.log(`Item name: ${l[i].name} - Quantity: ${l[i].quantity}`)
            amount = ((parseFloat(price[i].innerHTML))*l[i].quantity)
            totalamount += parseInt(amount)
            cents += (amount*100)%100
            if (cents >= 100) {
                cents = cents-100
                totalamount += 1
            }
        }
        
    }
    whatsappApi()
    window.open(whatsappLink)
    console.log(`The total amount is ${totalamount} and ${cents} cents`)   
})