<template>
    <div>
        <section class="todoapp" v-cloak>
            <header class="header">
                <h1>todos</h1>
                <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?"
                       v-model="newTodo" @keyup.enter="addTodo">
            </header>
            <!-- v-show vue中指令(directive) -->
            <section class="main" v-show="todos.length">
                <ul class="todo-list">
                    <li class="todo" v-for="todo in todos" :key="todo.id" :class="{completed: todo.completed}">
                        <div class="view">
                            <input class="toggle" type="checkbox" v-model="todo.completed">
                            <label>{{ todo.title }}</label>
                            <button class="destroy" @click="removeTodo(todo)"></button>
                        </div>
                    </li>
                </ul>
            </section>
        </section>
    </div>
</template>

<script>
    import "./assets/css/base.css"
    import "./assets/css/app.css"

    export default {
        name: "app",
        data() {
            return {
                newTodo: "",
                todos: [{id: 0, title: "My test todo item", completed: false}],
            }
        },
        methods: {
            addTodo: function() {
                var value = this.newTodo && this.newTodo.trim();
                if(!value) {
                    return;
                }
                this.todos.push({
                    id: this.todos.length,
                    title: value,
                    completed: false
                });
                this.newTodo = "";
            }
        }
    };
</script>
