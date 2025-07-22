// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogStatisticResponseBodyDataDataLogsHistogramItem extends $dara.Model {
  count?: number[];
  /**
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
  avgLockTime?: number[];
  avgRowsExamined?: number[];
  avgRowsSent?: number[];
  avgRt?: number[];
  count?: number[];
  item?: DescribeSlowLogStatisticResponseBodyDataDataLogsHistogramItem[];
  lockTime?: number[];
  maxLockTime?: number[];
  maxRowsExamined?: number[];
  maxRowsSent?: number[];
  maxRt?: number[];
  rowsExamined?: number[];
  rowsSent?: number[];
  rt?: number[];
  /**
   * @example
   * 7
   */
  total?: number;
  ts?: number[];
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
   * @example
   * 1723775362
   */
  timestamp?: number;
  /**
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
   * @example
   * edu_admin
   */
  accountName?: string;
  /**
   * @example
   * -
   */
  avgCPUTime?: number;
  avgCPUTimeSeconds?: number;
  /**
   * @example
   * 10000
   */
  avgDocExamined?: number;
  avgFrows?: number;
  /**
   * @example
   * 1000
   */
  avgIOWrites?: number;
  /**
   * @example
   * 20000
   */
  avgKeysExamined?: number;
  /**
   * @example
   * 1000
   */
  avgLastRowsCountAffected?: number;
  /**
   * @example
   * -
   */
  avgLockTime?: number;
  /**
   * @example
   * 0.0
   */
  avgLockTimeSeconds?: number;
  /**
   * @example
   * 1000
   */
  avgLogicalIOReads?: number;
  /**
   * @example
   * 1000
   */
  avgPhysicalIOReads?: number;
  /**
   * @example
   * -
   */
  avgQueryTime?: number;
  /**
   * @example
   * 6.211
   */
  avgQueryTimeSeconds?: number;
  /**
   * @example
   * 1
   */
  avgReturnNum?: number;
  avgRows?: number;
  /**
   * @example
   * 1000
   */
  avgRowsCountAffected?: number;
  /**
   * @example
   * 53421.0
   */
  avgRowsExamined?: number;
  /**
   * @example
   * 2.0
   */
  avgRowsSent?: number;
  avgScnt?: number;
  /**
   * @example
   * -
   */
  CPUTime?: number;
  CPUTimeSeconds?: number;
  /**
   * @example
   * SELECT b?.id,b?.t?,b?.id,b?.t? FROM testtb? b? JOIN testtb? b? ON b?.id=b?.id WHERE b?.t? LIKE ? ORDER BY b?.t? DESC
   */
  command?: string;
  /**
   * @example
   * 12
   */
  count?: number;
  /**
   * @example
   * 0.2034
   */
  countRate?: number;
  /**
   * @example
   * member_score
   */
  DBName?: string;
  /**
   * @example
   * work-wechat-api
   */
  database?: string;
  /**
   * @example
   * 0
   */
  dbInstanceName?: string;
  /**
   * @example
   * 2000000
   */
  docExamined?: number;
  /**
   * @example
   * 1
   */
  docsExamined?: number;
  frows?: number;
  histogram?: DescribeSlowLogStatisticResponseBodyDataDataLogsHistogram;
  /**
   * @example
   * 172.23.142.178
   */
  hostAddress?: string;
  /**
   * @example
   * mongo-abc123456
   */
  hostInsId?: string;
  /**
   * @example
   * 1000
   */
  IOWrites?: number;
  /**
   * @example
   * rm-uf6zix1z2jh1y6fe5
   */
  insName?: string;
  /**
   * @example
   * __system
   */
  insRole?: string;
  /**
   * @example
   * 20000
   */
  keysExamined?: number;
  /**
   * @example
   * 1000
   */
  lastRowsCountAffected?: number;
  /**
   * @example
   * -
   */
  lockTime?: number;
  /**
   * @example
   * 0.0
   */
  lockTimeSeconds?: number;
  /**
   * @example
   * 1000
   */
  logicalIOReads?: number;
  /**
   * @example
   * -
   */
  maxCPUTime?: number;
  maxCPUTimeSeconds?: number;
  /**
   * @example
   * 1000000
   */
  maxDocExamined?: number;
  maxFrows?: number;
  /**
   * @example
   * 1000
   */
  maxIOWrites?: number;
  /**
   * @example
   * 2000000
   */
  maxKeysExamined?: number;
  /**
   * @example
   * 1000
   */
  maxLastRowsCountAffected?: number;
  /**
   * @example
   * -
   */
  maxLockTime?: number;
  /**
   * @example
   * 0.0
   */
  maxLockTimeSeconds?: number;
  /**
   * @example
   * 1000
   */
  maxLogicalIOReads?: number;
  /**
   * @example
   * 1000
   */
  maxPhysicalIOReads?: number;
  /**
   * @example
   * -
   */
  maxQueryTime?: number;
  /**
   * @example
   * 14.402
   */
  maxQueryTimeSeconds?: number;
  /**
   * @example
   * 1
   */
  maxReturnNum?: number;
  maxRows?: number;
  /**
   * @example
   * 1000
   */
  maxRowsCountAffected?: number;
  /**
   * @example
   * 318613
   */
  maxRowsExamined?: number;
  /**
   * @example
   * 256
   */
  maxRowsSent?: number;
  maxScnt?: number;
  /**
   * @example
   * database.collection
   */
  namespace?: string;
  /**
   * @example
   * DLNode
   */
  nodeType?: string;
  /**
   * @example
   * Insert
   */
  opType?: string;
  /**
   * @example
   * order-1
   */
  originAlias?: string;
  /**
   * @example
   * 1000
   */
  physicalIOReads?: number;
  /**
   * @example
   * SELECT b?.id,b?.t?,b?.id,b?.t? FROM testtb? b? JOIN testtb? b? ON b?.id=b?.id WHERE b?.t? LIKE ? ORDER BY b?.id DESC
   */
  psql?: string;
  /**
   * @example
   * sq-1pzcdMwRb
   */
  queryId?: string;
  /**
   * @example
   * 2024-12-25T03:00:00Z
   */
  queryStartTime?: string;
  /**
   * @example
   * 272.444
   */
  queryTime?: number;
  /**
   * @example
   * 0.1018
   */
  queryTimeRate?: number;
  /**
   * @example
   * 25.472
   */
  queryTimeSeconds?: number;
  returnItemNumbers?: string;
  /**
   * @example
   * 1
   */
  returnNum?: number;
  rows?: number;
  /**
   * @example
   * 1000
   */
  rowsCountAffected?: number;
  /**
   * @example
   * 2444081
   */
  rowsExamined?: number;
  /**
   * @example
   * 772
   */
  rowsSent?: number;
  ruleId?: string;
  /**
   * @example
   * SELECT \\"Hello, World!\\" FROM DUAL
   */
  SQLText?: string;
  /**
   * @example
   * HTTP
   */
  scheme?: string;
  scnt?: number;
  /**
   * @remarks
   * SQL ID。
   * 
   * @example
   * 2dca88762ec6b3812504ab8a4b******
   */
  sqlId?: string;
  sqlTag?: DescribeSlowLogStatisticResponseBodyDataDataLogsSqlTag;
  /**
   * @example
   * LOGIN
   */
  sqlType?: string;
  /**
   * @example
   * r-8vba51c588ba3a94
   */
  subInstanceId?: string;
  /**
   * @example
   * users\\nifconfig\\n
   */
  tableName?: string;
  /**
   * @example
   * 1
   */
  threadId?: string;
  /**
   * @example
   * 1708568930
   */
  timestamp?: number;
  trend?: DescribeSlowLogStatisticResponseBodyDataDataLogsTrend[];
  /**
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
      avgReturnNum: 'AvgReturnNum',
      avgRows: 'AvgRows',
      avgRowsCountAffected: 'AvgRowsCountAffected',
      avgRowsExamined: 'AvgRowsExamined',
      avgRowsSent: 'AvgRowsSent',
      avgScnt: 'AvgScnt',
      CPUTime: 'CPUTime',
      CPUTimeSeconds: 'CPUTimeSeconds',
      command: 'Command',
      count: 'Count',
      countRate: 'CountRate',
      DBName: 'DBName',
      database: 'Database',
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
      maxReturnNum: 'MaxReturnNum',
      maxRows: 'MaxRows',
      maxRowsCountAffected: 'MaxRowsCountAffected',
      maxRowsExamined: 'MaxRowsExamined',
      maxRowsSent: 'MaxRowsSent',
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
      avgReturnNum: 'number',
      avgRows: 'number',
      avgRowsCountAffected: 'number',
      avgRowsExamined: 'number',
      avgRowsSent: 'number',
      avgScnt: 'number',
      CPUTime: 'number',
      CPUTimeSeconds: 'number',
      command: 'string',
      count: 'number',
      countRate: 'number',
      DBName: 'string',
      database: 'string',
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
      maxReturnNum: 'number',
      maxRows: 'number',
      maxRowsCountAffected: 'number',
      maxRowsExamined: 'number',
      maxRowsSent: 'number',
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
   * @example
   * rm-k2ja51w7cnusg5a1x
   */
  dbInstanceId?: number;
  /**
   * @example
   * 0
   */
  dbInstanceName?: string;
  /**
   * @example
   * 2024-08-08T02:15:00Z
   */
  endTime?: string;
  /**
   * @example
   * 10
   */
  itemsNumbers?: number;
  logs?: DescribeSlowLogStatisticResponseBodyDataDataLogs[];
  /**
   * @example
   * 10
   */
  maxRecordsPerPage?: number;
  /**
   * @example
   * pi-wz99g5rn7w1x8h0sf
   */
  nodeId?: string;
  /**
   * @example
   * 1
   */
  pageNumbers?: number;
  /**
   * @example
   * 2024-10-08T02:01:00Z
   */
  startTime?: string;
  /**
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
  data?: DescribeSlowLogStatisticResponseBodyDataData;
  /**
   * @example
   * 10910
   */
  errorCode?: number;
  /**
   * @example
   * true
   */
  isFinish?: boolean;
  /**
   * @example
   * Successful
   */
  message?: string;
  /**
   * @example
   * 123456789
   */
  requestKey?: string;
  /**
   * @example
   * async__665ee69612f1627c7fd9f3c85075****
   */
  resultId?: string;
  /**
   * @example
   * SUCCESS
   */
  state?: string;
  /**
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
   * @example
   * Successful
   */
  message?: string;
  /**
   * @example
   * 52D540CF-C517-1F57-BB42-9035F96******
   */
  requestId?: string;
  /**
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

