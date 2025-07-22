// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFullRequestOriginStatByInstanceIdResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The average number of scanned rows.
   * 
   * > This parameter is returned only for ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, and PolarDB for MySQL databases.
   * 
   * @example
   * 10000
   */
  avgExaminedRows?: number;
  /**
   * @remarks
   * The average number of rows that are fetched from data nodes by compute nodes on the PolarDB-X 2.0 instance.
   * 
   * @example
   * 0
   */
  avgFetchRows?: number;
  /**
   * @remarks
   * The average lock wait duration. Unit: seconds.
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
   * The average number of rows.
   * 
   * @example
   * 0
   */
  avgRows?: number;
  /**
   * @remarks
   * The average execution duration.
   * 
   * @example
   * 2.499
   */
  avgRt?: number;
  /**
   * @remarks
   * The average number of SQL statements.
   * 
   * @example
   * 10000
   */
  avgSqlCount?: number;
  /**
   * @remarks
   * The average number of updated rows.
   * 
   * > This parameter is returned only for ApsaraDB RDS for MySQL and PolarDB-X 2.0 databases.
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
   * The percentage of the total number of executions.
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
   * The number of failed executions.
   * 
   * @example
   * 1
   */
  errorCount?: number;
  /**
   * @remarks
   * The total number of scanned rows.
   * 
   * > This parameter is returned only for ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, and PolarDB for MySQL databases.
   * 
   * @example
   * 10000
   */
  examinedRows?: number;
  /**
   * @remarks
   * The number of rows that are fetched from data nodes by compute nodes on the PolarDB-X 2.0 instance.
   * 
   * @example
   * 200
   */
  fetchRows?: number;
  /**
   * @remarks
   * The network address of the database instance.
   * 
   * @example
   * rm-uf6dyi58dm6****.mysql.rds.aliy****.com
   */
  ip?: string;
  /**
   * @remarks
   * The IP address of the client that executes the SQL statement.
   * 
   * @example
   * 172.26.6****
   */
  key?: string;
  /**
   * @remarks
   * The lock wait duration. Unit: seconds.
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
   * The IP address of the client that executes the SQL statement.
   * 
   * @example
   * 172.26.6****
   */
  originHost?: string;
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
   * The port number that is used to connect to the database instance.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The total number of rows updated or returned by the compute nodes of the PolarDB-X 2.0 instance.
   * 
   * @example
   * 0
   */
  rows?: number;
  /**
   * @remarks
   * The number of SQL statements that take longer than 1 second to execute.
   * 
   * @example
   * 2
   */
  rtGreaterThanOneSecondCount?: number;
  /**
   * @remarks
   * The execution duration percentage.
   * 
   * @example
   * 0.1384
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
   * The total number of updated rows.
   * 
   * @example
   * 200
   */
  sumUpdatedRows?: number;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: number;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
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
      avgRows: 'AvgRows',
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
      key: 'Key',
      lockWaitTime: 'LockWaitTime',
      logicalRead: 'LogicalRead',
      originHost: 'OriginHost',
      physicalAsyncRead: 'PhysicalAsyncRead',
      physicalSyncRead: 'PhysicalSyncRead',
      port: 'Port',
      rows: 'Rows',
      rtGreaterThanOneSecondCount: 'RtGreaterThanOneSecondCount',
      rtRate: 'RtRate',
      sqlCount: 'SqlCount',
      sumUpdatedRows: 'SumUpdatedRows',
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
      avgRows: 'number',
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
      key: 'string',
      lockWaitTime: 'number',
      logicalRead: 'number',
      originHost: 'string',
      physicalAsyncRead: 'number',
      physicalSyncRead: 'number',
      port: 'number',
      rows: 'number',
      rtGreaterThanOneSecondCount: 'number',
      rtRate: 'number',
      sqlCount: 'number',
      sumUpdatedRows: 'number',
      version: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFullRequestOriginStatByInstanceIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the full request data.
   */
  list?: GetFullRequestOriginStatByInstanceIdResponseBodyDataList[];
  /**
   * @remarks
   * The total number of entries returned.
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
      list: { 'type': 'array', 'itemType': GetFullRequestOriginStatByInstanceIdResponseBodyDataList },
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

export class GetFullRequestOriginStatByInstanceIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetFullRequestOriginStatByInstanceIdResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message such as an error code is returned.
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
   * *   **true**
   * *   **false**
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
      data: GetFullRequestOriginStatByInstanceIdResponseBodyData,
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

