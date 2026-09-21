// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlInsightStatisticResponseBodyDataDataListTrend extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the trend data point. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1718000000000
   */
  timestamp?: number;
  /**
   * @remarks
   * The number of SQL executions within the time slice.
   * 
   * @example
   * 12
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlInsightStatisticResponseBodyDataDataList extends $dara.Model {
  /**
   * @remarks
   * The number of affected rows for a single SQL statement. For **SELECT** statements, this indicates the number of scanned rows. For **DML** statements, this indicates the number of affected rows.
   * 
   * > Returned only for Lindorm instances.
   * 
   * @example
   * 30
   */
  affectRows?: number;
  /**
   * @remarks
   * The value of the aggregation dimension for this statistical entry, which varies based on the **Type** request parameter. Valid values:
   * 
   * - When aggregated by SQL template: the SQL template ID, which is the same as **SqlId**.
   * - When **Type** is set to **FullRequestOrigin**: the access source address.
   * - When **Type** is set to **FullRequestUser**: the database username.
   * 
   * @example
   * 651b56fe9418d48edb8fdf0980ec****
   */
  aggKey?: string;
  /**
   * @remarks
   * The average number of affected rows.
   * 
   * > Returned only for Lindorm instances. The value is null for other database engines.
   * 
   * @example
   * 30.2
   */
  avgAffectRows?: number;
  /**
   * @remarks
   * The average CPU time consumed by SQL execution, in microseconds.
   * 
   * > This metric is exclusive to SQL Server instances. The value is null for other database engines.
   * 
   * @example
   * 12.5
   */
  avgCpuTime?: number;
  /**
   * @remarks
   * The average number of rows fetched by the PolarDB-X compute node from data nodes.
   * 
   * > This metric is exclusive to PolarDB-X compute nodes. The value is null or 0 for other database engines.
   * 
   * @example
   * 10
   */
  avgFrows?: number;
  /**
   * @remarks
   * The average lock wait time per execution, in milliseconds.
   * 
   * > Data is available only when **Version** is set to **1**.
   * 
   * @example
   * 0.00009589874265269765
   */
  avgLockWaitTime?: number;
  /**
   * @remarks
   * The average number of logical reads per execution.
   * 
   * > Data is available only when **Version** is set to **1**.
   * 
   * @example
   * 654.4470327860251
   */
  avgLogicalRead?: number;
  /**
   * @remarks
   * The average number of physical asynchronous reads per execution.
   * 
   * > Data is available only when **Version** is set to **1**.
   * 
   * @example
   * 0
   */
  avgPhysicalAsyncRead?: number;
  /**
   * @remarks
   * The average number of physical reads.
   * 
   * > This metric is exclusive to SQL Server instances. The value is null for other database engines.
   * 
   * @example
   * 654.4
   */
  avgPhysicalRead?: number;
  /**
   * @remarks
   * The average number of physical synchronous reads per execution.
   * 
   * > Data is available only when **Version** is set to **1**.
   * 
   * @example
   * 0
   */
  avgPhysicalSyncRead?: number;
  /**
   * @remarks
   * The average number of updated rows and returned rows for the PolarDB-X compute node.
   * 
   * > This metric is exclusive to PolarDB-X compute nodes. The value is null or 0 for other database engines.
   * 
   * @example
   * 10
   */
  avgRows?: number;
  /**
   * @remarks
   * The average number of rows scanned per execution.
   * 
   * @example
   * 53421.0
   */
  avgRowsExamined?: number;
  /**
   * @remarks
   * The average number of rows returned per execution.
   * 
   * @example
   * 14
   */
  avgRowsReturned?: number;
  /**
   * @remarks
   * The average number of rows updated per execution.
   * 
   * @example
   * 30.2
   */
  avgRowsUpdated?: number;
  /**
   * @remarks
   * The average execution time per execution, in milliseconds.
   * 
   * @example
   * 2.499
   */
  avgRt?: number;
  /**
   * @remarks
   * The average number of scanned rows.
   * 
   * > This field is not returned by this operation. Use **AvgRowsExamined** for the average number of scanned rows.
   * 
   * @example
   * 53421.0
   */
  avgScanRows?: number;
  /**
   * @remarks
   * The average number of requests sent by the PolarDB-X compute node to data nodes.
   * 
   * > This metric is exclusive to PolarDB-X compute nodes. The value is null or 0 for other database engines.
   * 
   * @example
   * 10
   */
  avgScnt?: number;
  /**
   * @remarks
   * The average number of logical writes.
   * 
   * > This metric is exclusive to SQL Server instances. The value is null for other database engines.
   * 
   * @example
   * 10
   */
  avgWrites?: number;
  /**
   * @remarks
   * The total number of executions of the SQL template within the statistical interval.
   * 
   * @example
   * 127
   */
  count?: number;
  /**
   * @remarks
   * The ratio of the number of executions of this statistical entry to the total number of executions of all SQL statements on the instance. The value ranges from 0 to 1.
   * 
   * @example
   * 0.0586
   */
  countRate?: number;
  /**
   * @remarks
   * The total CPU time consumed by SQL execution, in microseconds.
   * 
   * > This metric is exclusive to SQL Server instances. The value is null for other database engines.
   * 
   * @example
   * 100
   */
  cpuTime?: number;
  /**
   * @remarks
   * The name of the database where the SQL statement is executed.
   * 
   * @example
   * dbtest01
   */
  database?: string;
  /**
   * @remarks
   * The error code returned by SQL execution.
   * 
   * > The error code is a detail of a single SQL statement. This operation returns template-level aggregated statistics and does not return this field. Use **ErrorCount** for error information.
   * 
   * @example
   * 1146
   */
  errorCode?: string;
  /**
   * @remarks
   * The number of execution errors for the SQL template within the statistical interval.
   * 
   * @example
   * 1
   */
  errorCount?: number;
  /**
   * @remarks
   * The time when the SQL template first appeared.
   * 
   * > This field is not returned by this operation.
   * 
   * @example
   * 1659308149000
   */
  firstTime?: number;
  /**
   * @remarks
   * The total number of rows fetched by the PolarDB-X compute node from data nodes.
   * 
   * > This metric is exclusive to PolarDB-X compute nodes. The value is null or 0 for other database engines.
   * 
   * @example
   * 10
   */
  frows?: number;
  /**
   * @remarks
   * The hash value of the SQL template, returned together with the SQL template.
   * 
   * > This value is generated by the PolarDB-X compute node kernel. The value is empty for non-PolarDB-X compute node instances.
   * 
   * @example
   * 2e8147b5ca2dfc640dfd5e43d96a****
   */
  hash?: string;
  /**
   * @remarks
   * The endpoint of the instance to which the statistical data belongs.
   * 
   * > Whether this field is returned depends on the aggregated storage link of the instance. The value is null for some links.
   * 
   * @example
   * rm-2ze1jdv45i7l6****.mysql.rds.aliyuncs.com
   */
  ip?: string;
  /**
   * @remarks
   * The total lock wait time, in milliseconds.
   * 
   * > Data is available only when **Version** is set to **1**.
   * 
   * @example
   * 1089.4177720290281
   */
  lockWaitTime?: number;
  /**
   * @remarks
   * The total number of logical reads.
   * 
   * > Data is available only when **Version** is set to **1**.
   * 
   * @example
   * 165848
   */
  logicalRead?: number;
  /**
   * @remarks
   * The maximum CPU time in a single execution, in microseconds.
   * 
   * > This metric is exclusive to SQL Server instances. The value is null for other database engines.
   * 
   * @example
   * 30
   */
  maxCpuTime?: number;
  /**
   * @remarks
   * The maximum number of logical reads in a single execution.
   * 
   * > Data is available only when **Version** is set to **1**.
   * 
   * @example
   * 3186
   */
  maxLogicalRead?: number;
  /**
   * @remarks
   * The maximum number of physical reads in a single execution.
   * 
   * > This metric is exclusive to SQL Server instances. The value is null for other database engines.
   * 
   * @example
   * 3186
   */
  maxPhysicalRead?: number;
  /**
   * @remarks
   * The maximum number of rows scanned in a single execution.
   * 
   * > This field is not returned by this operation. Use **RowsExamined** and **AvgRowsExamined** for scanned row counts.
   * 
   * @example
   * 318613
   */
  maxRowsExamined?: number;
  /**
   * @remarks
   * The maximum number of rows returned in a single execution.
   * 
   * @example
   * 20
   */
  maxRowsReturned?: number;
  /**
   * @remarks
   * The maximum execution time in a single execution, in milliseconds.
   * 
   * @example
   * 12.499
   */
  maxRt?: number;
  /**
   * @remarks
   * The maximum number of logical writes in a single execution.
   * 
   * > This metric is exclusive to SQL Server instances. The value is null for other database engines.
   * 
   * @example
   * 12
   */
  maxWrites?: number;
  /**
   * @remarks
   * The minimum CPU time in a single execution, in microseconds.
   * 
   * > This metric is exclusive to SQL Server instances. The value is null for other database engines.
   * 
   * @example
   * 5
   */
  minCpuTime?: number;
  /**
   * @remarks
   * The minimum number of logical reads in a single execution.
   * 
   * > Data is available only when **Version** is set to **1**.
   * 
   * @example
   * 12
   */
  minLogicalRead?: number;
  /**
   * @remarks
   * The minimum number of physical reads in a single execution.
   * 
   * > This metric is exclusive to SQL Server instances. The value is null for other database engines.
   * 
   * @example
   * 12
   */
  minPhysicalRead?: number;
  /**
   * @remarks
   * The minimum number of rows returned in a single execution.
   * 
   * @example
   * 1
   */
  minRowsReturned?: number;
  /**
   * @remarks
   * The minimum execution time in a single execution, in milliseconds.
   * 
   * @example
   * 0.409789
   */
  minRt?: number;
  /**
   * @remarks
   * The minimum number of logical writes in a single execution.
   * 
   * > This metric is exclusive to SQL Server instances. The value is null for other database engines.
   * 
   * @example
   * 8
   */
  minWrites?: number;
  /**
   * @remarks
   * The display alias configured for the access source address.
   * 
   * > Returned only when aggregated by access source (when **Type** is set to **FullRequestOrigin**). The value is null in other scenarios.
   * 
   * @example
   * order-1
   */
  originAlias?: string;
  /**
   * @remarks
   * The source address of the client that initiated the SQL statement.
   * 
   * > When **Type** is set to **FullRequestOrigin**, this field serves as the aggregation dimension for the statistical entry.
   * 
   * @example
   * 172.26.XX.XXX
   */
  originHost?: string;
  /**
   * @remarks
   * The parameter content of the SQL sample.
   * 
   * > This operation returns template-level aggregated statistics and does not return this field.
   * 
   * @example
   * [1, "das"]
   */
  params?: string;
  /**
   * @remarks
   * The total number of physical asynchronous reads.
   * 
   * > Data is available only when **Version** is set to **1**.
   * 
   * @example
   * 0
   */
  physicalAsyncRead?: number;
  /**
   * @remarks
   * The total number of physical reads.
   * 
   * > This metric is exclusive to SQL Server instances. The value is null for other database engines.
   * 
   * @example
   * 165848
   */
  physicalRead?: number;
  /**
   * @remarks
   * The total number of physical synchronous reads.
   * 
   * > Data is available only when **Version** is set to **1**.
   * 
   * @example
   * 0
   */
  physicalSyncRead?: number;
  /**
   * @remarks
   * The port of the instance to which the statistical data belongs.
   * 
   * > Whether this field is returned depends on the aggregated storage link of the instance. The value is null for some links.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The parameterized SQL template text, which is the statement with constants in the SQL replaced by placeholders.
   * 
   * @example
   * select * from t_order where id = ?
   */
  psql?: string;
  /**
   * @remarks
   * The total number of updated rows and returned rows for the PolarDB-X compute node.
   * 
   * > This metric is exclusive to PolarDB-X compute nodes. The value is null or 0 for other engines.
   * 
   * @example
   * 10
   */
  rows?: number;
  /**
   * @remarks
   * The total number of rows examined by the SQL template within the statistical interval.
   * 
   * @example
   * 2048576
   */
  rowsExamined?: number;
  /**
   * @remarks
   * The total number of rows returned by the SQL template within the statistical interval.
   * 
   * @example
   * 14
   */
  rowsReturned?: number;
  /**
   * @remarks
   * The total execution duration of the SQL template within the statistical interval. Unit: milliseconds.
   * 
   * > For PolarDB-X compute nodes (where **Role** is **polarx_cn**) with kernel versions earlier than 5.4.13, this value is converted from microseconds to milliseconds.
   * 
   * @example
   * 0.409789
   */
  rt?: number;
  /**
   * @remarks
   * The number of times the execution duration exceeds 1 second.
   * 
   * > Whether this field is returned depends on the aggregation storage link of the instance. The value is null for certain links.
   * 
   * @example
   * 20
   */
  rtGreaterThanOneSecondCount?: number;
  /**
   * @remarks
   * The ratio of the total execution duration of this entry to the total execution duration of all SQL statements on the instance. Valid values: 0 to 1.
   * 
   * @example
   * 0.1384
   */
  rtRate?: number;
  /**
   * @remarks
   * The type identifier of the sample data.
   * 
   * > This operation returns aggregated statistics and does not return this field.
   * 
   * @example
   * sql
   */
  sampleType?: string;
  /**
   * @remarks
   * The number of rows scanned by a single SQL statement.
   * 
   * > This operation returns template-level aggregated statistics and does not return this field. Use the aggregated metrics **RowsExamined** and **AvgRowsExamined** instead.
   * 
   * @example
   * 29
   */
  scanRows?: number;
  /**
   * @remarks
   * The total number of requests sent from the PolarDB-X compute node to data nodes.
   * 
   * > This metric is exclusive to PolarDB-X compute nodes. The value is null or 0 for other engines.
   * 
   * @example
   * 10
   */
  scnt?: number;
  /**
   * @remarks
   * The original SQL text.
   * 
   * > The statistical results return the SQL template (**Psql**) and do not return this field.
   * 
   * @example
   * select * from t_order where id = 1
   */
  sql?: string;
  /**
   * @remarks
   * The SQL template ID that uniquely identifies a type of parameterized SQL statement. Multiple executions under the same template are aggregated into a single statistical entry. You can use this ID to correlate the same type of SQL across multi-dimensional queries.
   * 
   * @example
   * 651b56fe9418d48edb8fdf0980ec****
   */
  sqlId?: string;
  /**
   * @remarks
   * The SQL text with parameter values uniformly processed, used in sample data scenarios.
   * 
   * > This operation does not return this field.
   * 
   * @example
   * select * from t_order where id = ?
   */
  sqlNew?: string;
  /**
   * @remarks
   * The SQL text feature value, used in SQL analysis scenarios.
   * 
   * > This operation does not return this field.
   * 
   * @example
   * select_from_t_order
   */
  sqlTextFeature?: string;
  /**
   * @remarks
   * The SQL type. Valid values:
   * 
   * - **select**
   * - **insert**
   * - **update**
   * - **delete**
   * - **other**
   * 
   * @example
   * select
   */
  sqlType?: string;
  /**
   * @remarks
   * The total number of rows updated by the SQL template within the statistical interval.
   * 
   * @example
   * 3810
   */
  sumRowsUpdated?: number;
  /**
   * @remarks
   * The list of table names involved in the SQL statement.
   */
  tables?: string[];
  /**
   * @remarks
   * The database thread ID that executed the SQL statement.
   * 
   * > The thread ID is a detail of a single SQL statement. This operation returns template-level aggregated statistics and does not return this field.
   * 
   * @example
   * 57472578
   */
  threadId?: string;
  /**
   * @remarks
   * The execution duration ratio.
   * 
   * > This operation returns the execution duration ratio through **RtRate** and does not return this field.
   * 
   * @example
   * 0.1384
   */
  timeRate?: number;
  /**
   * @remarks
   * The data timestamp. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * > The statistical results are aggregated at the SQL template level and do not return this field.
   * 
   * @example
   * 1718600000000
   */
  timestamp?: number;
  /**
   * @remarks
   * The total number of affected rows.
   * 
   * > This field is returned only for Lindorm instances. The value is null for other engines.
   * 
   * @example
   * 3810
   */
  totalAffectRows?: number;
  /**
   * @remarks
   * The total SQL execution duration.
   * 
   * > This operation does not return this field. Use **Rt** for the total execution duration.
   * 
   * @example
   * 310
   */
  totalRt?: number;
  /**
   * @remarks
   * The total number of rows scanned.
   * 
   * > This operation does not return this field. Use **RowsExamined** for the total number of rows scanned.
   * 
   * @example
   * 2048576
   */
  totalScanRows?: number;
  /**
   * @remarks
   * The execution count trend sequence of the SQL template, divided into time slices within the query time window.
   * 
   * > This field is returned only when the request parameter **DoFillTrend** is set to **true** and the trend padding capability is enabled for the instance. The time slice interval is automatically determined by the query span. Time slices with no data may be padded with zeros.
   */
  trend?: DescribeSqlInsightStatisticResponseBodyDataDataListTrend[];
  /**
   * @remarks
   * The number of rows updated by a single SQL statement.
   * 
   * > This operation returns template-level aggregated statistics and does not return this field. Use the aggregated metrics **SumRowsUpdated** and **AvgRowsUpdated** instead.
   * 
   * @example
   * 30
   */
  updateRows?: number;
  /**
   * @remarks
   * The database username that executed the SQL statement.
   * 
   * > When **Type** is set to **FullRequestUser**, this field serves as the aggregation dimension for the statistical entry.
   * 
   * @example
   * testUser
   */
  user?: string;
  /**
   * @remarks
   * The SQL Explorer data collection link version. The value **1** is returned when the instance collects logical read or lock wait data. Otherwise, the value **0** is returned. Valid values:
   * 
   * - **0**: V0 basic collection link.
   * - **1**: V1 collection link, which additionally collects four metrics (**LockWaitTime**, **LogicalRead**, **PhysicalSyncRead**, and **PhysicalAsyncRead**) on top of V0.
   * 
   * > When the value is **0**, the extended metrics contain no data.
   * 
   * @example
   * 1
   */
  version?: number;
  /**
   * @remarks
   * The VPC ID of the instance to which the statistical data belongs.
   * 
   * > Whether this field is returned depends on the aggregation storage link of the instance. The value is null for certain links.
   * 
   * @example
   * vpc-2zentqj1sk4qmolci****
   */
  vpcId?: string;
  /**
   * @remarks
   * The total number of logical writes.
   * 
   * > This metric is exclusive to SQL Server instances. The value is null for other engines.
   * 
   * @example
   * 10
   */
  writes?: number;
  static names(): { [key: string]: string } {
    return {
      affectRows: 'AffectRows',
      aggKey: 'AggKey',
      avgAffectRows: 'AvgAffectRows',
      avgCpuTime: 'AvgCpuTime',
      avgFrows: 'AvgFrows',
      avgLockWaitTime: 'AvgLockWaitTime',
      avgLogicalRead: 'AvgLogicalRead',
      avgPhysicalAsyncRead: 'AvgPhysicalAsyncRead',
      avgPhysicalRead: 'AvgPhysicalRead',
      avgPhysicalSyncRead: 'AvgPhysicalSyncRead',
      avgRows: 'AvgRows',
      avgRowsExamined: 'AvgRowsExamined',
      avgRowsReturned: 'AvgRowsReturned',
      avgRowsUpdated: 'AvgRowsUpdated',
      avgRt: 'AvgRt',
      avgScanRows: 'AvgScanRows',
      avgScnt: 'AvgScnt',
      avgWrites: 'AvgWrites',
      count: 'Count',
      countRate: 'CountRate',
      cpuTime: 'CpuTime',
      database: 'Database',
      errorCode: 'ErrorCode',
      errorCount: 'ErrorCount',
      firstTime: 'FirstTime',
      frows: 'Frows',
      hash: 'Hash',
      ip: 'Ip',
      lockWaitTime: 'LockWaitTime',
      logicalRead: 'LogicalRead',
      maxCpuTime: 'MaxCpuTime',
      maxLogicalRead: 'MaxLogicalRead',
      maxPhysicalRead: 'MaxPhysicalRead',
      maxRowsExamined: 'MaxRowsExamined',
      maxRowsReturned: 'MaxRowsReturned',
      maxRt: 'MaxRt',
      maxWrites: 'MaxWrites',
      minCpuTime: 'MinCpuTime',
      minLogicalRead: 'MinLogicalRead',
      minPhysicalRead: 'MinPhysicalRead',
      minRowsReturned: 'MinRowsReturned',
      minRt: 'MinRt',
      minWrites: 'MinWrites',
      originAlias: 'OriginAlias',
      originHost: 'OriginHost',
      params: 'Params',
      physicalAsyncRead: 'PhysicalAsyncRead',
      physicalRead: 'PhysicalRead',
      physicalSyncRead: 'PhysicalSyncRead',
      port: 'Port',
      psql: 'Psql',
      rows: 'Rows',
      rowsExamined: 'RowsExamined',
      rowsReturned: 'RowsReturned',
      rt: 'Rt',
      rtGreaterThanOneSecondCount: 'RtGreaterThanOneSecondCount',
      rtRate: 'RtRate',
      sampleType: 'SampleType',
      scanRows: 'ScanRows',
      scnt: 'Scnt',
      sql: 'Sql',
      sqlId: 'SqlId',
      sqlNew: 'SqlNew',
      sqlTextFeature: 'SqlTextFeature',
      sqlType: 'SqlType',
      sumRowsUpdated: 'SumRowsUpdated',
      tables: 'Tables',
      threadId: 'ThreadId',
      timeRate: 'TimeRate',
      timestamp: 'Timestamp',
      totalAffectRows: 'TotalAffectRows',
      totalRt: 'TotalRt',
      totalScanRows: 'TotalScanRows',
      trend: 'Trend',
      updateRows: 'UpdateRows',
      user: 'User',
      version: 'Version',
      vpcId: 'VpcId',
      writes: 'Writes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectRows: 'number',
      aggKey: 'string',
      avgAffectRows: 'number',
      avgCpuTime: 'number',
      avgFrows: 'number',
      avgLockWaitTime: 'number',
      avgLogicalRead: 'number',
      avgPhysicalAsyncRead: 'number',
      avgPhysicalRead: 'number',
      avgPhysicalSyncRead: 'number',
      avgRows: 'number',
      avgRowsExamined: 'number',
      avgRowsReturned: 'number',
      avgRowsUpdated: 'number',
      avgRt: 'number',
      avgScanRows: 'number',
      avgScnt: 'number',
      avgWrites: 'number',
      count: 'number',
      countRate: 'number',
      cpuTime: 'number',
      database: 'string',
      errorCode: 'string',
      errorCount: 'number',
      firstTime: 'number',
      frows: 'number',
      hash: 'string',
      ip: 'string',
      lockWaitTime: 'number',
      logicalRead: 'number',
      maxCpuTime: 'number',
      maxLogicalRead: 'number',
      maxPhysicalRead: 'number',
      maxRowsExamined: 'number',
      maxRowsReturned: 'number',
      maxRt: 'number',
      maxWrites: 'number',
      minCpuTime: 'number',
      minLogicalRead: 'number',
      minPhysicalRead: 'number',
      minRowsReturned: 'number',
      minRt: 'number',
      minWrites: 'number',
      originAlias: 'string',
      originHost: 'string',
      params: 'string',
      physicalAsyncRead: 'number',
      physicalRead: 'number',
      physicalSyncRead: 'number',
      port: 'number',
      psql: 'string',
      rows: 'number',
      rowsExamined: 'number',
      rowsReturned: 'number',
      rt: 'number',
      rtGreaterThanOneSecondCount: 'number',
      rtRate: 'number',
      sampleType: 'string',
      scanRows: 'number',
      scnt: 'number',
      sql: 'string',
      sqlId: 'string',
      sqlNew: 'string',
      sqlTextFeature: 'string',
      sqlType: 'string',
      sumRowsUpdated: 'number',
      tables: { 'type': 'array', 'itemType': 'string' },
      threadId: 'string',
      timeRate: 'number',
      timestamp: 'number',
      totalAffectRows: 'number',
      totalRt: 'number',
      totalScanRows: 'number',
      trend: { 'type': 'array', 'itemType': DescribeSqlInsightStatisticResponseBodyDataDataListTrend },
      updateRows: 'number',
      user: 'string',
      version: 'number',
      vpcId: 'string',
      writes: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    if(Array.isArray(this.trend)) {
      $dara.Model.validateArray(this.trend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlInsightStatisticResponseBodyDataData extends $dara.Model {
  /**
   * @remarks
   * The extended information.
   * 
   * > This field is not returned by this operation.
   * 
   * @example
   * {}
   */
  extra?: any;
  /**
   * @remarks
   * The list of SQL Explorer statistical results. Each element is a statistical entry under an aggregation dimension.
   */
  list?: DescribeSqlInsightStatisticResponseBodyDataDataList[];
  /**
   * @remarks
   * The current page number, corresponding to the request parameter **PageNo**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page, corresponding to the request parameter **PageSize**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of statistical entries that match the query conditions. You can use this value for pagination calculation.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'any',
      list: { 'type': 'array', 'itemType': DescribeSqlInsightStatisticResponseBodyDataDataList },
      pageNo: 'number',
      pageSize: 'number',
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

export class DescribeSqlInsightStatisticResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The SQL Explorer statistical query results.
   * 
   * > Returned only when **State** is **SUCCESS**.
   */
  data?: DescribeSqlInsightStatisticResponseBodyDataData;
  /**
   * @remarks
   * The error code of the asynchronous query failure.
   * 
   * > This field is returned only when the query fails.
   * 
   * @example
   * -10200020
   */
  errorCode?: number;
  /**
   * @remarks
   * Indicates whether the asynchronous query has completed. Valid values:
   * 
   * - **true**: **State** is **SUCCESS** or **FAIL**.
   * - **false**: **State** is **RUNNING**.
   */
  isFinish?: boolean;
  /**
   * @remarks
   * The error description of the asynchronous query failure.
   * 
   * > This field is returned only when the query fails.
   * 
   * @example
   * startTime must be in 30 days and the interval must be within 7 day
   */
  message?: string;
  /**
   * @remarks
   * The hash identifier of the request parameters.
   * 
   * > This operation does not return this field. Use **ResultId** to identify the asynchronous query.
   * 
   * @example
   * 507044db6c4eadfa2dab9b084e80****
   */
  requestKey?: string;
  /**
   * @remarks
   * The asynchronous query result ID, in the format of an async_ prefix followed by a hash value computed from all business parameters of the request.
   * 
   * > Repeated calls with the same parameters return the same query result. Therefore, when polling, you must use exactly the same request parameters as the initial call. Any change in parameters generates a different **ResultId** and triggers a new query.
   * 
   * @example
   * async__507044db6c4eadfa2dab9b084e80****
   */
  resultId?: string;
  /**
   * @remarks
   * The current status of the asynchronous query. Valid values:
   * 
   * - **RUNNING**: The query is in progress. Continue polling.
   * - **SUCCESS**: The query succeeded. The **Data** field contains data only in this state.
   * - **FAIL**: The query failed.
   * 
   * > When the query fails, the operation directly returns an error code and error message instead of a normal response body with **State** set to **FAIL**.
   * 
   * @example
   * SUCCESS
   */
  state?: string;
  /**
   * @remarks
   * The time when the asynchronous query was submitted. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * > When the query fails, this value indicates the time when the failure occurred.
   * 
   * @example
   * 1718600000000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      isFinish: 'IsFinish',
      message: 'Message',
      requestKey: 'RequestKey',
      resultId: 'ResultId',
      state: 'State',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeSqlInsightStatisticResponseBodyDataData,
      errorCode: 'number',
      isFinish: 'boolean',
      message: 'string',
      requestKey: 'string',
      resultId: 'string',
      state: 'string',
      timestamp: 'number',
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

export class DescribeSqlInsightStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The envelope for asynchronous query results. The first call returns **ResultId** and **State**. Poll with the exact same request parameters until **State** is **SUCCESS**, then retrieve the statistical details from **List**.
   */
  data?: DescribeSqlInsightStatisticResponseBodyData;
  /**
   * @remarks
   * The response message. An error description is returned if the request fails.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request, which can be used for troubleshooting.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed. Check the **Code** and **Message** fields to determine the cause.
   * 
   * @example
   * true
   */
  success?: string;
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
      code: 'string',
      data: DescribeSqlInsightStatisticResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

