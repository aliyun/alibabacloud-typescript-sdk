// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfoInfosInfo extends $dara.Model {
  /**
   * @remarks
   * The transcoding template. A value of origin indicates that the stream is a source stream.
   * 
   * @example
   * origin
   */
  transcodeTemplate?: string;
  /**
   * @remarks
   * The number of online users for the stream, which can be a source stream or transcoded stream.
   * 
   * @example
   * 1
   */
  userNumber?: number;
  static names(): { [key: string]: string } {
    return {
      transcodeTemplate: 'TranscodeTemplate',
      userNumber: 'UserNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeTemplate: 'string',
      userNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfoInfos extends $dara.Model {
  info?: DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfoInfosInfo[];
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: { 'type': 'array', 'itemType': DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfoInfosInfo },
    };
  }

  validate() {
    if(Array.isArray(this.info)) {
      $dara.Model.validateArray(this.info);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfo extends $dara.Model {
  /**
   * @remarks
   * The statistics on the stream.
   */
  infos?: DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfoInfos;
  /**
   * @remarks
   * The name of the stream.
   * 
   * @example
   * rtmp://example.com/test/liveStream****_3_1
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      infos: 'Infos',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infos: DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfoInfos,
      streamName: 'string',
    };
  }

  validate() {
    if(this.infos && typeof (this.infos as any).validate === 'function') {
      (this.infos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfo extends $dara.Model {
  liveStreamOnlineUserNumInfo?: DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamOnlineUserNumInfo: 'LiveStreamOnlineUserNumInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamOnlineUserNumInfo: { 'type': 'array', 'itemType': DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfo },
    };
  }

  validate() {
    if(Array.isArray(this.liveStreamOnlineUserNumInfo)) {
      $dara.Model.validateArray(this.liveStreamOnlineUserNumInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainOnlineUserNumResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the streams.
   */
  onlineUserInfo?: DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3A3A8C3D-F8B2-4FBF-9319-771A11B855FA
   */
  requestId?: string;
  /**
   * @remarks
   * The number of streams.
   * 
   * @example
   * 1
   */
  streamCount?: number;
  /**
   * @remarks
   * The total number of online users at the specified point in time for all the live streams under the main streaming domain.
   * 
   * @example
   * 1
   */
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      onlineUserInfo: 'OnlineUserInfo',
      requestId: 'RequestId',
      streamCount: 'StreamCount',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineUserInfo: DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfo,
      requestId: 'string',
      streamCount: 'number',
      userCount: 'number',
    };
  }

  validate() {
    if(this.onlineUserInfo && typeof (this.onlineUserInfo as any).validate === 'function') {
      (this.onlineUserInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

