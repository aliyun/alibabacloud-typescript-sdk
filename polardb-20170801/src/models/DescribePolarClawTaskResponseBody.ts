// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawTaskResponseBodyTaskError extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * INVALID_REQUEST
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * channelId format invalid
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarClawTaskResponseBodyTask extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the task was created, in milliseconds.
   * 
   * @example
   * 1778564698304
   */
  createdAtMs?: number;
  /**
   * @remarks
   * The error object. This parameter is returned only if the task fails.
   */
  error?: DescribePolarClawTaskResponseBodyTaskError;
  /**
   * @remarks
   * The operation name.
   * 
   * @example
   * LoginPolarClawChannel
   */
  operation?: string;
  /**
   * @remarks
   * The task result object. This parameter is returned only if the task succeeds. The content of this object varies by operation.
   * 
   * @example
   * {}
   */
  result?: { [key: string]: any };
  /**
   * @remarks
   * The task state. Valid values: pending, running, succeeded, and failed.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The task ID, which is a universally unique identifier (UUID).
   * 
   * @example
   * 5956e600-ce6e-4d11-9648-939ef3286e94
   */
  taskId?: string;
  /**
   * @remarks
   * The timestamp when the task was last updated, in milliseconds.
   * 
   * @example
   * 1778564750541
   */
  updatedAtMs?: number;
  static names(): { [key: string]: string } {
    return {
      createdAtMs: 'CreatedAtMs',
      error: 'Error',
      operation: 'Operation',
      result: 'Result',
      state: 'State',
      taskId: 'TaskId',
      updatedAtMs: 'UpdatedAtMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAtMs: 'number',
      error: DescribePolarClawTaskResponseBodyTaskError,
      operation: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      state: 'string',
      taskId: 'string',
      updatedAtMs: 'number',
    };
  }

  validate() {
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarClawTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C890995A-CF06-4F4D-8DB8-DD26C2******
   */
  requestId?: string;
  /**
   * @remarks
   * The task object.
   */
  task?: DescribePolarClawTaskResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
      task: DescribePolarClawTaskResponseBodyTask,
    };
  }

  validate() {
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

