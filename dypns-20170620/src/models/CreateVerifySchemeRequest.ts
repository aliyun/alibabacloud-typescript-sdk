// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVerifySchemeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  /**
   * @example
   * 2
   */
  authType?: string;
  /**
   * @example
   * os.guituke.live
   */
  bundleId?: string;
  /**
   * @example
   * 1
   */
  cmApiCode?: number;
  /**
   * @example
   * 3
   */
  ctApiCode?: number;
  /**
   * @example
   * 9
   */
  cuApiCode?: number;
  /**
   * @example
   * ****@***.com
   */
  email?: string;
  /**
   * @example
   * 5765880207855506803
   */
  hmAppIdentifier?: string;
  /**
   * @example
   * com.smzdm.client.hmos
   */
  hmPackageName?: string;
  /**
   * @example
   * a3a249d0b901938ff50c12fc93f6c7eb8ecd0e37f84f55970de486150349bc09
   */
  hmSignName?: string;
  /**
   * @example
   * 100.104.147.128/26
   */
  ipWhiteList?: string;
  origin?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * iOS
   */
  osType?: string;
  ownerId?: number;
  /**
   * @example
   * uni.UNI1521AD6
   */
  packName?: string;
  /**
   * @example
   * ce15084d6f2a2e106e5c6b6bfcab635e
   */
  packSign?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 0
   */
  sceneType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  schemeName?: string;
  smsSignName?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      authType: 'AuthType',
      bundleId: 'BundleId',
      cmApiCode: 'CmApiCode',
      ctApiCode: 'CtApiCode',
      cuApiCode: 'CuApiCode',
      email: 'Email',
      hmAppIdentifier: 'HmAppIdentifier',
      hmPackageName: 'HmPackageName',
      hmSignName: 'HmSignName',
      ipWhiteList: 'IpWhiteList',
      origin: 'Origin',
      osType: 'OsType',
      ownerId: 'OwnerId',
      packName: 'PackName',
      packSign: 'PackSign',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sceneType: 'SceneType',
      schemeName: 'SchemeName',
      smsSignName: 'SmsSignName',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      authType: 'string',
      bundleId: 'string',
      cmApiCode: 'number',
      ctApiCode: 'number',
      cuApiCode: 'number',
      email: 'string',
      hmAppIdentifier: 'string',
      hmPackageName: 'string',
      hmSignName: 'string',
      ipWhiteList: 'string',
      origin: 'string',
      osType: 'string',
      ownerId: 'number',
      packName: 'string',
      packSign: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sceneType: 'string',
      schemeName: 'string',
      smsSignName: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

