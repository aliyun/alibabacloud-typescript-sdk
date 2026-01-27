// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupDataListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 213064****
   */
  backupId?: string;
  /**
   * @remarks
   * The backup method. Valid values:
   * 
   * *   **Physical**
   * *   **Logical**
   * *   **Snapshot**
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
   * Automated
   */
  backupMode?: string;
  /**
   * @remarks
   * The backup scale. Valid values:
   * 
   * *   **DBInstance**
   * *   **DBTable**
   * 
   * @example
   * DBInstance
   */
  backupScale?: string;
  /**
   * @remarks
   * The status of the backup set. Valid values:
   * 
   * *   **OK**: The backup succeeded.
   * *   **ERROR**: The backup failed.
   * 
   * @example
   * OK
   */
  backupStatus?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * *   **FullBackup**
   * *   **IncrementBackup**
   * 
   * @example
   * FullBackup
   */
  backupType?: string;
  /**
   * @remarks
   * This is a reserved parameter.
   * 
   * @example
   * test****
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. The time follows the yyyy-MM-ddTHH:mm:ssZ format and is displayed in UTC.
   * 
   * @example
   * 2024-04-17T17:00:32Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether the cluster is deleted. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  instanceIsDeleted?: boolean;
  /**
   * @remarks
   * The ID of the PolarDB for MySQL cluster.
   * 
   * @example
   * pc-2ze3nrr64c5******
   */
  instanceName?: string;
  /**
   * @remarks
   * The region in which the original cluster resides.
   * 
   * @example
   * cn-hangzhou
   */
  instanceRegion?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the INTEGER data type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the backup set resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionCode?: string;
  /**
   * @remarks
   * The type of the backup scenario. Set the value to **LEVEL_1**, which indicates the level-1 backup of the region in which the PolarDB for MySQL cluster resides.
   * 
   * @example
   * LEVEL_1
   */
  sceneType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2024-04-17T17:00:16Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      backupMethod: 'BackupMethod',
      backupMode: 'BackupMode',
      backupScale: 'BackupScale',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      dataSourceId: 'DataSourceId',
      endTime: 'EndTime',
      instanceIsDeleted: 'InstanceIsDeleted',
      instanceName: 'InstanceName',
      instanceRegion: 'InstanceRegion',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionCode: 'RegionCode',
      sceneType: 'SceneType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      backupMethod: 'string',
      backupMode: 'string',
      backupScale: 'string',
      backupStatus: 'string',
      backupType: 'string',
      dataSourceId: 'string',
      endTime: 'string',
      instanceIsDeleted: 'boolean',
      instanceName: 'string',
      instanceRegion: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionCode: 'string',
      sceneType: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

