let arr = [];

function generateBars() {
    const input = document.getElementById('inputArray').value;
    arr = input.split(',').map(Number); // Save to global variable
    const visualizer = document.getElementById('visualizer');
    visualizer.innerHTML = '';

    arr.forEach(num => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${num * 5}px`;
        bar.style.width = '30px';
        bar.style.margin = '2px';
        bar.style.backgroundColor = 'teal';
        visualizer.appendChild(bar);
    });
}

function startSort() {
    if (arr.length === 0) return;

    let bars = document.querySelectorAll('.bar');
    let i = 0, j = 0;

    const interval = setInterval(() => {
        if (i < arr.length) {
            if (j < arr.length - i - 1) {
                if (arr[j] > arr[j + 1]) {
                    // Swap array values
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

                    // Swap bar heights
                    [bars[j].style.height, bars[j + 1].style.height] = 
                        [bars[j + 1].style.height, bars[j].style.height];
                }
                j++;
            } else {
                j = 0;
                i++;
            }
        } else {
            clearInterval(interval);
        }
    }, 300);
}
