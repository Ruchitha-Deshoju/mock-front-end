import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  user_tasks: { mentor_name: String, interview_type: String}[] = [];
  constructor() { }
  

}
