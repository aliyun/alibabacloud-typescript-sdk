// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowTaskResponseBodyWorkflowTaskWorkflow extends $dara.Model {
  /**
   * @remarks
   * The workflow creation time. The time follows the ISO 8601 standard in UTC (ending with Z).
   * 
   * @example
   * 2022-11-27T10:02:12Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the workflow was last modified. The time follows the ISO 8601 standard in UTC (ending with Z).
   * 
   * @example
   * 2022-11-29T02:06:19Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The workflow name.
   * 
   * @example
   * Super-resolution transcoding workflow
   */
  name?: string;
  /**
   * @remarks
   * The workflow status.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The workflow type.
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
   * The results of each node in the workflow task, in JSON format. The content varies based on the workflow configuration.
   * 
   * @example
   * {"ActivityResults": "Success"}
   */
  activityResults?: string;
  /**
   * @remarks
   * The task creation time. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2023-01-04T02:05:17Z
   */
  createTime?: string;
  /**
   * @remarks
   * The task completion time. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2023-01-04T02:06:19Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Succeed
   */
  status?: string;
  /**
   * @remarks
   * The workflow task ID.
   * 
   * @example
   * ******4215e042b3966ca5441e******
   */
  taskId?: string;
  /**
   * @remarks
   * The workflow task input.
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
   * The custom fields specified when the workflow task was submitted.
   * 
   * @example
   * {"NotifyAddress":"http://xx.xx.xxx"}
   */
  userData?: string;
  /**
   * @remarks
   * The workflow information.
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
   * Id of the request
   * 
   * @example
   * ******0C-7870-15FE-B96F-8880BB******
   */
  requestId?: string;
  /**
   * @remarks
   * The workflow task information.
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

