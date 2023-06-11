// Imports
import { questions } from './questions.js';

// Selectors of DOM
const questionsContainer = document.querySelector('.faq-container');

const onMain = () => {
    const onQuestion = ( { subtitle, information } ) => {
        
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        const questionTop = document.createElement('div');
        questionTop.classList.add('question-top');

        // Remove all the classes actives when someone is clicked
        questionTop.addEventListener('click', () => {

            const items = document.querySelectorAll('.answer');
            items.forEach(( item ) => {
                item.classList.remove('answer-active');
            });

            answerElement.classList.add('answer-active');
        });

        const questionSubtitle = document.createElement('h3');
        questionSubtitle.classList.add('question-subtitle');
        questionSubtitle.textContent = subtitle;

        const arrowIcon = document.createElement('img');
        arrowIcon.classList.add('faq-icon');
        arrowIcon.src = './icons/down.svg';

        const answerElement = document.createElement('div');
        answerElement.classList.add('answer');

        const answerParragraph = document.createElement('p');
        answerParragraph.textContent = information;

        // Order elements
        answerElement.appendChild(answerParragraph);
        questionTop.appendChild(questionSubtitle);
        questionTop.appendChild(arrowIcon);

        questionElement.appendChild(questionTop);
        questionElement.appendChild(answerElement);

        questionsContainer.appendChild(questionElement);

        return questionsContainer;

    }

    questions.forEach( onQuestion );

   
}

onMain();