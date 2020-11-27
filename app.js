
const btns = document.querySelectorAll(".question-button");
const questions = document.querySelectorAll(".question");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const item = e.currentTarget.parentElement.parentElement;
        item.classList.toggle('active');

        questions.forEach(function (question) {
            if (question !== item) {
                question.classList.remove('active');
            };
        });
    });
});