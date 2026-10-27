// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFullRequestStatResultByInstanceIdResponseBodyDataResultList extends $dara.Model {
  /**
   * @remarks
   * The average number of scanned rows.
   * 
   * > This field is supported by the following databases: ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, and PolarDB for MySQL.
   * 
   * @example
   * 10000
   */
  avgExaminedRows?: number;
  /**
   * @remarks
   * The average number of rows pulled by the compute node from the data node in the PolarDB-X 2.0 database instance.
   * 
   * @example
   * 0
   */
  avgFetchRows?: number;
  /**
   * @remarks
   * The average lock wait time, in seconds.
   * 
   * @example
   * 0.00009589874265269765
   */
  avgLockWaitTime?: number;
  /**
   * @remarks
   * The average number of logical reads.
   * 
   * @example
   * 654.4470327860251
   */
  avgLogicalRead?: number;
  /**
   * @remarks
   * The average number of physical asynchronous reads.
   * 
   * @example
   * 0
   */
  avgPhysicalAsyncRead?: number;
  /**
   * @remarks
   * The average number of physical synchronous reads.
   * 
   * @example
   * 0
   */
  avgPhysicalSyncRead?: number;
  /**
   * @remarks
   * The average number of returned rows.
   * 
   * @example
   * 10000
   */
  avgReturnedRows?: number;
  /**
   * @remarks
   * The average time to execute.
   * 
   * @example
   * 2.499
   */
  avgRt?: number;
  /**
   * @remarks
   * The average SQL count.
   * 
   * @example
   * 10000
   */
  avgSqlCount?: number;
  /**
   * @remarks
   * The average number of updated rows.
   * 
   * > This field is supported by the following databases: ApsaraDB RDS for MySQL and PolarDB-X 2.0.
   * 
   * @example
   * 10000
   */
  avgUpdatedRows?: number;
  /**
   * @remarks
   * The total number of executions.
   * 
   * @example
   * 100000
   */
  count?: number;
  /**
   * @remarks
   * The proportion of times the statements execute.
   * 
   * @example
   * 0.0586
   */
  countRate?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * dbtest01
   */
  database?: string;
  /**
   * @remarks
   * The number of execution errors.
   * 
   * @example
   * 1
   */
  errorCount?: number;
  /**
   * @remarks
   * The total number of scanned rows.
   * 
   * > This field is supported by the following databases: ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, and PolarDB for MySQL.
   * 
   * @example
   * 10000
   */
  examinedRows?: number;
  /**
   * @remarks
   * The number of rows pulled by the compute node from the data node in the PolarDB-X 2.0 database instance.
   * 
   * @example
   * 0
   */
  fetchRows?: number;
  /**
   * @remarks
   * The network address of the instance.
   * 
   * @example
   * rm-uf6dyi58dm6****.mysql.rds.aliy****.com
   */
  ip?: string;
  /**
   * @remarks
   * The lock wait time, in seconds.
   * 
   * @example
   * 1089.4177720290281
   */
  lockWaitTime?: number;
  /**
   * @remarks
   * The number of logical reads.
   * 
   * @example
   * 7.434573266E9
   */
  logicalRead?: number;
  /**
   * @remarks
   * The number of physical asynchronous reads.
   * 
   * @example
   * 0
   */
  physicalAsyncRead?: number;
  /**
   * @remarks
   * The number of physical synchronous reads.
   * 
   * @example
   * 0
   */
  physicalSyncRead?: number;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The SQL template.
   * 
   * @example
   * select * from dbtest01 where ****
   */
  psql?: string;
  /**
   * @remarks
   * The total number of rows updated or returned by the compute node in the PolarDB-X 2.0 database instance.
   * 
   * @example
   * 0
   */
  rows?: number;
  /**
   * @remarks
   * The number of SQL statements whose execution time is greater than 1 second.
   * 
   * @example
   * 20
   */
  rtGreaterThanOneSecondCount?: number;
  /**
   * @remarks
   * The execution time proportion.
   * 
   * @example
   * 2.499
   */
  rtRate?: number;
  /**
   * @remarks
   * The number of SQL statements.
   * 
   * @example
   * 200
   */
  sqlCount?: number;
  /**
   * @remarks
   * The SQL ID.
   * 
   * @example
   * d71f82be1eef72bd105128204d2e****
   */
  sqlId?: string;
  /**
   * @remarks
   * The total number of changed rows.
   * 
   * @example
   * 100
   */
  sumUpdatedRows?: number;
  /**
   * @remarks
   * The name of the database table.
   */
  tables?: string[];
  /**
   * @remarks
   * The version.
   * 
   * @example
   * 1
   */
  version?: number;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-2zentqj1sk4qmolci****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      avgExaminedRows: 'AvgExaminedRows',
      avgFetchRows: 'AvgFetchRows',
      avgLockWaitTime: 'AvgLockWaitTime',
      avgLogicalRead: 'AvgLogicalRead',
      avgPhysicalAsyncRead: 'AvgPhysicalAsyncRead',
      avgPhysicalSyncRead: 'AvgPhysicalSyncRead',
      avgReturnedRows: 'AvgReturnedRows',
      avgRt: 'AvgRt',
      avgSqlCount: 'AvgSqlCount',
      avgUpdatedRows: 'AvgUpdatedRows',
      count: 'Count',
      countRate: 'CountRate',
      database: 'Database',
      errorCount: 'ErrorCount',
      examinedRows: 'ExaminedRows',
      fetchRows: 'FetchRows',
      ip: 'Ip',
      lockWaitTime: 'LockWaitTime',
      logicalRead: 'LogicalRead',
      physicalAsyncRead: 'PhysicalAsyncRead',
      physicalSyncRead: 'PhysicalSyncRead',
      port: 'Port',
      psql: 'Psql',
      rows: 'Rows',
      rtGreaterThanOneSecondCount: 'RtGreaterThanOneSecondCount',
      rtRate: 'RtRate',
      sqlCount: 'SqlCount',
      sqlId: 'SqlId',
      sumUpdatedRows: 'SumUpdatedRows',
      tables: 'Tables',
      version: 'Version',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgExaminedRows: 'number',
      avgFetchRows: 'number',
      avgLockWaitTime: 'number',
      avgLogicalRead: 'number',
      avgPhysicalAsyncRead: 'number',
      avgPhysicalSyncRead: 'number',
      avgReturnedRows: 'number',
      avgRt: 'number',
      avgSqlCount: 'number',
      avgUpdatedRows: 'number',
      count: 'number',
      countRate: 'number',
      database: 'string',
      errorCount: 'number',
      examinedRows: 'number',
      fetchRows: 'number',
      ip: 'string',
      lockWaitTime: 'number',
      logicalRead: 'number',
      physicalAsyncRead: 'number',
      physicalSyncRead: 'number',
      port: 'number',
      psql: 'string',
      rows: 'number',
      rtGreaterThanOneSecondCount: 'number',
      rtRate: 'number',
      sqlCount: 'number',
      sqlId: 'string',
      sumUpdatedRows: 'number',
      tables: { 'type': 'array', 'itemType': 'string' },
      version: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFullRequestStatResultByInstanceIdResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The list of full request data.
   */
  list?: GetFullRequestStatResultByInstanceIdResponseBodyDataResultList[];
  /**
   * @remarks
   * The total amount of data.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetFullRequestStatResultByInstanceIdResponseBodyDataResultList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFullRequestStatResultByInstanceIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the request failed. Valid values:
   * 
   * - **true**: yes.
   * 
   * - **false**: no.
   * 
   * @example
   * false
   */
  fail?: boolean;
  /**
   * @remarks
   * Indicates whether the asynchronous request is completed. Valid values:
   * 
   * - **true**: yes.
   * 
   * - **false**: no.
   * 
   * @example
   * true
   */
  isFinish?: boolean;
  /**
   * @remarks
   * The returned full request data.
   */
  result?: GetFullRequestStatResultByInstanceIdResponseBodyDataResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9CB97BC4-6479-55D0-B9D0-EA925AFE****
   */
  resultId?: string;
  /**
   * @remarks
   * The execution status of the asynchronous request. Valid values:
   * 
   * - **RUNNING**: running.
   * 
   * - **SUCCESS**: successful.
   * 
   * - **FAIL**: failed.
   * 
   * @example
   * SUCCESS
   */
  state?: string;
  /**
   * @remarks
   * The execution time. The time is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1645668213000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      fail: 'Fail',
      isFinish: 'IsFinish',
      result: 'Result',
      resultId: 'ResultId',
      state: 'State',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fail: 'boolean',
      isFinish: 'boolean',
      result: GetFullRequestStatResultByInstanceIdResponseBodyDataResult,
      resultId: 'string',
      state: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFullRequestStatResultByInstanceIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetFullRequestStatResultByInstanceIdResponseBodyData;
  /**
   * @remarks
   * The message returned for the request.
   * 
   * > If the request is successful, **Successful** is returned. If the request fails, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7172BECE-588A-5961-8126-C216E16B****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetFullRequestStatResultByInstanceIdResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

