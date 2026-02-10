// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamMetricDetailDataResponseBodyStreamDetailDataStreamData extends $dara.Model {
  appName?: string;
  bps?: number;
  count?: number;
  flvBps?: number;
  flvCount?: number;
  flvTraffic?: number;
  hlsBps?: number;
  hlsCount?: number;
  hlsTraffic?: number;
  newConns?: string;
  p2pBps?: number;
  p2pCount?: number;
  p2pTraffic?: number;
  rtmpBps?: number;
  rtmpCount?: number;
  rtmpTraffic?: number;
  rtsBps?: number;
  rtsCount?: number;
  rtsTraffic?: number;
  streamName?: string;
  timeStamp?: string;
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

