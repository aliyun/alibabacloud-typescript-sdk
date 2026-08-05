// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRtcMPUTaskDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * > The application ID consists of uppercase and lowercase letters, digits, underscores, and hyphens (-), with a maximum of 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The page number.
   * > If you do not specify a task ID, you must specify the PageSize and PageNo parameters. In this case, the paged query results of all stream mixing and relaying tasks under the specified application ID are returned.
   * 
   * @example
   * 20
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of records per page. Valid values: 1 to 100.
   * > If you do not specify a task ID, you must specify the PageSize and PageNo parameters. In this case, the paged query results of all stream mixing and relaying tasks under the specified application ID are returned.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * 
   * >- The task ID consists of uppercase and lowercase letters, digits, underscores, and hyphens (-), with a maximum of 55 characters.
   * - If you specify a task ID, the query is performed based on the task ID first, and the result contains the parameter details of the stream mixing and relaying task with the specified task ID.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

