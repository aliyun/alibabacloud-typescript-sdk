// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EncryptUserCmkConf } from "./EncryptUserCmkConf";


export class EncryptConf extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  enable?: boolean;
  /**
   * @example
   * default
   */
  encryptType?: string;
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

