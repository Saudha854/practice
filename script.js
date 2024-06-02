// confirmative questions 
alert ("You have to give answers of 5 confirmative questions");
let score = 0;
let totalScore = 5;
let ques1 = "Is Javascript open source programming language?";
let ans1 = "yes";
let ques2  = "Is it designed to create web application?";
let ans2 = "yes";
let ques3  = "Is it lightweight and interpretated?";
let ans3 = "yes";
let ques4 = "Is it integrated with CSS?";
let ans4 = "No";
let ques5 = "Does this language sound complex to you?";
let ans5 = "yes";

let response1 = prompt (ques1);
let response2 = prompt (ques2);
let response3 = prompt (ques3);
let response4 = prompt (ques4);
let response5 = prompt (ques5);

if (response1 === ans1){
    score++;
};
if (response2 === ans2){
    score++;
};
if (response3 === ans3){
    score++;
};
if (response4 === ans4){
    score++;
};
if (response5 === ans5){
    score++;
};

let percentage = (score/totalScore* 100);
alert (percentage);