function generateBars() {
    const input = document.getElementById('inputArray').value;
    const arr = input.split(',').map(Number).sort((a, b) => a - b);
    const container = document.getElementById('visualizer');
    container.innerHTML = '';
  
    arr.forEach(num => {
      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.textContent = num;
      bar.style.height = '50px';
      bar.style.width = '30px';
      bar.style.margin = '2px';
      bar.style.backgroundColor = 'teal';
      bar.style.color = 'white';
      bar.style.textAlign = 'center';
      bar.style.display = 'inline-block';
      container.appendChild(bar);
    });
  
    // Store globally for access in search
    window.searchArray = arr;
  }
  
  function startSearch() {
    const arr = window.searchArray;
    const target = Number(document.getElementById('target').value);
    const bars = document.querySelectorAll('.bar');
    let low = 0, high = arr.length - 1;
    const result = document.getElementById('result');
  
    function step() {
      if (low > high) {
        result.textContent = `Target ${target} not found.`;
        return;
      }
  
      let mid = Math.floor((low + high) / 2);
  
      // Reset all colors
      bars.forEach(bar => (bar.style.backgroundColor = 'teal'));
  
      // Highlight mid
      bars[mid].style.backgroundColor = 'orange';
  
      setTimeout(() => {
        if (arr[mid] === target) {
          bars[mid].style.backgroundColor = 'green';
          result.textContent = `Found ${target} at index ${mid}`;
        } else if (arr[mid] < target) {
          low = mid + 1;
          step();
        } else {
          high = mid - 1;
          step();
        }
      }, 600);
    }
  
    step();
  }
  