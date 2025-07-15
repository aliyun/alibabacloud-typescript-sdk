// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamsPublishListResponseBodyPublishInfoLiveStreamPublishInfo extends $dara.Model {
  /**
   * @remarks
   * Internal error
   * 
   * @example
   * 3000001
   */
  aliInnerErrorFlags?: string;
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
   * The IP address of the client that ingested the live stream.
   * 
   * @example
   * 10.175.XX.XX
   */
  clientAddr?: string;
  /**
   * @remarks
   * The ingest domain or main streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The IP address of the CDN point of presence (POP) to which the stream was ingested.
   * 
   * @example
   * 10.175.XX.XX
   */
  edgeNodeAddr?: string;
  /**
   * @remarks
   * The ingest domain.
   * 
   * @example
   * demo.aliyundoc.com
   */
  publishDomain?: string;
  /**
   * @remarks
   * The time when the stream ingest was started. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2015-12-02T03:05:53Z
   */
  publishTime?: string;
  /**
   * @remarks
   * The type of the stream ingest. Valid values:
   * 
   * *   **edge**: edge ingest
   * *   **center**: live center ingest
   * 
   * @example
   * edge
   */
  publishType?: string;
  /**
   * @remarks
   * The complete ingest URL.
   */
  publishUrl?: string;
  /**
   * @remarks
   * The time when the stream ingest was stopped. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2015-12-02T03:11:19Z
   */
  stopTime?: string;
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
   * The streaming URL.
   */
  streamUrl?: string;
  /**
   * @remarks
   * The ID of the transcoding template.
   * 
   * >  This parameter is not returned if the value of the Transcoded parameter is no.
   * 
   * @example
   * ld
   */
  transcodeId?: string;
  /**
   * @remarks
   * Indicates whether the stream was a transcoded stream.
   * 
   * @example
   * yes
   */
  transcoded?: string;
  static names(): { [key: string]: string } {
    return {
      aliInnerErrorFlags: 'AliInnerErrorFlags',
      appName: 'AppName',
      clientAddr: 'ClientAddr',
      domainName: 'DomainName',
      edgeNodeAddr: 'EdgeNodeAddr',
      publishDomain: 'PublishDomain',
      publishTime: 'PublishTime',
      publishType: 'PublishType',
      publishUrl: 'PublishUrl',
      stopTime: 'StopTime',
      streamName: 'StreamName',
      streamUrl: 'StreamUrl',
      transcodeId: 'TranscodeId',
      transcoded: 'Transcoded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliInnerErrorFlags: 'string',
      appName: 'string',
      clientAddr: 'string',
      domainName: 'string',
      edgeNodeAddr: 'string',
      publishDomain: 'string',
      publishTime: 'string',
      publishType: 'string',
      publishUrl: 'string',
      stopTime: 'string',
      streamName: 'string',
      streamUrl: 'string',
      transcodeId: 'string',
      transcoded: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsPublishListResponseBodyPublishInfo extends $dara.Model {
  liveStreamPublishInfo?: DescribeLiveStreamsPublishListResponseBodyPublishInfoLiveStreamPublishInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamPublishInfo: 'LiveStreamPublishInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamPublishInfo: { 'type': 'array', 'itemType': DescribeLiveStreamsPublishListResponseBodyPublishInfoLiveStreamPublishInfo },
    };
  }

  validate() {
    if(Array.isArray(this.liveStreamPublishInfo)) {
      $dara.Model.validateArray(this.liveStreamPublishInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsPublishListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  pageNum?: number;
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
   * The information about the stream ingest records.
   */
  publishInfo?: DescribeLiveStreamsPublishListResponseBodyPublishInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40A4F36D-A7CC-473A-88E7-154F92242566
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that meet the specified conditions.
   * 
   * @example
   * 11
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 2
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      publishInfo: 'PublishInfo',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      publishInfo: DescribeLiveStreamsPublishListResponseBodyPublishInfo,
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(this.publishInfo && typeof (this.publishInfo as any).validate === 'function') {
      (this.publishInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

