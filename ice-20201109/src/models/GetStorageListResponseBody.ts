// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageListResponseBodyStorageInfoList extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The time when the configuration was created.
   * 
   * @example
   * 2024-06-06T01:55:07Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether it is the default storage location.
   * 
   * @example
   * true
   */
  defaultStorage?: boolean;
  /**
   * @remarks
   * Indicates whether temporary files created during editing processes are stored in this location.
   * 
   * @example
   * false
   */
  editingTempFileStorage?: boolean;
  /**
   * @remarks
   * The time when the configuration was last modified.
   * 
   * @example
   * 2024-06-06T03:07:07Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * your-path/
   */
  path?: string;
  /**
   * @remarks
   * The OSS storage status.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The bucket.
   * 
   * @example
   * your-bucket
   */
  storageLocation?: string;
  /**
   * @remarks
   * The storage type.
   * 
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
   * The ID of the request.
   * 
   * @example
   * ******73-8B78-5D86-A50C-49B96C******
   */
  requestId?: string;
  /**
   * @remarks
   * The storage configurations.
   */
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

