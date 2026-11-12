// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationResultResponseBodyInvocationResult extends $dara.Model {
  /**
   * @remarks
   * The error code for the reason why the command failed to be sent or run. Valid values:
   * 
   * - Empty: The command was run normally.
   * - InstanceNotExists: The specified instance does not exist or has been released.
   * - InstanceReleased: The instance was released during command execution.
   * - InstanceNotRunning: The instance was not in the Running state when the command was run.
   * - CommandNotApplicable: The command is not applicable to the specified instance.
   * - AccountNotExists: The specified account does not exist.
   * - DirectoryNotExists: The specified directory does not exist.
   * - BadCronExpression: The specified cron expression is invalid.
   * - ClientNotRunning: The Cloud Assistant Agent is not running.
   * - ClientNotResponse: The Cloud Assistant Agent is not responding.
   * - ClientIsUpgrading: The Cloud Assistant Agent is being upgraded.
   * - ClientNeedUpgrade: The Cloud Assistant Agent needs to be upgraded.
   * - DeliveryTimeout: The command sending timed out.
   * - ExecutionTimeout: The command execution timed out.
   * - ExecutionException: An exception occurred during command execution.
   * - ExecutionInterrupted: The command execution was interrupted.
   * - ExitCodeNonzero: The command finished running, and the exit code is not 0.
   * 
   * @example
   * InstanceNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The details of the reason why the command failed to be sent or run. Valid values:
   * 
   * - Empty: The command was run normally.
   * - the specified instance does not exists: The specified instance does not exist or has been released.
   * - the instance has released when create task: The instance was released during command execution.
   * - the instance is not running when create task: The instance was not in the Running state when the command was run.
   * - the command is not applicable: The command is not applicable to the specified instance.
   * - the specified account does not exists: The specified account does not exist.
   * - the specified directory does not exists: The specified directory does not exist.
   * - the cron job expression is invalid: The specified cron expression is invalid.
   * - the aliyun service is not running on the instance: The Cloud Assistant Agent is not running.
   * - the aliyun service in the instance does not response: The Cloud Assistant Agent is not responding.
   * - the aliyun service in the instance is upgrading now: The Cloud Assistant Agent is being upgraded.
   * - the aliyun service in the instance need upgrade: The Cloud Assistant Agent needs to be upgraded.
   * - the command delivery has been timeout: The command sending timed out.
   * - the command execution has been timeout: The command execution timed out.
   * - the command execution got an exception: An exception occurred during command execution.
   * - the command execution has been interrupted: The command execution was interrupted.
   * - the command execution exit code is not zero: The command finished running, and the exit code is not 0.
   * 
   * @example
   * the specified instance does not exists
   */
  errorInfo?: string;
  /**
   * @remarks
   * The exit code of the command.
   * 
   * - For Linux instances, the exit code is the exit code of the shell command.
   * - For Windows instances, the exit code is the exit code of the Bat or PowerShell command.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * The time when the command finished running on the instance. The time is displayed in UTC (Z) in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 2022-07-11T06:37:17Z
   */
  finishedTime?: string;
  /**
   * @remarks
   * The instance ID of the simple application server.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The execution status of the command on the instance. Valid values:
   * 
   * - Pending: The system is verifying or sending the command.
   * - Invalid: The specified command type or parameter is invalid.
   * - Aborted: Failed to send the command to the instance. The instance must be in the Running state, and the command must be sent within 1 minute.
   * - Running: The command is being run on the instance.
   * - Success: The command finished running, and the exit code is 0.
   * - Failed: The command finished running, and the exit code is not 0.
   * - Error: An exception occurred during command execution and the command cannot continue.
   * - Timeout: The command execution timed out.
   * - Cancelled: The command execution has been canceled, and the command was never started.
   * - Stopping: The running command is being stopped.
   * - Terminated: The command was terminated during execution.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The command execution ID.
   * 
   * @example
   * t-bj02prjje65****
   */
  invokeId?: string;
  /**
   * @remarks
   * The command execution status. Valid values:
   * 
   * - Running: Running.
   * - Finished: Finished.
   * - Failed: Failed.
   * - Stopped: Stopped.
   * 
   * @example
   * Finished
   */
  invokeRecordStatus?: string;
  /**
   * @remarks
   * The username used to run the command on the simple application server.
   * 
   * @example
   * root
   */
  invokeUser?: string;
  /**
   * @remarks
   * The output of the command execution. The standard output (stdout) and standard error output (stderr) are merged into a single Output. The capacity is calculated separately for each execution and each instance. The maximum capacity of a single Output is 24 KB. Content that exceeds this limit is truncated and discarded. Even if the ExitCode is 0 or the execution status is Success, the output may still be truncated. The returned output is in UTF-8 plaintext and does not require Base64 decoding.
   * 
   * @example
   * admin
   */
  output?: string;
  /**
   * @remarks
   * The time when the command started to be run on the instance. The time is displayed in UTC (Z) in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 2022-07-11T06:37:16Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      exitCode: 'ExitCode',
      finishedTime: 'FinishedTime',
      instanceId: 'InstanceId',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      invokeRecordStatus: 'InvokeRecordStatus',
      invokeUser: 'InvokeUser',
      output: 'Output',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorInfo: 'string',
      exitCode: 'number',
      finishedTime: 'string',
      instanceId: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      invokeRecordStatus: 'string',
      invokeUser: 'string',
      output: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The command execution result.
   */
  invocationResult?: DescribeInvocationResultResponseBodyInvocationResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invocationResult: 'InvocationResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocationResult: DescribeInvocationResultResponseBodyInvocationResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.invocationResult && typeof (this.invocationResult as any).validate === 'function') {
      (this.invocationResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

