<script lang="ts">
  type Todo = {
    id: number;
    title: string;
    completed: boolean;
  };
  export let todos: Todo[];
</script>

{#each todos as todo}
  <div class:todo.completed={todo.completed}>
    <p>
      {todo.title}
    </p>
    <button>x</button>
  </div>
{/each}

<style>
  div {
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
  }
  button {
    border: 1px solid black;
    padding: 0.5rem;
    margin: 0.5rem;
  }
</style>
