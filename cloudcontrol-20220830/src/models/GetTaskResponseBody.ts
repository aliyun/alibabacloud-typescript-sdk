// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskResponseBodyTaskError extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OperationFailure.OperationFailed
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * {
   *      "requestId": "123****",
   *      "errorCode": "InvalidRamUser.NoPermission",
   *      "errorMsg": "Ram user is not authorized to perform the operation."
   * }
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
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

export class GetTaskResponseBodyTask extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2022-10-09T00:46:03Z
   */
  createTime?: string;
  /**
   * @remarks
   * The error returned for the task.
   */
  error?: GetTaskResponseBodyTaskError;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * ECS
   */
  product?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * i-8vbascjthm7kzhp3****
   */
  resourceId?: string;
  /**
   * @remarks
   * The path of the resources. The relative resource ID. The resource path contains the complete resource location (parent resource/child resource).
   * 
   * @example
   * Instance/i-8vbascjthm7kzhp3****
   * Instance/r-8vbf5abe31c9c4d4/Account/cctest
   */
  resourcePath?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The task state.
   * 
   * Pending
   * 
   * Running
   * 
   * Succeeded
   * 
   * Failed
   * 
   * Cancelling
   * 
   * Cancelled.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The type of the task operation. Valid values: Create, Update, and Delete.
   * 
   * @example
   * Create
   */
  taskAction?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * task-433aead756057fff8189a7ce5****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      error: 'error',
      product: 'product',
      regionId: 'regionId',
      resourceId: 'resourceId',
      resourcePath: 'resourcePath',
      resourceType: 'resourceType',
      status: 'status',
      taskAction: 'taskAction',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      error: GetTaskResponseBodyTaskError,
      product: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourcePath: 'string',
      resourceType: 'string',
      status: 'string',
      taskAction: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of a request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the task.
   */
  task?: GetTaskResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      task: 'task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: GetTaskResponseBodyTask,
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

