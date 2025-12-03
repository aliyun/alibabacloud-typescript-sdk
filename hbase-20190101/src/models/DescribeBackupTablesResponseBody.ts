// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupTablesResponseBodyBackupRecordsBackupRecord extends $dara.Model {
  /**
   * @example
   * 1.2 kB
   */
  dataSize?: string;
  /**
   * @example
   * 2020-11-02T18:00:05Z
   */
  endTime?: string;
  /**
   * @example
   * null
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
   * 2020-11-02T18:00:00Z
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

export class DescribeBackupTablesResponseBodyBackupRecords extends $dara.Model {
  backupRecord?: DescribeBackupTablesResponseBodyBackupRecordsBackupRecord[];
  static names(): { [key: string]: string } {
    return {
      backupRecord: 'BackupRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRecord: { 'type': 'array', 'itemType': DescribeBackupTablesResponseBodyBackupRecordsBackupRecord },
    };
  }

  validate() {
    if(Array.isArray(this.backupRecord)) {
      $dara.Model.validateArray(this.backupRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTablesResponseBodyTables extends $dara.Model {
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

export class DescribeBackupTablesResponseBody extends $dara.Model {
  backupRecords?: DescribeBackupTablesResponseBodyBackupRecords;
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
  /**
   * @example
   * 01262E9C-B0CC-4663-82FA-D50173649F92
   */
  requestId?: string;
  tables?: DescribeBackupTablesResponseBodyTables;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      backupRecords: 'BackupRecords',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tables: 'Tables',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRecords: DescribeBackupTablesResponseBodyBackupRecords,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tables: DescribeBackupTablesResponseBodyTables,
      total: 'number',
    };
  }

  validate() {
    if(this.backupRecords && typeof (this.backupRecords as any).validate === 'function') {
      (this.backupRecords as any).validate();
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

