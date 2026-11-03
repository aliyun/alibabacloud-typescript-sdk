// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobileOnlineTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The mobile phone number.
   * - If paramType is set to normal, enter the mobile phone number in plaintext.
   * - If paramType is set to md5, enter the mobile phone number in ciphertext.
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
   * The parameter type. Valid values:
   * - normal: Not encrypted.
   * - md5: MD5 encrypted.
   * 
   * @example
   * normal
   */
  paramType?: string;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
      paramType: 'ParamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
      paramType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

