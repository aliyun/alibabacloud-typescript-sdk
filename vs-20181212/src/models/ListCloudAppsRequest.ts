// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAppsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud application, which corresponds to a unique application package.
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
   * 1.0
   */
  appVersion?: string;
  /**
   * @remarks
   * The start time of the time range filter. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2021-09-30T02:23:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to return only the latest submitted version of the application. Default value: false.
   * 
   * @example
   * false
   */
  latestVersionOnly?: boolean;
  /**
   * @remarks
   * The page number of the list to query. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page during paging for a paged query. Settings: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The label of the cloud application. Valid values:
   * - hot
   * - game
   * - app
   * To query cloud applications without labels, set this parameter to NULL.
   * 
   * @example
   * app
   */
  pkgLabel?: string;
  /**
   * @remarks
   * The type of the installation package. Valid values:
   * - android
   * - win
   * - android_appmarket
   * 
   * @example
   * android
   */
  pkgType?: string;
  /**
   * @remarks
   * The start time of the time range filter. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2021-09-29T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The upload status of the application. Valid values:
   * - Success: The upload is successful. This is a final state.
   * - Failed: The upload failed. This is a final state.
   * - Created
   * - Doing
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appVersion: 'AppVersion',
      endTime: 'EndTime',
      latestVersionOnly: 'LatestVersionOnly',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pkgLabel: 'PkgLabel',
      pkgType: 'PkgType',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appVersion: 'string',
      endTime: 'string',
      latestVersionOnly: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      pkgLabel: 'string',
      pkgType: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

