// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListOnlineEvalTasksResponseBodyTasks } from "./ListOnlineEvalTasksResponseBodyTasks";


export class ListOnlineEvalTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * Internal error code. Set only when the response has an error.
   * 
   * @example
   * InvalidInputParams
   */
  code?: string;
  /**
   * @remarks
   * Response error message. Set only when the response has an error.
   * 
   * @example
   * page number should be greater than 0
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 6F352A02-9C0D-54A7-B57C-663CF71D5714
   */
  requestId?: string;
  /**
   * @remarks
   * List of tasks.
   */
  tasks?: ListOnlineEvalTasksResponseBodyTasks[];
  /**
   * @remarks
   * Total number of tasks that meet the criteria.
   * 
   * @example
   * 22
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListOnlineEvalTasksResponseBodyTasks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

