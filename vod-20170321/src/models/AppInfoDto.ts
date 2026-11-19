// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AppInfoDTOPlatforms extends $dara.Model {
  /**
   * @remarks
   * The platform ID.
   */
  itemId?: string;
  /**
   * @remarks
   * The list of licenses.
   */
  licenseItemIds?: string[];
  /**
   * @remarks
   * The package name.
   */
  pkgName?: string;
  /**
   * @remarks
   * The package signature.
   */
  pkgSignature?: string;
  /**
   * @remarks
   * The platform type.
   */
  platformType?: number;
  /**
   * @remarks
   * The platform type.
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
   */
  creationTime?: string;
  /**
   * @remarks
   * The creation time.
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   */
  gmtModified?: string;
  /**
   * @remarks
   * The application ID.
   */
  itemId?: string;
  /**
   * @remarks
   * The update time.
   */
  modificationTime?: string;
  /**
   * @remarks
   * The list of platform information for the application.
   */
  platforms?: AppInfoDTOPlatforms[];
  /**
   * @remarks
   * The user ID.
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

