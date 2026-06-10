// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentTaskResponseBodyDataJobs extends $dara.Model {
  /**
   * @remarks
   * When Job execution fails, this field contains the error message indicating the cause of the failure.
   * 
   * @example
   * 已废弃（误用）
   */
  error?: string;
  /**
   * @remarks
   * The error code indicating the reason for sub-job failure. Possible values:
   * * empty: The job executed normally.
   * * INSTANCE_NOT_SUPPORTED: The instance type is not supported.
   * * INSTANCE_NOT_EXISTS: The instance does not exist.
   * * INSTANCE_RELEASED: The instance has been released.
   * * INSTANCE_NOT_RUNNING: The instance is not running.
   * * INSTANCE_NOT_OWNED: The instance does not belong to the current account.
   * * AGENT_ALREADY_INSTALLED: The agent is already installed.
   * * AGENT_NOT_INSTALLED: The agent is not installed.
   * * AGENT_SAME_VERSION: The version is the same.
   * * HAS_RUNNING_JOB: There is a running job.
   * * RPM_LOCK_HELD: The RPM lock is held.
   * * DISK_SPACE_INSUFFICIENT: Insufficient disk space.
   * * NODE_LOAD_HIGH: High edge zone load.
   * * COMMAND_FAILED: Command execution failed.
   * * CLIENT_NOT_RUNNING: The Cloud Assistant agent is not running.
   * * CLIENT_NOT_RESPONSE: The Cloud Assistant agent is unresponsive.
   * * DELIVERY_TIMEOUT: Command delivery timeout.
   * * EXECUTION_TIMEOUT: Command execution timeout.
   * * TASK_CONCURRENCY_LIMIT: Task concurrency limit reached.
   * 
   * @example
   * DISK_SPACE_INSUFFICIENT
   */
  errorCode?: string;
  /**
   * @remarks
   * Detailed reason for subtask execution failure. Possible values:  
   * * Instance type is not supported  
   * * Instance does not exist  
   * * Instance has been released  
   * * Instance is not running  
   * * Instance does not belong to the current account  
   * * Agent is already installed  
   * * Agent is not installed  
   * * Agent version is the same; no upgrade is required  
   * * A task is currently running; please retry later  
   * * RPM lock is occupied; please retry later  
   * * Insufficient disk space  
   * * Edge zone payload is too high; please retry later  
   * * Command execution failed; please retry later  
   * * Cloud Assistant Agent is not running  
   * * Cloud Assistant Agent is unresponsive  
   * * Command sending timeout  
   * * Command execution timeout  
   * * Task concurrency limit has been reached
   * 
   * @example
   * 磁盘空间不足
   */
  errorMessage?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * i-2zehme0rs1tc090fdl3n
   */
  instance?: string;
  /**
   * @remarks
   * Parameters of the sub-Job
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
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Result of sub-Job execution
   * 
   * @example
   * 已废弃（误用）
   */
  result?: string;
  /**
   * @remarks
   * Sub-Job status:  
   * - Created: Created  
   * - Running: Running  
   * - Success: Job Run Succeeded  
   * - Fail: Job Run failed
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
   * List of sub-Jobs
   */
  jobs?: GetAgentTaskResponseBodyDataJobs[];
  status?: string;
  /**
   * @remarks
   * Job ID.
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
   * Request ID, which can be used for end-to-end Diagnosis
   * 
   * @example
   * 2E75336A-0DB2-5263-B201-A6488EC97B50
   */
  requestId?: string;
  /**
   * @remarks
   * Status code  
   * - `code == Success` indicates that authorization Succeeded.  
   * - Any other status code indicates Failed to Authorize. When authorization fails, View the `message` field to obtain the detailed error message.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Returned Data.
   */
  data?: GetAgentTaskResponseBodyData;
  /**
   * @remarks
   * Error message  
   * - If `code == Success`, this field is empty;  
   * - Otherwise, this field contains the Request error message.
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

