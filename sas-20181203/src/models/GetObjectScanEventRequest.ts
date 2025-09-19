// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetObjectScanEventRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert event.
   * 
   * @example
   * 81****
   */
  eventId?: string;
  /**
   * @remarks
   * The language of the content in the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * @example
   * zh
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
      eventId: 'string',
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

