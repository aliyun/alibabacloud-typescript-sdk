// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodesInvokeNode extends $dara.Model {
  /**
   * @remarks
   * The creation time of the file distribution task.
   * 
   * @example
   * 2023-02-06T07:12:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The failure reason code for file distribution. Possible values:
   * - Empty: The file was distributed normally. 
   * - NodeNotExists: The specified instance does not exist or has been released. 
   * - NodeReleased: The instance was released during the file distribution process. 
   * - NodeNotRunning: The instance was not running when the file distribution task was created. 
   * - AccountNotExists: The specified account does not exist. 
   * - ClientNotRunning: The Cloud Assistant Agent is not running. 
   * - ClientNotResponse: The Cloud Assistant Agent is not responding. 
   * - ClientIsUpgrading: The Cloud Assistant Agent is currently being upgraded. 
   * - ClientNeedUpgrade: The Cloud Assistant Agent needs to be upgraded. 
   * - DeliveryTimeout: File delivery timed out. 
   * - FileCreateFail: Failed to create the file. 
   * - FileAlreadyExists: A file with the same name already exists at the specified path. 
   * - FileContentInvalid: The file content is invalid. 
   * - FileNameInvalid: The file name is invalid. 
   * - FilePathInvalid: The file path is invalid. 
   * - FileAuthorityInvalid: The file permissions are invalid. 
   * - UserGroupNotExists: The user group specified for file delivery does not exist.
   * 
   * @example
   * AccountNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * Details of the reason for command delivery failure or execution failure, possible values: 
   * - Empty: The command executed normally. 
   * - the specified instance does not exist: The specified instance does not exist or has been released. 
   * - the node has been released when creating task: The instance was released during the command execution. 
   * - the node is not running when creating task: The instance was not in a running state when the command was executed. 
   * - the command is not applicable: The command is not applicable to the specified instance. 
   * - the specified account does not exist: The specified account does not exist. 
   * - the specified directory does not exist: The specified directory does not exist. 
   * - the cron job expression is invalid: The specified execution time expression is invalid. 
   * - the aliyun service is not running on the instance: The Cloud Assistant Agent is not running. 
   * - the aliyun service in the instance does not respond: The Cloud Assistant Agent is not responding. 
   * - the aliyun service in the node is upgrading now: The Cloud Assistant Agent is currently being upgraded. 
   * - the aliyun service in the node needs upgrade: The Cloud Assistant Agent needs an upgrade. 
   * - the command delivery has timed out: Command delivery has timed out. 
   * - the command execution has timed out: Command execution has timed out. 
   * - the command execution got an exception: An exception occurred during command execution. 
   * - the command execution has been interrupted: The command execution was interrupted. 
   * - the command execution exit code is not zero: The command execution completed with a non-zero exit code. 
   * - the specified instance has been released: The instance was released during file delivery.
   * 
   * @example
   * the specified instance does not exists
   */
  errorInfo?: string;
  /**
   * @remarks
   * Completion time, format: "2020-05-22T17:04:18".
   * 
   * @example
   * 2023-04-10T10:53:46.156+08:00
   */
  finishTime?: string;
  /**
   * @remarks
   * Status of the task on a single instance. Possible values:
   * - Pending: The system is validating or distributing the file.
   * - Invalid: The specified file parameters are incorrect, and validation failed.
   * - Running: The file is being distributed to the instance.
   * - Aborted: Failed to distribute the file to the instance.
   * - Success: The file distribution is complete.
   * - Failed: The file creation failed within the instance.
   * - Error: An exception occurred during file distribution and could not continue.
   * - Timeout: The file distribution timed out.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @remarks
   * Node ID.
   * 
   * @example
   * e01-cn-9lb3c15m81j
   */
  nodeId?: string;
  /**
   * @remarks
   * Start Time
   * 
   * @example
   * 2023-03-30T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * Update Time
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

