// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHanaBackupsAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-00098******yuqvu
   */
  clusterId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * BPD
   */
  databaseName?: string;
  /**
   * @remarks
   * Specifies whether to include differential backups in the query results. Valid values:
   * 
   * *   true: includes differential backups.
   * *   false: excludes differential backups.
   * 
   * @example
   * false
   */
  includeDifferential?: boolean;
  /**
   * @remarks
   * Specifies whether to include incremental backups in the query results. Valid values:
   * 
   * *   true: includes incremental backups.
   * *   false: excludes incremental backups.
   * 
   * @example
   * true
   */
  includeIncremental?: boolean;
  /**
   * @remarks
   * Specifies whether to include log backups in the query results. Valid values:
   * 
   * *   true: includes log backups.
   * *   false: excludes log backups.
   * 
   * @example
   * true
   */
  includeLog?: boolean;
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
   * The recovery mode. Valid values:
   * 
   * *   **RECOVERY_TO_MOST_RECENT**: restores the database to the recently available state to which the database has been backed up.
   * *   **RECOVERY_TO_POINT_IN_TIME**: restores the database to a specified point in time.
   * *   **RECOVERY_TO_SPECIFIC_BACKUP**: restores the database to a specified backup.
   * *   **RECOVERY_TO_LOG_POSITION**: restores the database to a specified log position.
   * 
   * @example
   * RECOVERY_TO_SPECIFIC_BACKUP
   */
  mode?: string;
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
   * The point in time to which you want to restore the database. This parameter is valid only if you set the Mode parameter to **RECOVERY_TO_POINT_IN_TIME**. Cloud Backup restores the database to a state closest to the specified point in time.
   * 
   * @example
   * 1649851200
   */
  recoveryPointInTime?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmz7mced2ldhy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the source system. This parameter specifies the name of the source database that you want to restore. You must set the parameter in the `<Source database name>@SID` format.
   * 
   * @example
   * P01@HP1
   */
  source?: string;
  /**
   * @remarks
   * The ID of the source SAP HANA instance.
   * 
   * @example
   * cl-0000g3m******5cj
   */
  sourceClusterId?: string;
  /**
   * @remarks
   * Specifies whether to restore the database to a different instance.
   * 
   * *   true: restores the database to a different instance.
   * *   false: restores the database within the same instance.
   * 
   * @example
   * true
   */
  systemCopy?: boolean;
  /**
   * @remarks
   * Specifies whether Backint is used. Valid values:
   * 
   * *   true: Backint is used.
   * *   false: Backint is not used.
   * 
   * @example
   * false
   */
  useBackint?: boolean;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-000270c******pi81
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
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      includeDifferential: 'IncludeDifferential',
      includeIncremental: 'IncludeIncremental',
      includeLog: 'IncludeLog',
      logPosition: 'LogPosition',
      mode: 'Mode',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recoveryPointInTime: 'RecoveryPointInTime',
      resourceGroupId: 'ResourceGroupId',
      source: 'Source',
      sourceClusterId: 'SourceClusterId',
      systemCopy: 'SystemCopy',
      useBackint: 'UseBackint',
      vaultId: 'VaultId',
      volumeId: 'VolumeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      includeDifferential: 'boolean',
      includeIncremental: 'boolean',
      includeLog: 'boolean',
      logPosition: 'number',
      mode: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      recoveryPointInTime: 'number',
      resourceGroupId: 'string',
      source: 'string',
      sourceClusterId: 'string',
      systemCopy: 'boolean',
      useBackint: 'boolean',
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

