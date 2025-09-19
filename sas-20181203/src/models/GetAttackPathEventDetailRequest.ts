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
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'number',
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

