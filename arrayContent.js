// Window onload Function
window.onload=pageReady;

//once the page loads
function pageReady(){
    //Getting required HTML elements
    var courseStartBtn=document.getElementsByClassName("courseStartBtn");
    var quizStartBtn=document.getElementsByClassName("quizStartBtn");

    // Testing Purpose consoling 
    console.log(courseStartBtn);
   
    //Getting all start buttons in course page and looping through them
    for(var i=0;i<courseStartBtn.length;i++){
        // once click of button assigning a function
        courseStartBtn[i].onclick=startBtnClick;
    }
    //Getting all start buttons in quiz page and looping through them
    for(var i=0;i<quizStartBtn.length;i++){
        // once click of button assigning a function
        quizStartBtn[i].onclick=quizBtnClick;
    }
    
    //Function to display content once start button is clicked
    function startBtnClick(){
        //setting location as arrayContent.html to show the content
        window.location.href="arrayContent.html";
    }
     //Function to display quiz questions once start button is clicked
    function quizBtnClick(){
        //setting location as quizForm.html to show the quiz questions
        window.location.href="quizForm.html";
    }
}