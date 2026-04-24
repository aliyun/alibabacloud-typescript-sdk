// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetYikeCallbackConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"CallbackEventList":[{"EventType":"UserCreditAdded","UserData":"{}"}]}
   */
  callbackConfig?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http//example.com/callback
   */
  callbackUrl?: string;
  static names(): { [key: string]: string } {
    return {
      callbackConfig: 'CallbackConfig',
      callbackUrl: 'CallbackUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackConfig: 'string',
      callbackUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

