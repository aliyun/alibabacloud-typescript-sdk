// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Mobile3MetaSimpleStandardVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * ID number:
   * 
   * - When `paramType` is `normal`: Input the plain text of the ID number.
   * - When `paramType` is `md5`: Input the encrypted ID number.
   * 
   * @example
   * 429001********8211
   */
  identifyNum?: string;
  /**
   * @remarks
   * Phone number:
   * 
   * - When `paramType` is `normal`: Input the plain text of the phone number.
   * - When `paramType` is `md5`: Input the encrypted phone number.
   * 
   * @example
   * 130********
   */
  mobile?: string;
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
   * Name:
   * 
   * - When `paramType` is `normal`: Input the plain text of the name.
   * - When `paramType` is `md5`: Input the encrypted name.
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

