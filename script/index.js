let BagItems;
load();

function load(){
  let bagItemsstr = localStorage.getItem("BagItems")
  BagItems = bagItemsstr ? JSON.parse(bagItemsstr) : [];
  displayBagItemHome();
  displayItemsContainer();

}



function addToBag(itemid){
    BagItems.push(itemid);
    localStorage.setItem("BagItems", JSON.stringify(BagItems))
    // console.log(itemid)
    displayBagItemHome();
  
   
}

function displayBagItemHome() {
  let BagItemCountElement = document.querySelector('.bag_item_count');

  if (BagItems.length > 0) {
      BagItemCountElement.innerText = BagItems.length;
      BagItemCountElement.style.visibility = "visible";
  } 
}



function displayItemsContainer() {

let itemElementContainer = document.querySelector(".items_container");

if(!itemElementContainer){
  return;
}

let innerHTML = ' ';
items.forEach(item => {
    innerHTML += ` <div class="item_container">
    <img class="item_image" src="${item.item_image}" alt="">
    <div class="rating">
      ${item.rating.stars} ⭐|   ${item.rating.NoOfReview}
    </div>
    <div class="company_name">${item.company_name}</div>
    <div class="item_name">${item.item_name}</div>
    <div class="price">
      <span class="current_price">RS ${item.current_price}</span>
      <span class="original_price">RS ${item.original_price}</span>
      <span class="discount">(${item.discount}% OFF)</span>
    </div>
   <button class="btn_add_bag" onclick="addToBag('${item.id}')">Add to Bag</button>
                         
  </div> `
})

itemElementContainer.innerHTML = innerHTML;
}


// console.log(BagItems);


// localStorage.removeItem("BagItems", JSON.stringify(BagItems))