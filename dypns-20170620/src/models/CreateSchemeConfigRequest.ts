// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSchemeConfigRequest extends $dara.Model {
  /**
   * @example
   * com.aliyun.android
   */
  androidPackageName?: string;
  /**
   * @example
   * dfsfaawklll1****olkweklk***
   */
  androidPackageSign?: string;
  /**
   * @example
   * 阿里云通信
   */
  appName?: string;
  /**
   * @example
   * -
   */
  h5Origin?: string;
  /**
   * @example
   * -
   */
  h5Url?: string;
  /**
   * @example
   * com.aliyun.ios
   */
  iosBundleId?: string;
  ownerId?: number;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * Android APP测试方案
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

