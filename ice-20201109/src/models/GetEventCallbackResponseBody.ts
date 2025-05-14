// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventCallbackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authentication key. This parameter is returned only for HTTP callbacks.
   * 
   * @example
   * TestKey001
   */
  authKey?: string;
  /**
   * @remarks
   * Specifies whether callback authentication is enabled. This parameter is returned only for **HTTP** callbacks. Valid values:
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
   * The name of the Simple Message Queue (SMQ) queue to which callback messages are sent.
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
   * The callback URL to which event notifications are sent.
   * 
   * @example
   * http://xxx.yyy/callback
   */
  callbackURL?: string;
  /**
   * @remarks
   * The type of the callback event. Multiple values are separated with commas (,). For more information about callback event types, see [Event notification content](https://help.aliyun.com/document_detail/610204.html).
   * 
   * @example
   * ProduceMediaComplete,TranscodeComplete
   */
  eventTypeList?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      authSwitch: 'AuthSwitch',
      callbackQueueName: 'CallbackQueueName',
      callbackType: 'CallbackType',
      callbackURL: 'CallbackURL',
      eventTypeList: 'EventTypeList',
      requestId: 'RequestId',
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
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

