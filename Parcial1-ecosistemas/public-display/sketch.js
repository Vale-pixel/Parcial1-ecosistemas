const URL = `http://${window.location.hostname}:5050`;
let socket = io(URL, { path: '/real-time' });

let character = {
    x: 0,
    y: 0
};
let whiteMouse = {
    x: 50,
    y: 50
};
let speed = 10;

function setup() {
    frameRate(60);
    createCanvas(windowWidth, windowHeight);
    character.x = windowWidth / 2;
    character.y = windowHeight / 2;
}

function draw() {
    background(0, 50);
    textSize(64);
    text('🐍', character.x - 25, character.y);
    textSize(24);
    text('🐁', whiteMouse.x, whiteMouse.y);
    eatsMouse();
}


function eatsMouse() {
    if (dist(character.x, character.y, whiteMouse.x, whiteMouse.y) < 50) {
        putMouseRandomPosition();
    }
}

function putMouseRandomPosition() {
    whiteMouse.x = random(50, windowWidth - 50);
    whiteMouse.y = random(50, windowHeight - 50);
}

/*___________________________________________

1) Include the socket method to listen to events and change the character position.
You may want to use a Switch structure to listen for up, down, right and left cases.
_____________________________________________ */
socket.on('directionsEvents', (getDirections) =>{
    switch (directions) {
        case UP:
        
            break;
        case DOWN:
            break;
        case RIGHT:
             break;
        case LEFT: 
         break;
        default:
            break;
    }
})


/*___________________________________________

2) Include the fetch method to post each time the snake eats a mouse
_____________________________________________ */
function saveScore(){
postData('/score', eatsMouse )
}

const postData = async (url = "", data = {}) =>{
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-type': 'application/json',
         Accept: 'application/json'},
        body: JSON.stringify(data)
    })
    return data
}