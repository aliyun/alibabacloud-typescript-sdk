// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAppInstallationsRequest extends $dara.Model {
  /**
   * @remarks
   * Cloud application ID. Each ID maps to a unique application package.
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
   * 1.0
   */
  appVersion?: string;
  /**
   * @remarks
   * Time range filter. Use ISO 8601 format and UTC time, such as yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2025-06-02T02:18:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Page number of the returned list. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of entries per page for paged queries. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Patch package ID. Supported only in Windows scenarios.
   * 
   * 1. Set to origin to return only original versions.
   * 
   * @example
   * patch-7bdf679812484df08a956b73e0b3bdf6
   */
  patchId?: string;
  /**
   * @remarks
   * Project ID.
   * 
   * @example
   * project-b93ea81de76f48609eed3cd420f0399f
   */
  projectId?: string;
  /**
   * @remarks
   * Cloud application service instance ID. Use this to list installations on a specific instance.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * Start time of the time range filter. Specify in ISO 8601 format using UTC time. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2025-05-26T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appVersion: 'AppVersion',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      patchId: 'PatchId',
      projectId: 'ProjectId',
      renderingInstanceId: 'RenderingInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appVersion: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      patchId: 'string',
      projectId: 'string',
      renderingInstanceId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

