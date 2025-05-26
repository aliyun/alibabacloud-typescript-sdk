// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsResponseBodyItemsBackup extends $dara.Model {
  /**
   * @remarks
   * The end time of the backup.
   * 
   * @example
   * 2022-06-02T16:00Z
   */
  backupEndTime?: string;
  backupExpiredTime?: string;
  /**
   * @remarks
   * The backup set ID.
   * 
   * @example
   * 32732****
   */
  backupId?: string;
  /**
   * @remarks
   * The backup method. Snapshot is returned.
   * 
   * @example
   * Snapshot
   */
  backupMethod?: string;
  backupRegion?: string;
  /**
   * @remarks
   * The size of the backup set. Unit: bytes.
   * 
   * @example
   * 2167808
   */
  backupSize?: number;
  /**
   * @remarks
   * The start time of the backup.
   * 
   * @example
   * 2022-06-01T16:00Z
   */
  backupStartTime?: string;
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
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  parentBackupId?: string;
  static names(): { [key: string]: string } {
    return {
      backupEndTime: 'BackupEndTime',
      backupExpiredTime: 'BackupExpiredTime',
      backupId: 'BackupId',
      backupMethod: 'BackupMethod',
      backupRegion: 'BackupRegion',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupType: 'BackupType',
      DBClusterId: 'DBClusterId',
      parentBackupId: 'ParentBackupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEndTime: 'string',
      backupExpiredTime: 'string',
      backupId: 'string',
      backupMethod: 'string',
      backupRegion: 'string',
      backupSize: 'number',
      backupStartTime: 'string',
      backupType: 'string',
      DBClusterId: 'string',
      parentBackupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

