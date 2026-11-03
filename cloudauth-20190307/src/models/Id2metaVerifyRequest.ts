// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID card number.
   * 
   * Note: Only the numbers of second-generation resident identity cards and residence permits for Hong Kong, Macao, and Taiwan residents are supported.
   * 
   * - If you set paramType to normal, enter the ID card number in plaintext.
   * 
   * - If you set paramType to md5, enter the first 6 digits of the ID card number in plaintext, the date of birth in ciphertext, and the last 4 digits of the ID card number in plaintext.
   * 
   * @example
   * Plaintext: 429001********8211
   * 
   * Ciphertext:
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
   * - md5: MD5 encryption
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The name.
   * 
   * - If you set paramType to normal, enter the name in plaintext.
   * 
   * - If you set paramType to md5, enter the first character of the name in ciphertext and the rest of the name in plaintext.
   * 
   * @example
   * Plaintext: Zhang San
   * 
   * Ciphertext:
   * 
   * 6499fc7409049355527ef6a2ba5706b8San
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

