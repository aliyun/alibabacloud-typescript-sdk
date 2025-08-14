// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowTaskResponseBodyWorkflowTaskWorkflow extends $dara.Model {
  /**
   * @remarks
   * The time when the workflow was created.
   * 
   * @example
   * 2022-11-27T10:02:12Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the workflow was last modified.
   * 
   * @example
   * 2022-11-29T02:06:19Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The workflow name.
   */
  name?: string;
  /**
   * @remarks
   * The workflow state.
   * 
   * Valid values:
   * 
   * *   Active
   * *   Inactive
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The workflow type.
   * 
   * Valid values:
   * 
   * *   Customize: custom workflow.
   * *   System: system workflow.
   * *   Common: user-created workflow.
   * 
   * @example
   * Common
   */
  type?: string;
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * ******63dca94c609de02ac0d1******
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      status: 'Status',
      type: 'Type',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifiedTime: 'string',
      name: 'string',
      status: 'string',
      type: 'string',
      workflowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetWorkflowTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******0C-7870-15FE-B96F-8880BB******
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the workflow task.
   */
  workflowTask?: GetWorkflowTaskResponseBodyWorkflowTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workflowTask: 'WorkflowTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workflowTask: GetWorkflowTaskResponseBodyWorkflowTask,
    };
  }

  validate() {
    if(this.workflowTask && typeof (this.workflowTask as any).validate === 'function') {
      (this.workflowTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

