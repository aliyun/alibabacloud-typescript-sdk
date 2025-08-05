// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHanaRestoresResponseBodyHanaRestoreHanaRestores extends $dara.Model {
  /**
   * @remarks
   * The backup ID.
   * 
   * @example
   * 1635315505
   */
  backupID?: number;
  /**
   * @remarks
   * The backup prefix.
   * 
   * @example
   * INC_DATA_BACKUP
   */
  backupPrefix?: string;
  /**
   * @remarks
   * Indicates whether the differential backup and log backup are validated. Valid values:
   * 
   * *   true: Cloud Backup checks whether the required differential backup and log backup are available before the restore job starts. If the differential backup or log backup is unavailable, Cloud Backup does not start the restore job.
   * *   false: Cloud Backup does not check whether the required differential backup and log backup are available before the restore job starts.
   * 
   * @example
   * true
   */
  checkAccess?: boolean;
  /**
   * @remarks
   * Indicates whether all log entries are deleted from the log area after the log entries are restored. Valid values: true and false. If the return value is false, all log entries are deleted from the log area after the log entries are restored.
   * 
   * @example
   * true
   */
  clearLog?: boolean;
  /**
   * @remarks
   * The ID of the SAP HANA instance that is restored.
   * 
   * @example
   * cl-000923yu******p00j4
   */
  clusterId?: string;
  /**
   * @remarks
   * The current recovery phase. This value is obtained from SAP HANA.
   * 
   * @example
   * 2
   */
  currentPhase?: number;
  /**
   * @remarks
   * The current progress. This value is obtained from SAP HANA.
   * 
   * @example
   * 1
   */
  currentProgress?: number;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * BWD
   */
  databaseName?: string;
  /**
   * @remarks
   * The ID of the database recovery.
   * 
   * @example
   * 1644038961030
   */
  databaseRestoreId?: number;
  /**
   * @remarks
   * The time when the restore job ends. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1634356382
   */
  endTime?: number;
  /**
   * @remarks
   * The log position to which the database is restored. This parameter is returned only if the value of the Mode parameter is **RECOVERY_TO_LOG_POSITION**.
   * 
   * @example
   * 0
   */
  logPosition?: number;
  /**
   * @remarks
   * The maximum recovery phase. This value is obtained from SAP HANA.
   * 
   * @example
   * 4
   */
  maxPhase?: number;
  /**
   * @remarks
   * The maximum progress. This value is obtained from SAP HANA.
   * 
   * @example
   * 1
   */
  maxProgress?: number;
  /**
   * @remarks
   * The details of the recovery phase.
   * 
   * @example
   * SQL Error 448 - recovery could not be completed:
   */
  message?: string;
  /**
   * @remarks
   * The recovery mode. Valid values:
   * 
   * *   **RECOVERY_TO_MOST_RECENT**: The database is restored to the recently available state to which the database has been backed up.
   * *   **RECOVERY_TO_POINT_IN_TIME**: The database is restored to a specified point in time.
   * *   **RECOVERY_TO_SPECIFIC_BACKUP**: The database is restored to a specified backup.
   * *   **RECOVERY_TO_LOG_POSITION**: The database is restored to a specified log position.
   * 
   * @example
   * RECOVERY_TO_SPECIFIC_BACKUP
   */
  mode?: string;
  /**
   * @remarks
   * The recovery phase.
   * 
   * @example
   * restart
   */
  phase?: string;
  /**
   * @remarks
   * The point in time at which the database is restored.
   * 
   * @example
   * 1635315505
   */
  reachedTime?: number;
  /**
   * @remarks
   * The point in time to which the database is restored. This parameter is returned only if the value of the Mode parameter is **RECOVERY_TO_POINT_IN_TIME**. Cloud Backup restores the database to a state closest to the specified point in time.
   * 
   * @example
   * 1649851200
   */
  recoveryPointInTime?: number;
  /**
   * @remarks
   * The ID of the restore job.
   * 
   * @example
   * r-000c1en183ayn9sesgqh
   */
  restoreId?: string;
  /**
   * @remarks
   * The name of the source system. This parameter indicates the name of the source database that is restored. Format: `<Source database name>@SID`.
   * 
   * @example
   * PRD@H4P
   */
  source?: string;
  /**
   * @remarks
   * The ID of the source SAP HANA instance.
   * 
   * @example
   * cl-0000g3mvy******5cj
   */
  sourceClusterId?: string;
  /**
   * @remarks
   * The time when the restore job starts. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1636970413
   */
  startTime?: number;
  /**
   * @remarks
   * The recovery status. This value is obtained from SAP HANA.
   * 
   * @example
   * successful
   */
  state?: string;
  /**
   * @remarks
   * The status of the restore job. Valid values:
   * 
   * *   **RUNNING**: The job is running.
   * *   **COMPLETE**: The job is completed.
   * *   **PARTIAL_COMPLETE**: The job is partially completed.
   * *   **FAILED**: The job failed.
   * *   **CANCELED**: The job is canceled.
   * *   **EXPIRED**: The job timed out.
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the database is restored to a different instance. Valid values:
   * 
   * *   true: The database is restored to a different instance.
   * *   false: The database is restored within the same instance.
   * 
   * @example
   * true
   */
  systemCopy?: boolean;
  /**
   * @remarks
   * Indicates whether a catalog backup is used to restore the database. This parameter is returned only if the value of the Mode parameter is **RECOVERY_TO_SPECIFIC_BACKUP**. If the return value is false, Cloud Backup finds the backup file based on the specified prefix and then restores the backup file.
   * 
   * @example
   * false
   */
  useCatalog?: boolean;
  /**
   * @remarks
   * Indicates whether a differential backup or an incremental backup is used to restore the database. Valid values: true and false. If the return value is true, Cloud Backup uses a differential backup or an incremental backup to restore the database. If the return value is false, Cloud Backup uses a log backup to restore the database.
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
   * v-000g9acf******gta
   */
  vaultId?: string;
  /**
   * @remarks
   * The ID of the volume that is restored. This parameter is returned only if the value of the Mode parameter is **RECOVERY_TO_LOG_POSITION**.
   * 
   * @example
   * 0
   */
  volumeId?: number;
  static names(): { [key: string]: string } {
    return {
      backupID: 'BackupID',
      backupPrefix: 'BackupPrefix',
      checkAccess: 'CheckAccess',
      clearLog: 'ClearLog',
      clusterId: 'ClusterId',
      currentPhase: 'CurrentPhase',
      currentProgress: 'CurrentProgress',
      databaseName: 'DatabaseName',
      databaseRestoreId: 'DatabaseRestoreId',
      endTime: 'EndTime',
      logPosition: 'LogPosition',
      maxPhase: 'MaxPhase',
      maxProgress: 'MaxProgress',
      message: 'Message',
      mode: 'Mode',
      phase: 'Phase',
      reachedTime: 'ReachedTime',
      recoveryPointInTime: 'RecoveryPointInTime',
      restoreId: 'RestoreId',
      source: 'Source',
      sourceClusterId: 'SourceClusterId',
      startTime: 'StartTime',
      state: 'State',
      status: 'Status',
      systemCopy: 'SystemCopy',
      useCatalog: 'UseCatalog',
      useDelta: 'UseDelta',
      vaultId: 'VaultId',
      volumeId: 'VolumeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupID: 'number',
      backupPrefix: 'string',
      checkAccess: 'boolean',
      clearLog: 'boolean',
      clusterId: 'string',
      currentPhase: 'number',
      currentProgress: 'number',
      databaseName: 'string',
      databaseRestoreId: 'number',
      endTime: 'number',
      logPosition: 'number',
      maxPhase: 'number',
      maxProgress: 'number',
      message: 'string',
      mode: 'string',
      phase: 'string',
      reachedTime: 'number',
      recoveryPointInTime: 'number',
      restoreId: 'string',
      source: 'string',
      sourceClusterId: 'string',
      startTime: 'number',
      state: 'string',
      status: 'string',
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

export class DescribeHanaRestoresResponseBodyHanaRestore extends $dara.Model {
  hanaRestores?: DescribeHanaRestoresResponseBodyHanaRestoreHanaRestores[];
  static names(): { [key: string]: string } {
    return {
      hanaRestores: 'HanaRestores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hanaRestores: { 'type': 'array', 'itemType': DescribeHanaRestoresResponseBodyHanaRestoreHanaRestores },
    };
  }

  validate() {
    if(Array.isArray(this.hanaRestores)) {
      $dara.Model.validateArray(this.hanaRestores);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaRestoresResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about restore jobs.
   */
  hanaRestore?: DescribeHanaRestoresResponseBodyHanaRestore;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7DEFC897-8F05-5C05-912C-C9A9510FBFF1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 19
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hanaRestore: 'HanaRestore',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hanaRestore: DescribeHanaRestoresResponseBodyHanaRestore,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.hanaRestore && typeof (this.hanaRestore as any).validate === 'function') {
      (this.hanaRestore as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

