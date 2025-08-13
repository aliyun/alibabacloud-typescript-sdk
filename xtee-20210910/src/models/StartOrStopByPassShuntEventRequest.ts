// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartOrStopByPassShuntEventRequest extends $dara.Model {
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
   * Event ID.
   * 
   * @example
   * 445
   */
  eventId?: number;
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
   * Status.
   * 
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      eventId: 'eventId',
      regId: 'regId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      eventId: 'number',
      regId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

