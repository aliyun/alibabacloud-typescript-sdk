// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyShrinkRequest extends $dara.Model {
  advancedDataPoliciesShrink?: string;
  /**
   * @remarks
   * The backup frequency. Default value: Normal. Valid values:
   * 
   * *   **Normal**: standard backup. The system backs up data once a day.
   * *   **2/24H**: enhanced backup. The system backs up data every 2 hours.
   * *   **3/24H**: enhanced backup. The system backs up data every 3 hours.
   * *   **4/24H**: enhanced backup. The system backs up data every 4 hours.
   * 
   * >- If you enable enhanced backup, all backups are retained for 24 hours. For backup files that are created earlier than the previous 24 hours, the system permanently retains only the first backup that is created after 00:00 every day and deletes the rest.
   * >- If you enable enhanced backup, **PreferredBackupPeriod** is automatically set to all days in a week (from Monday to Sunday).
   * >- This parameter is invalid if the region where your PolarDB for MySQL cluster is deployed supports the cross-region backup feature. For information about the regions that support the cross-region backup feature, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * 
   * @example
   * Normal
   */
  backupFrequency?: string;
  backupPolicyLevel?: string;
  /**
   * @remarks
   * Specifies whether to retain backups when a cluster is deleted. Valid values:
   * 
   * *   **ALL**: permanently retains all backups.
   * *   **LATEST**: permanently retains the most recent backup.
   * *   **NONE**: does not retain backups.
   * 
   * >  The default value of the parameter is NONE.
   * 
   * @example
   * NONE
   */
  backupRetentionPolicyOnClusterDeletion?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query information about all clusters that are deployed in a specified region, such as the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp13wz9586voc****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The frequency of level-1 backups. Default value: Normal. Valid values:
   * 
   * *   **Normal**: standard backup. The system backs up data once a day.
   * *   **2/24H**: enhanced backup. The system backs up data every 2 hours.
   * *   **3/24H**: enhanced backup. The system backs up data every 3 hours.
   * *   **4/24H**: enhanced backup. The system backs up data every 4 hours.
   * 
   * >- This parameter is invalid for PolarDB for Oracle clusters or PolarDB for PostgreSQL clusters.
   * >- This parameter is invalid if the region where your PolarDB for MySQL cluster is deployed does not support the cross-region backup feature. For information about the regions that support the cross-region backup feature, see [Overview](https://help.aliyun.com/document_detail/72672.html).
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
   * >- This parameter is invalid for PolarDB for Oracle clusters or PolarDB for PostgreSQL clusters.
   * >- This parameter is invalid if the region where your PolarDB for MySQL cluster is deployed does not support the cross-region backup feature. For information about the regions that support the cross-region backup feature, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * 
   * @example
   * Monday,Tuesday
   */
  dataLevel1BackupPeriod?: string;
  /**
   * @remarks
   * The retention period of level-1 backups. Valid values: 3 to 14. Unit: days.
   * 
   * @example
   * 3
   */
  dataLevel1BackupRetentionPeriod?: string;
  /**
   * @remarks
   * The time period during which automatic backup for level-1 backup is performed. The time period is in the `hh:mmZ-hh:mmZ` format and is displayed in UTC. The start time and end time are on the hour and have an interval of 1 hour. Example: `14:00Z-15:00Z`.
   * >- This parameter is invalid for PolarDB for Oracle clusters or PolarDB for PostgreSQL clusters.
   * >- This parameter is invalid if the region where your PolarDB for MySQL cluster is deployed does not support the cross-region backup feature. For information about the regions that support the cross-region backup feature, see [Overview](https://help.aliyun.com/document_detail/72672.html).
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
   * *   **1**: Cross-region level-2 backups are permanently retained.
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
   * >- This parameter is invalid for PolarDB for Oracle clusters or PolarDB for PostgreSQL clusters.
   * >- This parameter is invalid if the region where your PolarDB for MySQL cluster is deployed does not support the cross-region backup feature. For information about the regions that support the cross-region backup feature, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * 
   * @example
   * Monday,Tuesday
   */
  dataLevel2BackupPeriod?: string;
  /**
   * @remarks
   * The retention period of level-2 backups. Valid values:
   * 
   * *   **0**: The level-2 backup feature is disabled.
   * *   **30 to 7300**: Level-2 backups are retained for 30 to 7,300 days.
   * *   **1**: Level-2 backups are permanently retained.
   * 
   * >  The default value of this parameter is **0**.
   * 
   * @example
   * 0
   */
  dataLevel2BackupRetentionPeriod?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The backup cycle. Valid values:
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
   * >- This parameter is invalid if the region where your PolarDB for MySQL cluster is deployed supports the cross-region backup feature. For information about the regions that support the cross-region backup feature, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * 
   * @example
   * Monday,Tuesday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The time period during which automatic backup for level-1 backup is performed. The format is `hh:mmZ-hh:mmZ` format. The time is displayed in UTC. The start time and end time are on the hour and with an interval of one hour. Example: `14:00Z-15:00Z`.
   * 
   * @example
   * 15:00Z-16:00Z
   */
  preferredBackupTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      advancedDataPoliciesShrink: 'AdvancedDataPolicies',
      backupFrequency: 'BackupFrequency',
      backupPolicyLevel: 'BackupPolicyLevel',
      backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
      DBClusterId: 'DBClusterId',
      dataLevel1BackupFrequency: 'DataLevel1BackupFrequency',
      dataLevel1BackupPeriod: 'DataLevel1BackupPeriod',
      dataLevel1BackupRetentionPeriod: 'DataLevel1BackupRetentionPeriod',
      dataLevel1BackupTime: 'DataLevel1BackupTime',
      dataLevel2BackupAnotherRegionRegion: 'DataLevel2BackupAnotherRegionRegion',
      dataLevel2BackupAnotherRegionRetentionPeriod: 'DataLevel2BackupAnotherRegionRetentionPeriod',
      dataLevel2BackupPeriod: 'DataLevel2BackupPeriod',
      dataLevel2BackupRetentionPeriod: 'DataLevel2BackupRetentionPeriod',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedDataPoliciesShrink: 'string',
      backupFrequency: 'string',
      backupPolicyLevel: 'string',
      backupRetentionPolicyOnClusterDeletion: 'string',
      DBClusterId: 'string',
      dataLevel1BackupFrequency: 'string',
      dataLevel1BackupPeriod: 'string',
      dataLevel1BackupRetentionPeriod: 'string',
      dataLevel1BackupTime: 'string',
      dataLevel2BackupAnotherRegionRegion: 'string',
      dataLevel2BackupAnotherRegionRetentionPeriod: 'string',
      dataLevel2BackupPeriod: 'string',
      dataLevel2BackupRetentionPeriod: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

