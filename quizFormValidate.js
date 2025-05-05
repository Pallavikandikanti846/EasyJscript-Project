// Window onload Function
window.onload=pageReady;

//once the page loads
function pageReady(){
    //Getting required HTML elements
    var result=document.getElementsByClassName("result");
    var resultDiv=document.getElementById("quizResult");
    var errorToAttempt=document.getElementById("resultToAttempt");

    var countCorrect=0;
    var countWrong=0;
    
   //  Getting Form in the page
    var formHandle=document.forms.myForm;
   
   //  on click of submit assigning a function
    formHandle.onsubmit=validateForm;

    //Function to validate the quiz answers
    function validateForm(){
      //Getting user selected option using a function 
     var radio1=userSelectedValue(formHandle.property);
     var radio2=userSelectedValue(formHandle.syntax);
     var radio3=userSelectedValue(formHandle.add);
     var radio4=userSelectedValue(formHandle.delete);
     var radio5=userSelectedValue(formHandle.yesorno);

     //Function to loop through all the options for the question
     function userSelectedValue(questionChoices){
        for(var i=0;i<questionChoices.length;i++){
         //enters when user checks an option
           if(questionChoices[i].checked){
            //Getting the option value that user checked and returning the value
             var selectedOption=questionChoices[i].value;
             return selectedOption;
           }
        }
        // If user doesn't check an option returns empty string
        return "";
     }
   //   For testing purpose consoling
   console.log(radio1);
   
   //Checking if the selected option is equals to the desired answer
     if(radio1==="length"){
      //setting result
        result[0].innerHTML="Correct Answer";
        result[0].style.color="green";
     }
      //Checking if user doesnt selects an option
     else if(radio1==="") {
      //setting result
      result[0].innerHTML="Not Answered";
      result[0].style.color="Orange";
     }
     //if selects a wrong answer setting result as wrong answer
     else{
        result[0].innerHTML="Wrong Answer";
        result[0].style.color="red";
     }
      //Checking if the selected option is equals to the desired answer
     if(radio2==="option3"){
      //setting result
        result[1].innerHTML="Correct Answer";
        result[1].style.color="green";
     }
     //Checking if user doesnt selects an option
     else if(radio2===""){
      //setting result
      result[1].innerHTML="Not Answered";
      result[1].style.color="orange";
     }
      //if selects a wrong answer setting result as wrong answer
     else{
      result[1].innerHTML="Wrong Answer";
      result[1].style.color="red";
     }
      //Checking if the selected option is equals to the desired answer
      if(radio3==="push"){
          //setting result
        result[2].innerHTML="Correct Answer";
        result[2].style.color="green";
     }
      //Checking if user doesnt selects an option
     else if(radio3===""){
       //setting result
      result[2].innerHTML="Not Answered";
      result[2].style.color="Orange";
     }
      //if selects a wrong answer setting result as wrong answer
     else{
      result[2].innerHTML="Wrong Answer";
      result[2].style.color="red";
     }
      //Checking if the selected option is equals to the desired answer
     if(radio4==="pop"){
      //setting result
        result[3].innerHTML="Correct Answer";
        result[3].style.color="green";
     }
      //Checking if user doesnt selects an option
     else if(radio4===""){
      //setting result
      result[3].innerHTML="Not Answered";
      result[3].style.color="Orange";
     }
     //if selects a wrong answer setting result as wrong answer
     else{
      result[3].innerHTML="Wrong Answer";
      result[3].style.color="red";
     }
     //Checking if the selected option is equals to the desired answer
     if(radio5==="yes"){
      //setting result
        result[4].innerHTML="Correct Answer";
        result[4].style.color="green";
     } 
      //Checking if user doesnt selects an option   
     else if(radio5===""){
      //setting result
      result[4].innerHTML="Not Answered";
      result[4].style.color="Orange";
     }
     //if selects a wrong answer setting result as wrong answer
     else{
      result[4].innerHTML="Wrong Answer";
      result[4].style.color="red";
     }
  // loops through the result and gets the count of correct, wrong answers
     for(var j=0;j<result.length;j++){
      if(result[j].innerHTML==="Correct Answer"){
        countCorrect++;
      }
      else{
        countWrong++;
     }
}
// If passes the quiz redirects to result.html
 if(countCorrect>=3){
  window.location.href="result.html";
 }
 else{
  errorToAttempt.style.display="block";
 }
  //   Stopping page reload
  return false;
    }
   
  
}




