// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAsyncTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation date.
   * 
   * @example
   * 2020-12-23 15:41:58
   */
  createTime?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 1111
   */
  createUser?: string;
  /**
   * @remarks
   * The primary key ID of the task.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The task identifier, which specifies the task.
   * 
   * @example
   * MaterialDocumentUpload
   */
  taskCode?: string;
  /**
   * @remarks
   * The optional task definition configuration in JSON format. These parameters overwrite the system\\"s default configuration.
   * 
   * @example
   * {}
   */
  taskDefinition?: string;
  /**
   * @remarks
   * The actual end time of the task.
   * 
   * @example
   * 2023-03-09 00:00:00
   */
  taskEndTime?: string;
  /**
   * @remarks
   * The error message from the task execution for the client.
   * 
   * @example
   * 系统内部错误
   */
  taskErrorMessage?: string;
  /**
   * @remarks
   * The time when the task is scheduled to run. The system polls only for tasks that are due. If this parameter is empty, the task runs immediately.
   * 
   * @example
   * 2023-10-14 14:30:00
   */
  taskExecuteTime?: string;
  /**
   * @remarks
   * The unique task ID. It is equivalent to the Id parameter.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * The internal error message from the task execution. Sensitive information, such as exception stacks and internal thread stacks, is recorded here.
   * 
   * @example
   * 系统错误
   */
  taskInnerErrorMessage?: string;
  /**
   * @remarks
   * The intermediate result of the task execution. If a task consists of multiple steps, the output of each step can be saved here. When the task resumes from a paused state, it can read this intermediate result and continue execution.
   * 
   * @example
   * {}
   */
  taskIntermediateResult?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * 任务名
   */
  taskName?: string;
  /**
   * @remarks
   * The input parameters for the task execution, in JSON format.
   * 
   * @example
   * {}
   */
  taskParam?: string;
  /**
   * @remarks
   * The progress information of the task execution.
   * 
   * @example
   * {}
   */
  taskProgressMessage?: string;
  /**
   * @remarks
   * The result information of the task execution.
   * 
   * @example
   * {}
   */
  taskResult?: string;
  /**
   * @remarks
   * The number of times the task has been retried.
   * 
   * @example
   * 1
   */
  taskRetryCount?: string;
  /**
   * @remarks
   * The actual start time of the task.
   * 
   * @example
   * 2023-03-20 10:53:00
   */
  taskStartTime?: string;
  /**
   * @remarks
   * The execution status of the task. Valid values: 0 (Pending), 1 (Running), 2 (Succeeded), 3 (Paused), 4 (Failed and retriable), 5 (Failed and not retriable), 6 (Canceled).
   * 
   * @example
   * 1
   */
  taskStatus?: number;
  /**
   * @remarks
   * The task categories. Multiple categories are separated by commas.
   * 
   * @example
   * test
   */
  taskType?: string;
  /**
   * @remarks
   * The update date.
   * 
   * @example
   * 2023-02-16 10:29:16
   */
  updateTime?: string;
  /**
   * @remarks
   * The user who performed the update.
   * 
   * @example
   * 111
   */
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      id: 'Id',
      taskCode: 'TaskCode',
      taskDefinition: 'TaskDefinition',
      taskEndTime: 'TaskEndTime',
      taskErrorMessage: 'TaskErrorMessage',
      taskExecuteTime: 'TaskExecuteTime',
      taskId: 'TaskId',
      taskInnerErrorMessage: 'TaskInnerErrorMessage',
      taskIntermediateResult: 'TaskIntermediateResult',
      taskName: 'TaskName',
      taskParam: 'TaskParam',
      taskProgressMessage: 'TaskProgressMessage',
      taskResult: 'TaskResult',
      taskRetryCount: 'TaskRetryCount',
      taskStartTime: 'TaskStartTime',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      id: 'number',
      taskCode: 'string',
      taskDefinition: 'string',
      taskEndTime: 'string',
      taskErrorMessage: 'string',
      taskExecuteTime: 'string',
      taskId: 'string',
      taskInnerErrorMessage: 'string',
      taskIntermediateResult: 'string',
      taskName: 'string',
      taskParam: 'string',
      taskProgressMessage: 'string',
      taskResult: 'string',
      taskRetryCount: 'string',
      taskStartTime: 'string',
      taskStatus: 'number',
      taskType: 'string',
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

export class ListAsyncTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * The current page.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListAsyncTasksResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 428DCC0D-3C63-5306-BD1B-124396AB97BE
   */
  requestId?: string;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * Indicates whether the request was successful. true: The request was successful. false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListAsyncTasksResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

