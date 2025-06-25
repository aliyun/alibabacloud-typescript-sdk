// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInstanceGroupResponseBodyAppInstanceGroupModelsApps extends $dara.Model {
  /**
   * @remarks
   * The app icon.
   * 
   * @example
   * https://app-center-icon-****.png
   */
  appIcon?: string;
  /**
   * @remarks
   * The app ID.
   * 
   * @example
   * ca-i87mycyn419nu****
   */
  appId?: string;
  /**
   * @remarks
   * The app name.
   */
  appName?: string;
  /**
   * @remarks
   * The app version.
   * 
   * @example
   * 1.0.0
   */
  appVersion?: string;
  /**
   * @remarks
   * The name of the app version.
   */
  appVersionName?: string;
  static names(): { [key: string]: string } {
    return {
      appIcon: 'AppIcon',
      appId: 'AppId',
      appName: 'AppName',
      appVersion: 'AppVersion',
      appVersionName: 'AppVersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIcon: 'string',
      appId: 'string',
      appName: 'string',
      appVersion: 'string',
      appVersionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

