// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAsyncTasksResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2020-12-23 15:41:58
   */
  createTime?: string;
  /**
   * @example
   * 1111
   */
  createUser?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * MaterialDocumentUpload
   */
  taskCode?: string;
  /**
   * @example
   * {}
   */
  taskDefinition?: string;
  /**
   * @example
   * 2023-03-09 00:00:00
   */
  taskEndTime?: string;
  taskErrorMessage?: string;
  /**
   * @example
   * 2023-10-14 14:30:00
   */
  taskExecuteTime?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  taskInnerErrorMessage?: string;
  /**
   * @example
   * {}
   */
  taskIntermediateResult?: string;
  taskName?: string;
  /**
   * @example
   * {}
   */
  taskParam?: string;
  /**
   * @example
   * {}
   */
  taskProgressMessage?: string;
  /**
   * @example
   * {}
   */
  taskResult?: string;
  /**
   * @example
   * 1
   */
  taskRetryCount?: string;
  /**
   * @example
   * 2023-03-20 10:53:00
   */
  taskStartTime?: string;
  /**
   * @example
   * 1
   */
  taskStatus?: number;
  /**
   * @example
   * test
   */
  taskType?: string;
  /**
   * @example
   * 2023-02-16 10:29:16
   */
  updateTime?: string;
  /**
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

