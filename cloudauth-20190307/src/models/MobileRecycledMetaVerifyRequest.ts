// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobileRecycledMetaVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The mobile phone number.
   * - If ParamType is set to normal, enter the mobile phone number in plaintext.
   * - If ParamType is set to md5, enter the mobile phone number in ciphertext.
   * 
   * This parameter is required.
   * 
   * @example
   * Plaintext: 186****2055
   * 
   * Ciphertext:
   * 
   * 849169cd3b20621c1c78bd61a11a4fc2
   */
  mobile?: string;
  /**
   * @remarks
   * The encryption method. Valid values:
   * - normal: No encryption. The value is in plaintext.
   * - md5: MD5 encryption.
   * 
   * This parameter is required.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The registration date. Format: YYYYMMDD. Example: 19800101, which indicates January 1, 1980.
   * 
   * This parameter is required.
   * 
   * @example
   * 20200505
   */
  registerDate?: string;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
      paramType: 'ParamType',
      registerDate: 'RegisterDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
      paramType: 'string',
      registerDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

