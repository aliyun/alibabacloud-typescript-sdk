// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLakeStoragesResponseBodyItemsPermissions } from "./ListLakeStoragesResponseBodyItemsPermissions";


export class ListLakeStoragesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time when the lake storage was created.
   * 
   * @example
   * 2021-04-01T09:50:18Z
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
   * Create a role to run ROS StackGroups.
   */
  description?: string;
  /**
   * @remarks
   * The size of data files.
   * 
   * @example
   * 651
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
   * The queried lake storage.
   * 
   * @example
   * 123456
   */
  ownerUid?: string;
  /**
   * @remarks
   * The permissions on the lake storage.
   * 
   * @example
   * -
   */
  permissions?: ListLakeStoragesResponseBodyItemsPermissions[];
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
   * The number of tables.
   * 
   * @example
   * 30
   */
  tableCount?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 30
   */
  totalRows?: number;
  /**
   * @remarks
   * The total storage size.
   * 
   * @example
   * 111333
   */
  totalStorage?: string;
  /**
   * @remarks
   * The time when the lake storage was last updated.
   * 
   * @example
   * 2024-03-15T02:24:32
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
      permissions: 'Permissions',
      regionId: 'RegionId',
      tableCount: 'TableCount',
      totalRows: 'TotalRows',
      totalStorage: 'TotalStorage',
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
      permissions: { 'type': 'array', 'itemType': ListLakeStoragesResponseBodyItemsPermissions },
      regionId: 'string',
      tableCount: 'number',
      totalRows: 'number',
      totalStorage: 'string',
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

