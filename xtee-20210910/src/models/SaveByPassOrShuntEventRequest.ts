// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveByPassOrShuntEventRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 445
   */
  eventId?: number;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * 注册事件
   */
  eventName?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * MAIN
   */
  eventType?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      eventId: 'eventId',
      eventName: 'eventName',
      eventType: 'eventType',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      eventId: 'number',
      eventName: 'string',
      eventType: 'string',
      regId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

