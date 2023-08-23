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
                cents -= 100
                totalamount += 1
            }
        }
        
    }

    console.log(`The total amount is ${totalamount} and ${cents} cents`)   
})