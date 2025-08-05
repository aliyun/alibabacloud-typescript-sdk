// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallBackupClientsResponseBodyInstanceStatuses extends $dara.Model {
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * *   If the value is empty, the request is successful.
   * *   **InstanceNotExists**: The ECS instance does not exist.
   * *   **InstanceNotRunning**: The ECS instance is not running.
   * *   **CloudAssistNotRunningOnInstance**: Cloud Assistant is unavailable.
   * 
   * @example
   * InstanceNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-0xi5w***v3j3bh2gj5
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether a backup client can be installed on the ECS instance.
   * 
   * *   true: A backup client can be installed on the ECS instance.
   * *   false: A backup client cannot be installed on the ECS instance.
   * 
   * @example
   * true
   */
  validInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      instanceId: 'InstanceId',
      validInstance: 'ValidInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      instanceId: 'string',
      validInstance: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallBackupClientsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The status of the ECS instance.
   */
  instanceStatuses?: UninstallBackupClientsResponseBodyInstanceStatuses[];
  /**
   * @remarks
   * The message that is returned. If the request is successful, a value of successful is returned. If the request fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * *   true: The request is successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the asynchronous job. You can call the DescribeTask operation to query the execution result of the asynchronous job.
   * 
   * @example
   * t-*********************
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceStatuses: 'InstanceStatuses',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceStatuses: { 'type': 'array', 'itemType': UninstallBackupClientsResponseBodyInstanceStatuses },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceStatuses)) {
      $dara.Model.validateArray(this.instanceStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

