// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique message ID that is returned by the ApsaraMQ for MQTT broker after the message is sent.
   * 
   * @example
   * 0B736D997B7F45FF54E61C1C1B58****
   */
  msgId?: string;
  /**
   * @remarks
   * The unique ID that the system generates for the request. This parameter is a common parameter.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      msgId: 'MsgId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgId: 'string',
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

