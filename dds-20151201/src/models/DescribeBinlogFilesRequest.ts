// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBinlogFilesRequest extends $dara.Model {
  binlogId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dds-wz9ca592fc637a54
   */
  DBInstanceId?: string;
  destRegion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-04-17T05:50:28.914Z
   */
  endTime?: string;
  /**
   * @example
   * d-uf696817a1b5d9f4
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @example
   * rg-xxxx
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  srcRegion?: string;
  /**
   * @remarks
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

