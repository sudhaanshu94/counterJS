document.body.style.backgroundColor = "lightblue";
document.body.style.fontFamily = "Arial, sans-serif";

let content = document.createElement("div");
content.style.color = "aqua";
content.style.textAlign = "center";
content.style.display = "flex";
content.style.flexDirection = "column"; 
content.style.justifyContent = "center";
content.style.alignItems = "center"; 
content.style.height = "100vh"; 
content.style.width = "100vw";

document.body.appendChild(content);

document.body.style.margin = "20px";

let div = document.createElement("span");
div.textContent = "0";
div.style.color = "#F29E58";
div.style.fontSize = "50vh";
div.style.backgroundColor = "green";
div.style.border = "1vh solid #800000";
div.style.textAlign = "center";
div.style.width = "96vw";
div.style.height = "50vw";
div.style.userSelect = "none";  
div.addEventListener("mousedown", (e) => e.preventDefault());

let btn = document.createElement("span");
btn.textContent = "Counter";  
btn.style.height = "50vh";
btn.style.width = "96vw";
btn.style.border = "1vh solid #800000";
btn.style.fontSize = "20vh";
btn.style.textAlign = "center";
btn.style.backgroundColor = "darkblue";
btn.style.color = "white";
btn.style.cursor = "pointer";
btn.style.height = "50vw";
btn.style.userSelect = "none";  
btn.addEventListener("mousedown", (e) => e.preventDefault());

content.appendChild(div);
content.appendChild(btn);

let v = 1;
btn.onclick = () => {
    v += 1;
    div.textContent = `${v}`;
};
