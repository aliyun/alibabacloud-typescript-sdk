// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLogBackupPolicyRequestAdvancedLogPolicies extends $dara.Model {
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * - **CREATE**: Create
   * 
   * - **UPDATE**: Update
   * 
   * - **DELETE**: Delete
   * 
   * @example
   * CREATE
   */
  actionType?: string;
  /**
   * @remarks
   * The destination region of the log backup policy.
   * 
   * @example
   * cn-shanghai
   */
  destRegion?: string;
  /**
   * @remarks
   * The destination type of the backup policy. Valid values:
   * 
   * - **level1**: level-1 backup
   * 
   * - **level2**: level-2 backup
   * 
   * - **level2Cross**: level-2 cross-region backup
   * 
   * @example
   * level2
   */
  destType?: string;
  /**
   * @remarks
   * Specifies whether to enable log backup. Set the value to 1.
   * 
   * @example
   * 1
   */
  enableLogBackup?: number;
  /**
   * @remarks
   * The retention period type for log backups. Valid values:
   * 
   * - **never**: The backups never expire.
   * 
   * - **delay**: The backups expire after a fixed number of days.
   * 
   * @example
   * delay
   */
  logRetentionType?: string;
  /**
   * @remarks
   * The number of days to retain the log backups. Valid values:
   * 
   * - 3 to 7300: The retention period in days.
   * 
   * - -1: long-term retention.
   * 
   * @example
   * 10
   */
  logRetentionValue?: string;
  /**
   * @remarks
   * The ID of the log backup policy.
   * 
   * @example
   * 71930ac2e9f15e41615e10627c******
   */
  policyId?: string;
  /**
   * @remarks
   * The source region of the log backup policy.
   * 
   * @example
   * cn-beijing
   */
  srcRegion?: string;
  /**
   * @remarks
   * The source type of the log backup policy. Valid values:
   * 
   * - **db**: database cluster
   * 
   * - **level1**: level-1 backup
   * 
   * - **level2**: level-2 backup
   * 
   * - **level2Cross**: level-2 cross-region backup
   * 
   * @example
   * level1
   */
  srcType?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      destRegion: 'DestRegion',
      destType: 'DestType',
      enableLogBackup: 'EnableLogBackup',
      logRetentionType: 'LogRetentionType',
      logRetentionValue: 'LogRetentionValue',
      policyId: 'PolicyId',
      srcRegion: 'SrcRegion',
      srcType: 'SrcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      destRegion: 'string',
      destType: 'string',
      enableLogBackup: 'number',
      logRetentionType: 'string',
      logRetentionValue: 'string',
      policyId: 'string',
      srcRegion: 'string',
      srcType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLogBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced backup policies.
   * 
   * > - - This parameter is not supported for PolarDB for PostgreSQL (Oracle Compatible) or PolarDB for PostgreSQL.
   * >
   * > - - This parameter is supported only for clusters for which the BackupPolicyLevel parameter is set to Advanced.
   */
  advancedLogPolicies?: ModifyLogBackupPolicyRequestAdvancedLogPolicies[];
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
      advancedLogPolicies: 'AdvancedLogPolicies',
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
      advancedLogPolicies: { 'type': 'array', 'itemType': ModifyLogBackupPolicyRequestAdvancedLogPolicies },
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
    if(Array.isArray(this.advancedLogPolicies)) {
      $dara.Model.validateArray(this.advancedLogPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

