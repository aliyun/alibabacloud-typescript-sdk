// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Mobile3MetaSimpleStandardVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID card number.
   * 
   * - If paramType is set to normal, specify the plaintext ID card number.
   * - If paramType is set to md5, specify the ciphertext ID card number.
   * 
   * @example
   * 429001********8211
   */
  identifyNum?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * - If paramType is set to normal, specify the plaintext mobile phone number.
   * - If paramType is set to md5, specify the ciphertext mobile phone number.
   * 
   * @example
   * 130********
   */
  mobile?: string;
  /**
   * @remarks
   * The parameter type. Valid values:
   * 
   * - normal: No encryption.
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
   * - If paramType is set to normal, specify the plaintext name.
   * - If paramType is set to md5, specify the ciphertext name.
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

