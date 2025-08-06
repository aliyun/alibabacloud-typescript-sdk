// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditAppInfoRequestPlatforms extends $dara.Model {
  pkgName?: string;
  pkgSignature?: string;
  /**
   * @example
   * 1
   */
  platformType?: number;
  static names(): { [key: string]: string } {
    return {
      pkgName: 'PkgName',
      pkgSignature: 'PkgSignature',
      platformType: 'PlatformType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pkgName: 'string',
      pkgSignature: 'string',
      platformType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditAppInfoRequest extends $dara.Model {
  appItemId?: string;
  appName?: string;
  /**
   * @example
   * 1-普通应用，2-内嵌SDK.
   */
  appType?: number;
  platforms?: EditAppInfoRequestPlatforms[];
  static names(): { [key: string]: string } {
    return {
      appItemId: 'AppItemId',
      appName: 'AppName',
      appType: 'AppType',
      platforms: 'Platforms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appItemId: 'string',
      appName: 'string',
      appType: 'number',
      platforms: { 'type': 'array', 'itemType': EditAppInfoRequestPlatforms },
    };
  }

  validate() {
    if(Array.isArray(this.platforms)) {
      $dara.Model.validateArray(this.platforms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

