// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallBackupClientsResponseBodyInstanceStatuses extends $dara.Model {
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - An empty value indicates that the operation is successful.
   * 
   * - **InstanceNotExists**: The ECS instance does not exist.
   * 
   * - **InstanceNotRunning**: The ECS instance is not in the Running state.
   * 
   * - **CloudAssistNotRunningOnInstance**: Cloud Assistant is not available.
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
   * - true: The backup client can be installed.
   * 
   * - false: The backup client cannot be installed.
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
   * The return code. A value of 200 indicates that the operation is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The status of the ECS instances.
   */
  instanceStatuses?: InstallBackupClientsResponseBodyInstanceStatuses[];
  /**
   * @remarks
   * The message that is returned. If the request is successful, successful is returned. If the request fails, an error message is returned.
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
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * - true: The request is successful.
   * 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the asynchronous task. Call the DescribeTask operation to query the task result.
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

