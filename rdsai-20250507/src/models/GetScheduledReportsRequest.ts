// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledReportsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query range. The time must be in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2026-01-25T02:02:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The default value is 20, and the maximum value is 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the inspection task.
   * 
   * This parameter is required.
   * 
   * @example
   * 847268a4-196f-416b-aa12-bfe0c115****
   */
  scheduledId?: string;
  /**
   * @remarks
   * The start time of the query range. The time must be in the YYYY-MM-DDTHH:mm:ssZ format.
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

