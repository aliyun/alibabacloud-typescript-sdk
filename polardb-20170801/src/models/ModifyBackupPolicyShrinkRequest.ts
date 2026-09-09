// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced backup policy.
   * > * * PolarDB for PostgreSQL (Compatible with Oracle) and PolarDB for PostgreSQL do not support this parameter.
   * > * * Only clusters with BackupPolicyLevel set to Advanced support this parameter.
   */
  advancedDataPoliciesShrink?: string;
  /**
   * @remarks
   * The backup frequency. Valid values:
   * 
   * - **Normal** (default): regular backup. Automatic backup is performed once a day at a scheduled time.
   * - **2/24H**: high-frequency backup. Backup is performed every 2 hours.
   * - **3/24H**: high-frequency backup. Backup is performed every 3 hours.
   * - **4/24H**: high-frequency backup. Backup is performed every 4 hours.
   * 
   * > * * After high-frequency backup is enabled, all backups completed within 24 hours are retained. For backups older than 24 hours, only the first backup completed after 00:00 each day is retained, and all others are deleted.
   * > * * After high-frequency backup is enabled, the backup cycle parameter PreferredBackupPeriod defaults to all days of the week (Monday through Sunday).
   * > * * If the region of your PolarDB for MySQL cluster supports the cross-region backup feature, this parameter is not supported. For regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * > * * After advanced backup is enabled, this parameter no longer takes effect. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * Normal
   */
  backupFrequency?: string;
  /**
   * @remarks
   * The backup policy level. Valid values:
   * * **Normal**: regular backup.
   * * **Advanced**: advanced backup.
   * > * * PolarDB for PostgreSQL (Compatible with Oracle) and PolarDB for PostgreSQL do not support this parameter.
   * > * * You can check the AdvancedPolicyOption response parameter of the [DescribeBackupPolicy](https://help.aliyun.com/document_detail/2319231.html) operation to determine whether the cluster supports advanced backup. If the cluster supports advanced backup, you can apply to use this feature through [Advanced backup settings](~611727~~).
   * > * * After advanced backup is enabled, rollback to regular backup is **not supported**.
   * 
   * @example
   * Normal
   */
  backupPolicyLevel?: string;
  /**
   * @remarks
   * Specifies whether to retain backups when the cluster is deleted. Valid values:
   * 
   * - **ALL**: Long-term retention (LTR) of all backups.
   * 
   * - **LATEST**: Long-term retention (LTR) of only the last backup.
   * 
   * - **NONE**: Does not retain any backups.
   * 
   * > Default value: NONE.
   * 
   * @example
   * NONE
   */
  backupRetentionPolicyOnClusterDeletion?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query information about all clusters in a specific region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp13wz9586voc****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The backup frequency. Valid values:
   * 
   * - **Normal** (default): regular backup. Automatic backup is performed once a day at a scheduled time.
   * - **2/24H**: high-frequency backup. Backup is performed every 2 hours.
   * - **3/24H**: high-frequency backup. Backup is performed every 3 hours.
   * - **4/24H**: high-frequency backup. Backup is performed every 4 hours.
   * 
   * > * * PolarDB for PostgreSQL (Compatible with Oracle) and PolarDB for PostgreSQL do not support this parameter.
   * > * * If the region of your PolarDB for MySQL cluster does not support the cross-region backup feature, this parameter is not supported. For regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * > * * After advanced backup is enabled, this parameter no longer takes effect. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * Normal
   */
  dataLevel1BackupFrequency?: string;
  /**
   * @remarks
   * The level-1 backup cycle. Valid values: 
   * * **Monday**
   * * **Tuesday**
   * * **Wednesday**
   * * **Thursday**
   * * **Friday**
   * * **Saturday**
   * * **Sunday**
   * 
   * > * * Select at least 2 days. Separate multiple values with commas (,).
   * > * * PolarDB for PostgreSQL (Compatible with Oracle) and PolarDB for PostgreSQL do not support this parameter.
   * > * * If the region of your PolarDB for MySQL cluster does not support the cross-region backup feature, this parameter is not supported. For regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * > * * After advanced backup is enabled, this parameter no longer takes effect. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * Monday,Tuesday
   */
  dataLevel1BackupPeriod?: string;
  /**
   * @remarks
   * The retention period of level-1 backups. Valid values: 3 to 14. Unit: days.
   * 
   * > * After advanced backup is enabled, this parameter no longer takes effect. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * 3
   */
  dataLevel1BackupRetentionPeriod?: string;
  /**
   * @remarks
   * The time period during which automatic backup is performed. Specify the time period in the `hh:mmZ-hh:mmZ` format in UTC. The values must be on the hour with an interval of 1 hour, such as `14:00Z-15:00Z`.
   * 
   * > * PolarDB for PostgreSQL (Compatible with Oracle) and PolarDB for PostgreSQL do not support this parameter.
   * > * If the region of your PolarDB for MySQL cluster does not support the cross-region backup feature, this parameter is not supported. For regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * 
   * @example
   * 15:00Z-16:00Z
   */
  dataLevel1BackupTime?: string;
  /**
   * @remarks
   * The destination region for cross-region level-2 backups. For regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * > * After advanced backup is enabled, this parameter no longer takes effect. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * cn-hangzhou
   */
  dataLevel2BackupAnotherRegionRegion?: string;
  /**
   * @remarks
   * The retention period of cross-region backups for level-2 backups. Valid values:
   * 
   * - **0**: Disables the level-2 cross-region backup feature.
   * 
   * - **30 to 7300**: The retention period of level-2 backups. Unit: days.
   * 
   * - **-1**: Long-term retention (LTR) of level-2 backups.
   * 
   *  > * * When a cluster is created, the default value is **0**, which means the level-2 cross-region backup feature is disabled.
   * > * * After advanced backup is enabled, this parameter no longer takes effect. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * 30
   */
  dataLevel2BackupAnotherRegionRetentionPeriod?: string;
  /**
   * @remarks
   * The level-2 backup cycle. Valid values: 
   * * **Monday**
   * * **Tuesday**
   * * **Wednesday**
   * * **Thursday**
   * * **Friday**
   * * **Saturday**
   * * **Sunday**
   * 
   * > * * Select at least 2 days. Separate multiple values with commas (,).
   * > * * PolarDB for PostgreSQL (Compatible with Oracle) and PolarDB for PostgreSQL do not support this parameter.
   * > * * If the region of your PolarDB for MySQL cluster does not support the cross-region backup feature, this parameter is not supported. For regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * > * * After advanced backup is enabled, this parameter no longer takes effect. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * Monday,Tuesday
   */
  dataLevel2BackupPeriod?: string;
  /**
   * @remarks
   * The retention period of level-2 backups. Valid values:
   * 
   * - **0**: Disables the level-2 backup feature.
   * 
   * - **30 to 7300**: The retention period of level-2 backups. Unit: days.
   * 
   * - **-1**: Long-term retention (LTR) of level-2 backups.
   * 
   *  > * * When a cluster is created, the default value is **0**, which means the level-2 backup feature is disabled.
   * > * * After advanced backup is enabled, this parameter no longer takes effect. Use the AdvancedDataPolicies parameter instead.
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
   * * **Monday**
   * * **Tuesday**
   * * **Wednesday**
   * * **Thursday**
   * * **Friday**
   * * **Saturday**
   * * **Sunday**
   * 
   * > * * Select at least 2 days. Separate multiple values with commas (,).
   * > * * If the region of your PolarDB for MySQL cluster supports the cross-region backup feature, this parameter is not supported. For regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * > * * After advanced backup is enabled, this parameter no longer takes effect. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * Monday,Tuesday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The time period during which automatic backup is performed. Specify the time period in the `hh:mmZ-hh:mmZ` format in UTC. The values must be on the hour with an interval of 1 hour, such as `14:00Z-15:00Z`.
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

