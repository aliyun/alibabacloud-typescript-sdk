// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatFirewallDropTrafficTrendRequest extends $dara.Model {
  /**
   * @example
   * 1758334822
   */
  endTime?: number;
  /**
   * @example
   * 122.190.56.XXX
   */
  sourceIp?: string;
  /**
   * @example
   * 1740968766
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      sourceIp: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

