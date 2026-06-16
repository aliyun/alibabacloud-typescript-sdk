// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEventStatusRequest extends $dara.Model {
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
   * The creation type.
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_aamexg3015
   */
  eventCode?: string;
  /**
   * @remarks
   * The original event status. This parameter is used to prevent duplicate submissions or historical replays.
   * 
   * @example
   * ONLINE
   */
  fromEventSatus?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The event status to update to.
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

