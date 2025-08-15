// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Mobile3MetaVerifyIntlRequest extends $dara.Model {
  /**
   * @remarks
   * ID number
   * 
   * - When paramType is set to normal, enter the plaintext
   * - When paramType is set to md5, enter a 32-character lowercase md5 string
   * 
   * @example
   * 429001********8211
   */
  identifyNum?: string;
  /**
   * @remarks
   * Mobile phone number.
   * 
   * - When paramType is set to normal, enter the plaintext
   * - When paramType is set to md5, enter a 32-character lowercase md5 string
   * 
   * @example
   * 186****1234
   */
  mobile?: string;
  /**
   * @remarks
   * Parameter type:
   * 
   * - normal: unencrypted
   * - md5: md5 encrypted
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The product solution to be integrated, with a fixed value: MOBILE_3META
   * 
   * @example
   * MOBILE_3META
   */
  productCode?: string;
  /**
   * @remarks
   * Name
   * 
   * - When paramType is set to normal, enter the plaintext
   * - When paramType is set to md5, enter a 32-character lowercase md5 string
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

