// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTasksInTaskFlowResponseBodyTasksTask extends $dara.Model {
  graphParam?: string;
  nodeConfig?: string;
  nodeContent?: string;
  nodeId?: string;
  nodeName?: string;
  nodeOutput?: string;
  nodeType?: string;
  timeVariables?: string;
  static names(): { [key: string]: string } {
    return {
      graphParam: 'GraphParam',
      nodeConfig: 'NodeConfig',
      nodeContent: 'NodeContent',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeOutput: 'NodeOutput',
      nodeType: 'NodeType',
      timeVariables: 'TimeVariables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graphParam: 'string',
      nodeConfig: 'string',
      nodeContent: 'string',
      nodeId: 'string',
      nodeName: 'string',
      nodeOutput: 'string',
      nodeType: 'string',
      timeVariables: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksInTaskFlowResponseBodyTasks extends $dara.Model {
  task?: ListTasksInTaskFlowResponseBodyTasksTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': ListTasksInTaskFlowResponseBodyTasksTask },
    };
  }

  validate() {
    if(Array.isArray(this.task)) {
      $dara.Model.validateArray(this.task);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksInTaskFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 8B36B063-6B7D-5595-9FCF-3844B7B7ACD4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  tasks?: ListTasksInTaskFlowResponseBodyTasks;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      tasks: ListTasksInTaskFlowResponseBodyTasks,
    };
  }

  validate() {
    if(this.tasks && typeof (this.tasks as any).validate === 'function') {
      (this.tasks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

