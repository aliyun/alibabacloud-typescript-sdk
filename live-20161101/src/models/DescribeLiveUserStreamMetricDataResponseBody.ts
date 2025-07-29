// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveUserStreamMetricDataResponseBodyStreamDetailData extends $dara.Model {
  /**
   * @example
   * app
   */
  appName?: string;
  /**
   * @example
   * 423304182.66
   */
  bps?: number;
  /**
   * @example
   * 423304182
   */
  count?: number;
  /**
   * @example
   * 454
   */
  flvBps?: number;
  /**
   * @example
   * 32
   */
  flvCount?: number;
  /**
   * @example
   * 1254
   */
  flvTraffic?: number;
  /**
   * @example
   * 4456
   */
  hlsBps?: number;
  /**
   * @example
   * 56
   */
  hlsCount?: number;
  /**
   * @example
   * 568
   */
  hlsTraffic?: number;
  /**
   * @example
   * 450
   */
  newConns?: number;
  /**
   * @example
   * 6845
   */
  p2pBps?: number;
  /**
   * @example
   * 78
   */
  p2pCount?: number;
  /**
   * @example
   * 4102
   */
  p2pTraffic?: number;
  /**
   * @example
   * 3323
   */
  rtmpBps?: number;
  /**
   * @example
   * 63
   */
  rtmpCount?: number;
  /**
   * @example
   * 5568
   */
  rtmpTraffic?: number;
  /**
   * @example
   * 2361
   */
  rtsBps?: number;
  /**
   * @example
   * 89
   */
  rtsCount?: number;
  /**
   * @example
   * 2322
   */
  rtsTraffic?: number;
  /**
   * @example
   * test.flv
   */
  streamName?: string;
  /**
   * @example
   * 2015-12-10T20:00:00Z
   */
  timeStamp?: string;
  /**
   * @example
   * 423304182
   */
  traffic?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      bps: 'Bps',
      count: 'Count',
      flvBps: 'FlvBps',
      flvCount: 'FlvCount',
      flvTraffic: 'FlvTraffic',
      hlsBps: 'HlsBps',
      hlsCount: 'HlsCount',
      hlsTraffic: 'HlsTraffic',
      newConns: 'NewConns',
      p2pBps: 'P2pBps',
      p2pCount: 'P2pCount',
      p2pTraffic: 'P2pTraffic',
      rtmpBps: 'RtmpBps',
      rtmpCount: 'RtmpCount',
      rtmpTraffic: 'RtmpTraffic',
      rtsBps: 'RtsBps',
      rtsCount: 'RtsCount',
      rtsTraffic: 'RtsTraffic',
      streamName: 'StreamName',
      timeStamp: 'TimeStamp',
      traffic: 'Traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      bps: 'number',
      count: 'number',
      flvBps: 'number',
      flvCount: 'number',
      flvTraffic: 'number',
      hlsBps: 'number',
      hlsCount: 'number',
      hlsTraffic: 'number',
      newConns: 'number',
      p2pBps: 'number',
      p2pCount: 'number',
      p2pTraffic: 'number',
      rtmpBps: 'number',
      rtmpCount: 'number',
      rtmpTraffic: 'number',
      rtsBps: 'number',
      rtsCount: 'number',
      rtsTraffic: 'number',
      streamName: 'string',
      timeStamp: 'string',
      traffic: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUserStreamMetricDataResponseBody extends $dara.Model {
  /**
   * @example
   * test.com
   */
  domainName?: string;
  /**
   * @remarks
   * YYYY-MM-DDThh:mm:ssZ
   * 
   * @example
   * 2015-12-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F****
   */
  requestId?: string;
  /**
   * @example
   * 2015-12-10T20:00:00Z
   */
  startTime?: string;
  streamDetailData?: DescribeLiveUserStreamMetricDataResponseBodyStreamDetailData[];
  /**
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      startTime: 'StartTime',
      streamDetailData: 'StreamDetailData',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      startTime: 'string',
      streamDetailData: { 'type': 'array', 'itemType': DescribeLiveUserStreamMetricDataResponseBodyStreamDetailData },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.streamDetailData)) {
      $dara.Model.validateArray(this.streamDetailData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

