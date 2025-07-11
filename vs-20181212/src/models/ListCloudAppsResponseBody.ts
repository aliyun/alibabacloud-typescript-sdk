// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAppsResponseBodyCloudApps extends $dara.Model {
  /**
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @example
   * com.aaa.bbb
   */
  appName?: string;
  /**
   * @example
   * 1.5.0
   */
  appVersion?: string;
  /**
   * @example
   * demo
   */
  description?: string;
  pkgFormat?: string;
  pkgType?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * upload success
   */
  statusDescription?: string;
  /**
   * @example
   * 2024-05-28T14:48:34+08:00
   */
  updateTime?: string;
  /**
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
  cloudApps?: ListCloudAppsResponseBodyCloudApps[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
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

