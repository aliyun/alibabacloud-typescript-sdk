// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFlashSmsAccessProfileRequestAccessProfileDySmsAccessProfiles extends $dara.Model {
  /**
   * @example
   * 我们联系您，您不在，稍后工作人员会继续联系您，如有打扰，请见谅
   */
  description?: string;
  /**
   * @example
   * 测试
   */
  name?: string;
  /**
   * @example
   * 云呼叫中心
   */
  signName?: string;
  /**
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

export class UpdateFlashSmsAccessProfileRequestAccessProfile extends $dara.Model {
  /**
   * @example
   * 6004200267
   */
  account?: string;
  /**
   * @example
   * TQChVEAabhaNp2AB
   */
  aesKey?: string;
  /**
   * @example
   * N92685567
   */
  apiAccount?: string;
  /**
   * @example
   * 100235
   */
  apiId?: string;
  /**
   * @example
   * 3aRsPrTsDG3OPNq5
   */
  apiKey?: string;
  /**
   * @example
   * Rp7hyUbtXMef23
   */
  apiPassword?: string;
  /**
   * @example
   * 300012117547
   */
  capAppId?: string;
  dySmsAccessProfiles?: UpdateFlashSmsAccessProfileRequestAccessProfileDySmsAccessProfiles[];
  /**
   * @example
   * 10690101220
   */
  extno?: string;
  /**
   * @example
   * Rp7hyUbtXMef23
   */
  managementPassword?: string;
  /**
   * @example
   * chuanglanrobot2
   */
  managementSubUserId?: string;
  /**
   * @example
   * chuanglanrobot
   */
  managementUsername?: string;
  /**
   * @example
   * nu2DxxfZtY46
   */
  password?: string;
  /**
   * @example
   * 828ee92ebc8241d3b37d0238dde6345e
   */
  pwd?: string;
  /**
   * @example
   * 6004200267_dev
   */
  user?: string;
  /**
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
      dySmsAccessProfiles: { 'type': 'array', 'itemType': UpdateFlashSmsAccessProfileRequestAccessProfileDySmsAccessProfiles },
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

export class UpdateFlashSmsAccessProfileRequest extends $dara.Model {
  /**
   * @remarks
   * 接入配置
   */
  accessProfile?: UpdateFlashSmsAccessProfileRequestAccessProfile;
  /**
   * @remarks
   * 接入配置ID
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  accessProfileId?: string;
  /**
   * @remarks
   * 实例ID
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * 供应商ID
   * 
   * @example
   * Uincall
   */
  providerId?: string;
  static names(): { [key: string]: string } {
    return {
      accessProfile: 'AccessProfile',
      accessProfileId: 'AccessProfileId',
      instanceId: 'InstanceId',
      providerId: 'ProviderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessProfile: UpdateFlashSmsAccessProfileRequestAccessProfile,
      accessProfileId: 'string',
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

