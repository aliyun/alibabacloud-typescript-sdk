// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobileRecycledMetaVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The phone number. Valid values:
   * - If ParamType is set to normal, pass in the phone number in plaintext.
   * - If ParamType is set to md5, pass in the MD5-encrypted phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 明文：186****2055
   * 
   * 密文：
   * 
   * 849169cd3b20621c1c78bd61a11a4fc2
   */
  mobile?: string;
  /**
   * @remarks
   * The encryption method. Valid values:
   * - normal: plaintext without encryption
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
   * The registration date in the format YYYYMMDD. For example, 19800101 indicates January 1, 1980.
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

