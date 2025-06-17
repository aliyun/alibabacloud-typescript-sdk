// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRefreshTasksResponseBodyTasks } from "./DescribeRefreshTasksResponseBodyTasks";


export class DescribeRefreshTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 174F6032-AA26-470D-B90E-36F0EB205BEE
   */
  requestId?: string;
  /**
   * @remarks
   * Details about tasks.
   */
  tasks?: DescribeRefreshTasksResponseBodyTasks;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tasks: DescribeRefreshTasksResponseBodyTasks,
      totalCount: 'number',
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

