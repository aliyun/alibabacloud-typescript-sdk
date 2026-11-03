// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Mobile2MetaVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The mobile phone number.
   * - If paramType is set to normal, specify the mobile phone number in plaintext.
   * - If paramType is set to md5, specify the mobile phone number in ciphertext.
   * 
   * This parameter is required.
   * 
   * @example
   * ● Plaintext: 186****2055
   * ● Ciphertext:
   * 849169cd3b20621c1c78bd61a11a4fc2
   */
  mobile?: string;
  /**
   * @remarks
   * The encryption method. Valid values:
   * - normal: plaintext without encryption
   * - md5: MD5 encryption
   * 
   * This parameter is required.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The name.
   * - If paramType is set to normal, specify the name in plaintext.
   * - If paramType is set to md5, specify the name in ciphertext.
   * 
   * This parameter is required.
   * 
   * @example
   * ● Plaintext: Zhang San
   * ● Ciphertext:
   * 32fa7bcd874161bea8ec8fd98f390ec9
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
      paramType: 'ParamType',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

