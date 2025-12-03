// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreTablesResponseBodyRestoreFullRestoreFullDetailsRestoreFullDetail extends $dara.Model {
  /**
   * @example
   * 1.2 kB
   */
  dataSize?: string;
  /**
   * @example
   * 2020-11-05T06:45:51Z
   */
  endTime?: string;
  /**
   * @example
   * “”
   */
  message?: string;
  /**
   * @example
   * 14/14
   */
  process?: string;
  /**
   * @example
   * 0.00 MB/s
   */
  speed?: string;
  /**
   * @example
   * 2020-11-05T06:45:45Z
   */
  startTime?: string;
  /**
   * @example
   * SUCCEEDED
   */
  state?: string;
  /**
   * @example
   * default:test1
   */
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
   * @example
   * 1.2 kB
   */
  dataSize?: string;
  /**
   * @example
   * 0
   */
  fail?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  restoreFullDetails?: DescribeRestoreTablesResponseBodyRestoreFullRestoreFullDetails;
  /**
   * @example
   * 0.00 MB/s
   */
  speed?: string;
  /**
   * @example
   * 1
   */
  succeed?: number;
  /**
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
   * @example
   * 2020-11-05T06:45:44Z
   */
  endTime?: string;
  /**
   * @example
   * 0/0
   */
  process?: string;
  /**
   * @example
   * 0 ms
   */
  restoreDelay?: string;
  /**
   * @example
   * 2020-11-02T18:00:00Z
   */
  restoreStartTs?: string;
  /**
   * @example
   * “”
   */
  restoredTs?: string;
  /**
   * @example
   * 2020-11-05T06:45:44Z
   */
  startTime?: string;
  /**
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
  /**
   * @example
   * 2020-11-05T06:45:18Z
   */
  endTime?: string;
  /**
   * @example
   * null
   */
  message?: string;
  /**
   * @example
   * 2020-11-05T06:45:14Z
   */
  startTime?: string;
  /**
   * @example
   * SUCCEEDED
   */
  state?: string;
  /**
   * @example
   * default:test1
   */
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
   * @example
   * 0
   */
  fail?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  restoreSchemaDetails?: DescribeRestoreTablesResponseBodyRestoreSchemaRestoreSchemaDetails;
  /**
   * @example
   * 1
   */
  succeed?: number;
  /**
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
   * @example
   * 2020-11-05T06:45:51Z
   */
  endTime?: string;
  /**
   * @example
   * 20201105144514
   */
  recordId?: string;
  /**
   * @example
   * 2020-11-04T05:15:00Z
   */
  restoreToDate?: string;
  /**
   * @example
   * 2020-11-05T06:45:14Z
   */
  startTime?: string;
  /**
   * @example
   * SUCCEEDED
   */
  state?: string;
  /**
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
   * @example
   * 18D9CC47-D913-48BF-AB6B-4FA9B28FBDB1
   */
  requestId?: string;
  restoreFull?: DescribeRestoreTablesResponseBodyRestoreFull;
  restoreIncrDetail?: DescribeRestoreTablesResponseBodyRestoreIncrDetail;
  restoreSchema?: DescribeRestoreTablesResponseBodyRestoreSchema;
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

