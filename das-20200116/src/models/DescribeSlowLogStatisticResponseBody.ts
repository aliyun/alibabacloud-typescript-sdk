// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogStatisticResponseBodyDataDataLogsHistogramItem extends $dara.Model {
  /**
   * @remarks
   * The number of slow logs.
   */
  count?: number[];
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * r-bp1s1m8hwzrm77kfvz-db-0
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: { 'type': 'array', 'itemType': 'number' },
      nodeId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.count)) {
      $dara.Model.validateArray(this.count);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogStatisticResponseBodyDataDataLogsHistogram extends $dara.Model {
  /**
   * @remarks
   * The average lock wait time. Unit: seconds.
   */
  avgLockTime?: number[];
  /**
   * @remarks
   * The average number of rows examined.
   */
  avgRowsExamined?: number[];
  /**
   * @remarks
   * The average number of rows returned.
   */
  avgRowsSent?: number[];
  /**
   * @remarks
   * The average execution duration.
   */
  avgRt?: number[];
  /**
   * @remarks
   * The number of slow logs.
   */
  count?: number[];
  /**
   * @remarks
   * The task status.
   */
  item?: DescribeSlowLogStatisticResponseBodyDataDataLogsHistogramItem[];
  /**
   * @remarks
   * The lock wait time. Unit: milliseconds.
   */
  lockTime?: number[];
  /**
   * @remarks
   * The maximum lock wait time. Unit: seconds.
   */
  maxLockTime?: number[];
  /**
   * @remarks
   * The maximum number of rows examined.
   */
  maxRowsExamined?: number[];
  /**
   * @remarks
   * The maximum number of rows returned.
   */
  maxRowsSent?: number[];
  /**
   * @remarks
   * The maximum response time. Unit: ms.
   */
  maxRt?: number[];
  /**
   * @remarks
   * The total number of rows examined.
   * > Databases that currently support this field: ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, and PolarDB for MySQL.
   */
  rowsExamined?: number[];
  /**
   * @remarks
   * The number of rows returned.
   */
  rowsSent?: number[];
  /**
   * @remarks
   * The execution duration. Unit: seconds.
   */
  rt?: number[];
  /**
   * @remarks
   * The total number of queried records.
   * 
   * @example
   * 7
   */
  total?: number;
  /**
   * @remarks
   * The execution timestamp.
   */
  ts?: number[];
  /**
   * @remarks
   * Deprecated.
   */
  tsEnd?: number[];
  static names(): { [key: string]: string } {
    return {
      avgLockTime: 'AvgLockTime',
      avgRowsExamined: 'AvgRowsExamined',
      avgRowsSent: 'AvgRowsSent',
      avgRt: 'AvgRt',
      count: 'Count',
      item: 'Item',
      lockTime: 'LockTime',
      maxLockTime: 'MaxLockTime',
      maxRowsExamined: 'MaxRowsExamined',
      maxRowsSent: 'MaxRowsSent',
      maxRt: 'MaxRt',
      rowsExamined: 'RowsExamined',
      rowsSent: 'RowsSent',
      rt: 'Rt',
      total: 'Total',
      ts: 'Ts',
      tsEnd: 'TsEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgLockTime: { 'type': 'array', 'itemType': 'number' },
      avgRowsExamined: { 'type': 'array', 'itemType': 'number' },
      avgRowsSent: { 'type': 'array', 'itemType': 'number' },
      avgRt: { 'type': 'array', 'itemType': 'number' },
      count: { 'type': 'array', 'itemType': 'number' },
      item: { 'type': 'array', 'itemType': DescribeSlowLogStatisticResponseBodyDataDataLogsHistogramItem },
      lockTime: { 'type': 'array', 'itemType': 'number' },
      maxLockTime: { 'type': 'array', 'itemType': 'number' },
      maxRowsExamined: { 'type': 'array', 'itemType': 'number' },
      maxRowsSent: { 'type': 'array', 'itemType': 'number' },
      maxRt: { 'type': 'array', 'itemType': 'number' },
      rowsExamined: { 'type': 'array', 'itemType': 'number' },
      rowsSent: { 'type': 'array', 'itemType': 'number' },
      rt: { 'type': 'array', 'itemType': 'number' },
      total: 'number',
      ts: { 'type': 'array', 'itemType': 'number' },
      tsEnd: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.avgLockTime)) {
      $dara.Model.validateArray(this.avgLockTime);
    }
    if(Array.isArray(this.avgRowsExamined)) {
      $dara.Model.validateArray(this.avgRowsExamined);
    }
    if(Array.isArray(this.avgRowsSent)) {
      $dara.Model.validateArray(this.avgRowsSent);
    }
    if(Array.isArray(this.avgRt)) {
      $dara.Model.validateArray(this.avgRt);
    }
    if(Array.isArray(this.count)) {
      $dara.Model.validateArray(this.count);
    }
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    if(Array.isArray(this.lockTime)) {
      $dara.Model.validateArray(this.lockTime);
    }
    if(Array.isArray(this.maxLockTime)) {
      $dara.Model.validateArray(this.maxLockTime);
    }
    if(Array.isArray(this.maxRowsExamined)) {
      $dara.Model.validateArray(this.maxRowsExamined);
    }
    if(Array.isArray(this.maxRowsSent)) {
      $dara.Model.validateArray(this.maxRowsSent);
    }
    if(Array.isArray(this.maxRt)) {
      $dara.Model.validateArray(this.maxRt);
    }
    if(Array.isArray(this.rowsExamined)) {
      $dara.Model.validateArray(this.rowsExamined);
    }
    if(Array.isArray(this.rowsSent)) {
      $dara.Model.validateArray(this.rowsSent);
    }
    if(Array.isArray(this.rt)) {
      $dara.Model.validateArray(this.rt);
    }
    if(Array.isArray(this.ts)) {
      $dara.Model.validateArray(this.ts);
    }
    if(Array.isArray(this.tsEnd)) {
      $dara.Model.validateArray(this.tsEnd);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogStatisticResponseBodyDataDataLogsSqlTag extends $dara.Model {
  /**
   * @remarks
   * The remarks.
   * 
   * The value must be 1 to 300 characters in length.
   * 
   * @example
   * dba archiving
   */
  comments?: string;
  /**
   * @remarks
   * SQL ID。
   * 
   * @example
   * a3931d8c3a9315dd5ed016d71cf*****
   */
  sqlId?: string;
  /**
   * @remarks
   * Multiple tags separated by commas.
   * 
   * @example
   * DAS_IN_PLAN
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      sqlId: 'SqlId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      sqlId: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogStatisticResponseBodyDataDataLogsTrend extends $dara.Model {
  /**
   * @remarks
   * The execution time, in UNIX timestamp format. Unit: milliseconds (ms).
   * 
   * @example
   * 1723775362
   */
  timestamp?: number;
  /**
   * @remarks
   * The value of the filter parameter.
   * 
   * @example
   * tf-testacc-oos-parameter
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

export class DescribeSlowLogStatisticResponseBodyDataDataLogs extends $dara.Model {
  /**
   * @remarks
   * The database account.
   * 
   * @example
   * edu_admin
   */
  accountName?: string;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * -
   */
  avgCPUTime?: number;
  /**
   * @remarks
   * The average CPU query time. Unit: seconds.
   * 
   * @example
   * 456
   */
  avgCPUTimeSeconds?: number;
  /**
   * @remarks
   * The average number of documents scanned.
   * >This field is supported only for ApsaraDB for MongoDB instances.
   * 
   * @example
   * 10000
   */
  avgDocExamined?: number;
  /**
   * @remarks
   * The average number of rows fetched.
   * 
   * @example
   * 10
   */
  avgFrows?: number;
  /**
   * @remarks
   * The average number of I/O writes.
   * >This field is supported only for ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  avgIOWrites?: number;
  /**
   * @remarks
   * The average number of rows scanned by the index.
   * >This field is supported only for ApsaraDB for MongoDB instances.
   * 
   * @example
   * 20000
   */
  avgKeysExamined?: number;
  /**
   * @remarks
   * The average number of rows affected by the last statement.
   * >This field is supported only for ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  avgLastRowsCountAffected?: number;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * -
   */
  avgLockTime?: number;
  /**
   * @remarks
   * The average lock wait time. Unit: seconds.
   * 
   * @example
   * 0.0
   */
  avgLockTimeSeconds?: number;
  /**
   * @remarks
   * The average number of logical reads.
   * >This field is supported only for ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  avgLogicalIOReads?: number;
  /**
   * @remarks
   * The average number of physical reads.
   * >This field is supported only for ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  avgPhysicalIOReads?: number;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * -
   */
  avgQueryTime?: number;
  /**
   * @remarks
   * The average query execution duration. Unit: seconds.
   * 
   * @example
   * 6.211
   */
  avgQueryTimeSeconds?: number;
  /**
   * @remarks
   * The average size of the request, in bytes. This parameter is valid only for Redis.
   */
  avgRequestSize?: number;
  /**
   * @remarks
   * The average response size, in bytes. This parameter is valid only for Redis.
   */
  avgResponseSize?: number;
  /**
   * @remarks
   * The average number of rows returned.
   * >This field is supported only for ApsaraDB for MongoDB instances.
   * 
   * @example
   * 1
   */
  avgReturnNum?: number;
  /**
   * @remarks
   * The average number of rows.
   * 
   * @example
   * 10
   */
  avgRows?: number;
  /**
   * @remarks
   * The average number of rows affected.
   * >This field is supported only for ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  avgRowsCountAffected?: number;
  /**
   * @remarks
   * The average number of rows examined.
   * 
   * @example
   * 53421.0
   */
  avgRowsExamined?: number;
  /**
   * @remarks
   * The average number of rows returned.
   * 
   * @example
   * 2.0
   */
  avgRowsSent?: number;
  /**
   * @remarks
   * The average execution duration.
   */
  avgRt?: number;
  /**
   * @remarks
   * The average number of requests.
   * 
   * @example
   * 10
   */
  avgScnt?: number;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * -
   */
  CPUTime?: number;
  /**
   * @remarks
   * The CPU query time. Unit: seconds.
   * 
   * > This field is supported only for ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 456
   */
  CPUTimeSeconds?: number;
  /**
   * @remarks
   * The client IP address in the query.
   * 
   * @example
   * 10.57.84.109
   */
  clientIp?: string;
  /**
   * @remarks
   * The command that was executed. This parameter is valid only for Redis.
   * 
   * @example
   * systemctl restart nginx.service
   */
  cmd?: string;
  /**
   * @remarks
   * The slow query statement.
   * >This field is supported only for ApsaraDB for Tair (Redis® OSS-Compatible) database instances.
   * 
   * @example
   * SELECT b?.id,b?.t?,b?.id,b?.t? FROM testtb? b? JOIN testtb? b? ON b?.id=b?.id WHERE b?.t? LIKE ? ORDER BY b?.t? DESC
   */
  command?: string;
  /**
   * @remarks
   * The number of elements in the key.
   * 
   * @example
   * 12
   */
  count?: number;
  /**
   * @remarks
   * The proportion of executions.
   * 
   * @example
   * 0.2034
   */
  countRate?: number;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * member_score
   */
  DBName?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * work-wechat-api
   */
  database?: string;
  /**
   * @remarks
   * The database ID. This parameter is valid only for Redis.
   * 
   * @example
   * 0
   */
  dbId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 0
   */
  dbInstanceName?: string;
  /**
   * @remarks
   * The number of documents scanned.
   * >This field is supported only for ApsaraDB for MongoDB instances.
   * 
   * @example
   * 2000000
   */
  docExamined?: number;
  /**
   * @remarks
   * The number of documents scanned during the MongoDB operation.
   * 
   * @example
   * 1
   */
  docsExamined?: number;
  /**
   * @remarks
   * The number of rows fetched by the compute node (CN) of the ApsaraDB for PolarDB-X 2.0 database instance.
   * 
   * > This field is supported only for ApsaraDB for PolarDB-X 2.0 instances.
   * 
   * @example
   * 10
   */
  frows?: number;
  /**
   * @remarks
   * The trend chart data.
   */
  histogram?: DescribeSlowLogStatisticResponseBodyDataDataLogsHistogram;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 172.23.142.178
   */
  hostAddress?: string;
  /**
   * @remarks
   * The host instance ID.
   * >This field is supported only for ApsaraDB for MongoDB instances.
   * 
   * @example
   * mongo-abc123456
   */
  hostInsId?: string;
  /**
   * @remarks
   * The number of I/O writes.
   * >This field is supported only for ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  IOWrites?: number;
  /**
   * @remarks
   * The shard name.
   * 
   * @example
   * rm-uf6zix1z2jh1y6fe5
   */
  insName?: string;
  /**
   * @remarks
   * The instance role.
   * >This field is supported only for ApsaraDB for MongoDB instances.
   * 
   * @example
   * __system
   */
  insRole?: string;
  /**
   * @remarks
   * The number of rows scanned by the MongoDB index.
   * 
   * @example
   * 20000
   */
  keysExamined?: number;
  /**
   * @remarks
   * The number of rows affected by the last statement.
   * >This field is supported only for ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  lastRowsCountAffected?: number;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * -
   */
  lockTime?: number;
  /**
   * @remarks
   * The lock wait time. Unit: seconds.
   * 
   * @example
   * 0.0
   */
  lockTimeSeconds?: number;
  /**
   * @remarks
   * The number of logical reads.
   * >This field is supported only for ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  logicalIOReads?: number;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * -
   */
  maxCPUTime?: number;
  /**
   * @remarks
   * The maximum CPU query time. Unit: seconds.
   * 
   * @example
   * 456
   */
  maxCPUTimeSeconds?: number;
  /**
   * @remarks
   * The maximum number of documents scanned.
   * >This field is supported only for ApsaraDB for MongoDB instances.
   * 
   * @example
   * 1000000
   */
  maxDocExamined?: number;
  /**
   * @remarks
   * The maximum number of rows fetched.
   * 
   * @example
   * 10
   */
  maxFrows?: number;
  /**
   * @remarks
   * The maximum number of I/O writes.
   * >This field is supported only for ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  maxIOWrites?: number;
  /**
   * @remarks
   * The maximum number of rows scanned by the index.
   * >This field is supported only for ApsaraDB for MongoDB instances.
   * 
   * @example
   * 2000000
   */
  maxKeysExamined?: number;
  /**
   * @remarks
   * The maximum number of rows affected by the last statement.
   * >This field is supported only for ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  maxLastRowsCountAffected?: number;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * -
   */
  maxLockTime?: number;
  /**
   * @remarks
   * The maximum lock wait time. Unit: seconds.
   * 
   * @example
   * 0.0
   */
  maxLockTimeSeconds?: number;
  /**
   * @remarks
   * The maximum number of logical reads.
   * >This field is supported only for ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  maxLogicalIOReads?: number;
  /**
   * @remarks
   * The maximum number of physical reads.
   * >This field is supported only for ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  maxPhysicalIOReads?: number;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * -
   */
  maxQueryTime?: number;
  /**
   * @remarks
   * The maximum query execution duration. Unit: seconds.
   * 
   * @example
   * 14.402
   */
  maxQueryTimeSeconds?: number;
  /**
   * @remarks
   * The maximum size of the request, in bytes. This parameter is valid only for Redis.
   */
  maxRequestSize?: number;
  /**
   * @remarks
   * The maximum response size, in bytes. This parameter is valid only for Redis.
   */
  maxResponseSize?: number;
  /**
   * @remarks
   * The maximum number of rows returned.
   * >This field is supported only for ApsaraDB for MongoDB instances.
   * 
   * @example
   * 1
   */
  maxReturnNum?: number;
  /**
   * @remarks
   * The maximum number of rows.
   * 
   * @example
   * 10
   */
  maxRows?: number;
  /**
   * @remarks
   * The maximum number of rows affected.
   * >This field is supported only for ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  maxRowsCountAffected?: number;
  /**
   * @remarks
   * The maximum number of rows examined.
   * 
   * @example
   * 318613
   */
  maxRowsExamined?: number;
  /**
   * @remarks
   * The maximum number of rows returned.
   * 
   * @example
   * 256
   */
  maxRowsSent?: number;
  /**
   * @remarks
   * The maximum execution duration, in seconds.
   */
  maxRt?: number;
  /**
   * @remarks
   * The maximum number of requests.
   * 
   * @example
   * 10
   */
  maxScnt?: number;
  /**
   * @remarks
   * The namespace.
   * >This field is supported only for ApsaraDB for MongoDB instances.
   * 
   * @example
   * database.collection
   */
  namespace?: string;
  /**
   * @remarks
   * The node type.
   * > Databases that support this field: ApsaraDB for MongoDB and Tair (Redis® OSS-Compatible).
   * 
   * @example
   * DLNode
   */
  nodeType?: string;
  /**
   * @remarks
   * The operation type.
   * >This field is supported only for ApsaraDB for MongoDB instances.
   * 
   * @example
   * Insert
   */
  opType?: string;
  /**
   * @remarks
   * The source alias.
   * 
   * @example
   * order-1
   */
  originAlias?: string;
  /**
   * @remarks
   * The number of physical reads.
   * >This field is supported only for ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  physicalIOReads?: number;
  /**
   * @remarks
   * The SQL template.
   * 
   * @example
   * SELECT b?.id,b?.t?,b?.id,b?.t? FROM testtb? b? JOIN testtb? b? ON b?.id=b?.id WHERE b?.t? LIKE ? ORDER BY b?.id DESC
   */
  psql?: string;
  /**
   * @remarks
   * The query ID.
   * >This field is supported only for ApsaraDB for MongoDB instances.
   * 
   * @example
   * sq-1pzcdMwRb
   */
  queryId?: string;
  /**
   * @remarks
   * The time when the query started. Format: yyyy-MM-dd hh:mm:ss (UTC).
   * 
   * @example
   * 2024-12-25T03:00:00Z
   */
  queryStartTime?: string;
  /**
   * @remarks
   * The query execution time threshold. Unit: milliseconds (ms).
   * 
   * @example
   * 272.444
   */
  queryTime?: number;
  /**
   * @remarks
   * The proportion of query duration.
   * 
   * @example
   * 0.1018
   */
  queryTimeRate?: number;
  /**
   * @remarks
   * The query execution duration. Unit: seconds.
   * 
   * @example
   * 25.472
   */
  queryTimeSeconds?: number;
  /**
   * @remarks
   * The return item numbers.
   * 
   * @example
   * 暂无
   */
  returnItemNumbers?: string;
  /**
   * @remarks
   * The number of rows returned.
   * >This field is supported only for ApsaraDB for MongoDB instances.
   * 
   * @example
   * 1
   */
  returnNum?: number;
  /**
   * @remarks
   * The total number of rows updated or returned by the compute nodes of the ApsaraDB for PolarDB-X 2.0 database instance.
   * 
   * > This field is supported only for ApsaraDB for PolarDB-X 2.0 instances.
   * 
   * @example
   * 105
   */
  rows?: number;
  /**
   * @remarks
   * The number of rows affected.
   * >This field is supported only for ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  rowsCountAffected?: number;
  /**
   * @remarks
   * The total number of rows examined.
   * > Databases that currently support this field: ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, and PolarDB for MySQL.
   * 
   * @example
   * 2444081
   */
  rowsExamined?: number;
  /**
   * @remarks
   * The number of rows returned.
   * 
   * @example
   * 772
   */
  rowsSent?: number;
  /**
   * @remarks
   * The rule ID. For more information, see [Query Governance](https://help.aliyun.com/document_detail/290038.html).
   * 
   * @example
   * 181**47
   */
  ruleId?: string;
  /**
   * @remarks
   * The details of the SQL statement.
   * 
   * @example
   * SELECT \\"Hello, World!\\" FROM DUAL
   */
  SQLText?: string;
  /**
   * @remarks
   * HTTP or HTTPS.
   * 
   * @example
   * HTTP
   */
  scheme?: string;
  /**
   * @remarks
   * The number of DN requests from the compute node (CN) of the ApsaraDB for PolarDB-X 2.0 database instance.
   * 
   * > This field is supported only for ApsaraDB for PolarDB-X 2.0 instances.
   * 
   * @example
   * 10
   */
  scnt?: number;
  /**
   * @remarks
   * SQL ID。
   * 
   * @example
   * 2dca88762ec6b3812504ab8a4b******
   */
  sqlId?: string;
  /**
   * @remarks
   * The tag.
   */
  sqlTag?: DescribeSlowLogStatisticResponseBodyDataDataLogsSqlTag;
  /**
   * @remarks
   * The type of the SQL statement.
   * 
   * @example
   * LOGIN
   */
  sqlType?: string;
  /**
   * @remarks
   * The child instance ID.
   * 
   * @example
   * r-8vba51c588ba3a94
   */
  subInstanceId?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * users\\nifconfig\\n
   */
  tableName?: string;
  /**
   * @remarks
   * The thread_id. This field is available only for PolarDB for MySQL.
   * 
   * @example
   * 1
   */
  threadId?: string;
  /**
   * @remarks
   * The execution time, in UNIX timestamp format. Unit: milliseconds (ms).
   * 
   * @example
   * 1708568930
   */
  timestamp?: number;
  /**
   * @remarks
   * The total number of records. This parameter is valid only for the Redis engine.
   * 
   * @example
   * 0
   */
  totalCount?: number;
  /**
   * @remarks
   * The slow log trends.
   */
  trend?: DescribeSlowLogStatisticResponseBodyDataDataLogsTrend[];
  /**
   * @remarks
   * The user.
   * 
   * @example
   * user-1
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      avgCPUTime: 'AvgCPUTime',
      avgCPUTimeSeconds: 'AvgCPUTimeSeconds',
      avgDocExamined: 'AvgDocExamined',
      avgFrows: 'AvgFrows',
      avgIOWrites: 'AvgIOWrites',
      avgKeysExamined: 'AvgKeysExamined',
      avgLastRowsCountAffected: 'AvgLastRowsCountAffected',
      avgLockTime: 'AvgLockTime',
      avgLockTimeSeconds: 'AvgLockTimeSeconds',
      avgLogicalIOReads: 'AvgLogicalIOReads',
      avgPhysicalIOReads: 'AvgPhysicalIOReads',
      avgQueryTime: 'AvgQueryTime',
      avgQueryTimeSeconds: 'AvgQueryTimeSeconds',
      avgRequestSize: 'AvgRequestSize',
      avgResponseSize: 'AvgResponseSize',
      avgReturnNum: 'AvgReturnNum',
      avgRows: 'AvgRows',
      avgRowsCountAffected: 'AvgRowsCountAffected',
      avgRowsExamined: 'AvgRowsExamined',
      avgRowsSent: 'AvgRowsSent',
      avgRt: 'AvgRt',
      avgScnt: 'AvgScnt',
      CPUTime: 'CPUTime',
      CPUTimeSeconds: 'CPUTimeSeconds',
      clientIp: 'ClientIp',
      cmd: 'Cmd',
      command: 'Command',
      count: 'Count',
      countRate: 'CountRate',
      DBName: 'DBName',
      database: 'Database',
      dbId: 'DbId',
      dbInstanceName: 'DbInstanceName',
      docExamined: 'DocExamined',
      docsExamined: 'DocsExamined',
      frows: 'Frows',
      histogram: 'Histogram',
      hostAddress: 'HostAddress',
      hostInsId: 'HostInsId',
      IOWrites: 'IOWrites',
      insName: 'InsName',
      insRole: 'InsRole',
      keysExamined: 'KeysExamined',
      lastRowsCountAffected: 'LastRowsCountAffected',
      lockTime: 'LockTime',
      lockTimeSeconds: 'LockTimeSeconds',
      logicalIOReads: 'LogicalIOReads',
      maxCPUTime: 'MaxCPUTime',
      maxCPUTimeSeconds: 'MaxCPUTimeSeconds',
      maxDocExamined: 'MaxDocExamined',
      maxFrows: 'MaxFrows',
      maxIOWrites: 'MaxIOWrites',
      maxKeysExamined: 'MaxKeysExamined',
      maxLastRowsCountAffected: 'MaxLastRowsCountAffected',
      maxLockTime: 'MaxLockTime',
      maxLockTimeSeconds: 'MaxLockTimeSeconds',
      maxLogicalIOReads: 'MaxLogicalIOReads',
      maxPhysicalIOReads: 'MaxPhysicalIOReads',
      maxQueryTime: 'MaxQueryTime',
      maxQueryTimeSeconds: 'MaxQueryTimeSeconds',
      maxRequestSize: 'MaxRequestSize',
      maxResponseSize: 'MaxResponseSize',
      maxReturnNum: 'MaxReturnNum',
      maxRows: 'MaxRows',
      maxRowsCountAffected: 'MaxRowsCountAffected',
      maxRowsExamined: 'MaxRowsExamined',
      maxRowsSent: 'MaxRowsSent',
      maxRt: 'MaxRt',
      maxScnt: 'MaxScnt',
      namespace: 'Namespace',
      nodeType: 'NodeType',
      opType: 'OpType',
      originAlias: 'OriginAlias',
      physicalIOReads: 'PhysicalIOReads',
      psql: 'Psql',
      queryId: 'QueryId',
      queryStartTime: 'QueryStartTime',
      queryTime: 'QueryTime',
      queryTimeRate: 'QueryTimeRate',
      queryTimeSeconds: 'QueryTimeSeconds',
      returnItemNumbers: 'ReturnItemNumbers',
      returnNum: 'ReturnNum',
      rows: 'Rows',
      rowsCountAffected: 'RowsCountAffected',
      rowsExamined: 'RowsExamined',
      rowsSent: 'RowsSent',
      ruleId: 'RuleId',
      SQLText: 'SQLText',
      scheme: 'Scheme',
      scnt: 'Scnt',
      sqlId: 'SqlId',
      sqlTag: 'SqlTag',
      sqlType: 'SqlType',
      subInstanceId: 'SubInstanceId',
      tableName: 'TableName',
      threadId: 'ThreadId',
      timestamp: 'Timestamp',
      totalCount: 'TotalCount',
      trend: 'Trend',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      avgCPUTime: 'number',
      avgCPUTimeSeconds: 'number',
      avgDocExamined: 'number',
      avgFrows: 'number',
      avgIOWrites: 'number',
      avgKeysExamined: 'number',
      avgLastRowsCountAffected: 'number',
      avgLockTime: 'number',
      avgLockTimeSeconds: 'number',
      avgLogicalIOReads: 'number',
      avgPhysicalIOReads: 'number',
      avgQueryTime: 'number',
      avgQueryTimeSeconds: 'number',
      avgRequestSize: 'number',
      avgResponseSize: 'number',
      avgReturnNum: 'number',
      avgRows: 'number',
      avgRowsCountAffected: 'number',
      avgRowsExamined: 'number',
      avgRowsSent: 'number',
      avgRt: 'number',
      avgScnt: 'number',
      CPUTime: 'number',
      CPUTimeSeconds: 'number',
      clientIp: 'string',
      cmd: 'string',
      command: 'string',
      count: 'number',
      countRate: 'number',
      DBName: 'string',
      database: 'string',
      dbId: 'string',
      dbInstanceName: 'string',
      docExamined: 'number',
      docsExamined: 'number',
      frows: 'number',
      histogram: DescribeSlowLogStatisticResponseBodyDataDataLogsHistogram,
      hostAddress: 'string',
      hostInsId: 'string',
      IOWrites: 'number',
      insName: 'string',
      insRole: 'string',
      keysExamined: 'number',
      lastRowsCountAffected: 'number',
      lockTime: 'number',
      lockTimeSeconds: 'number',
      logicalIOReads: 'number',
      maxCPUTime: 'number',
      maxCPUTimeSeconds: 'number',
      maxDocExamined: 'number',
      maxFrows: 'number',
      maxIOWrites: 'number',
      maxKeysExamined: 'number',
      maxLastRowsCountAffected: 'number',
      maxLockTime: 'number',
      maxLockTimeSeconds: 'number',
      maxLogicalIOReads: 'number',
      maxPhysicalIOReads: 'number',
      maxQueryTime: 'number',
      maxQueryTimeSeconds: 'number',
      maxRequestSize: 'number',
      maxResponseSize: 'number',
      maxReturnNum: 'number',
      maxRows: 'number',
      maxRowsCountAffected: 'number',
      maxRowsExamined: 'number',
      maxRowsSent: 'number',
      maxRt: 'number',
      maxScnt: 'number',
      namespace: 'string',
      nodeType: 'string',
      opType: 'string',
      originAlias: 'string',
      physicalIOReads: 'number',
      psql: 'string',
      queryId: 'string',
      queryStartTime: 'string',
      queryTime: 'number',
      queryTimeRate: 'number',
      queryTimeSeconds: 'number',
      returnItemNumbers: 'string',
      returnNum: 'number',
      rows: 'number',
      rowsCountAffected: 'number',
      rowsExamined: 'number',
      rowsSent: 'number',
      ruleId: 'string',
      SQLText: 'string',
      scheme: 'string',
      scnt: 'number',
      sqlId: 'string',
      sqlTag: DescribeSlowLogStatisticResponseBodyDataDataLogsSqlTag,
      sqlType: 'string',
      subInstanceId: 'string',
      tableName: 'string',
      threadId: 'string',
      timestamp: 'number',
      totalCount: 'number',
      trend: { 'type': 'array', 'itemType': DescribeSlowLogStatisticResponseBodyDataDataLogsTrend },
      user: 'string',
    };
  }

  validate() {
    if(this.histogram && typeof (this.histogram as any).validate === 'function') {
      (this.histogram as any).validate();
    }
    if(this.sqlTag && typeof (this.sqlTag as any).validate === 'function') {
      (this.sqlTag as any).validate();
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

export class DescribeSlowLogStatisticResponseBodyDataData extends $dara.Model {
  /**
   * @remarks
   * The numeric ID of the instance.
   * 
   * @example
   * rm-k2ja51w7cnusg5a1x
   */
  dbInstanceId?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 0
   */
  dbInstanceName?: string;
  /**
   * @remarks
   * The end time of the query task, in UNIX timestamp format. Unit: milliseconds.
   * > The end time of the query task must be later than the start time.
   * 
   * @example
   * 2024-08-08T02:15:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of items in the log list on the current page.
   * 
   * @example
   * 10
   */
  itemsNumbers?: number;
  /**
   * @remarks
   * The name of the operation object.
   */
  logs?: DescribeSlowLogStatisticResponseBodyDataDataLogs[];
  /**
   * @remarks
   * The maximum number of records per page for the paged query. Valid values: 5 to 100.
   * 
   * @example
   * 10
   */
  maxRecordsPerPage?: number;
  /**
   * @remarks
   * The node ID.
   * 
   * For MongoDB instances, specify a node for storage analysis by using this parameter. Call the [DescribeRoleZoneInfo](https://help.aliyun.com/document_detail/123802.html) operation to query the details of each node in a MongoDB instance.
   * 
   * - If you specify the **InsName** (node ID) of the target node, such as `d-bp1872fa24d5****`, this operation analyzes the corresponding Hidden node.
   * - If you specify the `InsName#RoleId` of the target node, such as `d-bp1872fa24d5****#299****5`, this operation analyzes the specified node.
   * 
   * >Notice: For MongoDB replica set instances, if you do not specify this parameter, this operation analyzes the only Hidden node by default. For MongoDB sharded cluster instances, specify this parameter to designate the target node.</notice>
   * 
   * @example
   * pi-wz99g5rn7w1x8h0sf
   */
  nodeId?: string;
  /**
   * @remarks
   * The page number for the paged query. The value starts from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumbers?: number;
  /**
   * @remarks
   * The start time, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 2024-10-08T02:01:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 13
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      dbInstanceName: 'DbInstanceName',
      endTime: 'EndTime',
      itemsNumbers: 'ItemsNumbers',
      logs: 'Logs',
      maxRecordsPerPage: 'MaxRecordsPerPage',
      nodeId: 'NodeId',
      pageNumbers: 'PageNumbers',
      startTime: 'StartTime',
      totalRecords: 'TotalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'number',
      dbInstanceName: 'string',
      endTime: 'string',
      itemsNumbers: 'number',
      logs: { 'type': 'array', 'itemType': DescribeSlowLogStatisticResponseBodyDataDataLogs },
      maxRecordsPerPage: 'number',
      nodeId: 'string',
      pageNumbers: 'number',
      startTime: 'string',
      totalRecords: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogStatisticResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data.
   */
  data?: DescribeSlowLogStatisticResponseBodyDataData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 10910
   */
  errorCode?: number;
  /**
   * @remarks
   * Indicates whether the task is finished.
   * 
   * @example
   * true
   */
  isFinish?: boolean;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The key of the request parameter.
   * 
   * @example
   * 123456789
   */
  requestKey?: string;
  /**
   * @remarks
   * The result ID.
   * 
   * @example
   * async__665ee69612f1627c7fd9f3c85075****
   */
  resultId?: string;
  /**
   * @remarks
   * The current status. Valid values:
   * 
   * - **RUNNING**: running.
   * - **SUCCESS**: succeeded.
   * - **FAIL**: failed.
   * 
   * @example
   * SUCCESS
   */
  state?: string;
  /**
   * @remarks
   * The request time.
   * 
   * @example
   * 1735104224250
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
      data: DescribeSlowLogStatisticResponseBodyDataData,
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

export class DescribeSlowLogStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * AsyncResult<DBLogRecords<SlowLogStat>>
   */
  data?: DescribeSlowLogStatisticResponseBodyData;
  /**
   * @remarks
   * The message returned for the request.
   * 
   * > If the request is successful, **Successful** is returned. If the request fails, exception information (such as an error code) is returned.
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
   * 52D540CF-C517-1F57-BB42-9035F96******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request fails.
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
      data: DescribeSlowLogStatisticResponseBodyData,
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

