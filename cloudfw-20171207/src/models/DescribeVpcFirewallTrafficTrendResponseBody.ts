// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallTrafficTrendResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The inbound bandwidth. Unit: bit/s.
   * 
   * @example
   * 187
   */
  inBps?: number;
  /**
   * @remarks
   * The inbound traffic. Unit: bytes.
   * 
   * @example
   * 32
   */
  inBytes?: number;
  /**
   * @remarks
   * The inbound packet forwarding rate. Unit: pps.
   * 
   * @example
   * 2
   */
  inPps?: number;
  /**
   * @remarks
   * The number of new connections.
   * 
   * @example
   * 27
   */
  newConn?: number;
  /**
   * @remarks
   * The outbound traffic. Unit: bytes.
   * 
   * @example
   * 45
   */
  outBps?: number;
  /**
   * @remarks
   * The total outbound network throughput. Unit: bytes.
   * 
   * @example
   * 230
   */
  outBytes?: number;
  /**
   * @remarks
   * The outbound packet forwarding rate. Unit: pps.
   * 
   * @example
   * 2
   */
  outPps?: number;
  /**
   * @remarks
   * The number of sessions.
   * 
   * @example
   * 27
   */
  sessionCount?: number;
  /**
   * @remarks
   * The time when the traffic occurred. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1758470400
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      inBps: 'InBps',
      inBytes: 'InBytes',
      inPps: 'InPps',
      newConn: 'NewConn',
      outBps: 'OutBps',
      outBytes: 'OutBytes',
      outPps: 'OutPps',
      sessionCount: 'SessionCount',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inBps: 'number',
      inBytes: 'number',
      inPps: 'number',
      newConn: 'number',
      outBps: 'number',
      outBytes: 'number',
      outPps: 'number',
      sessionCount: 'number',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallTrafficTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The average inbound network throughput. Unit: bit/s.
   * 
   * @example
   * 1264110
   */
  avgInBps?: number;
  /**
   * @remarks
   * The average outbound network throughput. Unit: bit/s.
   * 
   * @example
   * 68915
   */
  avgOutBps?: number;
  /**
   * @remarks
   * The average number of requests.
   * 
   * @example
   * 1995
   */
  avgSession?: number;
  /**
   * @remarks
   * The average total network throughput in both the outbound and inbound directions. Unit: bit/s.
   * 
   * @example
   * 34291
   */
  avgTotalBps?: number;
  /**
   * @remarks
   * The data list.
   */
  dataList?: DescribeVpcFirewallTrafficTrendResponseBodyDataList[];
  /**
   * @remarks
   * The timestamp when the peak bandwidth occurred. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1768008060
   */
  maxBandwidthTime?: number;
  /**
   * @remarks
   * The peak inbound network throughput. Unit: bit/s.
   * 
   * @example
   * 1436
   */
  maxInBps?: number;
  /**
   * @remarks
   * The peak outbound network throughput. Unit: bit/s.
   * 
   * @example
   * 2128
   */
  maxOutBps?: number;
  /**
   * @remarks
   * The peak number of requests.
   * 
   * @example
   * 2003
   */
  maxSession?: number;
  /**
   * @remarks
   * The peak total network throughput in both the outbound and inbound directions. Unit: bit/s.
   * 
   * @example
   * 61947852
   */
  maxTotalBps?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 45F8B9E6-8583-56B3-A127-1B421C9E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total traffic. Unit: bytes.
   * 
   * @example
   * 141688156232
   */
  totalBytes?: number;
  /**
   * @remarks
   * The total inbound network throughput. Unit: bytes.
   * 
   * @example
   * 2659635037
   */
  totalInBytes?: number;
  /**
   * @remarks
   * The total outbound network throughput. Unit: bytes.
   * 
   * @example
   * 399762701
   */
  totalOutBytes?: number;
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 1078757
   */
  totalSession?: number;
  static names(): { [key: string]: string } {
    return {
      avgInBps: 'AvgInBps',
      avgOutBps: 'AvgOutBps',
      avgSession: 'AvgSession',
      avgTotalBps: 'AvgTotalBps',
      dataList: 'DataList',
      maxBandwidthTime: 'MaxBandwidthTime',
      maxInBps: 'MaxInBps',
      maxOutBps: 'MaxOutBps',
      maxSession: 'MaxSession',
      maxTotalBps: 'MaxTotalBps',
      requestId: 'RequestId',
      totalBytes: 'TotalBytes',
      totalInBytes: 'TotalInBytes',
      totalOutBytes: 'TotalOutBytes',
      totalSession: 'TotalSession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgInBps: 'number',
      avgOutBps: 'number',
      avgSession: 'number',
      avgTotalBps: 'number',
      dataList: { 'type': 'array', 'itemType': DescribeVpcFirewallTrafficTrendResponseBodyDataList },
      maxBandwidthTime: 'number',
      maxInBps: 'number',
      maxOutBps: 'number',
      maxSession: 'number',
      maxTotalBps: 'number',
      requestId: 'string',
      totalBytes: 'number',
      totalInBytes: 'number',
      totalOutBytes: 'number',
      totalSession: 'number',
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

