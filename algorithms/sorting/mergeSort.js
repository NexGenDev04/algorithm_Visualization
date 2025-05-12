function mergeSort(arr, left, right, container) {
    if (left < right) {
      let middle = Math.floor((left + right) / 2);
      mergeSort(arr, left, middle, container);
      mergeSort(arr, middle + 1, right, container);
      merge(arr, left, middle, right, container);
    }
  }
  
  function merge(arr, left, middle, right, container) {
    let leftArray = arr.slice(left, middle + 1);
    let rightArray = arr.slice(middle + 1, right + 1);
    let i = 0, j = 0, k = left;
  
    while (i < leftArray.length && j < rightArray.length) {
      if (leftArray[i] <= rightArray[j]) {
        arr[k] = leftArray[i];
        k++;
        i++;
      } else {
        arr[k] = rightArray[j];
        k++;
        j++;
      }
    }
  
    while (i < leftArray.length) {
      arr[k] = leftArray[i];
      k++;
      i++;
    }
  
    while (j < rightArray.length) {
      arr[k] = rightArray[j];
      k++;
      j++;
    }
  
    // Update the visualization bars
    const bars = container.querySelectorAll('.bar');
    for (let i = 0; i < arr.length; i++) {
      bars[i].style.height = `${arr[i] * 30}px`;
    }
  }
  
  module.exports = mergeSort; // Export the function
  