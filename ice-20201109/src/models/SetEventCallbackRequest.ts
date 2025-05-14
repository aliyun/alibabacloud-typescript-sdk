// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetEventCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * The authentication key. The key can be up to 32 characters in length and must contain uppercase letters, lowercase letters, and digits. This parameter takes effect only if you set CallbackType to **HTTP**.
   * 
   * @example
   * TestKey001
   */
  authKey?: string;
  /**
   * @remarks
   * Specifies whether to enable callback authentication. This parameter takes effect only if you set CallbackType to **HTTP**. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  authSwitch?: string;
  /**
   * @remarks
   * The name of the Simple Message Queue (SMQ) queue in the region. The name must start with ice-callback-.
   * 
   * @example
   * ice-callback-queue
   */
  callbackQueueName?: string;
  /**
   * @remarks
   * The callback method. Valid values:
   * 
   * *   **HTTP**
   * *   **MNS**
   * 
   * @example
   * HTTP
   */
  callbackType?: string;
  /**
   * @remarks
   * The callback URL. This parameter is required if you set CallbackType to **HTTP**. The callback URL cannot exceed 256 bytes in length. You can specify only one callback URL.
   * 
   * @example
   * http://xxx.yyy/callback
   */
  callbackURL?: string;
  /**
   * @remarks
   * The type of the callback event. You can specify multiple values separated with commas (,). ProduceMediaComplete: indicates that the editing and production task is complete.
   * 
   * @example
   * ProduceMediaComplete
   */
  eventTypeList?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      authSwitch: 'AuthSwitch',
      callbackQueueName: 'CallbackQueueName',
      callbackType: 'CallbackType',
      callbackURL: 'CallbackURL',
      eventTypeList: 'EventTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      authSwitch: 'string',
      callbackQueueName: 'string',
      callbackType: 'string',
      callbackURL: 'string',
      eventTypeList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

