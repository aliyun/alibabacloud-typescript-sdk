// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced backup policy.
   * > *  * This parameter is not supported by PolarDB for PostgreSQL (Compatible with Oracle) and PolarDB for PostgreSQL.
   * > * * This parameter is supported only by clusters whose BackupPolicyLevel is set to Advanced.
   */
  advancedDataPoliciesShrink?: string;
  /**
   * @remarks
   * The backup frequency. Valid values:
   * 
   * - **Normal** (default): standard backup, performed once a day at a scheduled time.
   * - **2/24H**: high-frequency backup, performed once every 2 hours.
   * - **3/24H**: high-frequency backup, performed once every 3 hours.
   * - **4/24H**: high-frequency backup, performed once every 4 hours.
   * 
   * > * * After high-frequency backup is enabled, all backups completed within 24 hours are retained. For backups that exceed 24 hours, the system retains only the first backup completed after 00:00 each day and deletes the rest.
   * > * * After high-frequency backup is enabled, all days of the week (Monday to Sunday) are selected by default for the backup epoch **PreferredBackupPeriod** parameter.
   * > *  * This parameter is not supported if the region where your PolarDB for MySQL cluster resides supports the cross-region backup feature. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * > * * After advanced backup is enabled, this parameter no longer takes effect. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * Normal
   */
  backupFrequency?: string;
  /**
   * @remarks
   * The level of the backup policy. Valid values:
   * * **Normal**: standard backup
   * * **Advanced**: advanced backup
   * > *  * This parameter is not supported by PolarDB for PostgreSQL (Compatible with Oracle) and PolarDB for PostgreSQL.
   * > * * You can check the AdvancedPolicyOption parameter in the response of the [DescribeBackupPolicy](https://help.aliyun.com/document_detail/2319231.html) operation to determine whether the cluster supports advanced backup. If the cluster supports advanced backup, you can apply for this feature in [Advanced backup settings](~611727~~).
   * > * * After advanced backup is enabled, you **cannot** roll back to standard backup.
   * 
   * @example
   * Normal
   */
  backupPolicyLevel?: string;
  /**
   * @remarks
   * Specifies whether to retain backups when a cluster is deleted. Valid values:
   * 
   * - **ALL**: long-term retention (LTR) of all backups.
   * 
   * - **LATEST**: long-term retention (LTR) of the last backup.
   * 
   * - **NONE**: does not retain backup sets.
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
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query all clusters in a specific region, including their cluster IDs.
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
   * - **Normal** (default): standard backup, performed once a day at a scheduled time
   * - **2/24H**: high-frequency backup, performed once every 2 hours
   * - **3/24H**: high-frequency backup, performed once every 3 hours
   * - **4/24H**: high-frequency backup, performed once every 4 hours
   * 
   * > * * This parameter is not supported by PolarDB for PostgreSQL (Compatible with Oracle) and PolarDB for PostgreSQL.
   * > * * This parameter is not supported if the region where your PolarDB for MySQL cluster resides does not support cross-region backup. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * > * * After advanced backup is enabled, this parameter no longer takes effect. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * Normal
   */
  dataLevel1BackupFrequency?: string;
  /**
   * @remarks
   * The backup cycle for level-1 backups. Valid values: 
   * * **Monday**: Monday
   * * **Tuesday**: Tuesday
   * * **Wednesday**: Wednesday
   * * **Thursday**: Thursday
   * * **Friday**: Friday
   * * **Saturday**: Saturday
   * * **Sunday**: Sunday
   * 
   * > * * You must select at least two days. Separate multiple values with commas (,).
   * > * * This parameter is not supported by PolarDB for PostgreSQL (Compatible with Oracle) and PolarDB for PostgreSQL.
   * > * * This parameter is not supported if the region where your PolarDB for MySQL cluster resides does not support cross-region backup. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
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
   * The time period during which automatic backups are performed. The time must be in the `hh:mmZ-hh:mmZ` format (UTC time) and must be on the hour with a 1-hour interval, such as `14:00Z-15:00Z`.
   * 
   * > * This parameter is not supported by PolarDB for PostgreSQL (Compatible with Oracle) and PolarDB for PostgreSQL.
   * > * This parameter is not supported if the region where your PolarDB for MySQL cluster resides does not support cross-region backup. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * 
   * @example
   * 15:00Z-16:00Z
   */
  dataLevel1BackupTime?: string;
  /**
   * @remarks
   * The destination region for cross-region backup of level-2 backups. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * > * After advanced backup is enabled, this parameter no longer takes effect. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * cn-hangzhou
   */
  dataLevel2BackupAnotherRegionRegion?: string;
  /**
   * @remarks
   * The retention epoch for cross-region backup of level-2 backups. Valid values:
   * 
   * - **0**: shutdown of the level-2 backup feature.
   * 
   * - **30 to 7300**: the retention epoch of level-2 backups, in days.
   * 
   * - **-1**: long-term retention (LTR) of level-2 backups.
   * 
   *  > * * When a cluster is created, the default value is **0**, which indicates the shutdown of the cross-region backup feature for level-2 backups.
   * > * * After advanced backup is enabled, this parameter no longer takes effect. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * 30
   */
  dataLevel2BackupAnotherRegionRetentionPeriod?: string;
  /**
   * @remarks
   * The backup cycle for level-2 backups. Valid values: 
   * * **Monday**: Monday
   * * **Tuesday**: Tuesday
   * * **Wednesday**: Wednesday
   * * **Thursday**: Thursday
   * * **Friday**: Friday
   * * **Saturday**: Saturday
   * * **Sunday**: Sunday
   * 
   * > * * You must select at least two days. Separate multiple values with commas (,).
   * > * * This parameter is not supported by PolarDB for PostgreSQL (Compatible with Oracle) and PolarDB for PostgreSQL.
   * > * * This parameter is not supported if the region where your PolarDB for MySQL cluster resides does not support cross-region backup. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * > * * After advanced backup is enabled, this parameter no longer takes effect. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * Monday,Tuesday
   */
  dataLevel2BackupPeriod?: string;
  /**
   * @remarks
   * The retention epoch of level-2 backups. Valid values:
   * 
   * - **0**: shutdown of the level-2 backup feature.
   * 
   * - **30 to 7300**: the retention epoch of level-2 backups, in days.
   * 
   * - **-1**: long-term retention (LTR) of level-2 backups.
   * 
   *  >* * When a cluster is created, the default value is **0**, which indicates the shutdown of the level-2 backup feature.
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
   * * **Monday**: Monday
   * * **Tuesday**: Tuesday
   * * **Wednesday**: Wednesday
   * * **Thursday**: Thursday
   * * **Friday**: Friday
   * * **Saturday**: Saturday
   * * **Sunday**: Sunday
   * 
   * > * * You must select at least two days. Separate multiple values with commas (,).
   * > * * This parameter is not supported if the region where your PolarDB for MySQL cluster resides supports cross-region backup. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * > * * After advanced backup is enabled, this parameter no longer takes effect. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * Monday,Tuesday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The time period during which automatic backups are performed. The time must be in the `hh:mmZ-hh:mmZ` format (UTC time) and must be on the hour with a 1-hour interval, such as `14:00Z-15:00Z`.
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

