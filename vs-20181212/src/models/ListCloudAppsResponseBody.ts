// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAppsResponseBodyCloudApps extends $dara.Model {
  /**
   * @remarks
   * Application ID.
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @remarks
   * Application name.
   * 
   * @example
   * com.aaa.bbb
   */
  appName?: string;
  /**
   * @remarks
   * Application version.
   * 
   * @example
   * 1.5.0
   */
  appVersion?: string;
  /**
   * @remarks
   * Application description.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * Package format.
   * 
   * @example
   * apk
   */
  pkgFormat?: string;
  /**
   * @remarks
   * Package type: android/win.
   * 
   * @example
   * android
   */
  pkgType?: string;
  /**
   * @remarks
   * Stable patch package ID.
   * 
   * @example
   * patch-7bdf679812484df08a956b73e0b3bdf6
   */
  stablePatchId?: string;
  /**
   * @remarks
   * The application upload status. Valid values:
   * 
   * 1. Created
   * 
   * 2. Doing
   * 
   * 3. Success: The desired state.
   * 
   * 4. Failed: The desired state.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * Status description.
   * 
   * @example
   * upload success
   */
  statusDescription?: string;
  /**
   * @remarks
   * Latest status update time.
   * 
   * @example
   * 2024-05-28T14:48:34+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * Application upload time.
   * 
   * @example
   * 2024-05-28T14:28:14+08:00
   */
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appVersion: 'AppVersion',
      description: 'Description',
      pkgFormat: 'PkgFormat',
      pkgType: 'PkgType',
      stablePatchId: 'StablePatchId',
      status: 'Status',
      statusDescription: 'StatusDescription',
      updateTime: 'UpdateTime',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appVersion: 'string',
      description: 'string',
      pkgFormat: 'string',
      pkgType: 'string',
      stablePatchId: 'string',
      status: 'string',
      statusDescription: 'string',
      updateTime: 'string',
      uploadTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAppsResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of cloud application information.
   */
  cloudApps?: ListCloudAppsResponseBodyCloudApps[];
  /**
   * @remarks
   * Page number of the query list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of rows per page for paged queries.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of matching cloud application entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudApps: 'CloudApps',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudApps: { 'type': 'array', 'itemType': ListCloudAppsResponseBodyCloudApps },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloudApps)) {
      $dara.Model.validateArray(this.cloudApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

