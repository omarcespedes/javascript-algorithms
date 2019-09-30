function pivot(arr, start = 0, end = arr.length+1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    const piv = arr[start]
    var swapIndex = start

    for(var i = start; i < end; i++ ) {
        if(piv > arr[i]) {
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}

function quickSort(arr, left = 0, right = arr.length -1) {
    if(left < right) {
        const pivIndex = pivot(arr, left, right)
        quickSort(arr, left, pivIndex-1)
        quickSort(arr, pivIndex+1, right)
    }
    return arr
}

export default quickSort