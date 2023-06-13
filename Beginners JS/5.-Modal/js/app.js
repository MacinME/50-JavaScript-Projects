import { information } from './notifications.js';

const notifications = document.querySelector('.results-notification');
const card = document.querySelector('#card-container');
const btnModal = document.querySelector('.notification');
const btnClose = document.querySelector('.close-button');

const onClearHTML = () => {
    while(notifications.firstChild){
        notifications.removeChild(notifications.firstChild)
    }
}

const onUpdateNotifications = () => {

    const onCreateHTML = ( { photo, username, action, event, time, status } ) => {

        // Create parents HTML elements
        const item = document.createElement('div');
        const imageContainer = document.createElement('div');
        const information = document.createElement('div');

        // Create children HTML elements
        const img = document.createElement('img');
        const indicator = document.createElement('span');
        const userName = document.createElement('p');
        const actionText = document.createElement('span');
        const eventText = document.createElement('span');
        const timeText = document.createElement('p');

        // Add classes CSS
        item.classList.add('item');
        imageContainer.classList.add('image');
        information.classList.add('information');

        img.classList.add('profile');
        indicator.classList.add('indicator', `${ status ? 'online' : 'offline'}`);
        userName.classList.add('username');
        actionText.classList.add('action');
        timeText.classList.add('time');

        // Set values
        img.src = photo;
        userName.textContent = username;
        actionText.textContent = action;
        eventText.textContent = event;
        timeText.textContent = time;
        
        imageContainer.appendChild(img);
        imageContainer.appendChild(indicator);

        userName.appendChild(actionText);
        userName.appendChild(eventText);
        information.appendChild(userName);
        information.appendChild(timeText);

        item.appendChild(imageContainer);
        item.appendChild(information);

        notifications.appendChild(item);

        
    }

    information.forEach( onCreateHTML );
}


btnModal.addEventListener('click', () => {
    card.classList.remove('hidden');
    card.classList.add('active');
    onUpdateNotifications();
});

btnClose.addEventListener('click', () => {
    card.classList.add('hidden');
    onClearHTML();
});