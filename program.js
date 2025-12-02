
let button = document.querySelector("button");
let input = document.querySelector("input");
let inputdiv = document.querySelector('.input');
let sorticon = document.querySelector('.sorting');
let schedule = document.querySelector('.schedule');
let deny = document.querySelector('.deny');
let ol = document.querySelector('ol');

let data = [];
let sortAsc = true; 

function renderList() {
    ol.innerHTML = '';
    if (data.length === 0) {
        schedule.style.display = 'none';      
        inputdiv.style.display = 'block';     
        return;
    } else {
        schedule.style.display = 'block';     
        inputdiv.style.display = 'none';     
    }

    data.forEach((item, index) => {
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.textContent = `${index + 1}. ${item}`;

        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = "images/Group 77.svg";
        img.className = "li-deny";
        img.style.width = "20px";

        img.addEventListener("click", () => {
            data.splice(index, 1);
            renderList(); 
        });

        div.appendChild(img);
        li.appendChild(span);
        li.appendChild(div);
        ol.appendChild(li);
    });
}

button.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        data.push(input.value.trim());
        input.value = "";
        renderList();
    } else {
        inputdiv.style.display = 'block';
    }
});

sorticon.addEventListener("click", () => {
    if (sortAsc) {
        data.sort((a, b) => a.localeCompare(b)); 
        sorticon.src = "images/Group 90.svg";    
    } else {
        data.sort((a, b) => b.localeCompare(a)); 
        sorticon.src = "images/Group 74.svg";  
    }
    sortAsc = !sortAsc; 
    renderList();
});

deny.addEventListener('click',()=>{
    input.value=""
})