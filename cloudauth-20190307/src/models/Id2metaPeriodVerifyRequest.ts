// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaPeriodVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID card number.
   * 
   * - If paramType is set to normal: Enter the plaintext ID card number.
   * - If paramType is set to md5:
   * Enter the first 6 digits of the ID card number (plaintext) + the date of birth (ciphertext) + the last 4 digits of the ID card number (plaintext).
   * 
   * @example
   * 4****************1
   */
  identifyNum?: string;
  /**
   * @remarks
   * The parameter type. Valid values:
   * 
   * - normal: Not encrypted.
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
   * - If paramType is set to normal: Enter the plaintext name.
   * - If paramType is set to md5: Enter the MD5 hash (32-character lowercase) of the first character of the name + the rest of the name in plaintext.
   * 
   * @example
   * Zhang*
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

