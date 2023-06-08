let inputContainer= document.querySelector('.input-div')
let add= document.querySelector('.boton-agregar')
let input= document.querySelector('#input')

class Item{
    crearDiv(newTask){
    let div=document.createElement('div')
    let task=document.createElement('input')
    let editButton= document.createElement('button')
    let deleteButton= document.createElement('button')
    editButton.setAttribute('id','editButton')
    deleteButton.setAttribute('id','deleteButton')
    editButton.innerHTML='<i class="fa-solid fa-lock"></i>';
    deleteButton.innerHTML='<i class="fa-solid fa-trash"></i>';
    div.setAttribute('class','itemContainer')
    task.setAttribute('type','text')
    task.setAttribute('class','item-input')
    task.setAttribute('value',newTask)
    task.setAttribute('disabled','true')
    
    editButton.addEventListener('click', function(){
        if(task.disabled){ this.innerHTML='<i class="fa-solid fa-lock-open"></i>'
        } else this.innerHTML='<i class="fa-solid fa-lock"></i>'
        task.toggleAttribute('disabled');
    })

    deleteButton.addEventListener('click', function(){
        document.querySelector('.container').removeChild(div)
    })
    div.appendChild(task)
    div.appendChild(editButton)
    div.appendChild(deleteButton)
    document.querySelector('.container').appendChild(div)
    }

    constructor(newTask){
        this.crearDiv(newTask)
    }
    
}

add.addEventListener('click', function(){
    if(input.value.length>0){new Item(input.value).crearDiv;
    input.value=''
    } else alert('No characters have been found!!! :c')
})

