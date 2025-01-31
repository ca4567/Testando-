//seleção dos id do html
const tareflist = document.getElemenByid('tareflist');   
const addbutton = document.getElemenByid('addbutton');
const removebutton = document.getElementByid('removebutton');
const higlihgtbutton = document.getElementByid('higlihgtbutton');                                            . 
const output = document.getElementByid('output')

//variável
let tarefcount = 5;

//comandos do botão de de adicinar tarefas
addbutton.addEventListener('click', () =>{
    tarefcount++;
    const newtaref = document.CreateElement('li');
    newtaref.textContente = `tarefa ${tarefcount}`;
    newtaref.className = 'tarefa';
    tareflist.appendChild(newtaref);
    output.textContent `tarefa ${newtaref} adicionado`;
});

//conandos do botão de remover tarefas
removeButton.addEventListener('click', () =>{
   const lasttaref = tarefList.lastElementChild;
   if (lasttaref) {
       tarefList.removeChild(lasttaref)
       output.textContent = 'última tarefa Removida';
   }else{
       output.textContent = 'Não há mais itens para remover.'
   }

});

//comandos do botão de marcar tarefas
higlightButton.addEventListener('click', => {
    const tarefs = document.querySelectorAll('.tarefa');
    tarefs.forEach((tarefa)=> {
       item.classlist.toggle('higlightButton');
    });
    output.textContent = 'tarefas destacadas';
});














