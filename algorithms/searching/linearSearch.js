document.addEventListener('DOMContentLoaded', () => {
  const visualizerDiv = document.getElementById('visualizer');
  const inputField = document.getElementById('inputNumbers');
  const searchField = document.getElementById('searchValue');
  const startButton = document.getElementById('startSearch');

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function drawBars(array, highlightIndex = null) {
    visualizerDiv.innerHTML = '';
    array.forEach((value, index) => {
      const bar = document.createElement('div');
      bar.classList.add('bar');
      bar.style.height = `${value * 10}px`;
      bar.style.width = '40px';
      bar.style.backgroundColor = 'skyblue';
      bar.style.margin = '2px';
      bar.style.display = 'inline-block';

      if (index === highlightIndex) {
        bar.style.backgroundColor = 'orange';
      }

      visualizerDiv.appendChild(bar);
    });
  }

  async function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
      drawBars(array, i); // Highlight the current index
      await sleep(500);

      if (array[i] === target) {
        drawBars(array, i); // Highlight found element
        alert(`Element ${target} found at index ${i}`);
        return;
      }
    }

    alert(`Element ${target} not found`);
  }

  startButton.addEventListener('click', async () => {
    const inputValues = inputField.value.split(',')
      .map(num => parseInt(num.trim()))
      .filter(num => !isNaN(num));
    const targetValue = parseInt(searchField.value.trim());

    if (inputValues.length === 0 || isNaN(targetValue)) {
      alert("Please enter valid numbers and a target value.");
      return;
    }

    drawBars(inputValues);
    await sleep(1000);
    await linearSearch(inputValues, targetValue);
  });
});
