// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsTimersResponseBodyDataObjectList extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-12-17 09:29:58
   */
  createTime?: string;
  /**
   * @remarks
   * The source database ID.
   * 
   * @example
   * 196
   */
  dbId?: number;
  /**
   * @remarks
   * The timer ID.
   * 
   * @example
   * 18
   */
  id?: number;
  /**
   * @remarks
   * The timer name.
   * 
   * @example
   * migrate_db_1
   */
  name?: string;
  /**
   * @remarks
   * The schedule type.
   * 
   * @example
   * Daily
   */
  scheduleType?: string;
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
   * The source database name.
   * 
   * @example
   * db_1
   */
  srcDbName?: string;
  /**
   * @remarks
   * Indicates whether the timer is stopped.
   * 
   * @example
   * false
   */
  stopped?: boolean;
  /**
   * @remarks
   * The job type.
   * 
   * @example
   * TABLES
   */
  type?: string;
  /**
   * @remarks
   * The schedule time.
   * 
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
  /**
   * @remarks
   * A list of timers.
   */
  objectList?: ListMmsTimersResponseBodyDataObjectList[];
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
   * The number of entries on the current page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
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
  /**
   * @remarks
   * The returned data.
   */
  data?: ListMmsTimersResponseBodyData;
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

