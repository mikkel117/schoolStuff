<script lang="ts">
  import { projects, NewProject, EditProject } from "$lib/store/ProjectsStore";
  export let editProject: boolean;
  export let projectToEdit: any;
  let showAddProject: boolean = false;
  function toggleAddProject() {
    showAddProject = !showAddProject;
  }
  function toggleEditProject() {
    editProject = !editProject;
  }
  function handleSubmit(e: SubmitEvent) {
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get("fTitle");
    const description = formData.get("fDescription");
    const cost = formData.get("fCost");
    let newProject = {
      id: $projects.length + 1,
      projectTitle: title,
      projectDescription: description,
      projectCost: cost,
    };
    NewProject(newProject);
    (e.target as HTMLFormElement).reset();
  }

  function editSubmit(e: SubmitEvent) {
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get("fTitle");
    const description = formData.get("fDescription");
    const cost = formData.get("fCost");
    let Project = {
      id: projectToEdit.id,
      projectTitle: title,
      projectDescription: description,
      projectCost: cost,
    };
    EditProject(Project);
    (e.target as HTMLFormElement).reset();
    editProject = false;
  }
</script>

{#if showAddProject}
  <h2>add project</h2>
  <form action="" on:submit|preventDefault={handleSubmit}>
    <button on:click={toggleAddProject} class="close">x</button>
    <label for="fTitle">title</label>
    <input type="text" required name="fTitle" />
    <label for="fCost">cost</label>
    <input type="number" required name="fCost" />
    <label for="fDescription">description</label>
    <textarea name="fDescription" cols="30" rows="3" required />
    <button type="submit" class="formSubmit">add project</button>
  </form>
{:else if editProject}
  <h2>edit project</h2>
  <form action="" on:submit|preventDefault={editSubmit}>
    <button on:click={toggleEditProject} class="close">x</button>
    <label for="fTitle">title</label>
    <input
      type="text"
      required
      name="fTitle"
      value={projectToEdit.projectTitle}
    />
    <label for="fCost">cost</label>
    <input
      type="number"
      required
      name="fCost"
      value={projectToEdit.projectCost}
    />
    <label for="fDescription">description</label>
    <textarea
      name="fDescription"
      cols="30"
      rows="3"
      required
      value={projectToEdit.projectDescription}
    />
    <button type="submit" class="formSubmit">save</button>
  </form>
{:else}
  <div class="buttonWrapper">
    <button on:click={toggleAddProject}>toggle add project</button>
  </div>
{/if}

<style>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
  textarea {
    font-size: 1.1rem;
    resize: none;
  }
  h2 {
    color: #eeac00;
    text-align: center;
    padding: 1rem;
  }
  .buttonWrapper {
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
  }
  form {
    width: 50%;

    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    padding: 1rem;
    margin: 0 auto;
  }
  label {
    margin: 0.5rem 0;
    font-weight: bold;
    font-size: 1.2rem;
  }
  input {
    padding: 0.5rem;
  }

  button {
    background-color: #00a3b0;
    color: white;
    font-weight: bold;
    padding: 0.5rem;
    margin: 0.5rem;
  }
  button:hover {
    background-color: #005c7b;
  }
  .close {
    align-self: flex-end;
    background-color: #00a3b0;
    color: white;
    font-weight: bold;
    padding: 0.5rem;
    margin: 0.5rem;
  }
  .formSubmit {
    font-weight: bold;
    font-size: 1.2rem;
  }
</style>
