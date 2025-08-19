// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Mobile3MetaDetailVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * ID number:
   * 
   * Note
   * Only supports the ID numbers of second-generation resident IDs and Hong Kong, Macao, and Taiwan residence permits.
   * 
   * - When paramType is normal: enter the plaintext ID number.
   * 
   * - When paramType is md5: enter the encrypted ID number.
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
   * Mobile phone number:
   * 
   * - When paramType is normal: enter the plaintext mobile phone number.
   * 
   * - When paramType is md5: enter the encrypted mobile phone number.
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
   * Encryption method:
   * 
   * - normal: plaintext, unencrypted
   * 
   * - md5: MD5 encryption
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * Name:
   * 
   * - When paramType is normal: enter the plaintext name.
   * 
   * - When paramType is md5: enter the encrypted name.
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

