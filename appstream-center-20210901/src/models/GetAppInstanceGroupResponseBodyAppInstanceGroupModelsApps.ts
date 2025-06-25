// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppInstanceGroupResponseBodyAppInstanceGroupModelsApps extends $dara.Model {
  appIcon?: string;
  /**
   * @example
   * ca-i87mycyn419nu****
   */
  appId?: string;
  appName?: string;
  appVersion?: string;
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

