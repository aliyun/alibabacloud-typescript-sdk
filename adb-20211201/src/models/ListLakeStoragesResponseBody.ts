// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLakeStoragesResponseBodyItemsPermissions extends $dara.Model {
  /**
   * @remarks
   * The database account ID.
   * 
   * @example
   * -
   */
  account?: string;
  /**
   * @remarks
   * The read permissions.
   * 
   * @example
   * true
   */
  read?: boolean;
  /**
   * @remarks
   * The type of the database account.
   * 
   * @example
   * -
   */
  type?: string;
  /**
   * @remarks
   * The write permissions.
   * 
   * @example
   * false
   */
  write?: boolean;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      read: 'Read',
      type: 'Type',
      write: 'Write',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      read: 'boolean',
      type: 'string',
      write: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListLakeStoragesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code or the error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The queried lake storages.
   * 
   * @example
   * -
   */
  items?: ListLakeStoragesResponseBodyItems[];
  /**
   * @remarks
   * The returned message. Valid values:
   * 
   * *   If the request was successful, a success message is returned.****
   * *   If the request failed, an error message is returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The token that is used for paging when the number of results is greater than the value of MaxResults.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****-964D-****-9D31-****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the dry run succeeds. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListLakeStoragesResponseBodyItems },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

