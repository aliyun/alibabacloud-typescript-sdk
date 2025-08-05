// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallBackupClientsResponseBodyInstanceStatuses extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned. Valid values:
   * 
   * *   If the value is empty, the call is successful.
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
   * Indicates whether an HBR client can be installed on the ECS instance. Valid values:
   * 
   * *   true: An HBR client can be installed on the ECS instance.
   * *   false: An HBR client cannot be installed on the ECS instance.
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

export class InstallBackupClientsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The status of the ECS instance.
   */
  instanceStatuses?: InstallBackupClientsResponseBodyInstanceStatuses[];
  /**
   * @remarks
   * The message that is returned. If the call is successful, "successful" is returned. If the call fails, an error message is returned.
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
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the asynchronous job. You can call the DescribeTask operation to query the execution result of an asynchronous job.
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
      instanceStatuses: { 'type': 'array', 'itemType': InstallBackupClientsResponseBodyInstanceStatuses },
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

