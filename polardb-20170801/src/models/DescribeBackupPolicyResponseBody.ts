// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backup frequency. Default value: Normal. Valid values:
   * 
   * *   **Normal**: standard backup. The system backs up data once a day.
   * *   **2/24H**: enhanced backup. The system backs up data every 2 hours.
   * *   **3/24H**: enhanced backup. The system backs up data every 3 hours.
   * *   **4/24H**: enhanced backup. The system backs up data every 4 hours.
   * 
   * > - If enhanced backup is enabled, all backups are retained for 24 hours. Backups are automatically deleted when the retention period ends. However, the system permanently retains the first backup that is created after 00:00 every day.
   * >-  If enhanced backup is enabled, **PreferredBackupPeriod** is automatically set to all days in a week (from Monday to Sunday).
   * 
   * @example
   * Normal
   */
  backupFrequency?: string;
  /**
   * @remarks
   * Indicates whether backups are retained when you delete a cluster. Valid values:
   * 
   * *   **ALL**: permanently retains all backups.
   * *   **LATEST**: permanently retains the most recent backup.
   * *   **NONE**: does not retain backups.
   * 
   * @example
   * NONE
   */
  backupRetentionPolicyOnClusterDeletion?: string;
  /**
   * @remarks
   * The backup frequency of level-1 backups. Default value: Normal. Valid values:
   * 
   * *   **Normal**: standard backup. The system backs up data once a day.
   * *   **2/24H**: frequent backup. The system backs up data every 2 hours.
   * *   **3/24H**: frequent backup. The system backs up data every 3 hours.
   * *   **4/24H**: frequent backup. The system backs up data every 4 hours.
   * 
   * >- This parameter is not supported for PolarDB for PostgreSQL (Compatible with Oracle) clusters or PolarDB for PostgreSQL clusters.
   * >- This parameter is unavailable if the region where your PolarDB for MySQL cluster is deployed does not support the cross-region backup feature. For information about regions that support the cross-region backup feature, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * 
   * @example
   * Normal
   */
  dataLevel1BackupFrequency?: string;
  /**
   * @remarks
   * The backup cycle of level-1 backups. Valid values:
   * 
   * *   **Monday**
   * *   **Tuesday**
   * *   **Wednesday**
   * *   **Thursday**
   * *   **Friday**
   * *   **Saturday**
   * *   **Sunday**
   * 
   * >- You need to specify at least two values. Separate multiple values with commas (,).
   * >- This parameter is not supported for PolarDB for PostgreSQL (Compatible with Oracle) clusters or PolarDB for PostgreSQL clusters.
   * >- This parameter is unavailable if the region where your PolarDB for MySQL cluster is deployed does not support the cross-region backup feature. For information about regions that support the cross-region backup feature, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * 
   * @example
   * Monday,Tuesday
   */
  dataLevel1BackupPeriod?: string;
  /**
   * @remarks
   * The retention period of level-1 backups. Valid values: 3 to 14. Unit: day.
   * 
   * @example
   * 7
   */
  dataLevel1BackupRetentionPeriod?: string;
  /**
   * @remarks
   * The period of time during which automatic backup is performed. The value must be in the `hh:mmZ-hh:mmZ` format. The time must be in UTC. The start time and the end time must be on the hour and must have an interval of 1 hour. Example: `14:00Z-15:00Z`.
   * 
   * >- This parameter is not supported for PolarDB for PostgreSQL (Compatible with Oracle) clusters or PolarDB for PostgreSQL clusters.
   * >- This parameter is unavailable if the region where your PolarDB for MySQL cluster is deployed does not support the cross-region backup feature. For information about regions that support the cross-region backup feature, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * 
   * @example
   * 15:00Z-16:00Z
   */
  dataLevel1BackupTime?: string;
  /**
   * @remarks
   * The region where the cross-region level-2 backup is stored. For information about regions that support the cross-region backup feature, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * 
   * @example
   * cn-hangzhou
   */
  dataLevel2BackupAnotherRegionRegion?: string;
  /**
   * @remarks
   * The retention period of cross-region level-2 backups. Valid values:
   * 
   * *   **0**: The cross-region level-2 backup feature is disabled.
   * *   **30 to 7300**: Cross-region level-2 backups are retained for 30 to 7,300 days.
   * *   **1**: Cross-region level-2 backups are retained for a long period of time.
   * 
   * >  The default value of the parameter is **0**.
   * 
   * @example
   * 30
   */
  dataLevel2BackupAnotherRegionRetentionPeriod?: string;
  /**
   * @remarks
   * The backup cycle of level-2 backups. Valid values:
   * 
   * *   **Monday**
   * *   **Tuesday**
   * *   **Wednesday**
   * *   **Thursday**
   * *   **Friday**
   * *   **Saturday**
   * *   **Sunday**
   * 
   * >- You need to specify at least two values. Separate multiple values with commas (,).
   * >- This parameter is not supported for PolarDB for PostgreSQL (Compatible with Oracle) clusters or PolarDB for PostgreSQL clusters.
   * >- This parameter is unavailable if the region where your PolarDB for MySQL cluster is deployed does not support the cross-region backup feature. For information about regions that support the cross-region backup feature, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * 
   * @example
   * Monday,Tuesday
   */
  dataLevel2BackupPeriod?: string;
  /**
   * @remarks
   * The retention period of level-2 backups. Valid values:
   * 
   * *   0: The level-2 backup feature is disabled.
   * *   30 to 7300: Level-2 backups are retained for 30 to 7,300 days.
   * *   \\-1: Level-2 backups are retained for a long period of time.
   * 
   * >  The default value of this parameter is **0**.
   * 
   * @example
   * 0
   */
  dataLevel2BackupRetentionPeriod?: string;
  /**
   * @remarks
   * The backup cycle. Valid values:
   * 
   * *   Monday
   * *   Tuesday
   * *   Wednesday
   * *   Thursday
   * *   Friday
   * *   Saturday
   * *   Sunday
   * 
   * @example
   * Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The time period when automatic backups are performed. The format is `HH:mmZ-HH:mmZ`. The time is displayed in UTC.
   * 
   * @example
   * 07:00Z-08:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The time when the next automatic backup will be performed. The format is `YYYY-MM-DDThh:mmZ`. The time is displayed in UTC.
   * 
   * @example
   * 2020-11-16T07:30Z
   */
  preferredNextBackupTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EADFCE0F-9FB5-4685-B395-1440B******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupFrequency: 'BackupFrequency',
      backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
      dataLevel1BackupFrequency: 'DataLevel1BackupFrequency',
      dataLevel1BackupPeriod: 'DataLevel1BackupPeriod',
      dataLevel1BackupRetentionPeriod: 'DataLevel1BackupRetentionPeriod',
      dataLevel1BackupTime: 'DataLevel1BackupTime',
      dataLevel2BackupAnotherRegionRegion: 'DataLevel2BackupAnotherRegionRegion',
      dataLevel2BackupAnotherRegionRetentionPeriod: 'DataLevel2BackupAnotherRegionRetentionPeriod',
      dataLevel2BackupPeriod: 'DataLevel2BackupPeriod',
      dataLevel2BackupRetentionPeriod: 'DataLevel2BackupRetentionPeriod',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      preferredNextBackupTime: 'PreferredNextBackupTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupFrequency: 'string',
      backupRetentionPolicyOnClusterDeletion: 'string',
      dataLevel1BackupFrequency: 'string',
      dataLevel1BackupPeriod: 'string',
      dataLevel1BackupRetentionPeriod: 'string',
      dataLevel1BackupTime: 'string',
      dataLevel2BackupAnotherRegionRegion: 'string',
      dataLevel2BackupAnotherRegionRetentionPeriod: 'string',
      dataLevel2BackupPeriod: 'string',
      dataLevel2BackupRetentionPeriod: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      preferredNextBackupTime: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

