// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsTimerLogsResponseBodyDataObjectList extends $dara.Model {
  /**
   * @remarks
   * The logged action for the migration job created by the scheduled task.
   * 
   * @example
   * start job
   */
  action?: string;
  /**
   * @remarks
   * The creation time of the log entry.
   * 
   * @example
   * 2024-12-17 15:44:17
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the asynchronous task for the migration job created by the scheduled task.
   * 
   * @example
   * 1003476
   */
  id?: number;
  /**
   * @remarks
   * A detailed message about the action.
   * 
   * @example
   * start job success
   */
  msg?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * 200018
   */
  sourceId?: number;
  /**
   * @remarks
   * The status of the migration job created by the scheduled task.
   * 
   * @example
   * DOING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      createTime: 'createTime',
      id: 'id',
      msg: 'msg',
      sourceId: 'sourceId',
      status: 'status',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTimerLogsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of logs.
   */
  objectList?: ListMmsTimerLogsResponseBodyDataObjectList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      objectList: 'objectList',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectList: { 'type': 'array', 'itemType': ListMmsTimerLogsResponseBodyDataObjectList },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.objectList)) {
      $dara.Model.validateArray(this.objectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTimerLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListMmsTimerLogsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0b87b7e716665825896565060e87a4
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
      data: ListMmsTimerLogsResponseBodyData,
      requestId: 'string',
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

