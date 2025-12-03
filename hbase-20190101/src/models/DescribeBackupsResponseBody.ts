// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsResponseBodyBackupsBackup extends $dara.Model {
  /**
   * @example
   * 1
   */
  backupDBNames?: string;
  /**
   * @example
   * 1
   */
  backupDownloadURL?: string;
  /**
   * @example
   * 2020-12-23 17:25:24
   */
  backupEndTime?: string;
  /**
   * @example
   * 2020-12-23T09:25:24Z
   */
  backupEndTimeUTC?: string;
  /**
   * @example
   * 511876087
   */
  backupId?: number;
  /**
   * @example
   * P
   */
  backupMethod?: string;
  /**
   * @example
   * 0
   */
  backupMode?: string;
  /**
   * @example
   * 0.00
   */
  backupSize?: string;
  /**
   * @example
   * 2020-12-23 17:25:08
   */
  backupStartTime?: string;
  /**
   * @example
   * 2020-12-23T09:25:08Z
   */
  backupStartTimeUTC?: string;
  /**
   * @example
   * 0
   */
  backupStatus?: string;
  /**
   * @example
   * F
   */
  backupType?: string;
  static names(): { [key: string]: string } {
    return {
      backupDBNames: 'BackupDBNames',
      backupDownloadURL: 'BackupDownloadURL',
      backupEndTime: 'BackupEndTime',
      backupEndTimeUTC: 'BackupEndTimeUTC',
      backupId: 'BackupId',
      backupMethod: 'BackupMethod',
      backupMode: 'BackupMode',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupStartTimeUTC: 'BackupStartTimeUTC',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDBNames: 'string',
      backupDownloadURL: 'string',
      backupEndTime: 'string',
      backupEndTimeUTC: 'string',
      backupId: 'number',
      backupMethod: 'string',
      backupMode: 'string',
      backupSize: 'string',
      backupStartTime: 'string',
      backupStartTimeUTC: 'string',
      backupStatus: 'string',
      backupType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyBackups extends $dara.Model {
  backup?: DescribeBackupsResponseBodyBackupsBackup[];
  static names(): { [key: string]: string } {
    return {
      backup: 'Backup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backup: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyBackupsBackup },
    };
  }

  validate() {
    if(Array.isArray(this.backup)) {
      $dara.Model.validateArray(this.backup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBody extends $dara.Model {
  backups?: DescribeBackupsResponseBodyBackups;
  /**
   * @example
   * enable
   */
  enableStatus?: string;
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
   * A93CE373-0FDE-4CCB-9DBA-6700906825ED
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      backups: 'Backups',
      enableStatus: 'EnableStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backups: DescribeBackupsResponseBodyBackups,
      enableStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.backups && typeof (this.backups as any).validate === 'function') {
      (this.backups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

