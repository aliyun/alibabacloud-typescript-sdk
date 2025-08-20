// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLakeStorageResponseBodyDataPermissions extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * test
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
   * The account type.
   * 
   * @example
   * SUB
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

export class UpdateLakeStorageResponseBodyData extends $dara.Model {
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
   * The ID of the AnalyticDB for MySQL cluster that is associated with the lake storage.
   * 
   * @example
   * amv-23xxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The description of the lake storage.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The total storage size.
   * 
   * @example
   * 142
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
   * 0
   */
  partitionCount?: string;
  /**
   * @remarks
   * The permissions on the lake storage.
   * 
   * @example
   * -
   */
  permissions?: UpdateLakeStorageResponseBodyDataPermissions[];
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
   * >=
   */
  rowCount?: number;
  /**
   * @remarks
   * The number of tables.
   * 
   * @example
   * 1234
   */
  tableCount?: number;
  /**
   * @remarks
   * The time when the lake storage was last updated.
   * 
   * @example
   * 2024-07-01T09:22:17Z
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
      permissions: { 'type': 'array', 'itemType': UpdateLakeStorageResponseBodyDataPermissions },
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

export class UpdateLakeStorageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * -
   */
  data?: UpdateLakeStorageResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. A value of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message. Valid values:
   * 
   * *   If the request was successful, an OK message is returned.
   * *   If the request failed, an error message is returned.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******-3EEC-******-9F06-******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateLakeStorageResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

