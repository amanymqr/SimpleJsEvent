


// const button1 = document.getElementById('btn1');
// const button2 = document.getElementById('btn2');
// const button3 = document.getElementById('btn3');
// const button4 = document.getElementById('btn4');
// const textDisplay = document.getElementById('text-display');

// button1.addEventListener('click', function () {
//     textDisplay.textContent = "You clicked Button 1!";
// });



// button2.addEventListener('click', function () {
//     textDisplay.textContent = "You clicked Button 2!";
// });

// button3.addEventListener('click', function () {
//     textDisplay.textContent = "You clicked Button 3!";
// });

// button4.addEventListener('click', function () {
//     textDisplay.textContent = "You clicked Button 4!";
// });


const mydiv = document.getElementById('mydiv');
const bttn = document.querySelectorAll('button');

// const arrayData =[
//     'Amany',
//     'Tafeq',
//     'farah',
//     'seraj'
// ];

const dataObject ={
    0:'You clicked Button 1!',
    1:'You clicked Button 2!',
    2:'You clicked Button 3!',
    3:'You clicked Button 4!'
};
bttn.forEach((button , index) => {
    button.onclick = function(){
        mydiv.textContent= dataObject[index];
    }
});

