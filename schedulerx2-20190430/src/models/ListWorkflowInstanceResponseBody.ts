// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowInstanceResponseBodyDataWfInstanceInfos extends $dara.Model {
  /**
   * @remarks
   * The data timestamp of the workflow instance.
   * 
   * @example
   * 2023-01-03 18:00:00
   */
  dataTime?: string;
  /**
   * @remarks
   * The time when the workflow instance stopped running.
   * 
   * @example
   * 2023-01-03 18:00:21
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the workflow instance was scheduled to run.
   * 
   * @example
   * 2023-01-03 18:00:00
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The time when the workflow instance started to run.
   * 
   * @example
   * 2023-01-03 18:00:01
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the workflow instance. Valid values:
   * 
   * *   1: pending
   * *   2: preparing
   * *   3: running
   * *   4: successful
   * *   5: failed
   * 
   * @example
   * 5
   */
  status?: number;
  /**
   * @remarks
   * The workflow instance ID.
   * 
   * @example
   * 123456
   */
  wfInstanceId?: number;
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * 123
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      dataTime: 'DataTime',
      endTime: 'EndTime',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
      wfInstanceId: 'WfInstanceId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTime: 'string',
      endTime: 'string',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'number',
      wfInstanceId: 'number',
      workflowId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The workflow instances.
   */
  wfInstanceInfos?: ListWorkflowInstanceResponseBodyDataWfInstanceInfos[];
  static names(): { [key: string]: string } {
    return {
      wfInstanceInfos: 'WfInstanceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wfInstanceInfos: { 'type': 'array', 'itemType': ListWorkflowInstanceResponseBodyDataWfInstanceInfos },
    };
  }

  validate() {
    if(Array.isArray(this.wfInstanceInfos)) {
      $dara.Model.validateArray(this.wfInstanceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The information about workflow instances.
   */
  data?: ListWorkflowInstanceResponseBodyData;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * workflowId=xxx is not existed
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39090022-1F3B-4797-8518-6B61095F1AF0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListWorkflowInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

