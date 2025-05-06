// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLogBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the information of all clusters that are deployed in a specific region, such as the cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region in which you want to store cross-region log backups. For information about regions that support the cross-region backup feature, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * 
   * @example
   * cn-hangzhou
   */
  logBackupAnotherRegionRegion?: string;
  /**
   * @remarks
   * The retention period of cross-region log backups. Valid values:
   * 
   * *   **0**: The cross-region backup feature is disabled.
   * *   **30 to 7300**: Cross-region log backups are retained for 30 to 7,300 days.
   * *   **-1**: The log backups are permanently retained.
   * 
   * >  When you create a cluster, the default value of this parameter is **0**.
   * 
   * @example
   * 30
   */
  logBackupAnotherRegionRetentionPeriod?: string;
  /**
   * @remarks
   * The retention period of the log backups. Valid values:
   * 
   * *   3 to 7300: The log backups are retained for 3 to 7,300 days.
   * *   \\-1: The log backups are permanently retained.
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

