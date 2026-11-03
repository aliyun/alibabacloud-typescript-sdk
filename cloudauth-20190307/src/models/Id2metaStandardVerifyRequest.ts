// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaStandardVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID card number.
   * - If paramType is set to normal: enter the plaintext ID card number.
   * - If paramType is set to md5: enter the first 6 digits of the ID card number (plaintext) + the date of birth (ciphertext) + the last 4 digits of the ID card number (plaintext).
   * 
   * @example
   * 4****************1
   */
  identifyNum?: string;
  /**
   * @remarks
   * The parameter type. Valid values:
   * - normal: No encryption.
   * - md5: MD5 encryption.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The name.
   * - If paramType is set to normal: enter the plaintext name.
   * - If paramType is set to md5: enter the first character of the name (ciphertext) + the rest of the name (plaintext).
   * 
   * @example
   * Zhang*
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

