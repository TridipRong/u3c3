
mai()
var userdata=JSON.parse(localStorage.getItem("user"))
async function mai()
{
  var res=getdata()
  var data= await res
  console.log(data)
  append(data)
 
  var balance=userdata.wallet
  document.querySelector("#wallet_balance").innerText=balance

}

async function getdata()
{
    try
    {
        const url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`
        var res= await fetch(url)
        var dataa=await res.json()
       
        return dataa[0].vouchers
    }
    catch(err)
    {
        console.log(err)
    }
}

function append(data)
{
   var container=document.querySelector("#voucher_list")
   
   data.forEach(function(ele)
   {
       var div=document.createElement("div")
       div.setAttribute("class","voucher")
       
       var image=document.createElement("img")
       image.src=ele.image

       var name=document.createElement("p")
       name.innerText=ele.name

       var price=document.createElement("p")
       price.innerText=ele.price

       var btn=document.createElement("button")
       btn.innerText="BUY"
       btn.setAttribute("class","buy_voucher")
       btn.addEventListener("click",function()
       {
           sendvoucher(ele)
       })

       div.append(image,name,price,btn)
       container.append(div)

   })
}

function sendvoucher(ele)
{
    var balance=userdata.wallet
    if(balance<ele.price)
    {
        alert("Sorry! insufficient balance")
    }
    else
    {
       alert("Hurray! purchase successful")
       balance=balance-ele.price
       userdata.wallet=balance
       document.querySelector("#wallet_balance").innerText=balance
       localStorage.setItem("user",JSON.stringify(userdata))


       var purchase_arr=JSON.parse(localStorage.getItem("purchase"))|| []
       purchase_arr.push(ele)
       localStorage.setItem("purchase",JSON.stringify(purchase_arr))
    }
}