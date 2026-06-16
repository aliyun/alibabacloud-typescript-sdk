// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Mobile3MetaVerifyIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The ID card number.
   * 
   * - If ParamType is set to normal, enter the plaintext value.
   * - If ParamType is set to md5, enter a 32-character lowercase MD5 string.
   * 
   * @example
   * 429001********8211
   */
  identifyNum?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * - If ParamType is set to normal, enter the plaintext value.
   * - If ParamType is set to md5, enter a 32-character lowercase MD5 string.
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
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The product solution code. Fixed value: MOBILE_3META.
   * 
   * @example
   * MOBILE_3META
   */
  productCode?: string;
  /**
   * @remarks
   * The name.
   * 
   * - If ParamType is set to normal, enter the plaintext value.
   * - If ParamType is set to md5, enter a 32-character lowercase MD5 string.
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
      productCode: 'ProductCode',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifyNum: 'string',
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

