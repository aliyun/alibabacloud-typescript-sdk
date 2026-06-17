// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingRiskTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Use a UNIX timestamp in seconds.
   * 
   * @example
   * 1755051062
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the response message.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 219.145.94.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start of the time range to query. Use a UNIX timestamp in seconds.
   * 
   * @example
   * 1733882648
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

