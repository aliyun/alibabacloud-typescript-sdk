// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsTimersResponseBodyDataObjectList extends $dara.Model {
  /**
   * @example
   * 2024-12-17 09:29:58
   */
  createTime?: string;
  /**
   * @example
   * 196
   */
  dbId?: number;
  /**
   * @example
   * 18
   */
  id?: number;
  /**
   * @example
   * migrate_db_1
   */
  name?: string;
  /**
   * @example
   * Daily
   */
  scheduleType?: string;
  /**
   * @example
   * 2000015
   */
  sourceId?: number;
  /**
   * @example
   * db_1
   */
  srcDbName?: string;
  /**
   * @example
   * false
   */
  stopped?: boolean;
  /**
   * @example
   * TABLES
   */
  type?: string;
  /**
   * @example
   * 00:00
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      dbId: 'dbId',
      id: 'id',
      name: 'name',
      scheduleType: 'scheduleType',
      sourceId: 'sourceId',
      srcDbName: 'srcDbName',
      stopped: 'stopped',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dbId: 'number',
      id: 'number',
      name: 'string',
      scheduleType: 'string',
      sourceId: 'number',
      srcDbName: 'string',
      stopped: 'boolean',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTimersResponseBodyData extends $dara.Model {
  objectList?: ListMmsTimersResponseBodyDataObjectList[];
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
   * 13
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
      objectList: { 'type': 'array', 'itemType': ListMmsTimersResponseBodyDataObjectList },
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

export class ListMmsTimersResponseBody extends $dara.Model {
  data?: ListMmsTimersResponseBodyData;
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
      data: ListMmsTimersResponseBodyData,
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

