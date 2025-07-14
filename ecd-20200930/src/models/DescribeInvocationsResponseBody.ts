// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsResponseBodyInvocationsInvokeDesktops extends $dara.Model {
  /**
   * @remarks
   * The time when the command execution was performed.
   * 
   * @example
   * 2020-12-20T06:15:54Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * @example
   * ecd-7w78ozhjcwa3u****
   */
  desktopId?: string;
  /**
   * @remarks
   * The cloud computer name.
   * 
   * @example
   * demo1234
   */
  desktopName?: string;
  /**
   * @remarks
   * The size of the text that is truncated and discarded when the Output value exceeds 24 KB in size.
   * 
   * @example
   * 0
   */
  dropped?: number;
  /**
   * @remarks
   * The code explaining why the command failed to be sent or executed. Valid values:
   * 
   * *   Null: The command is executed successfully.
   * *   InstanceNotExists: The specified cloud computer does not exist or is released.
   * *   InstanceReleased: The cloud computer is released during the execution.
   * *   InstanceNotRunning: The cloud computer is not running during the execution.
   * *   CommandNotApplicable: The command cannot be executed on the specified cloud computer.
   * *   ClientNotRunning: The Cloud Assistant agent is not running.
   * *   ClientNotResponse: The Cloud Assistant agent does not respond.
   * *   ClientIsUpgrading: The Cloud Assistant agent is being updated.
   * *   ClientNeedUpgrade: The Cloud Assistant agent needs to be updated.
   * *   DeliveryTimeout: The command sending times out.
   * *   ExecutionTimeout: The command execution times out.
   * *   ExecutionException: An exception occurs when the command is being executed.
   * *   ExecutionInterrupted: The command execution is interrupted.
   * *   ExitCodeNonzero: The command execution completes, but the exit code is not 0.
   * 
   * @example
   * InstanceNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The message explaining why the command failed to be sent or executed. Valid values:
   * 
   * *   Null: The command is executed successfully.
   * *   the specified instance does not exists: The specified cloud computer does not exist or is released.
   * *   the instance has released when create task: The cloud computer is released during the execution.
   * *   the instance is not running when create task: The cloud computer is not running during the execution.
   * *   the command is not applicable: The command cannot be executed on the specified cloud computer.
   * *   the aliyun service is not running on the instance: The Cloud Assistant agent is not running.
   * *   the aliyun service in the instance does not response: The Cloud Assistant agent does not respond.
   * *   the aliyun service in the instance is upgrading now: The Cloud Assistant agent is being updated.
   * *   the aliyun service in the instance need upgrade: The Cloud Assistant agent needs to be updated.
   * *   the command delivery has been timeout: The command sending times out.
   * *   the command execution has been timeout: The command execution times out.
   * *   the command execution got an exception: An exception occurs when the command is being executed.
   * *   the command execution has been interrupted: The command execution is interrupted.
   * *   the command execution exit code is not zero: The command execution completes, but the exit code is not 0.
   * 
   * @example
   * The specified instance does not exist.
   */
  errorInfo?: string;
  /**
   * @remarks
   * The exit code of the execution.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * The time when the command execution ended.
   * 
   * @example
   * 2020-12-20T06:15:56Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The execution progress of the command on a single cloud computer.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The command output.
   * 
   * *   When the `IncludeOutput` parameter is set to false, the output is not returned.
   * *   When the `ContentEncoding` parameter is set to Base64, the output is returned as a Base64-encoded string.
   * 
   * @example
   * OutPutTestmsg
   */
  output?: string;
  /**
   * @remarks
   * The number of times the command has been executed on the cloud computer.
   * 
   * @example
   * 0
   */
  repeats?: number;
  /**
   * @remarks
   * The start time of the command execution.
   * 
   * @example
   * 2020-12-20T06:15:55Z
   */
  startTime?: string;
  /**
   * @remarks
   * The stop time of the command execution (StopInvocatio).
   * 
   * @example
   * 2020-12-25T09:15:47Z
   */
  stopTime?: string;
  /**
   * @remarks
   * The time when the execution status was updated.
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
   * The Base64-encoded command content.
   * 
   * @example
   * cnBtIC1xYSB8IGdyZXAgdnNm****
   */
  commandContent?: string;
  /**
   * @remarks
   * The type of the command.
   * 
   * @example
   * RunPowerShellScript
   */
  commandType?: string;
  /**
   * @remarks
   * The time when the execution task is created.
   * 
   * @example
   * 2020-12-19T09:15:46Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the end user.
   * 
   * @example
   * User1
   */
  endUserId?: string;
  /**
   * @remarks
   * The overall execution status of the command. The value of this parameter depends on the execution status of the command on all the involved cloud computers. Valid values:
   * 
   * *   Pending: The command is being verified or sent. If the execution status is Pending on at least one cloud computer, the overall status is considered Pending.
   * 
   * *   Running: The command is being executed on cloud computers. If the execution status is Running on at least one cloud computer, the overall status is considered Running.
   * 
   * *   Success: If the execution status is Success on at least one cloud computer and either Success or Stopped on all other cloud computers, the overall status is considered Success.
   * 
   * *   Failed: If the execution status is Stopped or Failed on all cloud computers, the overall status is considered Failed. If any execution status on cloud computers matches one of the following values, Failed is returned.
   * 
   *     *   Invalid: The command is invalid.
   *     *   Aborted: The command failed to be sent.
   *     *   Failed: The command is executed, but the exit code is not 0.
   *     *   Timeout: The command execution timed out.
   *     *   Error: An error occurred when the command is being executed.
   * 
   * *   Stopping: The command execution is being stopped. If the execution status is Stopping on at least one cloud computer, the overall status is considered Stopping.
   * 
   * *   Stopped: The command execution stops. If the execution status is Stopped on at least one cloud computer, the overall status is considered Stopped. If any execution status on cloud computers matches one of the following values, Stopped is returned.
   * 
   *     *   Cancelled: The command execution is canceled.
   *     *   Terminated: The command execution is terminated.
   * 
   * *   PartialFailed: The command execution succeeded on some cloud computers but failed on others. If the execution status on any cloud computer is Success, Failed, or Stopped, the overall status is considered PartialFailed.
   * 
   * @example
   * Pending
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The total number of cloud computers on which the command is executed.
   * 
   * @example
   * 1
   */
  invokeDesktopCount?: number;
  /**
   * @remarks
   * The total number of cloud computers on which the command execution succeeds.
   * 
   * @example
   * 1
   */
  invokeDesktopSucceedCount?: number;
  /**
   * @remarks
   * The cloud computers on which the command is executed.
   */
  invokeDesktops?: DescribeInvocationsResponseBodyInvocationsInvokeDesktops[];
  /**
   * @remarks
   * The ID of the execution.
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
   * The command execution records.
   */
  invocations?: DescribeInvocationsResponseBodyInvocations[];
  /**
   * @remarks
   * The query token that is returned from this call.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
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

