// common string methods

// let email = 'mario@thenetninja.co.uk';

// let result = email.lastIndexOf('n');

// let result = email.slice(5,12);

// let result = email.substr(5,12);

//let result = email.replace('m', 'w');

// let result = email.replace('n', 'w');


// let result = email.slice(0,5);
// let result = email.substr(5,12)
// let result = email.replace('m', 'o');


// let radius = 10;
// const pi = 3.14;

// // math operators +, -, *, **, %
// let result = pi * radius**2;

// console.log(result);

// let likes = 10;
// // likes++;
// // likes += 10;
// likes /= 2;
// console.log(likes)



// const title = 'Best rades of 2019';
// const author = 'Mario';
// const likes = 320;


// // let result = 'The blog called ' + title + ' has ' + likes + 'liskes';
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// let ninjas = shaum', 'ryu', 'ch, price: price.product'n-li'];;

// // ninjas] = 'ken';
// // c, price: price.product1nsole.log(ninjas[1]);;

// // console.log(ninjas.length);

// // let result = ninjas.join(' - ');
// // let result = ninjas.indexOf('ryu');
// // let result = ninjas.concat('ken', 'crystal');
// let result = ninjas.push('ken');

// result = ninjas.pop();
// result = ninjas.shift();



// console.log(result);
// console.log(ninjas);

// let age = null;

// console.log(age, age + 3, `the age is ${age}`)

// let email = 'luigi@thenetninja.co.uk';

// let result = email.includes('2');

// // console.log(result);


// let age = 25;

// console.log(age == 25);
// console.log(age != 25);
// console.log(age > 26);
// console.log(age < 26);
// console.log(age >= 25);
// console.log(age <= 25);

// let name = 'shaun';
// console.log(name > 'crystal');

// let age = 25;
// console.log(age == 25);
// console.log(age == '25');

// let age = 25;
// console.log(age !== 25);
// console.log(age !=='25');

// let score = '100';
// score = Number(score);
// console.log(score + 1, typeof score);

// let result = String(50);
// console.log(result, 'is' ,typeof result);

// let result = Boolean(' ');
// console.log(result)
// const names = ['omar', 'Omar', 'Agmad', 'Lana', 'loio'];

// for(let i = 0; i < names.length; i++){
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html)
// };

// for(let i = 0; i < names.length; i++){
//     let html = `<div> User Name is: ${names[i]} </div>`;
//     console.log(html);
// }

// let i = 0;

// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

// let i = 7;

// do{
//     console.log(i);
//     i++;
// }   while(i < 5);

// let age = 21;
// let ningas = ['omar', 'lana', 'ahmad'];

// if(age >= 20){
//     console.log('Your age is over 20')
// } 

// if(ningas.length > 2){
//     console.log("This is alot of ninjas")
// }

// const password = 'p@assword';

// if (password.length >= 10){
//     console.log('This password is very strong');
// } else if(password.length >= 8){
//     console.log('that password is long enough!');
// } else if(password.length >= 6){
//     console.log('that password is short');
// } else {
//     console.log('password is not long enough');
// }


// const password = 'p@1dd';

// if (password.length >= 10 && password.includes('@') ){
//     console.log('This password is very strong');
// } else if(password.length >= 8 || password.includes('@') && password.length >= 5){
//     console.log('that password is long enough!');
// } else {
//     console.log('password is not long enough');
// }



// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){
//     if(scores[i] === 30){
//         continue;
//     }

//     console.log('yourscore: ',scores[i]);

//     if(scores[i] === 100){
//         console.log('congrat, you got the top score!');
//         break;
//     }
// }


// const grade = 'D';

// switch(grade){
//     case 'A':
//         console.log('You got an A!');
//     break;

//     case 'B':
//         console.log('You got an B!');
//     break;

//     case 'C':
//         console.log('You got an C!');
//     break;

//     case 'D':
//         console.log('You got an D!');
//     break;

//     case 'E':
//         console.log('You got an E!');
//     break;

//     default:
//         console.log('Not a valid grade');
// }

// let age = 30;


// if(true){
//      let age = 22;
//     console.log('inside 1st code block: ', age);

//     if(true){
//          age = 10
//         console.log('inside 2st code block: ', age);
//     }
// }
// console.log('outside code block: ',age); 


// greed();
// function greed(){
//     console.log('hi there');
// }



// const speak = function(){
//     console.log('Hi');
// };
// speak();


// const speak = function(name = 'luigi', time = 'night'){
//     console.log(`Good ${time} ${name}!`);
// };
// speak();
// speak('Omar');

// const calcArea = function(radius){
//     return 3.14 * radius**2;
// };

// const area = calcArea(9);
// console.log(area);

// const calcArea = radius => 3.14 * radius**2;

// const area = calcArea(3.3);
// console.log(area);


// const greet = () => 'helo world';

// const r = greet();
// console.log(r);


// const bill = (product, tax) => {
//     total = 0;
//     for(i = 0; i < product.length; i++){
//         total += product[i] + product[i] * tax;
//     }
//     return total;
// }

// const bill = function(product, tax){
//     let total = 0;
//     for(i = 0; i < product.length; i++){
//         total += product[i] + product[i] * tax;
//     }
//     return total;
// }

// console.log(bill([10,50], 0.33));


// Lectures 36
// const ul = document.querySelector('.people');

// let pepole = ['mario', 'luigi', 'ryu', 'shaun', 'chun-11'];

// let html = ` `;

// pepole.forEach( person => {
//     html += `<li style="color: purple">${person}</li>`
// });

// console.log(html);
// ul.innerHTML = html;


// Lectures 37 & 38
// let user = {
//     name: 'crystal', 
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     name: 'omar',
//     location:'berlin',
//     blogs: ['why mac & chesse rules', '10things to make']
//     };
//        console.log(user);

// user.age = 22;
// user['age'] =  39;

// console.log(user.age);
// console.log(user['age']);


// Lectures 39
// let user = {
//     name: 'crystal', 
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     name: 'omar',
//     location:'berlin',
//     blogs: ['why mac & chesse rules', '10 things to make'],
//     login: function(){
//         console.log('User logged in');
//     },
//     logout: function(){
//         console.log('Uswe logged out')
//     }
    
//     };
//     user.login();
//     user.logout();
//     console.log(user);


// Lectures 40
// let user = {
//     name: 'crystal', 
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     name: 'omar',
//     location:'berlin',
//     blogs: ['why mac & chesse rules', '10 things to make'],
//     login: function(){
//         console.log('User logged in');
//     },
//     logBlogs: function(){
//         // console.log(this.blogs);
//         console.log('this user has written the following blogs');
//         this.blogs.forEach( blog =>{
//             console.log(blog);
//         })
//     }
// };
//    user.logBlogs();



   // Lectures 41
// let user = {
//     name: 'crystal', 
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     name: 'omar',
//     location:'berlin',
//     blogs: [
//         {title:'why mac & chesse rules', likes: 30},
//         {title:'10 things to make', likes: 50}, 
//     ],
//     login: function(){
//         console.log('User logged in');
//     },
//     logBlogs: function(){
//         // console.log(this.blogs);
//         console.log('this user has written the following blogs');
//         this.blogs.forEach( blog =>{
//             console.log(blog.title, blog.likes);
//         })
//     }
// };
//    user.logBlogs();



   // Lectures 42
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);



// const random = 3.4;

// console.log((random));
// console.log(Math.round(random));
// console.log(Math.ceil(random));
// console.log(Math.random(random));
// console.log(Math.floor(random));


// const random = Math.random();

// console.log(Math.random());
// console.log(Math.round(random * 1000000));



// Lectures 43
// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreTwo = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);


// let userOne = {name: 'ryu', age: 30};
// let userTwo = userOne;

// console.log(userOne, userTwo);

// userOne.age = 40;
// console.log(userOne, userTwo);




   // Lectures 44
// const para = document.querySelector('body > p:nth-child(5)');
// console.log(para);

// const para = document.querySelectorAll('p');
// para.forEach( paras => {
//    console.log(paras);
// })
// console.log(para[2]);



   // Lectures 47


   // getElementById
   // const title = document.getElementById('page-title');
   // console.log(title);

   // // getElementsByClass
   // const errors = document.getElementsByClassName('error');
   // console.log(errors);



   // Lectures 48
   // const para = document.querySelector('p');

   // para.innerText = ' Ninjas are awesome';

   // const paras = document.querySelectorAll('p');

   // paras.forEach(para =>{
   //    console.log(para.innerText);
   //    para.innerText += ' New line';
   // });

   // const content = document.querySelector('.content');

   // const pepole = ['mario', 'luigi', 'yoshi'];

   // pepole.forEach(person => {
   //    content.innerHTML += `<p>${person}</p>`;
   // });



      // Lectures 49

// const link = document.querySelector('a');
// link.setAttribute('style','color: green');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.facebook.com');



      // Lectures 50

// const title = document.querySelector('h1');
// title.style.color = 'red';
// title.style.fontSize = '';
// console.log(title.style);


      // Lectures 51
// const paras = document.querySelectorAll('p');

// paras.forEach(p =>{
//    if(p.textContent.includes('error')){
//       p.classList.add('error');
//    }

//    if(p.textContent.includes('success')){
//       p.classList.add('success');
//    }
// });

// // paras.classList.remove('error');
// // paras.classList.add('error');

// // console.log(paras.classList);

// const h1 = document.querySelector('h1');
// h1.classList.toggle('toggleClass');
// h1.classList.toggle('toggleClass');



      // Lectures 52

   // const article = document.querySelector('article');
      
   // Array.from(article.children).forEach(child =>{
   //    child.classList.add('success');

   // })

  
   //    Array.from(article.children).forEach(child =>{
   //    child.classList.add('article-elment');
   // })

   // console.log(article.children);
   // Array.from(article.children);
   // console.log(Array.from(article.children));
   // console.log(article.children);




      // Lectures 53
      // const button = document.querySelector('button');

      // button.addEventListener('click', () => {
      //    console.log('you clicked me');
      // })
      
      // const items = document.querySelectorAll('li');

      // items.forEach(item => {
      //    item.addEventListener('click', e => {
      //       e.target.style.textDecoration = 'line-through';
      //       // console.log(e.target);
      //    })
      // })



      // Lectures 54
      // const ul = document.querySelector('ul');
      // const button = document.querySelector('button');

      // button.addEventListener('click', () =>{
      //    const li = document.createElement('li');
      //    li.textContent ='New think to do';
      //    ul.prepend(li);
      // })

      // const items = document.querySelectorAll('li');
      // ul.addEventListener('click', e => {
      //    e.target.style.textDecoration = 'line-through';
      // })

      // items.forEach(item => {
      //    item.addEventListener('click', e =>{
      //       e.target.remove();
      //    })
      // })

     




      // Lectures 55
      // const ul = document.querySelector('ul');
      // const button = document.querySelector('button');

      // button.addEventListener('click', () =>{
      //    const li = document.createElement('li');
      //    li.textContent ='New think to do';
      //    ul.prepend(li);
     
      // })
      
      // const items = document.querySelectorAll('li');
      //    items.forEach(item => {
      //    item.addEventListener('click', e =>{
      //       console.log('event in LI');
      //       e.stopPropagation();
      //       e.target.remove();
      //    })
      // })

      // ul.addEventListener('click', e => {
      //    console.log(e);
      //    if(e.target.tagName === 'LI'){
      //       e.target.remove();
      //    }
      // })




      // Lectures 56
      // const copy = document.querySelector('.copy-me');

      // copy.addEventListener('copy',() => {
      //    console.log('Codid');
      // })

      // const box = document.querySelector('.box');

      // box.addEventListener('mousemove', e => {
      //    // console.log(e.offsetX, e.offsetY);
      //    box.textContent = `X pos - ${e.offsetX} Y pos - ${e.offsetY}`
      // })

      // document.addEventListener('wheel', e =>{
      //    console.log(e.pageX, e.pageY)
      // })




      // Lectures 57
      // const button = document.querySelector('button');
      // const popup = document.querySelector('.popup-wrapper');
      // const popupClose = document.querySelector('.popup-close')

      // button.addEventListener('click', e => {
      //    popup.style.display = 'block';
      // });

      // popupClose.addEventListener('click', () =>{
      //    popup.style.display = 'none';
      // });

      // popup.addEventListener('click', () =>{
      //    popup.style.display = 'none';
      // });



   // Lectures 58
   // Lectures 59
   // const form = document.querySelector('.sinup-form');
   // // const username = document.querySelector('#username');

   // form.addEventListener('submit', e => {
   //    e.preventDefault();
   //    // console.log(username.value);
   //    console.log(form.username.value);
   // })



   // Lectures 60
   // const form = document.querySelector('.sinup-form');
   
   // form.addEventListener('submit', e => {
   //    e.preventDefault();
      // console.log(form.username.value);
   // })

   
   
   
   // Lectures 61
   // const userName = '111shaunq';
   // const pattern = /^[a-z]{6,}$/;

   // let result = userName.search(pattern);
   // console.log(result);

   // let result = pattern.test(userName);
   
   // if(result){
   //    console.log('Succses');
   // } else {
   //    console.log('Fild');
   // }



   
   // Lectures 62
   // const form = document.querySelector('.sinup-form');
   // const feedback = document.querySelector('.feedback');

   // form.addEventListener('submit', e => {
   //    e.preventDefault();

   //    const username = form.username.value;
   //    const usernamePattern = /^[a-zA-Z]{6,12}$/;

   //    if (usernamePattern.test(username)){
   //       // feedback good info
   //       feedback.textContent = 'This username is valid!';
   //    } else {
   //       // feedback help info
   //       feedback.textContent = 'Uswename must contain letters!';
   //    }
   // });





   // Lectures 63

   // const form = document.querySelector('.sinup-form');
   // const feedback = document.querySelector('.feedback');
   // const usernamePattern = /^[a-zA-Z]{6,}$/;


   // form.addEventListener('submit', e => {
   //    e.preventDefault();

   //    const username = form.username.value;

   //    if(usernamePattern.test(username)) {
   //       feedback.textContent = 'Valid!';
   //    } else {
   //       feedback.textContent = 'Erorr!';
   //    }
   // });

   // // live feedback
   // form.username.addEventListener('keyup', e =>{
   //    // console.log(e.target.value, form.username.value);
   //    if(usernamePattern.test(e.target.value)){
   //       form.username.setAttribute('class', 'success');
   //    } else {
   //       form.username.setAttribute('class', 'error');
   //    }
   // });

// const form = document.querySelector('.sinup-form');
// const feedback = document.querySelector('.feedback');
// const usernamePattern = /^[a-zA-Z]{6,12}$/;

// form.addEventListener('submit', e =>{
//    e.preventDefault();

//    const username = form.username;
//    if(usernamePattern.test(username)){
//       feedback.textContent = 'Valid';
//    } else {
//       feedback.textContent = 'Error';
//    }
// });

// form.username.addEventListener('keyup', e =>{

//    if(usernamePattern.test(e.target.value)){
//       form.username.setAttribute('class', 'success');
   
//    } else (
//       form.username.setAttribute('class', 'error')
//    )
// })

   // Lectures 64
   // Lectures 65
   // Lectures 66
   // Lectures 67 & 68 & 70

   // const correctAnswers = ['A', 'A', 'A', 'A'];
   // const form = document.querySelector('.quiz-form');
   // const result  = document.querySelector('.result');

   // form.addEventListener('submit', e =>{
   //    e.preventDefault();

   //    let score = 0;
   //    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value,];

   //    userAnswers.forEach((answer, index) =>{
   //       if(answer === correctAnswers[index]) {
   //          score += 25;
   //       }
   //    });
   //    result.classList.remove('d-none');
   //    scrollTo(0,0);

   //    let output = 0;
   //    const timer = setInterval(() => {
   //       result.querySelector('span').textContent = `${output}%`;
   //       if(output === score){
   //          clearIntevar(timer);
   //       } else {
   //          output++;
   //       }
   //    }, 10);

   // });



   // Lectures 71
   // const scores = [10, 30, 15, 25, 50, 40, 5];

   // const finalScore = scores.filter((score) => {
   //    return score < 20;
   // });

   // console.log(finalScore);

//    const users = [
//       {name: 'shaun', premium: true},
//       {name: 'yoshi', premium: false},
//       {name: 'mario', premium: false},
//       {name: 'chun-li', premium: true},
//    ];

// const premiumUsers = users.filter(user => user.premium);

// console.log(premiumUsers);



   // Lectures 72

//    const prices = [10, 22.3, 22, 90, 100];

//    const salePrice = prices.map( price => price * 1.5);

//    console.log(salePrice);

//    const prices = [10, 22.3, 22, 90, 100];

//    const products = [
//       {name: 'goldstar', price: 20},
//       {name: 'mushroom', price: 40},
//       {name: 'green shells', price: 30},
//       {name: 'banana skin', price: 10},
//       {name: 'red shells', price: 50},
//    ];

// const salePrice = products.map((product) => {
//    return {name: product.name, price: product.price * 2};
// });

// console.log(salePrice);

// const products = [
//    {name: 'Ja', price: 30},
//    {name: 'Lqw', price: 40},
//    {name: 'LFd', price: 15},
//    {name: 'Lew', price: 10},
//    {name: 'L23w', price: 9},
// ];

// let salePrice = products.map(product => {
//    if (product.price >= 30){
//    return {name: product.name, price: product.price * 1.5}

//    } else if ( product.price >= 10){
//    return {name: product.name, price: product.price * 2}
//    } else {
//       return product;
//    }
// });

// console.log(salePrice);




// Lectures 73
// const scores = [10, 20, 60, 40, 70, 90, 30];

// const result = scores.reduce((acc, curr) => {
//    if(curr > 50){
//       acc++;
//    }
//    return acc;
// }, 0);

// console.log(result);


// const scores = [
//    {player: 'mario', score: 50},
//    {player: 'omar', score: 20},
//    {player: 'ahmad', score: 70},
//    {player: 'mario', score: 50},
// ];
// const marioTotal = scores.reduce((acc, curr) => {
//    if(curr.player === 'mario'){
//       acc += curr.score;
//    }
//    return acc;
// }, 0);

// console.log(marioTotal);




// Lectures 74
// const scores = [10, 20, 60, 40, 70, 90, 30];

// const firstHighScore = scores.find(score => score > 50);
// console.log(firstHighScore);



// Lectures 75

// const scores = [10, 20, 60, 5, 70, 90, 30];
// scores.sort();
// console.log(scores);


// const scores = [
//    {player: 'mario', score: 50},
//    {player: 'omar', score: 20},
//    {player: 'ahmad', score: 70},
//    {player: 'mario', score: 50},
// ];
// scores.sort((a,b) => {
//    if(a.score > b.score){
//       return -1;
//    } else if ( b.score > a.score){
//       return 1;
//    } else {
//       return 0;
//    }
// })

// scores.sort((a,b) => b.score - a.score);




// Lectures 76
// const products = [
//          {name: 'goldstar', price: 20},
//          {name: 'mushroom', price: 40},
//          {name: 'green shells', price: 30},
//          {name: 'banana skin', price: 10},
//          {name: 'red shells', price: 50},
//       ];

// const promos = products
//    .filter(product => product.price > 30)
//    .map(product => `The ${product.name} price is ${product.price / 2}`);
// console.log(promos);



// Lectures 77
// Lectures 78
// Lectures 79

// const addForm = document.querySelector('.add');
// const list = document.querySelector('.todos');

// const generareTemplate = todo => {
//    const html = `
//       <li class="list-group-item d-flex justify-content-between align-items-center">
//          <span>${todo}</span>
//          <i class="far fa-trash-alt delete"></i>
//       </li> 
//   `;

//    list.innerHTML += html;
   
// };

// addForm.addEventListener('submit', e => {
//  e.preventDefault();
//  const todo = addForm.add.value.trim();
// //  console.log(todo);
// if(todo.length){
//    generareTemplate(todo);
// }
// });


const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generareTemplate = todo => {
   const html = `
      <li class="list-group-item d-flex justify-content-between align-items-center">
         <span>${todo}</span>
         <i class="far fa-trash-alt delete"></i>
      </li>
   `;

   list.innerHTML += html;
};


addForm.addEventListener('submit', e => {
   e.preventDefault();
   
    const todo = addForm.add.value.trim();

    if(todo.length){
       generareTemplate(todo);
       addForm.reset();
      }

   
});