// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSQLPlanTaskResponseBodyTaskList } from "./DescribeSqlplanTaskResponseBodyTaskList";


export class DescribeSQLPlanTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The queried task.
   */
  taskList?: DescribeSQLPlanTaskResponseBodyTaskList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskList: { 'type': 'array', 'itemType': DescribeSQLPlanTaskResponseBodyTaskList },
    };
  }

  validate() {
    if(Array.isArray(this.taskList)) {
      $dara.Model.validateArray(this.taskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

