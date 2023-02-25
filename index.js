const score = document.querySelector('.score');
const start = document.querySelector('.start');
const game_area= document.querySelector('.area');
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
  let keys = { ArrowUP:false, ArrowDown:false,   ArrowLeft:false , ArrowRight:false};
start.addEventListener('click', game_start)
const player = {};

function keyDown(e){
e.preventDefault();
keys[e.key]= true;
// console.log(e.key);
// console.log(keys)
}

function keyUp(e){
    e.preventDefault();
    keys[e.key]= false;
// console.log(e.key);
// console.log(keys)
    
    }

    function step(){
        // console.log('clicked')
        
        if(player.game_start){
            window.requestAnimationFrame(step);

        }
    }
    function game_start(){
        game_area.classList.remove('hide');
        start.classList.add('hide');
        let car_div = document.createElement('div');
        car_div.setAttribute('class', 'car');
        car_div.innerText = "this is my car";
        game_area.appendChild(car_div);
        player.game_start =true;
        window.requestAnimationFrame(step);
        player.x = car_div.offsetLeft;
        player.y = car_div.offsetTop;
        // console.log(player.x)

    }