const shoppingCart = (function() {
    let basket = [];
    return {
        // upsertItem(item) add an item to basket if it doesn't exist, or update if exist.
        // getItemsCount() returns the total number of items in the basket.
        // getTotalPrice() calculates the total price of items. Each item price is the product's price multiply item's count.
        // removeItemById(id) removes an item from the basket.

        upsertItem: function(item) {
            let itemIndex;
            itemIndex = basket.findIndex(index => index.id === item.id);
            if(itemIndex === -1){
                basket.push(item);
            }else {
                basket[itemIndex] = item;
            }
        },
        getItemsCount: function() {
            return basket.length;
        },
        getTotalPrice:function(){
            let count = 0;
            for (let i = 0; i < basket.length; i++) {
                count += basket[i].product.price * basket[i].count;
            }
            return count;
        },
        removeItemById : function (id){
            let index = basket.findIndex(item => item.id === id);
            if (index !== -1) {
                basket.splice(index, 1);
            }
        }

    };
})();

const item1 = { id: 0, product: { id: 1, name: 'Coffee', description: 'Coffee Grounds from Ethiopia', price: 9 }, count: 1 }
const item2 = { id: 1, product: { id: 2, name: 'Tea', description: 'Oonlong Tea from China', price: 10 }, count: 5 }
const item3 = { id: 2, product: { id: 3, name: 'Bottled Water', description: 'Bottled Water from US', price: 2 }, count: 30 }

shoppingCart.upsertItem(item1);
shoppingCart.upsertItem(item2);
shoppingCart.upsertItem(item3);
console.log("Expected Result: 119 : " + shoppingCart.getTotalPrice()); //Expected Result: 119
item3.product.name = 'Himilayan Water';
item3.product.price = 10;
shoppingCart.upsertItem(item3);

console.log("Expected Result: 3 : " + shoppingCart.getItemsCount()); //Expected Result: 3
console.log("Expected Result: 359 : " + shoppingCart.getTotalPrice()); //Expected Result: 359
shoppingCart.removeItemById(1);
console.log("Expected Result: 2 : " + shoppingCart.getItemsCount()); //Expected Result: 2
console.log("Expected Result: 309 : "  + shoppingCart.getTotalPrice()); //Expected Result: 309