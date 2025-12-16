// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAppsRequest extends $dara.Model {
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
   * 1.0
   */
  appVersion?: string;
  endTime?: string;
  latestVersionOnly?: boolean;
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
  pkgLabel?: string;
  pkgType?: string;
  startTime?: string;
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

