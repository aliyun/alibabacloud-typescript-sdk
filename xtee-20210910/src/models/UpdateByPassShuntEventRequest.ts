// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateByPassShuntEventRequest extends $dara.Model {
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
   * 233
   */
  eventId?: number;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * 用户昵称文本审核检测结果
   */
  eventName?: string;
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
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      eventId: 'number',
      eventName: 'string',
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

