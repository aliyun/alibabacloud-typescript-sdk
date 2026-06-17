// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. Use a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1734920543
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
   * 117.32.136.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start time. Use a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1746554400
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

