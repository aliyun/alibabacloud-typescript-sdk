// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallDropTrendRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the end time of the query. The value is a UNIX timestamp in seconds. This parameter is required and must be specified together with StartTime. The value must be a UNIX timestamp in seconds and later than the value of StartTime. If this parameter is not specified, the API returns ErrorTimeError(400).
   * 
   * @example
   * 1758474000
   */
  endTime?: number;
  /**
   * @remarks
   * The language in which you want to receive messages. Valid values:
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
   * Sets the start time of the query. The value is a UNIX timestamp in seconds. This parameter is required and must be specified together with EndTime. The value must be a UNIX timestamp in seconds and earlier than the value of EndTime. If this parameter is not specified, the API returns ErrorTimeError(400).
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

