const btn = document.getElementById('submit');


var tods;
var task = new Array();
var ol = {};


btn.addEventListener('click',(e)=>{
    e.preventDefault();
    tods = document.getElementById('todo').value; 
     
     console.log(ol);
     
  store();
  


})

function store(){
  localStorage.setItem('task',JSON.stringify(tods));
     ol = JSON.parse(localStorage.getItem("task"));
     console.log(ol.length);
     display();
}

function display()
{
   
    
    
    
    document.getElementById('total-task').innerHTML = ol;
   // console.log(task.length);
   // console.log(task);
    
     
     
     
      document.getElementById('lists-tasks').classList.add("my-class");
      document.getElementById('lists-tasks').innerHTML += `<input type=checkbox >${ol}</input>`;
       
     
    
  
  

    
   
   
}

