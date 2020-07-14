import { Component, OnInit } from '@angular/core';
import { MentorsService } from './mentors.service'
import { HttpClient } from '@angular/common/http';
import { TasksService } from '../main/tasks.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  display_one = true
  display_two = false
  display_three=false
  text: String = "What would you like to practice?"
  title: String = "NEW INTERVIEW PRACTICE"
  button_one: String = "< Back"
  button_two: String = "Next >"
  mentor_name: String
  
  interview_list:{name: String, mentor: String }[] = [];
  constructor(private mentors: MentorsService, private http: HttpClient, private taskService: TasksService) { }

  ngOnInit(){}
  goNext() {
    this.display_one = false
    this.display_two = true
    this.display_three= false
  }
  goBack() {
    this.display_two = false
    this.display_one = true
    this.display_three= false
    this.button_two = "Next >"
    this.title = "NEW INTERVIEW PRACTICE"
  }

  DataStructures = "Practice questions asked by real companies in phone screens and on-site interviews, using code execution and test cases and video chat"
  Behavioural = "Practice behavioral interview questions, covering topics such as describing your recent professional experience, workplace challenges, teamwork skills, and more!"
  SystemDesign = "Practice system design questions covering topics such as API design, scaling, performance, data modeling, network architecture and more"
  frontEnd = "Practice frontend interview topics across the stack, from layout and visual design using HTML and CSS, to JavaScript and DOM manipulation fundamentals"
  AppliedDataScience = "Practice the process of translating a business problem into a mathematical one, applying data science skills in real-time, over video with talented peers"
  Backend = "Practice backend interview topics across node js, express js , authentication and mongoDB and designing backend architecture"

  switchText(num: number) {
    switch(num) {
      case 1: this.text = this.frontEnd
              this.interview_list = this.mentors.fontendMentors
              this.title = "FRONTEND DEVELOPMENT"
      break
      case 2: this.text = this.Backend
              this.interview_list = this.mentors.backendMentors
              this.title = "BACKEND DEVELOPMENT"
      break
      case 3: this.text = this.Behavioural
              this.interview_list = this.mentors.BehaviouralMentors
              this.title = "BEHAVIOURAL"
      break
      case 4: this.text = this.SystemDesign
              this.interview_list = this.mentors.SystemDesignMentors
              this.title = "SYSTEM DESIGN"
      break
      case 5: this.text = this.DataStructures
              this.interview_list = this.mentors.DataStructuresMentors
              this.title = "DATA STRUCTURES"
      break
      case 6: this.text = this.AppliedDataScience
              this.interview_list = this.mentors.DataScienceMentors
              this.title = "APPLIED DATA SCIENCE"
    }
  }

  sendData(name: String, mentor: String) {
    console.log(name, mentor) //SEND TO BACKEND
    this.taskService.user_tasks.push({mentor_name: name, interview_type: mentor})
    console.log(this.taskService.user_tasks)
    this.button_two = "Schedule interview"
    this.display_three=true
    this.display_two=false
    this.mentor_name = name
  }
}


