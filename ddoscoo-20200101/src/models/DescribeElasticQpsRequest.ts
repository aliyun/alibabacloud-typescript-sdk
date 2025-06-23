// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticQpsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * >  This UNIX timestamp must indicate a point in time that is accurate to the minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684339200
   */
  endTime?: number;
  /**
   * @remarks
   * The sampling interval. Unit: seconds. The value must be a multiple of 60. Default value: 60. Unit: seconds. The query result varies depending on the sampling interval.
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * The IP address of the Anti-DDoS Proxy instance to query.
   * 
   * @example
   * 203.107.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   **cn**: Anti-DDoS Proxy (Chinese Mainland)
   * *   **cn-hongkong**: Anti-DDoS Proxy (Outside Chinese Mainland)
   * 
   * This parameter is required.
   * 
   * @example
   * cn
   */
  region?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * >  This UNIX timestamp must indicate a point in time that is accurate to the minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684252800
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      interval: 'Interval',
      ip: 'Ip',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      interval: 'string',
      ip: 'string',
      region: 'string',
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

