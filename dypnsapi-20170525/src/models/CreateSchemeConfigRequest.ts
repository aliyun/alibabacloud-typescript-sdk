// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSchemeConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The package name. This parameter is required when Platform is set to Android. The name must be 1 to 128 characters in length and can contain digits, letters, hyphens (-), underscores (_), and periods (.).
   * 
   * @example
   * com.aliyun.android
   */
  androidPackageName?: string;
  /**
   * @remarks
   * The package signature. This parameter is required when Platform is set to Android. The signature must be 32 characters in length and can contain digits and letters.
   * 
   * @example
   * dfsfaawklll1****olkweklk***
   */
  androidPackageSign?: string;
  /**
   * @remarks
   * The app name, which can be up to 20 characters in length and can contain letters.
   * 
   * @example
   * Alibaba Cloud Communications
   */
  appName?: string;
  /**
   * @remarks
   * The reserved field. HTML5 apps are not supported.
   * 
   * @example
   * -
   */
  h5Origin?: string;
  /**
   * @remarks
   * The reserved field. HTML5 apps are not supported.
   * 
   * @example
   * -
   */
  h5Url?: string;
  /**
   * @remarks
   * The bundle ID. This parameter is required when OsType is set to iOS. The bundle ID must be 1 to 128 characters in length and can contain digits, letters, hyphens (-), underscores (_), and periods (.).
   * 
   * @example
   * com.aliyun.ios
   */
  iosBundleId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The app platform.
   * 
   * Valid values:
   * 
   * *   Android
   * *   iOS
   * 
   * This parameter is required.
   * 
   * @example
   * Android
   */
  platform?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The service name, which can be up to 10 characters in length and can contain letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  schemeName?: string;
  static names(): { [key: string]: string } {
    return {
      androidPackageName: 'AndroidPackageName',
      androidPackageSign: 'AndroidPackageSign',
      appName: 'AppName',
      h5Origin: 'H5Origin',
      h5Url: 'H5Url',
      iosBundleId: 'IosBundleId',
      ownerId: 'OwnerId',
      platform: 'Platform',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeName: 'SchemeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidPackageName: 'string',
      androidPackageSign: 'string',
      appName: 'string',
      h5Origin: 'string',
      h5Url: 'string',
      iosBundleId: 'string',
      ownerId: 'number',
      platform: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

