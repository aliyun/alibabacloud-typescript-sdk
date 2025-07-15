// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainFrameRateAndBitRateDataResponseBodyFrameRateAndBitRateInfosFrameRateAndBitRateInfo extends $dara.Model {
  /**
   * @remarks
   * The audio frame rate of the live stream. Unit: FPS.
   * 
   * @example
   * 42.9
   */
  audioFrameRate?: number;
  /**
   * @remarks
   * The bitrate of the live stream. Unit: bit/s.
   * 
   * @example
   * 30693.96
   */
  bitRate?: number;
  /**
   * @remarks
   * The URL of the live stream.
   * 
   * @example
   * rtmp://demo.aliyundoc.com/test/liveStream****_3_4
   */
  streamUrl?: string;
  /**
   * @remarks
   * The video frame rate of the live stream. Unit: frames per second (FPS).
   * 
   * @example
   * 24.9
   */
  videoFrameRate?: number;
  static names(): { [key: string]: string } {
    return {
      audioFrameRate: 'AudioFrameRate',
      bitRate: 'BitRate',
      streamUrl: 'StreamUrl',
      videoFrameRate: 'VideoFrameRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFrameRate: 'number',
      bitRate: 'number',
      streamUrl: 'string',
      videoFrameRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainFrameRateAndBitRateDataResponseBodyFrameRateAndBitRateInfos extends $dara.Model {
  frameRateAndBitRateInfo?: DescribeLiveDomainFrameRateAndBitRateDataResponseBodyFrameRateAndBitRateInfosFrameRateAndBitRateInfo[];
  static names(): { [key: string]: string } {
    return {
      frameRateAndBitRateInfo: 'FrameRateAndBitRateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameRateAndBitRateInfo: { 'type': 'array', 'itemType': DescribeLiveDomainFrameRateAndBitRateDataResponseBodyFrameRateAndBitRateInfosFrameRateAndBitRateInfo },
    };
  }

  validate() {
    if(Array.isArray(this.frameRateAndBitRateInfo)) {
      $dara.Model.validateArray(this.frameRateAndBitRateInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainFrameRateAndBitRateDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The frame rates and bitrates of the live streams that were queried.
   */
  frameRateAndBitRateInfos?: DescribeLiveDomainFrameRateAndBitRateDataResponseBodyFrameRateAndBitRateInfos;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C3F2C2C4-59BB-4B62-81FF-345BE557E3E3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      frameRateAndBitRateInfos: 'FrameRateAndBitRateInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameRateAndBitRateInfos: DescribeLiveDomainFrameRateAndBitRateDataResponseBodyFrameRateAndBitRateInfos,
      requestId: 'string',
    };
  }

  validate() {
    if(this.frameRateAndBitRateInfos && typeof (this.frameRateAndBitRateInfos as any).validate === 'function') {
      (this.frameRateAndBitRateInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

