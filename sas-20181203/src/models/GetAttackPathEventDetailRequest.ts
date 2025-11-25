// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttackPathEventDetailRequest extends $dara.Model {
  /**
   * @remarks
   * Event ID.
   * > You can call [ListAttackPathEvent](~~ListAttackPathEvent~~) to query the event ID.
   * 
   * @example
   * 123
   */
  eventId?: number;
  /**
   * @remarks
   * 数据来源。默认值为**default**。取值：
   * - **caasm**：攻击面
   * - **default**：攻击路径
   * 
   * @example
   * default
   */
  eventSource?: string;
  /**
   * @remarks
   * The language type for request and response, default is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      eventSource: 'EventSource',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'number',
      eventSource: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

