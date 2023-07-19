const accordian = document.querySelector("#faq-accordian")

accordian.addEventListener("click",(e)=>{
    const questionSelected = e.target.closest(".accordian-question")
    const panelSelected = e.target.closest(".accordian-panel")

    if (questionSelected == null) return;

    togglePanelState(panelSelected)
})


function togglePanelState(panelToActivate){

    const questions = panelToActivate.parentElement.querySelectorAll(".accordian-question")
    const answers = panelToActivate.parentElement.querySelectorAll(".accordian-answer")

    questions.forEach(question => {
        question.setAttribute("aria-expanded",false)
    });
    answers.forEach(answer=>{
        answer.setAttribute("aria-hidden",true)
    })

    panelToActivate.querySelector(".accordian-question").setAttribute("aria-expanded",true)
    panelToActivate.querySelector(".accordian-answer").setAttribute("aria-hidden",false)


}