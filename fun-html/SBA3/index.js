const createElement = (tag, attributes = {}, ...children) => {
    const element = document.createElement(tag);
    Object.assign(element, attributes);
    children.forEach(child => element.appendChild(child));
    return element;
  };
const containerDiv = createElement('div', { className: 'container' },
    createElement('div', { className: 'header' },
    createElement('h2', { innerHTML: "Quote Generator" })
    ),
    createElement('div', { className: 'main-content' },
    createElement('div', { className: 'text-area' },
    createElement('span', { className: 'quote', innerHTML: `"I try to do my best, but sometimes my best isn't good enough!"` })
    ),
    createElement('div', { className: 'person', innerHTML: "James Bond" }),
    createElement('div', { className: 'button-area' },
      createElement('button', { id: 'new-quote', innerText: "New Quote" })
    )
    )
);

document.body.appendChild(containerDiv);

const btn = document.getElementById('new-quote');
console.log(btn);
const quote = document.querySelector('.quote');
console.log(quote);
const person = document.querySelectorAll('.person');
console.log(person);

const quoteList = [
  { quote: "The only limit to our realization of tomorrow is our doubts of today.", person: "Franklin D. Roosevelt" },
  { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", person: "Martin Luther King Jr." },
  { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", person: "Nelson Mandela" },
  { quote: "Life is what happens when you're busy making other plans.", person: "John Lennon" },
  { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", person: "Ralph Waldo Emerson" },
  { quote: "Get busy living or get busy dying.", person: "Stephen King" },
  { quote: "The purpose of our lives is to be happy.", person: "Dalai Lama" },
  { quote: "You only live once, but if you do it right, once is enough.", person: "Mae West" },
  { quote: "The unexamined life is not worth living.", person: "Socrates" },
  { quote: "To be, or not to be, that is the question.", person: "William Shakespeare" },
  { quote: "Be yourself; everyone else is already taken.", person: "Oscar Wilde" },
  { quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", person: "Albert Einstein" },
  { quote: "A person who never made a mistake never tried anything new.", person: "Albert Einstein" },
  { quote: "You must be the change you wish to see in the world.", person: "Mahatma Gandhi" },
  { quote: "To love and be loved is to feel the sun from both sides.", person: "David Viscott" },
  { quote: "I have not failed. I've just found 10,000 ways that won't work.", person: "Thomas Edison" },
  { quote: "The only thing we have to fear is fear itself.", person: "Franklin D. Roosevelt" },
  { quote: "The journey of a thousand miles begins with one step.", person: "Lao Tzu" },
  { quote: "The best way to predict your future is to create it.", person: "Peter Drucker" },
  { quote: "It does not do to dwell on dreams and forget to live.", person: "J.K. Rowling" },
  { quote: "In three words I can sum up everything I've learned about life: it goes on.", person: "Robert Frost" },
  { quote: "Life is really simple, but we insist on making it complicated.", person: "Confucius" },
  { quote: "Be the change that you wish to see in the world.", person: "Mahatma Gandhi" },
  { quote: "You miss 100% of the shots you don't take.", person: "Wayne Gretzky" },
  { quote: "Whether you think you can or you think you can't, you're right.", person: "Henry Ford" },
  { quote: "The greatest wealth is to live content with little.", person: "Plato" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", person: "Winston Churchill" },
  { quote: "The only way to do great work is to love what you do.", person: "Steve Jobs" },
  { quote: "The only true wisdom is in knowing you know nothing.", person: "Socrates" },
  { quote: "To handle yourself, use your head; to handle others, use your heart.", person: "Eleanor Roosevelt" },
  { quote: "We cannot solve problems with the kind of thinking we employed when we came up with them.", person: "Albert Einstein" },
  { quote: "The harder I work, the luckier I get.", person: "Samuel Goldwyn" },
  { quote: "If you tell the truth, you don't have to remember anything.", person: "Mark Twain" },
  { quote: "The only impossible journey is the one you never begin.", person: "Tony Robbins" },
  { quote: "The best revenge is massive success.", person: "Frank Sinatra" },
  { quote: "You only live once, but if you do it right, once is enough.", person: "Mae West" },
  { quote: "Be yourself; everyone else is already taken.", person: "Oscar Wilde" },
  { quote: "Everything has beauty, but not everyone can see.", person: "Confucius" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", person: "Confucius" },
  { quote: "If you want to lift yourself up, lift up someone else.", person: "Booker T. Washington" },
  { quote: "You must do the things you think you cannot do.", person: "Eleanor Roosevelt" },
  { quote: "The best way to find yourself is to lose yourself in the service of others.", person: "Mahatma Gandhi" },
  { quote: "You can't use up creativity. The more you use, the more you have.", person: "Maya Angelou" },
  { quote: "Life is either a daring adventure or nothing at all.", person: "Helen Keller" },
  { quote: "It is not the length of life, but the depth of life.", person: "Ralph Waldo Emerson" },
  { quote: "If you want to achieve greatness stop asking for permission.", person: "Anonymous" },
  { quote: "Everything you've ever wanted is on the other side of fear.", person: "George Addair" },
  { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", person: "Ralph Waldo Emerson" },
  { quote: "Success usually comes to those who are too busy to be looking for it.", person: "Henry David Thoreau" },
  { quote: "I find that the harder I work, the more luck I seem to have.", person: "Thomas Jefferson" },
  { quote: "Opportunities don't happen. You create them.", person: "Chris Grosser" },
  { quote: "You do not find the happy life. You make it.", person: "Camilla E. Kimball" },
  { quote: "Happiness is not something ready made. It comes from your own actions.", person: "Dalai Lama" },
  { quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", person: "Ralph Waldo Emerson" },
  { quote: "Act as if what you do makes a difference. It does.", person: "William James" },
  { quote: "If you can dream it, you can do it.", person: "Walt Disney" },
  { quote: "Do not wait to strike till the iron is hot, but make it hot by striking.", person: "William Butler Yeats" },
  { quote: "I am not a product of my circumstances. I am a product of my decisions.", person: "Stephen R. Covey" },
  { quote: "The only person you are destined to become is the person you decide to be.", person: "Ralph Waldo Emerson" },
  { quote: "We must use time creatively, and forever realize that the time is always ripe to do right.", person: "Martin Luther King Jr." },
  { quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.", person: "Brian Tracy" }
];



//2nd event
//hover over main content and header and make the event provide a box-shadow: 0 0 10px rgb(202, 86, 86);

//3rd event
//test if the button active state can be changed instead of using CSS, but not necessary

//OLD code to create elements and then append each element to the parent and then to the body - refactored to complete steps in a function then return the elements and finally append everything in one step.
// const containerDiv = Object.assign(document.createElement('div'),
// {className:'container'});
// const headerDiv = Object.assign(document.createElement('div'), {className:'header'});
// const h2Element = Object.assign(document.createElement('h2'),
// {innerHTML: "Quote Generator"});
// const mainContentDiv = Object.assign(document.createElement('div'), {className: 'main-content'});
// const textAreaContent = Object.assign(document.createElement('div'),
// {className:'text-area'});
// const quoteSpan = Object.assign(document.createElement('span'),
// {className: 'quote'}, {innerHTML: ` "I try to do my best, but sometimes my best isn't good emough!"`});
// const person = Object.assign(document.createElement('div'), {className: 'person'}, {innerHTML: "James Bond"})
// const buttonArea = Object.assign(document.createElement('div'),
// {className: 'button-area'});
// const buttonElement = Object.assign(document.createElement('button'),
// {id:'new-quote'}, {innerText: "New Quote"});

// containerDiv.appendChild(headerDiv);
// headerDiv.appendChild(h2Element);
// containerDiv.appendChild(mainContentDiv);
// mainContentDiv.appendChild(textAreaContent);
// textAreaContent.appendChild(quoteSpan);
// mainContentDiv.appendChild(person);
// buttonArea.appendChild(buttonElement);
// mainContentDiv.appendChild(buttonArea);
// document.body.appendChild(containerDiv);