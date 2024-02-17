// script.js
document.addEventListener('DOMContentLoaded', function() {
    const word = "Controller"; // Change to the word you want to split and hide
    const splitParts = splitWordIntoParts(word, 5); // Split the word into 5 parts

    function splitWordIntoParts(word, n) {
        const partLength = Math.ceil(word.length / n);
        const parts = [];

        for (let i = 0; i < n; i++) {
            const start = partLength * i;
            let part = word.substring(start, start + partLength);
            parts.push(part);
        }

        return parts;
    }

    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    function placeWordPart(part) {
        const contentDiv = document.getElementById('content');
        const partSpan = document.createElement('span');
        partSpan.classList.add('hidden-word');
        const reversedPart = reverseString(part); // Reverse the string part
        partSpan.textContent = reversedPart;

        const maxX = contentDiv.offsetWidth - 50; // Adjust based on your layout
        const maxY = contentDiv.offsetHeight - 20; // Adjust based on your layout
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        partSpan.style.left = `${randomX}px`;
        partSpan.style.top = `${randomY}px`;

        contentDiv.appendChild(partSpan);
    }

    splitParts.forEach(part => placeWordPart(part));
});


document.addEventListener("DOMContentLoaded", function() {
  if (performance.getEntriesByType("navigation")[0].type === "reload") {
    console.log('Look beyond what can be seen by human eyes');
  } else {
    console.log('Try Reloading');
  }
});
