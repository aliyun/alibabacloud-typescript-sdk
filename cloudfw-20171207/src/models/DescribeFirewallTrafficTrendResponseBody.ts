// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallTrafficTrendResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 100
   */
  internetBps?: number;
  /**
   * @example
   * 100
   */
  natBps?: number;
  /**
   * @example
   * 1758470400
   */
  time?: number;
  /**
   * @example
   * 300
   */
  totalBps?: number;
  /**
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
   * @example
   * 100
   */
  internetBps?: number;
  /**
   * @example
   * 100
   */
  natBps?: number;
  /**
   * @example
   * 1000
   */
  totalBps?: number;
  /**
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
  dataList?: DescribeFirewallTrafficTrendResponseBodyDataList[];
  /**
   * @example
   * 1758470400
   */
  maxBandwidthTime?: number;
  maxBandwidthTimeBps?: DescribeFirewallTrafficTrendResponseBodyMaxBandwidthTimeBps;
  /**
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

