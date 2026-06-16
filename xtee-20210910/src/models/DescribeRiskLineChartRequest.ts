// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskLineChartRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The beginning of the time range to query, in milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1739841750000
   */
  beginTime?: number;
  /**
   * @remarks
   * The end of the time range to query, in milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1748491200000
   */
  endTime?: number;
  /**
   * @remarks
   * Event codes. Separate multiple event codes with commas (,).
   * 
   * @example
   * de_afghcf6411,de_awkhwh0314
   */
  eventCodes?: string;
  /**
   * @remarks
   * Region ID.
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

