// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLakeStorageResponseBodyDataPermissions extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 1234567890123456
   */
  account?: string;
  /**
   * @remarks
   * The read permission.
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
   * The write permission.
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
   * The creation time.
   * 
   * @example
   * 2023-05-15T07:24:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The UID of the creator.
   * 
   * @example
   * 123456
   */
  creatorUid?: string;
  /**
   * @remarks
   * The ADB instance ID.
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
   * adb-lake-cn-hangzhou-1a1aaaa11a
   */
  lakeStorageId?: string;
  /**
   * @remarks
   * The UID of the operator.
   * 
   * @example
   * 123456
   */
  operatorUid?: string;
  /**
   * @remarks
   * The UID of the owner.
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
   * The permissions of the lake storage.
   * 
   * @example
   * [{"Account":"1234567890123456","Read":true,"Write":true}]
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
   * The total number of data rows.
   * 
   * @example
   * 1000
   */
  rowCount?: number;
  /**
   * @remarks
   * The number of databases and tables.
   * 
   * @example
   * 1234
   */
  tableCount?: number;
  /**
   * @remarks
   * The update time.
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
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * {"Description":"Sample lake storage","RowCount":1000,"TableCount":1}
   */
  data?: UpdateLakeStorageResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned for the request. A value of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The additional information about the call result. Description:
   * 
   * - If the request is successful, OK is returned.
   * - If the request fails, a specific error code is returned.
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
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
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

