<script lang="ts">
  type Todo = {
    id: number;
    title: string;
    completed: boolean;
  };
  import TodoItems from "../../comps/TodoItems.svelte";
  let todos: Todo[] = [];
  let todoTitle = "";

  function addTodo() {
    todos = [
      ...todos,
      {
        id: todos.length + 1,
        title: todoTitle,
        completed: false,
      },
    ];
    todoTitle = "";
  }
</script>

<h1>todo</h1>
<form on:submit|preventDefault={() => addTodo()}>
  <input type="text" bind:value={todoTitle} />
</form>
<TodoItems {todos} />

<style>
  input {
    border: 1px solid black;
  }
</style>
