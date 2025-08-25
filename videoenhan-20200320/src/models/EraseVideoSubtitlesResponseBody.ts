// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EraseVideoSubtitlesResponseBodyData extends $dara.Model {
  /**
   * @example
   * http://algo-app-aic-vd-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/video-desubtitle/2021-04-13-10/41%3A57-TcFd6Zug7gXwbeqs.mp4?Expires=1618312317&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=LZnGSQ8019%2Br5rcR4vKOaaT2UE****
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoSubtitlesResponseBody extends $dara.Model {
  data?: EraseVideoSubtitlesResponseBodyData;
  message?: string;
  /**
   * @example
   * CCB082BF-A6B1-4C28-9E49-562EEE7DE639
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: EraseVideoSubtitlesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

