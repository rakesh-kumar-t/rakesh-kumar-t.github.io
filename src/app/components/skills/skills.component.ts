import { Component } from '@angular/core';

interface SkillGroup {
  name: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  readonly groups: SkillGroup[] = [
    {
      name: 'Frontend',
      skills: ['Angular', 'TypeScript', 'RxJS / NgRx', 'Micro-frontends', 'HTML & CSS']
    },
    {
      name: 'Backend',
      skills: ['.NET 10', 'C#', 'REST APIs', 'GraphQL', 'Microservices']
    },
    {
      name: 'Cloud & data',
      skills: ['Azure', 'PostgreSQL', 'SQL Server', 'Apache Kafka', 'Docker']
    },
    {
      name: 'Quality & security',
      skills: ['OWASP', 'xUnit / NUnit', 'Karma / Jasmine', 'Clean architecture']
    }
  ];
}
