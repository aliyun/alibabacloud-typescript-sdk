// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInsightsEventsCountRequest extends $dara.Model {
  /**
   * @remarks
   * The date to query. The format is `yyyy-MM-dd`.
   * 
   * @example
   * 2026-01-07
   */
  date?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * > - - If Date, StartTime, and EndTime are all left empty, the system queries the number of events in the last 24 hours.
   * >
   * >   - If Date is specified, the StartTime and EndTime parameters are ignored. The system queries the number of events on the specified date.
   * >
   * >   - If Date is left empty and both StartTime and EndTime are specified, the system queries the number of events in the specified time range.
   * 
   * @example
   * 2026-01-07T06:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2025-12-01T02:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

