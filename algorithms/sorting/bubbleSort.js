function generateBars() {
  const input = document.getElementById('inputArray').value;
  const arr = input.split(',').map(Number);
  const container = document.getElementById('visualizer');
  container.innerHTML = ''; // Clear old bars

  // Generate bars
  arr.forEach(num => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = `${num * 30}px`; // Scale height
    bar.style.width = '30px';
    bar.style.margin = '2px';
    bar.style.backgroundColor = 'teal';
    bar.style.display = 'inline-block';
    container.appendChild(bar);
  });

  // Save array to window for access during sort
  window.bubbleArray = arr;
}

function startSort() {
  const container = document.getElementById('visualizer');
  const arr = window.bubbleArray;
  if (!arr || arr.length === 0) return;

  let bars = container.querySelectorAll('.bar');
  let i = 0, j = 0;

  const interval = setInterval(() => {
    if (i < arr.length) {
      if (j < arr.length - i - 1) {
        if (arr[j] > arr[j + 1]) {
          // Swap array values
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

          // Swap heights
          let tempHeight = bars[j].style.height;
          bars[j].style.height = bars[j + 1].style.height;
          bars[j + 1].style.height = tempHeight;
        }
        j++;
      } else {
        j = 0;
        i++;
      }
    } else {
      clearInterval(interval);
    }
  }, 300); // animation speed
}
