// Function to display current date
function updateDate() {
    const dateElement = document.getElementById('current-date');
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    dateElement.textContent = new Date().toLocaleDateString('en-US', options);
}

// Update date when page loads
document.addEventListener('DOMContentLoaded', updateDate);

// Optional: Update date every minute to keep it current
setInterval(updateDate, 60000); 

// Add these functions to your existing JavaScript
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill"
];

function updateQuote() {
    const quoteElement = document.getElementById('daily-quote');
    // Get a random quote or change daily based on date
    const today = new Date();
    const quoteIndex = today.getDate() % quotes.length;
    quoteElement.textContent = quotes[quoteIndex];
}

// Update quote when page loads
document.addEventListener('DOMContentLoaded', () => {
    updateQuote();
});

// Optional: Update quote every 24 hours if page stays open
setInterval(updateQuote, 24 * 60 * 60 * 1000);