// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAppsRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud application ID, which corresponds to a unique application package.
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
   * 1.0
   */
  appVersion?: string;
  /**
   * @remarks
   * The start time for time range filtering. Specify the time in the ISO 8601 standard in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2021-09-30T02:23:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to return only the latest submitted version of each application. Default value: false.
   * 
   * @example
   * false
   */
  latestVersionOnly?: boolean;
  /**
   * @remarks
   * The page number of the query list. Minimum value: 1.
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Valid values: 1 to 100.
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The cloud application label.
   * 1. Valid values:
   *    a. hot
   *    b. game
   *    c. app
   * 2. Special case:
   *    a. To query applications without a label, enter "NULL".
   * 
   * @example
   * app
   */
  pkgLabel?: string;
  /**
   * @remarks
   * The installation package type. Valid values:
   * 1. android
   * 2. win
   * 3. android_appmarket
   * 
   * @example
   * android
   */
  pkgType?: string;
  /**
   * @remarks
   * The start time for time range filtering. Specify the time in the ISO 8601 standard in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2021-09-29T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The application upload status. Valid values:
   * 1. Success: desired state, succeeded.
   * 2. Failed: desired state, failed.
   * 3. Created
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

