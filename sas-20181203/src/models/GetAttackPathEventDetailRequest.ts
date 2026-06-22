// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttackPathEventDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The event ID.
   * > You can call [ListAttackPathEvent](~~ListAttackPathEvent~~) to query event IDs.
   * 
   * @example
   * 123
   */
  eventId?: number;
  /**
   * @remarks
   * The data source. Default value: **default**. Valid values:
   * - **caasm**: attack surface
   * - **default**: attack path.
   * 
   * @example
   * default
   */
  eventSource?: string;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
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

