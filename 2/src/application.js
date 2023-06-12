import axios from 'axios';

const routes = {
  tasksPath: () => '/api/tasks',
};

// BEGIN
const todo = async () => {

  const form = document.querySelector('.form-inline');
  const input = document.querySelector('input[type="text"]');
  const tasks = document.querySelector('#tasks');

  const allTasks = await axios.get(routes.tasksPath()).then(result => result.data.items.reverse());

  async function addTask(name) {
    allTasks.push({name})
  }

  async function getTasks() {
    const response = await axios.get(routes.tasksPath());
    return response.data.items;
  
  }

  function render(taskList) { 
    tasks.innerHTML = '';
    for (let task of taskList) {
      const item = document.createElement('li');
      item.textContent = task.name;
      item.className = 'list-group-item';
      tasks.prepend(item);
    }
  }



  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = input.value;
    if (name) {
      await addTask(name);
      input.value = '';
      render(allTasks); 
    }
    await axios.post(routes.tasksPath(), { name: name })


    console.log(allTasks)
    
  });

  render(allTasks);
}


export default todo;
// END