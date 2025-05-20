// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PullTaskResponseBodyModule extends $dara.Model {
  bizCode?: string;
  /**
   * @example
   * 1649470201045
   */
  orderId?: string;
  /**
   * @example
   * 1
   */
  outTaskId?: string;
  principalKey?: string;
  /**
   * @example
   * {\\"result\\":\\"SUCCESS\\",\\"message\\":\\"null\\",\\"taskId\\":\\"d8800bab-88b6-4c60-9e4f-ed38dbbdd9b3\\"}
   */
  taskData?: string;
  /**
   * @example
   * 704614
   */
  taskId?: string;
  /**
   * @example
   * PATENT_QUERY
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      orderId: 'OrderId',
      outTaskId: 'OutTaskId',
      principalKey: 'PrincipalKey',
      taskData: 'TaskData',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      orderId: 'string',
      outTaskId: 'string',
      principalKey: 'string',
      taskData: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

