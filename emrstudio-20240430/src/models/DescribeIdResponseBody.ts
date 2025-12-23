// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIdResponseBodyData extends $dara.Model {
  /**
   * @example
   * p-123****
   */
  inputId?: string;
  /**
   * @example
   * PROJECT
   */
  inputIdType?: string;
  /**
   * @example
   * mt-123****
   */
  manualTaskId?: string;
  /**
   * @example
   * mti-123****
   */
  manualTaskInstanceId?: string;
  /**
   * @example
   * p-123****
   */
  projectId?: string;
  /**
   * @example
   * t-123****
   */
  taskId?: string;
  /**
   * @example
   * ti-123****
   */
  taskInstanceId?: string;
  /**
   * @example
   * w-123****
   */
  workflowId?: string;
  /**
   * @example
   * wi-123****
   */
  workflowInstanceId?: string;
  /**
   * @example
   * workspace-123****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      inputId: 'inputId',
      inputIdType: 'inputIdType',
      manualTaskId: 'manualTaskId',
      manualTaskInstanceId: 'manualTaskInstanceId',
      projectId: 'projectId',
      taskId: 'taskId',
      taskInstanceId: 'taskInstanceId',
      workflowId: 'workflowId',
      workflowInstanceId: 'workflowInstanceId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputId: 'string',
      inputIdType: 'string',
      manualTaskId: 'string',
      manualTaskInstanceId: 'string',
      projectId: 'string',
      taskId: 'string',
      taskInstanceId: 'string',
      workflowId: 'string',
      workflowInstanceId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIdResponseBody extends $dara.Model {
  /**
   * @example
   * p-123****
   */
  data?: DescribeIdResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1234567890
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeIdResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

