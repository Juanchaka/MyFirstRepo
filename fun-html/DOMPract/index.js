const containerDiv = document.createElement('div');
containerDiv.classList.add('container');

const headerDiv = document.createElement('div');
headerDiv.classList.add('header');

const h2Element = document.createElement('h2');
h2Element.innerHTML = "Quote Generator";

const mainContentDiv = document.createElement('div');
mainContentDiv.classList.add('main-content');

const textAreaContent = document.createElement('div');
textAreaContent.classList.add('text-area');

const quoteSpan = document.createElement('span');
quoteSpan.classList.add('quote');
quoteSpan.innerHTML = ` "I try to do my best, but sometimes my best isn't good emough!"`

const person = document.createElement('div');
person.classList.add('person');
person.innerHTML = "James Bond"

const buttonArea = document.createElement('div');
buttonArea.classList.add('button-area');

const buttonElement = document.createElement('button');
buttonElement.setAttribute('id','new-quote');
buttonElement.innerText = "New Quote"

console.log(containerDiv);
console.log(headerDiv);
console.log(h2Element);
console.log(mainContentDiv);
console.log(textAreaContent);
console.log(quoteSpan);
console.log(person);
console.log(buttonArea);
console.log(buttonElement);


containerDiv.appendChild(headerDiv);
headerDiv.appendChild(h2Element);
containerDiv.appendChild(mainContentDiv);
mainContentDiv.appendChild(textAreaContent);
textAreaContent.appendChild(quoteSpan);
mainContentDiv.appendChild(person);
buttonArea.appendChild(buttonElement);
mainContentDiv.appendChild(buttonArea);
document.body.appendChild(containerDiv);