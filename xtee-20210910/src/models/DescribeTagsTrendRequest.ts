// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagsTrendRequest extends $dara.Model {
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
   * The start time, in milliseconds (ms).
   * 
   * @example
   * 1751249559000
   */
  beginTime?: number;
  /**
   * @remarks
   * The end time, in milliseconds (ms).
   * 
   * @example
   * 1740298093000
   */
  endTime?: number;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_afghcf6411
   */
  eventCodes?: string;
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
   * The policy execution result.
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

