
var submission = document.getElementById('submit');

var InputValue;
var Larray = [];

var j =0;
var i = 0 ;
display();


// adding a task 
submission.addEventListener('click',(e)=>
{
   e.preventDefault();

    InputValue = document.getElementById('todo').value;

    localStore();
      
    display();

})
// storing locally in LocalStorage
function localStore()
 {
   let array = localStorage.getItem('tasks');
  
   if(array == null){
      Larray = [];
   }else{
      Larray = JSON.parse(array);
   }
    
   //console.log(array.length);
   if(InputValue === "" )
   {
      alert('give task to pc');
      return;
   }else
   { 
      
      //console.log(x);
      
      Larray.push(InputValue);
     
      localStorage.setItem('tasks',JSON.stringify(Larray));
  
       display();
   }
   
 }
 // display all task yet to be done by user
function display(){
   
 let array = localStorage.getItem("tasks");
  //console.log(array);
  if(array == null){
   Larray = [];
  }else{
     Larray = JSON.parse(array);
  }
   console.log((i) + " " +(j));
   i = j;
  for(  ; i < Larray.length ; i++){
  
     document.getElementById('tasks').innerHTML += `<div id="list-tasks" ><input type="checkbox" id="${JSON.stringify(i)}">${Larray[i]}</input><div><button id="btn" type="submit">cross</button></div></div>`;
      j++;
  }
  
  document.getElementById('total-task').innerHTML = `${Larray.length}`;
  
}


