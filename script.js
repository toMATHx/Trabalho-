document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('itemInput');
    const addButton = document.getElementById('addButton');
    const shoppingList = document.getElementById('shoppingList');

    addButton.addEventListener('click', () => {
        const itemText = itemInput.value.trim();
        if (itemText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span class="item-text">${itemText}</span>
                <button class="delete-btn">Remover</button>
            `;
            
            listItem.querySelector('.item-text').addEventListener('click', () => {
                listItem.querySelector('.item-text').classList.toggle('completed');
            });

            listItem.querySelector('.delete-btn').addEventListener('click', () => {
                shoppingList.removeChild(listItem);
            });

            shoppingList.appendChild(listItem);
            itemInput.value = '';
            itemInput.focus();
        }
    });

    itemInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });
});