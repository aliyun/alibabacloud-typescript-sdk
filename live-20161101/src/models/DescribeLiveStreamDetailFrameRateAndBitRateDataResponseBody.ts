// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamDetailFrameRateAndBitRateDataResponseBodyFrameRateAndBitRateInfos extends $dara.Model {
  /**
   * @remarks
   * The audio bitrate of the live stream. Unit: bit/s.
   * 
   * @example
   * 200
   */
  audioBitRate?: number;
  /**
   * @remarks
   * The audio frame rate of the live stream. Unit: FPS.
   * 
   * @example
   * 60
   */
  audioFrameRate?: number;
  /**
   * @remarks
   * The bitrate of the live stream. Unit: bit/s.
   * 
   * @example
   * 1420
   */
  bitRate?: number;
  /**
   * @remarks
   * The URL of the live stream.
   * 
   * @example
   * rtmp://example.com/AppName/exampleStreamName
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
   * The video bitrate of the live stream. Unit: bit/s.
   * 
   * @example
   * 1200
   */
  videoBitRate?: number;
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
      audioBitRate: 'AudioBitRate',
      audioFrameRate: 'AudioFrameRate',
      bitRate: 'BitRate',
      streamUrl: 'StreamUrl',
      time: 'Time',
      videoBitRate: 'VideoBitRate',
      videoFrameRate: 'VideoFrameRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioBitRate: 'number',
      audioFrameRate: 'number',
      bitRate: 'number',
      streamUrl: 'string',
      time: 'string',
      videoBitRate: 'number',
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

export class DescribeLiveStreamDetailFrameRateAndBitRateDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The audio and video frame rates and bitrates at each time granularity.
   */
  frameRateAndBitRateInfos?: DescribeLiveStreamDetailFrameRateAndBitRateDataResponseBodyFrameRateAndBitRateInfos[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC858082-736F-4A25-867B-E5B67C85ACF7
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
      frameRateAndBitRateInfos: { 'type': 'array', 'itemType': DescribeLiveStreamDetailFrameRateAndBitRateDataResponseBodyFrameRateAndBitRateInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.frameRateAndBitRateInfos)) {
      $dara.Model.validateArray(this.frameRateAndBitRateInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

