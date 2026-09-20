// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreTablesResponseBodyRestoreFullRestoreFullDetailsRestoreFullDetail extends $dara.Model {
  dataSize?: string;
  endTime?: string;
  message?: string;
  process?: string;
  speed?: string;
  startTime?: string;
  state?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      dataSize: 'DataSize',
      endTime: 'EndTime',
      message: 'Message',
      process: 'Process',
      speed: 'Speed',
      startTime: 'StartTime',
      state: 'State',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSize: 'string',
      endTime: 'string',
      message: 'string',
      process: 'string',
      speed: 'string',
      startTime: 'string',
      state: 'string',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreFullRestoreFullDetails extends $dara.Model {
  restoreFullDetail?: DescribeRestoreTablesResponseBodyRestoreFullRestoreFullDetailsRestoreFullDetail[];
  static names(): { [key: string]: string } {
    return {
      restoreFullDetail: 'RestoreFullDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreFullDetail: { 'type': 'array', 'itemType': DescribeRestoreTablesResponseBodyRestoreFullRestoreFullDetailsRestoreFullDetail },
    };
  }

  validate() {
    if(Array.isArray(this.restoreFullDetail)) {
      $dara.Model.validateArray(this.restoreFullDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreFull extends $dara.Model {
  /**
   * @remarks
   * The total data size.
   * 
   * @example
   * 1.2 kB
   */
  dataSize?: string;
  /**
   * @remarks
   * The number of failed full restores.
   * 
   * @example
   * 0
   */
  fail?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  restoreFullDetails?: DescribeRestoreTablesResponseBodyRestoreFullRestoreFullDetails;
  /**
   * @remarks
   * The total speed.
   * 
   * @example
   * 0.00 MB/s
   */
  speed?: string;
  /**
   * @remarks
   * The number of successful restores.
   * 
   * @example
   * 1
   */
  succeed?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      dataSize: 'DataSize',
      fail: 'Fail',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      restoreFullDetails: 'RestoreFullDetails',
      speed: 'Speed',
      succeed: 'Succeed',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSize: 'string',
      fail: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      restoreFullDetails: DescribeRestoreTablesResponseBodyRestoreFullRestoreFullDetails,
      speed: 'string',
      succeed: 'number',
      total: 'number',
    };
  }

  validate() {
    if(this.restoreFullDetails && typeof (this.restoreFullDetails as any).validate === 'function') {
      (this.restoreFullDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreIncrDetail extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2020-11-05T06:45:44Z
   */
  endTime?: string;
  /**
   * @remarks
   * The completion progress.
   * 
   * @example
   * 0/0
   */
  process?: string;
  /**
   * @remarks
   * The synchronization latency.
   * 
   * @example
   * 0 ms
   */
  restoreDelay?: string;
  /**
   * @remarks
   * The synchronization start position.
   * 
   * @example
   * 2020-11-02T18:00:00Z
   */
  restoreStartTs?: string;
  /**
   * @remarks
   * The synchronization position.
   * 
   * @example
   * “”
   */
  restoredTs?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2020-11-05T06:45:44Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * SUCCEEDED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      process: 'Process',
      restoreDelay: 'RestoreDelay',
      restoreStartTs: 'RestoreStartTs',
      restoredTs: 'RestoredTs',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      process: 'string',
      restoreDelay: 'string',
      restoreStartTs: 'string',
      restoredTs: 'string',
      startTime: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreSchemaRestoreSchemaDetailsRestoreSchemaDetail extends $dara.Model {
  endTime?: string;
  message?: string;
  startTime?: string;
  state?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      message: 'Message',
      startTime: 'StartTime',
      state: 'State',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      message: 'string',
      startTime: 'string',
      state: 'string',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreSchemaRestoreSchemaDetails extends $dara.Model {
  restoreSchemaDetail?: DescribeRestoreTablesResponseBodyRestoreSchemaRestoreSchemaDetailsRestoreSchemaDetail[];
  static names(): { [key: string]: string } {
    return {
      restoreSchemaDetail: 'RestoreSchemaDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreSchemaDetail: { 'type': 'array', 'itemType': DescribeRestoreTablesResponseBodyRestoreSchemaRestoreSchemaDetailsRestoreSchemaDetail },
    };
  }

  validate() {
    if(Array.isArray(this.restoreSchemaDetail)) {
      $dara.Model.validateArray(this.restoreSchemaDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreSchema extends $dara.Model {
  /**
   * @remarks
   * The number of failed restores.
   * 
   * @example
   * 0
   */
  fail?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  restoreSchemaDetails?: DescribeRestoreTablesResponseBodyRestoreSchemaRestoreSchemaDetails;
  /**
   * @remarks
   * The number of successful restores.
   * 
   * @example
   * 1
   */
  succeed?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      fail: 'Fail',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      restoreSchemaDetails: 'RestoreSchemaDetails',
      succeed: 'Succeed',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fail: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      restoreSchemaDetails: DescribeRestoreTablesResponseBodyRestoreSchemaRestoreSchemaDetails,
      succeed: 'number',
      total: 'number',
    };
  }

  validate() {
    if(this.restoreSchemaDetails && typeof (this.restoreSchemaDetails as any).validate === 'function') {
      (this.restoreSchemaDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyRestoreSummary extends $dara.Model {
  /**
   * @remarks
   * The completion time.
   * 
   * @example
   * 2020-11-05T06:45:51Z
   */
  endTime?: string;
  /**
   * @remarks
   * The record ID.
   * 
   * @example
   * 20201105144514
   */
  recordId?: string;
  /**
   * @remarks
   * The point in time to which data is restored.
   * 
   * @example
   * 2020-11-04T05:15:00Z
   */
  restoreToDate?: string;
  /**
   * @remarks
   * The restore start time.
   * 
   * @example
   * 2020-11-05T06:45:14Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * SUCCEEDED
   */
  state?: string;
  /**
   * @remarks
   * The target cluster for the restore.
   * 
   * @example
   * ld-m5e2t34kr54wgxxxx
   */
  targetCluster?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      recordId: 'RecordId',
      restoreToDate: 'RestoreToDate',
      startTime: 'StartTime',
      state: 'State',
      targetCluster: 'TargetCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      recordId: 'string',
      restoreToDate: 'string',
      startTime: 'string',
      state: 'string',
      targetCluster: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBodyTables extends $dara.Model {
  table?: string[];
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.table)) {
      $dara.Model.validateArray(this.table);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 18D9CC47-D913-48BF-AB6B-4FA9B28FBDB1
   */
  requestId?: string;
  /**
   * @remarks
   * The full restore details.
   */
  restoreFull?: DescribeRestoreTablesResponseBodyRestoreFull;
  /**
   * @remarks
   * The incremental restore details.
   */
  restoreIncrDetail?: DescribeRestoreTablesResponseBodyRestoreIncrDetail;
  /**
   * @remarks
   * The schema restore details.
   */
  restoreSchema?: DescribeRestoreTablesResponseBodyRestoreSchema;
  /**
   * @remarks
   * The restore summary.
   */
  restoreSummary?: DescribeRestoreTablesResponseBodyRestoreSummary;
  tables?: DescribeRestoreTablesResponseBodyTables;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      restoreFull: 'RestoreFull',
      restoreIncrDetail: 'RestoreIncrDetail',
      restoreSchema: 'RestoreSchema',
      restoreSummary: 'RestoreSummary',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      restoreFull: DescribeRestoreTablesResponseBodyRestoreFull,
      restoreIncrDetail: DescribeRestoreTablesResponseBodyRestoreIncrDetail,
      restoreSchema: DescribeRestoreTablesResponseBodyRestoreSchema,
      restoreSummary: DescribeRestoreTablesResponseBodyRestoreSummary,
      tables: DescribeRestoreTablesResponseBodyTables,
    };
  }

  validate() {
    if(this.restoreFull && typeof (this.restoreFull as any).validate === 'function') {
      (this.restoreFull as any).validate();
    }
    if(this.restoreIncrDetail && typeof (this.restoreIncrDetail as any).validate === 'function') {
      (this.restoreIncrDetail as any).validate();
    }
    if(this.restoreSchema && typeof (this.restoreSchema as any).validate === 'function') {
      (this.restoreSchema as any).validate();
    }
    if(this.restoreSummary && typeof (this.restoreSummary as any).validate === 'function') {
      (this.restoreSummary as any).validate();
    }
    if(this.tables && typeof (this.tables as any).validate === 'function') {
      (this.tables as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

