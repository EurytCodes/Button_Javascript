const mainbutton = document.getElementById('mainBtn');
const circlebutton = document.getElementById('circleBtn');

circlebutton.addEventListener('click', On);

var state = 0;

function On(){
    if(state == 0){
        circlebutton.style.float = 'right';
        circlebutton.style.backgroundColor = 'black';
        circlebutton.style.color = 'white';
        circlebutton.innerText = 'ON';
        mainbutton.style.backgroundColor = 'white';
        circlebutton.style.border = '2px solid white';
        state = 1;
    }
    else{
        circlebutton.style.float = 'left';
        circlebutton.innerText = 'OFF';
        circlebutton.style.backgroundColor = 'white';
        circlebutton.style.color = 'black';
        circlebutton.style.border = '2px black solid';
        mainbutton.style.backgroundColor = 'black';
        state = 0;
    }
}
