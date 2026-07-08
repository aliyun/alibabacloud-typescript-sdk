// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallTrafficTrendResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The Internet firewall traffic.
   * 
   * @example
   * 100
   */
  internetBps?: number;
  /**
   * @remarks
   * The NAT firewall traffic.
   * 
   * @example
   * 100
   */
  natBps?: number;
  /**
   * @remarks
   * The time when the traffic occurred. The value is a UNIX timestamp. Unit: seconds.
   * 
   * If the data at this point in time has not been processed, the values of all other fields are -1.
   * 
   * @example
   * 1758470400
   */
  time?: number;
  /**
   * @remarks
   * The total firewall traffic.
   * 
   * @example
   * 300
   */
  totalBps?: number;
  /**
   * @remarks
   * The VPC firewall traffic.
   * 
   * @example
   * 100
   */
  vpcBps?: number;
  static names(): { [key: string]: string } {
    return {
      internetBps: 'InternetBps',
      natBps: 'NatBps',
      time: 'Time',
      totalBps: 'TotalBps',
      vpcBps: 'VpcBps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetBps: 'number',
      natBps: 'number',
      time: 'number',
      totalBps: 'number',
      vpcBps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallTrafficTrendResponseBodyMaxBandwidthTimeBps extends $dara.Model {
  /**
   * @remarks
   * The Internet firewall traffic at the time of peak total traffic.
   * 
   * @example
   * 100
   */
  internetBps?: number;
  /**
   * @remarks
   * The NAT firewall traffic at the time of peak total traffic.
   * 
   * @example
   * 100
   */
  natBps?: number;
  /**
   * @remarks
   * The peak total traffic.
   * 
   * @example
   * 1000
   */
  totalBps?: number;
  /**
   * @remarks
   * The VPC firewall traffic at the time of peak total traffic.
   * 
   * @example
   * 100
   */
  vpcBps?: number;
  static names(): { [key: string]: string } {
    return {
      internetBps: 'InternetBps',
      natBps: 'NatBps',
      totalBps: 'TotalBps',
      vpcBps: 'VpcBps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetBps: 'number',
      natBps: 'number',
      totalBps: 'number',
      vpcBps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallTrafficTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data list.
   */
  dataList?: DescribeFirewallTrafficTrendResponseBodyDataList[];
  /**
   * @remarks
   * The timestamp when the peak total traffic occurred. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1758470400
   */
  maxBandwidthTime?: number;
  /**
   * @remarks
   * The traffic distribution at the time of peak total traffic.
   */
  maxBandwidthTimeBps?: DescribeFirewallTrafficTrendResponseBodyMaxBandwidthTimeBps;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4E7F94C7-781F-5192-86CF-DB085****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      maxBandwidthTime: 'MaxBandwidthTime',
      maxBandwidthTimeBps: 'MaxBandwidthTimeBps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeFirewallTrafficTrendResponseBodyDataList },
      maxBandwidthTime: 'number',
      maxBandwidthTimeBps: DescribeFirewallTrafficTrendResponseBodyMaxBandwidthTimeBps,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    if(this.maxBandwidthTimeBps && typeof (this.maxBandwidthTimeBps as any).validate === 'function') {
      (this.maxBandwidthTimeBps as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

