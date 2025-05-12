document.addEventListener('DOMContentLoaded', () => {
  const visualizerDiv = document.getElementById('visualizer');
  const inputField = document.getElementById('inputNumbers');
  const startButton = document.getElementById('startSort');

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function drawBars(array, highlightIndices = [], sortedIndices = []) {
    visualizerDiv.innerHTML = '';
    array.forEach((value, index) => {
      const bar = document.createElement('div');
      bar.classList.add('bar');
      bar.style.height = `${value * 10}px`;
      bar.style.width = '30px';

      if (highlightIndices.includes(index)) {
        bar.classList.add('highlight');
      } else if (sortedIndices.includes(index)) {
        bar.classList.add('sorted');
      }

      visualizerDiv.appendChild(bar);
    });
  }

  async function mergeSort(array, left = 0, right = array.length - 1, sortedIndices = []) {
    if (left >= right) {
      if (!sortedIndices.includes(left)) sortedIndices.push(left);
      drawBars(array, [], sortedIndices);
      return;
    }

    const mid = Math.floor((left + right) / 2);
    await mergeSort(array, left, mid, sortedIndices);
    await mergeSort(array, mid + 1, right, sortedIndices);
    await merge(array, left, mid, right, sortedIndices);
  }

  async function merge(array, left, mid, right, sortedIndices) {
    const leftArr = array.slice(left, mid + 1);
    const rightArr = array.slice(mid + 1, right + 1);
    let i = 0, j = 0, k = left;

    while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] < rightArr[j]) {
        array[k] = leftArr[i];
        i++;
      } else {
        array[k] = rightArr[j];
        j++;
      }
      drawBars(array, [k], sortedIndices);
      await sleep(300);
      k++;
    }

    while (i < leftArr.length) {
      array[k] = leftArr[i];
      i++;
      drawBars(array, [k], sortedIndices);
      await sleep(300);
      k++;
    }

    while (j < rightArr.length) {
      array[k] = rightArr[j];
      j++;
      drawBars(array, [k], sortedIndices);
      await sleep(300);
      k++;
    }

    for (let idx = left; idx <= right; idx++) {
      if (!sortedIndices.includes(idx)) sortedIndices.push(idx);
    }

    drawBars(array, [], sortedIndices);
  }

  startButton.addEventListener('click', async () => {
    const inputValues = inputField.value.split(',')
      .map(num => parseInt(num.trim()))
      .filter(num => !isNaN(num));

    if (inputValues.length === 0) {
      alert("Please enter valid numbers to sort.");
      return;
    }

    drawBars(inputValues);
    await sleep(1000);
    await mergeSort(inputValues);
    drawBars(inputValues, [], Array.from(inputValues.keys()));
  });
});
