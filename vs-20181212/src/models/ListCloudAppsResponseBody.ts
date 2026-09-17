// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAppsResponseBodyCloudApps extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * com.aaa.bbb
   */
  appName?: string;
  /**
   * @remarks
   * The application version.
   * 
   * @example
   * 1.5.0
   */
  appVersion?: string;
  /**
   * @remarks
   * The application description.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * The installation package format.
   * 
   * @example
   * apk
   */
  pkgFormat?: string;
  /**
   * @remarks
   * The installation package type. Valid values: android and win.
   * 
   * @example
   * android
   */
  pkgType?: string;
  /**
   * @remarks
   * The relative path of the post-command within the application package. Only win type applications are supported.
   * 
   * @example
   * install.ps1
   */
  postCommandPath?: string;
  /**
   * @remarks
   * The timeout period for post-command execution, in seconds. Only win type applications are supported.
   * 
   * @example
   * 10
   */
  postCommandTimeoutSec?: number;
  /**
   * @remarks
   * The ID of the stable version patch package.
   * 
   * @example
   * patch-7bdf679812484df08a956b73e0b3bdf6
   */
  stablePatchId?: string;
  /**
   * @remarks
   * The application upload status. Valid values:
   * 1. Created
   * 2. Doing
   * 3. Success: desired state.
   * 4. Failed: desired state.
   * 5. Deleting
   * 6. DeleteFailed: desired state.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The status description.
   * 
   * @example
   * upload success
   */
  statusDescription?: string;
  /**
   * @remarks
   * The latest status update time.
   * 
   * @example
   * 2024-05-28T14:48:34+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The application upload time.
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
      postCommandPath: 'PostCommandPath',
      postCommandTimeoutSec: 'PostCommandTimeoutSec',
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
      postCommandPath: 'string',
      postCommandTimeoutSec: 'number',
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
   * The list of cloud application information.
   */
  cloudApps?: ListCloudAppsResponseBodyCloudApps[];
  /**
   * @remarks
   * The page number of the query list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for the paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of matched cloud applications.
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

