// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvadeEcsTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. This is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1733796528
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the response.
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
   * 120.230.45.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start of the time range to query. This is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1736561456
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

