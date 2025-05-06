// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTasksResponseBodyTasks } from "./DescribeTasksResponseBodyTasks";


export class DescribeTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster for which the task was created.
   * 
   * @example
   * pc-***************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query.
   * 
   * @example
   * 2020-12-02T03:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number of the page returned.
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
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4352AD99-9FF5-41A6-A319-068089******
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query.
   * 
   * @example
   * 2020-11-30T00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The details of the task.
   */
  tasks?: DescribeTasksResponseBodyTasks;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      startTime: 'StartTime',
      tasks: 'Tasks',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      startTime: 'string',
      tasks: DescribeTasksResponseBodyTasks,
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.tasks && typeof (this.tasks as any).validate === 'function') {
      (this.tasks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

