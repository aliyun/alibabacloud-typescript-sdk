// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMmsTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time of the task.
   * 
   * @example
   * 2024-10-25 04:21:01
   */
  createTime?: string;
  /**
   * @remarks
   * The source database ID.
   * 
   * @example
   * 23
   */
  dbId?: number;
  /**
   * @remarks
   * The destination MaxCompute project.
   * 
   * @example
   * mms_target
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
   * The migration task ID.
   * 
   * @example
   * 7680
   */
  id?: number;
  /**
   * @remarks
   * The migration job ID.
   * 
   * @example
   * 87
   */
  jobId?: number;
  /**
   * @remarks
   * The migration job name.
   * 
   * @example
   * test_odps_spark
   */
  jobName?: string;
  /**
   * @remarks
   * The number of times the task has been retried.
   * 
   * @example
   * 1
   */
  retriedTimes?: number;
  /**
   * @remarks
   * Indicates if the task is running.
   * 
   * @example
   * true
   */
  running?: boolean;
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
   * The data source name.
   * 
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @remarks
   * The source database name.
   * 
   * @example
   * mms_test
   */
  srcDbName?: string;
  /**
   * @remarks
   * The name of the source schema. This refers to the schema in a Layer 3 namespace.
   * 
   * @example
   * default
   */
  srcSchemaName?: string;
  /**
   * @remarks
   * The source table name.
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
   * The migration task status.
   * 
   * @example
   * DATA_DOING
   */
  status?: string;
  /**
   * @remarks
   * Indicates if the task is stopped.
   * 
   * @example
   * false
   */
  stopped?: boolean;
  /**
   * @remarks
   * The source table ID.
   * 
   * @example
   * 2323
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

export class GetMmsTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The migration task object.
   */
  data?: GetMmsTaskResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 73207140-0FD5-588A-B11A-3CE093924196
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
      data: GetMmsTaskResponseBodyData,
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

