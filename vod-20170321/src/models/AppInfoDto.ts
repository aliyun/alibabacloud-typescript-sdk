// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AppInfoDTOPlatforms extends $dara.Model {
  /**
   * @remarks
   * The platform ID.
   * 
   * @example
   * 3ba9c7d21f4e6a81
   */
  itemId?: string;
  /**
   * @remarks
   * The authorization list.
   */
  licenseItemIds?: string[];
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * com.example.vodapp
   */
  pkgName?: string;
  /**
   * @remarks
   * The package signature.
   * 
   * @example
   * 8e610rzjg613h0u58v8473d029h7
   */
  pkgSignature?: string;
  /**
   * @remarks
   * The platform type.
   * 
   * @example
   * 2
   */
  platformType?: number;
  /**
   * @remarks
   * The platform type.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * vod-demo-app
   */
  appName?: string;
  /**
   * @remarks
   * The application type. Valid values:
   * 
   * - 1: Common application.
   * - 2: Embedded SDK.
   * 
   * @example
   * 1
   */
  appType?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-01-02T03:04:05Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-01-02 03:04:05
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2026-01-02 03:04:05
   */
  gmtModified?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 3ba9c7d21f4e6a80
   */
  itemId?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2026-01-02T03:04:05Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The list of platform information included in the application.
   */
  platforms?: AppInfoDTOPlatforms[];
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 2544469002080159
   */
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

