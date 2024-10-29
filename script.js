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
        if (e.key === 'Backspace' && index > 0 && input.value.length === 0) {
            inputs[index - 1].focus();
        }
    });
});
