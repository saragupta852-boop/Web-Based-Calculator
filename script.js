function myAppend(x){
    let val = document.getElementById("answerarea").value;
    if(val==""){
        document.getElementById("answerarea").innerText = x;
    }
    else{
        document.getElementById("answerarea").innerText = val+x;
    }
}

function clearAnswer(){
    document.getElementById("answerarea").innerText = "";
}

function calculate(){
    try{
    let x = document.getElementById("answerarea").value;
    let result = eval(x);
    document.getElementById("answerarea").innerText = result;
    }
    catch{
        document.getElementById("answerarea").innerText = "Error";
    }
}
