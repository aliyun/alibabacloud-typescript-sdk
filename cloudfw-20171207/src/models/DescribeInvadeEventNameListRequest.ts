// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvadeEventNameListRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. This is a UNIX timestamp in seconds.
   * 
   * @example
   * 1738780437
   */
  endTime?: string;
  /**
   * @remarks
   * The language type.
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
   * 36.112.73.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start time. This is a UNIX timestamp in seconds.
   * 
   * @example
   * 1757620800
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

