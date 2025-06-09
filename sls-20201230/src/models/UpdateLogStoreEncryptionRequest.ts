// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateLogStoreEncryptionRequestUserCmkInfo } from "./UpdateLogStoreEncryptionRequestUserCmkInfo";


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

