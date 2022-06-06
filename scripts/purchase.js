

main()

function main() {

    var purchasedata = JSON.parse(localStorage.getItem("purchase"))

    append(purchasedata)
    var userdata=JSON.parse(localStorage.getItem("user"))
    var balance=userdata.wallet
    document.querySelector("#wallet_balance").innerText=balance
    document.querySelector("#balance").innerText=balance


   
}



function append(data) {
    var container = document.querySelector("#purchased_vouchers")

    data.forEach(function (ele) {
        var div = document.createElement("div")
        div.setAttribute("class", "voucher")

        var image = document.createElement("img")
        image.src = ele.image

        var name = document.createElement("p")
        name.innerText = ele.name

        var price = document.createElement("p")
        price.innerText = ele.price

       

        div.append(image, name, price)
        container.append(div)

    })
}

