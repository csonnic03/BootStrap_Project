var progressAmount = document.getElementById('progress-bar')
var progressText = document.getElementById('progress-insert')
var checkCount = 0;
var task1 = document.getElementById('task-1');
var task2 = document.getElementById('task-2');
var task3 = document.getElementById('task-3');
var task4 = document.getElementById('task-4');

var task1check = false
var task2check = false
var task3check = false
var task4check = false

function progressBar(){
  if(task1.checked===true && task1check===false){
    checkCount+=1
    task1.disabled=true;
    task1check=true
    alert(checkCount)
  }
  else if(task2.checked===true && task2check===false){
    checkCount+=1
    task2.disabled=true;
    task2check=true
    alert(checkCount)

  }
  else if(task3.checked===true && task3check===false){
    checkCount+=1
    task3.disabled=true;
    task3check=true

    alert(checkCount)

  }
  else if(task4.checked===true && task4check===false){
    checkCount+=1
    task4.disabled=true;
    task4check=true
    alert(checkCount)

  }

  //this if statement adds a percentage to the progress bar
  if(checkCount==1){
    progressAmount.style.width='25%';
    progressText.innerHTML ="25%";
  }
  else if(checkCount==2){
    progressAmount.style.width='50%';
    progressText.innerHTML ="50%";
  }
  else if(checkCount==3){
    progressAmount.style.width='75%';
    progressText.innerHTML ="75%";
  }
  else if(checkCount==4){
    progressAmount.style.width='100%';
    progressText.innerHTML ="100%";
  }
  
}
progressBar()
setInterval(progressBar(), 1);
alert('remember to move the css so that its not external')
window.addEventListener('click',progressBar)
//