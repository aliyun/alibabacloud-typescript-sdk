// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUnprotectedPortTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. Use a UNIX timestamp in seconds.
   * 
   * @example
   * 1751210395
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
   * The source IP address of the visitor.
   * 
   * @example
   * 61.155.60.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start time. Use a UNIX timestamp in seconds.
   * 
   * @example
   * 1655778046
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

