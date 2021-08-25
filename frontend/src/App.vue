<template>
    <div>
        <section class="todoapp" v-cloak>
            <header class="header">
                <h1>todos</h1>
                <!-- v-model 意味着该输入栏被修改的值会被写入 newTodo 对象。 类似的工具与方法称为：添加一个 v-bind 指令，将输入值与 newTodo 变量关联起来  -->
                <!-- @keyup.enter 意味着，当用户回车时，就会调用 addTodo 方法 -->
                <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?"
                       v-model="newTodo" @keyup.enter="addTodo">
            </header>
            <!-- v-show vue中指令(directive) -->
            <section class="main" v-show="todos.length">
                <ul class="todo-list">
                    <!-- .todo-list li.completed label {
                                color: #d9d9d9;
                                text-decoration: line-through;
                            }
                        当该 li 下的 todo.completed 为 true 时，此 li 将属于 class = completed 并被上述 CSS 渲染
                        未完成时标签为 <li class="todo">
                        完成时标签变为 <li class="todo completed">
                    -->
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
                // 用来保存新增加的任务信息， 从页面顶部的 input 标签中获取
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
            },
            removeTodo: function(todo) {
                var index = this.todos.indexOf(todo);
                // splice 衔接， 将数组的两部分重新衔接到一起， 即将中间部分删除。  PS: split 分割
                this.todos.splice(index, 1);
                for(var i = 0 ; i < this.todos.length; i ++){
                    this.todos[i].id = i;
                }
            }
        }
    };
</script>
