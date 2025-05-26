// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLakeStorageResponseBodyDataPermissions } from "./GetLakeStorageResponseBodyDataPermissions";


export class GetLakeStorageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the lake storage was created.
   * 
   * @example
   * 2023-05-15T07:24:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The creator UID.
   * 
   * @example
   * 123456
   */
  creatorUid?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL cluster.
   * 
   * @example
   * amv-*******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The description of the lake storage.
   * 
   * @example
   * a test db
   */
  description?: string;
  /**
   * @remarks
   * The total storage size.
   * 
   * @example
   * 1
   */
  fileSize?: string;
  /**
   * @remarks
   * The unique identifier of the lake storage.
   * 
   * @example
   * -
   */
  lakeStorageId?: string;
  /**
   * @remarks
   * The operator UID.
   * 
   * @example
   * 123456
   */
  operatorUid?: string;
  /**
   * @remarks
   * The owner UID.
   * 
   * @example
   * 123456
   */
  ownerUid?: string;
  /**
   * @remarks
   * The number of partitions.
   * 
   * @example
   * -
   */
  partitionCount?: string;
  /**
   * @remarks
   * The permissions on the lake storage.
   * 
   * @example
   * -
   */
  permissions?: GetLakeStorageResponseBodyDataPermissions[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * -
   */
  rowCount?: number;
  /**
   * @remarks
   * The number of the tables.
   * 
   * @example
   * -
   */
  tableCount?: number;
  /**
   * @remarks
   * The time when the lake storage was last updated.
   * 
   * @example
   * 2024-10-14T02:28:41Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creatorUid: 'CreatorUid',
      DBClusterId: 'DBClusterId',
      description: 'Description',
      fileSize: 'FileSize',
      lakeStorageId: 'LakeStorageId',
      operatorUid: 'OperatorUid',
      ownerUid: 'OwnerUid',
      partitionCount: 'PartitionCount',
      permissions: 'Permissions',
      regionId: 'RegionId',
      rowCount: 'RowCount',
      tableCount: 'TableCount',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      creatorUid: 'string',
      DBClusterId: 'string',
      description: 'string',
      fileSize: 'string',
      lakeStorageId: 'string',
      operatorUid: 'string',
      ownerUid: 'string',
      partitionCount: 'string',
      permissions: { 'type': 'array', 'itemType': GetLakeStorageResponseBodyDataPermissions },
      regionId: 'string',
      rowCount: 'number',
      tableCount: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

