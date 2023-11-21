const inputBar = document.querySelector('#inputBar');
const pencil = document.querySelector('#pencil');
const answerBar = document.querySelector('.answerBar'); 

inputBar.addEventListener('input', () => {  
  const limit = 75;
  if (inputBar.value.length > limit) {
	inputBar.value = inputBar.value.substring(0, limit);
  	}
});

 pencil.addEventListener('click', () => {  
  const newAnswer = createNewAnswer(inputBar.value); 
	answerBar.appendChild(newAnswer);
  inputBar.value = ''; 
});

function createNewAnswer(text) {
  const newAnswer = document.createElement("div"); 
  newAnswer.className = "answerItem"; 
  
  const newAnswerText = document.createElement("div");
  newAnswerText.className = "answerText"; 
  newAnswerText.appendChild(document.createTextNode(text));
  
  const deleteButton = document.createElement("button");
  deleteButton.className = "deleteButton";
  deleteButton.appendChild(document.createTextNode("X"));
  deleteButton.addEventListener('click', () => {
    newAnswer.remove(); 
  });
  
  newAnswer.appendChild(newAnswerText);
  newAnswer.appendChild(deleteButton);
  
  return newAnswer;
}
