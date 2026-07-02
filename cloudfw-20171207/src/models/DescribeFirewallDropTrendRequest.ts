// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallDropTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. Specify the value as a UNIX timestamp in seconds.
   * 
   * @example
   * 1758474000
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The start time of the query. Specify the value as a UNIX timestamp in seconds.
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

