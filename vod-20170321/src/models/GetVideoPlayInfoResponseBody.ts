// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoPlayInfoResponseBodyPlayInfo extends $dara.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  authInfo?: string;
  playDomain?: string;
  region?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      authInfo: 'AuthInfo',
      playDomain: 'PlayDomain',
      region: 'Region',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      authInfo: 'string',
      playDomain: 'string',
      region: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoPlayInfoResponseBodyVideoInfo extends $dara.Model {
  coverURL?: string;
  customerId?: number;
  duration?: number;
  status?: string;
  title?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      coverURL: 'CoverURL',
      customerId: 'CustomerId',
      duration: 'Duration',
      status: 'Status',
      title: 'Title',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverURL: 'string',
      customerId: 'number',
      duration: 'number',
      status: 'string',
      title: 'string',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoPlayInfoResponseBody extends $dara.Model {
  playInfo?: GetVideoPlayInfoResponseBodyPlayInfo;
  requestId?: string;
  videoInfo?: GetVideoPlayInfoResponseBodyVideoInfo;
  static names(): { [key: string]: string } {
    return {
      playInfo: 'PlayInfo',
      requestId: 'RequestId',
      videoInfo: 'VideoInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playInfo: GetVideoPlayInfoResponseBodyPlayInfo,
      requestId: 'string',
      videoInfo: GetVideoPlayInfoResponseBodyVideoInfo,
    };
  }

  validate() {
    if(this.playInfo && typeof (this.playInfo as any).validate === 'function') {
      (this.playInfo as any).validate();
    }
    if(this.videoInfo && typeof (this.videoInfo as any).validate === 'function') {
      (this.videoInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

