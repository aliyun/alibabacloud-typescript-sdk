// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandAloneReportsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the query\\"s time range. The time must be in UTC and in the `YYYY-MM-DDTHH:mm:ssZ` format. If omitted, no end time filter is applied.
   * 
   * @example
   * 2026-01-19T02:20:20Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of the page to return. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default: 20. Maximum: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  reportType?: string;
  /**
   * @remarks
   * The start of the query\\"s time range. The time must be in UTC and in the `YYYY-MM-DDTHH:mm:ssZ` format. If omitted, no start time filter is applied.
   * 
   * @example
   * 2025-03-11T02:09:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      reportType: 'ReportType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      reportType: 'string',
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

