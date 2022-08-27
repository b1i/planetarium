const correctAnswers = ['A','B','C','A','A','C','B','B','B','A','C','A','C','B','C','B','C','B','A','A','B','C','B','A','C','A','A','C','C','B','B','C','B','A','C','C','B','A','C','A','C','B','A','C','A','C','B','A','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener('submit', e =>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value,form.q4.value,form.q11.value,form.q12.value,form.q13.value,form.q14.value,form.q15.value,form.q16.value,form.q17.value,form.q18.value,form.q19.value,form.q20.value,form.q21.value,form.q22.value,form.q23.value,form.q24.value,form.q25.value,form.q26.value,form.q27.value,form.q28.value,form.q29.value,form.q30.value,form.q31.value,form.q32.value,form.q33.value,form.q34.value,form.q35.value,form.q36.value,form.q37.value,form.q38.value,form.q39.value,form.q40.value,form.q41.value,form.q42.value,form.q43.value,form.q44.value,form.q45.value,form.q46.value,form.q47.value,form.q48.value,form.q49.value,form.q50.value];

    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswers[index]){
            score += 2;
        }
    });

    // show result on page
    window.scrollTo(0,0);
    // result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        // result.querySelector('span').textContent = `${output}%`;
        if(score<50){
            result.querySelector('p').textContent = `Sorry... you are ${output}% right, better luck next time`;
        }else{
            result.querySelector('p').textContent = `Yes!, you are ${output}% right, welcome aboard 🚀`;
        }
        if(output === score){
            clearInterval(timer);
           
            
        }else {
            output++;
           
    
            
        }
     
    },35);
    
});
