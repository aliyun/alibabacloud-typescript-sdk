// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAsyncTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Creation date
   * 
   * @example
   * 2021-07-25 14:34:33
   */
  createTime?: string;
  /**
   * @remarks
   * Creator
   * 
   * @example
   * "12121"
   */
  createUser?: string;
  /**
   * @remarks
   * Task ID, indicates the specific task.
   * 
   * @example
   * MaterialDocumentUpload
   */
  taskCode?: string;
  /**
   * @remarks
   * Task execution error message
   * 
   * @example
   * error
   */
  taskErrorMessage?: string;
  /**
   * @remarks
   * Unique task ID
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * Intermediate task execution result. When a task has multiple steps, save the output of each step here. When resuming from a pause, read the intermediate result and continue from there.
   * 
   * @example
   * "{}"
   */
  taskIntermediateResult?: string;
  /**
   * @remarks
   * Task name
   * 
   * @example
   * 任务名称
   */
  taskName?: string;
  /**
   * @remarks
   * Task execution input parameters, JSON format
   * 
   * @example
   * "{\\"fileKey\\":\\"oss://default/xxxx/xxxx/xxx\\",\\"fileName\\":\\"xxxxx.doc\\"}"
   */
  taskParam?: string;
  /**
   * @remarks
   * Task execution progress message
   * 
   * @example
   * "{}"
   */
  taskProgressMessage?: string;
  /**
   * @remarks
   * Task execution result message
   * 
   * @example
   * "{}"
   */
  taskResult?: string;
  /**
   * @remarks
   * Number of task retries
   * 
   * @example
   * "3"
   */
  taskRetryCount?: string;
  /**
   * @remarks
   * Task execution status: 0-Pending, 1-Executing, 2-Execution successful, 3-Paused, 4-Execution failed (retryable), 5-Execution failed (not retryable), 6-Task canceled.
   * 
   * @example
   * 1
   */
  taskStatus?: number;
  /**
   * @remarks
   * Update date
   * 
   * @example
   * 2023-04-27 18:07:43
   */
  updateTime?: string;
  /**
   * @remarks
   * Updater
   * 
   * @example
   * "12121"
   */
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      taskCode: 'TaskCode',
      taskErrorMessage: 'TaskErrorMessage',
      taskId: 'TaskId',
      taskIntermediateResult: 'TaskIntermediateResult',
      taskName: 'TaskName',
      taskParam: 'TaskParam',
      taskProgressMessage: 'TaskProgressMessage',
      taskResult: 'TaskResult',
      taskRetryCount: 'TaskRetryCount',
      taskStatus: 'TaskStatus',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      taskCode: 'string',
      taskErrorMessage: 'string',
      taskId: 'string',
      taskIntermediateResult: 'string',
      taskName: 'string',
      taskParam: 'string',
      taskProgressMessage: 'string',
      taskResult: 'string',
      taskRetryCount: 'string',
      taskStatus: 'number',
      updateTime: 'string',
      updateUser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAsyncTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Business data
   */
  data?: QueryAsyncTaskResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error description
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Unique request ID
   * 
   * @example
   * 867C4ABE-4381-5BC2-9810-5A5F334F71CF
   */
  requestId?: string;
  /**
   * @remarks
   * Success status: true for success, false for failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryAsyncTaskResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

