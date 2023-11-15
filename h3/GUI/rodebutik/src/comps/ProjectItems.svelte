<script lang="ts">
  //import { data } from "../data/somData";
  export let data: any[];
</script>

{#each data as project}
  <div class="wrapper">
    <span>
      <h3>{project.projectTitle}</h3>
      <p class="description">{project.projectDescription}</p>
    </span>
    <div class="projectListBuy">
      <p>{project.projectCost} kr</p>
      <button> buy now </button>
    </div>
  </div>
{/each}

<style>
  .wrapper {
    display: flex;
    justify-content: space-between;
    border: 1px solid gray;
    padding: 1rem;
    margin: 1rem;
  }
  .projectListBuy {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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
  }
  button:hover {
    background-color: #8b8b8b;
  }
</style>
