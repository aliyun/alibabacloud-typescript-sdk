// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowTasksResponseBodyTaskListWorkflow extends $dara.Model {
  /**
   * @remarks
   * The creation time of the workflow template.
   * 
   * @example
   * 2025-03-21T01:48:49Z
   */
  createTime?: string;
  /**
   * @remarks
   * The source of the media file. Valid values:
   * 
   * *   OSS: an OSS object.
   * *   Media: a media asset.
   * 
   * @example
   * OSS
   */
  mediaType?: string;
  /**
   * @remarks
   * The last modification time of the workflow template.
   * 
   * @example
   * 2025-02-23 10:19:37 +0800
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The name of the workflow template.
   * 
   * @example
   * example-workflow-***
   */
  name?: string;
  /**
   * @remarks
   * The status of the workflow template.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The type of the workflow template.
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
   * ******2491c84dce913da9fe65******
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      mediaType: 'MediaType',
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
      mediaType: 'string',
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

export class ListWorkflowTasksResponseBodyTaskList extends $dara.Model {
  /**
   * @remarks
   * The time the task was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-07-15T09:45:48Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time the task was completed. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-12-07T10:53:45Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The task state.
   * 
   * **Valid values**:
   * 
   * *   Init: Initializing
   * *   Failed
   * *   Canceled
   * *   Processing
   * *   Succeed
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
   * *****4c93d2f404f8345b16a965*****
   */
  taskId?: string;
  /**
   * @remarks
   * The input data for the workflow task.
   * 
   * @example
   * {\\"Type\\":\\"Media\\",\\"Media\\":\\"****8b40884171efb0d9e7f7f458****\\"}
   */
  taskInput?: string;
  /**
   * @remarks
   * The custom data that was passed when the task was submitted.
   * 
   * @example
   * {"NotifyAddress":"http://xx.xx.xxx"}
   */
  userData?: string;
  /**
   * @remarks
   * The information about the workflow template.
   */
  workflow?: ListWorkflowTasksResponseBodyTaskListWorkflow;
  static names(): { [key: string]: string } {
    return {
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
      createTime: 'string',
      finishTime: 'string',
      status: 'string',
      taskId: 'string',
      taskInput: 'string',
      userData: 'string',
      workflow: ListWorkflowTasksResponseBodyTaskListWorkflow,
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

export class ListWorkflowTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned in this response.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * This parameter is required.
   * 
   * @example
   * ****8EqYpQbZ6Eh7+Zz8DxVYoQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C0C02296-113C-5838-8FE9-8F3A32998DDC
   */
  requestId?: string;
  /**
   * @remarks
   * The media workflow tasks.
   */
  taskList?: ListWorkflowTasksResponseBodyTaskList[];
  /**
   * @remarks
   * The total number of entries returned. By default, this parameter is not returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      taskList: 'TaskList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      taskList: { 'type': 'array', 'itemType': ListWorkflowTasksResponseBodyTaskList },
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

