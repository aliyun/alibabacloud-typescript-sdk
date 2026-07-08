// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAppInstallationsResponseBodyInstallationInfos extends $dara.Model {
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
   * Installation time.
   * 
   * @example
   * 2024-05-28T14:48:34+08:00
   */
  installationTime?: string;
  /**
   * @remarks
   * Patch package ID.
   * 
   * @example
   * patch-7bdf679812484df08a956b73e0b3bdf6
   */
  patchId?: string;
  /**
   * @remarks
   * Cloud application service instance ID.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * Cloud application installation status. Valid values:
   * 
   * 1. Intermediate states: install-init, installing
   * 
   * 2. Final states: installed, install-failed
   * 
   * @example
   * installed
   */
  status?: string;
  /**
   * @remarks
   * Status description.
   * 
   * @example
   * install success
   */
  statusDescription?: string;
  /**
   * @remarks
   * Time when the status was last updated.
   * 
   * @example
   * 2024-05-28T14:50:04+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appVersion: 'AppVersion',
      installationTime: 'InstallationTime',
      patchId: 'PatchId',
      renderingInstanceId: 'RenderingInstanceId',
      status: 'Status',
      statusDescription: 'StatusDescription',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appVersion: 'string',
      installationTime: 'string',
      patchId: 'string',
      renderingInstanceId: 'string',
      status: 'string',
      statusDescription: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAppInstallationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of installation records.
   */
  installationInfos?: ListCloudAppInstallationsResponseBodyInstallationInfos[];
  /**
   * @remarks
   * Page number of the returned list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of entries per page for paged queries.
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
   * Total number of installation records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      installationInfos: 'InstallationInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      installationInfos: { 'type': 'array', 'itemType': ListCloudAppInstallationsResponseBodyInstallationInfos },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.installationInfos)) {
      $dara.Model.validateArray(this.installationInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

