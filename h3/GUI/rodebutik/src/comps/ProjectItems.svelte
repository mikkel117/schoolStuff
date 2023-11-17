<script lang="ts">
  import { projects, DeleteProject } from "$lib/store/ProjectsStore";
  export let editProject: boolean;
  export let projectToEdit: any;
  let tryingToDelete: boolean = false;
  let projectId: number;
  let projectTitle: string;
  function EditProject(id: number) {
    editProject = true;
    let Index = $projects.findIndex((project) => project.id === id);
    console.log(Index);
    projectToEdit = $projects[Index];
  }

  function deleteProject(id: number) {
    DeleteProject(id);
    tryingToDelete = false;
  }

  function handleDeleteClick(project: any) {
    tryingToDelete = true;
    projectId = project.id;
    projectTitle = project.projectTitle;
  }
</script>

{#each $projects as project}
  <div class="wrapper">
    <span>
      <h3>{project.projectTitle}</h3>
      <p class="description">{project.projectDescription}</p>
    </span>
    <div class="projectListBuy">
      <p>{project.projectCost} kr</p>
      <div class="buttonWrapper">
        <button> buy now </button>
        <button class="editButton" on:click={() => EditProject(project.id)}>
          edit
        </button>
        <button
          class="deleteButton"
          on:click={() => handleDeleteClick(project)}
        >
          x
        </button>
      </div>
    </div>
  </div>
{/each}

{#if tryingToDelete}
  <div class="modalBg">
    <div class="modal">
      <h2>
        Are you sure you want to delete <span class="modalProjectTitle"
          >{projectTitle}</span
        >?
      </h2>
      <div>
        <button
          class="modalButton modalButtonYes"
          on:click={() => deleteProject(projectId)}>Yes</button
        >
        <button class="modalButton" on:click={() => (tryingToDelete = false)}
          >No</button
        >
      </div>
    </div>
  </div>
{/if}

<style>
  .wrapper {
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 30%;
    border: 1px solid gray;
    padding: 1rem;
    margin: 0 auto;
  }
  .projectListBuy {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  h3 {
    color: #eeac00;
  }
  .buttonWrapper {
    display: flex;
    flex-direction: row;
    /* width: 100%;
    justify-content: space-between; */
  }
  button {
    background-color: #00a3b0;
    color: white;
    font-weight: bold;
    padding: 0.5rem;
  }
  button:hover {
    background-color: #005c7b;
  }
  .editButton {
    margin: 0 1rem;
    background-color: #eeac00;
  }
  .editButton:hover {
    background-color: #b37e00;
  }
  .deleteButton {
    background-color: #ff0000;
  }
  .deleteButton:hover {
    background-color: #b30000;
  }
  .wrapper > span {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .description {
    margin: 0.5rem 0;
    font-weight: bold;
    font-size: 0.9rem;
    word-break: break-all;
  }

  .modalBg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.705);
    z-index: 1000;
  }
  .modal {
    position: fixed;
    width: 500px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(0, 28, 41);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    text-align: center;
  }
  .modalProjectTitle {
    font-weight: bold;
    font-size: 1.5rem;
    color: #eeac00;
  }

  .modalButton {
    background-color: #00a3b0;
    color: white;
    font-weight: bold;
    padding: 0.5rem;
    margin: 0.5rem;
    width: 100px;
  }

  .modalButtonYes {
    background-color: #ff0000;
  }
  .modalButtonYes:hover {
    background-color: #b30000;
  }
</style>
