// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLogBackupPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced backup policies.
   * 
   * > - - This parameter is not supported for PolarDB for PostgreSQL (Oracle Compatible) or PolarDB for PostgreSQL.
   * >
   * > - - This parameter is supported only for clusters for which the BackupPolicyLevel parameter is set to Advanced.
   */
  advancedLogPoliciesShrink?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to view information about all clusters in a specific region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The destination region for cross-region log backups. For information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * 
   * > - - After you enable the advanced backup feature, this parameter is no longer valid. Use the AdvancedLogPolicies parameter instead.
   * 
   * @example
   * cn-hangzhou
   */
  logBackupAnotherRegionRegion?: string;
  /**
   * @remarks
   * The retention period of cross-region log backups. Valid values:
   * 
   * - **0**: Disables the cross-region log backup feature.
   * 
   * - **30 to 7300**: The retention period in days.
   * 
   * - **-1**: long-term retention.
   * 
   * > * * When you create a cluster, the default value of this parameter is **0**. This value disables the cross-region log backup feature.
   * >
   * > * - After you enable the advanced backup feature, this parameter is no longer valid. Use the AdvancedLogPolicies parameter instead.
   * 
   * @example
   * 30
   */
  logBackupAnotherRegionRetentionPeriod?: string;
  /**
   * @remarks
   * The retention period of log backups. Valid values:
   * 
   * - 3 to 7300: The retention period in days.
   * 
   * - -1: long-term retention.
   * 
   * > * * After you enable the advanced backup feature, this parameter is no longer valid. Use the AdvancedLogPolicies parameter instead.
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

