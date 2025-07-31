// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsResponseBodyBackupsBackup extends $dara.Model {
  /**
   * @remarks
   * The name of the database that has been backed up.
   * 
   * @example
   * database
   */
  backupDBNames?: string;
  /**
   * @remarks
   * The URL that is used to download the backup set over the Internet. If the backup set cannot be downloaded, an empty string is returned.
   */
  backupDownloadURL?: string;
  /**
   * @remarks
   * The end time of the backup. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-14T03:57:34Z
   */
  backupEndTime?: string;
  backupExpireTime?: string;
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 32102****
   */
  backupId?: string;
  /**
   * @remarks
   * The internal download URL of the backup set.
   * 
   * >  You can use the URL to download the specified backup set on an Elastic Compute Service (ECS) instance that is in the same virtual private cloud (VPC) as the ApsaraDB for MongoDB instance.
   */
  backupIntranetDownloadURL?: string;
  /**
   * @remarks
   * The ID of the backup task.
   * 
   * @example
   * 1123xxxx
   */
  backupJobId?: string;
  /**
   * @remarks
   * The method that is used to generate the backup set. Valid values:
   * 
   * *   **Snapshot**
   * *   **Physical**
   * *   **Logical**
   * 
   * @example
   * Physical
   */
  backupMethod?: string;
  /**
   * @remarks
   * The backup mode of the backup set. Valid values:
   * 
   * *   **Automated**
   * *   **Manual**
   * 
   * @example
   * Automated
   */
  backupMode?: string;
  /**
   * @remarks
   * The name of the backup set. The parameter is invalid.
   * 
   * @example
   * 12345678.tar.gz
   */
  backupName?: string;
  /**
   * @remarks
   * The backup granularity. The parameter is invalid.
   * 
   * @example
   * DBInstance
   */
  backupScale?: string;
  /**
   * @remarks
   * The size of the backup set. Unit: bytes.
   * 
   * @example
   * 6168576
   */
  backupSize?: number;
  /**
   * @remarks
   * The start time of the backup. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-14T03:56:17Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The status of the backup task. Valid values:
   * 
   * *   **Success**: The backup task is successful.
   * *   **Failed**: The backup task failed.
   * 
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * *   **FullBackup**
   * *   **IncrementalBackup**
   * 
   * @example
   * FullBackup
   */
  backupType?: string;
  /**
   * @remarks
   * Version of the backuped instance.
   * 
   * *   **6.0**
   * *   **5.0**
   * *   **4.4**
   * *   **4.2**
   * *   **4.0**
   * *   **3.4**
   * 
   * @example
   * 4.2
   */
  engineVersion?: string;
  /**
   * @remarks
   * Availability of the backup set.
   * - 0: unavailable
   * - 1: available
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The details of the backup set.
   */
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

