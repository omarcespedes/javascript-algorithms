function merge(arr1, arr2) {
    let result = [];
    while(arr1.length && arr2.length) {
        if(arr1[0] > arr2[0]) {
            result.push(arr2.shift())
        } else if(arr1[0] < arr2[0]) {
            result.push(arr1.shift())
        } else {
            result.push(arr1.shift())
            result.push(arr2.shift())
        }
    }
    if(arr1.length) return result.concat(arr1)
    if(arr2.length) return result.concat(arr2)
    return result
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr
    const mid = arr.length >> 1
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

export default mergeSort