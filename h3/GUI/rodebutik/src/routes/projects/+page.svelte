<script lang="ts">
  import ProjectItems from "../../comps/ProjectItems.svelte";
  import { data } from "../../data/somData";
  let myData: any[] = data;

  function AddProject() {
    myData.push({
      projectTitle: "project 4",
      projectDescription: "project 4 description",
      projectCost: 4000,
    });
    myData = myData;
  }
</script>

<section class="projects">
  <button on:click={AddProject}>add project</button>
  <ProjectItems data={myData} />
</section>

<style>
  button {
    background-color: #f1f1f1;
    border: 1px solid gray;
    padding: 0.5rem;
    margin: 0.5rem;
  }
  button:hover {
    background-color: #8b8b8b;
  }
</style>
