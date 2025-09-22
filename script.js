function cleanInput(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

function isPalindrome(str) {
    const cleaned = cleanInput(str);
    return cleaned === cleaned.split('').reverse().join('');
}

function displayResult(input, isPalin) {
    const result = document.getElementById('result');
    result.textContent = `${input} is ${isPalin ? '' : 'not '}a palindrome`;
}

document.getElementById('check-btn').addEventListener('click', () => {
    const input = document.getElementById('text-input').value.trim();
    if (!input) {
        alert('Please input a value');
        return;
    }
    displayResult(input, isPalindrome(input));
});
