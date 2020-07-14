import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MentorsService {
  fontendMentors = [
    {
      name: "Saleem sir",
      mentor: "frontend"
    },
    {
      name: "Shylu mam",
      mentor: "frontEnd"
    },
    {
      name: "Naveen sir",
      mentor: "frontend"
    }
  ]
  backendMentors = [
    {
      name: "Shanthi mam",
      mentor: "backend"
    },
    {
      name: "Rathna mam",
      mentor: "backend"
    },
    {
      name: "Aparna mam",
      mentor: "backend"
    }
  ]
  BehaviouralMentors = [
    {
      name: "Hruthika mam",
      mentor: "Behavioural"
    },
    {
      name: "Minisha sir",
      mentor: "Behavioural"
    },
    {
      name: "Priyanka mam",
      mentor:  "Behavioural"
    }
  ]
  SystemDesignMentors = [
    {
      name: "Kavya mam",
      mentor: "system Design"
    },
    {
      name: "Aishwarya mam",
      mentor: "System Design"
    },
    {
      name: "Sarala mam",
      mentor: "System Design"
    }
  ]
  DataScienceMentors = [
    {
      name: "Bhavya mam",
      mentor: "dataScience"
    },
    {
      name: "Vasavi mam",
      mentor: "dataScience"
    }
  ]
  DataStructuresMentors = [
    {
      name: "Navya mam",
      mentor: "dataStructures"
    },
    {
      name: "Rachana mam",
      mentor: "dataStructures"
    },
    {
      name: "Prudhve sir",
      mentor: "dataStructures"
    }
  ]
  constructor() {}


}
