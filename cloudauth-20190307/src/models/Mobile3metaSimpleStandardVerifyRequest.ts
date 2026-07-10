// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Mobile3MetaSimpleStandardVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID card number. Valid values:
   * 
   * - If ParamType is set to normal, pass in the ID card number in plaintext.
   * - If ParamType is set to md5, pass in the MD5-encrypted ID card number.
   * 
   * @example
   * 429001********8211
   */
  identifyNum?: string;
  /**
   * @remarks
   * The phone number. Valid values:
   * 
   * - If ParamType is set to normal, pass in the phone number in plaintext.
   * - If ParamType is set to md5, pass in the MD5-encrypted phone number.
   * 
   * @example
   * 130********
   */
  mobile?: string;
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
   * The name. Valid values:
   * 
   * - If ParamType is set to normal, pass in the name in plaintext.
   * - If ParamType is set to md5, pass in the MD5-encrypted name.
   * 
   * @example
   * 张*
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

