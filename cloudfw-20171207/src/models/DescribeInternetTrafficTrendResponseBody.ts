// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetTrafficTrendResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The inbound network throughput. Unit: bps.
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
   * 235
   */
  inBytes?: number;
  /**
   * @remarks
   * The inbound packet rate. Unit: pps.
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
   * The outbound network throughput. Unit: bps.
   * 
   * @example
   * 45
   */
  outBps?: number;
  /**
   * @remarks
   * The outbound traffic. Unit: bytes.
   * 
   * @example
   * 1123
   */
  outBytes?: number;
  /**
   * @remarks
   * The outbound packet rate. Unit: pps.
   * 
   * @example
   * 2
   */
  outPps?: number;
  /**
   * @remarks
   * The number of requests.
   * 
   * @example
   * 27
   */
  sessionCount?: number;
  /**
   * @remarks
   * The time when the traffic was recorded. This value is a UNIX timestamp in seconds.
   * 
   * If data for this time point has not been processed, the values of other fields are -1.
   * 
   * @example
   * 1659405600
   */
  time?: number;
  /**
   * @remarks
   * The total inbound and outbound network throughput. Unit: bps.
   * 
   * @example
   * 232
   */
  totalBps?: number;
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
      totalBps: 'TotalBps',
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
      totalBps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInternetTrafficTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The average inbound network throughput. Unit: bps.
   * 
   * @example
   * 6114152
   */
  avgInBps?: number;
  /**
   * @remarks
   * The average outbound network throughput. Unit: bps.
   * 
   * @example
   * 70148993
   */
  avgOutBps?: number;
  /**
   * @remarks
   * The average number of requests.
   * 
   * @example
   * 79013
   */
  avgSession?: number;
  /**
   * @remarks
   * The average total network throughput for inbound and outbound traffic. Unit: bps.
   * 
   * @example
   * 2306
   */
  avgTotalBps?: number;
  /**
   * @remarks
   * A list of traffic statistics.
   */
  dataList?: DescribeInternetTrafficTrendResponseBodyDataList[];
  /**
   * @remarks
   * The UNIX timestamp when the peak bandwidth was reached. Unit: seconds.
   * 
   * @example
   * 1672736400
   */
  maxBandwidthTime?: number;
  /**
   * @remarks
   * The peak daily excess traffic.
   * 
   * @example
   * 873
   */
  maxDayExceedBytes?: number;
  /**
   * @remarks
   * The peak inbound network throughput. Unit: bps.
   * 
   * @example
   * 10275643
   */
  maxInBps?: number;
  /**
   * @remarks
   * The peak outbound network throughput. Unit: bps.
   * 
   * @example
   * 395188
   */
  maxOutBps?: number;
  /**
   * @remarks
   * The peak number of requests.
   * 
   * @example
   * 931641
   */
  maxSession?: number;
  /**
   * @remarks
   * The peak total network throughput for inbound and outbound traffic. Unit: bps.
   * 
   * @example
   * 89783147
   */
  maxTotalBps?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C7E837BE-0379-565E-B7B4-DE595C8D337C
   */
  requestId?: string;
  /**
   * @remarks
   * The total inbound and outbound traffic. Unit: bytes.
   * 
   * @example
   * 963227674958
   */
  totalBytes?: number;
  /**
   * @remarks
   * The total excess traffic.
   * 
   * @example
   * 4243873
   */
  totalExceedBytes?: number;
  /**
   * @remarks
   * The total inbound traffic. Unit: bytes.
   * 
   * @example
   * 41536824243873
   */
  totalInBytes?: number;
  /**
   * @remarks
   * The total outbound traffic. Unit: bytes.
   * 
   * @example
   * 2660894567178
   */
  totalOutBytes?: number;
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 1061449
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
      maxDayExceedBytes: 'MaxDayExceedBytes',
      maxInBps: 'MaxInBps',
      maxOutBps: 'MaxOutBps',
      maxSession: 'MaxSession',
      maxTotalBps: 'MaxTotalBps',
      requestId: 'RequestId',
      totalBytes: 'TotalBytes',
      totalExceedBytes: 'TotalExceedBytes',
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
      dataList: { 'type': 'array', 'itemType': DescribeInternetTrafficTrendResponseBodyDataList },
      maxBandwidthTime: 'number',
      maxDayExceedBytes: 'number',
      maxInBps: 'number',
      maxOutBps: 'number',
      maxSession: 'number',
      maxTotalBps: 'number',
      requestId: 'string',
      totalBytes: 'number',
      totalExceedBytes: 'number',
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

