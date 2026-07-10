// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaPeriodVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID card number.
   * 
   * - If paramType is set to normal, enter the ID card number in plaintext.
   * - If paramType is set to md5, the value is in the following format: first 6 digits of the ID card number (plaintext) + date of birth (ciphertext) + last 4 digits of the ID card number (plaintext).
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
   * - paramType = normal: enter the name in plaintext.
   * - paramType = md5: the first character of the name is MD5-encrypted (32-bit lowercase MD5) + the remaining characters of the name in plaintext.
   * 
   * @example
   * 张*
   */
  userName?: string;
  /**
   * @remarks
   * The expiration date of the ID card validity period. Format: YYYYMMDD.
   * 
   * @example
   * 20301001
   */
  validityEndDate?: string;
  /**
   * @remarks
   * The start date of the ID card validity period. Format: YYYYMMDD.
   * 
   * @example
   * 20201001
   */
  validityStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      identifyNum: 'IdentifyNum',
      paramType: 'ParamType',
      userName: 'UserName',
      validityEndDate: 'ValidityEndDate',
      validityStartDate: 'ValidityStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifyNum: 'string',
      paramType: 'string',
      userName: 'string',
      validityEndDate: 'string',
      validityStartDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

