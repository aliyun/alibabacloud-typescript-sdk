// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AppInfoDTOPlatforms extends $dara.Model {
  itemId?: string;
  licenseItemIds?: string[];
  pkgName?: string;
  pkgSignature?: string;
  platformType?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      licenseItemIds: 'LicenseItemIds',
      pkgName: 'PkgName',
      pkgSignature: 'PkgSignature',
      platformType: 'PlatformType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'string',
      licenseItemIds: { 'type': 'array', 'itemType': 'string' },
      pkgName: 'string',
      pkgSignature: 'string',
      platformType: 'number',
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.licenseItemIds)) {
      $dara.Model.validateArray(this.licenseItemIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppInfoDTO extends $dara.Model {
  appName?: string;
  /**
   * @example
   * 1-普通应用，2-内嵌SDK.
   */
  appType?: number;
  creationTime?: string;
  gmtCreate?: string;
  gmtModified?: string;
  itemId?: string;
  modificationTime?: string;
  platforms?: AppInfoDTOPlatforms[];
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appType: 'AppType',
      creationTime: 'CreationTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      itemId: 'ItemId',
      modificationTime: 'ModificationTime',
      platforms: 'Platforms',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appType: 'number',
      creationTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      itemId: 'string',
      modificationTime: 'string',
      platforms: { 'type': 'array', 'itemType': AppInfoDTOPlatforms },
      userId: 'number',
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

