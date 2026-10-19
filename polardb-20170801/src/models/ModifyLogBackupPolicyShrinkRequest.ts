// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLogBackupPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced backup policy.
   * > *  * This parameter is not supported by PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for PostgreSQL.
   * > * * This parameter is supported only by clusters whose BackupPolicyLevel is set to Advanced.
   */
  advancedLogPoliciesShrink?: string;
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query all clusters in a specific region, including their cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region for cross-region log backup. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * > * * After advanced backup is enabled, this parameter no longer takes effect. Use the AdvancedLogPolicies parameter instead.
   * 
   * @example
   * cn-hangzhou
   */
  logBackupAnotherRegionRegion?: string;
  /**
   * @remarks
   * The retention period for cross-region backups. Valid values:
   * 
   * - **0**: disables the cross-region backup feature.
   * - **30 to 7300**: the retention period for cross-region backups, in days.
   * - **-1**: long-term retention (LTR).
   * 
   * > * * When a cluster is created, the default value is **0**, which indicates that the cross-region backup feature is disabled.
   * > * * After advanced backup is enabled, this parameter no longer takes effect. Use the AdvancedLogPolicies parameter instead.
   * 
   * @example
   * 30
   */
  logBackupAnotherRegionRetentionPeriod?: string;
  /**
   * @remarks
   * The log retention period. Valid values:
   * * 3 to 7300: the log retention period, in days.
   * * -1: long-term retention (LTR).
   * 
   * > * * After advanced backup is enabled, this parameter no longer takes effect. Use the AdvancedLogPolicies parameter instead.
   * 
   * @example
   * 3
   */
  logBackupRetentionPeriod?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      advancedLogPoliciesShrink: 'AdvancedLogPolicies',
      DBClusterId: 'DBClusterId',
      logBackupAnotherRegionRegion: 'LogBackupAnotherRegionRegion',
      logBackupAnotherRegionRetentionPeriod: 'LogBackupAnotherRegionRetentionPeriod',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedLogPoliciesShrink: 'string',
      DBClusterId: 'string',
      logBackupAnotherRegionRegion: 'string',
      logBackupAnotherRegionRetentionPeriod: 'string',
      logBackupRetentionPeriod: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

