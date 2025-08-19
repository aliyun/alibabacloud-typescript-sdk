// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * ID number:
   * 
   * Note
   * Only supports the ID numbers of second-generation resident IDs and Hong Kong, Macao, and Taiwan residence permits.
   * 
   * - When paramType is normal: enter the plaintext ID number.
   * 
   * - When paramType is md5: first 6 digits of the ID number (plaintext) + date of birth (ciphertext) + last 4 digits of the ID number (plaintext).
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
   * - When paramType is normal: enter the plaintext name.
   * 
   * - When paramType is md5: first character of the name in ciphertext + rest of the name in plaintext.
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

