// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetOpenStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1736386501
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the request and response.
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
   * 202.109.244.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start of the time range to query. This value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1734386501
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

