// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsTaskLogsResponseBodyData extends $dara.Model {
  /**
   * @example
   * create schema if not exists mms_test.default;
   */
  action?: string;
  /**
   * @example
   * 2024-12-17 15:44:00
   */
  createTime?: string;
  /**
   * @example
   * 10000
   */
  id?: number;
  /**
   * @example
   * ok
   */
  msg?: string;
  /**
   * @example
   * 2000015
   */
  sourceId?: number;
  /**
   * @example
   * DATA_DOING
   */
  status?: string;
  /**
   * @example
   * 4023
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      createTime: 'createTime',
      id: 'id',
      msg: 'msg',
      sourceId: 'sourceId',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      createTime: 'string',
      id: 'number',
      msg: 'string',
      sourceId: 'number',
      status: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

