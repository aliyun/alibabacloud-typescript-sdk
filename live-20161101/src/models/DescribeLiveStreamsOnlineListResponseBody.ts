// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamsOnlineListResponseBodyOnlineInfoLiveStreamOnlineInfo extends $dara.Model {
  appName?: string;
  audioCodecId?: number;
  audioDataRate?: number;
  clientIp?: string;
  domainName?: string;
  frameRate?: number;
  height?: number;
  publishDomain?: string;
  publishTime?: string;
  publishType?: string;
  publishUrl?: string;
  serverIp?: string;
  streamName?: string;
  transcoded?: string;
  videoCodecId?: number;
  videoDataRate?: number;
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

