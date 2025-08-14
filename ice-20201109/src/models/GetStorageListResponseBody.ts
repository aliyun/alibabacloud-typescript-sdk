// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageListResponseBodyStorageInfoList extends $dara.Model {
  /**
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @example
   * 2024-06-06T01:55:07Z
   */
  creationTime?: string;
  /**
   * @example
   * true
   */
  defaultStorage?: boolean;
  /**
   * @example
   * false
   */
  editingTempFileStorage?: boolean;
  /**
   * @example
   * 2024-06-06T03:07:07Z
   */
  modifiedTime?: string;
  /**
   * @example
   * your-path/
   */
  path?: string;
  /**
   * @example
   * Normal
   */
  status?: string;
  /**
   * @example
   * your-bucket
   */
  storageLocation?: string;
  /**
   * @example
   * vod_oss_bucket
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      creationTime: 'CreationTime',
      defaultStorage: 'DefaultStorage',
      editingTempFileStorage: 'EditingTempFileStorage',
      modifiedTime: 'ModifiedTime',
      path: 'Path',
      status: 'Status',
      storageLocation: 'StorageLocation',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      creationTime: 'string',
      defaultStorage: 'boolean',
      editingTempFileStorage: 'boolean',
      modifiedTime: 'string',
      path: 'string',
      status: 'string',
      storageLocation: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ******73-8B78-5D86-A50C-49B96C******
   */
  requestId?: string;
  storageInfoList?: GetStorageListResponseBodyStorageInfoList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      storageInfoList: 'StorageInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      storageInfoList: { 'type': 'array', 'itemType': GetStorageListResponseBodyStorageInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.storageInfoList)) {
      $dara.Model.validateArray(this.storageInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

