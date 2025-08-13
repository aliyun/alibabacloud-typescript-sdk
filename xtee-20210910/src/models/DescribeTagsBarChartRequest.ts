// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagsBarChartRequest extends $dara.Model {
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
   * Start time, accurate to milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1751249559000
   */
  beginTime?: number;
  /**
   * @remarks
   * End time, accurate to milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1751595912000
   */
  endTime?: number;
  /**
   * @remarks
   * Event code.
   * 
   * @example
   * de_afghcf6411
   */
  eventCodes?: string;
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
   * Policy execution result
   * 
   * @example
   * PASS
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      beginTime: 'beginTime',
      endTime: 'endTime',
      eventCodes: 'eventCodes',
      regId: 'regId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      beginTime: 'number',
      endTime: 'number',
      eventCodes: 'string',
      regId: 'string',
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

