console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

const maxItems =5;


function addItem(item){
        if(isFull()==false){
            basket.push(item);
            return true;
        }
        else{
            return false;
        }
    }
   


function listItems(){
    let lengthOfBasket = basket.length;
    for(let i =0; i<lengthOfBasket;i++){
        console.log(basket[i]);
    }

    //tried this first, but it just returned 0.
    // for(item in basket){
    //     console.log(item);
    // }
}

function empty(){
    basket=[];
}

function runAfterTest(){
    console.log('basket item count: '+basket.length);
    console.log('Basket is now: '+ basket);
    console.log('----')
}
//----------------------------stretch------------------
function isFull(){
    if(basket.length<maxItems){
        return false;  
    }
    else{
        return true;
    }
}
function removeItem(item){

}

//---------------------------------------------------tests-------------------------
//test adding 1 item
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
runAfterTest();

//test super long string
let thisstringcouldBeLongerAswell = 'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf';
console.log('adding item very long string (expect true)', addItem(thisstringcouldBeLongerAswell))
runAfterTest();

//test number with lots of decimals
let numberWithLotsOfDecimals = 0.0000000000000000000000000000000000000000000045;
console.log('test number with lots of decimals (expect true)', addItem(numberWithLotsOfDecimals))
runAfterTest();

//test adding empty string
console.log('test: add empty string \'\'');
console.log('Adding \'\' (expect true)', addItem(''));
runAfterTest();

//test call additem without arguments
console.log('test: add missing arg');
console.log('Adding item with no argument, (expect true)', addItem());
runAfterTest();

//list items in basket
console.log(`Basket is ${basket}`);
console.log('listing items in basket with a loop');
listItems();
runAfterTest();

//testing listitems call on empty basket
console.log('empty out basket, then call listItems');
empty();
listItems();
runAfterTest();

//test listitems with more than 1 items in basket
console.log('adding 4 items');
console.log(`Basket is ${basket}`);
for(let i =0; i<5;i++){
    addItem('item number'+i);
}
listItems();
runAfterTest();


//redundant test but for clarifications, test to make sure basket becomes empty
console.log('calling empty, basket should be empty')
empty();
console.log(`basket is ${basket}`);
runAfterTest();

//-------------------stretch tests-----------------------

//test to add item 1 greater than max
console.log('calling empty first');
empty();
console.log('trying to add 10 items, (should say true 5 times, then false 5 times');
for(let i =0; i<10;i++){
   console.log( addItem('item number: '+i));
}
runAfterTest();