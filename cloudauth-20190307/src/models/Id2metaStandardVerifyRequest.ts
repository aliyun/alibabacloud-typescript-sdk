// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaStandardVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID card number.
   * 
   * - If ParamType is set to normal, enter the ID card number in plaintext.
   * - If ParamType is set to md5, the format is: first 6 digits of the ID card number (plaintext) + date of birth (ciphertext) + last 4 digits of the ID card number (plaintext).
   * 
   * @example
   * 4****************1
   */
  identifyNum?: string;
  /**
   * @remarks
   * The parameter type. Valid values:
   * 
   * - normal: not encrypted.
   * - md5: MD5-encrypted.
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
   * - If ParamType is set to md5, the format is: first character of the name (ciphertext) + remaining characters of the name (plaintext).
   * 
   * @example
   * 张*
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

