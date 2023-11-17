import { writable, type Writable } from "svelte/store";

import { data } from "../../data/somData";

export type ProjectType = {
  id: number;
  projectTitle: string;
  projectDescription: string;
  projectCost: number;
};

export const projects: Writable<any[]> = writable(data);

export function NewProject(data: any) {
  projects.update((project) => {
    project.push(data);
    return project;
  });
}

export function GetProject(index: number) {
  let project: any;
  projects.subscribe((projects) => {
    project = projects[index];
  });
  return project;
}

export function EditProject(data: any) {
  projects.update((project) => {
    let Index = project.findIndex((value) => value.id === data.id);
    project[Index] = data;
    return project;
  });
}

export function DeleteProject(id: number) {
  projects.update((project) => {
    project = project.filter((value) => value.id !== id);

    return project;
  });
}
