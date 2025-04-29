// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsResponseBodyInvocationsInvocationInvokeInstancesInvokeInstance extends $dara.Model {
  /**
   * @remarks
   * The time when the command task was created.
   * 
   * @example
   * 2019-12-20T06:15:54Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The size of the Output text that was truncated and discarded because the Output value exceeded 24 KB in size.
   * 
   * @example
   * 0
   */
  dropped?: number;
  /**
   * @remarks
   * The error code for the failure to send or run the command. Valid values:
   * 
   * *   If this parameter is empty, the command was run as expected.
   * *   InstanceNotExists: The specified instance did not exist or was released.
   * *   InstanceReleased: The instance was released while the command was being run.
   * *   InstanceNotRunning: The instance was not running when the command started to be run.
   * *   CommandNotApplicable: The command was inapplicable to the specified instance.
   * *   AccountNotExists: The username specified to run the command did not exist.
   * *   DirectoryNotExists: The specified directory did not exist.
   * *   BadCronExpression: The specified cron expression for the execution schedule was invalid.
   * *   ClientNotRunning: Cloud Assistant Agent was not running.
   * *   ClientNotResponse: Cloud Assistant Agent did not respond.
   * *   ClientIsUpgrading: Cloud Assistant Agent was being upgraded.
   * *   ClientNeedUpgrade: Cloud Assistant Agent needed to be upgraded.
   * *   DeliveryTimeout: The request to send the command timed out.
   * *   ExecutionTimeout: The execution timed out.
   * *   ExecutionException: An exception occurred while the command was being executed.
   * *   ExecutionInterrupted: The command task was interrupted.
   * *   ExitCodeNonzero: The execution was complete, but the exit code was not 0.
   * *   SecurityGroupRuleDenied: Access to Cloud Assistant was denied by security group rules.
   * 
   * @example
   * InstanceNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the command failed to be sent or run. Valid values:
   * 
   * *   If this parameter is empty, the command was run as expected.
   * *   The security group rules denied access to the aliyun service.
   * *   The specified instance does not exist.
   * *   The specified instance was released during task execution.
   * *   The specified instance was not running during task execution.
   * *   The OS type of the instance does not support the specified command type.
   * *   The specified account does not exist.
   * *   The specified directory does not exist.
   * *   The cron expression is invalid.
   * *   The aliyun service is not running on the instance.
   * *   The aliyun service in the instance does not response.
   * *   The aliyun service in the instance is upgrading during task execution.
   * *   The aliyun service in the instance need to be upgraded to at least version to support the feature. indicates the earliest version that supports the feature. indicates the name of the feature.
   * *   The command delivery has been timeout.
   * *   The command execution has been timeout.
   * *   The command execution got an exception.
   * *   The command execution exit code is not zero.
   * *   The specified instance was released during task execution.
   * 
   * @example
   * the specified instance does not exists
   */
  errorInfo?: string;
  /**
   * @remarks
   * The exit code of the execution. Valid values:
   * 
   * *   For Linux instances, the value is the exit code of the shell process.
   * *   For Windows instances, the value is the exit code of the batch or PowerShell process.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * The time when the command process ended.
   * 
   * @example
   * 2019-12-20T06:15:56Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp1i7gg30r52z2em****
   */
  instanceId?: string;
  /**
   * @remarks
   * The execution status of the command on a single instance.
   * 
   * >  We recommend that you ignore this parameter and check the value of `InvocationStatus` in the response to obtain the execution status.
   * 
   * @example
   * Finished
   */
  instanceInvokeStatus?: string;
  /**
   * @remarks
   * The execution status on a single instance. Valid values:
   * 
   * *   Pending: The command is being verified or sent.
   * 
   * *   Invalid: The specified command type or parameter is invalid.
   * 
   * *   Aborted: The command failed to be sent to the instance. To send a command to an instance, make sure that the instance is in the Running state and the command can be sent to the instance within 1 minute.
   * 
   * *   Running: The command is being run on the instance.
   * 
   * *   Success:
   * 
   *     *   One-time task: The execution was complete, and the exit code was 0.
   *     *   Scheduled task: The last execution was complete, the exit code was 0, and the specified period ended.
   * 
   * *   Failed:
   * 
   *     *   One-time task: The execution was complete, but the exit code was not 0.
   *     *   Scheduled task: The last execution was complete, but the exit code was not 0. The specified period is about to end.
   * 
   * *   Error: The execution cannot proceed due to an exception.
   * 
   * *   Timeout: The execution timed out.
   * 
   * *   Cancelled: The execution was canceled before it started.
   * 
   * *   Stopping: The command task is being stopped.
   * 
   * *   Terminated: The execution was terminated before completion.
   * 
   * *   Scheduled:
   * 
   *     *   One-time task: The execution state can never be Scheduled.
   *     *   Scheduled task: The command is waiting to be run.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The command output.
   * 
   * *   If ContentEncoding is set to PlainText in the request, the original command output is returned.
   * *   If ContentEncoding is set to Base64 in the request, the Base64-encoded command output is returned.
   * 
   * @example
   * OutPutTestmsg
   */
  output?: string;
  /**
   * @remarks
   * The number of times that the command was run on the instance.
   * 
   * *   If the command is set to run only once, the value is 0 or 1.
   * *   If the command is set to run on a schedule, the value is the number of times that the command has been run on the instance.
   * 
   * @example
   * 0
   */
  repeats?: number;
  /**
   * @remarks
   * The time when the command started to be run on the instance.
   * 
   * @example
   * 2019-12-20T06:15:55Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time when the command task was stopped. If you call the `StopInvocation` operation to stop the command task, the value of this parameter is the time when the operation is called.
   * 
   * @example
   * 2020-01-19T09:15:47Z
   */
  stopTime?: string;
  /**
   * @remarks
   * Indicates whether the command is to be automatically run.
   * 
   * @example
   * false
   */
  timed?: boolean;
  /**
   * @remarks
   * The time when the execution status was updated.
   * 
   * @example
   * 2020-01-19T09:15:47Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      dropped: 'Dropped',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      exitCode: 'ExitCode',
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      instanceInvokeStatus: 'InstanceInvokeStatus',
      invocationStatus: 'InvocationStatus',
      output: 'Output',
      repeats: 'Repeats',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      timed: 'Timed',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      dropped: 'number',
      errorCode: 'string',
      errorInfo: 'string',
      exitCode: 'number',
      finishTime: 'string',
      instanceId: 'string',
      instanceInvokeStatus: 'string',
      invocationStatus: 'string',
      output: 'string',
      repeats: 'number',
      startTime: 'string',
      stopTime: 'string',
      timed: 'boolean',
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

