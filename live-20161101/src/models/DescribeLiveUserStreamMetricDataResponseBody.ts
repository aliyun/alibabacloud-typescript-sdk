// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveUserStreamMetricDataResponseBodyStreamDetailData extends $dara.Model {
  /**
   * @remarks
   * The application name. This value is returned regardless of whether it is specified.
   * 
   * @example
   * app
   */
  appName?: string;
  /**
   * @remarks
   * The total bandwidth per minute for the stream, in bps.
   * 
   * @example
   * 423304182.66
   */
  bps?: number;
  /**
   * @remarks
   * The total number of concurrent connections per minute for the stream.
   * 
   * > **Concurrent connections** refers to the count of client process connections to the same stream within a unit of time.
   * 
   * @example
   * 423304182
   */
  count?: number;
  /**
   * @remarks
   * The bandwidth for the FLV protocol, in bps. This field is not returned if the specified protocol does not match.
   * 
   * @example
   * 454
   */
  flvBps?: number;
  /**
   * @remarks
   * The number of concurrent connections for the FLV protocol. This field is not returned if the specified protocol does not match.
   * 
   * @example
   * 32
   */
  flvCount?: number;
  /**
   * @remarks
   * The traffic for the FLV protocol, in bytes. This field is not returned if the specified protocol does not match.
   * 
   * @example
   * 1254
   */
  flvTraffic?: number;
  /**
   * @remarks
   * The bandwidth for the HLS protocol, in bps. This field is not returned if the specified protocol does not match.
   * 
   * @example
   * 4456
   */
  hlsBps?: number;
  /**
   * @remarks
   * The number of concurrent connections for the HLS protocol. This field is not returned if the specified protocol does not match.
   * 
   * @example
   * 56
   */
  hlsCount?: number;
  /**
   * @remarks
   * The traffic for the HLS protocol, in bytes. This field is not returned if the specified protocol does not match.
   * 
   * @example
   * 568
   */
  hlsTraffic?: number;
  /**
   * @remarks
   * The number of new connections per minute for the stream.
   * 
   * @example
   * 450
   */
  newConns?: number;
  /**
   * @remarks
   * The bandwidth for the P2P protocol, in bps. This field is not returned if the specified protocol does not match.
   * 
   * @example
   * 6845
   */
  p2pBps?: number;
  /**
   * @remarks
   * The number of concurrent connections for the P2P protocol. This field is not returned if the specified protocol does not match.
   * 
   * @example
   * 78
   */
  p2pCount?: number;
  /**
   * @remarks
   * The traffic for the P2P protocol, in bytes. This field is not returned if the specified protocol does not match.
   * 
   * @example
   * 4102
   */
  p2pTraffic?: number;
  /**
   * @remarks
   * The bandwidth for the RTMP protocol, in bps. This field is not returned if the specified protocol does not match.
   * 
   * @example
   * 3323
   */
  rtmpBps?: number;
  /**
   * @remarks
   * The number of concurrent connections for the RTMP protocol. This field is not returned if the specified protocol does not match.
   * 
   * @example
   * 63
   */
  rtmpCount?: number;
  /**
   * @remarks
   * The traffic for the RTMP protocol, in bytes. This field is not returned if the specified protocol does not match.
   * 
   * @example
   * 5568
   */
  rtmpTraffic?: number;
  /**
   * @remarks
   * The bandwidth for the RTS protocol, in bps. This field is not returned if the specified protocol does not match.
   * 
   * @example
   * 2361
   */
  rtsBps?: number;
  /**
   * @remarks
   * The number of concurrent connections for the RTS protocol. This field is not returned if the specified protocol does not match.
   * 
   * @example
   * 89
   */
  rtsCount?: number;
  /**
   * @remarks
   * The traffic for the RTS protocol, in bytes. This field is not returned if the specified protocol does not match.
   * 
   * @example
   * 2322
   */
  rtsTraffic?: number;
  /**
   * @remarks
   * The stream name. This value is returned regardless of whether it is specified.
   * 
   * @example
   * test.flv
   */
  streamName?: string;
  /**
   * @remarks
   * The start time of the time slice. The time is in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format in UTC+0.
   * 
   * @example
   * 2015-12-10T20:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The total traffic per minute for the stream, in bytes.
   * 
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
   * @remarks
   * The streaming domain information.
   * 
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
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F****
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The time is in the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format in UTC.
   * 
   * @example
   * 2015-12-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The traffic data for each time interval.
   */
  streamDetailData?: DescribeLiveUserStreamMetricDataResponseBodyStreamDetailData[];
  /**
   * @remarks
   * The total number of entries.
   * 
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

