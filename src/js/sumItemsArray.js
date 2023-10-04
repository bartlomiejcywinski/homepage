function sumItemsArray(array){
    let sum = 0;
    for(element of array){
        sum += element;
    }
    return sum;
}

export {sumItemsArray};