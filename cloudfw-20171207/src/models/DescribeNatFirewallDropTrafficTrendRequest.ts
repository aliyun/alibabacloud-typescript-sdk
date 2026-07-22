// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatFirewallDropTrafficTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. Specify a UNIX timestamp in seconds. This parameter is required. If this parameter is not specified, the API returns ErrorTimeError (400). Specify a UNIX timestamp in seconds. The value of EndTime must be later than the value of StartTime.
   * 
   * @example
   * 1758334822
   */
  endTime?: number;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 122.190.56.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start time. Specify a UNIX timestamp in seconds. This parameter is required. If this parameter is not specified, the API returns ErrorTimeError (400). Specify a UNIX timestamp in seconds. The value of StartTime must be earlier than the value of EndTime.
   * 
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

