import { Injectable } from '@angular/core';
import type { DateRange } from '@rakesh-portfolio/model';

const MONTHS: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

@Injectable({ providedIn: 'root' })
export class PortfolioUtilService {
  calculateDuration(dates: string): string {
    const { start, end } = this.getDateRange(dates);
    return this.formatDuration(end - start);
  }

  calculateTotalDuration(dateRanges: string[]): string {
    const ranges = dateRanges.map(dates => this.getDateRange(dates));
    const earliestStart = Math.min(...ranges.map(range => range.start));
    const latestEnd = Math.max(...ranges.map(range => range.end));
    return this.formatDuration(latestEnd - earliestStart);
  }

  private getDateRange(dates: string): DateRange {
    const match =
      /^([A-Z][a-z]{2}) (\d{4}) - (Present|([A-Z][a-z]{2}) (\d{4}))$/.exec(
        dates,
      );
    if (!match) {
      throw new Error(`Invalid experience date range: ${dates}`);
    }

    const start = this.getMonthIndex(match[1], Number(match[2]));
    const now = new Date();
    const end =
      match[3] === 'Present'
        ? now.getFullYear() * 12 + now.getMonth()
        : this.getMonthIndex(match[4], Number(match[5]));

    if (end < start) {
      throw new Error(`Experience end date precedes start date: ${dates}`);
    }

    return { start, end };
  }

  private getMonthIndex(month: string, year: number): number {
    const monthNumber = MONTHS[month];
    if (monthNumber === undefined) {
      throw new Error(`Unknown month in experience date: ${month}`);
    }

    return year * 12 + monthNumber;
  }

  private formatDuration(months: number): string {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    return [
      years > 0 ? `${years}y` : '',
      remainingMonths > 0 ? `${remainingMonths}m` : '',
    ]
      .filter(Boolean)
      .join(' ');
  }
}
