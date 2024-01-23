const list = [1,2,3,4,5,6,3,5,];
console.log(list);

////    using filter function   ///////

function removeduplicate(array){
    return array.filter((el, index) => array.indexOf(el) === index);
}
console.log(removeduplicate(list));

///////     using foreach loop      ////////

