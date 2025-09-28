// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmsAuthTokensRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the iOS application. This parameter is required if OsType is set to **iOS**.
   * 
   * @example
   * 12345****
   */
  bundleId?: string;
  /**
   * @remarks
   * The validity period of the token. Unit: seconds. Valid values: 900 to 43200.
   * 
   * This parameter is required.
   * 
   * @example
   * 900
   */
  expire?: number;
  /**
   * @remarks
   * The type of the operating system. Valid values: **Android** and **iOS**.
   * 
   * This parameter is required.
   * 
   * @example
   * Android
   */
  osType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The package name. This parameter is required if OsType is set to **Android**.
   * 
   * @example
   * com.aliqin.mytel.test
   */
  packageName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The service code.
   * 
   * This parameter is required.
   * 
   * @example
   * FC100000134840112
   */
  sceneCode?: string;
  /**
   * @remarks
   * The signature. This parameter is required if OsType is set to **Android**.
   * 
   * @example
   * 47fcc6615485e83b4100433****
   */
  signName?: string;
  /**
   * @remarks
   * The validity period of the SMS verification code. Unit: seconds. Default value: 180.
   * 
   * @example
   * 60
   */
  smsCodeExpire?: number;
  /**
   * @remarks
   * The code of the text message template.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_13987****
   */
  smsTemplateCode?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      expire: 'Expire',
      osType: 'OsType',
      ownerId: 'OwnerId',
      packageName: 'PackageName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sceneCode: 'SceneCode',
      signName: 'SignName',
      smsCodeExpire: 'SmsCodeExpire',
      smsTemplateCode: 'SmsTemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      expire: 'number',
      osType: 'string',
      ownerId: 'number',
      packageName: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sceneCode: 'string',
      signName: 'string',
      smsCodeExpire: 'number',
      smsTemplateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

