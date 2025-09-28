// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVerifySchemeRequest extends $dara.Model {
  /**
   * @remarks
   * The app name.
   * 
   * This parameter is required.
   * 
   * @example
   * Alibaba Cloud Communications
   */
  appName?: string;
  /**
   * @remarks
   * The verification type. You can select multiple types only when the phone number verification is supported. Separate multiple types with commas (,).
   * 
   * *   **1**: phone number verification
   * *   **2**: SMS verification
   * 
   * @example
   * 1,2
   */
  authType?: string;
  /**
   * @remarks
   * The bundle ID. This parameter is required when OsType is set to iOS. The bundle ID must be 1 to 128 characters in length and can contain digits, letters, hyphens (-), underscores (_), and periods (.).
   * 
   * @example
   * example.aliyundoc.com
   */
  bundleId?: string;
  /**
   * @remarks
   * The channel code of China Mobile.
   * 
   * @example
   * 1
   */
  cmApiCode?: number;
  /**
   * @remarks
   * The channel code of China Telecom.
   * 
   * @example
   * 3
   */
  ctApiCode?: number;
  /**
   * @remarks
   * The channel code of China Unicom.
   * 
   * @example
   * 2
   */
  cuApiCode?: number;
  /**
   * @remarks
   * The email address that receives the key.
   * 
   * @example
   * username@aliyundoc.com
   */
  email?: string;
  hmAppIdentifier?: string;
  hmPackageName?: string;
  hmSignName?: string;
  /**
   * @remarks
   * The IP address whitelist.
   * 
   * @example
   * 139.9.167.181
   * 122.112.210.205
   * 139.9.172.0/24
   */
  ipWhiteList?: string;
  /**
   * @remarks
   * The source URL of the HTML5 app page. We recommend that you specify this parameter as a domain name.
   * 
   * @example
   * https://h5.minexiot.com
   */
  origin?: string;
  /**
   * @remarks
   * The type of the operating system for the terminal. Valid values: iOS and Android.
   * 
   * This parameter is required.
   * 
   * @example
   * iOS
   */
  osType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The package name. This parameter is required when OsType is set to Android. The name must be 1 to 128 characters in length and can contain digits, letters, hyphens (-), underscores (_), and periods (.).
   * 
   * @example
   * com.aliyun
   */
  packName?: string;
  /**
   * @remarks
   * The package signature. This parameter is required when OsType is set to Android. The signature must be 32 characters in length and can contain digits and letters.
   * 
   * @example
   * 123aliyun
   */
  packSign?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The service type.
   * 
   * @example
   * 0
   */
  sceneType?: string;
  /**
   * @remarks
   * The service name.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  schemeName?: string;
  /**
   * @remarks
   * The bound SMS signature. This parameter is valid only when AuthType is set to 2. The signature must be approved.
   * 
   * @example
   * Aliyun Test
   */
  smsSignName?: string;
  /**
   * @remarks
   * The URL of the HTML5 app page.
   * 
   * @example
   * https://h5.minexiot.com/index.html
   */
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

