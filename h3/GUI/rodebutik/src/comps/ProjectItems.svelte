<script lang="ts">
  import { onMount } from "svelte";
  import { data } from "../data/somData";
</script>

{#each data as project}
  <div>
    <h3>{project.projectTitle}</h3>
    <p>{project.projectDescription}</p>
    <p>{project.projectCost} kr</p>
    <button> buy now </button>
  </div>
{/each}

<style>
  div {
    border: 1px solid gray;
    padding: 1rem;
    margin: 1rem;
  }
  h3 {
    color: blue;
  }
  p {
    color: red;
  }
  button {
    background-color: #f1f1f1;
    border: 1px solid gray;
    padding: 0.5rem;
    margin: 0.5rem;
  }
</style>
