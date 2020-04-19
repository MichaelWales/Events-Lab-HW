document.addEventListener('DOMContentLoaded', () => {
  const newDoggoForm = document.querySelector('#new-doggo-form');
  newDoggoForm.addEventListener('submit', handleNewDoggoFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewDoggoFormSubmit = function (event) {
  event.preventDefault();
  // console.log(event);
  const goodListItem = createGoodListItem(event.target);
  const goodList = document.querySelector('#goodgood-list');
  goodList.appendChild(goodListItem);

  event.target.reset();
}

const createGoodListItem = function (form) {
  const goodListItem = document.createElement('li');
  goodListItem.classList.add('goodgood-list-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  goodListItem.appendChild(name);

  const type = document.createElement('h3');
  type.textContent = form.type.value;
  goodListItem.appendChild(type);

  const species = document.createElement('h3');
  species.textContent = form.species.value;
  goodListItem.appendChild(species);

  const status = document.createElement('p');
  status.textContent = form.status.value;
  goodListItem.appendChild(status);

  return goodListItem;

}

const handleDeleteAllClick = function (event) {
  const goodList = document.querySelector('#goodgood-list');
  goodList.innerHTML = '';
}
