// Select elements
const visualizerDiv = document.getElementById('visualizer');
const inputField = document.getElementById('inputNumbers');
const startButton = document.getElementById('startSort');

// Function to sleep for animation delay
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to draw the bars based on array values
function drawBars(array, highlightIndices = []) {
  visualizerDiv.innerHTML = '';
  array.forEach((value, index) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value * 10}px`;
    if (highlightIndices.includes(index)) {
      bar.classList.add('highlight');
    }
    visualizerDiv.appendChild(bar);
  });
}

// Merge Sort with animation
async function mergeSort(array, left = 0, right = array.length - 1) {
  if (left >= right) return;

  const mid = Math.floor((left + right) / 2);
  await mergeSort(array, left, mid);
  await mergeSort(array, mid + 1, right);
  await merge(array, left, mid, right);
}

async function merge(array, left, mid, right) {
  let leftArr = array.slice(left, mid + 1);
  let rightArr = array.slice(mid + 1, right + 1);
  let i = 0, j = 0, k = left;

  while (i < leftArr.length && j < rightArr.length) {
    array[k++] = (leftArr[i] < rightArr[j]) ? leftArr[i++] : rightArr[j++];
    drawBars(array, [k - 1]);
    await sleep(300);
  }

  while (i < leftArr.length) {
    array[k++] = leftArr[i++];
    drawBars(array, [k - 1]);
    await sleep(300);
  }

  while (j < rightArr.length) {
    array[k++] = rightArr[j++];
    drawBars(array, [k - 1]);
    await sleep(300);
  }
}

// Start sorting when button is clicked
startButton.addEventListener('click', async () => {
  const inputValues = inputField.value.split(',')
    .map(num => parseInt(num.trim()))
    .filter(num => !isNaN(num));

  if (inputValues.length === 0) {
    alert("Please enter valid numbers to sort.");
    return;
  }

  drawBars(inputValues);
  await sleep(1000); // Wait before starting
  await mergeSort(inputValues);
  drawBars(inputValues); // Final state
});
