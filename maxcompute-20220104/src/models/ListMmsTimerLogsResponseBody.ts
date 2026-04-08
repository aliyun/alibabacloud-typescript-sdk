// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsTimerLogsResponseBodyDataObjectList extends $dara.Model {
  /**
   * @example
   * start job
   */
  action?: string;
  /**
   * @example
   * 2024-12-17 15:44:17
   */
  createTime?: string;
  /**
   * @example
   * 1003476
   */
  id?: number;
  /**
   * @example
   * start job success
   */
  msg?: string;
  /**
   * @example
   * 200018
   */
  sourceId?: number;
  /**
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
  objectList?: ListMmsTimerLogsResponseBodyDataObjectList[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
  data?: ListMmsTimerLogsResponseBodyData;
  /**
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

