// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatFirewallTrafficTrendResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The maximum inbound network throughput, which indicates the maximum number of bits that are sent inbound per second. Unit: bit/s.
   * 
   * @example
   * 18038632
   */
  maxInBps?: number;
  /**
   * @remarks
   * The maximum outbound network throughput, which indicates the maximum number of bits that are sent outbound per second. Unit: bit/s.
   * 
   * @example
   * 122596487
   */
  maxOutBps?: number;
  /**
   * @remarks
   * The total maximum inbound and outbound network throughput, which indicates the maximum number of bits that are sent inbound and outbound per second. Unit: bit/s.
   * 
   * @example
   * 66953194
   */
  maxTotalBps?: number;
  /**
   * @remarks
   * The time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1734418980
   */
  trafficTime?: number;
  static names(): { [key: string]: string } {
    return {
      maxInBps: 'MaxInBps',
      maxOutBps: 'MaxOutBps',
      maxTotalBps: 'MaxTotalBps',
      trafficTime: 'TrafficTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxInBps: 'number',
      maxOutBps: 'number',
      maxTotalBps: 'number',
      trafficTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

