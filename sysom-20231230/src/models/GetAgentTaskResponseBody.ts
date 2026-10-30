// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentTaskResponseBodyDataJobs extends $dara.Model {
  /**
   * @remarks
   * The cause of the task failure. This field returns an error when the task execution fails.
   * 
   * @example
   * Deprecated (misused)
   */
  error?: string;
  /**
   * @remarks
   * The error code for the subtask execution failure. Valid values:
   * * Empty: The task is executed normally.
   * * INSTANCE_NOT_SUPPORTED: The instance type is not supported.
   * * INSTANCE_NOT_EXISTS: The instance does not exist.
   * * INSTANCE_RELEASED: The instance is released.
   * * INSTANCE_NOT_RUNNING: The instance is not running.
   * * INSTANCE_NOT_OWNED: The instance does not belong to the current account.
   * * AGENT_ALREADY_INSTALLED: The agent is already installed.
   * * AGENT_NOT_INSTALLED: The agent is not installed.
   * * AGENT_SAME_VERSION: The version is the same.
   * * HAS_RUNNING_JOB: A task is running.
   * * RPM_LOCK_HELD: The RPM lock is occupied.
   * * DISK_SPACE_INSUFFICIENT: Insufficient disk space.
   * * NODE_LOAD_HIGH: The node load is high.
   * * COMMAND_FAILED: The command execution failed.
   * * CLIENT_NOT_RUNNING: The Cloud Assistant agent is not running.
   * * CLIENT_NOT_RESPONSE: The Cloud Assistant agent is not responding.
   * * DELIVERY_TIMEOUT: The command delivery timed out.
   * * EXECUTION_TIMEOUT: The command execution timed out.
   * * TASK_CONCURRENCY_LIMIT: The task concurrency limit is reached.
   * 
   * @example
   * DISK_SPACE_INSUFFICIENT
   */
  errorCode?: string;
  /**
   * @remarks
   * The detailed error message for the subtask execution failure. Valid values:
   * * The instance type is not supported.
   * * The instance does not exist.
   * * The instance is released.
   * * The instance is not running.
   * * The instance does not belong to the current account.
   * * The agent is already installed.
   * * The agent is not installed.
   * * The agent version is the same. No upgrade is required.
   * * A task is running. Please try again later.
   * * The RPM lock is occupied. Please try again later.
   * * Insufficient disk space.
   * * The node load is too high. Please try again later.
   * * The command execution failed. Please try again later.
   * * The Cloud Assistant agent is not running.
   * * The Cloud Assistant agent is not responding.
   * * The command delivery timed out.
   * * The command execution timed out.
   * * The task concurrency limit is reached.
   * 
   * @example
   * Insufficient disk space
   */
  errorMessage?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-2zehme0rs1tc090fdl3n
   */
  instance?: string;
  /**
   * @remarks
   * The subtask parameters.
   * 
   * @example
   * {
   *     "agent_version": "3.5.0-beta",
   *     "opt": "install",
   *     "agent_id": "74a86327-3170-412c-8fd67-da3389ec56a9",
   *     "install_type": "InstallAndUpgrade"
   * }
   */
  params?: any;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The subtask execution result.
   * 
   * @example
   * Deprecated (misused)
   */
  result?: string;
  /**
   * @remarks
   * The subtask status. Valid values:
   * - Created: The task is created.
   * - Running: The task is running.
   * - Success: The task is successful.
   * - Fail: The task failed.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'error',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      instance: 'instance',
      params: 'params',
      region: 'region',
      result: 'result',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      instance: 'string',
      params: 'any',
      region: 'string',
      result: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of subtasks.
   */
  jobs?: GetAgentTaskResponseBodyDataJobs[];
  /**
   * @remarks
   * The running status of the agent task.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * c41d8e3506224184a714682fea86d22d
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      jobs: 'jobs',
      status: 'status',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': GetAgentTaskResponseBodyDataJobs },
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which can be used for end-to-end diagnostics.
   * 
   * @example
   * 2E75336A-0DB2-5263-B201-A6488EC97B50
   */
  requestId?: string;
  /**
   * @remarks
   * The status code.
   * - If the value of code is Success, the authorization is successful.
   * - Other status codes indicate that the authorization failed. If the authorization fails, check the message field for the detailed fault message.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetAgentTaskResponseBodyData;
  /**
   * @remarks
   * The error message.
   * - If the value of code is Success, this field is empty.
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * SysomOpenAPIException: SysomOpenAPI.InvalidParameter Invalid params, should be json string or dict
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: GetAgentTaskResponseBodyData,
      message: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

