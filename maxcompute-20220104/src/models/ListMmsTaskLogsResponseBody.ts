// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsTaskLogsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The operation performed by the migration task.
   * 
   * @example
   * create schema if not exists mms_test.default;
   */
  action?: string;
  /**
   * @remarks
   * The time when the log was created.
   * 
   * @example
   * 2024-12-17 15:44:00
   */
  createTime?: string;
  /**
   * @remarks
   * The log ID.
   * 
   * @example
   * 10000
   */
  id?: number;
  /**
   * @remarks
   * The result of the migration task operation.
   * 
   * @example
   * ok
   */
  msg?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 2000015
   */
  sourceId?: number;
  /**
   * @remarks
   * The migration task status.
   * 
   * @example
   * DATA_DOING
   */
  status?: string;
  /**
   * @remarks
   * The migration task ID.
   * 
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

export class ListMmsTaskLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of logs.
   */
  data?: ListMmsTaskLogsResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A3AE5649-EF90-54BD-86D0-C632FA950988
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListMmsTaskLogsResponseBodyData },
      requestId: 'string',
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

