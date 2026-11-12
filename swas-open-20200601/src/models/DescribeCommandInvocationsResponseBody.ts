// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommandInvocationsResponseBodyCommandInvocationsInvokeInstances extends $dara.Model {
  /**
   * @remarks
   * The error code for the command delivery failure or execution failure. Valid values:
   * 
   * - Empty: The command executed normally.
   * - InstanceNotExists: The specified instance does not exist or has been released.
   * - InstanceReleased: The instance was released during command execution.
   * - InstanceNotRunning: The instance was not running when the command was executed.
   * - CommandNotApplicable: The command is not applicable to the specified instance.
   * - AccountNotExists: The specified account does not exist.
   * - DirectoryNotExists: The specified directory does not exist.
   * - BadCronExpression: The specified cron expression is invalid.
   * - ClientNotRunning: The Cloud Assistant Agent is not running.
   * - ClientNotResponse: The Cloud Assistant Agent is not responding.
   * - ClientIsUpgrading: The Cloud Assistant Agent is being upgraded.
   * - ClientNeedUpgrade: The Cloud Assistant Agent needs to be upgraded.
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
   * The details of the command delivery failure or execution failure. Valid values:
   * 
   * - Empty: The command executed normally.
   * - the specified instance does not exists: The specified instance does not exist or has been released.
   * - the instance has released when create task: The instance was released during command execution.
   * - the instance is not running when create task: The instance was not running when the command was executed.
   * - the command is not applicable: The command is not applicable to the specified instance.
   * - the specified account does not exists: The specified account does not exist.
   * - the specified directory does not exists: The specified directory does not exist.
   * - the cron job expression is invalid: The specified cron expression is invalid.
   * - the aliyun service is not running on the instance: The Cloud Assistant Agent is not running.
   * - the aliyun service in the instance does not response: The Cloud Assistant Agent is not responding.
   * - the aliyun service in the instance is upgrading now: The Cloud Assistant Agent is being upgraded.
   * - the aliyun service in the instance need upgrade: The Cloud Assistant Agent needs to be upgraded.
   * - the command delivery has been timeout: Command delivery timed out.
   * - the command execution has been timeout: Command execution timed out.
   * - the command execution got an exception: An exception occurred during command execution.
   * - the command execution has been interrupted: Command execution was interrupted.
   * - the command execution exit code is not zero: Command execution completed with a non-zero exit code.
   * 
   * @example
   * the specified instance does not exists
   */
  errorInfo?: string;
  /**
   * @remarks
   * The exit code of the command.
   * 
   * - For Linux instances, this is the exit code of the Shell command.
   * - For Windows instances, this is the exit code of the Bat or PowerShell command.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * The time when the command process ended. The time is displayed in UTC (Z) in the format of YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 2023-04-03T02:42:29Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The instance ID of the simple application server.
   * 
   * @example
   * 2445f4aecdac4b71ba2c7e3a7ccf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The command execution status on a single instance. Valid values:
   * - Pending: The system is validating or sending the command.
   * - Invalid: The specified command type or parameter is invalid.
   * - Aborted: Failed to send the command to the instance. The instance must be running and the command must be delivered within 1 minute.
   * - Running: The command is running on the instance.
   * - Success:
   *     - One-time task: The command execution is complete and the exit code is 0.
   *     - Scheduled task: The last execution succeeded with an exit code of 0, and the specified schedule has ended.
   * - Failed:
   *     -  One-time task: The command execution is complete and the exit code is not 0.
   *     -  Scheduled task: The last execution succeeded with an exit code that is not 0, and the specified schedule will be aborted.
   * - Error: An exception occurred during command execution and the command cannot continue.
   * - Timeout: The command execution timed out.
   * - Cancelled: The command execution action has been canceled and the command was never started.
   * - Stopping: The task is being stopped.
   * - Terminated: The command was terminated during execution.
   * 
   * @example
   * Running
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The output information of the command execution.
   * 
   * @example
   * OutputMsg
   */
  output?: string;
  /**
   * @remarks
   * The time when the command started running on the instance. The time is displayed in UTC (Z) in the format of YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 2023-05-09T03:32:24Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      exitCode: 'ExitCode',
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      invocationStatus: 'InvocationStatus',
      output: 'Output',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorInfo: 'string',
      exitCode: 'number',
      finishTime: 'string',
      instanceId: 'string',
      invocationStatus: 'string',
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

export class DescribeCommandInvocationsResponseBodyCommandInvocations extends $dara.Model {
  /**
   * @remarks
   * The command content.
   * 
   * @example
   * echo 123
   */
  commandContent?: string;
  /**
   * @remarks
   * The command description.
   * 
   * @example
   * testDescription
   */
  commandDescription?: string;
  /**
   * @remarks
   * The command ID.
   * 
   * @example
   * c-hy0338xh28r****
   */
  commandId?: string;
  /**
   * @remarks
   * The command name.
   * 
   * @example
   * testCommandName
   */
  commandName?: string;
  /**
   * @remarks
   * The command type.
   * 
   * @example
   * RunShellScript
   */
  commandType?: string;
  /**
   * @remarks
   * The time when the command was created, in the format of YYYY-MM-DDThh:mm:ss.
   * 
   * @example
   * 2023-04-27T10:11:58
   */
  creationTime?: string;
  /**
   * @remarks
   * The execution status of the command. Valid values:
   * 
   * - Pending: The system is validating or sending the command.
   * - Invalid: The specified command type or parameter is invalid.
   * - Aborted: Failed to send the command to the instance. The instance must be running and the command must be delivered within 1 minute.
   * - Running: The command is running on the instance.
   * - Success: The command execution is complete and the exit code is 0.
   * - Failed: The command execution is complete and the exit code is not 0.
   * - Error: An exception occurred during command execution and the command cannot continue.
   * - Timeout: The command execution timed out.
   * - Cancelled: The command execution action has been canceled and the command was never started.
   * - Stopping: The command execution is being stopped.
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
   * t-hz0373jyzxt****
   */
  invokeId?: string;
  /**
   * @remarks
   * The list of target instances for execution.
   */
  invokeInstances?: DescribeCommandInvocationsResponseBodyCommandInvocationsInvokeInstances[];
  /**
   * @remarks
   * The custom parameters included in the command. If no parameters exist, the default value is {}.
   * 
   * @example
   * {}
   */
  parameters?: string;
  /**
   * @remarks
   * The timeout period, in seconds.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The username used to run the command.
   * 
   * @example
   * root
   */
  username?: string;
  /**
   * @remarks
   * The path in which the command was executed.
   * 
   * @example
   * c:\\wwwroot
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      commandDescription: 'CommandDescription',
      commandId: 'CommandId',
      commandName: 'CommandName',
      commandType: 'CommandType',
      creationTime: 'CreationTime',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      invokeInstances: 'InvokeInstances',
      parameters: 'Parameters',
      timeout: 'Timeout',
      username: 'Username',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      commandDescription: 'string',
      commandId: 'string',
      commandName: 'string',
      commandType: 'string',
      creationTime: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      invokeInstances: { 'type': 'array', 'itemType': DescribeCommandInvocationsResponseBodyCommandInvocationsInvokeInstances },
      parameters: 'string',
      timeout: 'number',
      username: 'string',
      workingDir: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.invokeInstances)) {
      $dara.Model.validateArray(this.invokeInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandInvocationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of command executions.
   */
  commandInvocations?: DescribeCommandInvocationsResponseBodyCommandInvocations[];
  /**
   * @remarks
   * The page number of the query result.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page settings for a paged query. This is the paging size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      commandInvocations: 'CommandInvocations',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandInvocations: { 'type': 'array', 'itemType': DescribeCommandInvocationsResponseBodyCommandInvocations },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.commandInvocations)) {
      $dara.Model.validateArray(this.commandInvocations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

