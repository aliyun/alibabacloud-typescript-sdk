// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallTrafficTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds. This parameter is required. If this parameter is not specified, the API returns ErrorTimeError(400). The value must be a UNIX timestamp in seconds, and EndTime must be later than StartTime.
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
   * The start time of the query. The value is a UNIX timestamp in seconds. This parameter is required. If this parameter is not specified, the API returns ErrorTimeError(400). The value must be a UNIX timestamp in seconds, and StartTime must be earlier than EndTime.
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

