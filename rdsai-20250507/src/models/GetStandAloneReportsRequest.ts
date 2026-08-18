// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandAloneReportsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time filter in the format of YYYY-MM-DDTHH:mm:ssZ. If this parameter is not specified, no end time filter is applied.
   * 
   * @example
   * 2026-01-19T02:20:20Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  reportType?: string;
  /**
   * @remarks
   * The start time filter in the format of YYYY-MM-DDTHH:mm:ssZ. If this parameter is not specified, no start time filter is applied.
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

