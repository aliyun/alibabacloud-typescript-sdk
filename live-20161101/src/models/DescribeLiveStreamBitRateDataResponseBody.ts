// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamBitRateDataResponseBodyFrameRateAndBitRateInfosFrameRateAndBitRateInfo extends $dara.Model {
  /**
   * @remarks
   * The audio frame rate of the live stream. Unit: FPS.
   * 
   * @example
   * 100
   */
  audioFrameRate?: number;
  /**
   * @remarks
   * The bitrate of the live stream. Unit: bit/s.
   * 
   * @example
   * 600
   */
  bitRate?: number;
  /**
   * @remarks
   * The URL of the live stream.
   */
  streamUrl?: string;
  /**
   * @remarks
   * The time when the data was collected. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2016-09-13T16:04:00Z
   */
  time?: string;
  /**
   * @remarks
   * The video frame rate of the live stream. Unit: frames per second (FPS).
   * 
   * @example
   * 30
   */
  videoFrameRate?: number;
  static names(): { [key: string]: string } {
    return {
      audioFrameRate: 'AudioFrameRate',
      bitRate: 'BitRate',
      streamUrl: 'StreamUrl',
      time: 'Time',
      videoFrameRate: 'VideoFrameRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFrameRate: 'number',
      bitRate: 'number',
      streamUrl: 'string',
      time: 'string',
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

export class DescribeLiveStreamBitRateDataResponseBodyFrameRateAndBitRateInfos extends $dara.Model {
  frameRateAndBitRateInfo?: DescribeLiveStreamBitRateDataResponseBodyFrameRateAndBitRateInfosFrameRateAndBitRateInfo[];
  static names(): { [key: string]: string } {
    return {
      frameRateAndBitRateInfo: 'FrameRateAndBitRateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameRateAndBitRateInfo: { 'type': 'array', 'itemType': DescribeLiveStreamBitRateDataResponseBodyFrameRateAndBitRateInfosFrameRateAndBitRateInfo },
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

export class DescribeLiveStreamBitRateDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The frame rates and bitrates of the live stream.
   */
  frameRateAndBitRateInfos?: DescribeLiveStreamBitRateDataResponseBodyFrameRateAndBitRateInfos;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
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
      frameRateAndBitRateInfos: DescribeLiveStreamBitRateDataResponseBodyFrameRateAndBitRateInfos,
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

