// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EncryptUserCmkConf } from "./EncryptUserCmkConf";


export class EncryptConf extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable data encryption. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The encryption algorithm. Valid values: default and sm4. If enable is set to true, you must configure this parameter.
   * 
   * @example
   * default
   */
  encryptType?: string;
  /**
   * @remarks
   * Optional. If you configure this parameter, the bring-your-own-key (BYOK) key is used. If you do not configure this parameter, the service key of Simple Log Service is used.
   * 
   * @example
   * {    "cmk_key_id" : "f5136b95-2420-ab31-xxxxxxxxx"    "arn" :  "acs:ram::13234:role/logsource"    "region_id" : "cn-hangzhou"  }
   */
  userCmkInfo?: EncryptUserCmkConf;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      encryptType: 'encrypt_type',
      userCmkInfo: 'user_cmk_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      encryptType: 'string',
      userCmkInfo: EncryptUserCmkConf,
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

