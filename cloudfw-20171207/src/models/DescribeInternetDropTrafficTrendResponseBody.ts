// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetDropTrafficTrendResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 12
   */
  aclDrop?: number;
  /**
   * @example
   * 2018-08-25 12:00:00
   */
  dataTime?: string;
  /**
   * @example
   * 1
   */
  dropRatio?: string;
  /**
   * @example
   * 0
   */
  dropRing?: number;
  /**
   * @example
   * 1
   */
  dropRingRatio?: string;
  /**
   * @example
   * 12
   */
  dropSession?: number;
  /**
   * @example
   * 5
   */
  ipsDrop?: number;
  /**
   * @example
   * 2018-08-25 12:00:00
   */
  ringDataTime?: string;
  /**
   * @example
   * 1724982259
   */
  ringTime?: number;
  /**
   * @example
   * 1659405600
   */
  time?: number;
  /**
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
  dataList?: DescribeInternetDropTrafficTrendResponseBodyDataList[];
  /**
   * @example
   * 8090
   */
  dropSessionMax?: number;
  /**
   * @example
   * 12.34
   */
  ratioAverage?: string;
  /**
   * @example
   * F0F82705-CFC7-5F83-86C8-A063892F****
   */
  requestId?: string;
  /**
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

