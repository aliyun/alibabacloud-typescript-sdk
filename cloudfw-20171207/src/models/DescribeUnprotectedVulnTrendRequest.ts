// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUnprotectedVulnTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. Use a UNIX timestamp in seconds.
   * 
   * @example
   * 1754878752
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the visitor.
   * 
   * @example
   * 112.15.190.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start time. Use a UNIX timestamp in seconds.
   * 
   * @example
   * 1740623016
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      lang: 'string',
      sourceIp: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

