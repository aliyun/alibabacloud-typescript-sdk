// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvadeEventStatisticRequest extends $dara.Model {
  /**
   * @example
   * 1774713600
   */
  endTime?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 52.130.200.XXX
   */
  sourceIp?: string;
  /**
   * @example
   * 1746151757
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

