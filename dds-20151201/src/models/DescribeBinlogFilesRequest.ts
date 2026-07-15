// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBinlogFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The binlog ID. This parameter is not currently supported.
   * 
   * @example
   * null
   */
  binlogId?: string;
  /**
   * @remarks
   * The ID of the instance. If the instance is a sharded cluster, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-wz9ca592fc637a54
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The region where the cross-region backup is stored.
   * 
   * > This parameter is required when you query cross-region backups.
   * 
   * @example
   * cn-beijing
   */
  destRegion?: string;
  /**
   * @remarks
   * The end time of the query. The time must be later than the start time. The time is in the *yyyy-MM-dd*T*HH:mm:ss.xxx*Z format. The time is displayed in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-04-17T05:50:28.914Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the mongos node or shard node in the sharded cluster instance.
   * 
   * > This parameter is applicable only to sharded cluster instances.
   * 
   * @example
   * d-uf696817a1b5d9f4
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
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
   * The region of the source instance for a cross-region backup.
   * 
   * > - This parameter is required when you query cross-region backups.
   * 
   * @example
   * ap-southeast-1
   */
  srcRegion?: string;
  /**
   * @remarks
   * The start time of the query. The time is in the *yyyy-MM-dd*T*HH:mm:ss.xxx*Z format. The time is displayed in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-03-23T06:24:21.425Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      binlogId: 'BinlogId',
      DBInstanceId: 'DBInstanceId',
      destRegion: 'DestRegion',
      endTime: 'EndTime',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      srcRegion: 'SrcRegion',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binlogId: 'string',
      DBInstanceId: 'string',
      destRegion: 'string',
      endTime: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
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

