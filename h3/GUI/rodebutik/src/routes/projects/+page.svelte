<script lang="ts">
  import ProjectItems from "../../comps/ProjectItems.svelte";
  import AddProject from "../../comps/AddProject.svelte";
  let editProject: boolean = false;
  let projectToEdit: any;
</script>

<section class="projects">
  <AddProject bind:editProject bind:projectToEdit />
  <ProjectItems bind:editProject bind:projectToEdit />
</section>
