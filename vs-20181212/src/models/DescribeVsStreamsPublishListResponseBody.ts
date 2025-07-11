// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsStreamsPublishListResponseBodyPublishInfoLiveStreamPublishInfo extends $dara.Model {
  /**
   * @example
   * xxxApp
   */
  appName?: string;
  /**
   * @example
   * 192.168.0.1
   */
  clientAddr?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 192.168.0.1
   */
  edgeNodeAddr?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  publishDomain?: string;
  /**
   * @example
   * 2016-06-29T19:00:00Z
   */
  publishTime?: string;
  /**
   * @example
   * center
   */
  publishType?: string;
  /**
   * @example
   * https://example.aliyundoc.com/xxxApp/3402000****320000001.m3u8
   */
  publishUrl?: string;
  /**
   * @example
   * 2016-06-29T19:00:00Z
   */
  stopTime?: string;
  /**
   * @example
   * xxxStream
   */
  streamName?: string;
  /**
   * @example
   * https://example.aliyundoc.com/xxxApp/3402000****320000001.m3u8
   */
  streamUrl?: string;
  /**
   * @example
   * 3888920****8138204-cn-qingdao
   */
  transcodeId?: string;
  /**
   * @example
   * yes
   */
  transcoded?: string;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeVsStreamsPublishListResponseBodyPublishInfo extends $dara.Model {
  liveStreamPublishInfo?: DescribeVsStreamsPublishListResponseBodyPublishInfoLiveStreamPublishInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamPublishInfo: 'LiveStreamPublishInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamPublishInfo: { 'type': 'array', 'itemType': DescribeVsStreamsPublishListResponseBodyPublishInfoLiveStreamPublishInfo },
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

export class DescribeVsStreamsPublishListResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 3000
   */
  pageSize?: number;
  publishInfo?: DescribeVsStreamsPublishListResponseBodyPublishInfo;
  /**
   * @example
   * 119F7639-4646-51A4-B6C1-300D391C0104
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  totalNum?: number;
  /**
   * @example
   * 1
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
      publishInfo: DescribeVsStreamsPublishListResponseBodyPublishInfo,
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

