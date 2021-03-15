let questions = [{
    id: 1,
    question: "Which city is the capital of two states?",
    answer: "Chandigarh",
    options: ["Chennai", "Chandigarh", "kolkata", "Mumbai"]
  },
  {
    id: 2,
    question: "How many countries border india?",
    answer: "6",
    options: ["2", "14", "9", "6"]
  },
  {
    id: 3,
    question: "What is the capital of Gujarat?",
    answer: "Gandhinagar",
    options: ["Gandhinagar", "Luckhnow", "Bhopal", "Mumbai"]
  },
  {
    id: 4,
    question: "What,approximately is the area of India, in sq.km?",
    answer: "3,000,000",
    options: ["3,000,000", "4,000,000", "5,000,000", "6,000,000"]
  },
  {
    id: 5,
    question: "What is the smallest state by area?",
    answer: "Goa",
    options: ["Uttar pradesh", "Jharkhand", "Goa", "Gujarat"]
  }

];




let questionCount = 0;
let points=0;

window.onload = function() {
  show(questionCount);

};


function next() {

  if(questionCount==questions.length-1){
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(questionCount);

let userAnswer=document.querySelector("li.option.active").innerHTML;
//check

if (userAnswer == questions[questionCount].answer) {
  points += 10;
  sessionStorage.setItem("points", points);
}
console.log(points);
questionCount++;
show(questionCount);
}


function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul>
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0;i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
