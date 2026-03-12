// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledReportsRequest extends $dara.Model {
  /**
   * @remarks
   * The task end time based on which the reports are filtered. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. If you leave this parameter unspecified, all reports are returned.
   * 
   * @example
   * 2026-01-25T02:02:00Z
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
   * The number of reports returned on each page. Default value: 20. Maximum value: 100.
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
   * The task start time based on which the reports are filtered. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. If you leave this parameter unspecified, all reports are returned.
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

