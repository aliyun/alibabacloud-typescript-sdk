// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFullRequestStatResultByInstanceIdResponseBodyDataResultList extends $dara.Model {
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
   * The average number of rows that are fetched by compute nodes from data nodes on the PolarDB-X 2.0 instance.
   * 
   * @example
   * 0
   */
  avgFetchRows?: number;
  /**
   * @remarks
   * The average lock wait latency. Unit: seconds.
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
   *  > This parameter is returned only for ApsaraDB RDS for MySQL and PolarDB-X 2.0 databases.
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
   * The number of rows that are fetched by compute nodes from data nodes on the PolarDB-X 2.0 instance.
   * 
   * @example
   * 0
   */
  fetchRows?: number;
  /**
   * @remarks
   * The IP address of the database instance.
   * 
   * @example
   * rm-uf6dyi58dm6****.mysql.rds.aliy****.com
   */
  ip?: string;
  /**
   * @remarks
   * The lock wait latency. Unit: seconds.
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
   * The port number that is used to connect to the database instance.
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
   * 20
   */
  rtGreaterThanOneSecondCount?: number;
  /**
   * @remarks
   * The execution duration percentage.
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
   * The total number of updated rows.
   * 
   * @example
   * 100
   */
  sumUpdatedRows?: number;
  /**
   * @remarks
   * The names of tables in the database.
   */
  tables?: string[];
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

