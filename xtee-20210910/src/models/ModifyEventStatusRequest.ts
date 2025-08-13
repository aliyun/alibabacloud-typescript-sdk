// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEventStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, default value is **zh**. Values: 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Creation type
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * Event code
   * 
   * @example
   * de_aamexg3015
   */
  eventCode?: string;
  /**
   * @remarks
   * Initial event status, to avoid duplicate submissions or historical replays
   * 
   * @example
   * ONLINE
   */
  fromEventSatus?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Updated event status
   * 
   * @example
   * OFFLINE
   */
  toEventSatus?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      createType: 'createType',
      eventCode: 'eventCode',
      fromEventSatus: 'fromEventSatus',
      regId: 'regId',
      toEventSatus: 'toEventSatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      createType: 'string',
      eventCode: 'string',
      fromEventSatus: 'string',
      regId: 'string',
      toEventSatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

