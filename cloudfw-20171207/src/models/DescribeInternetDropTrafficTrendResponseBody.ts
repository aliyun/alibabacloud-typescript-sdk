// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetDropTrafficTrendResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The number of corresponding intrusion prevention events.
   * 
   * @example
   * 12
   */
  aclDrop?: number;
  /**
   * @remarks
   * The current time point. The time format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2018-08-25 12:00:00
   */
  dataTime?: string;
  /**
   * @remarks
   * The list of queried traffic points.
   * 
   * @example
   * 1
   */
  dropRatio?: string;
  /**
   * @remarks
   * The value range of the object: **[0,10000]**.
   * 
   * @example
   * 0
   */
  dropRing?: number;
  /**
   * @remarks
   * The rate of network traffic. Unit: kbps.
   * 
   * @example
   * 1
   */
  dropRingRatio?: string;
  /**
   * @remarks
   * The number of blocked sessions.
   * 
   * @example
   * 12
   */
  dropSession?: number;
  /**
   * @remarks
   * The number of queried IP addresses.
   * 
   * @example
   * 5
   */
  ipsDrop?: number;
  /**
   * @remarks
   * The corresponding time point in the previous period. The time format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2018-08-25 12:00:00
   */
  ringDataTime?: string;
  /**
   * @remarks
   * The dynamic packet drop time. The value is a UNIX timestamp in seconds, which represents the number of seconds that have elapsed since January 1, 1970 (UTC).
   * 
   * @example
   * 1724982259
   */
  ringTime?: number;
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 1659405600
   */
  time?: number;
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 10
   */
  totalSession?: number;
  static names(): { [key: string]: string } {
    return {
      aclDrop: 'AclDrop',
      dataTime: 'DataTime',
      dropRatio: 'DropRatio',
      dropRing: 'DropRing',
      dropRingRatio: 'DropRingRatio',
      dropSession: 'DropSession',
      ipsDrop: 'IpsDrop',
      ringDataTime: 'RingDataTime',
      ringTime: 'RingTime',
      time: 'Time',
      totalSession: 'TotalSession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclDrop: 'number',
      dataTime: 'string',
      dropRatio: 'string',
      dropRing: 'number',
      dropRingRatio: 'string',
      dropSession: 'number',
      ipsDrop: 'number',
      ringDataTime: 'string',
      ringTime: 'number',
      time: 'number',
      totalSession: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInternetDropTrafficTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data list.
   */
  dataList?: DescribeInternetDropTrafficTrendResponseBodyDataList[];
  /**
   * @remarks
   * The maximum number of dropped sessions in the specified period, which represents the peak value.
   * 
   * @example
   * 8090
   */
  dropSessionMax?: number;
  /**
   * @remarks
   * The traffic multiplication mode. Valid values:
   * - **0**: priority mode.
   * - **1**: load balancing mode.
   * 
   * @example
   * 12.34
   */
  ratioAverage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F0F82705-CFC7-5F83-86C8-A063892F****
   */
  requestId?: string;
  /**
   * @remarks
   * The traffic rate. Unit: %.
   * 
   * @example
   * 1.23
   */
  ringRatioAverage?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      dropSessionMax: 'DropSessionMax',
      ratioAverage: 'RatioAverage',
      requestId: 'RequestId',
      ringRatioAverage: 'RingRatioAverage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeInternetDropTrafficTrendResponseBodyDataList },
      dropSessionMax: 'number',
      ratioAverage: 'string',
      requestId: 'string',
      ringRatioAverage: 'string',
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

