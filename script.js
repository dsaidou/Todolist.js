const input = document.querySelector('input');
const addButton = document.querySelector('#add');
const toDoContainer = document.querySelector('.container');
const fake = document.querySelector('#fake');



function addTodo() {

    if (input.value != ""){

        fake.classList.add('display');
        fake.classList.remove('item');

        const item = document.createElement('div');
        item.classList.add('item');

        const p = document.createElement('p');
        p.innerText = input.value;
          
        const checked = document.createElement('button');
        checked.innerHTML = '<i class="fa-regular fa-square-check"></i>';


        const trash = document.createElement('button');
        trash.innerHTML = '<i class="fa-solid fa-trash"></i>';

        item.appendChild(p)
        item.appendChild(checked);
        item.appendChild(trash);

        toDoContainer.appendChild(item);


        input.value= "";
        
        trash.addEventListener('click', () => {
        toDoContainer.removeChild(item);
        })

        checked.addEventListener('click', () =>{
            p.style.textDecoration = 'line-through';
            p.style.textDecorationColor = 'var(--rouge)';
            p.style.textDecorationThickness = '0.25em';
        })

        const itemLength = document.querySelectorAll('.item').length;
        if (itemLength > 9){
            toDoContainer.removeChild(item)
        }
    

    }

}

addButton.addEventListener ('click', addTodo);

input.addEventListener('keyup',(e) =>{
    if(e.keyCode === 13) {
        addTodo();
    }
})