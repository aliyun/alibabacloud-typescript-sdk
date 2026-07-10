// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobileOnlineStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The phone number. Valid values:
   * 
   * - If paramType is set to normal, pass in the phone number in plaintext.
   * - If paramType is set to md5, pass in the MD5-encrypted phone number.
   * 
   * @example
   * 13665148158
   */
  mobile?: string;
  /**
   * @remarks
   * The parameter type. Valid values:
   * 
   * - normal: not encrypted.
   * - md5: MD5-encrypted.
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

