// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Mobile3MetaSimpleVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * ID card number:
   * 
   * Note
   * Only the ID numbers of the second-generation resident ID card and Hong Kong, Macao, and Taiwan residence permits are supported.
   * 
   * - When paramType is set to normal: pass in the ID card number in plaintext.
   * 
   * - When paramType is set to md5: pass in the encrypted ID card number.
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
   * Mobile number:
   * 
   * - When paramType is set to normal: pass in the mobile number in plaintext.
   * 
   * - When paramType is set to md5: pass in the encrypted mobile number.
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
   * - normal: plaintext, no encryption
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
   * - When paramType is set to normal: pass in the name in plaintext.
   * 
   * - When paramType is set to md5: pass in the encrypted name.
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

