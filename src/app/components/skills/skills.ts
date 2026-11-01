import { Component } from '@angular/core';
import type { SkillGroup } from '@rakesh-portfolio/model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
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
