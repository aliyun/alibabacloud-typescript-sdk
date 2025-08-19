// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobileOnlineStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Mobile number:
   * 
   * - When `paramType` is `normal`: provide the plaintext mobile number.
   * - When `paramType` is `md5`: provide the encrypted mobile number.
   * 
   * @example
   * 13665148158
   */
  mobile?: string;
  /**
   * @remarks
   * Parameter type:
   * 
   * - normal: unencrypted.
   * - md5: md5 encrypted.
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

