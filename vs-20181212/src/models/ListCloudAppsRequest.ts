// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAppsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud application. This ID corresponds to a unique application package.
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
   * The time range filter parameter. Express it in ISO8601 standard format, using UTC time: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2021-09-30T02:23:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Return only the latest submitted version of the application. Default value: false.
   * 
   * @example
   * false
   */
  latestVersionOnly?: boolean;
  /**
   * @remarks
   * The page number for the query list. The starting value is 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows per page for paged queries. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Valid values:
   * 
   * 1. Valid values:
   *    a. hot
   *    b. game
   *    c. app
   * 
   * 2. Special case:a. To list applications that have no tags, enter NULL.
   * 
   * @example
   * app
   */
  pkgLabel?: string;
  /**
   * @remarks
   * The package type. Valid values:
   * 
   * 1. android
   * 
   * 2. win
   * 
   * 3. android_appmarket
   * 
   * @example
   * android
   */
  pkgType?: string;
  /**
   * @remarks
   * The time range filter parameter. Express it in ISO8601 standard format, using UTC time: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2021-09-29T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The application upload status. Valid values:
   * 
   * 1. Success: The desired state, indicating success.
   * 
   * 2. Failed: The desired state, indicating failure.
   * 
   * 3. Created
   * 
   * 4. Doing
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

