// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInsightsEventsCountRequest extends $dara.Model {
  /**
   * @example
   * 2026-01-07
   */
  date?: string;
  /**
   * @example
   * 2026-01-07T06:00:00Z
   */
  endTime?: string;
  /**
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

