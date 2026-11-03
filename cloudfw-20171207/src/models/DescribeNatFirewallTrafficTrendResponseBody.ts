// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatFirewallTrafficTrendResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The peak network throughput in the inbound direction. Unit: bit/s.
   * 
   * @example
   * 18038632
   */
  maxInBps?: number;
  /**
   * @remarks
   * The peak network throughput in the outbound direction. Unit: bit/s.
   * 
   * @example
   * 122596487
   */
  maxOutBps?: number;
  /**
   * @remarks
   * The peak network throughput in both the outbound and inbound directions. Unit: bit/s.
   * 
   * @example
   * 66953194
   */
  maxTotalBps?: number;
  /**
   * @remarks
   * The query time. The value is a UNIX timestamp in seconds.
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

export class DescribeNatFirewallTrafficTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of traffic statistics information.
   */
  dataList?: DescribeNatFirewallTrafficTrendResponseBodyDataList[];
  /**
   * @remarks
   * The peak network throughput in the inbound direction. Unit: bit/s.
   * 
   * @example
   * 18038632
   */
  maxInBps?: number;
  /**
   * @remarks
   * The peak network throughput in the outbound direction. Unit: bit/s.
   * 
   * @example
   * 122596487
   */
  maxOutBps?: number;
  /**
   * @remarks
   * The peak network throughput in both the outbound and inbound directions. Unit: bit/s.
   * 
   * @example
   * 66953194
   */
  maxTotalBps?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 87F23A3A-6F57-59C3-8237-A090D0613D71
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      maxInBps: 'MaxInBps',
      maxOutBps: 'MaxOutBps',
      maxTotalBps: 'MaxTotalBps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeNatFirewallTrafficTrendResponseBodyDataList },
      maxInBps: 'number',
      maxOutBps: 'number',
      maxTotalBps: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

