import { Component, computed, signal } from '@angular/core';
import type { ExperienceRole } from '@rakesh-portfolio/model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly showAllRoles = signal(false);
  readonly visibleRoles = computed(() =>
    this.showAllRoles() ? this.roles : this.roles.slice(0, 3),
  );

  readonly roles: ExperienceRole[] = [
    {
      title: 'Engineer III, Software',
      company: 'Omnicell',
      dates: 'Sep 2026 - Present',
      summary:
        'Building pharmacy inventory optimization software for healthcare.',
    },
    {
      title: 'Senior Software Design Engineer',
      company: 'WinWire',
      dates: 'Sep 2024 - Sep 2026',
      summary:
        'Developing Angular and .NET microservices with real-time analytics.',
    },
    {
      title: 'Senior Software Engineer',
      company: 'CitiusTech',
      dates: 'Nov 2021 - Aug 2024',
      summary:
        'Built healthcare applications and HL7 / FHIR interoperability solutions.',
    },
    {
      title: 'Associate',
      company: 'PricewaterhouseCoopers (PwC)',
      dates: 'Aug 2021 - Nov 2021',
      summary:
        'Worked with CyberArk privilege management to implement multi-factor authentication and secure credential storage.',
    },
    {
      title: 'Associate Professional Software Engineer',
      company: 'DXC Technology',
      dates: 'Jun 2020 - Jul 2021',
      summary:
        'Contributed to ASP.NET enterprise solutions and developed a healthcare management application with Angular and .NET Core.',
    },
  ];
}
