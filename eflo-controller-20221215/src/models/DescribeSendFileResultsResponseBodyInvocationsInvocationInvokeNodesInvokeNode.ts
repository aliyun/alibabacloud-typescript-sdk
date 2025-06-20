// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodesInvokeNode extends $dara.Model {
  /**
   * @remarks
   * The time when the file sending task was created.
   * 
   * @example
   * 2023-02-06T07:12:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The error code returned when the file failed to be sent to the instance. Valid values:
   * 
   * Null: The file is sent to the instance. NodeNotExists: The specified instance does not exist or has been released. NodeReleased: The instance was released while the file was being sent. NodeNotRunning: The instance was not running while the file sending task was being created. AccountNotExists: The specified account does not exist. ClientNotRunning: Cloud Assistant Agent is not running. ClientNotResponse: Cloud Assistant Agent did not respond. ClientIsUpgrading: Cloud Assistant Agent was being upgraded. ClientNeedUpgrade: Cloud Assistant Agent needs to be upgraded. DeliveryTimeout: The file sending task timed out. FileCreateFail: The file failed to be created. FileAlreadyExists: A file with the same name exists in the specified directory. FileContentInvalid: The file content is invalid. FileNameInvalid: The file name is invalid. FilePathInvalid: The specified directory is invalid. FileAuthorityInvalid: The specified permissions on the file are invalid. UserGroupNotExists: The specified user group does not exist.
   * 
   * @example
   * AccountNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the command failed to be sent or run. Valid values:
   * 
   * *   null: The command is run as expected.
   * *   the specified instance does not exists: The specified instance does not exist or is released.
   * *   the node has released when create task: The instance is released when the command is being run.
   * *   the node is not running when create task: The instance is not in the Running state while the command is being run.
   * *   the command is not applicable: The command is not applicable to the specified instance.
   * *   the specified account does not exists: The specified account does not exist.
   * *   the specified directory does not exists: The specified directory does not exist.
   * *   the cron job expression is invalid: The cron expression that specifies the execution time is invalid.
   * *   the aliyun service is not running on the instance: Cloud Assistant Agent is not running.
   * *   the aliyun service in the instance does not response: Cloud Assistant Agent does not respond.
   * *   the aliyun service in the node is upgrading now: Cloud Assistant Agent is being upgraded.
   * *   the aliyun service in the node need upgrade: Cloud Assistant Agent needs to be upgraded.
   * *   the command delivery has been timeout: The request to send the command timed out.
   * *   the command execution has been timeout: The command execution timed out.
   * *   the command execution got an exception: An exception occurred when the command is being run.
   * *   the command execution has been interrupted: The command execution is interrupted.
   * *   the command execution exit code is not zero: The command execution completes, but the exit code is not 0.
   * *   the specified instance has been released: The instance is released while the file is being sent.
   * 
   * @example
   * the specified instance does not exists
   */
  errorInfo?: string;
  /**
   * @remarks
   * The time when the file sending task ends. The time is in the 2020-05-22T17:04:18 format.
   * 
   * @example
   * 2023-04-10T10:53:46.156+08:00
   */
  finishTime?: string;
  /**
   * @remarks
   * The status of the file sending task on an instance. Valid values:
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
   * The node ID.
   * 
   * @example
   * e01-cn-9lb3c15m81j
   */
  nodeId?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2023-03-30T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2023-03-30T16:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      finishTime: 'FinishTime',
      invocationStatus: 'InvocationStatus',
      nodeId: 'NodeId',
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
      invocationStatus: 'string',
      nodeId: 'string',
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

