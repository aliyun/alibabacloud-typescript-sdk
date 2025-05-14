// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWorkflowTaskResponseBodyWorkflowTaskWorkflow } from "./GetWorkflowTaskResponseBodyWorkflowTaskWorkflow";


export class GetWorkflowTaskResponseBodyWorkflowTask extends $dara.Model {
  /**
   * @remarks
   * The results for all nodes of the workflow task.
   */
  activityResults?: string;
  /**
   * @remarks
   * The time when the task was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-01-04T02:05:17Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the task was complete. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-01-04T02:06:19Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The task state.
   * 
   * Valid values:
   * 
   * *   Init: The task is being initialized.
   * *   Failed: The task failed.
   * *   Canceled: The task is canceled.
   * *   Processing: The task is in progress.
   * *   Succeed: The task is successful.
   * 
   * @example
   * Succeed
   */
  status?: string;
  /**
   * @remarks
   * The ID of the workflow task.
   * 
   * @example
   * ******4215e042b3966ca5441e******
   */
  taskId?: string;
  /**
   * @remarks
   * The input of the workflow task.
   * 
   * @example
   * {
   *       "Type": "Media",
   *       "Media": "******30706071edbfe290b488******"
   * }
   */
  taskInput?: string;
  /**
   * @remarks
   * The user-defined field that was specified when the workflow task was submitted.
   * 
   * @example
   * {"NotifyAddress":"http://xx.xx.xxx"}
   */
  userData?: string;
  /**
   * @remarks
   * The workflow Information.
   */
  workflow?: GetWorkflowTaskResponseBodyWorkflowTaskWorkflow;
  static names(): { [key: string]: string } {
    return {
      activityResults: 'ActivityResults',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      status: 'Status',
      taskId: 'TaskId',
      taskInput: 'TaskInput',
      userData: 'UserData',
      workflow: 'Workflow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityResults: 'string',
      createTime: 'string',
      finishTime: 'string',
      status: 'string',
      taskId: 'string',
      taskInput: 'string',
      userData: 'string',
      workflow: GetWorkflowTaskResponseBodyWorkflowTaskWorkflow,
    };
  }

  validate() {
    if(this.workflow && typeof (this.workflow as any).validate === 'function') {
      (this.workflow as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

