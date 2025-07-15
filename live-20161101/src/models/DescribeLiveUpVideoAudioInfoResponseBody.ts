// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAacHeadersAacHeaders extends $dara.Model {
  /**
   * @remarks
   * The number of AAC headers in the audio.
   * 
   * @example
   * 1538134750408
   */
  time?: number;
  /**
   * @remarks
   * The query time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 20
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAacHeaders extends $dara.Model {
  aacHeaders?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAacHeadersAacHeaders[];
  static names(): { [key: string]: string } {
    return {
      aacHeaders: 'AacHeaders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aacHeaders: { 'type': 'array', 'itemType': DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAacHeadersAacHeaders },
    };
  }

  validate() {
    if(Array.isArray(this.aacHeaders)) {
      $dara.Model.validateArray(this.aacHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioBitRateAudioBitRate extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the audio. Unit: bit/s.
   * 
   * @example
   * 1538134750408
   */
  time?: number;
  /**
   * @remarks
   * The query time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 24552
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioBitRate extends $dara.Model {
  audioBitRate?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioBitRateAudioBitRate[];
  static names(): { [key: string]: string } {
    return {
      audioBitRate: 'AudioBitRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioBitRate: { 'type': 'array', 'itemType': DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioBitRateAudioBitRate },
    };
  }

  validate() {
    if(Array.isArray(this.audioBitRate)) {
      $dara.Model.validateArray(this.audioBitRate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioFramesAudioFrames extends $dara.Model {
  /**
   * @remarks
   * The frame rate of the audio. Unit: frames.
   * 
   * @example
   * 1538134750408
   */
  time?: number;
  /**
   * @remarks
   * The query time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 23
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioFrames extends $dara.Model {
  audioFrames?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioFramesAudioFrames[];
  static names(): { [key: string]: string } {
    return {
      audioFrames: 'AudioFrames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFrames: { 'type': 'array', 'itemType': DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioFramesAudioFrames },
    };
  }

  validate() {
    if(Array.isArray(this.audioFrames)) {
      $dara.Model.validateArray(this.audioFrames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioIntervalAudioInterval extends $dara.Model {
  /**
   * @remarks
   * The maximum audio frame interval. Unit: milliseconds.
   * 
   * @example
   * 1538134750408
   */
  time?: number;
  /**
   * @remarks
   * The query time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 254
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioInterval extends $dara.Model {
  audioInterval?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioIntervalAudioInterval[];
  static names(): { [key: string]: string } {
    return {
      audioInterval: 'AudioInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioInterval: { 'type': 'array', 'itemType': DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioIntervalAudioInterval },
    };
  }

  validate() {
    if(Array.isArray(this.audioInterval)) {
      $dara.Model.validateArray(this.audioInterval);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioStampsAudioStamps extends $dara.Model {
  /**
   * @remarks
   * The audio timestamp. Unit: milliseconds.
   * 
   * @example
   * 1538134750408
   */
  time?: number;
  /**
   * @remarks
   * The query time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 725053422
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioStamps extends $dara.Model {
  audioStamps?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioStampsAudioStamps[];
  static names(): { [key: string]: string } {
    return {
      audioStamps: 'AudioStamps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStamps: { 'type': 'array', 'itemType': DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioStampsAudioStamps },
    };
  }

  validate() {
    if(Array.isArray(this.audioStamps)) {
      $dara.Model.validateArray(this.audioStamps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAvcHeadersAvcHeaders extends $dara.Model {
  /**
   * @remarks
   * The number of AVC headers in the audio.
   * 
   * @example
   * 1538134750408
   */
  time?: number;
  /**
   * @remarks
   * The query time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 11
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAvcHeaders extends $dara.Model {
  avcHeaders?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAvcHeadersAvcHeaders[];
  static names(): { [key: string]: string } {
    return {
      avcHeaders: 'AvcHeaders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avcHeaders: { 'type': 'array', 'itemType': DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAvcHeadersAvcHeaders },
    };
  }

  validate() {
    if(Array.isArray(this.avcHeaders)) {
      $dara.Model.validateArray(this.avcHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemErrorFlagsErrorFlags extends $dara.Model {
  /**
   * @remarks
   * The number of times the error code that indicates interrupted stream ingest was returned.
   * 
   * @example
   * 1538134750408
   */
  time?: number;
  /**
   * @remarks
   * The query time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 0
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemErrorFlags extends $dara.Model {
  errorFlags?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemErrorFlagsErrorFlags[];
  static names(): { [key: string]: string } {
    return {
      errorFlags: 'ErrorFlags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorFlags: { 'type': 'array', 'itemType': DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemErrorFlagsErrorFlags },
    };
  }

  validate() {
    if(Array.isArray(this.errorFlags)) {
      $dara.Model.validateArray(this.errorFlags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoAndAudioStampVAStamp extends $dara.Model {
  /**
   * @remarks
   * The difference between the audio and video timestamps. Unit: milliseconds.
   * 
   * @example
   * 1538134750408
   */
  time?: number;
  /**
   * @remarks
   * The query time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 359
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoAndAudioStamp extends $dara.Model {
  vAStamp?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoAndAudioStampVAStamp[];
  static names(): { [key: string]: string } {
    return {
      vAStamp: 'V_AStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vAStamp: { 'type': 'array', 'itemType': DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoAndAudioStampVAStamp },
    };
  }

  validate() {
    if(Array.isArray(this.vAStamp)) {
      $dara.Model.validateArray(this.vAStamp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoBitRateVideoBitRate extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the video. Unit: bit/s.
   * 
   * @example
   * 1538134750408
   */
  time?: number;
  /**
   * @remarks
   * The query time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 3970160
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoBitRate extends $dara.Model {
  videoBitRate?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoBitRateVideoBitRate[];
  static names(): { [key: string]: string } {
    return {
      videoBitRate: 'VideoBitRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoBitRate: { 'type': 'array', 'itemType': DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoBitRateVideoBitRate },
    };
  }

  validate() {
    if(Array.isArray(this.videoBitRate)) {
      $dara.Model.validateArray(this.videoBitRate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoFramesVideoFrames extends $dara.Model {
  /**
   * @remarks
   * The frame rate of the video. Unit: frames.
   * 
   * @example
   * 1538134750408
   */
  time?: number;
  /**
   * @remarks
   * The query time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 29
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoFrames extends $dara.Model {
  videoFrames?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoFramesVideoFrames[];
  static names(): { [key: string]: string } {
    return {
      videoFrames: 'VideoFrames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoFrames: { 'type': 'array', 'itemType': DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoFramesVideoFrames },
    };
  }

  validate() {
    if(Array.isArray(this.videoFrames)) {
      $dara.Model.validateArray(this.videoFrames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoIntervalVideoInterval extends $dara.Model {
  /**
   * @remarks
   * The maximum video frame interval. Unit: milliseconds.
   * 
   * @example
   * 1538134750408
   */
  time?: number;
  /**
   * @remarks
   * The query time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 278
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoInterval extends $dara.Model {
  videoInterval?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoIntervalVideoInterval[];
  static names(): { [key: string]: string } {
    return {
      videoInterval: 'VideoInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoInterval: { 'type': 'array', 'itemType': DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoIntervalVideoInterval },
    };
  }

  validate() {
    if(Array.isArray(this.videoInterval)) {
      $dara.Model.validateArray(this.videoInterval);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoStampsVideoStamps extends $dara.Model {
  /**
   * @remarks
   * The video timestamp. Unit: milliseconds.
   * 
   * @example
   * 1538134750408
   */
  time?: number;
  /**
   * @remarks
   * The query time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 725053781
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoStamps extends $dara.Model {
  videoStamps?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoStampsVideoStamps[];
  static names(): { [key: string]: string } {
    return {
      videoStamps: 'VideoStamps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoStamps: { 'type': 'array', 'itemType': DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoStampsVideoStamps },
    };
  }

  validate() {
    if(Array.isArray(this.videoStamps)) {
      $dara.Model.validateArray(this.videoStamps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItem extends $dara.Model {
  /**
   * @remarks
   * The details about the audio and video data of the stream ingest occurrences.
   */
  aacHeaders?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAacHeaders;
  /**
   * @remarks
   * The metric value at a granularity of seconds at the query time.
   * 
   * @example
   * AppName
   */
  appName?: string;
  /**
   * @remarks
   * The name of the application to which the ingested stream belongs.
   */
  audioBitRate?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioBitRate;
  /**
   * @remarks
   * The metric value at a granularity of seconds at the query time.
   */
  audioFrames?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioFrames;
  /**
   * @remarks
   * The metric value at a granularity of seconds at the query time.
   */
  audioInterval?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioInterval;
  /**
   * @remarks
   * The metric value at a granularity of seconds at the query time.
   */
  audioStamps?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioStamps;
  /**
   * @remarks
   * The metric value at a granularity of seconds at the query time.
   */
  avcHeaders?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAvcHeaders;
  /**
   * @remarks
   * The metric value at a granularity of seconds at the query time.
   * 
   * @example
   * H264/AAC
   */
  codecInfo?: string;
  /**
   * @remarks
   * The audio and video encoding information.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ingest domain.
   */
  errorFlags?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemErrorFlags;
  /**
   * @remarks
   * The metric value at a granularity of seconds at the query time.
   * 
   * @example
   * -
   */
  publishInterval?: string;
  /**
   * @remarks
   * The stream ingest duration. Unit: seconds. A hyphen (-) indicates that the stream is being ingested and the duration cannot be returned.
   * 
   * @example
   * cn397
   */
  publishIp?: string;
  /**
   * @remarks
   * The IP address of the stream ingest client.
   * 
   * @example
   * 1
   */
  publishStatus?: string;
  /**
   * @remarks
   * The stream ingest status. A value of 1 indicates that the stream is being ingested. A value of 0 indicates that the stream was ingested.
   * 
   * @example
   * 2015-12-10T15:00:00Z
   */
  publishTime?: string;
  /**
   * @remarks
   * The start time of stream ingest. The time is displayed in UTC.
   * 
   * @example
   * 2015-12-10T15:10:00Z
   */
  stopTime?: string;
  /**
   * @remarks
   * The end time of stream ingest. The time is displayed in UTC.
   * 
   * @example
   * StreamName
   */
  streamName?: string;
  /**
   * @remarks
   * The name of the stream.
   * 
   * @example
   * 2.-395_37261_9848098_1538080899396
   */
  uniqueId?: string;
  /**
   * @remarks
   * The unique ID of each stream ingest occurrence.
   */
  videoAndAudioStamp?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoAndAudioStamp;
  /**
   * @remarks
   * The metric value at a granularity of seconds at the query time.
   */
  videoBitRate?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoBitRate;
  /**
   * @remarks
   * The metric value at a granularity of seconds at the query time.
   */
  videoFrames?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoFrames;
  /**
   * @remarks
   * The metric value at a granularity of seconds at the query time.
   */
  videoInterval?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoInterval;
  /**
   * @remarks
   * The metric value at a granularity of seconds at the query time.
   */
  videoStamps?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoStamps;
  static names(): { [key: string]: string } {
    return {
      aacHeaders: 'AacHeaders',
      appName: 'AppName',
      audioBitRate: 'AudioBitRate',
      audioFrames: 'AudioFrames',
      audioInterval: 'AudioInterval',
      audioStamps: 'AudioStamps',
      avcHeaders: 'AvcHeaders',
      codecInfo: 'CodecInfo',
      domainName: 'DomainName',
      errorFlags: 'ErrorFlags',
      publishInterval: 'PublishInterval',
      publishIp: 'PublishIp',
      publishStatus: 'PublishStatus',
      publishTime: 'PublishTime',
      stopTime: 'StopTime',
      streamName: 'StreamName',
      uniqueId: 'UniqueId',
      videoAndAudioStamp: 'VideoAndAudioStamp',
      videoBitRate: 'VideoBitRate',
      videoFrames: 'VideoFrames',
      videoInterval: 'VideoInterval',
      videoStamps: 'VideoStamps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aacHeaders: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAacHeaders,
      appName: 'string',
      audioBitRate: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioBitRate,
      audioFrames: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioFrames,
      audioInterval: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioInterval,
      audioStamps: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAudioStamps,
      avcHeaders: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemAvcHeaders,
      codecInfo: 'string',
      domainName: 'string',
      errorFlags: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemErrorFlags,
      publishInterval: 'string',
      publishIp: 'string',
      publishStatus: 'string',
      publishTime: 'string',
      stopTime: 'string',
      streamName: 'string',
      uniqueId: 'string',
      videoAndAudioStamp: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoAndAudioStamp,
      videoBitRate: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoBitRate,
      videoFrames: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoFrames,
      videoInterval: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoInterval,
      videoStamps: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItemVideoStamps,
    };
  }

  validate() {
    if(this.aacHeaders && typeof (this.aacHeaders as any).validate === 'function') {
      (this.aacHeaders as any).validate();
    }
    if(this.audioBitRate && typeof (this.audioBitRate as any).validate === 'function') {
      (this.audioBitRate as any).validate();
    }
    if(this.audioFrames && typeof (this.audioFrames as any).validate === 'function') {
      (this.audioFrames as any).validate();
    }
    if(this.audioInterval && typeof (this.audioInterval as any).validate === 'function') {
      (this.audioInterval as any).validate();
    }
    if(this.audioStamps && typeof (this.audioStamps as any).validate === 'function') {
      (this.audioStamps as any).validate();
    }
    if(this.avcHeaders && typeof (this.avcHeaders as any).validate === 'function') {
      (this.avcHeaders as any).validate();
    }
    if(this.errorFlags && typeof (this.errorFlags as any).validate === 'function') {
      (this.errorFlags as any).validate();
    }
    if(this.videoAndAudioStamp && typeof (this.videoAndAudioStamp as any).validate === 'function') {
      (this.videoAndAudioStamp as any).validate();
    }
    if(this.videoBitRate && typeof (this.videoBitRate as any).validate === 'function') {
      (this.videoBitRate as any).validate();
    }
    if(this.videoFrames && typeof (this.videoFrames as any).validate === 'function') {
      (this.videoFrames as any).validate();
    }
    if(this.videoInterval && typeof (this.videoInterval as any).validate === 'function') {
      (this.videoInterval as any).validate();
    }
    if(this.videoStamps && typeof (this.videoStamps as any).validate === 'function') {
      (this.videoStamps as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBodyUpItems extends $dara.Model {
  publishItem?: DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItem[];
  static names(): { [key: string]: string } {
    return {
      publishItem: 'PublishItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publishItem: { 'type': 'array', 'itemType': DescribeLiveUpVideoAudioInfoResponseBodyUpItemsPublishItem },
    };
  }

  validate() {
    if(Array.isArray(this.publishItem)) {
      $dara.Model.validateArray(this.publishItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUpVideoAudioInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * BC858082-736F-4A25-867B-E5B67C85ACF7
   */
  requestId?: string;
  /**
   * @remarks
   * The request ID.
   */
  upItems?: DescribeLiveUpVideoAudioInfoResponseBodyUpItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      upItems: 'UpItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      upItems: DescribeLiveUpVideoAudioInfoResponseBodyUpItems,
    };
  }

  validate() {
    if(this.upItems && typeof (this.upItems as any).validate === 'function') {
      (this.upItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

