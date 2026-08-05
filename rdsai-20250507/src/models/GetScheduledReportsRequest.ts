// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledReportsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for filtering (format: YYYY-MM-DDTHH:mm:ssZ). If not specified, no end time filter is applied.
   * 
   * @example
   * 2026-01-25T02:02:00Z
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
  /**
   * @remarks
   * The inspection task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 847268a4-196f-416b-aa12-bfe0c115****
   */
  scheduledId?: string;
  /**
   * @remarks
   * The start time for filtering (format: YYYY-MM-DDTHH:mm:ssZ). If not specified, no start time filter is applied.
   * 
   * @example
   * 2026-01-25T01:02:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scheduledId: 'ScheduledId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scheduledId: 'string',
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

