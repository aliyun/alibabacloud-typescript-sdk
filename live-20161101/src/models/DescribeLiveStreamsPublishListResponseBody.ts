// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamsPublishListResponseBodyPublishInfoLiveStreamPublishInfo extends $dara.Model {
  aliInnerErrorFlags?: string;
  appName?: string;
  clientAddr?: string;
  domainName?: string;
  edgeNodeAddr?: string;
  publishDomain?: string;
  publishTime?: string;
  publishType?: string;
  publishUrl?: string;
  stopTime?: string;
  streamName?: string;
  streamUrl?: string;
  transcodeId?: string;
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

