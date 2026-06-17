// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetDropTrafficTrendResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The number of sessions dropped by access control list (ACL) rules.
   * 
   * @example
   * 12
   */
  aclDrop?: number;
  /**
   * @remarks
   * The current time point. The time is in the `YYYY-MM-DD HH:mm:ss` format.
   * 
   * @example
   * 2018-08-25 12:00:00
   */
  dataTime?: string;
  /**
   * @remarks
   * The ratio of dropped sessions to total sessions for this data point.
   * 
   * @example
   * 1
   */
  dropRatio?: string;
  /**
   * @remarks
   * The number of dropped sessions for the corresponding data point in the previous cycle.
   * 
   * @example
   * 0
   */
  dropRing?: number;
  /**
   * @remarks
   * The drop ratio for the corresponding data point in the previous cycle.
   * 
   * @example
   * 1
   */
  dropRingRatio?: string;
  /**
   * @remarks
   * The number of dropped sessions.
   * 
   * @example
   * 12
   */
  dropSession?: number;
  /**
   * @remarks
   * The number of sessions dropped by the intrusion prevention system (IPS).
   * 
   * @example
   * 5
   */
  ipsDrop?: number;
  /**
   * @remarks
   * The corresponding time point in the previous cycle. The time is in the `YYYY-MM-DD HH:mm:ss` format.
   * 
   * @example
   * 2018-08-25 12:00:00
   */
  ringDataTime?: string;
  /**
   * @remarks
   * The timestamp for the corresponding data point in the previous cycle. This value is a Unix timestamp that represents the number of seconds that have elapsed since 00:00:00 UTC on January 1, 1970.
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
   * The total number of sessions.
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
   * The peak number of dropped sessions in the specified period.
   * 
   * @example
   * 8090
   */
  dropSessionMax?: number;
  /**
   * @remarks
   * The average drop ratio for the entire query period, expressed as a percentage.
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
   * The average drop ratio from the previous cycle, expressed as a percentage.
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

