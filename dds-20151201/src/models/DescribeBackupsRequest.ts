// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set. You can call the [CreateBackup](https://help.aliyun.com/document_detail/62171.html) operation to query the backup set ID.
   * 
   * If you set the **DBInstanceId** parameter to the ID of a sharded cluster instance, the number of backup IDs is the same as the number of shard nodes. Multiple backup IDs are separated with commas (,).
   * 
   * @example
   * 2072****,2072****,2072****
   */
  backupId?: string;
  /**
   * @example
   * 775051
   */
  backupJobId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > If you set this parameter to the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1a7009eb24****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The region ID of the Cross-regional backup.
   * 
   * >  This parameter is required for the Cross-regional backup.
   * 
   * @example
   * cn-hangzhou
   */
  destRegion?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC. The end time must be later than the start time.
   * 
   * @example
   * 2022-01-14T13:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the shard node in the sharded cluster instance.
   * 
   * > This parameter takes effect only when you set the **DBInstanceId** parameter to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bp128a003436****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * rg-xxxx
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * >- This parameter is required if you want to query the backup sets of a released instance.
   * >-  This parameter is required if you want to query cross-region backups.
   * 
   * @example
   * cn-beijing
   */
  srcRegion?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * @example
   * 2022-01-13T13:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      backupJobId: 'BackupJobId',
      DBInstanceId: 'DBInstanceId',
      destRegion: 'DestRegion',
      endTime: 'EndTime',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      srcRegion: 'SrcRegion',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      backupJobId: 'string',
      DBInstanceId: 'string',
      destRegion: 'string',
      endTime: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      srcRegion: 'string',
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

