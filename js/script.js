const faqContainer = document.querySelectorAll('.faq_text_container');
const faqA = document.querySelectorAll('.faq_text');
const faqQ = document.querySelectorAll('.faq_question');
const dropDown = document.querySelectorAll('.dropdown');

let answerShown = false;
let faqIndex = 6;

//Add (and remove) styling to FAQ Question and rotate the arrow.
const boldTextandArrow = function (index) {
faqQ.forEach(function(bold) {
bold.style.fontWeight = 'normal';
})
dropDown.forEach(function(arrow) {
arrow.style.transform = "";
})
faqQ[index].style.fontWeight = 'bold';
dropDown[index].style.transform = "rotate(180deg)";
};

faqContainer.forEach(function(faq, index) {
    //Whenever a specific FAQ is clicked its answer will be shown (including styling)
    faq.addEventListener("click", function() {
        if (answerShown === false) {
        faqA[index].classList.remove('hidden');
        answerShown = true;
        boldTextandArrow(index);
        //If the FAQ is already clicked hide the answer and remove styling
        } if (faqIndex === index) {
            faqA.forEach(function(answer) {
            answer.classList.add('hidden');
            faqIndex = 7;
            });
            faqQ.forEach(function(bold) {
            bold.style.fontWeight = 'normal';
            dropDown[index].style.transform = "";
            });
        //Cycle between FAQ answers being shown or not
        } else {
        faqA.forEach(function(answer) {
        answer.classList.add('hidden');
        faqA[index].classList.remove('hidden'); 
        }) 
        boldTextandArrow(index);
        faqIndex = index;
        }
    });
});

