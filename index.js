const questionsList = document.querySelectorAll('.question-item')
const answerList = document.querySelectorAll('.answer-item')

questionsList.forEach((question, index) =>{
    question.addEventListener('click', function(){
        const answer = answerList[index];
        if (answer.classList.contains('active')){ //if class already active remove
            answerList.forEach(answerItem => answerItem.classList.remove('active'));
        } else {// if class not active, remove all actives and activate de class
            answerList.forEach(answerItem => answerItem.classList.remove('active'));
            answer.classList.add('active');
        }
        
        
        
    })
})