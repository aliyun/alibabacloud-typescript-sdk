// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleBarChartRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The start time of the query. Unit: milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1739841750000
   */
  beginTime?: number;
  /**
   * @remarks
   * The end time of the query. Unit: milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1750904603000
   */
  endTime?: number;
  /**
   * @remarks
   * The event codes. Separate multiple event codes with commas (,).
   * 
   * @example
   * account_abuse_pro,account_abuse
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
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      beginTime: 'beginTime',
      endTime: 'endTime',
      eventCodes: 'eventCodes',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      beginTime: 'number',
      endTime: 'number',
      eventCodes: 'string',
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

