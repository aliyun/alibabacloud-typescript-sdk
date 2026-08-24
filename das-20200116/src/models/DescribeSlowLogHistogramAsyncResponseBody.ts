// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogHistogramAsyncResponseBodyDataDataItemInsItems extends $dara.Model {
  /**
   * @remarks
   * The number of executions.
   */
  count?: number[];
  /**
   * @remarks
   * The instance role ID.
   * >Supported only for ApsaraDB for MongoDB instances.
   * 
   * @example
   * 2492
   */
  insId?: string;
  /**
   * @remarks
   * The instance role.
   * >Supported only for ApsaraDB for MongoDB instances.
   * 
   * @example
   * userAdmin
   */
  insRole?: string;
  /**
   * @remarks
   * The number of slow logs on the physical node.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      insId: 'InsId',
      insRole: 'InsRole',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: { 'type': 'array', 'itemType': 'number' },
      insId: 'string',
      insRole: 'string',
      totalCount: 'number',
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

export class DescribeSlowLogHistogramAsyncResponseBodyDataDataItem extends $dara.Model {
  /**
   * @remarks
   * The number of slow logs.
   */
  count?: number[];
  /**
   * @remarks
   * The trend metrics.
   * >Supported only for ApsaraDB for MongoDB instances.
   */
  insItems?: DescribeSlowLogHistogramAsyncResponseBodyDataDataItemInsItems[];
  /**
   * @remarks
   * The instance role.
   * >Supported only for ApsaraDB for MongoDB instances.
   */
  insRole?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * r-bp1hi0wg57s3n0i3n8-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The total number of slow logs.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      insItems: 'InsItems',
      insRole: 'InsRole',
      nodeId: 'NodeId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: { 'type': 'array', 'itemType': 'number' },
      insItems: { 'type': 'array', 'itemType': DescribeSlowLogHistogramAsyncResponseBodyDataDataItemInsItems },
      insRole: 'string',
      nodeId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.count)) {
      $dara.Model.validateArray(this.count);
    }
    if(Array.isArray(this.insItems)) {
      $dara.Model.validateArray(this.insItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogHistogramAsyncResponseBodyDataData extends $dara.Model {
  /**
   * @remarks
   * The average CPU processing duration. Unit: seconds (s).
   * >Only ApsaraDB RDS for SQL Server instances are supported.
   */
  avgCPUTime?: number[];
  /**
   * @remarks
   * The average number of document rows scanned.
   * >Supported only for ApsaraDB for MongoDB instances.
   */
  avgDocExamined?: number[];
  /**
   * @remarks
   * The average number of rows fetched.
   */
  avgFrows?: number[];
  /**
   * @remarks
   * The average number of I/O writes.
   * >Only ApsaraDB RDS for SQL Server instances are supported.
   */
  avgIOWrites?: number[];
  /**
   * @remarks
   * The average number of index rows scanned.
   * >Supported only for ApsaraDB for MongoDB instances.
   */
  avgKeysExamined?: number[];
  /**
   * @remarks
   * The average number of rows affected by the last statement.
   * >Only ApsaraDB RDS for SQL Server instances are supported.
   */
  avgLastRowsCountAffected?: number[];
  /**
   * @remarks
   * The average lock wait time. Unit: seconds.
   */
  avgLockTime?: number[];
  /**
   * @remarks
   * The average number of logical reads.
   * >Only ApsaraDB RDS for SQL Server instances are supported.
   */
  avgLogicalIOReads?: number[];
  /**
   * @remarks
   * The average number of physical reads.
   * >Only ApsaraDB RDS for SQL Server instances are supported.
   */
  avgPhysicalIOReads?: number[];
  /**
   * @remarks
   * The average number of rows returned.
   * >Supported only for ApsaraDB for MongoDB instances.
   */
  avgReturnNum?: number[];
  /**
   * @remarks
   * The average number of rows.
   */
  avgRows?: number[];
  /**
   * @remarks
   * The average number of rows affected.
   * >Only ApsaraDB RDS for SQL Server instances are supported.
   */
  avgRowsCountAffected?: number[];
  /**
   * @remarks
   * The average number of rows scanned.
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
   * The average number of requests.
   */
  avgScnt?: number[];
  /**
   * @remarks
   * The CPU processing duration. Unit: seconds (s).
   * >Only ApsaraDB RDS for SQL Server instances are supported.
   */
  CPUTime?: number[];
  /**
   * @remarks
   * The slow log count trend.
   */
  count?: number[];
  /**
   * @remarks
   * The number of document rows scanned.
   * >Supported only for ApsaraDB for MongoDB instances.
   */
  docExamined?: number[];
  /**
   * @remarks
   * The number of rows fetched by the compute node (CN) of the PolarDB-X 2.0 database instance.
   * 
   * > Only ApsaraDB PolarDB-X 2.0 instances are supported.
   */
  frows?: number[];
  /**
   * @remarks
   * The number of I/O writes.
   * >Only ApsaraDB RDS for SQL Server instances are supported.
   */
  IOWrites?: number[];
  /**
   * @remarks
   * The trend metrics.
   */
  item?: DescribeSlowLogHistogramAsyncResponseBodyDataDataItem[];
  /**
   * @remarks
   * The number of index rows scanned.
   * >Supported only for ApsaraDB for MongoDB instances.
   */
  keysExamined?: number[];
  /**
   * @remarks
   * The number of rows affected by the last statement.
   * >Only ApsaraDB RDS for SQL Server instances are supported.
   */
  lastRowsCountAffected?: number[];
  /**
   * @remarks
   * The total lock wait time. Unit: seconds.
   */
  lockTime?: number[];
  /**
   * @remarks
   * The number of logical reads.
   * >Only ApsaraDB RDS for SQL Server instances are supported.
   */
  logicalIOReads?: number[];
  /**
   * @remarks
   * The maximum CPU processing duration. Unit: seconds (s).
   * >Only ApsaraDB RDS for SQL Server instances are supported.
   */
  maxCPUTime?: number[];
  /**
   * @remarks
   * The maximum number of document rows scanned.
   * >Supported only for ApsaraDB for MongoDB instances.
   */
  maxDocExamined?: number[];
  /**
   * @remarks
   * The maximum number of rows fetched.
   */
  maxFrows?: number[];
  /**
   * @remarks
   * The maximum number of I/O writes.
   * >Only ApsaraDB RDS for SQL Server instances are supported.
   */
  maxIOWrites?: number[];
  /**
   * @remarks
   * The maximum number of index rows scanned.
   * >Supported only for ApsaraDB for MongoDB instances.
   */
  maxKeysExamined?: number[];
  /**
   * @remarks
   * The maximum number of rows affected by the last statement.
   * >Only ApsaraDB RDS for SQL Server instances are supported.
   */
  maxLastRowsCountAffected?: number[];
  /**
   * @remarks
   * The maximum lock wait time. Unit: seconds.
   */
  maxLockTime?: number[];
  /**
   * @remarks
   * The maximum number of logical reads.
   * >Only ApsaraDB RDS for SQL Server instances are supported.
   */
  maxLogicalIOReads?: number[];
  /**
   * @remarks
   * The maximum number of physical reads.
   * >Only ApsaraDB RDS for SQL Server instances are supported.
   */
  maxPhysicalIOReads?: number[];
  /**
   * @remarks
   * The maximum number of rows returned.
   * >Supported only for ApsaraDB for MongoDB instances.
   */
  maxReturnNum?: number[];
  /**
   * @remarks
   * The maximum number of rows.
   */
  maxRows?: number[];
  /**
   * @remarks
   * The maximum number of rows affected.
   * >Only ApsaraDB RDS for SQL Server instances are supported.
   */
  maxRowsCountAffected?: number[];
  /**
   * @remarks
   * The maximum number of rows scanned.
   */
  maxRowsExamined?: number[];
  /**
   * @remarks
   * The maximum number of rows returned.
   */
  maxRowsSent?: number[];
  /**
   * @remarks
   * The maximum execution duration. Unit: seconds.
   */
  maxRt?: number[];
  /**
   * @remarks
   * The maximum number of requests.
   */
  maxScnt?: number[];
  /**
   * @remarks
   * The number of physical reads.
   * >Only ApsaraDB RDS for SQL Server instances are supported.
   */
  physicalIOReads?: number[];
  /**
   * @remarks
   * The number of rows returned.
   * >Supported only for ApsaraDB for MongoDB instances.
   */
  returnNum?: number[];
  /**
   * @remarks
   * The total number of rows updated or returned by compute nodes of the PolarDB-X 2.0 database instance.
   * 
   * > Only ApsaraDB PolarDB-X 2.0 instances are supported.
   */
  rows?: number[];
  /**
   * @remarks
   * The number of rows affected.
   * >Only ApsaraDB RDS for SQL Server instances are supported.
   */
  rowsCountAffected?: number[];
  /**
   * @remarks
   * The total number of rows scanned.
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
   * The total execution duration. Unit: seconds.
   */
  rt?: number[];
  /**
   * @remarks
   * The number of DN requests from the compute node (CN) of the PolarDB-X 2.0 database instance.
   * 
   * > Only ApsaraDB PolarDB-X 2.0 instances are supported.
   */
  scnt?: number[];
  /**
   * @remarks
   * The total number of records queried.
   * 
   * @example
   * 1
   */
  total?: number;
  /**
   * @remarks
   * The total number of slow query logs.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @remarks
   * Used only for relational databases.
   */
  ts?: number[];
  /**
   * @remarks
   * Not used. Reserved field.
   */
  tsEnd?: number[];
  static names(): { [key: string]: string } {
    return {
      avgCPUTime: 'AvgCPUTime',
      avgDocExamined: 'AvgDocExamined',
      avgFrows: 'AvgFrows',
      avgIOWrites: 'AvgIOWrites',
      avgKeysExamined: 'AvgKeysExamined',
      avgLastRowsCountAffected: 'AvgLastRowsCountAffected',
      avgLockTime: 'AvgLockTime',
      avgLogicalIOReads: 'AvgLogicalIOReads',
      avgPhysicalIOReads: 'AvgPhysicalIOReads',
      avgReturnNum: 'AvgReturnNum',
      avgRows: 'AvgRows',
      avgRowsCountAffected: 'AvgRowsCountAffected',
      avgRowsExamined: 'AvgRowsExamined',
      avgRowsSent: 'AvgRowsSent',
      avgRt: 'AvgRt',
      avgScnt: 'AvgScnt',
      CPUTime: 'CPUTime',
      count: 'Count',
      docExamined: 'DocExamined',
      frows: 'Frows',
      IOWrites: 'IOWrites',
      item: 'Item',
      keysExamined: 'KeysExamined',
      lastRowsCountAffected: 'LastRowsCountAffected',
      lockTime: 'LockTime',
      logicalIOReads: 'LogicalIOReads',
      maxCPUTime: 'MaxCPUTime',
      maxDocExamined: 'MaxDocExamined',
      maxFrows: 'MaxFrows',
      maxIOWrites: 'MaxIOWrites',
      maxKeysExamined: 'MaxKeysExamined',
      maxLastRowsCountAffected: 'MaxLastRowsCountAffected',
      maxLockTime: 'MaxLockTime',
      maxLogicalIOReads: 'MaxLogicalIOReads',
      maxPhysicalIOReads: 'MaxPhysicalIOReads',
      maxReturnNum: 'MaxReturnNum',
      maxRows: 'MaxRows',
      maxRowsCountAffected: 'MaxRowsCountAffected',
      maxRowsExamined: 'MaxRowsExamined',
      maxRowsSent: 'MaxRowsSent',
      maxRt: 'MaxRt',
      maxScnt: 'MaxScnt',
      physicalIOReads: 'PhysicalIOReads',
      returnNum: 'ReturnNum',
      rows: 'Rows',
      rowsCountAffected: 'RowsCountAffected',
      rowsExamined: 'RowsExamined',
      rowsSent: 'RowsSent',
      rt: 'Rt',
      scnt: 'Scnt',
      total: 'Total',
      totalCount: 'TotalCount',
      ts: 'Ts',
      tsEnd: 'TsEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgCPUTime: { 'type': 'array', 'itemType': 'number' },
      avgDocExamined: { 'type': 'array', 'itemType': 'number' },
      avgFrows: { 'type': 'array', 'itemType': 'number' },
      avgIOWrites: { 'type': 'array', 'itemType': 'number' },
      avgKeysExamined: { 'type': 'array', 'itemType': 'number' },
      avgLastRowsCountAffected: { 'type': 'array', 'itemType': 'number' },
      avgLockTime: { 'type': 'array', 'itemType': 'number' },
      avgLogicalIOReads: { 'type': 'array', 'itemType': 'number' },
      avgPhysicalIOReads: { 'type': 'array', 'itemType': 'number' },
      avgReturnNum: { 'type': 'array', 'itemType': 'number' },
      avgRows: { 'type': 'array', 'itemType': 'number' },
      avgRowsCountAffected: { 'type': 'array', 'itemType': 'number' },
      avgRowsExamined: { 'type': 'array', 'itemType': 'number' },
      avgRowsSent: { 'type': 'array', 'itemType': 'number' },
      avgRt: { 'type': 'array', 'itemType': 'number' },
      avgScnt: { 'type': 'array', 'itemType': 'number' },
      CPUTime: { 'type': 'array', 'itemType': 'number' },
      count: { 'type': 'array', 'itemType': 'number' },
      docExamined: { 'type': 'array', 'itemType': 'number' },
      frows: { 'type': 'array', 'itemType': 'number' },
      IOWrites: { 'type': 'array', 'itemType': 'number' },
      item: { 'type': 'array', 'itemType': DescribeSlowLogHistogramAsyncResponseBodyDataDataItem },
      keysExamined: { 'type': 'array', 'itemType': 'number' },
      lastRowsCountAffected: { 'type': 'array', 'itemType': 'number' },
      lockTime: { 'type': 'array', 'itemType': 'number' },
      logicalIOReads: { 'type': 'array', 'itemType': 'number' },
      maxCPUTime: { 'type': 'array', 'itemType': 'number' },
      maxDocExamined: { 'type': 'array', 'itemType': 'number' },
      maxFrows: { 'type': 'array', 'itemType': 'number' },
      maxIOWrites: { 'type': 'array', 'itemType': 'number' },
      maxKeysExamined: { 'type': 'array', 'itemType': 'number' },
      maxLastRowsCountAffected: { 'type': 'array', 'itemType': 'number' },
      maxLockTime: { 'type': 'array', 'itemType': 'number' },
      maxLogicalIOReads: { 'type': 'array', 'itemType': 'number' },
      maxPhysicalIOReads: { 'type': 'array', 'itemType': 'number' },
      maxReturnNum: { 'type': 'array', 'itemType': 'number' },
      maxRows: { 'type': 'array', 'itemType': 'number' },
      maxRowsCountAffected: { 'type': 'array', 'itemType': 'number' },
      maxRowsExamined: { 'type': 'array', 'itemType': 'number' },
      maxRowsSent: { 'type': 'array', 'itemType': 'number' },
      maxRt: { 'type': 'array', 'itemType': 'number' },
      maxScnt: { 'type': 'array', 'itemType': 'number' },
      physicalIOReads: { 'type': 'array', 'itemType': 'number' },
      returnNum: { 'type': 'array', 'itemType': 'number' },
      rows: { 'type': 'array', 'itemType': 'number' },
      rowsCountAffected: { 'type': 'array', 'itemType': 'number' },
      rowsExamined: { 'type': 'array', 'itemType': 'number' },
      rowsSent: { 'type': 'array', 'itemType': 'number' },
      rt: { 'type': 'array', 'itemType': 'number' },
      scnt: { 'type': 'array', 'itemType': 'number' },
      total: 'number',
      totalCount: 'number',
      ts: { 'type': 'array', 'itemType': 'number' },
      tsEnd: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.avgCPUTime)) {
      $dara.Model.validateArray(this.avgCPUTime);
    }
    if(Array.isArray(this.avgDocExamined)) {
      $dara.Model.validateArray(this.avgDocExamined);
    }
    if(Array.isArray(this.avgFrows)) {
      $dara.Model.validateArray(this.avgFrows);
    }
    if(Array.isArray(this.avgIOWrites)) {
      $dara.Model.validateArray(this.avgIOWrites);
    }
    if(Array.isArray(this.avgKeysExamined)) {
      $dara.Model.validateArray(this.avgKeysExamined);
    }
    if(Array.isArray(this.avgLastRowsCountAffected)) {
      $dara.Model.validateArray(this.avgLastRowsCountAffected);
    }
    if(Array.isArray(this.avgLockTime)) {
      $dara.Model.validateArray(this.avgLockTime);
    }
    if(Array.isArray(this.avgLogicalIOReads)) {
      $dara.Model.validateArray(this.avgLogicalIOReads);
    }
    if(Array.isArray(this.avgPhysicalIOReads)) {
      $dara.Model.validateArray(this.avgPhysicalIOReads);
    }
    if(Array.isArray(this.avgReturnNum)) {
      $dara.Model.validateArray(this.avgReturnNum);
    }
    if(Array.isArray(this.avgRows)) {
      $dara.Model.validateArray(this.avgRows);
    }
    if(Array.isArray(this.avgRowsCountAffected)) {
      $dara.Model.validateArray(this.avgRowsCountAffected);
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
    if(Array.isArray(this.avgScnt)) {
      $dara.Model.validateArray(this.avgScnt);
    }
    if(Array.isArray(this.CPUTime)) {
      $dara.Model.validateArray(this.CPUTime);
    }
    if(Array.isArray(this.count)) {
      $dara.Model.validateArray(this.count);
    }
    if(Array.isArray(this.docExamined)) {
      $dara.Model.validateArray(this.docExamined);
    }
    if(Array.isArray(this.frows)) {
      $dara.Model.validateArray(this.frows);
    }
    if(Array.isArray(this.IOWrites)) {
      $dara.Model.validateArray(this.IOWrites);
    }
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    if(Array.isArray(this.keysExamined)) {
      $dara.Model.validateArray(this.keysExamined);
    }
    if(Array.isArray(this.lastRowsCountAffected)) {
      $dara.Model.validateArray(this.lastRowsCountAffected);
    }
    if(Array.isArray(this.lockTime)) {
      $dara.Model.validateArray(this.lockTime);
    }
    if(Array.isArray(this.logicalIOReads)) {
      $dara.Model.validateArray(this.logicalIOReads);
    }
    if(Array.isArray(this.maxCPUTime)) {
      $dara.Model.validateArray(this.maxCPUTime);
    }
    if(Array.isArray(this.maxDocExamined)) {
      $dara.Model.validateArray(this.maxDocExamined);
    }
    if(Array.isArray(this.maxFrows)) {
      $dara.Model.validateArray(this.maxFrows);
    }
    if(Array.isArray(this.maxIOWrites)) {
      $dara.Model.validateArray(this.maxIOWrites);
    }
    if(Array.isArray(this.maxKeysExamined)) {
      $dara.Model.validateArray(this.maxKeysExamined);
    }
    if(Array.isArray(this.maxLastRowsCountAffected)) {
      $dara.Model.validateArray(this.maxLastRowsCountAffected);
    }
    if(Array.isArray(this.maxLockTime)) {
      $dara.Model.validateArray(this.maxLockTime);
    }
    if(Array.isArray(this.maxLogicalIOReads)) {
      $dara.Model.validateArray(this.maxLogicalIOReads);
    }
    if(Array.isArray(this.maxPhysicalIOReads)) {
      $dara.Model.validateArray(this.maxPhysicalIOReads);
    }
    if(Array.isArray(this.maxReturnNum)) {
      $dara.Model.validateArray(this.maxReturnNum);
    }
    if(Array.isArray(this.maxRows)) {
      $dara.Model.validateArray(this.maxRows);
    }
    if(Array.isArray(this.maxRowsCountAffected)) {
      $dara.Model.validateArray(this.maxRowsCountAffected);
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
    if(Array.isArray(this.maxScnt)) {
      $dara.Model.validateArray(this.maxScnt);
    }
    if(Array.isArray(this.physicalIOReads)) {
      $dara.Model.validateArray(this.physicalIOReads);
    }
    if(Array.isArray(this.returnNum)) {
      $dara.Model.validateArray(this.returnNum);
    }
    if(Array.isArray(this.rows)) {
      $dara.Model.validateArray(this.rows);
    }
    if(Array.isArray(this.rowsCountAffected)) {
      $dara.Model.validateArray(this.rowsCountAffected);
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
    if(Array.isArray(this.scnt)) {
      $dara.Model.validateArray(this.scnt);
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

export class DescribeSlowLogHistogramAsyncResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data.
   */
  data?: DescribeSlowLogHistogramAsyncResponseBodyDataData;
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
   * None
   */
  requestKey?: string;
  /**
   * @remarks
   * The result ID.
   * 
   * @example
   * async__20ee808e72257f16a4fe024057ca****
   */
  resultId?: string;
  /**
   * @remarks
   * The current state. Valid values:
   * - **RUNNING**: Running.
   * - **SUCCESS**: Succeeded.
   * - **FAIL**: Failed.
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
   * 1645668213000
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
      data: DescribeSlowLogHistogramAsyncResponseBodyDataData,
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

export class DescribeSlowLogHistogramAsyncResponseBody extends $dara.Model {
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
   * AsyncResult<Histogram>。
   */
  data?: DescribeSlowLogHistogramAsyncResponseBodyData;
  /**
   * @remarks
   * The message returned for the request.
   * >  This parameter returns **Successful** when the request succeeds. If the request fails, an exception message (such as an error code) is returned.
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
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
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
      data: DescribeSlowLogHistogramAsyncResponseBodyData,
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

