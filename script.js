// Creare un To Do List
//  ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano(true / false) che indica se il todo è stato fatto oppure no
// per le azioni fatte quando ci clicchi sopra deve sottolinearsi al centro (come se fosse cancellato)
// Stampare su schermo
// Aggiungere sopra la lista una casella di input per aggiungere dei To Do alla Lista

const toDoList = new Vue({
    el: '#list',
    data: {
        mylist: [
            {
                text: 'Go for a run',
                done: false,
            },
            {
                text: 'Go to the bank',
                done: false,
            },
            {
                text: 'Go to work',
                done: false,
            },
            {
                text: 'Go to the pub for a Pint',
                done: false,
            },
            {
                text: 'Get back home and cook dinner',
                done: false,
            },
            {
                text: 'After dinner, chill and watch a movie',
                done: false,
            },
        ],
        newTask: '',
        
    },
    methods: {
        add() {
            const task = {
               text: this.newTask,
               done: false,
           } 
           this.mylist.push(newTask)
        }
    },
});
