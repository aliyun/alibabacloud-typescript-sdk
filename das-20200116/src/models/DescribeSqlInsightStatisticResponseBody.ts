// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlInsightStatisticResponseBodyDataDataListTrend extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the trend point, which is a UNIX timestamp in milliseconds.
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
   * The value of the aggregation dimension for the current statistics. This value varies based on the **Type** request parameter. Valid values:
   * 
   * - When aggregated by SQL template: the SQL template ID, which is the same as **SqlId**.
   * - When **Type** is **FullRequestOrigin**: the source access address.
   * - When **Type** is **FullRequestUser**: the database username.
   * 
   * @example
   * 651b56fe9418d48edb8fdf0980ec****
   */
  aggKey?: string;
  /**
   * @remarks
   * The average number of affected rows.
   * 
   * > Returned only for Lindorm instances. For other engines, the value is null.
   * 
   * @example
   * 30.2
   */
  avgAffectRows?: number;
  /**
   * @remarks
   * The average CPU time consumed by SQL execution, in microseconds.
   * 
   * > This is an exclusive metric for SQL Server instances. For other engines, the value is null.
   * 
   * @example
   * 12.5
   */
  avgCpuTime?: number;
  /**
   * @remarks
   * The average number of rows fetched by PolarDB-X compute nodes from data nodes.
   * 
   * > This is an exclusive metric for PolarDB-X compute nodes. For other engines, the value is null or 0.
   * 
   * @example
   * 10
   */
  avgFrows?: number;
  /**
   * @remarks
   * The average lock wait time per execution, in milliseconds.
   * 
   * > Data is available only when **Version** is **1**.
   * 
   * @example
   * 0.00009589874265269765
   */
  avgLockWaitTime?: number;
  /**
   * @remarks
   * The average number of logical reads per execution.
   * 
   * > Data is available only when **Version** is **1**.
   * 
   * @example
   * 654.4470327860251
   */
  avgLogicalRead?: number;
  /**
   * @remarks
   * The average number of physical asynchronous reads per execution.
   * 
   * > Data is available only when **Version** is **1**.
   * 
   * @example
   * 0
   */
  avgPhysicalAsyncRead?: number;
  /**
   * @remarks
   * The average number of physical reads.
   * 
   * > This is an exclusive metric for SQL Server instances. For other engines, the value is null.
   * 
   * @example
   * 654.4
   */
  avgPhysicalRead?: number;
  /**
   * @remarks
   * The average number of physical synchronous reads per execution.
   * 
   * > Data is available only when **Version** is **1**.
   * 
   * @example
   * 0
   */
  avgPhysicalSyncRead?: number;
  /**
   * @remarks
   * The average number of updated and returned rows for PolarDB-X compute nodes.
   * 
   * > This is an exclusive metric for PolarDB-X compute nodes. For other engines, the value is null or 0.
   * 
   * @example
   * 10
   */
  avgRows?: number;
  /**
   * @remarks
   * The average number of scanned rows per execution.
   * 
   * @example
   * 53421.0
   */
  avgRowsExamined?: number;
  /**
   * @remarks
   * The average number of returned rows per execution.
   * 
   * @example
   * 14
   */
  avgRowsReturned?: number;
  /**
   * @remarks
   * The average number of updated rows per execution.
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
   * > This operation does not return this field. To obtain the average number of scanned rows, use **AvgRowsExamined**.
   * 
   * @example
   * 53421.0
   */
  avgScanRows?: number;
  /**
   * @remarks
   * The average number of requests sent from PolarDB-X compute nodes to data nodes.
   * 
   * > This is an exclusive metric for PolarDB-X compute nodes. For other engines, the value is null or 0.
   * 
   * @example
   * 10
   */
  avgScnt?: number;
  /**
   * @remarks
   * The average number of logical writes.
   * 
   * > This is an exclusive metric for SQL Server instances. For other engines, the value is null.
   * 
   * @example
   * 10
   */
  avgWrites?: number;
  /**
   * @remarks
   * The total number of executions for the SQL template within the statistical period.
   * 
   * @example
   * 127
   */
  count?: number;
  /**
   * @remarks
   * The ratio of the number of times the SQL template in this entry is executed to the total number of times SQL statements execute on the instance. Valid values: 0 to 1.
   * 
   * @example
   * 0.0586
   */
  countRate?: number;
  /**
   * @remarks
   * The total CPU time consumed by SQL execution, in microseconds.
   * 
   * > This is an exclusive metric for SQL Server instances. For other engines, the value is null.
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
   * The error code returned by the SQL execution.
   * 
   * > Error codes belong to the details of a single SQL statement. This operation returns aggregated statistics at the template level and does not return this field. To check error occurrences, use **ErrorCount**.
   * 
   * @example
   * 1146
   */
  errorCode?: string;
  /**
   * @remarks
   * The number of execution errors for the SQL template within the statistical period.
   * 
   * @example
   * 1
   */
  errorCount?: number;
  /**
   * @remarks
   * The time when the SQL template first appeared. The time is a UNIX timestamp in milliseconds.
   * 
   * > This operation does not return this field.
   * 
   * @example
   * 1659308149000
   */
  firstTime?: number;
  /**
   * @remarks
   * The total number of rows fetched by PolarDB-X compute nodes from data nodes.
   * 
   * > This is an exclusive metric for PolarDB-X compute nodes. For other engines, the value is null or 0.
   * 
   * @example
   * 10
   */
  frows?: number;
  /**
   * @remarks
   * The hash value of the SQL template, returned together with the SQL template.
   * 
   * > This value is generated by the kernel of PolarDB-X compute nodes. For instances that are not PolarDB-X compute nodes, the value is empty.
   * 
   * @example
   * 2e8147b5ca2dfc640dfd5e43d96a****
   */
  hash?: string;
  /**
   * @remarks
   * The endpoint of the instance to which the statistical data belongs.
   * 
   * > Whether this field is returned depends on the converged storage link of the instance. For some links, the value is null.
   * 
   * @example
   * rm-2ze1jdv45i7l6****.mysql.rds.aliyuncs.com
   */
  ip?: string;
  /**
   * @remarks
   * The total lock wait time, in milliseconds.
   * 
   * > Data is available only when **Version** is **1**.
   * 
   * @example
   * 1089.4177720290281
   */
  lockWaitTime?: number;
  /**
   * @remarks
   * The total number of logical reads.
   * 
   * > Data is available only when **Version** is **1**.
   * 
   * @example
   * 165848
   */
  logicalRead?: number;
  /**
   * @remarks
   * The maximum CPU time consumed in a single execution, in microseconds.
   * 
   * > This is an exclusive metric for SQL Server instances. For other engines, the value is null.
   * 
   * @example
   * 30
   */
  maxCpuTime?: number;
  /**
   * @remarks
   * The maximum number of logical reads in a single execution.
   * 
   * > Data is available only when **Version** is **1**.
   * 
   * @example
   * 3186
   */
  maxLogicalRead?: number;
  /**
   * @remarks
   * The maximum number of physical reads in a single execution.
   * 
   * > This is an exclusive metric for SQL Server instances. For other engines, the value is null.
   * 
   * @example
   * 3186
   */
  maxPhysicalRead?: number;
  /**
   * @remarks
   * The maximum number of scanned rows in a single execution.
   * 
   * > This operation does not return this field. To obtain the number of scanned rows, use **RowsExamined** and **AvgRowsExamined**.
   * 
   * @example
   * 318613
   */
  maxRowsExamined?: number;
  /**
   * @remarks
   * The maximum number of returned rows in a single execution.
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
   * > This is an exclusive metric for SQL Server instances. For other engines, the value is null.
   * 
   * @example
   * 12
   */
  maxWrites?: number;
  /**
   * @remarks
   * The minimum CPU time consumed in a single execution, in microseconds.
   * 
   * > This is an exclusive metric for SQL Server instances. For other engines, the value is null.
   * 
   * @example
   * 5
   */
  minCpuTime?: number;
  /**
   * @remarks
   * The minimum number of logical reads in a single execution.
   * 
   * > Data is available only when **Version** is **1**.
   * 
   * @example
   * 12
   */
  minLogicalRead?: number;
  /**
   * @remarks
   * The minimum number of physical reads in a single execution.
   * 
   * > This is an exclusive metric for SQL Server instances. For other engines, the value is null.
   * 
   * @example
   * 12
   */
  minPhysicalRead?: number;
  /**
   * @remarks
   * The minimum number of returned rows in a single execution.
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
   * > This is an exclusive metric for SQL Server instances. For other engines, the value is null.
   * 
   * @example
   * 8
   */
  minWrites?: number;
  /**
   * @remarks
   * The display alias configured for the source access address.
   * 
   * > Returned only when aggregated by access source (when **Type** is **FullRequestOrigin**). In other scenarios, the value is null.
   * 
   * @example
   * order-1
   */
  originAlias?: string;
  /**
   * @remarks
   * The source address of the client that initiated the SQL statement.
   * 
   * > When **Type** is **FullRequestOrigin**, this field is the aggregation dimension for the statistics.
   * 
   * @example
   * 172.26.XX.XXX
   */
  originHost?: string;
  /**
   * @remarks
   * The parameter content of the SQL sample.
   * 
   * > This operation returns aggregated statistics at the template level and does not return this field.
   * 
   * @example
   * [1, "das"]
   */
  params?: string;
  /**
   * @remarks
   * The total number of physical asynchronous reads.
   * 
   * > Data is available only when **Version** is **1**.
   * 
   * @example
   * 0
   */
  physicalAsyncRead?: number;
  /**
   * @remarks
   * The total number of physical reads.
   * 
   * > This is an exclusive metric for SQL Server instances. For other engines, the value is null.
   * 
   * @example
   * 165848
   */
  physicalRead?: number;
  /**
   * @remarks
   * The total number of physical synchronous reads.
   * 
   * > Data is available only when **Version** is **1**.
   * 
   * @example
   * 0
   */
  physicalSyncRead?: number;
  /**
   * @remarks
   * The connection port of the instance to which the statistical data belongs.
   * 
   * > Whether this field is returned depends on the converged storage link of the instance. For some links, the value is null.
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
   * The total number of updated and returned rows for PolarDB-X compute nodes.
   * 
   * > This is an exclusive metric for PolarDB-X compute nodes. For other engines, the value is null or 0.
   * 
   * @example
   * 10
   */
  rows?: number;
  /**
   * @remarks
   * The total number of scanned rows for the SQL template within the statistical period.
   * 
   * @example
   * 2048576
   */
  rowsExamined?: number;
  /**
   * @remarks
   * The total number of returned rows for the SQL template within the statistical period.
   * 
   * @example
   * 14
   */
  rowsReturned?: number;
  /**
   * @remarks
   * The total execution time of the SQL template within the statistical period, in milliseconds.
   * 
   * > For PolarDB-X compute nodes (where **Role** is **polarx_cn**) with a kernel version earlier than 5.4.13, this value is converted from microseconds to milliseconds.
   * 
   * @example
   * 0.409789
   */
  rt?: number;
  /**
   * @remarks
   * The number of times the execution duration exceeded 1 second.
   * 
   * > Whether this field is returned depends on the aggregated storage link of the instance. For some links, the value is null.
   * 
   * @example
   * 20
   */
  rtGreaterThanOneSecondCount?: number;
  /**
   * @remarks
   * The ratio of the total execution time of this statistic to the total execution time of all SQL statements for the instance. Valid values: 0 to 1.
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
   * The number of scanned rows for a single SQL statement.
   * 
   * > This operation returns aggregated statistics at the template dimension and does not return this field. Use the aggregated metrics **RowsExamined** and **AvgRowsExamined** instead.
   * 
   * @example
   * 29
   */
  scanRows?: number;
  /**
   * @remarks
   * The total number of requests sent from PolarDB-X compute nodes to data nodes.
   * 
   * > This is an exclusive metric for PolarDB-X compute nodes. For other engines, the value is null or 0.
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
   * The SQL template ID, which uniquely identifies a category of parameterized SQL statements. Multiple executions under the same template are aggregated into a single statistic. You can use this ID to associate the same category of SQL statements across multi-dimensional queries.
   * 
   * @example
   * 651b56fe9418d48edb8fdf0980ec****
   */
  sqlId?: string;
  /**
   * @remarks
   * The SQL text after unified processing of parameter values, used in sample data scenarios.
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
   * The total number of updated rows for the SQL template within the statistical period.
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
   * > The thread ID belongs to the details of a single SQL statement. This operation returns aggregated statistics at the template dimension and does not return this field.
   * 
   * @example
   * 57472578
   */
  threadId?: string;
  /**
   * @remarks
   * The execution time proportion.
   * 
   * > This operation returns the execution time proportion through **RtRate** and does not return this field.
   * 
   * @example
   * 0.1384
   */
  timeRate?: number;
  /**
   * @remarks
   * The data timestamp, which is a UNIX timestamp in milliseconds.
   * 
   * > The statistical results are aggregated at the SQL template dimension and do not return this field.
   * 
   * @example
   * 1718600000000
   */
  timestamp?: number;
  /**
   * @remarks
   * The total number of affected rows.
   * 
   * > This field is returned only for Lindorm instances. For other engines, the value is null.
   * 
   * @example
   * 3810
   */
  totalAffectRows?: number;
  /**
   * @remarks
   * The total execution time of the SQL statement.
   * 
   * > This operation does not return this field. Use **Rt** for the total execution time.
   * 
   * @example
   * 310
   */
  totalRt?: number;
  /**
   * @remarks
   * The total number of scanned rows.
   * 
   * > This operation does not return this field. Use **RowsExamined** for the total number of scanned rows.
   * 
   * @example
   * 2048576
   */
  totalScanRows?: number;
  /**
   * @remarks
   * The trend sequence of execution counts for the SQL template, divided by time slices within the query time window.
   * 
   * > This field is returned only when the request parameter **DoFillTrend** is set to **true** and the trend padding feature is enabled for the instance. The time slice interval is automatically determined by the query span. Time slices with no data may be padded with zeros.
   */
  trend?: DescribeSqlInsightStatisticResponseBodyDataDataListTrend[];
  /**
   * @remarks
   * The number of updated rows for a single SQL statement.
   * 
   * > This operation returns aggregated statistics at the template dimension and does not return this field. Use the aggregated metrics **SumRowsUpdated** and **AvgRowsUpdated** instead.
   * 
   * @example
   * 30
   */
  updateRows?: number;
  /**
   * @remarks
   * The database username that executed the SQL statement.
   * 
   * > When **Type** is **FullRequestUser**, this field is the aggregation dimension for this statistic.
   * 
   * @example
   * testUser
   */
  user?: string;
  /**
   * @remarks
   * The version of the SQL Explorer data collection link. If the instance collects logical read or lock wait data, the value is **1**. Otherwise, the value is **0**. Valid values:
   * 
   * - **0**: V0 basic collection link.
   * - **1**: V1 collection link, which collects four additional metrics based on V0: **LockWaitTime**, **LogicalRead**, **PhysicalSyncRead**, and **PhysicalAsyncRead**.
   * 
   * > When **0** is returned, the preceding extended metrics have no data.
   * 
   * @example
   * 1
   */
  version?: number;
  /**
   * @remarks
   * The VPC ID of the instance to which the statistical data belongs.
   * 
   * > Whether this field is returned depends on the aggregated storage link of the instance. For some links, the value is null.
   * 
   * @example
   * vpc-2zentqj1sk4qmolci****
   */
  vpcId?: string;
  /**
   * @remarks
   * The total number of logical writes.
   * 
   * > This is an exclusive metric for SQL Server instances. For other engines, the value is null.
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
   * > This operation does not return this field.
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
   * The current page number, which corresponds to the request parameter **PageNo**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries returned per page, which corresponds to the request parameter **PageSize**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of statistical entries that meet the query conditions, which can be used for pagination.
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
   * The SQL Explorer statistical query result.
   * 
   * > Returned only when **State** is **SUCCESS**.
   */
  data?: DescribeSqlInsightStatisticResponseBodyDataData;
  /**
   * @remarks
   * The error code for the failed asynchronous query.
   * 
   * > This field is returned only when the query fails.
   * 
   * @example
   * -10200020
   */
  errorCode?: number;
  /**
   * @remarks
   * Indicates whether the asynchronous query has finished. Valid values:
   * 
   * - **true**: **State** is **SUCCESS** or **FAIL**.
   * - **false**: **State** is **RUNNING**.
   */
  isFinish?: boolean;
  /**
   * @remarks
   * The error description for the failed asynchronous query.
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
   * The asynchronous query result ID, which is in the format of an async_ prefix followed by a hash value. It is calculated based on all business parameters of the current request.
   * 
   * > Repeated calls with the same parameters hit the same query result. Therefore, you must carry the exact same request parameters as the first call when polling. Any parameter change generates a different **ResultId** and triggers a new query.
   * 
   * @example
   * async__507044db6c4eadfa2dab9b084e80****
   */
  resultId?: string;
  /**
   * @remarks
   * The current state of the asynchronous query. Valid values:
   * 
   * - **RUNNING**: The query is running. Continue polling.
   * - **SUCCESS**: The query is successful. The **Data** field has a value.
   * - **FAIL**: The query failed.
   * 
   * > When the query fails, the operation directly returns an error code and an error message, instead of a normal response body with **State** set to **FAIL**.
   * 
   * @example
   * SUCCESS
   */
  state?: string;
  /**
   * @remarks
   * The time when the asynchronous query was submitted, which is a UNIX timestamp in milliseconds.
   * 
   * > When the query fails, this value is the time when the failure occurred.
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
   * The envelope for the asynchronous query result. The first call returns **ResultId** and **State**. You must poll the API with the exact same request parameters until **State** is **SUCCESS**, and then retrieve the statistical details from **List**.
   */
  data?: DescribeSqlInsightStatisticResponseBodyData;
  /**
   * @remarks
   * The response message. An error description is returned when the request fails.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, which can be used for troubleshooting.
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
   * - **false**: The request failed. Check the cause based on **Code** and **Message**.
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

