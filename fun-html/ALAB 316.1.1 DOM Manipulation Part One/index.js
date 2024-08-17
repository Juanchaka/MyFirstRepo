// const body = document.querySelector("body");

const div1 = document.createElement("div");
const div2 = document.createElement("div");
const ol = document.createElement("ol");
const ul = document.createElement("ul");

document.body.appendChild(div1);
div1.appendChild(ol);

document.body.appendChild(div2);
div2.appendChild(ul);


// const ol = document.body
//     .appendChild(document.createElement('div'))
//     .appendChild(document.createElement('ol'))

// const ul = document.body
// .appendChild(document.createElement('div'))
// .appendChild(document.createElement('ul'))

for(i = 0; i <= 2; i++){
    ol.appendChild(document.createElement("li"));
    ul.appendChild(document.createElement("li"));
};

div1.style.backgroundColor = 'lightblue';

aElement = document.createElement('a');
aElement.setAttribute('href', 'www.google.com')
console.log(aElement);