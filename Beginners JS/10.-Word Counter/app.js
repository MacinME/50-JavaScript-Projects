const sheet = document.querySelector('#sheet');
const charctersHTML = document.querySelector('.characters');
const wordsHTML = document.querySelector('.words');

sheet.addEventListener('input', onCounter);

function onCounter(str){
    charctersHTML.textContent = (str.target.value).length;
    wordsHTML.textContent = (str.target.value).split(' ').filter( word => word !== '').length;
}