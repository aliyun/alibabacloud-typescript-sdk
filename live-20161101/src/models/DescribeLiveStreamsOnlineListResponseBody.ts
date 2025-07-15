// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamsOnlineListResponseBodyOnlineInfoLiveStreamOnlineInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the audio codec.
   * 
   * @example
   * 10
   */
  audioCodecId?: number;
  /**
   * @remarks
   * The audio bitrate of the live stream. Unit: Kbit/s.
   * 
   * >  This parameter can be returned after you submit a ticket for whitelist configuration. For more information about how to submit a ticket, see Contact us.
   * 
   * @example
   * 600
   */
  audioDataRate?: number;
  /**
   * @remarks
   * The IP address of the client for stream ingest.
   * 
   * @example
   * 106.11.XX.XX
   */
  clientIp?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The frame rate. Unit: FPS.
   * 
   * @example
   * 15
   */
  frameRate?: number;
  /**
   * @remarks
   * The height of the video resolution. Unit: pixels.
   * 
   * @example
   * 720
   */
  height?: number;
  /**
   * @remarks
   * The ingest domain. If live center ingest was used, the streaming domain is returned.
   * 
   * @example
   * demo.aliyundoc.com
   */
  publishDomain?: string;
  /**
   * @remarks
   * The start time of stream ingest. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-08-09T02:37:59Z
   */
  publishTime?: string;
  /**
   * @remarks
   * The ingest type. Valid values:
   * 
   * *   **edge**: edge ingest.
   * *   **center**: live center ingest.
   * 
   * @example
   * edge
   */
  publishType?: string;
  /**
   * @remarks
   * The complete URL that was used to ingest the stream.
   * 
   * @example
   * rtmp://demo.aliyundoc.com/live/test****
   */
  publishUrl?: string;
  /**
   * @remarks
   * The IP address of the ingest node.
   * 
   * @example
   * 120.221.XX.XX
   */
  serverIp?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  /**
   * @remarks
   * Indicates whether the stream was transcoded. Valid values:
   * 
   * *   **yes**
   * *   **no**
   * 
   * @example
   * no
   */
  transcoded?: string;
  /**
   * @remarks
   * The ID of the video codec.
   * 
   * @example
   * 7
   */
  videoCodecId?: number;
  /**
   * @remarks
   * The video bitrate of the live stream. Unit: Kbit/s.
   * 
   * >  This parameter can be returned after you submit a ticket for whitelist configuration. For more information about how to submit a ticket, see Contact us.
   * 
   * @example
   * 600
   */
  videoDataRate?: number;
  /**
   * @remarks
   * The width of the video resolution. Unit: pixels.
   * 
   * @example
   * 1280
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      audioCodecId: 'AudioCodecId',
      audioDataRate: 'AudioDataRate',
      clientIp: 'ClientIp',
      domainName: 'DomainName',
      frameRate: 'FrameRate',
      height: 'Height',
      publishDomain: 'PublishDomain',
      publishTime: 'PublishTime',
      publishType: 'PublishType',
      publishUrl: 'PublishUrl',
      serverIp: 'ServerIp',
      streamName: 'StreamName',
      transcoded: 'Transcoded',
      videoCodecId: 'VideoCodecId',
      videoDataRate: 'VideoDataRate',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      audioCodecId: 'number',
      audioDataRate: 'number',
      clientIp: 'string',
      domainName: 'string',
      frameRate: 'number',
      height: 'number',
      publishDomain: 'string',
      publishTime: 'string',
      publishType: 'string',
      publishUrl: 'string',
      serverIp: 'string',
      streamName: 'string',
      transcoded: 'string',
      videoCodecId: 'number',
      videoDataRate: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsOnlineListResponseBodyOnlineInfo extends $dara.Model {
  liveStreamOnlineInfo?: DescribeLiveStreamsOnlineListResponseBodyOnlineInfoLiveStreamOnlineInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamOnlineInfo: 'LiveStreamOnlineInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamOnlineInfo: { 'type': 'array', 'itemType': DescribeLiveStreamsOnlineListResponseBodyOnlineInfoLiveStreamOnlineInfo },
    };
  }

  validate() {
    if(Array.isArray(this.liveStreamOnlineInfo)) {
      $dara.Model.validateArray(this.liveStreamOnlineInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsOnlineListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the live streams that are being ingested.
   */
  onlineInfo?: DescribeLiveStreamsOnlineListResponseBodyOnlineInfo;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5c6a2a0df228-4a64- af62-20e91b9676b3
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of streams that meet the specified conditions.
   * 
   * @example
   * 11
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 2
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      onlineInfo: 'OnlineInfo',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineInfo: DescribeLiveStreamsOnlineListResponseBodyOnlineInfo,
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(this.onlineInfo && typeof (this.onlineInfo as any).validate === 'function') {
      (this.onlineInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

