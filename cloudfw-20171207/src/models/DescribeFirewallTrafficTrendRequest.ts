// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallTrafficTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. Specify a UNIX timestamp in seconds. This parameter is required. If this parameter is not specified, ErrorTimeError (400) is returned.
   * 
   * > The query interval (EndTime − StartTime) cannot exceed 90 days. If the interval exceeds 90 days, ErrorTimeError is returned. If the value is later than the current time, it is silently adjusted to the current time.
   * 
   * @example
   * 1758474000
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the response message.
   * 
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The start time of the query. Specify a UNIX timestamp in seconds. This parameter is required. If this parameter is not specified, ErrorTimeError (400) is returned.
   * 
   * > The query interval (EndTime − StartTime) cannot exceed 90 days. If the interval exceeds 90 days, ErrorTimeError is returned. If the value is later than the current time, it is silently adjusted to the current time. If StartTime is later than EndTime, no error is returned, but the response contains empty data.
   * 
   * @example
   * 1758470400
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

