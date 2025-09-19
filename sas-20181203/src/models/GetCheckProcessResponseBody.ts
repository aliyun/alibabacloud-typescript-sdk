// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckProcessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of assets on which the task is complete.
   * 
   * @example
   * 80
   */
  finishCount?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * D18B5DAD-BA97-5552-AE48-83F59D5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The status code of the Cloud Security Posture Management (CSPM) task. Valid values:
   * 
   * *   0: The task is being initialized. The system is calculating the total number of subtasks.
   * *   1: The task is being executed. You can query the total number of tasks and the number of completed tasks.
   * *   2: The task is successful.
   * *   3: The task times out.
   * *   4: The task is invalid. Check whether assets exist.
   * *   5: No task record is found. Check whether the TaskId parameter is valid.
   * 
   * @example
   * 1
   */
  statusCode?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 5347c7b6-c85c-4070-846a-3029e08e****
   */
  taskId?: string;
  /**
   * @remarks
   * The total number of assets on which the task is performed.
   * 
   * @example
   * 113
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      finishCount: 'FinishCount',
      requestId: 'RequestId',
      statusCode: 'StatusCode',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishCount: 'number',
      requestId: 'string',
      statusCode: 'string',
      taskId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

