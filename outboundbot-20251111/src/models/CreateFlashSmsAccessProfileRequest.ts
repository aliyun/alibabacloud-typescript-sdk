// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFlashSmsAccessProfileRequestAccessProfileDySmsAccessProfiles extends $dara.Model {
  /**
   * @remarks
   * The template content.
   * 
   * @example
   * We tried to reach you but you were unavailable. Our staff will contact you again shortly. We apologize for any inconvenience
   */
  description?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Test
   */
  name?: string;
  /**
   * @remarks
   * The signature name.
   * 
   * @example
   * Cloud Call Center
   */
  signName?: string;
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * SMS_469075249
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      signName: 'SignName',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      signName: 'string',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlashSmsAccessProfileRequestAccessProfile extends $dara.Model {
  /**
   * @remarks
   * Required when ProviderId is set to ShangHaiTianNan or Uincall.
   * 
   * @example
   * 6004200267
   */
  account?: string;
  /**
   * @remarks
   * Required when ProviderId is set to ChinaMobile.
   * 
   * @example
   * TQChVEAabhaNp2AB
   */
  aesKey?: string;
  /**
   * @remarks
   * Required when ProviderId is set to ChuangLan.
   * 
   * @example
   * N92685567
   */
  apiAccount?: string;
  /**
   * @remarks
   * Required when ProviderId is set to ChinaMobile.
   * 
   * @example
   * 100235
   */
  apiId?: string;
  /**
   * @remarks
   * Required when ProviderId is set to ChinaMobile.
   * 
   * @example
   * 3aRsPrTsDG3OPNq5
   */
  apiKey?: string;
  /**
   * @remarks
   * Required when ProviderId is set to ChuangLan.
   * 
   * @example
   * Rp7hyUbtXMef23
   */
  apiPassword?: string;
  /**
   * @remarks
   * Required when ProviderId is set to ChinaMobile.
   * 
   * @example
   * 300012117547
   */
  capAppId?: string;
  /**
   * @remarks
   * The list of Alibaba Communication configurations. Required when ProviderId is set to DySms.
   */
  dySmsAccessProfiles?: CreateFlashSmsAccessProfileRequestAccessProfileDySmsAccessProfiles[];
  /**
   * @remarks
   * Required when ProviderId is set to ShangHaiTianNan.
   * 
   * @example
   * 10690101220
   */
  extno?: string;
  /**
   * @remarks
   * Required when ProviderId is set to ChuangLan.
   * 
   * @example
   * Rp7hyUbtXMef23
   */
  managementPassword?: string;
  /**
   * @remarks
   * Required when ProviderId is set to ChuangLan.
   * 
   * @example
   * chuanglanrobot2
   */
  managementSubUserId?: string;
  /**
   * @remarks
   * Required when ProviderId is set to ChuangLan.
   * 
   * @example
   * chuanglanrobot
   */
  managementUsername?: string;
  /**
   * @remarks
   * Required when ProviderId is set to ShangHaiTianNan or HeDao.
   * 
   * @example
   * nu2DxxfZtY46
   */
  password?: string;
  /**
   * @remarks
   * Required when ProviderId is set to Uincall.
   * 
   * @example
   * 828ee92ebc8241d3b37d0238dde6345e
   */
  pwd?: string;
  /**
   * @remarks
   * Required when ProviderId is set to Uincall.
   * 
   * @example
   * 6004200267_dev
   */
  user?: string;
  /**
   * @remarks
   * Required when ProviderId is set to HeDao.
   * 
   * @example
   * TEST10
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      aesKey: 'AesKey',
      apiAccount: 'ApiAccount',
      apiId: 'ApiId',
      apiKey: 'ApiKey',
      apiPassword: 'ApiPassword',
      capAppId: 'CapAppId',
      dySmsAccessProfiles: 'DySmsAccessProfiles',
      extno: 'Extno',
      managementPassword: 'ManagementPassword',
      managementSubUserId: 'ManagementSubUserId',
      managementUsername: 'ManagementUsername',
      password: 'Password',
      pwd: 'Pwd',
      user: 'User',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      aesKey: 'string',
      apiAccount: 'string',
      apiId: 'string',
      apiKey: 'string',
      apiPassword: 'string',
      capAppId: 'string',
      dySmsAccessProfiles: { 'type': 'array', 'itemType': CreateFlashSmsAccessProfileRequestAccessProfileDySmsAccessProfiles },
      extno: 'string',
      managementPassword: 'string',
      managementSubUserId: 'string',
      managementUsername: 'string',
      password: 'string',
      pwd: 'string',
      user: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dySmsAccessProfiles)) {
      $dara.Model.validateArray(this.dySmsAccessProfiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlashSmsAccessProfileRequest extends $dara.Model {
  /**
   * @remarks
   * The access configuration.
   */
  accessProfile?: CreateFlashSmsAccessProfileRequestAccessProfile;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * The provider ID. Valid values:
   * - Uincall: Beijing Youyin Communication Co., Ltd.
   * - ChuangLan: Beijing Chuanglan Yunzhi Information Co., Ltd.
   * - ChinaMobile: China Mobile.
   * - ShangHaiTianNan: Shanghai Tiannan.
   * - HeDao: Galaxis.
   * - DySms: Alibaba Communication.
   * 
   * @example
   * Uincall
   */
  providerId?: string;
  static names(): { [key: string]: string } {
    return {
      accessProfile: 'AccessProfile',
      instanceId: 'InstanceId',
      providerId: 'ProviderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessProfile: CreateFlashSmsAccessProfileRequestAccessProfile,
      instanceId: 'string',
      providerId: 'string',
    };
  }

  validate() {
    if(this.accessProfile && typeof (this.accessProfile as any).validate === 'function') {
      (this.accessProfile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

