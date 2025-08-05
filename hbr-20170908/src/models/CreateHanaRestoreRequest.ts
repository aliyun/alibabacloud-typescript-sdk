// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHanaRestoreRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup.
   * 
   * @example
   * 1645628400235
   */
  backupId?: number;
  /**
   * @remarks
   * The backup prefix.
   * 
   * This parameter is required.
   * 
   * @example
   * COMPLETE_DATA_BACKUP_2022_05_02_15_39
   */
  backupPrefix?: string;
  /**
   * @remarks
   * Specifies whether to validate the differential backup and log backup. Valid values: true and false. If you set the value to true, HBR checks whether the required differential backup and log backup are available before the restore job starts. If the differential backup or log backup is unavailable, HBR does not start the restore job.
   * 
   * @example
   * false
   */
  checkAccess?: boolean;
  /**
   * @remarks
   * Specifies whether to delete all log entries from the log area after the log entries are restored. Valid values: true and false. If you set the value to false, all log entries are deleted from the log area after the log entries are restored.
   * 
   * @example
   * false
   */
  clearLog?: boolean;
  /**
   * @remarks
   * The ID of the SAP HANA instance that you want to restore.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-000fbrs5******ka9w
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the database that you want to restore.
   * 
   * This parameter is required.
   * 
   * @example
   * TS2
   */
  databaseName?: string;
  /**
   * @remarks
   * The log position to which you want to restore the database. This parameter is valid only if you set the Mode parameter to **RECOVERY_TO_LOG_POSITION**.
   * 
   * @example
   * 0
   */
  logPosition?: number;
  /**
   * @remarks
   * The ID of the client where the primary node of the SAP HANA resides.
   * 
   * @example
   * c-000ii8tzv**********
   */
  masterClientId?: string;
  /**
   * @remarks
   * The recovery mode. Valid values:
   * 
   * *   **RECOVERY_TO_MOST_RECENT**: restores the database to the recently available state to which the database has been backed up.
   * *   **RECOVERY_TO_POINT_IN_TIME**: restores the database to a specified point in time.
   * *   **RECOVERY_TO_SPECIFIC_BACKUP**: restores the database to a specified backup.
   * *   **RECOVERY_TO_LOG_POSITION**: restores the database to a specified log position.
   * 
   * This parameter is required.
   * 
   * @example
   * RECOVERY_TO_POINT_IN_TIME
   */
  mode?: string;
  /**
   * @remarks
   * The point in time to which you want to restore the database. This parameter is valid only if you set the Mode parameter to **RECOVERY_TO_POINT_IN_TIME**. HBR restores the database to a state closest to the specified point in time.
   * 
   * @example
   * 1635315505
   */
  recoveryPointInTime?: number;
  /**
   * @remarks
   * The SID admin account that is created by SAP HANA.
   * 
   * @example
   * DB
   */
  sidAdmin?: string;
  /**
   * @remarks
   * The name of the source system. This parameter specifies the name of the source database that you want to restore. You must set the parameter in the `<Source database name>@SID` format.
   * 
   * @example
   * HNP@HNP
   */
  source?: string;
  /**
   * @remarks
   * The ID of the source SAP HANA instance.
   * 
   * @example
   * cl-000ii8tzv******xm0t
   */
  sourceClusterId?: string;
  /**
   * @remarks
   * Specifies whether to restore the database to a different instance.
   * 
   * @example
   * false
   */
  systemCopy?: boolean;
  /**
   * @remarks
   * Specifies whether to use a catalog backup to restore the database. This parameter is required only if you set the Mode parameter to **RECOVERY_TO_SPECIFIC_BACKUP**. If you turn off Use Catalog, you must specify the prefix of a backup file. Then, Cloud Backup finds the backup file based on the specified prefix and restores the backup file.
   * 
   * @example
   * false
   */
  useCatalog?: boolean;
  /**
   * @remarks
   * Specifies whether to use a differential backup or an incremental backup to restore the database. Valid values: true and false. If you want to use a differential backup or an incremental backup to restore the database, set the value to true. If you set the value to false, HBR uses a log backup to restore the database.
   * 
   * @example
   * true
   */
  useDelta?: boolean;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-000************yqr
   */
  vaultId?: string;
  /**
   * @remarks
   * The ID of the volume that you want to restore. This parameter is valid only if you set the Mode parameter to **RECOVERY_TO_LOG_POSITION**.
   * 
   * @example
   * 0
   */
  volumeId?: number;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      backupPrefix: 'BackupPrefix',
      checkAccess: 'CheckAccess',
      clearLog: 'ClearLog',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      logPosition: 'LogPosition',
      masterClientId: 'MasterClientId',
      mode: 'Mode',
      recoveryPointInTime: 'RecoveryPointInTime',
      sidAdmin: 'SidAdmin',
      source: 'Source',
      sourceClusterId: 'SourceClusterId',
      systemCopy: 'SystemCopy',
      useCatalog: 'UseCatalog',
      useDelta: 'UseDelta',
      vaultId: 'VaultId',
      volumeId: 'VolumeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'number',
      backupPrefix: 'string',
      checkAccess: 'boolean',
      clearLog: 'boolean',
      clusterId: 'string',
      databaseName: 'string',
      logPosition: 'number',
      masterClientId: 'string',
      mode: 'string',
      recoveryPointInTime: 'number',
      sidAdmin: 'string',
      source: 'string',
      sourceClusterId: 'string',
      systemCopy: 'boolean',
      useCatalog: 'boolean',
      useDelta: 'boolean',
      vaultId: 'string',
      volumeId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

