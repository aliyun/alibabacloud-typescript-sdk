// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceAsyncTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2026-06-01T12:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The current step.
   * 
   * @example
   * create-cms-workspace
   */
  currentStep?: string;
  /**
   * @remarks
   * The time when the task was last modified.
   * 
   * @example
   * 2026-06-01T12:05:00Z
   */
  modifiedAt?: string;
  /**
   * @remarks
   * The asynchronous task code. Only \\"agentteams:pay-order:create\\" is supported. Valid values:
   *  * agentteams:pay-order:create: create instance task.
   * 
   * @example
   * agentteams:pay-order:create
   */
  taskCode?: string;
  /**
   * @remarks
   * The asynchronous task ID.
   * 
   * @example
   * task-xxx
   */
  taskId?: string;
  /**
   * @remarks
   * The asynchronous task status. Valid values:
   *  * PENDING: pending.
   *  * RUNNING: running.
   *  * PAUSED: paused.
   *  * COMPLETED: completed.
   *  * FAILED: failed.
   * 
   * @example
   * RUNNING
   */
  taskStatus?: string;
  /**
   * @remarks
   * Indicates whether the task is waiting for user action.
   * 
   * @example
   * false
   */
  waitingForUserAction?: boolean;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      currentStep: 'CurrentStep',
      modifiedAt: 'ModifiedAt',
      taskCode: 'TaskCode',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      waitingForUserAction: 'WaitingForUserAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      currentStep: 'string',
      modifiedAt: 'string',
      taskCode: 'string',
      taskId: 'string',
      taskStatus: 'string',
      waitingForUserAction: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceAsyncTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code in the success response.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The details of the asynchronous task.
   * 
   * @example
   * {}
   */
  data?: UpdateInstanceAsyncTaskResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * **message**
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * **requestId**
   * 
   * @example
   * req-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateInstanceAsyncTaskResponseBodyData,
      httpStatusCode: 'number',
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

