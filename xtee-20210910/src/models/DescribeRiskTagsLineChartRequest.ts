// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskTagsLineChartRequest extends $dara.Model {
  /**
   * @remarks
   * Start time of the query, in milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1729563800605
   */
  beginTime?: number;
  /**
   * @remarks
   * End time, accurate to milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1729563800605
   */
  endTime?: number;
  /**
   * @remarks
   * Event code
   * 
   * @example
   * de_afghcf6411
   */
  eventCodes?: string;
  /**
   * @remarks
   * Sets the language type for the request and response messages. Default value is **zh**. Values: 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      eventCodes: 'EventCodes',
      lang: 'Lang',
      regId: 'RegId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      eventCodes: 'string',
      lang: 'string',
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

