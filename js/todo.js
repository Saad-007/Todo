let todoList = [
  {
    item:'Soo jao',
    dueDate:'4/04/2024'
  },
  {
    item:'Uth jao',
    dueDate:'4/04/2024',
  }
];
displayItem();
function addTodo(){
  let inputElement = document.querySelector('#todoItem');
  let dateElement = document.querySelector('#todoDate');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem,dueDate: todoDate});
  inputElement.value = '';
  dateElement.value = '';
  displayItem();
}
function displayItem(){
  let containerElement = document.querySelector('.todo-Container');

  let newHtml = '';

  for(let i=0; i<todoList.length;i++){
    let {item,dueDate} = todoList[i];
    newHtml += `
              <span>${item}</span>
              <span>${dueDate}</span>
              <button class="delete-button" onclick ="todoList.splice(${i},1);displayItem();">Delete</button>
    
    
    ` 
  }
  containerElement.innerHTML = newHtml;
}