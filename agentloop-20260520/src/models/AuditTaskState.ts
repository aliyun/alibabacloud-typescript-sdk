// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AuditTaskStateRuntimeError extends $dara.Model {
  /**
   * @remarks
   * The error code, such as task_status_query_failed.
   * 
   * @example
   * task_status_query_failed
   */
  code?: string;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * error
   */
  message?: string;
  /**
   * @remarks
   * The ID of the status query request.
   * 
   * @example
   * GUID
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditTaskState extends $dara.Model {
  /**
   * @remarks
   * The current expected sharing switch for the task.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The runtime error, which is returned only when runtimeStatus is error.
   */
  runtimeError?: AuditTaskStateRuntimeError;
  /**
   * @remarks
   * The runtime status, which appears only when includeRuntimeStatus=true is requested. Valid values: pending, starting, stopping, running, stopped, missing, drifted, and error. The list and get operations do not return deleting.
   * 
   * @example
   * running
   */
  runtimeStatus?: string;
  /**
   * @remarks
   * The time when the remote status is checked. This field appears together with runtimeStatus.
   * 
   * @example
   * 1
   */
  runtimeStatusCheckedAt?: string;
  /**
   * @remarks
   * The task details in JSON format.
   */
  task?: { [key: string]: any };
  /**
   * @remarks
   * The stable ID of the task, which must be equal to task.taskId.
   * 
   * @example
   * custom_host_intrusion_audit
   */
  taskId?: string;
  /**
   * @remarks
   * The current execution configuration version of the task. The minimum value is 1. Starting or stopping the task does not increment this version.
   * 
   * @example
   * 7
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      runtimeError: 'runtimeError',
      runtimeStatus: 'runtimeStatus',
      runtimeStatusCheckedAt: 'runtimeStatusCheckedAt',
      task: 'task',
      taskId: 'taskId',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      runtimeError: AuditTaskStateRuntimeError,
      runtimeStatus: 'string',
      runtimeStatusCheckedAt: 'string',
      task: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      taskId: 'string',
      version: 'number',
    };
  }

  validate() {
    if(this.runtimeError && typeof (this.runtimeError as any).validate === 'function') {
      (this.runtimeError as any).validate();
    }
    if(this.task) {
      $dara.Model.validateMap(this.task);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

