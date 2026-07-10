// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID card number.
   * 
   * Note
   * Only second-generation resident ID card numbers and Hong Kong, Macao, and Taiwan residence permit numbers are supported.
   * 
   * - If ParamType is set to normal, enter the ID card number in plaintext.
   * 
   * - If ParamType is set to md5, the format is: first 6 digits of the ID card number (plaintext) + date of birth (ciphertext) + last 4 digits of the ID card number (plaintext).
   * 
   * @example
   * 明文：429001********8211
   * 
   * 密文：
   * 
   * 42900132fa7bcd874161bea8ec8fd98f390ec98211
   */
  identifyNum?: string;
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
   * - If ParamType is set to normal, enter the name in plaintext.
   * 
   * - If ParamType is set to md5, the format is: first character of the name (ciphertext) + remaining characters of the name (plaintext).
   * 
   * @example
   * 明文：张三
   * 
   * 密文：
   * 
   * 6499fc7409049355527ef6a2ba5706b8三​
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      identifyNum: 'IdentifyNum',
      paramType: 'ParamType',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifyNum: 'string',
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

