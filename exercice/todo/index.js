import express from "express"
import { Todolist } from "./classes/todolist.js";

const todolist = new Todolist()

const app = express()

app.use(express.json())

app.get('/todos',(req,res) => {
    res.json(todolist.todos);
})

app.get('/todos/:id',(req,res) => {
    const todo = todolist.recupererTodo(req.params.id)
    if(todo != undefined) {
        res.json(todo)
    }else {
        res.json({message : "aucun todo avec cet id"})
    }
})

app.post('/todos',(req,res) => {
    const {titre, contenu, statut} = req.body
    todolist.ajouterTodo(titre, contenu, statut)
    res.json({message : "todo ajouté"})
})

app.delete('/todos/:id',(req,res) => {
    if(todolist.supprimerTodo(req.params.id)) {
        res.json({message : "todo supprimé"})
    }else {
        res.json({message : "erreur"})
    }
})


app.put('/todos/:id',(req,res) => {
    if(req.body.titre != undefined ){
        const {titre, contenu} = req.body
        if(todolist.modifierTodo(req.params.id,titre,contenu)) {
            res.json({message : "todo modifié"})
        }else {
            res.json({message : "erreur modification"})
        }
    } else {
        if(todolist.modifierTodoStatut(req.params.id)) {
            res.json({message : "todo modifié"})
        }else {
            res.json({message : "erreur modification"})
        }
    }
    
})

app.get('/todos/search/:search',(req,res)=> {
    todolist.rechercheTodo(req.params.search)
    res.json(todolist.todosRecherche)
    todolist.todosRecherche = []
})

app.listen(3000, () => {
    console.log("Serveur lancé")
})
