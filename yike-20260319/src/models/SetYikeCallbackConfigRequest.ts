// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetYikeCallbackConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The callback configuration. CallbackEventList supports multiple events, including:
   * - EventType: the event type. Valid values:
   *   - UserCreated: The user is created.
   *   - UserCreditAdded: Credits are added to the user.
   * - UserData: a JSON object that contains user-defined data.
   * 
   * This parameter is required.
   * 
   * @example
   * {"CallbackEventList":[{"EventType":"UserCreditAdded","UserData":"{}"}]}
   */
  callbackConfig?: string;
  /**
   * @remarks
   * The HTTP callback URL.
   * 
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

