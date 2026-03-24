// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttackEventDashboardRequest extends $dara.Model {
  /**
   * @remarks
   * Timestamp of the end time.
   * 
   * @example
   * 1753153137284
   */
  endTime?: number;
  /**
   * @remarks
   * Language type for request and response messages. Default value is **zh**. Values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Timestamp of the start time.
   * 
   * @example
   * 1752548337284
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      lang: 'Lang',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      lang: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

