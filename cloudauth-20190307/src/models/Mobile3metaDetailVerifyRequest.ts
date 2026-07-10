// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Mobile3MetaDetailVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID card number.
   * 
   * > Note: Only second-generation resident ID card numbers and Hong Kong, Macao, or Taiwan residence permit numbers are supported.
   * 
   * - If ParamType is set to normal, pass in the ID card number in plaintext.
   * 
   * - If ParamType is set to md5, pass in the ID card number in ciphertext.
   * 
   * @example
   * 明文：429001********8211
   * 
   * 密文：
   * 
   * 32fa7bcd874161bea8ec8fd98f390ec9
   */
  identifyNum?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * - If ParamType is set to normal, pass in the phone number in plaintext.
   * 
   * - If ParamType is set to md5, pass in the phone number in ciphertext.
   * 
   * @example
   * 明文：186****2055
   * 
   * 密文：
   * 
   * 849169cd3b20621c1c78bd61a11a4fc2
   */
  mobile?: string;
  /**
   * @remarks
   * The encryption method. Valid values:
   * 
   * - normal: plaintext without encryption
   * 
   * - md5: MD5 encryption.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The name.
   * 
   * - If ParamType is set to normal, pass in the name in plaintext.
   * 
   * - If ParamType is set to md5, pass in the name in ciphertext.
   * 
   * @example
   * 明文：张三
   * 
   * 密文：
   * 
   * 32fa7bcd874161bea8ec8fd98f390ec9
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      identifyNum: 'IdentifyNum',
      mobile: 'Mobile',
      paramType: 'ParamType',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifyNum: 'string',
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

