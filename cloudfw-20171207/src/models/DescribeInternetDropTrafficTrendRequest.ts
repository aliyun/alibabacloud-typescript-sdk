// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetDropTrafficTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The direction.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1756346821
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
   * The tracing code.
   * 
   * This parameter is required.
   * 
   * @example
   * yundun
   */
  sourceCode?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 120.136.21.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1749176793
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      endTime: 'EndTime',
      lang: 'Lang',
      sourceCode: 'SourceCode',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      endTime: 'string',
      lang: 'string',
      sourceCode: 'string',
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

