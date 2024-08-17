const containerDiv = Object.assign(document.createElement('div'),
{className:'container'});
const headerDiv = Object.assign(document.createElement('div'), {className:'header'});
const h2Element = Object.assign(document.createElement('h2'),
{innerHTML: "Quote Generator"});
const mainContentDiv = Object.assign(document.createElement('div'), {className: 'main-content'});
const textAreaContent = Object.assign(document.createElement('div'),
{className:'text-area'});
const quoteSpan = Object.assign(document.createElement('span'),
{className: 'quote'}, {innerHTML: ` "I try to do my best, but sometimes my best isn't good emough!"`});
const person = Object.assign(document.createElement('div'), {className: 'person'}, {innerHTML: "James Bond"})
const buttonArea = Object.assign(document.createElement('div'),
{className: 'button-area'});
const buttonElement = Object.assign(document.createElement('button'),
{id:'new-quote'}, {innerText: "New Quote"});

containerDiv.appendChild(headerDiv);
headerDiv.appendChild(h2Element);
containerDiv.appendChild(mainContentDiv);
mainContentDiv.appendChild(textAreaContent);
textAreaContent.appendChild(quoteSpan);
mainContentDiv.appendChild(person);
buttonArea.appendChild(buttonElement);
mainContentDiv.appendChild(buttonArea);
document.body.appendChild(containerDiv);