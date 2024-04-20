let blocos = document.querySelector(".blocos");
let heading = document.getElementById('header');
blocos.addEventListener('animationend', add);
let clickNum = 0;
let arrEven = [];
let arrOdd = [];
function add(){
    heading.style.visibility = "visible"
    heading.classList.add('zoomIn');
}
function arraysEqual(a, b) {
    return a.length === b.length && a.every((val, index) => val === b[index]);
}
function clicked(id){
    let clickedArea = document.getElementById(id); 
    if (clickedArea.childNodes.length == 0) {
        clickNum++;
        if (clickNum%2 == 0){
            arrEven.push(id);
            clickedArea.innerHTML = "<p>X</p>"
            if (arrEven.length>3) {
                let erase = arrEven.shift();
                document.getElementById(erase).innerHTML = "";
            } 
            if (arrEven.length==3){
                if (arraysEqual(arrEven.sort(), win1.sort())){
                    alert("O X venceu!!!");
                    window.location.reload();
                }
                else if (arraysEqual(arrEven.sort(), win2.sort())){
                    alert("O X venceu!!!");
                    window.location.reload();
                }
                else if (arraysEqual(arrEven.sort(), win3.sort())){
                    alert("O X venceu!!!");
                    window.location.reload();
                }
                else if (arraysEqual(arrEven.sort(), win4.sort())){
                    alert("O X venceu!!!");
                    window.location.reload();
                }
                else if (arraysEqual(arrEven.sort(), win5.sort())){
                    alert("O X venceu!!!");
                    window.location.reload();
                }
                else if (arraysEqual(arrEven.sort(), win6.sort())){
                    alert("O X venceu!!!");
                    window.location.reload();
                }
                else if (arraysEqual(arrEven.sort(), win7.sort())){
                    alert("O X venceu!!!");
                    window.location.reload();
                }
                else if (arraysEqual(arrEven.sort(), win8.sort())){
                    alert("O X venceu!!!");
                    window.location.reload();
                }
            }
        } else {
            arrOdd.push(id);
            clickedArea.innerHTML = "<p>O</p>"
            if (arrOdd.length>3) {
                let erase = arrOdd.shift();
                document.getElementById(erase).innerHTML = "";
            }
            if (arrOdd.length==3){
                if (arraysEqual(arrOdd.sort(), win1.sort())){
                    alert("O circulo Venceu!!!");
                    window.location.reload();
                }
                else if (arraysEqual(arrOdd.sort(), win2.sort())){
                    alert("O O venceu!!!");
                    window.location.reload();
                }
                else if (arraysEqual(arrOdd.sort(), win3.sort())){
                    alert("O O venceu!!!");
                    window.location.reload();
                }
                else if (arraysEqual(arrOdd.sort(), win4.sort())){
                    alert("O O venceu!!!");
                    window.location.reload();
                }
                else if (arraysEqual(arrOdd.sort(), win5.sort())){
                    alert("O O venceu!!!");
                    window.location.reload();
                }
                else if (arraysEqual(arrOdd.sort(), win6.sort())){
                    alert("O O venceu!!!");
                    window.location.reload();
                }
                else if (arraysEqual(arrOdd.sort(), win7.sort())){
                    alert("O O venceu!!!");
                    window.location.reload();
                }
                else if (arraysEqual(arrOdd.sort(), win8.sort())){
                    alert("O O venceu!!!");
                    window.location.reload();
                }
            }
        }
    }
}
const win1 = ["block0","block1","block2"];
const win2 = ["block3","block4","block5"];
const win3 = ["block6","block7","block8"];
const win4 = ["block0","block3","block6"];
const win5 = ["block1","block4","block7"];
const win6 = ["block2","block5","block8"];
const win7 = ["block0","block4","block8"];
const win8 = ["block2","block4","block6"];

