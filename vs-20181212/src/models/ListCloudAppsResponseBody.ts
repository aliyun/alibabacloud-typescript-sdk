// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAppsResponseBodyCloudApps extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * com.aaa.bbb
   */
  appName?: string;
  /**
   * @remarks
   * The version of the application.
   * 
   * @example
   * 1.5.0
   */
  appVersion?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * The format of the installation package.
   * 
   * @example
   * apk
   */
  pkgFormat?: string;
  /**
   * @remarks
   * The type of the installation package, such as android or win.
   * 
   * @example
   * android
   */
  pkgType?: string;
  /**
   * @remarks
   * The relative path of the post-command in the application package. This parameter is supported only for Windows applications.
   * 
   * @example
   * install.ps1
   */
  postCommandPath?: string;
  /**
   * @remarks
   * The timeout period for executing the post-command, in seconds. This parameter is supported only for Windows applications.
   * 
   * @example
   * 10
   */
  postCommandTimeoutSec?: number;
  /**
   * @remarks
   * The ID of the stable patch package.
   * 
   * @example
   * patch-7bdf679812484df08a956b73e0b3bdf6
   */
  stablePatchId?: string;
  /**
   * @remarks
   * The upload status of the application. Valid values:
   * - Created
   * - Doing
   * - Success: This is a final state.
   * - Failed: This is a final state.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The description of the status.
   * 
   * @example
   * upload success
   */
  statusDescription?: string;
  /**
   * @remarks
   * The time when the status was last updated. The time is displayed in the ISO 8601 standard with a time zone offset, in the YYYY-MM-DDTHH:mm:ss+HH:mm format.
   * 
   * @example
   * 2024-05-28T14:48:34+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the application was uploaded. The time is displayed in the ISO 8601 standard with a time zone offset, in the YYYY-MM-DDTHH:mm:ss+HH:mm format.
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
   * The list of cloud applications.
   */
  cloudApps?: ListCloudAppsResponseBodyCloudApps[];
  /**
   * @remarks
   * The page number of the returned list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The Settings for the number of entries returned on each page during paging for a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of cloud applications that match the query conditions.
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

