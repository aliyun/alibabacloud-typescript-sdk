// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUnprotectedVulnTrendRequest extends $dara.Model {
  /**
   * @example
   * 1754878752
   */
  endTime?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 112.15.190.XX
   */
  sourceIp?: string;
  /**
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

