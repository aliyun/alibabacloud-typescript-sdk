// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatFirewallTrafficTrendResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The peak inbound network throughput. Unit: bps.
   * 
   * @example
   * 18038632
   */
  maxInBps?: number;
  /**
   * @remarks
   * The peak outbound network throughput. Unit: bps.
   * 
   * @example
   * 122596487
   */
  maxOutBps?: number;
  /**
   * @remarks
   * The peak total network throughput for inbound and outbound traffic. Unit: bps.
   * 
   * @example
   * 66953194
   */
  maxTotalBps?: number;
  /**
   * @remarks
   * The time of the query. This value is a UNIX timestamp. Unit: seconds.
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
   * A list of traffic statistics.
   */
  dataList?: DescribeNatFirewallTrafficTrendResponseBodyDataList[];
  /**
   * @remarks
   * The peak inbound network throughput. Unit: bps.
   * 
   * @example
   * 18038632
   */
  maxInBps?: number;
  /**
   * @remarks
   * The peak outbound network throughput. Unit: bps.
   * 
   * @example
   * 122596487
   */
  maxOutBps?: number;
  /**
   * @remarks
   * The peak total network throughput for inbound and outbound traffic. Unit: bps.
   * 
   * @example
   * 66953194
   */
  maxTotalBps?: number;
  /**
   * @remarks
   * The ID of the request.
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

