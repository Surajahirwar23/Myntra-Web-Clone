
const CONVENIENCE_FEES = 99;
let bagItemObject;
onload()
function onload(){
  dispItems()
  displayBagItems()
  displayBagSummary()
  
}
function dispItems(){
  console.log(BagItems)
  bagItemObject= BagItems.map(itemId =>{
    for(let i = 0; i<items.length; i++){
      if(itemId === items[i].id){
        return items[i];
      }
      
    }
  })
  console.log(bagItemObject)
}




function displayBagItems(){
  let bagContainer = document.querySelector('.bag-items-container')
let html = '';
bagItemObject.forEach(element => {
  html += generateHtml(element);
});
bagContainer.innerHTML = html;
}

function removeFromBag(itemId){
  BagItems =  BagItems.filter(bagitemid => bagitemid != itemId);
 localStorage.setItem("BagItems", JSON.stringify(BagItems))
 dispItems();
 displayBagItemHome()
 displayBagItems();
 displayBagSummary()

  
}

function generateHtml(item){
return `<div class="bag-item-container">
<div class="item-left-part">
  <img class="bag-item-img" src="./${item.item_image}">
</div>
<div class="item-right-part">
  <div class="company">${item.company_name}</div>
  <div class="item-name">${item.item_name}</div>
  <div class="price-container">
    <span class="current-price">Rs ${item.current_price}</span>
    <span class="original-price">Rs ${item.original_price}</span>
    <span class="discount-percentage">(${item.discount}% OFF)</span>
  </div>
 
</div>

<div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
</div>`;
 
}



function displayBagSummary(){
  let bagSummaryContainer = document.querySelector(".bag-summary");


  let totalItem = bagItemObject.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  bagItemObject.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
  

  bagSummaryContainer.innerHTML = `
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹${totalMRP}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">₹99</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹${finalPayment}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>
  `;
}