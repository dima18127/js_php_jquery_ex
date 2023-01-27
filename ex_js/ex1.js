
 
let button = document.querySelector('.button')
let colorArr = [ 'yellow' ,'orange','red',  'green','purple', 'blue', ]
let count = 0;

button.addEventListener('click',()=>{
    let ChangeColor = function () {
    if (count<6){
        console.log(colorArr[count]);
        console.log(button.style.backgroundColor);
            button.style.backgroundColor = colorArr[count];
            color();
            count++;
        if (button.style.backgroundColor === 'yellow'){
                button.style.color = 'black';
                button.style.fontWeight = "900";
            }
        else {
            button.style.color = 'white';
        }
    }
    
    else { count = 0
        ChangeColor()
    }
}
let color = function (){document.querySelectorAll('input').forEach((item) => {
    item.style.borderColor = button.style.backgroundColor 
})}

ChangeColor()
})

