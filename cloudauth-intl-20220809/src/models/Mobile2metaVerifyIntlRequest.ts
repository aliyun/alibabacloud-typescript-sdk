// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Mobile2MetaVerifyIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The phone number.
   * 
   * - If ParamType is set to normal, pass in the phone number in plaintext.
   * - If ParamType is set to md5, pass in the phone number in ciphertext as a 32-character lowercase MD5 string.
   * 
   * This parameter is required.
   * 
   * @example
   * 186****1234
   */
  mobile?: string;
  /**
   * @remarks
   * The parameter type. Valid values:
   * 
   * - normal: not encrypted
   * - md5: MD5-encrypted.
   * 
   * This parameter is required.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The product code. Set this parameter to MOBILE_2META.
   * 
   * This parameter is required.
   * 
   * @example
   * MOBILE_2META
   */
  productCode?: string;
  /**
   * @remarks
   * The name. Valid values:
   * 
   * - If ParamType is set to normal, pass in the name in plaintext.
   * - If ParamType is set to md5, pass in the name in ciphertext as a 32-character lowercase MD5 string.
   * 
   * This parameter is required.
   * 
   * @example
   * 张*
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
      paramType: 'ParamType',
      productCode: 'ProductCode',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
      paramType: 'string',
      productCode: 'string',
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

