// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsResponseBodyInvocationsInvokeDesktops extends $dara.Model {
  /**
   * @remarks
   * The creation time of the script process.
   * 
   * @example
   * 2020-12-20T06:15:54Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The cloud desktop ID.
   * 
   * @example
   * ecd-7w78ozhjcwa3u****
   */
  desktopId?: string;
  /**
   * @remarks
   * The cloud desktop name.
   * 
   * @example
   * demo1234
   */
  desktopName?: string;
  /**
   * @remarks
   * The length of the truncated and discarded text after the text length in the Output field exceeds 24 KB.
   * 
   * @example
   * 0
   */
  dropped?: number;
  /**
   * @remarks
   * The error code for the command delivery failure or execution failure. Valid values:
   * 
   * - Empty: The command ran normally.
   * - InstanceNotExists: The specified cloud desktop does not exist or has been released.
   * - InstanceReleased: The cloud desktop was released during task execution.
   * - InstanceNotRunning: The cloud desktop was not running when the task was created.
   * - CommandNotApplicable: The command is not applicable to the specified cloud desktop.
   * - ClientNotRunning: The Cloud Assistant client is not running.
   * - ClientNotResponse: The Cloud Assistant client is not responding.
   * - ClientIsUpgrading: The Cloud Assistant client is being upgraded.
   * - ClientNeedUpgrade: The Cloud Assistant client needs to be upgraded.
   * - DeliveryTimeout: Command delivery timed out.
   * - ExecutionTimeout: Command execution timed out.
   * - ExecutionException: An exception occurred during command execution.
   * - ExecutionInterrupted: Command execution was interrupted.
   * - ExitCodeNonzero: Command execution completed with a non-zero exit code.
   * 
   * @example
   * InstanceNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The detailed information about the command delivery failure or execution failure. Valid values:
   * 
   * - Empty: The command ran normally.
   * - the specified instance does not exists: The specified cloud desktop does not exist or has been released.
   * - the instance has released when create task: The cloud desktop was released during task execution.
   * - the instance is not running when create task: The cloud desktop was not running when the task was created.
   * - the command is not applicable: The command is not applicable to the specified cloud desktop.
   * - the aliyun service is not running on the instance: The Cloud Assistant client is not running.
   * - the aliyun service in the instance does not response: The Cloud Assistant client is not responding.
   * - the aliyun service in the instance is upgrading now: The Cloud Assistant client is being upgraded.
   * - the aliyun service in the instance need upgrade: The Cloud Assistant client needs to be upgraded.
   * - the command delivery has been timeout: Command delivery timed out.
   * - the command execution has been timeout: Command execution timed out.
   * - the command execution got an exception: An exception occurred during command execution.
   * - the command execution has been interrupted: Command execution was interrupted.
   * - the command execution exit code is not zero: Command execution completed with a non-zero exit code.
   * 
   * @example
   * The specified instance does not exist.
   */
  errorInfo?: string;
  /**
   * @remarks
   * The exit code of the script process.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * The end time of the script process.
   * 
   * @example
   * 2020-12-20T06:15:56Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The script execution status on a single cloud desktop.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  jvsAgentId?: string;
  /**
   * @remarks
   * The output of the script process.
   * 
   * - If the request parameter `IncludeOutput` is set to false, Output is not returned.
   * - If the request parameter `ContentEncoding` is set to Base64, Output is the Base64-encoded output.
   * 
   * @example
   * OutPutTestmsg
   */
  output?: string;
  /**
   * @remarks
   * The number of times the command was run on the cloud desktop.
   * 
   * @example
   * 0
   */
  repeats?: number;
  /**
   * @remarks
   * The time when the script process started running on the cloud desktop.
   * 
   * @example
   * 2020-12-20T06:15:55Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time when execution was stopped, if StopInvocation was called.
   * 
   * @example
   * 2020-12-25T09:15:47Z
   */
  stopTime?: string;
  /**
   * @remarks
   * The update time of the task status.
   * 
   * @example
   * 2020-12-25T06:15:56Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      dropped: 'Dropped',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      exitCode: 'ExitCode',
      finishTime: 'FinishTime',
      invocationStatus: 'InvocationStatus',
      jvsAgentId: 'JvsAgentId',
      output: 'Output',
      repeats: 'Repeats',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      desktopId: 'string',
      desktopName: 'string',
      dropped: 'number',
      errorCode: 'string',
      errorInfo: 'string',
      exitCode: 'number',
      finishTime: 'string',
      invocationStatus: 'string',
      jvsAgentId: 'string',
      output: 'string',
      repeats: 'number',
      startTime: 'string',
      stopTime: 'string',
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

export class DescribeInvocationsResponseBodyInvocations extends $dara.Model {
  /**
   * @remarks
   * The script content, transmitted in Base64 encoding.
   * 
   * @example
   * cnBtIC1xYSB8IGdyZXAgdnNm****
   */
  commandContent?: string;
  /**
   * @remarks
   * The script type.
   * 
   * @example
   * RunPowerShellScript
   */
  commandType?: string;
  /**
   * @remarks
   * The creation time of the task.
   * 
   * @example
   * 2020-12-19T09:15:46Z
   */
  creationTime?: string;
  desktopScenario?: string;
  /**
   * @remarks
   * The end user ID.
   * 
   * @example
   * User1
   */
  endUserId?: string;
  /**
   * @remarks
   * The overall execution status of the script. The overall execution status depends on the combined execution status of all cloud desktops in this call. Valid values:
   * 
   * - Pending: The system is validating or sending the command. If the script execution status on at least one cloud desktop is Pending, the overall execution status is Pending.
   * - Running: The command is running on the cloud desktop. If the script execution status on at least one cloud desktop is Running, the overall execution status is Running.
   * - Success: The script execution status on each cloud desktop is Stopped or Success, and the script execution status on at least one cloud desktop is Success. The overall execution status is Success.
   * - Failed: The script execution status on each cloud desktop is Stopped or Failed. The overall execution status is Failed. The return value is Failed when one or more of the following statuses occur on a cloud desktop:
   *     - Command validation failed (Invalid).
   *     - Command delivery failed (Aborted).
   *     - Command execution completed but the exit code is non-zero (Failed).
   *     - Command execution timed out (Timeout).
   *     - Command execution encountered an exception (Error).
   * - Stopping: The task is being stopped. If the script execution status on at least one instance is Stopping, the overall execution status is Stopping.
   * - Stopped: The task has been stopped. If the script execution status on all instances is Stopped, the overall execution status is Stopped. The return value is Stopped when the script execution status on an instance is one of the following:
   *     - Task cancelled (Cancelled).
   *     - Task terminated (Terminated).
   * - PartialFailed: Some instances succeeded and some instances failed. If the script execution status on each instance is Success, Failed, or Stopped, the overall execution status is PartialFailed.
   * 
   * @example
   * Pending
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The total number of cloud desktops on which the script was run.
   * 
   * @example
   * 1
   */
  invokeDesktopCount?: number;
  /**
   * @remarks
   * The total number of cloud desktops on which the script was run successfully.
   * 
   * @example
   * 1
   */
  invokeDesktopSucceedCount?: number;
  /**
   * @remarks
   * The list of target cloud desktops for execution.
   */
  invokeDesktops?: DescribeInvocationsResponseBodyInvocationsInvokeDesktops[];
  /**
   * @remarks
   * The execution ID.
   * 
   * @example
   * t-hz0jdfwd9f****
   */
  invokeId?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      commandType: 'CommandType',
      creationTime: 'CreationTime',
      desktopScenario: 'DesktopScenario',
      endUserId: 'EndUserId',
      invocationStatus: 'InvocationStatus',
      invokeDesktopCount: 'InvokeDesktopCount',
      invokeDesktopSucceedCount: 'InvokeDesktopSucceedCount',
      invokeDesktops: 'InvokeDesktops',
      invokeId: 'InvokeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      commandType: 'string',
      creationTime: 'string',
      desktopScenario: 'string',
      endUserId: 'string',
      invocationStatus: 'string',
      invokeDesktopCount: 'number',
      invokeDesktopSucceedCount: 'number',
      invokeDesktops: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocationsInvokeDesktops },
      invokeId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.invokeDesktops)) {
      $dara.Model.validateArray(this.invokeDesktops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The array of script execution records.
   */
  invocations?: DescribeInvocationsResponseBodyInvocations[];
  /**
   * @remarks
   * The pagination token returned in this call.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invocations: 'Invocations',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocations: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocations },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.invocations)) {
      $dara.Model.validateArray(this.invocations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

