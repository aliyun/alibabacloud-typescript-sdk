// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsRequest extends $dara.Model {
  /**
   * @remarks
   * The backup ID.
   * 
   * If you specify the ID of a sharded cluster instance for the **DBInstanceId** parameter, the number of backup IDs must be the same as the number of shard nodes. Separate the backup IDs with commas (,).
   * 
   * @example
   * 2072****,2072****,2072****
   */
  backupId?: string;
  /**
   * @remarks
   * The backup job ID.
   * 
   * @example
   * 775051
   */
  backupJobId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > If the instance is a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1a7009eb24****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The region where the backup resides.
   * 
   * > This parameter is required for geo-redundancy.
   * 
   * @example
   * cn-hangzhou
   */
  destRegion?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * > This parameter is invalid if you specify the BackupId parameter.
   * 
   * @example
   * 2022-01-14T13:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the shard node in the sharded cluster instance.
   * 
   * > This parameter is required if you specify the ID of a sharded cluster instance for the **DBInstanceId** parameter.
   * 
   * @example
   * d-bp128a003436****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be greater than 0 and not greater than the maximum value of the integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * - **30** (Default)
   * 
   * - **50**
   * 
   * - **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-xxxx
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The region where the instance resides.
   * 
   * > - This parameter is required to restore a deleted instance.
   * >
   * > - This parameter is required for geo-redundancy.
   * 
   * @example
   * cn-beijing
   */
  srcRegion?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in Coordinated Universal Time (UTC).
   * 
   * > This parameter is invalid if you specify the BackupId parameter.
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

