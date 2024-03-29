export default binarySearch = (list, item) => {
    let min = 0;
    let max = list.length -1;

    while(min <= max) {
        const middle = (min + max) >> 1;
        if(list[middle] === item ) {
            return middle;
        } else if(item > list[middle]) {
            min = middle + 1;
        } else {
            max = middle - 1;
        }
    }

    return -1;
}