// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaStandardVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * ID number:
   * 
   * - When `paramType` is normal: enter the plain text of the ID number.
   * - When `paramType` is md5:
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
   * - normal: unencrypted.
   * - md5: md5 encrypted.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * Name:
   * 
   * - When `paramType` is normal: enter the plain text of the name.
   * - When `paramType` is md5: the first character of the name (encrypted) + the rest of the name (plain text).
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

