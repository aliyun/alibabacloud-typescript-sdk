// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsStreamsOnlineListResponseBodyOnlineInfoLiveStreamOnlineInfo extends $dara.Model {
  appName?: string;
  domainName?: string;
  publishDomain?: string;
  publishTime?: string;
  publishType?: string;
  publishUrl?: string;
  streamName?: string;
  transcodeId?: string;
  transcoded?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      publishDomain: 'PublishDomain',
      publishTime: 'PublishTime',
      publishType: 'PublishType',
      publishUrl: 'PublishUrl',
      streamName: 'StreamName',
      transcodeId: 'TranscodeId',
      transcoded: 'Transcoded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      publishDomain: 'string',
      publishTime: 'string',
      publishType: 'string',
      publishUrl: 'string',
      streamName: 'string',
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

export class DescribeVsStreamsOnlineListResponseBodyOnlineInfo extends $dara.Model {
  liveStreamOnlineInfo?: DescribeVsStreamsOnlineListResponseBodyOnlineInfoLiveStreamOnlineInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamOnlineInfo: 'LiveStreamOnlineInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamOnlineInfo: { 'type': 'array', 'itemType': DescribeVsStreamsOnlineListResponseBodyOnlineInfoLiveStreamOnlineInfo },
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

export class DescribeVsStreamsOnlineListResponseBody extends $dara.Model {
  onlineInfo?: DescribeVsStreamsOnlineListResponseBodyOnlineInfo;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * B31FC4AD-3592-573E-8063-878F722B322A
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalNum?: number;
  /**
   * @example
   * 1
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
      onlineInfo: DescribeVsStreamsOnlineListResponseBodyOnlineInfo,
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

