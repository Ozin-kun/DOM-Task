const nodeDiv = document.getElementsByTagName("div")
nodeDiv[0].style.backgroundColor = "Yellow"
nodeDiv[1].style.backgroundColor = "Blue"

const nodeList = document.getElementsByClassName("list")
console.log(nodeList);

for (let i = 0; i < nodeList.length; i++){
    nodeList[i].innerText = `List Baru ${i+1}`;
    nodeList[i].style.backgroundColor = "Grey";
    nodeList[i].style.fontSize = "2rem";
    nodeList[i].style.fontFamily = "Consolas";
}