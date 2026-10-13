// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodesInvokeNode extends $dara.Model {
  /**
   * @remarks
   * The time when the file sending task was created. The time is in ISO 8601 format. Z in the example indicates UTC.
   * 
   * @example
   * 2023-02-06T07:12:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The error code for the file sending failure. Valid values:
   * 
   * - Empty: File sending was normal.
   * - NodeNotExists: The specified instance does not exist or has been released.
   * - NodeReleased: The instance was released during file sending.
   * - NodeNotRunning: The instance was not running when the file sending task was created.
   * - AccountNotExists: The specified account does not exist.
   * - ClientNotRunning: Cloud Assistant Agent is not running.
   * - ClientNotResponse: Cloud Assistant Agent is not responding.
   * - ClientIsUpgrading: Cloud Assistant Agent is being upgraded.
   * - ClientNeedUpgrade: Cloud Assistant Agent needs to be upgraded.
   * - DeliveryTimeout: File sending timed out.
   * - FileCreateFail: File creation failed.
   * - FileAlreadyExists: A file with the same name already exists in the same path.
   * - FileContentInvalid: The file content is invalid.
   * - FileNameInvalid: The file name is invalid.
   * - FilePathInvalid: The file path is invalid.
   * - FileAuthorityInvalid: The file permissions are invalid.
   * - UserGroupNotExists: The user group specified during file sending does not exist.
   * 
   * @example
   * AccountNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The details of the reason why the command failed to be sent or executed. Valid values:
   * - Empty: The command was executed normally.
   * - the specified instance does not exists: The specified instance does not exist or has been released.
   * - the node has released when create task: The instance was released during command execution.
   * - the node is not running when create task: The instance was not running when the command was executed.
   * - the command is not applicable: The command is not applicable to the specified instance.
   * - the specified account does not exists: The specified account does not exist.
   * - the specified directory does not exists: The specified directory does not exist.
   * - the cron job expression is invalid: The specified execution time expression is invalid.
   * - the aliyun service is not running on the instance: Cloud Assistant Agent is not running.
   * - the aliyun service in the instance does not response: Cloud Assistant Agent is not responding.
   * - the aliyun service in the node is upgrading now: Cloud Assistant Agent is being upgraded.
   * - the aliyun service in the node need upgrade: Cloud Assistant Agent needs to be upgraded.
   * - the command delivery has been timeout: Sending the command timed out.
   * - the command execution has been timeout: Command execution timed out.
   * - the command execution got an exception: An exception occurred during command execution.
   * - the command execution has been interrupted: Command execution was interrupted.
   * - the command execution exit code is not zero: Command execution ended with a non-zero exit code.
   * - the specified instance has been released: The instance was released during file sending.
   * 
   * @example
   * the specified instance does not exists
   */
  errorInfo?: string;
  /**
   * @remarks
   * The end time, in the format: "2020-05-22T17:04:18".
   * 
   * @example
   * 2023-04-10T10:53:46.156+08:00
   */
  finishTime?: string;
  /**
   * @remarks
   * The file sending status on a single instance. Valid values:
   * - Pending: The system is validating or sending the file.
   * - Invalid: The specified file parameters are invalid and validation failed.
   * - Running: The file is being sent on the instance.
   * - Aborted: Failed to send the file to the instance.
   * - Success: File sending completed.
   * - Failed: Failed to create the file on the instance.
   * - Error: An exception occurred during file sending and the operation cannot continue.
   * - Timeout: File sending timed out.
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
   * The start time. The time is in ISO 8601 format. Z in the example indicates UTC.
   * 
   * @example
   * 2023-03-30T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The update time. The time is in ISO 8601 format. Z in the example indicates UTC.
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

export class DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodes extends $dara.Model {
  /**
   * @remarks
   * The file sending record of a node.
   */
  invokeNode?: DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodesInvokeNode[];
  static names(): { [key: string]: string } {
    return {
      invokeNode: 'InvokeNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeNode: { 'type': 'array', 'itemType': DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodesInvokeNode },
    };
  }

  validate() {
    if(Array.isArray(this.invokeNode)) {
      $dara.Model.validateArray(this.invokeNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSendFileResultsResponseBodyInvocationsInvocation extends $dara.Model {
  /**
   * @remarks
   * The output information after command execution.
   * 
   * If ContentEncoding is set to PlainText, the original output information is returned.
   * If ContentEncoding is set to Base64, the Base64-encoded output information is returned.
   * 
   * @example
   * Base64
   */
  content?: string;
  /**
   * @remarks
   * The file content type. Valid values:
   * 
   * - PlainText: Plain text.
   * - Base64: Base64 encoding.
   * 
   * Default value: PlainText.
   * 
   * @example
   * PlainText
   */
  contentType?: string;
  /**
   * @remarks
   * The time when the sending task was created. The time is in ISO 8601 format and includes the time zone offset.
   * 
   * @example
   * 2023-04-10T10:53:46.156+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The command description.
   * 
   * @example
   * Description information
   */
  description?: string;
  /**
   * @remarks
   * The user group of the file.
   * 
   * @example
   * root
   */
  fileGroup?: string;
  /**
   * @remarks
   * The permissions of the file.
   * 
   * @example
   * 0644
   */
  fileMode?: string;
  /**
   * @remarks
   * The user of the file.
   * 
   * @example
   * root
   */
  fileOwner?: string;
  /**
   * @remarks
   * The overall sending status of the file. The overall status depends on the combined execution status of all instances in this sending operation. Valid values:
   * 
   * - Pending: The system is validating or sending the file. If the file sending status of at least one instance is Pending, the overall status is Pending.
   * - Running: The file is being sent on the instance. If the file sending status of at least one instance is Running, the overall status is Running.
   * - Success: If the file sending status on all instances is Success, the overall status is Success.
   * - Failed: If the file sending status on all instances is Failed, the overall status is Failed. The return value is Failed when one or more of the following statuses occur on an instance:
   *     - The specified file parameters are invalid and validation failed (Invalid).
   *     - Failed to send the file to the instance (Aborted).
   *     - Failed to create the file on the instance (Failed).
   *     - File sending timed out (Timeout).
   *     - An exception occurred during file sending and the operation cannot continue (Error).
   * - PartialFailed: File sending succeeded on some instances but failed on others. If the file sending status on all instances is either Success or Failed, the overall status is PartialFailed.
   * 
   * @example
   * Pending
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The file sending records.
   */
  invokeNodes?: DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodes;
  /**
   * @remarks
   * The file sending name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 3
   */
  nodeCount?: number;
  /**
   * @remarks
   * Specifies whether to overwrite the file if a file with the same name already exists in the target directory. Valid values:
   * 
   * - true: Overwrite the file.
   * - false: Do not overwrite the file.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The target path.
   * 
   * @example
   * /home/user
   */
  targetDir?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      creationTime: 'CreationTime',
      description: 'Description',
      fileGroup: 'FileGroup',
      fileMode: 'FileMode',
      fileOwner: 'FileOwner',
      invocationStatus: 'InvocationStatus',
      invokeNodes: 'InvokeNodes',
      name: 'Name',
      nodeCount: 'NodeCount',
      overwrite: 'Overwrite',
      targetDir: 'TargetDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      creationTime: 'string',
      description: 'string',
      fileGroup: 'string',
      fileMode: 'string',
      fileOwner: 'string',
      invocationStatus: 'string',
      invokeNodes: DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodes,
      name: 'string',
      nodeCount: 'number',
      overwrite: 'boolean',
      targetDir: 'string',
    };
  }

  validate() {
    if(this.invokeNodes && typeof (this.invokeNodes as any).validate === 'function') {
      (this.invokeNodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSendFileResultsResponseBodyInvocations extends $dara.Model {
  /**
   * @remarks
   * The command execution ID.
   */
  invocation?: DescribeSendFileResultsResponseBodyInvocationsInvocation[];
  static names(): { [key: string]: string } {
    return {
      invocation: 'Invocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocation: { 'type': 'array', 'itemType': DescribeSendFileResultsResponseBodyInvocationsInvocation },
    };
  }

  validate() {
    if(Array.isArray(this.invocation)) {
      $dara.Model.validateArray(this.invocation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSendFileResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The file sending records.
   */
  invocations?: DescribeSendFileResultsResponseBodyInvocations;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4FD06DF0-9167-5C6F-A145-F30CA4A15D54
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of commands.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      invocations: 'Invocations',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocations: DescribeSendFileResultsResponseBodyInvocations,
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(this.invocations && typeof (this.invocations as any).validate === 'function') {
      (this.invocations as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

