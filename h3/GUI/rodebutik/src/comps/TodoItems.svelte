<script lang="ts">
  type Todo = {
    id: number;
    title: string;
    completed: boolean;
  };
  export let todos: Todo[];
</script>

<h1>todoItems</h1>
{#each todos as todo}
  <div>{todo.title}</div>
{/each}

<style></style>
