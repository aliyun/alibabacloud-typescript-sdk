// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Mobile3MetaSimpleVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID card number.
   * 
   * Note: Only the numbers of second-generation resident identity cards and residence permits for Hong Kong, Macao, and Taiwan residents are supported.
   * 
   * - If you set paramType to normal, enter the ID card number in plaintext.
   * 
   * - If you set paramType to md5, enter the ID card number in ciphertext.
   * 
   * @example
   * Plaintext: 429001********8211
   * 
   * Ciphertext:
   * 
   * 32fa7bcd874161bea8ec8fd98f390ec9
   */
  identifyNum?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * - If you set paramType to normal, enter the mobile phone number in plaintext.
   * 
   * - If you set paramType to md5, enter the mobile phone number in ciphertext.
   * 
   * @example
   * Plaintext: 186****2055
   * 
   * Ciphertext:
   * 
   * 849169cd3b20621c1c78bd61a11a4fc2
   */
  mobile?: string;
  /**
   * @remarks
   * The encryption method. Valid values:
   * 
   * - normal: plaintext without encryption.
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
   * - If you set paramType to normal, enter the name in plaintext.
   * 
   * - If you set paramType to md5, enter the name in ciphertext.
   * 
   * @example
   * Plaintext: Zhang San
   * 
   * Ciphertext:
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

