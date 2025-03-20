//your JS code here. If required.
// ✅ Function to simulate delay using a Promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ✅ Function to handle the transformation process
function startProcess() {
    const input = document.getElementById('ip');
    const output = document.getElementById('output');
    
    // Clear previous output
    output.innerHTML = '';

    // Get the input value and convert to a number
    let number = Number(input.value);

    if (isNaN(number)) {
        output.innerHTML = 'Please enter a valid number';
        return;
    }

    // ✅ First Promise: Display initial value after 2 seconds
    delay(2000)
        .then(() => {
            output.innerHTML = `Result: ${number}`;
            return number * 2; // Multiply by 2
        })

        // ✅ Second Promise: Multiply by 2 after 1 second
        .then(result => delay(1000).then(() => {
            number = result;
            output.innerHTML = `Result: ${number}`;
            return number - 3; // Subtract 3
        }))

        // ✅ Third Promise: Subtract 3 after 1 second
        .then(result => delay(1000).then(() => {
            number = result;
            output.innerHTML = `Result: ${number}`;
            return number / 2; // Divide by 2
        }))

        // ✅ Fourth Promise: Divide by 2 after 1 second
        .then(result => delay(1000).then(() => {
            number = result;
            output.innerHTML = `Result: ${number}`;
            return number + 10; // Add 10
        }))

        // ✅ Fifth Promise: Add 10 after 1 second
        .then(result => delay(1000).then(() => {
            number = result;
            output.innerHTML = `Final Result: ${number}`;
        }));
}

// ✅ Add event listener to button
document.getElementById('btn').addEventListener('click', startProcess);
