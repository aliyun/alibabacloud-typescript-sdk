// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstalledAppsResponseBodyApps extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test_app
   */
  appName?: string;
  /**
   * @remarks
   * The application version.
   * 
   * @example
   * 2.0.1
   */
  appVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appVersion: 'AppVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstalledAppsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the application.
   */
  apps?: ListInstalledAppsResponseBodyApps[];
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 94
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apps: 'Apps',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apps: { 'type': 'array', 'itemType': ListInstalledAppsResponseBodyApps },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apps)) {
      $dara.Model.validateArray(this.apps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

