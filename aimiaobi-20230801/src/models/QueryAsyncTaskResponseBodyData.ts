// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAsyncTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2021-07-25 14:34:33
   */
  createTime?: string;
  /**
   * @example
   * 12121
   */
  createUser?: string;
  /**
   * @example
   * MaterialDocumentUpload
   */
  taskCode?: string;
  /**
   * @example
   * error
   */
  taskErrorMessage?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @example
   * {}
   */
  taskIntermediateResult?: string;
  taskName?: string;
  /**
   * @example
   * {"fileKey":"oss://default/xxxx/xxxx/xxx","fileName":"xxxxx.doc"}
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
   * 3
   */
  taskRetryCount?: string;
  /**
   * @example
   * 1
   */
  taskStatus?: number;
  /**
   * @example
   * 2023-04-27 18:07:43
   */
  updateTime?: string;
  /**
   * @example
   * 12121
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

