const listServices = [
    {
        name: 'Seguridad Electronica',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae inventore ipsam autem. Eveniet fuga aliquam ullam ad vero impedit. Id fuga ipsum saepe quasi incidunt eos molestiae libero facere!',
        image: 'image1.jpg'
    },
    {
        name: 'Domotica',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae inventore ipsam autem. Eveniet fuga aliquam ullam ad vero impedit. Id fuga ipsum saepe quasi incidunt eos molestiae libero facere!',
        image: 'image1.jpg'
    },
    {
        name: 'Electricidad Domiciliaria',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae inventore ipsam autem. Eveniet fuga aliquam ullam ad vero impedit. Id fuga ipsum saepe quasi incidunt eos molestiae libero facere!',
        image: 'image1.jpg'
    },
    {
        name: 'Redes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae inventore ipsam autem. Eveniet fuga aliquam ullam ad vero impedit. Id fuga ipsum saepe quasi incidunt eos molestiae libero facere!',
        image: 'image1.jpg'
    }
];

const listServiceElement = document.querySelector('.services-continaer');

// console.log(listServiceElement)

// listServiceElement.querySelectorAll('*').forEach(element => {
//     console.log(element)
// });

const serviceTitle = document.querySelector('.service-title');
const serviceDescription = document.querySelector('.service-description');
const serviceImg = document.querySelector('.service-img');

const posInit = 0;
const listPaginator = document.querySelector('.service-paginator');

let aux = true;
for (let index = 0; index < listServices.length; index++) {
    const span = document.createElement('span');
    if (aux) {
        span.setAttribute('class','paginator-color-on');
        aux = false;
    } else {
        span.setAttribute('class','paginator-color-off');
    }
    listPaginator.appendChild(span);
}

serviceTitle.textContent = listServices[posInit]['name'];
serviceDescription.textContent = listServices[posInit]['description'];
const listPaginatorUpdate = listPaginator.querySelectorAll('*');
//counter
let counter = 1;
setInterval(() => {
    serviceTitle.textContent = listServices[counter]['name'];
    serviceDescription.textContent = listServices[counter]['description'];
    listPaginatorUpdate[counter].setAttribute('class','paginator-color-on');
    if (counter === 0) {
        listPaginatorUpdate[listServices.length-1].setAttribute('class','paginator-color-off');
    }else {
        listPaginatorUpdate[counter-1].setAttribute('class','paginator-color-off');
    }
    counter++;
    if (counter === listServices.length) {
        counter = 0;
    }
}, 3000);


//function values
const listCard = document.querySelectorAll(".value");
console.log(listCard)
listCard.forEach((card)=>{
    card.addEventListener('mouseover',()=>{
        const img = card.children[0];
        const title = card.children[1];
        const text = card.children[2];
        img.classList.add('hidden');
        title.classList.add('hidden');
        text.classList.remove('hidden');
        card.classList.add('value-background');
    })
    card.addEventListener('mouseout',()=>{
        const img = card.children[0];
        const title = card.children[1];
        const text = card.children[2];
        img.classList.remove('hidden');
        title.classList.remove('hidden');
        text.classList.add('hidden');
        card.classList.remove('value-background');
    })
})

window.onscroll = function () {
    var y = window.scrollY;
    if (y > 30) {
      var d = document.getElementById("header-container");
      d.classList.add("ss")
      console.log("cambiar padding",d.classList)
    } else {
      var s = document.getElementById("header-container");
      s.classList.remove("ss");
      console.log("todo normal",s)
    }
  };