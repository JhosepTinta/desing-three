const listServices = [
    {
        name: 'Seguridad Electronica',
        description: 'Vamos de la mano ofreciendote la mejor solución del mercado, trabajando conjuntamente con la marca HIKVISION. En el mundo de las alarmas de seguridad contamos con un gran aliado para brindarte la solución inalambria y alambrica, con llamada en tiempo real',
        image: 'image1.jpg'
    },
    {
        name: 'Domotica',
        description: 'Transforma tu hogar con nuestro servicio de instalaciones domóticas. Contamos con una amplia variedad de dispositivos que pueden mejorar tu día a día, brindándote comodidad, eficiencia y control total sobre tu entorno. Desde sistemas de iluminación inteligente hasta termostatos automatizados, personalizamos soluciones para hacer tu vida más fácil y conectada.',
        image: 'image1.jpg'
    },
    {
        name: 'Electricidad Domiciliaria',
        description: 'Optimiza tu hogar con nuestro servicio de electricidad domiciliaria. Ofrecemos soluciones seguras y eficientes para garantizar un suministro eléctrico confiable. Desde instalaciones y reparaciones hasta actualizaciones de sistemas, nuestro equipo experto se encarga de todo. Contamos con las mejores prácticas y tecnologías para asegurar que tu hogar esté siempre conectado de manera segura y eficiente.',
        image: 'image1.jpg'
    },
    {
        name: 'Redes',
        description: 'Garantizamos una conectividad segura y confiable en tu comercio o domicilio mediante tecnología avanzada y cables de alta calidad, asegurando que siempre estés conectado de manera segura.',
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