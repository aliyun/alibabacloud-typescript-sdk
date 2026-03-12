// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandAloneReportsRequest extends $dara.Model {
  /**
   * @remarks
   * The task end time based on which the reports are filtered. If you do not specify this parameter, all reports are returned.
   * 
   * @example
   * 2026-01-19T02:20:20Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records on each page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The task start time based on which the reports are filtered. If you do not specify this parameter, all reports are returned.
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
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

