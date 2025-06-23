// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAsyncTasksResponseBodyAsyncTasks } from "./DescribeAsyncTasksResponseBodyAsyncTasks";


export class DescribeAsyncTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the details of the asynchronous export tasks.
   */
  asyncTasks?: DescribeAsyncTasksResponseBodyAsyncTasks[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 6623EA1F-30FB-5BC8-BEC9-74D55F6F08F1
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of asynchronous export tasks that are returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      asyncTasks: 'AsyncTasks',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTasks: { 'type': 'array', 'itemType': DescribeAsyncTasksResponseBodyAsyncTasks },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.asyncTasks)) {
      $dara.Model.validateArray(this.asyncTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

