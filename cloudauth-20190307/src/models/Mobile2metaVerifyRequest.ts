// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Mobile2MetaVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The mobile phone number. Valid values:
   * - If ParamType is set to normal, pass in the mobile phone number in plaintext.
   * - If ParamType is set to md5, pass in the MD5-encrypted mobile phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * ● 明文：186****2055
   * ● 密文：
   * 849169cd3b20621c1c78bd61a11a4fc2
   */
  mobile?: string;
  /**
   * @remarks
   * The encryption method. Valid values:
   * - normal: plaintext without encryption
   * - md5: MD5 encryption.
   * 
   * This parameter is required.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The name. Valid values:
   * - If ParamType is set to normal, pass in the name in plaintext.
   * - If ParamType is set to md5, pass in the MD5-encrypted name.
   * 
   * This parameter is required.
   * 
   * @example
   * ● 明文：张三
   * ● 密文：
   * 32fa7bcd874161bea8ec8fd98f390ec9
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
      paramType: 'ParamType',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
      paramType: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

