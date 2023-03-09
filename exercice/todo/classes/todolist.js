import { Todo } from "./todo.js"

export class Todolist {
    constructor(){
        this.todos = []
        this.todosRecherche = []
        this.cpt = 0
    }

    ajouterTodo(titre,contenu,statut){
        const todo = new Todo(++this.cpt,titre,contenu,statut)
        this.todos.push(todo);
    }

    recupererTodo(id){
        return this.todos.find(todo => todo.id == id)
    }

    modifierTodo(id,titre,contenu,statut){
        const todo = this.recupererTodo(id);
        if(todo != undefined){
            todo.titre = titre
            todo.contenu = contenu
            return true
        }
        return false
    }

    modifierTodoStatut(id){
        const todo = this.recupererTodo(id);
        if(todo != undefined){
            todo.statut = !todo.statut
            return true
        }
        return false
    }
    

    supprimerTodo(id){
        const todoADelete = this.recupererTodo(id)
        if(todoADelete != undefined){
            this.todos = this.todos.filter(todo => todo.id != id)
            return true
        }
        return false
    }

    rechercheTodo(search){
        this.todos.forEach(todo => {
            if(todo.titre.includes(search)){
                this.todosRecherche.push(todo);
                console.log(this.todosRecherche)
            }
        })
    }
}