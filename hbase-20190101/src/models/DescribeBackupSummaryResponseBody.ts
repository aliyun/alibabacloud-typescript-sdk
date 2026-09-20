// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupSummaryResponseBodyFullRecordsRecord extends $dara.Model {
  createTime?: string;
  dataSize?: string;
  finishTime?: string;
  process?: string;
  recordId?: string;
  speed?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSize: 'DataSize',
      finishTime: 'FinishTime',
      process: 'Process',
      recordId: 'RecordId',
      speed: 'Speed',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataSize: 'string',
      finishTime: 'string',
      process: 'string',
      recordId: 'string',
      speed: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSummaryResponseBodyFullRecords extends $dara.Model {
  record?: DescribeBackupSummaryResponseBodyFullRecordsRecord[];
  static names(): { [key: string]: string } {
    return {
      record: 'Record',
    };
  }

  static types(): { [key: string]: any } {
    return {
      record: { 'type': 'array', 'itemType': DescribeBackupSummaryResponseBodyFullRecordsRecord },
    };
  }

  validate() {
    if(Array.isArray(this.record)) {
      $dara.Model.validateArray(this.record);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSummaryResponseBodyFull extends $dara.Model {
  /**
   * @remarks
   * Indicates whether there is a next page. Valid values:
   * 
   * - true: There is a next page.
   * - false: There is no next page.
   * 
   * @example
   * false
   */
  hasMore?: string;
  /**
   * @remarks
   * The time of the next full backup.
   * 
   * @example
   * 2020-11-09T18:00:00Z
   */
  nextFullBackupDate?: string;
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
  records?: DescribeBackupSummaryResponseBodyFullRecords;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'HasMore',
      nextFullBackupDate: 'NextFullBackupDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'string',
      nextFullBackupDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      records: DescribeBackupSummaryResponseBodyFullRecords,
      total: 'number',
    };
  }

  validate() {
    if(this.records && typeof (this.records as any).validate === 'function') {
      (this.records as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSummaryResponseBodyIncr extends $dara.Model {
  /**
   * @remarks
   * The data size.
   * 
   * @example
   * 266 B
   */
  backupLogSize?: string;
  /**
   * @remarks
   * The synchronization point.
   * 
   * @example
   * 2020-11-05T01:20:31Z
   */
  pos?: string;
  /**
   * @remarks
   * The number of logs in the queue.
   * 
   * @example
   * 0
   */
  queueLogNum?: string;
  /**
   * @remarks
   * The number of logs being backed up.
   * 
   * @example
   * 2
   */
  runningLogNum?: string;
  /**
   * @remarks
   * The current write speed of the incremental backup.
   * 
   * @example
   * 0.00 MB/s
   */
  speed?: string;
  /**
   * @remarks
   * The status of the incremental backup.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      backupLogSize: 'BackupLogSize',
      pos: 'Pos',
      queueLogNum: 'QueueLogNum',
      runningLogNum: 'RunningLogNum',
      speed: 'Speed',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupLogSize: 'string',
      pos: 'string',
      queueLogNum: 'string',
      runningLogNum: 'string',
      speed: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the full backup.
   */
  full?: DescribeBackupSummaryResponseBodyFull;
  /**
   * @remarks
   * The details of the incremental backup.
   */
  incr?: DescribeBackupSummaryResponseBodyIncr;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 168793CB-7B31-43E7-ADAB-FE3E8D584D6E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      full: 'Full',
      incr: 'Incr',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      full: DescribeBackupSummaryResponseBodyFull,
      incr: DescribeBackupSummaryResponseBodyIncr,
      requestId: 'string',
    };
  }

  validate() {
    if(this.full && typeof (this.full as any).validate === 'function') {
      (this.full as any).validate();
    }
    if(this.incr && typeof (this.incr as any).validate === 'function') {
      (this.incr as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

