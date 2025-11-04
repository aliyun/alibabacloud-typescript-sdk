// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIWorkflowTaskResponseBodyWorkflowTaskWorkflow extends $dara.Model {
  /**
   * @remarks
   * The time when the template was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2025-08-20T01:35:04Z
   */
  createTime?: string;
  /**
   * @remarks
   * The workflow\\"s topological structure.
   * 
   * @example
   * {
   * "nodes":[...],
   * "edges":[...]
   * }
   */
  graph?: string;
  /**
   * @remarks
   * The time when the template was last modified. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2025-08-20T01:35:04Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The name of the workflow template.
   * 
   * @example
   * RealtimeTranslation
   */
  name?: string;
  /**
   * @remarks
   * Workflow template status. Valid values:
   * 
   * *   Draft
   * *   Published
   * *   Editing
   * 
   * @example
   * Draft
   */
  status?: string;
  /**
   * @remarks
   * The scenario type of the template.
   * 
   * @example
   * Live
   */
  type?: string;
  /**
   * @remarks
   * The template version.
   * 
   * @example
   * ****ec0a-e3b9-40b1-abf2-6549d00e****
   */
  version?: string;
  /**
   * @remarks
   * The ID of the workflow template.
   * 
   * @example
   * ****3f44-f1f6-477e-9364-c5e6c49e****
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      graph: 'Graph',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      status: 'Status',
      type: 'Type',
      version: 'Version',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      graph: 'string',
      modifiedTime: 'string',
      name: 'string',
      status: 'string',
      type: 'string',
      version: 'string',
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

export class GetAIWorkflowTaskResponseBodyWorkflowTask extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2025-07-28T02:17:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the task was complete. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2025-08-19T02:28:22Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The input parameters of the workflow task.
   * 
   * @example
   * {\\"source_language_id\\":\\"en\\",\\"live_id\\":123,\\"live_url\\":{\\"url\\":\\"rtmp://test.com.cn/video/638d9088fe4f15ce\\"}}
   */
  inputs?: string;
  /**
   * @remarks
   * The results of the workflow nodes. The structure of this JSON varies based on the workflow\\"s configuration.
   * 
   * @example
   * {...}
   */
  nodeResults?: string;
  /**
   * @remarks
   * The node output.
   * 
   * @example
   * {
   * "result":"test"
   * }
   */
  outputs?: string;
  /**
   * @remarks
   * The task state.
   * 
   * Valid values:
   * 
   * *   running
   * *   stopped
   * *   failed
   * *   partial-succeeded
   * *   succeeded
   * 
   * @example
   * succeeded
   */
  status?: string;
  /**
   * @remarks
   * The ID of the workflow task.
   * 
   * @example
   * ********-67fd-43aa-9cc1-3e7f********
   */
  taskId?: string;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * {"NotifyAddress":"http://xx.xx.xxx"}
   */
  userData?: string;
  /**
   * @remarks
   * The version of the workflow template that was executed.
   * 
   * @example
   * ****ec0a-e3b9-40b1-abf2-6549d00e****
   */
  version?: string;
  /**
   * @remarks
   * The workflow template information.
   */
  workflow?: GetAIWorkflowTaskResponseBodyWorkflowTaskWorkflow;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      inputs: 'Inputs',
      nodeResults: 'NodeResults',
      outputs: 'Outputs',
      status: 'Status',
      taskId: 'TaskId',
      userData: 'UserData',
      version: 'Version',
      workflow: 'Workflow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      finishTime: 'string',
      inputs: 'string',
      nodeResults: 'string',
      outputs: 'string',
      status: 'string',
      taskId: 'string',
      userData: 'string',
      version: 'string',
      workflow: GetAIWorkflowTaskResponseBodyWorkflowTaskWorkflow,
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

export class GetAIWorkflowTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the workflow task.
   */
  workflowTask?: GetAIWorkflowTaskResponseBodyWorkflowTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workflowTask: 'WorkflowTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workflowTask: GetAIWorkflowTaskResponseBodyWorkflowTask,
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

