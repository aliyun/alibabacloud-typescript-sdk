// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDetachedBackupsResponseBodyItemsBackup extends $dara.Model {
  /**
   * @remarks
   * The end time of the backup task. The time is displayed in UTC.
   * 
   * @example
   * 2020-05-12T03:25:55Z
   */
  backupEndTime?: string;
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 111111111
   */
  backupId?: string;
  /**
   * @remarks
   * The backup method. Only snapshot backups are supported. The value is set to **Snapshot**.
   * 
   * @example
   * Snapshot
   */
  backupMethod?: string;
  /**
   * @remarks
   * The backup mode. Valid values:
   * 
   * *   **Automated**
   * *   **Manual**
   * 
   * @example
   * Manual
   */
  backupMode?: string;
  /**
   * @remarks
   * The size of the backup set. Unit: bytes.
   * 
   * > After you delete the target snapshot backups, the storage space consumed by the backups is released. The released storage space is smaller than the size of the backup file, because the snapshots share certain data blocks.
   * 
   * @example
   * 7251056
   */
  backupSetSize?: string;
  /**
   * @remarks
   * The start time of the backup task. The time is displayed in UTC.
   * 
   * @example
   * 2020-05-12T03:25:44Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The status of the backup set. Valid values:
   * 
   * *   **Success**
   * *   **Failed**
   * 
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @remarks
   * The type of the backup. Only full backups are supported. The value is set to **FullBackup**.
   * 
   * @example
   * FullBackup
   */
  backupType?: string;
  /**
   * @remarks
   * The level of the backup set. Valid values:
   * 
   * *   **Level-1**: level-1 backup set
   * *   **Level-2**: level-2 backup set
   * 
   * @example
   * Level-2
   */
  backupsLevel?: string;
  /**
   * @remarks
   * The snapshot checkpoint time. The value is a Unix timestamp.
   * 
   * @example
   * 1589253947
   */
  consistentTime?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Indicates whether the backup set is available. Valid values:
   * 
   * *   **0**: The data backup set is unavailable.
   * *   **1**: The data backup set is available.
   * 
   * @example
   * 1
   */
  isAvail?: string;
  /**
   * @remarks
   * Indicates whether the backup set can be deleted. Valid values:
   * 
   * *   **Enabled**: The backup set can be deleted.
   * *   **Disabled**: The backup set cannot be deleted.
   * 
   * @example
   * Disabled
   */
  storeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      backupMethod: 'BackupMethod',
      backupMode: 'BackupMode',
      backupSetSize: 'BackupSetSize',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      backupsLevel: 'BackupsLevel',
      consistentTime: 'ConsistentTime',
      DBClusterId: 'DBClusterId',
      isAvail: 'IsAvail',
      storeStatus: 'StoreStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEndTime: 'string',
      backupId: 'string',
      backupMethod: 'string',
      backupMode: 'string',
      backupSetSize: 'string',
      backupStartTime: 'string',
      backupStatus: 'string',
      backupType: 'string',
      backupsLevel: 'string',
      consistentTime: 'string',
      DBClusterId: 'string',
      isAvail: 'string',
      storeStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

