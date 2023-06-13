// Import data
import { quotes } from './quotes.js'

const button = document.querySelector('#btn-generator');

button.addEventListener('click', onGetRandomQuote);


function onGetRandomQuote(){
    const quoteText = document.querySelector('.quote-text');
    const quoteAuthor = document.querySelector('.quote-author');

    const { author, quote  } = quotes[getRandomNumer()];

    quoteText.textContent = `"${ quote }"`;
    quoteAuthor.textContent = author;
}

function getRandomNumer(){
    return Math.floor( Math.random() * quotes.length );
}