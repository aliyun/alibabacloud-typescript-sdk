// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupSummaryResponseBodyFullRecordsRecord extends $dara.Model {
  /**
   * @example
   * 2020-11-02T18:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * 1.2 kB
   */
  dataSize?: string;
  /**
   * @example
   * 2020-11-02T18:02:04Z
   */
  finishTime?: string;
  /**
   * @example
   * 1/1
   */
  process?: string;
  /**
   * @example
   * 20201103020000
   */
  recordId?: string;
  /**
   * @example
   * 0.00 MB/s
   */
  speed?: string;
  /**
   * @example
   * SUCCESS
   */
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
   * @example
   * false
   */
  hasMore?: string;
  /**
   * @example
   * 2020-11-09T18:00:00Z
   */
  nextFullBackupDate?: string;
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
  records?: DescribeBackupSummaryResponseBodyFullRecords;
  /**
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
   * @example
   * 266 B
   */
  backupLogSize?: string;
  /**
   * @example
   * 2020-11-05T01:20:31Z
   */
  pos?: string;
  /**
   * @example
   * 0
   */
  queueLogNum?: string;
  /**
   * @example
   * 2
   */
  runningLogNum?: string;
  /**
   * @example
   * 0.00 MB/s
   */
  speed?: string;
  /**
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
  full?: DescribeBackupSummaryResponseBodyFull;
  incr?: DescribeBackupSummaryResponseBodyIncr;
  /**
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

