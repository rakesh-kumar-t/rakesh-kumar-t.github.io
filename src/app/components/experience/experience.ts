import { Component } from '@angular/core';
import type { ExperienceRole } from '@rakesh-portfolio/model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  readonly roles: ExperienceRole[] = [
    {
      title: 'Engineer III, Software',
      company: 'Omnicell',
      dates: 'Sep 2026 – Present',
      summary: 'Building pharmacy inventory optimization software for healthcare.'
    },
    {
      title: 'Senior Software Design Engineer',
      company: 'WinWire',
      dates: 'Sep 2024 – Sep 2026',
      summary: 'Developing Angular and .NET microservices with real-time analytics.'
    },
    {
      title: 'Senior Software Engineer',
      company: 'CitiusTech',
      dates: 'Nov 2021 – Aug 2024',
      summary: 'Built healthcare applications and HL7 / FHIR interoperability solutions.'
    }
  ];
}
