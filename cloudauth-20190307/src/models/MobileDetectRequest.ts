// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobileDetectRequest extends $dara.Model {
  /**
   * @remarks
   * List of phone numbers.
   * 
   * @example
   * 19833232569
   */
  mobiles?: string;
  /**
   * @remarks
   * Encryption method:
   * - normal: plaintext, no encryption
   * - md5: MD5 encryption
   * 
   * @example
   * normal
   */
  paramType?: string;
  static names(): { [key: string]: string } {
    return {
      mobiles: 'Mobiles',
      paramType: 'ParamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobiles: 'string',
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

