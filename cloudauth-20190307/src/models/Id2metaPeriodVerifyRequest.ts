// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaPeriodVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * ID number:
   * 
   * - When `paramType` is `normal`: Enter the plain text of the ID number.
   * - When `paramType` is `md5`:
   * The first 6 digits (plain text) + date of birth (encrypted) + last 4 digits (plain text).
   * 
   * @example
   * 4****************1
   */
  identifyNum?: string;
  /**
   * @remarks
   * Parameter type:
   * 
   * - normal: Unencrypted.
   * - md5: MD5 encrypted.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * Name.
   * 
   * - When `paramType` = `normal`: Enter the plain text of the name.
   * - When `paramType` = `md5`: The first character of the name MD5 encrypted (32 lowercase MD5) + the rest of the name in plain text.
   * 
   * @example
   * 张*
   */
  userName?: string;
  /**
   * @remarks
   * End date of ID validity, format: YYYYMMDD
   * 
   * @example
   * 20301001
   */
  validityEndDate?: string;
  /**
   * @remarks
   * Start date of ID validity, format: YYYYMMDD
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

