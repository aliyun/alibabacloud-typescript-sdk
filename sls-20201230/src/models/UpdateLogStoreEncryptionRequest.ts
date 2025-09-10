// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLogStoreEncryptionRequestUserCmkInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the CMK to which the BYOK key belongs. You can create a CMK in KMS. The CMK must be in the same region as the endpoint of Simple Log Service.
   * 
   * @example
   * f5136b95-2420-ab31-xxxxxxxxx
   */
  keyId?: string;
  /**
   * @remarks
   * The region ID. Example: cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the Resource Access Management (RAM) role.The value is in the acs:ram::12344\\*\\*\\*:role/xxxxx format. To use a BYOK key to encrypt logs, you must create a RAM role and grant the AliyunKMSReadOnlyAccess and AliyunKMSCryptoUserAccess permissions to the RAM role. You must grant the API caller the PassRole permission on the RAM role.
   * 
   * @example
   * acs:ram::12344***:role/xxxxx
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'keyId',
      regionId: 'regionId',
      roleArn: 'roleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      regionId: 'string',
      roleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLogStoreEncryptionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the encryption feature. After you update the encryption configuration of the Logstore, you can modify only the enable parameter in subsequent update requests. You cannot modify the encryptType or userCmkInfo parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The encryption algorithm. Valid values: default, m4, sm4_ecb, sm4_cbc, sm4_gcm, aes_ecb, aes_cbc, aes_cfb, aes_ofb, and aes_gcm.
   * 
   * @example
   * default
   */
  encryptType?: string;
  /**
   * @remarks
   * Optional. If you use a BYOK key to encrypt logs, you must specify this parameter. If you use the service key of Simple Log Service to encrypt logs, you do not need to specify this parameter.
   */
  userCmkInfo?: UpdateLogStoreEncryptionRequestUserCmkInfo;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      encryptType: 'encryptType',
      userCmkInfo: 'userCmkInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      encryptType: 'string',
      userCmkInfo: UpdateLogStoreEncryptionRequestUserCmkInfo,
    };
  }

  validate() {
    if(this.userCmkInfo && typeof (this.userCmkInfo as any).validate === 'function') {
      (this.userCmkInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

