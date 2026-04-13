// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsResponseBodyBackupsBackup extends $dara.Model {
  backupDBNames?: string;
  backupDownloadURL?: string;
  backupEndTime?: string;
  backupExpireTime?: string;
  backupId?: string;
  backupIntranetDownloadURL?: string;
  backupJobId?: string;
  backupMethod?: string;
  backupMode?: string;
  backupName?: string;
  backupScale?: string;
  backupSize?: number;
  backupStartTime?: string;
  backupStatus?: string;
  backupType?: string;
  engineVersion?: string;
  isAvail?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupDBNames: 'BackupDBNames',
      backupDownloadURL: 'BackupDownloadURL',
      backupEndTime: 'BackupEndTime',
      backupExpireTime: 'BackupExpireTime',
      backupId: 'BackupId',
      backupIntranetDownloadURL: 'BackupIntranetDownloadURL',
      backupJobId: 'BackupJobId',
      backupMethod: 'BackupMethod',
      backupMode: 'BackupMode',
      backupName: 'BackupName',
      backupScale: 'BackupScale',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      engineVersion: 'EngineVersion',
      isAvail: 'IsAvail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDBNames: 'string',
      backupDownloadURL: 'string',
      backupEndTime: 'string',
      backupExpireTime: 'string',
      backupId: 'string',
      backupIntranetDownloadURL: 'string',
      backupJobId: 'string',
      backupMethod: 'string',
      backupMode: 'string',
      backupName: 'string',
      backupScale: 'string',
      backupSize: 'number',
      backupStartTime: 'string',
      backupStatus: 'string',
      backupType: 'string',
      engineVersion: 'string',
      isAvail: 'boolean',
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
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 275D43C3-F12F-5224-B375-0C6BF453BD56
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of backup sets.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      backups: 'Backups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backups: DescribeBackupsResponseBodyBackups,
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

