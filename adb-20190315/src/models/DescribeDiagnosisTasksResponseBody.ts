// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiagnosisTasksResponseBodyTaskList } from "./DescribeDiagnosisTasksResponseBodyTaskList";


export class DescribeDiagnosisTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F0983B43-B2EC-536A-8791-142B5CF1E9B6
   */
  requestId?: string;
  /**
   * @remarks
   * The queried tasks.
   */
  taskList?: DescribeDiagnosisTasksResponseBodyTaskList[];
  /**
   * @remarks
   * The total number of tasks in the stage.
   * 
   * @example
   * 33
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskList: 'TaskList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskList: { 'type': 'array', 'itemType': DescribeDiagnosisTasksResponseBodyTaskList },
      totalCount: 'number',
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

