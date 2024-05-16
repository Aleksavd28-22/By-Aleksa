document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
        "In the end, it's not the years in your life that count. It's the life in your years.",
        "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.",
        "Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself.",
        "You yourself, as much as anybody in the entire universe, deserve your love and affection.",
        "How you love yourself is how you teach others to love you.",
        "You are enough. A thousand times enough.",
        "I think no matter what you look like, the key first of all is to be happy with yourself. And then you know if you want to improve things you don't like about yourself, then do it after you appreciate yourself.",
        "People who love themselves, don’t hurt other people. The more we hate ourselves, the more we want others to suffer.",
        "If you aren’t good at loving yourself, you will have a difficult time loving anyone, since you’ll resent the time and energy you give another person that you aren’t even giving to yourself.",
        "Learn to be alone without being lonely. Learn to admire your beauty without finding fault. Learn to love yourself without the love of others."
    ];

    const quoteElement = document.getElementById('quote');
    const refreshButton = document.getElementById('refresh-button');

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function setQuote() {
        quoteElement.textContent = getRandomQuote();
    }

    refreshButton.addEventListener('click', setQuote);

    // Set an initial quote
    setQuote();
});
