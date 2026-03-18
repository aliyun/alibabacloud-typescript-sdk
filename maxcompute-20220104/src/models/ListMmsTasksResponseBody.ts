// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsTasksResponseBodyDataObjectList extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2024-10-25 04:21:01
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the source database.
   * 
   * @example
   * 196
   */
  dbId?: number;
  /**
   * @remarks
   * The destination MaxCompute project.
   * 
   * @example
   * mms_test
   */
  dstDbName?: string;
  /**
   * @remarks
   * The destination MaxCompute schema.
   * 
   * @example
   * default
   */
  dstSchemaName?: string;
  /**
   * @remarks
   * The destination MaxCompute table.
   * 
   * @example
   * table_1
   */
  dstTableName?: string;
  /**
   * @remarks
   * The end time of the task.
   * 
   * @example
   * 2024-10-25 07:21:01
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the migration task.
   * 
   * @example
   * 2323
   */
  id?: number;
  /**
   * @remarks
   * The ID of the migration job.
   * 
   * @example
   * 87
   */
  jobId?: number;
  /**
   * @remarks
   * The name of the migration job.
   * 
   * @example
   * test_odps_spark
   */
  jobName?: string;
  /**
   * @remarks
   * The number of retries.
   * 
   * @example
   * 1
   */
  retriedTimes?: number;
  /**
   * @remarks
   * Indicates whether the task is running.
   * 
   * @example
   * true
   */
  running?: boolean;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * 2000028
   */
  sourceId?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @remarks
   * The name of the source database.
   * 
   * @example
   * db_1
   */
  srcDbName?: string;
  /**
   * @remarks
   * The name of the source schema. This parameter specifies the schema in a Layer 3 namespace.
   * 
   * @example
   * default
   */
  srcSchemaName?: string;
  /**
   * @remarks
   * The name of the source table.
   * 
   * @example
   * table_1
   */
  srcTableName?: string;
  /**
   * @remarks
   * The start time of the task.
   * 
   * @example
   * 2024-10-25 06:21:01
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the migration task.
   * 
   * @example
   * DATA_DOING
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the task is stopped.
   * 
   * @example
   * false
   */
  stopped?: boolean;
  /**
   * @remarks
   * The ID of the source table.
   * 
   * @example
   * 23
   */
  tableId?: number;
  /**
   * @remarks
   * The task type.
   * 
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
  /**
   * @remarks
   * The list of migration tasks.
   */
  objectList?: ListMmsTasksResponseBodyDataObjectList[];
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
  /**
   * @remarks
   * The returned data.
   */
  data?: ListMmsTasksResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
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

