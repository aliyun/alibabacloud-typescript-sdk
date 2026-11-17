// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Mobile3MetaVerifyIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The ID card number.
   * 
   * - If paramType is set to normal, enter the plaintext.
   * - If paramType is set to md5, enter a 32-character lowercase MD5 string.
   * 
   * @example
   * 429001********8211
   */
  identifyNum?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * - If paramType is set to normal, enter the plaintext.
   * - If paramType is set to md5, enter a 32-character lowercase MD5 string.
   * 
   * @example
   * 186****1234
   */
  mobile?: string;
  /**
   * @remarks
   * The parameter type. Valid values:
   * 
   * - normal: Unencrypted.
   * - md5: MD5-encrypted.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The product solution to be accessed. Set the value to MOBILE_3META.
   * 
   * @example
   * MOBILE_3META
   */
  productCode?: string;
  /**
   * @remarks
   * The name.
   * 
   * - If paramType is set to normal, enter the plaintext.
   * - If paramType is set to md5, enter a 32-character lowercase MD5 string.
   * 
   * @example
   * Zhang*
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

