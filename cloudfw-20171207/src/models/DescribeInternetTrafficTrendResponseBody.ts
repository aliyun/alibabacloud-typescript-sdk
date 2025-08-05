// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetTrafficTrendResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The inbound network throughput, which indicates the number of bits that are sent inbound per second. Unit: bit/s.
   * 
   * @example
   * 187
   */
  inBps?: number;
  /**
   * @remarks
   * The inbound network throughput, which indicates the total number of bytes that are sent inbound. Unit: bytes.
   * 
   * @example
   * 235
   */
  inBytes?: number;
  /**
   * @remarks
   * The inbound network throughput, which indicates the number of packets that are sent inbound per second. Unit: packets per second (pps).
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
   * The outbound network throughput, which indicates the number of bits that are sent outbound per second. Unit: bit/s.
   * 
   * @example
   * 45
   */
  outBps?: number;
  /**
   * @remarks
   * The outbound network throughput, which indicates the total number of bytes that are sent outbound. Unit: bytes.
   * 
   * @example
   * 1123
   */
  outBytes?: number;
  /**
   * @remarks
   * The outbound network throughput, which indicates the number of packets that are sent outbound per second. Unit: pps.
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
   * The time when traffic is generated. The value is a UNIX timestamp. Unit: seconds.
   * 
   * If processing is not complete at this point in time, -1 is returned for all other fields.
   * 
   * @example
   * 1659405600
   */
  time?: number;
  /**
   * @remarks
   * The total outbound and inbound network throughput, which indicates the total number of bits that are sent inbound and outbound per second. Unit: bit/s.
   * 
   * @example
   * 323
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
   * The average inbound network throughput, which indicates the average number of bits that are sent inbound per second. Unit: bit/s.
   * 
   * @example
   * 6114152
   */
  avgInBps?: number;
  /**
   * @remarks
   * The average outbound network throughput, which indicates the average number of bits that are sent outbound per second. Unit: bit/s.
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
   * The total average inbound and outbound network throughput, which indicates the average number of bits that are sent inbound and outbound per second. Unit: bit/s.
   * 
   * @example
   * 2306
   */
  avgTotalBps?: number;
  /**
   * @remarks
   * The statistics on traffic.
   */
  dataList?: DescribeInternetTrafficTrendResponseBodyDataList[];
  /**
   * @remarks
   * The timestamp generated when the bandwidth reaches the peak value. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1672736400
   */
  maxBandwidthTime?: number;
  /**
   * @remarks
   * The maximum volume of excess traffic allowed per day.
   * 
   * @example
   * 873
   */
  maxDayExceedBytes?: number;
  /**
   * @remarks
   * The maximum inbound network throughput, which indicates the maximum number of bits that are sent inbound per second. Unit: bit/s.
   * 
   * @example
   * 10275643
   */
  maxInBps?: number;
  /**
   * @remarks
   * The maximum outbound network throughput, which indicates the maximum number of bits that are sent outbound per second. Unit: bit/s.
   * 
   * @example
   * 395188
   */
  maxOutBps?: number;
  /**
   * @remarks
   * The number of requests during the peak hour of the network throughout.
   * 
   * @example
   * 931641
   */
  maxSession?: number;
  /**
   * @remarks
   * The total maximum inbound and outbound network throughput, which indicates the maximum number of bits that are sent inbound and outbound per second. Unit: bit/s.
   * 
   * @example
   * 89783147
   */
  maxTotalBps?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C7E837BE-0379-565E-B7B4-DE595C8D337C
   */
  requestId?: string;
  /**
   * @remarks
   * The total inbound and outbound network throughput, which indicates the total number of bytes that are sent inbound and outbound. Unit: bytes.
   * 
   * @example
   * 963227674958
   */
  totalBytes?: number;
  /**
   * @remarks
   * The total volume of excess traffic.
   * 
   * @example
   * 4243873
   */
  totalExceedBytes?: number;
  /**
   * @remarks
   * The inbound network throughput, which indicates the total number of bytes that are sent inbound. Unit: bytes.
   * 
   * @example
   * 41536824243873
   */
  totalInBytes?: number;
  /**
   * @remarks
   * The outbound network throughput, which indicates the total number of bytes that are sent outbound. Unit: bytes.
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

