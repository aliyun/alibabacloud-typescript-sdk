// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamMetricDetailDataResponseBodyStreamDetailDataStreamData extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * app
   */
  appName?: string;
  /**
   * @remarks
   * The total bandwidth consumed by the stream per minute. Unit: bit/s.
   * 
   * @example
   * 423304182.66
   */
  bps?: number;
  /**
   * @remarks
   * The total number of online viewers for the stream per minute.
   * 
   * @example
   * 423304182
   */
  count?: number;
  /**
   * @remarks
   * The bandwidth over the Flash Video (FLV) protocol. Unit: bit/s.
   * 
   * >  This parameter is not returned if no traffic is generated over the protocol.
   * 
   * @example
   * 454
   */
  flvBps?: number;
  /**
   * @remarks
   * The number of online viewers over the FLV protocol.
   * 
   * >  This parameter is not returned if no traffic is generated over the protocol.
   * 
   * @example
   * 32
   */
  flvCount?: number;
  /**
   * @remarks
   * The amount of traffic over the FLV protocol. Unit: bytes.
   * 
   * >  This parameter is not returned if no traffic is generated over the protocol.
   * 
   * @example
   * 1254
   */
  flvTraffic?: number;
  /**
   * @remarks
   * The bandwidth over the HTTP Live Streaming (HLS) protocol. Unit: bit/s.
   * 
   * >  This parameter is not returned if no traffic is generated over the protocol.
   * 
   * @example
   * 4456
   */
  hlsBps?: number;
  /**
   * @remarks
   * The number of online viewers over the HLS protocol.
   * 
   * >  Currently, this parameter is not supported.
   * 
   * @example
   * 56
   */
  hlsCount?: number;
  /**
   * @remarks
   * The amount of traffic over the HLS protocol. Unit: bytes.
   * 
   * >  This parameter is not returned if no traffic is generated over the protocol.
   * 
   * @example
   * 568
   */
  hlsTraffic?: number;
  /**
   * @remarks
   * Number of new connections established per minute.
   * 
   * @example
   * 450
   */
  newConns?: string;
  /**
   * @remarks
   * The bandwidth over the P2P protocol. Unit: bit/s.
   * 
   * >  This parameter is not returned if no traffic is generated over the protocol.
   * 
   * @example
   * 6845
   */
  p2pBps?: number;
  /**
   * @remarks
   * The number of online viewers over the P2P protocol.
   * 
   * >  This parameter is not returned if no traffic is generated over the protocol.
   * 
   * @example
   * 78
   */
  p2pCount?: number;
  /**
   * @remarks
   * The amount of traffic over the peer-to-peer (P2P) protocol. Unit: bytes.
   * 
   * >  This parameter is not returned if no traffic is generated over the protocol.
   * 
   * @example
   * 4102
   */
  p2pTraffic?: number;
  /**
   * @remarks
   * The bandwidth over the Real-Time Messaging Protocol (RTMP) protocol. Unit: bit/s.
   * 
   * >  This parameter is not returned if no traffic is generated over the protocol.
   * 
   * @example
   * 3323
   */
  rtmpBps?: number;
  /**
   * @remarks
   * The number of online viewers over the RTMP protocol.
   * 
   * >  This parameter is not returned if no traffic is generated over the protocol.
   * 
   * @example
   * 63
   */
  rtmpCount?: number;
  /**
   * @remarks
   * The amount of traffic over the RTMP protocol. Unit: bytes.
   * 
   * >  This parameter is not returned if no traffic is generated over the protocol.
   * 
   * @example
   * 5568
   */
  rtmpTraffic?: number;
  /**
   * @remarks
   * The bandwidth over the RTS protocol. Unit: bit/s.
   * 
   * >  This parameter is not returned if no traffic is generated over the protocol.
   * 
   * @example
   * 2361
   */
  rtsBps?: number;
  /**
   * @remarks
   * The number of online viewers over the Real-Time Streaming (RTS) protocol.
   * 
   * >  This parameter is not returned if no traffic is generated over the protocol.
   * 
   * @example
   * 89
   */
  rtsCount?: number;
  /**
   * @remarks
   * The amount of traffic over the RTS protocol. Unit: bytes.
   * 
   * >  This parameter is not returned if no traffic is generated over the protocol.
   * 
   * @example
   * 2322
   */
  rtsTraffic?: number;
  /**
   * @remarks
   * The name of the stream.
   * 
   * @example
   * test.flv
   */
  streamName?: string;
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2015-12-10T20:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The total amount of traffic consumed by the stream per minute. Unit: bytes.
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
      newConns: 'string',
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

export class DescribeLiveStreamMetricDetailDataResponseBodyStreamDetailData extends $dara.Model {
  streamData?: DescribeLiveStreamMetricDetailDataResponseBodyStreamDetailDataStreamData[];
  static names(): { [key: string]: string } {
    return {
      streamData: 'StreamData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamData: { 'type': 'array', 'itemType': DescribeLiveStreamMetricDetailDataResponseBodyStreamDetailDataStreamData },
    };
  }

  validate() {
    if(Array.isArray(this.streamData)) {
      $dara.Model.validateArray(this.streamData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamMetricDetailDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2015-12-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The token that determines the start point of the next query. This parameter is returned if more data results are available.
   * 
   * @example
   * UjsM9x3aVcJi9a0-ArwJUTTC67C***37C0=
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The number of rows returned.
   * 
   * @example
   * 5000
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B955107D-E658-4E77-B913-E0AC3D31693E
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range during which data was queried.
   * 
   * @example
   * 2015-12-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The data array returned.
   */
  streamDetailData?: DescribeLiveStreamMetricDetailDataResponseBodyStreamDetailData;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      startTime: 'StartTime',
      streamDetailData: 'StreamDetailData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      nextPageToken: 'string',
      pageSize: 'number',
      requestId: 'string',
      startTime: 'string',
      streamDetailData: DescribeLiveStreamMetricDetailDataResponseBodyStreamDetailData,
    };
  }

  validate() {
    if(this.streamDetailData && typeof (this.streamDetailData as any).validate === 'function') {
      (this.streamDetailData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

