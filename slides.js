
// Window onload Function
window.onload=pageReady;

//once the page loads
function pageReady(){
    //Getting required HTML elements
var slide=document.getElementById("slide");

var slideHeading=document.getElementById("slideHeading");

var slideContent=document.getElementById("slideContent");

var currentIndex=0;

var arrowBtn=document.getElementById("nextBtn");

var arrowPreBtn=document.getElementById("previousBtn");

var quizBtn=document.getElementById("gotoQuizBtn");

//Creating an array of objects to dynamically show the content as they move through the slides
var data=[
    // Slide 1 Content
    {
        id:0,
        slideHeading:"What is an Array?",
        slideContent:[
            "Arrays are boxes",
            "Just like we keep multiple things in a box,  we can keep different types of data in a Array.",
        ]
    },
    // Slide 2 Content
    {
        id:1,
        slideHeading:"Syntax",
        slideContent:[
            "// Array of strings",
            "var flowers=[“Rose,”Lilly”,”Sun Flower”,”Jasmine”];",
            "//Array of numbers",
            "var numbers=[100,200,300,400,500];",
            "//Array of mixed data types",
            "var array=[“Rose”,200,”Jasmine”,500,true];"
        ]
    },
    // Slide 3 Content
    {
        id:2,
        slideHeading:"How to access an Array?",
        slideContent:[
            "Array has Indexes.",
            "Indexes are nothing but position of elements in the array.",
            "We can access an array element using its index.",
            "Indexes starts from 0.",
            "Number of elements in an array calculated as totalElements-1.",
            "Syntax: var element=array_name[index]"
        ]
    },
    // Slide 4 Content
    {
        id:3,
        slideHeading:"Adding elements to an Array",
        slideContent:[
            "We can add elements to an array using its indexes.",
            "var cars=[]; //empty array",
            "cars[0]=”Suzuki”;",
            "cars[1]=”Honda”;",
            "cars[2]=”BMW”;",
            "after adding elements the array looks like this var cars=[“Suzuki”,”Honda”,”BMW”];"
        ]
    },
    // Slide 5 Content
    {
        id:4,
        slideHeading:"Properties of an Array?",
        slideContent:[
            "Properties are nothing but the characteristics of an array.",
            "For example, a car has features like color, model, make etc.",
            "Just like a car array has some features which tells how an array works."
        ]
    },
    // Slide 6 Content
    {
        id:5,
        slideHeading:"Length Property",
        slideContent:[
            "Array has a length property, which returns the length of an array.",
            "Length is nothing but how many elements present in an array.",
            "var flowers=[“Rose,”Lilly”,”Sun Flower”,”Jasmine”];",
            "console.log(flowers.length) //It returns 4"
        ]
    },
    // Slide 7 Content
    {
        id:6,
        slideHeading:"Indexof Property",
        slideContent:[
            "indexOf property returns the index of an array element.",
            "var flowers=[“Rose,”Lilly”,”Sun Flower”,”Jasmine”]; ",
            "console.log(flowers.indexOf(“Lilly”)) //It returns 1",
            "When an element is not found in an array it returns index as -1."
        ]
    },
    // Slide 8 Content
    {
        id:7,
        slideHeading:"Slice Property",
        slideContent:[
            "slice property is used to get a part of an array",
            "Think an array is like mango, when we slice a mango we get piece of it.",
            "Syntax: slice(startIndex, endIndex);",
            "var flowers=[“Rose,”Lilly”,”Sun Flower”,”Jasmine”];",
            " console.log(flowers.slice(1,3)) //It returns an array",
            " [“Lilly”,”Sun Flower”] // end index is used as end index-1"
        ]
    }
];
//Function to print the content on slides
function showSlide(){
    //Getting the 1st slide
    var arrObj=data[currentIndex];
    //Printing the Slide Heading 
    slideHeading.innerHTML=arrObj.slideHeading;
    //Setting Content is empty everytime the function calls
    var showContent="";
    // Looping through the slide content array
    for (var i = 0; i < arrObj.slideContent.length; i++) {
        //Setting the content as list items
        showContent += "<li>" + arrObj.slideContent[i] + "</li>";
    }
    // Finally printing all the content
    slideContent.innerHTML=showContent;
}

// Function to move next page
function slideAhead(){
    // Checking conditions if the current page is not last then move forward
    if(currentIndex<data.length-1){
        currentIndex++;
    }
    // if the current page is last print end of slides in console
    else{
        console.log("end of slides");    
    }
}
// Function to move back
function slideBack(){
    // if current page is not the first page then move back
    if(currentIndex>0){
        currentIndex--;
    }
    // if the current page is the first page then print you are in first slide in console
    else{
        console.log("You are in first slide");
        
    }
}
// calling slides function
showSlide();

// when forward arrow clicked, calling next slide function
arrowBtn.onclick=nextSlide;
// when backward arrow clicked, calling next slide function
arrowPreBtn.onclick=previousSlide;

//Function to move forward
function nextSlide(){
    //when clicks next button, calling slide ahead function to go forward
    slideAhead();
    // calling show slide function to show the content
    showSlide();
    // checking conditions to show or hide next/previous page buttons
    if(currentIndex!==0){
    arrowPreBtn.style.display="block";
    }
    if(currentIndex===data.length-1){
        arrowBtn.style.display="none";
    } 
    if(currentIndex===data.length-1){
        quizBtn.style.display="block";
    } 
    if(currentIndex===data.length-1){
        arrowPreBtn.style.right="130px";
        // arrowPreBtn.style.bottom="20px";
    }
}

function previousSlide(){
     //when clicks back button, calling slide back function to go forward
    slideBack();
    // calling show slide function to show the content
    showSlide();
      // checking conditions to show or hide next/previous page buttons
    if(currentIndex===0){
    arrowPreBtn.style.display="none";
    }
    if(currentIndex!==data.length-1){
        arrowBtn.style.display="block";
    }
    if(currentIndex!==data.length-1){
        quizBtn.style.display="none";
    }
}


}
   

