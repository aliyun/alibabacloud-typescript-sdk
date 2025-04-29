// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeScheduledTasksResponseBodyScheduledTasks } from "./DescribeScheduledTasksResponseBodyScheduledTasks";


export class DescribeScheduledTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The information collection of the scheduled tasks.
   */
  scheduledTasks?: DescribeScheduledTasksResponseBodyScheduledTasks[];
  /**
   * @remarks
   * The total number of scheduled tasks.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scheduledTasks: 'ScheduledTasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      scheduledTasks: { 'type': 'array', 'itemType': DescribeScheduledTasksResponseBodyScheduledTasks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scheduledTasks)) {
      $dara.Model.validateArray(this.scheduledTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

