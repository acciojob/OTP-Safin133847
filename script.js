const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        // Move to the next input on entering a number
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        // Move back to the previous input on backspace
        if (e.key === 'Backspace') {
            if (input.value.length === 0 && index > 0) {
                inputs[index - 1].focus();
            }
        }
    });

    // Optional: Auto-focus the first input when the page loads
    if (index === 0) {
        input.focus();
    }
});
