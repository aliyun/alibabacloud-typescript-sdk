// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRtcMPUTaskDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * >  The ID can be up to 64 characters in length and can contain letters, digits, underscores (_), and hyphens (-).
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
   * 
   * @example
   * 20
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * >  If you do not specify TaskId, you must specify PageSize and PageNo. Then, the parameters of all stream relay tasks for the specified application are returned in pages.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * > 
   * 
   * *   The ID can be up to 55 characters in length and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * *   If you specify TaskId, the parameters of the specified tasks are returned.
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

