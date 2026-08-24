// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogStatisticResponseBodyDataDataLogsHistogramItem extends $dara.Model {
  /**
   * @remarks
   * The number of slow query logs.
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
   * The average lock wait time in seconds.
   */
  avgLockTime?: number[];
  /**
   * @remarks
   * The average number of scanned rows.
   */
  avgRowsExamined?: number[];
  /**
   * @remarks
   * The average number of returned rows.
   */
  avgRowsSent?: number[];
  /**
   * @remarks
   * The average execution duration.
   */
  avgRt?: number[];
  /**
   * @remarks
   * The number of slow query logs.
   */
  count?: number[];
  /**
   * @remarks
   * The task status.
   */
  item?: DescribeSlowLogStatisticResponseBodyDataDataLogsHistogramItem[];
  /**
   * @remarks
   * The lock wait time in milliseconds.
   */
  lockTime?: number[];
  /**
   * @remarks
   * The maximum lock wait time in seconds.
   */
  maxLockTime?: number[];
  /**
   * @remarks
   * The maximum number of scanned rows.
   */
  maxRowsExamined?: number[];
  /**
   * @remarks
   * The maximum number of returned rows.
   */
  maxRowsSent?: number[];
  /**
   * @remarks
   * The maximum response time (RT) in milliseconds.
   */
  maxRt?: number[];
  /**
   * @remarks
   * The total number of scanned rows.
   * 
   * > This parameter is supported by ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, and PolarDB for MySQL.
   */
  rowsExamined?: number[];
  /**
   * @remarks
   * The number of returned rows.
   */
  rowsSent?: number[];
  /**
   * @remarks
   * The execution duration in seconds.
   */
  rt?: number[];
  /**
   * @remarks
   * The total number of entries returned for the query.
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
   * This parameter is deprecated.
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
   * The value can be 1 to 300 characters in length.
   * 
   * @example
   * dba 归档
   */
  comments?: string;
  /**
   * @remarks
   * The SQL ID.
   * 
   * @example
   * a3931d8c3a9315dd5ed016d71cf*****
   */
  sqlId?: string;
  /**
   * @remarks
   * The tags. Multiple tags are separated by commas (,).
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
   * The execution time. This value is a UNIX timestamp. Unit: milliseconds (ms).
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
   * This parameter is deprecated.
   * 
   * @example
   * -
   */
  avgCPUTime?: number;
  /**
   * @remarks
   * The average CPU time for the query in seconds.
   * 
   * @example
   * 456
   */
  avgCPUTimeSeconds?: number;
  /**
   * @remarks
   * The average number of scanned documents.
   * 
   * > This parameter is supported only by ApsaraDB for MongoDB instances.
   * 
   * @example
   * 10000
   */
  avgDocExamined?: number;
  /**
   * @remarks
   * The average number of pulled rows.
   * 
   * @example
   * 10
   */
  avgFrows?: number;
  /**
   * @remarks
   * The average number of I/O writes.
   * 
   * > This parameter is supported only by ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  avgIOWrites?: number;
  /**
   * @remarks
   * The average number of index scans.
   * 
   * > This parameter is supported only by ApsaraDB for MongoDB instances.
   * 
   * @example
   * 20000
   */
  avgKeysExamined?: number;
  /**
   * @remarks
   * The average number of rows affected by the last statement.
   * 
   * > This parameter is supported only by ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  avgLastRowsCountAffected?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * -
   */
  avgLockTime?: number;
  /**
   * @remarks
   * The average lock wait time in seconds.
   * 
   * @example
   * 0.0
   */
  avgLockTimeSeconds?: number;
  /**
   * @remarks
   * The average number of logical reads.
   * 
   * > This parameter is supported only by ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  avgLogicalIOReads?: number;
  /**
   * @remarks
   * The average number of physical reads.
   * 
   * > This parameter is supported only by ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  avgPhysicalIOReads?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * -
   */
  avgQueryTime?: number;
  /**
   * @remarks
   * The average query duration in seconds.
   * 
   * @example
   * 6.211
   */
  avgQueryTimeSeconds?: number;
  /**
   * @remarks
   * The average size of the request in bytes. This parameter is valid only for Redis.
   */
  avgRequestSize?: number;
  /**
   * @remarks
   * The average size of the response in bytes. This parameter is valid only for Redis.
   */
  avgResponseSize?: number;
  /**
   * @remarks
   * The average number of returned rows.
   * 
   * > This parameter is supported only by MongoDB instances.
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
   * The average number of affected rows.
   * 
   * > This parameter is supported only by ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  avgRowsCountAffected?: number;
  /**
   * @remarks
   * The average number of scanned rows.
   * 
   * @example
   * 53421.0
   */
  avgRowsExamined?: number;
  /**
   * @remarks
   * The average number of returned rows.
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
   * This parameter is deprecated.
   * 
   * @example
   * -
   */
  CPUTime?: number;
  /**
   * @remarks
   * The CPU time for the query in seconds.
   * 
   * > This parameter is supported only by ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 456
   */
  CPUTimeSeconds?: number;
  /**
   * @remarks
   * The client\\"s IP address.
   * 
   * @example
   * 10.57.84.109
   */
  clientIp?: string;
  /**
   * @remarks
   * The executed command. This parameter is valid only for Redis.
   * 
   * @example
   * systemctl restart nginx.service
   */
  cmd?: string;
  /**
   * @remarks
   * The slow query statement.
   * 
   * > This parameter is supported only by Tair (Redis OSS-compatible) instances.
   * 
   * @example
   * SELECT b?.id,b?.t?,b?.id,b?.t? FROM testtb? b? JOIN testtb? b? ON b?.id=b?.id WHERE b?.t? LIKE ? ORDER BY b?.t? DESC
   */
  command?: string;
  /**
   * @remarks
   * The number of elements that correspond to the key.
   * 
   * @example
   * 12
   */
  count?: number;
  /**
   * @remarks
   * The execution ratio.
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
   * The number of scanned documents.
   * 
   * > This parameter is supported only by ApsaraDB for MongoDB instances.
   * 
   * @example
   * 2000000
   */
  docExamined?: number;
  /**
   * @remarks
   * The number of documents scanned during the operation on the ApsaraDB for MongoDB instance.
   * 
   * @example
   * 1
   */
  docsExamined?: number;
  /**
   * @remarks
   * The number of rows pulled by the compute nodes (CNs) of the PolarDB-X 2.0 instance.
   * 
   * > This parameter is supported only by PolarDB-X 2.0 instances.
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
   * The client IP address.
   * 
   * @example
   * 172.23.142.178
   */
  hostAddress?: string;
  /**
   * @remarks
   * The ID of the host instance.
   * 
   * > This parameter is supported only by ApsaraDB for MongoDB instances.
   * 
   * @example
   * mongo-abc123456
   */
  hostInsId?: string;
  /**
   * @remarks
   * The number of I/O writes.
   * 
   * > This parameter is supported only by ApsaraDB RDS for SQL Server instances.
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
   * 
   * > This parameter is supported only by MongoDB instances.
   * 
   * @example
   * __system
   */
  insRole?: string;
  /**
   * @remarks
   * The number of index scans on the ApsaraDB for MongoDB instance.
   * 
   * @example
   * 20000
   */
  keysExamined?: number;
  /**
   * @remarks
   * The number of rows affected by the last statement.
   * 
   * > This parameter is supported only by ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  lastRowsCountAffected?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * -
   */
  lockTime?: number;
  /**
   * @remarks
   * The lock wait time in seconds.
   * 
   * @example
   * 0.0
   */
  lockTimeSeconds?: number;
  /**
   * @remarks
   * The number of logical reads.
   * 
   * > This parameter is supported only by ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  logicalIOReads?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * -
   */
  maxCPUTime?: number;
  /**
   * @remarks
   * The longest CPU time for the query in seconds.
   * 
   * @example
   * 456
   */
  maxCPUTimeSeconds?: number;
  /**
   * @remarks
   * The maximum number of scanned documents.
   * 
   * > This parameter is supported only by ApsaraDB for MongoDB instances.
   * 
   * @example
   * 1000000
   */
  maxDocExamined?: number;
  /**
   * @remarks
   * The maximum number of pulled rows.
   * 
   * @example
   * 10
   */
  maxFrows?: number;
  /**
   * @remarks
   * The maximum number of I/O writes.
   * 
   * > This parameter is supported only by ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  maxIOWrites?: number;
  /**
   * @remarks
   * The maximum number of index scans.
   * 
   * > This parameter is supported only by ApsaraDB for MongoDB instances.
   * 
   * @example
   * 2000000
   */
  maxKeysExamined?: number;
  /**
   * @remarks
   * The maximum number of rows affected by the last statement.
   * 
   * > This parameter is supported only by ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  maxLastRowsCountAffected?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * -
   */
  maxLockTime?: number;
  /**
   * @remarks
   * The maximum lock wait time in seconds.
   * 
   * @example
   * 0.0
   */
  maxLockTimeSeconds?: number;
  /**
   * @remarks
   * The maximum number of logical reads.
   * 
   * > This parameter is supported only by ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  maxLogicalIOReads?: number;
  /**
   * @remarks
   * The maximum number of physical reads.
   * 
   * > This parameter is supported only by ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  maxPhysicalIOReads?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * -
   */
  maxQueryTime?: number;
  /**
   * @remarks
   * The maximum query duration in seconds.
   * 
   * @example
   * 14.402
   */
  maxQueryTimeSeconds?: number;
  /**
   * @remarks
   * The maximum size of the request in bytes. This parameter is valid only for Redis.
   */
  maxRequestSize?: number;
  /**
   * @remarks
   * The maximum size of the response in bytes. This parameter is valid only for Redis.
   */
  maxResponseSize?: number;
  /**
   * @remarks
   * The maximum number of returned rows.
   * 
   * > This parameter is supported only by ApsaraDB for MongoDB instances.
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
   * The maximum number of affected rows.
   * 
   * > This parameter is supported only by ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  maxRowsCountAffected?: number;
  /**
   * @remarks
   * The maximum number of scanned rows.
   * 
   * @example
   * 318613
   */
  maxRowsExamined?: number;
  /**
   * @remarks
   * The maximum number of returned rows.
   * 
   * @example
   * 256
   */
  maxRowsSent?: number;
  /**
   * @remarks
   * The maximum execution duration in seconds.
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
   * 
   * > This parameter is supported only by ApsaraDB for MongoDB instances.
   * 
   * @example
   * database.collection
   */
  namespace?: string;
  /**
   * @remarks
   * The node type.
   * 
   * > This parameter is supported by MongoDB and Tair (Redis-compatible).
   * 
   * @example
   * DLNode
   */
  nodeType?: string;
  /**
   * @remarks
   * The operation type.
   * 
   * > This parameter is supported only by MongoDB instances.
   * 
   * @example
   * Insert
   */
  opType?: string;
  /**
   * @remarks
   * The alias of the source.
   * 
   * @example
   * order-1
   */
  originAlias?: string;
  /**
   * @remarks
   * The number of physical reads.
   * 
   * > This parameter is supported only by ApsaraDB RDS for SQL Server instances.
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
   * 
   * > This parameter is supported only by ApsaraDB for MongoDB instances.
   * 
   * @example
   * sq-1pzcdMwRb
   */
  queryId?: string;
  /**
   * @remarks
   * The time when the query started. The time is in the yyyy-MM-dd hh:mm:ss format and is in UTC.
   * 
   * @example
   * 2024-12-25T03:00:00Z
   */
  queryStartTime?: string;
  /**
   * @remarks
   * The threshold for the query execution time. Unit: milliseconds (ms).
   * 
   * @example
   * 272.444
   */
  queryTime?: number;
  /**
   * @remarks
   * The ratio of the query duration.
   * 
   * @example
   * 0.1018
   */
  queryTimeRate?: number;
  /**
   * @remarks
   * The query duration in seconds.
   * 
   * @example
   * 25.472
   */
  queryTimeSeconds?: number;
  /**
   * @remarks
   * The number of items returned.
   * 
   * @example
   * 暂无
   */
  returnItemNumbers?: string;
  /**
   * @remarks
   * The number of returned rows.
   * 
   * > This parameter is supported only by ApsaraDB for MongoDB instances.
   * 
   * @example
   * 1
   */
  returnNum?: number;
  /**
   * @remarks
   * The total number of rows updated or returned by the compute nodes of the PolarDB-X 2.0 instance.
   * 
   * > This parameter is supported only by PolarDB-X 2.0 instances.
   * 
   * @example
   * 105
   */
  rows?: number;
  /**
   * @remarks
   * The number of affected rows.
   * 
   * > This parameter is supported only by ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 1000
   */
  rowsCountAffected?: number;
  /**
   * @remarks
   * The total number of scanned rows.
   * 
   * > This parameter is supported by ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, and PolarDB for MySQL.
   * 
   * @example
   * 2444081
   */
  rowsExamined?: number;
  /**
   * @remarks
   * The number of returned rows.
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
   * The number of requests sent from the compute nodes (CNs) to data nodes (DNs) in the PolarDB-X 2.0 instance.
   * 
   * > This parameter is supported only by PolarDB-X 2.0 instances.
   * 
   * @example
   * 10
   */
  scnt?: number;
  /**
   * @remarks
   * The SQL ID.
   * 
   * @example
   * 2dca88762ec6b3812504ab8a4b******
   */
  sqlId?: string;
  /**
   * @remarks
   * The tags.
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
   * The ID of the sub-instance.
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
   * The thread ID. This parameter is returned only for PolarDB for MySQL instances.
   * 
   * @example
   * 1
   */
  threadId?: string;
  /**
   * @remarks
   * The execution time. This value is a UNIX timestamp. Unit: milliseconds (ms).
   * 
   * @example
   * 1708568930
   */
  timestamp?: number;
  /**
   * @remarks
   * The total number of records. This parameter is valid only for Redis engines.
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
   * The end time of the query. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2024-08-08T02:15:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of items in the slow query log list on the current page.
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
   * The maximum number of entries to return on each page. Valid values: 5 to 100.
   * 
   * @example
   * 10
   */
  maxRecordsPerPage?: number;
  /**
   * @remarks
   * The node ID.
   * 
   * For MongoDB instances, use this parameter to specify a node for storage analysis. Call the [DescribeRoleZoneInfo](https://help.aliyun.com/document_detail/123802.html) operation to query the details of the nodes in a MongoDB instance.
   * 
   * - If you specify the **InsName** (node ID) of the destination node, such as `d-bp1872fa24d5****`, the system analyzes the corresponding hidden node.
   * 
   * - If you specify `InsName#RoleId` of the destination node, such as `d-bp1872fa24d5****#299****5`, the system analyzes the specified node.
   * 
   * >Notice: 
   * 
   * For a MongoDB replica set instance, if you do not specify this parameter, the system analyzes the only hidden node by default. For a MongoDB sharded cluster instance, specify this parameter to select a destination node.
   * 
   * @example
   * pi-wz99g5rn7w1x8h0sf
   */
  nodeId?: string;
  /**
   * @remarks
   * The page number of the paged query. Pages start from 1. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumbers?: number;
  /**
   * @remarks
   * The start time. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 2024-10-08T02:01:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of entries.
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
   * Indicates whether the asynchronous request is complete.
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
   * The status of the asynchronous request. Valid values:
   * 
   * -**RUNNING**: The request is in progress.
   * 
   * -**SUCCESS**: The request is successful.
   * 
   * -**FAIL**: The request failed.
   * 
   * @example
   * SUCCESS
   */
  state?: string;
  /**
   * @remarks
   * The timestamp of the request.
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
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * AsyncResult\\<DBLogRecords\\<SlowLogStat>>
   */
  data?: DescribeSlowLogStatisticResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * > If the request is successful, **Successful** is returned. If the request fails, an error message, such as an error code, is returned.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**
   * 
   * - **false**
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

