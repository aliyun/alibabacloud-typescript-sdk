// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBatchTasksShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the creation time range.
   * 
   * The time is in ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-04-06T20:52:40Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The start of the creation time range.
   * 
   * The time is in ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-04-06T20:51:40Z
   */
  startTime?: string;
  /**
   * @remarks
   * The list of task statuses.
   * 
   * > If this parameter is left empty, scheduled tasks in all statuses are queried by default.
   */
  statusShrink?: string;
  /**
   * @remarks
   * The batch task type.
   * 
   * @example
   * polarclaw_install_skills
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      statusShrink: 'Status',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      statusShrink: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

