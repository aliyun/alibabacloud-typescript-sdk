// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeInstancesInvokeInstance extends $dara.Model {
  /**
   * @remarks
   * The creation time of the file sending task.
   * 
   * @example
   * 2019-12-20T06:15:54Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The error code returned when the file failed to be sent to the instance. Valid values:
   * 
   * *   Null: The file is sent to the instance.
   * *   InstanceNotExists: The instance does not exist or has been released.
   * *   InstanceReleased: The instance is released while the file is being sent.
   * *   InstanceNotRunning: The instance is not running when the file sending task is being created.
   * *   AccountNotExists: The specified account does not exist.
   * *   ClientNotRunning: Cloud Assistant Agent is not running.
   * *   ClientNotResponse: Cloud Assistant Agent does not respond.
   * *   ClientIsUpgrading: Cloud Assistant Agent is being upgraded.
   * *   ClientNeedUpgrade: Cloud Assistant Agent needs to be upgraded.
   * *   DeliveryTimeout: The file sending task timed out.
   * *   FileCreateFail: The file failed to be created.
   * *   FileAlreadyExists: A file with the same name exists in the specified directory.
   * *   FileContentInvalid: The file content is invalid.
   * *   FileNameInvalid: The file name is invalid.
   * *   FilePathInvalid: The specified directory is invalid.
   * *   FileAuthorityInvalid: The specified permissions on the file are invalid.
   * *   UserGroupNotExists: The specified user group does not exist.
   * 
   * @example
   * InstanceNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the file failed to be sent or the file sending task failed to be executed. Valid values:
   * 
   * *   Null: The file is sent to the instance.
   * *   the specified instance does not exists
   * *   the specified instance has been released
   * *   the instance is not running when create task
   * *   the specified account does not exists
   * *   the aliyun service is not running on the instance
   * *   the aliyun service in the instance does not response
   * *   the aliyun service in the instance is upgrading now
   * *   the aliyun service in the instance need upgrade
   * *   the command delivery has been timeout
   * *   the file creation is failed due to unknown error
   * *   the authority of file is invalid
   * *   File content is empty
   * *   the content of file is invalid
   * *   File already exists
   * *   File name is invalid
   * *   File path is invalid
   * *   Owner not exists
   * *   Group not exists
   * *   Mode is invalid
   * 
   * @example
   * the instance is not running when create task
   */
  errorInfo?: string;
  /**
   * @remarks
   * The time when the file sending task was completed.
   * 
   * @example
   * 2019-12-20T06:15:54Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-uf614fhehhz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the file sending task. Valid values:
   * 
   * *   Pending: The file is being verified or sent.
   * *   Invalid: The file is invalid.
   * *   Running: The file is being sent to the instance.
   * *   Aborted: The file failed to be sent to the instance.
   * *   Success: The file is sent.
   * *   Failed: The file failed to be created on the instance.
   * *   Error: An error occurred and interrupted the file sending task.
   * *   Timeout: The file sending task timed out.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The time when the file sending task started to be executed on the instance.
   * 
   * @example
   * 2019-12-20T06:15:54Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time when the task status was last updated.
   * 
   * @example
   * 2019-12-20T06:15:54Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      invocationStatus: 'InvocationStatus',
      startTime: 'StartTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      errorCode: 'string',
      errorInfo: 'string',
      finishTime: 'string',
      instanceId: 'string',
      invocationStatus: 'string',
      startTime: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

