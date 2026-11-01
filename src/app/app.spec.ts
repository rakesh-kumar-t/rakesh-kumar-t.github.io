import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the portfolio profile, skills, and experience', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Rakesh Kumar T');
    expect(compiled.querySelector('#skills-title')?.textContent).toContain('Core skills');
    expect(compiled.querySelectorAll('.experience-item').length).toBe(3);
    expect(compiled.querySelector('.experience-item time')?.textContent)
      .toContain('Sep 2026 – Present');
    expect(compiled.querySelectorAll('.experience-item time')[1].textContent)
      .toContain('Sep 2024 – Sep 2026');
    expect(compiled.textContent).not.toContain('@');
    expect(compiled.querySelector('a[href^="tel:"]')).toBeNull();
    expect(compiled.querySelector('.profile-photo')?.getAttribute('src'))
      .toBe('assets/images/img_bg_4.jpg');
  });
});
