// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamHistoryUserNumResponseBodyLiveStreamUserNumInfosLiveStreamUserNumInfo extends $dara.Model {
  streamTime?: string;
  userNum?: string;
  static names(): { [key: string]: string } {
    return {
      streamTime: 'StreamTime',
      userNum: 'UserNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamTime: 'string',
      userNum: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamHistoryUserNumResponseBodyLiveStreamUserNumInfos extends $dara.Model {
  liveStreamUserNumInfo?: DescribeLiveStreamHistoryUserNumResponseBodyLiveStreamUserNumInfosLiveStreamUserNumInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamUserNumInfo: 'LiveStreamUserNumInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamUserNumInfo: { 'type': 'array', 'itemType': DescribeLiveStreamHistoryUserNumResponseBodyLiveStreamUserNumInfosLiveStreamUserNumInfo },
    };
  }

  validate() {
    if(Array.isArray(this.liveStreamUserNumInfo)) {
      $dara.Model.validateArray(this.liveStreamUserNumInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamHistoryUserNumResponseBody extends $dara.Model {
  liveStreamUserNumInfos?: DescribeLiveStreamHistoryUserNumResponseBodyLiveStreamUserNumInfos;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F5FF8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveStreamUserNumInfos: 'LiveStreamUserNumInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamUserNumInfos: DescribeLiveStreamHistoryUserNumResponseBodyLiveStreamUserNumInfos,
      requestId: 'string',
    };
  }

  validate() {
    if(this.liveStreamUserNumInfos && typeof (this.liveStreamUserNumInfos as any).validate === 'function') {
      (this.liveStreamUserNumInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

