// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsTasksResponseBodyDataObjectList extends $dara.Model {
  /**
   * @example
   * 2024-10-25 04:21:01
   */
  createTime?: string;
  /**
   * @example
   * 196
   */
  dbId?: number;
  /**
   * @example
   * mms_test
   */
  dstDbName?: string;
  /**
   * @example
   * default
   */
  dstSchemaName?: string;
  /**
   * @example
   * table_1
   */
  dstTableName?: string;
  /**
   * @example
   * 2024-10-25 07:21:01
   */
  endTime?: string;
  /**
   * @example
   * 2323
   */
  id?: number;
  /**
   * @example
   * 87
   */
  jobId?: number;
  /**
   * @example
   * test_odps_spark
   */
  jobName?: string;
  /**
   * @example
   * 1
   */
  retriedTimes?: number;
  /**
   * @example
   * true
   */
  running?: boolean;
  /**
   * @example
   * 2000028
   */
  sourceId?: number;
  /**
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @example
   * db_1
   */
  srcDbName?: string;
  /**
   * @example
   * default
   */
  srcSchemaName?: string;
  /**
   * @example
   * table_1
   */
  srcTableName?: string;
  /**
   * @example
   * 2024-10-25 06:21:01
   */
  startTime?: string;
  /**
   * @example
   * DATA_DOING
   */
  status?: string;
  /**
   * @example
   * false
   */
  stopped?: boolean;
  /**
   * @example
   * 23
   */
  tableId?: number;
  /**
   * @example
   * BIGQUERY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      dbId: 'dbId',
      dstDbName: 'dstDbName',
      dstSchemaName: 'dstSchemaName',
      dstTableName: 'dstTableName',
      endTime: 'endTime',
      id: 'id',
      jobId: 'jobId',
      jobName: 'jobName',
      retriedTimes: 'retriedTimes',
      running: 'running',
      sourceId: 'sourceId',
      sourceName: 'sourceName',
      srcDbName: 'srcDbName',
      srcSchemaName: 'srcSchemaName',
      srcTableName: 'srcTableName',
      startTime: 'startTime',
      status: 'status',
      stopped: 'stopped',
      tableId: 'tableId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dbId: 'number',
      dstDbName: 'string',
      dstSchemaName: 'string',
      dstTableName: 'string',
      endTime: 'string',
      id: 'number',
      jobId: 'number',
      jobName: 'string',
      retriedTimes: 'number',
      running: 'boolean',
      sourceId: 'number',
      sourceName: 'string',
      srcDbName: 'string',
      srcSchemaName: 'string',
      srcTableName: 'string',
      startTime: 'string',
      status: 'string',
      stopped: 'boolean',
      tableId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTasksResponseBodyData extends $dara.Model {
  objectList?: ListMmsTasksResponseBodyDataObjectList[];
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
      objectList: { 'type': 'array', 'itemType': ListMmsTasksResponseBodyDataObjectList },
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

export class ListMmsTasksResponseBody extends $dara.Model {
  data?: ListMmsTasksResponseBodyData;
  /**
   * @example
   * 373A5CB2-8570-53BE-A98F-729B11D7A8B0
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
      data: ListMmsTasksResponseBodyData,
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

