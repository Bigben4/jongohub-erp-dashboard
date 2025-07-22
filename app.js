// Menu toggle for mobile view
window.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const sidemenu = document.querySelector('.sidemenu');

    if (menuBtn && sidemenu) {
        menuBtn.addEventListener('click', function() {
            sidemenu.classList.toggle('open');
        });
    }

    // Optional: Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 600 && sidemenu.classList.contains('open')) {
            if (!sidemenu.contains(e.target) && !menuBtn.contains(e.target)) {
                sidemenu.classList.remove('open');
            }
        }
    });
});



// todo fuctionslities 


 const todoList = document.getElementById('todo-list');
        const addBtn = document.getElementById('add-todo-btn');
        const viewAllBtn = document.getElementById('view-all-todo-btn');
        let todos = [];

        addBtn.onclick = function() {
            const todoText = prompt('Enter a new to do:');
            if (todoText) {
                todos.push(todoText);
                renderTodos();
            }
        };

        viewAllBtn.onclick = function() {
            renderTodos();
        };

        function renderTodos() {
            todoList.innerHTML = '';
            todos.forEach((todo, idx) => {
                const li = document.createElement('li');
                li.textContent = todo;
                todoList.appendChild(li);
            });
        }
