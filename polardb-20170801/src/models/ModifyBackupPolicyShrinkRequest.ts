// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced backup policies.
   * 
   * > - - This parameter is not supported for PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
   * >
   * > - - This parameter is supported only for clusters for which `BackupPolicyLevel` is set to `Advanced`.
   */
  advancedDataPoliciesShrink?: string;
  /**
   * @remarks
   * The backup frequency. Valid values:
   * 
   * - **Normal** (default): standard backup. The cluster is backed up once a day.
   * 
   * - **2/24H**: high-frequency backup. The cluster is backed up every 2 hours.
   * 
   * - **3/24H**: high-frequency backup. The cluster is backed up every 3 hours.
   * 
   * - **4/24H**: high-frequency backup. The cluster is backed up every 4 hours.
   * 
   * > * * If you enable high-frequency backup, all backups completed within the last 24 hours are retained. For backups older than 24 hours, the system retains only the first backup completed after 00:00 each day and deletes the rest.
   * >
   * > * - If you enable high-frequency backup, the **PreferredBackupPeriod** parameter is automatically set to all days of the week (from Monday to Sunday).
   * >
   * > * - This parameter is not supported if your PolarDB for MySQL cluster is in a region that supports the cross-region backup feature. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * >
   * > * - After you enable advanced backup, this parameter is no longer effective. Use the `AdvancedDataPolicies` parameter instead.
   * 
   * @example
   * Normal
   */
  backupFrequency?: string;
  /**
   * @remarks
   * The level of the backup policy. Valid values:
   * 
   * - **Normal**: standard backup
   * 
   * - **Advanced**: advanced backup
   * 
   * > * * This parameter is not supported for PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
   * >
   * > * - Check the `AdvancedPolicyOption` parameter in the response of the [DescribeBackupPolicy](https://help.aliyun.com/document_detail/2319231.html) operation to determine whether the cluster supports advanced backup. If the cluster supports advanced backup, you can request this feature in [Advanced backup settings](~611727~~).
   * >
   * > * - After you enable advanced backup, you **cannot** switch back to standard backup.
   * 
   * @example
   * Normal
   */
  backupPolicyLevel?: string;
  /**
   * @remarks
   * Specifies whether to retain backups when you delete the cluster. Valid values:
   * 
   * - **ALL**: Permanently retains all backups.
   * 
   * - **LATEST**: Permanently retains the last backup.
   * 
   * - **NONE**: Does not retain backup sets.
   * 
   * > The default value is `NONE`.
   * 
   * @example
   * NONE
   */
  backupRetentionPolicyOnClusterDeletion?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters in a specified region, including the cluster IDs.
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
   * - **Normal** (default): standard backup. The cluster is backed up once a day.
   * 
   * - **2/24H**: high-frequency backup. The cluster is backed up every 2 hours.
   * 
   * - **3/24H**: high-frequency backup. The cluster is backed up every 3 hours.
   * 
   * - **4/24H**: high-frequency backup. The cluster is backed up every 4 hours.
   * 
   * > * * This parameter is not supported for PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
   * >
   * > * - This parameter is not supported if your PolarDB for MySQL cluster is in a region that supports the cross-region backup feature. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * >
   * > * - After you enable advanced backup, this parameter is no longer effective. Use the `AdvancedDataPolicies` parameter instead.
   * 
   * @example
   * Normal
   */
  dataLevel1BackupFrequency?: string;
  /**
   * @remarks
   * The level-1 backup cycle. Valid values:
   * 
   * - **Monday**
   * 
   * - **Tuesday**
   * 
   * - **Wednesday**
   * 
   * - **Thursday**
   * 
   * - **Friday**
   * 
   * - **Saturday**
   * 
   * - **Sunday**
   * 
   * > * * You must select at least two days. Separate multiple values with commas.
   * >
   * > * - This parameter is not supported for PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
   * >
   * > * - This parameter is not supported if your PolarDB for MySQL cluster is in a region that supports the cross-region backup feature. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * >
   * > * - After you enable advanced backup, this parameter is no longer effective. Use the `AdvancedDataPolicies` parameter instead.
   * 
   * @example
   * Monday,Tuesday
   */
  dataLevel1BackupPeriod?: string;
  /**
   * @remarks
   * The retention period for level-1 backups, in days. Valid values: 3 to 14.
   * 
   * > - After you enable advanced backup, this parameter is no longer effective. Use the `AdvancedDataPolicies` parameter instead.
   * 
   * @example
   * 3
   */
  dataLevel1BackupRetentionPeriod?: string;
  /**
   * @remarks
   * The time window for automatic backups. Specify the time in UTC and in the `hh:mmZ-hh:mmZ` format. The time window must be a one-hour period that starts on the hour. For example, `14:00Z-15:00Z`.
   * 
   * > - This parameter is not supported for PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
   * >
   * > - This parameter is not supported if your PolarDB for MySQL cluster is in a region that supports the cross-region backup feature. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * 
   * @example
   * 15:00Z-16:00Z
   */
  dataLevel1BackupTime?: string;
  /**
   * @remarks
   * The destination region for the cross-region level-2 backup. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * 
   * > - After you enable advanced backup, this parameter is no longer effective. Use the `AdvancedDataPolicies` parameter instead.
   * 
   * @example
   * cn-hangzhou
   */
  dataLevel2BackupAnotherRegionRegion?: string;
  /**
   * @remarks
   * The retention period of cross-region level-2 backups. Valid values:
   * 
   * - **0**: Disables the cross-region level-2 backup feature.
   * 
   * - **30 to 7300**: The retention period of cross-region level-2 backups, in days.
   * 
   * - **-1**: Cross-region level-2 backups are permanently retained.
   * 
   * > * * When you create a cluster, the default value is **0**, which disables the cross-region level-2 backup feature.
   * >
   * > * - After you enable advanced backup, this parameter is no longer effective. Use the `AdvancedDataPolicies` parameter instead.
   * 
   * @example
   * 30
   */
  dataLevel2BackupAnotherRegionRetentionPeriod?: string;
  /**
   * @remarks
   * The level-2 backup cycle. Valid values:
   * 
   * - **Monday**
   * 
   * - **Tuesday**
   * 
   * - **Wednesday**
   * 
   * - **Thursday**
   * 
   * - **Friday**
   * 
   * - **Saturday**
   * 
   * - **Sunday**
   * 
   * > * * You must select at least two days. Separate multiple values with commas.
   * >
   * > * - This parameter is not supported for PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
   * >
   * > * - This parameter is not supported if your PolarDB for MySQL cluster is in a region that supports the cross-region backup feature. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * >
   * > * - After you enable advanced backup, this parameter is no longer effective. Use the `AdvancedDataPolicies` parameter instead.
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
   * - **30 to 7300**: The retention period of level-2 backups, in days.
   * 
   * - **-1**: Level-2 backups are permanently retained.
   * 
   * > * * When you create a cluster, the default value is **0**, which disables the level-2 backup feature.
   * >
   * > * - After you enable advanced backup, this parameter is no longer effective. Use the `AdvancedDataPolicies` parameter instead.
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
   * - **Monday**
   * 
   * - **Tuesday**
   * 
   * - **Wednesday**
   * 
   * - **Thursday**
   * 
   * - **Friday**
   * 
   * - **Saturday**
   * 
   * - **Sunday**
   * 
   * > * * You must select at least two days. Separate multiple values with commas.
   * >
   * > * - This parameter is not supported if your PolarDB for MySQL cluster is in a region that supports the cross-region backup feature. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * >
   * > * - After you enable advanced backup, this parameter is no longer effective. Use the `AdvancedDataPolicies` parameter instead.
   * 
   * @example
   * Monday,Tuesday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The time window for automatic backups. Specify the time in UTC and in the `hh:mmZ-hh:mmZ` format. The time window must be a one-hour period that starts on the hour. For example, `14:00Z-15:00Z`.
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

