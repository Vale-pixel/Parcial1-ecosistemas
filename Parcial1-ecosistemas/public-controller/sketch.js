const URL = `http://${window.location.hostname}:5050`;
let socket = io(URL, { path: '/real-time' });
let up;
let down;
let right;
let left;

function setup() {
    frameRate(16);
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    ellipse(windowWidth / 2, windowHeight / 3, 50, 50);
    ellipse(windowWidth / 2, windowHeight / 1.5, 50, 50);
    ellipse(windowWidth / 1.5, windowHeight / 2, 50, 50);
    ellipse(windowWidth / 3, windowHeight / 2, 50, 50);

    up =  movementButton('UP', windowWidth / 2, windowHeight / 3);
    down = movementButton('DOWN', windowWidth / 2, windowHeight / 1.5);
    right = movementButton('RIGHT', windowWidth / 1.5, windowHeight / 2);
    left = movementButton('LEFT', windowWidth / 3, windowHeight / 2);
}

/*___________________________________________

1) Create a function that includes the socket method to emit the directions
_____________________________________________ */
function getDirections(){
    socket.emit('directionEvents', (getDirections)=>{
switch (directions) {
    case UP:
        up
        break;
        case DOWN:
        down
        break;
        case RIGHT:
        right
        break;
        case LEFT:
        left
        break;

    default:
        break;
}
    })
}