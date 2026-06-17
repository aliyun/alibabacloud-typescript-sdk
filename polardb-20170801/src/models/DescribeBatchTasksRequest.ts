// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBatchTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query range. Specify the time in UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-04-06T20:52:40Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer. The default is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query range. Specify the time in UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-04-06T20:51:40Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task statuses.
   * 
   * > If you omit this parameter, the operation returns tasks of all statuses.
   */
  status?: string[];
  /**
   * @remarks
   * The type of the batch task.
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
      status: 'Status',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
      taskType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

