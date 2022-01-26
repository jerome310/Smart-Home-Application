// About Us Feature

function phoneAppear() {
  let phoneRow = document.querySelectorAll(".about-us");

  phoneRow.forEach((phones) => {
    let phonePosition = phones.getBoundingClientRect().top;
    let phoneScroll = window.innerHeight / 1.5;
    if (phonePosition < phoneScroll) {
      phones.classList.add("phonesAppear");
    }
  });
}

window.addEventListener("scroll", phoneAppear);



// Reviews Feature
const people = [
  {
    id: 1,
    img: "/img/testimonial-one.svg",
    name: 'Cham Lucky',
    job: 'Product designer',
    description: 'our company, we do ongoing research with our target audience. This includes 30-45 minute phone interviews. It was difficult to conduct the interview, really listen, and ask good follow up questions'
  },
  {
    id: 2,
    img: "/img/testimonial-two.svg",
    name: 'Stephen Scopic',
    job: 'Custom IT Solutions Firm',
    description: 'We meet new clients and more often than not establish long-term business relationships, all through Guru. The flexibility in how projects can be structured'
  },
  {
    id: 3,
    img: "/img/testimonial-three.svg",
    name: 'Russell Lee',
    job: 'Writer',
    description: 'It is easy to communicate with clients through their message system and their SafePay feature ensures that all funds are secured prior to any work being done.'
  },
  {
    id: 4,
    img: "/img/testimonial-four.svg",
    name: 'Scott Solace',
    job: 'Engineering Firm',
    description: 'At SOLACE Engineers, we provide engineering solutions and other services on various freelancing platforms. Among them all, Guru is the best and our first choice to invite clients.'
  }
];

let count = 0;
let personImg = document.querySelector('.person-img');
let personName = document.querySelector('.person-name');
let personJob = document.querySelector('.person-title');
let description = document.querySelector('.box-header');

nextButton = document.querySelector('.next-button');
previousButton = document.querySelector('.previous-button');

window.addEventListener('DOMContentLoaded', function(){
  peoplePicker()
});

function peoplePicker(){
  let info = people[count]
  personImg.src = info.img;
  personName.textContent = info.name;
  personJob.textContent = info.job;
  description.textContent = info.description;
}

nextButton.addEventListener('click',function(){
  count++;
  if(count == people.length){
  count = 0
  }
  peoplePicker()
})

previousButton.addEventListener('click',function(){
  count--;
  if(count < 0){
  count = people.length - 1
  }
  console.log(count);
  peoplePicker()
})

// FAQ's Feature
let questions = document.querySelectorAll('.faq-questions');

questions.forEach(function(question){
  let btns = question.querySelector('.plus-button');
  btns.addEventListener('click',function(){
    questions.forEach(function(item){
      if(item !== question){
        item.classList.remove('toggle-minus')
        }
    })
    question.classList.toggle('toggle-minus')
   minusButton()
  })
})

function minusButton(){
questions.forEach(function(button){
  let redButton = button.querySelector('.minus-button');
  redButton.addEventListener('click',function(){
  if(redButton.classList){
    redButton.parentElement.parentElement.remove('toggle-minus')
  } else {
    button.classList.toggle('toggle-minus')
  }
  console.log(redButton);
  })
})
}

// Footer Email Authenification
let input = document.querySelector("input");
let register = document.querySelector('.register-button');

register.addEventListener('click',function(){
  if(input.value == '@'){
    alert('Thank you for registering')
  } else {
    alert('Please provide @ to submit request')
  }
})