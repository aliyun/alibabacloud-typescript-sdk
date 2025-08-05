// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMmsTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-10-25 04:21:01
   */
  createTime?: string;
  /**
   * @example
   * 23
   */
  dbId?: number;
  /**
   * @example
   * mms_target
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
   * 7680
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
   * 2000015
   */
  sourceId?: number;
  /**
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @example
   * mms_test
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
   * 2323
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

export class GetMmsTaskResponseBody extends $dara.Model {
  data?: GetMmsTaskResponseBodyData;
  /**
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

