let pts = 0;
let correctanswer = function () {
    let question1 = document.myform1.op1.value;
    let question2 = document.myform2.op2.value;
    let question3 = document.myform3.op3.value;
    let question4 = document.myform4.op4.value;
    let question5 = document.myform5.op5.value;
    let question6 = document.myform6.op6.value;
    let question7 = document.myform7.op7.value;
    let question8 = document.myform8.op8.value;
    let question9 = document.myform9.op9.value;
    let question10 = document.myform10.op10.value;
    let getanswers = document.querySelectorAll(".answers");
    let shiftanswers = document.querySelector(".answers-display")

    if(question1==="1928") {
        pts++;
    }
    if(question2==="Rakesh Sharma") {
        pts++;
    }
    if(question3==="Limestone") {
        pts++;
    }
    if(question4==="Rabindranath Tagore") {
        pts++;
    }
    if(question5==="Canberra") {
        pts++;
    }if(question6==="Brian Lara") {
        pts++;
    }
    if(question7==="Sikkim") {
        pts++;
    }
    if(question8==="Euclid") {
        pts++;
    }
    if(question9==="Sardar Vallabhbhai Patel") {
        pts++;
    }
    if(question10==="Thomas Alva Edison") {
        pts++;
    }
    shiftanswers.style.margin = "0 auto";
    document.getElementById("final").innerHTML = "<h1>Your score is "+pts+".</h1>";
    for(let i = 0; i <= getanswers.length; i++)
    {
        getanswers[i].style.display = "block";
    }

};