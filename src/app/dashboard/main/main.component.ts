import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user_tasks: { mentor_name: String, interview_type: String}[] = [];
  constructor(private router: Router, private taskService: TasksService) { }

  ngOnInit() {
    this.user_tasks = this.taskService.user_tasks
  }
  takeTo() {
    this.router.navigate(['/dashboard/1']); 
  }

}
