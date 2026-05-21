const input = document.getElementById('input')
const button = document.getElementById('button')
const display = document.getElementById('display')

function inserirTarefa() {
    let tarefa = input.value

    if (tarefa === '') {
        alert('Digite uma tarefa!')
        return
    }
    
    display.innerHTML += 
    `<div class="tarefa">
        ${tarefa}
        <div>
            <button class="remover">Remover</button>
            <button class="editar">Editar</button>
        </div>
    </div>`
    input.value = ''

}

button.addEventListener('click', inserirTarefa)

display.addEventListener('click', function(event) {
    if (event.target.classList.contains('remover')) {
        event.target.parentElement.parentElement.remove()   
    
    } else if (event.target.classList.contains('editar')) {
        let tarefaDiv = event.target.parentElement.parentElement
        let tarefaTexto = tarefaDiv.firstChild.textContent.trim()
        let novaTarefa = prompt('Edite a tarefa:', tarefaTexto)
        
        if (novaTarefa !== null && novaTarefa.trim() !== '') {
            tarefaDiv.firstChild.textContent = novaTarefa
        }
    }
})