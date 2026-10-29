// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAppInstallationsResponseBodyInstallationInfos extends $dara.Model {
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
   * The installation time. The time is displayed in the ISO 8601 standard with a time zone offset in the YYYY-MM-DDTHH:mm:ss+HH:mm format.
   * 
   * @example
   * 2024-05-28T14:48:34+08:00
   */
  installationTime?: string;
  /**
   * @remarks
   * The ID of the patch package.
   * 
   * @example
   * patch-7bdf679812484df08a956b73e0b3bdf6
   */
  patchId?: string;
  /**
   * @remarks
   * The cloud application service instance ID.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * The installation status of the cloud application. Valid values: install-init and installing (intermediate states), and installed and install-failed (final states).
   * 
   * @example
   * installed
   */
  status?: string;
  /**
   * @remarks
   * The description of the status.
   * 
   * @example
   * install success
   */
  statusDescription?: string;
  /**
   * @remarks
   * The time when the status was last updated. The time is displayed in the ISO 8601 standard with a time zone offset in the YYYY-MM-DDTHH:mm:ss+HH:mm format.
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
   * The list of installation information.
   */
  installationInfos?: ListCloudAppInstallationsResponseBodyInstallationInfos[];
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
   * The number of entries returned per page for a paged query.
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
   * The total number of installation records.
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

