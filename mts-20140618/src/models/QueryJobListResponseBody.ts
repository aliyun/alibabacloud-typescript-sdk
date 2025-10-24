// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobListResponseBodyJobListJobInput extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which the input file is stored.
   * 
   * @example
   * exampleBucket
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS region in which the input file resides.
   * 
   * @example
   * oss-cn-shanghai
   */
  location?: string;
  /**
   * @remarks
   * The name of the OSS object that is used as the input file.
   * 
   * @example
   * video_01.mp4
   */
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobMNSMessageResult extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the job failed. This parameter is not returned if the job was successful.
   * 
   * @example
   * InvalidParameter.ResourceNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the job failed. This parameter is not returned if the job was successful.
   * 
   * @example
   * The resource operated “%s” cannot be found.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the message returned if the job was successful.
   * 
   * @example
   * 123
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      messageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputAudioVolume extends $dara.Model {
  /**
   * @remarks
   * The volume adjustment range. Default value: -20. Unit: dB.
   * 
   * @example
   * -20
   */
  level?: string;
  /**
   * @remarks
   * The method that is used to adjust the volume. Valid values:
   * 
   * *   **auto**
   * *   **dynamic**
   * *   **linear**
   * 
   * @example
   * auto
   */
  method?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      method: 'Method',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      method: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputAudio extends $dara.Model {
  /**
   * @remarks
   * The audio bitrate of the output file.
   * 
   * *   Unit: Kbit/s.
   * *   Default value: **128**.
   * 
   * @example
   * 128
   */
  bitrate?: string;
  /**
   * @remarks
   * The number of sound channels.
   * 
   * *   Valid values: 1, 2, 3, 4, 5, 6, 7, and 8.
   * *   Default value: **2**.
   * 
   * @example
   * 2
   */
  channels?: string;
  /**
   * @remarks
   * The audio codec.
   * 
   * *   Valid values: aac, mp3, vorbis, and flac.
   * *   Default value: **aac**.
   * 
   * @example
   * aac
   */
  codec?: string;
  /**
   * @remarks
   * The codec profile of the audio. Valid values when the value of Codec is aac: aaclow, aache, aachev2, aacld, and aaceld.
   * 
   * @example
   * aaclow
   */
  profile?: string;
  /**
   * @remarks
   * The level of quality control on the audio.
   * 
   * @example
   * 15
   */
  qscale?: string;
  /**
   * @remarks
   * The sampling rate.
   * 
   * *   Valid values: 22050, 32000, 44100, 48000, and 96000.
   * *   Unit: Hz.
   * *   Default value: 44100.
   * 
   * >  If the video container format is FLV and the audio codec is MP3, the value of this parameter cannot be 32000, 48000, or 96000. If the audio codec is MP3, the value of this parameter cannot be 96000.
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  /**
   * @remarks
   * The volume configurations.
   */
  volume?: QueryJobListResponseBodyJobListJobOutputAudioVolume;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      qscale: 'Qscale',
      samplerate: 'Samplerate',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
      qscale: 'string',
      samplerate: 'string',
      volume: QueryJobListResponseBodyJobListJobOutputAudioVolume,
    };
  }

  validate() {
    if(this.volume && typeof (this.volume as any).validate === 'function') {
      (this.volume as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputClipTimeSpan extends $dara.Model {
  /**
   * @remarks
   * The duration of the clip.
   * 
   * *   Format: `hh:mm:ss[.SSS]`.
   * *   Example: 01:00:59.999.
   * 
   * Or
   * 
   * *   Format: `sssss[.SSS]`.
   * *   Example: 32000.23.
   * 
   * @example
   * 01:00:59.999
   */
  duration?: string;
  /**
   * @remarks
   * The point in time when the clip starts.
   * 
   * *   Format: `hh:mm:ss[.SSS]`.
   * *   Example: 01:59:59.999.
   * 
   * Or
   * 
   * *   Format: `sssss[.SSS]`.
   * *   Example: 32000.23.
   * 
   * @example
   * 01:59:59.999
   */
  seek?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      seek: 'Seek',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      seek: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputClip extends $dara.Model {
  /**
   * @remarks
   * The time span of the clip.
   */
  timeSpan?: QueryJobListResponseBodyJobListJobOutputClipTimeSpan;
  static names(): { [key: string]: string } {
    return {
      timeSpan: 'TimeSpan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeSpan: QueryJobListResponseBodyJobListJobOutputClipTimeSpan,
    };
  }

  validate() {
    if(this.timeSpan && typeof (this.timeSpan as any).validate === 'function') {
      (this.timeSpan as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputContainer extends $dara.Model {
  /**
   * @remarks
   * The container format.
   * 
   * *   Default value: mp4.
   * *   Video formats include FLV, MP4, HLS (M3U8 + TS), and MPEG-DASH (MPD + fMP4).
   * *   Audio formats include MP3, MP4, Ogg, FLAC, and M4A.
   * *   Image formats include GIF and WebP. If the container format is GIF, the video codec must be GIF.
   * *   If the container format is WebP, the video codec must be WebP.
   * *   If the container format is FLV, the video codec cannot be H.265.
   * 
   * @example
   * mp4
   */
  format?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputEncryption extends $dara.Model {
  /**
   * @remarks
   * The encryption ID.
   * 
   * @example
   * 31fa3c9ca8134f9cec2b4b0b0f78****
   */
  id?: string;
  /**
   * @remarks
   * The key that is used to encrypt the video.
   * 
   * @example
   * encryptionkey128
   */
  key?: string;
  /**
   * @remarks
   * The key encryption method. Valid values: Base64 and KMS.
   * 
   * >  For example, if the key is `encryptionkey128`, the key can be encrypted as `Base64("encryptionkey128")` or `KMS(Base64("encryptionkey128")` depending on the encryption method used.
   * 
   * @example
   * Base64
   */
  keyType?: string;
  /**
   * @remarks
   * The URL that is used to request the key. The URL is Base64-encoded.
   * 
   * @example
   * https://1161758785*****.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/HLS-decyptServer/decyptServer/
   */
  keyUri?: string;
  /**
   * @remarks
   * The number of unencrypted frames at the beginning of the video. Leaving these frames unencrypted enables video playback to quickly start.
   * 
   * @example
   * 3
   */
  skipCnt?: string;
  /**
   * @remarks
   * The encryption type. Only **hls-aes-128** may be returned.
   * 
   * @example
   * hls-aes-128
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      key: 'Key',
      keyType: 'KeyType',
      keyUri: 'KeyUri',
      skipCnt: 'SkipCnt',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      key: 'string',
      keyType: 'string',
      keyUri: 'string',
      skipCnt: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputM3U8NonStandardSupportTS extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the output of the MD5 value of the TS file is supported in the M3U8 file. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  md5Support?: boolean;
  /**
   * @remarks
   * Indicates whether the output of the size of the TS file is supported in the M3U8 file. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  sizeSupport?: boolean;
  static names(): { [key: string]: string } {
    return {
      md5Support: 'Md5Support',
      sizeSupport: 'SizeSupport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      md5Support: 'boolean',
      sizeSupport: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputM3U8NonStandardSupport extends $dara.Model {
  /**
   * @remarks
   * The non-standard support configurations for TS files. The value is a JSON object. For more information, see the TS section of the [Parameter details](https://help.aliyun.com/document_detail/29253.html) topic.
   */
  TS?: QueryJobListResponseBodyJobListJobOutputM3U8NonStandardSupportTS;
  static names(): { [key: string]: string } {
    return {
      TS: 'TS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      TS: QueryJobListResponseBodyJobListJobOutputM3U8NonStandardSupportTS,
    };
  }

  validate() {
    if(this.TS && typeof (this.TS as any).validate === 'function') {
      (this.TS as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputMergeListMerge extends $dara.Model {
  /**
   * @remarks
   * The duration of the clip.
   * 
   * *   Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * *   Examples: 01:59:59.999 and 32000.23.
   * 
   * @example
   * 01:59:59.999
   */
  duration?: string;
  /**
   * @remarks
   * The OSS URL of the clip.
   * 
   * *   Example: `http://example-bucket-.oss-cn-hangzhou.aliyuncs.com/example-object.flv`.
   * *   The object must be URL-encoded by using the UTF-8 standard. For more information, see [URL encoding](https://help.aliyun.com/document_detail/423796.html).
   * 
   * @example
   * http://example-bucket.oss-cn-hangzhou.aliyuncs.com/example-object.flv
   */
  mergeURL?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the Resource Access Management (RAM) role used for delegated authorization.
   * 
   * @example
   * acs:ram::<your uid>:role/<your role name>
   */
  roleArn?: string;
  /**
   * @remarks
   * The start point in time of the clip.
   * 
   * *   Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * *   Examples: 01:59:59.999 and 32000.23.
   * 
   * @example
   * 01:59:59.999
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      mergeURL: 'MergeURL',
      roleArn: 'RoleArn',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      mergeURL: 'string',
      roleArn: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputMergeList extends $dara.Model {
  merge?: QueryJobListResponseBodyJobListJobOutputMergeListMerge[];
  static names(): { [key: string]: string } {
    return {
      merge: 'Merge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      merge: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputMergeListMerge },
    };
  }

  validate() {
    if(Array.isArray(this.merge)) {
      $dara.Model.validateArray(this.merge);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputMultiSpeedInfo extends $dara.Model {
  /**
   * @remarks
   * The error code returned if high-speed transcoding is not enabled.
   * 
   * @example
   * Boost.NotNeedSpeed
   */
  code?: string;
  /**
   * @remarks
   * The downgrade policy if high-speed transcoding is not supported.
   * 
   * @example
   * NormalSpeed
   */
  downgradePolicy?: string;
  /**
   * @remarks
   * The duration of the output video.
   * 
   * @example
   * 21.0
   */
  duration?: number;
  /**
   * @remarks
   * Indicates whether high-speed transcoding is enabled.
   * 
   * @example
   * true
   */
  enable?: string;
  /**
   * @remarks
   * The error message returned if high-speed transcoding is not enabled.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The actual transcoding speed.
   * 
   * @example
   * 6.576886940181647
   */
  realSpeed?: number;
  /**
   * @remarks
   * The speed setting.
   * 
   * @example
   * 30
   */
  settingSpeed?: number;
  /**
   * @remarks
   * The amount of time consumed.
   * 
   * @example
   * 3.193
   */
  timeCost?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      downgradePolicy: 'DowngradePolicy',
      duration: 'Duration',
      enable: 'Enable',
      message: 'Message',
      realSpeed: 'RealSpeed',
      settingSpeed: 'SettingSpeed',
      timeCost: 'TimeCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      downgradePolicy: 'string',
      duration: 'number',
      enable: 'string',
      message: 'string',
      realSpeed: 'number',
      settingSpeed: 'number',
      timeCost: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputMuxConfigGif extends $dara.Model {
  /**
   * @remarks
   * The color dithering algorithm of the palette. Valid values: sierra and bayer.
   * 
   * @example
   * bayer
   */
  ditherMode?: string;
  /**
   * @remarks
   * The duration for which the final frame is paused. Unit: centisecond.
   * 
   * @example
   * 0
   */
  finalDelay?: string;
  /**
   * @remarks
   * Indicates whether a custom palette is used. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  isCustomPalette?: string;
  /**
   * @remarks
   * The loop count.
   * 
   * @example
   * 0
   */
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      ditherMode: 'DitherMode',
      finalDelay: 'FinalDelay',
      isCustomPalette: 'IsCustomPalette',
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ditherMode: 'string',
      finalDelay: 'string',
      isCustomPalette: 'string',
      loop: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputMuxConfigSegment extends $dara.Model {
  /**
   * @remarks
   * The segment length. Unit: seconds.
   * 
   * @example
   * 20
   */
  duration?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputMuxConfigWebp extends $dara.Model {
  /**
   * @remarks
   * The loop count.
   * 
   * @example
   * 0
   */
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loop: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The transmuxing configurations for GIF.
   */
  gif?: QueryJobListResponseBodyJobListJobOutputMuxConfigGif;
  /**
   * @remarks
   * The segment configurations. The value is a JSON object.
   */
  segment?: QueryJobListResponseBodyJobListJobOutputMuxConfigSegment;
  /**
   * @remarks
   * The transmuxing configurations for WebP.
   */
  webp?: QueryJobListResponseBodyJobListJobOutputMuxConfigWebp;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
      webp: 'Webp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: QueryJobListResponseBodyJobListJobOutputMuxConfigGif,
      segment: QueryJobListResponseBodyJobListJobOutputMuxConfigSegment,
      webp: QueryJobListResponseBodyJobListJobOutputMuxConfigWebp,
    };
  }

  validate() {
    if(this.gif && typeof (this.gif as any).validate === 'function') {
      (this.gif as any).validate();
    }
    if(this.segment && typeof (this.segment as any).validate === 'function') {
      (this.segment as any).validate();
    }
    if(this.webp && typeof (this.webp as any).validate === 'function') {
      (this.webp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputOpeningListOpening extends $dara.Model {
  /**
   * @remarks
   * The height of the opening part.
   * 
   * *   Valid values: values in the range of (0,4096), -1, and full.
   * *   A value of -1 indicates that the original height of the opening part is retained.
   * *   A value of full indicates that the height of the opening part equals the height of the main part.
   * *   Default value: **-1**.
   * 
   * @example
   * -1
   */
  height?: string;
  /**
   * @remarks
   * The amount of time after which the opening part is played.
   * 
   * *   The value starts from 0.
   * *   Unit: seconds.
   * *   Default value: **0**.
   * 
   * @example
   * 0
   */
  start?: string;
  /**
   * @remarks
   * The width of the opening part.
   * 
   * *   Valid values: values in the range of (0,4096), -1, and full.
   * *   A value of -1 indicates that the original width of the opening part is retained.
   * *   A value of full indicates that the width of the opening part equals the width of the main part.
   * *   Default value: **-1**.
   * 
   * @example
   * -1
   */
  width?: string;
  /**
   * @remarks
   * The OSS URL of the opening part.
   * 
   * @example
   * http://example.oss-cn-shanghai.aliyuncs.com/t5.mp4
   */
  openUrl?: string;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      start: 'Start',
      width: 'Width',
      openUrl: 'openUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'string',
      start: 'string',
      width: 'string',
      openUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputOpeningList extends $dara.Model {
  opening?: QueryJobListResponseBodyJobListJobOutputOpeningListOpening[];
  static names(): { [key: string]: string } {
    return {
      opening: 'Opening',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opening: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputOpeningListOpening },
    };
  }

  validate() {
    if(Array.isArray(this.opening)) {
      $dara.Model.validateArray(this.opening);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputOutSubtitleListOutSubtitleOutSubtitleFile extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which the output caption is stored.
   * 
   * @example
   * exampleBucket
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS region in which the output caption resides.
   * 
   * @example
   * oss-cn-hangzhou
   */
  location?: string;
  /**
   * @remarks
   * The name of the OSS object that is used as the output caption.
   * 
   * @example
   * example.flv
   */
  object?: string;
  /**
   * @remarks
   * The ARN of the RAM role used for delegated authorization.
   * 
   * @example
   * acs:ram::<your uid>:role/<your role name>
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
      roleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputOutSubtitleListOutSubtitle extends $dara.Model {
  /**
   * @remarks
   * The video track. Format: `0:{Stream}:{Stream sequence number}`, which is `0:v:{video_index}`. The value of Stream is v, which indicates a video stream. The sequence number is the index of the video stream in the list and starts from 0.
   * 
   * @example
   * 0:v:0
   */
  map?: string;
  /**
   * @remarks
   * The error message returned if the job failed to be created. This parameter is not returned if the job was created.
   * 
   * @example
   * The specified parameter “%s” cannot be null.
   */
  message?: string;
  /**
   * @remarks
   * The details of the output caption.
   */
  outSubtitleFile?: QueryJobListResponseBodyJobListJobOutputOutSubtitleListOutSubtitleOutSubtitleFile;
  /**
   * @remarks
   * Indicates whether the job was successful. Valid values:
   * 
   * *   **true**: The job was successful.
   * *   **false**: The job failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      map: 'Map',
      message: 'Message',
      outSubtitleFile: 'OutSubtitleFile',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      map: 'string',
      message: 'string',
      outSubtitleFile: QueryJobListResponseBodyJobListJobOutputOutSubtitleListOutSubtitleOutSubtitleFile,
      success: 'boolean',
    };
  }

  validate() {
    if(this.outSubtitleFile && typeof (this.outSubtitleFile as any).validate === 'function') {
      (this.outSubtitleFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputOutSubtitleList extends $dara.Model {
  outSubtitle?: QueryJobListResponseBodyJobListJobOutputOutSubtitleListOutSubtitle[];
  static names(): { [key: string]: string } {
    return {
      outSubtitle: 'OutSubtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outSubtitle: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputOutSubtitleListOutSubtitle },
    };
  }

  validate() {
    if(Array.isArray(this.outSubtitle)) {
      $dara.Model.validateArray(this.outSubtitle);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputOutputFile extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which the output file is stored.
   * 
   * @example
   * example-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS region in which the output file resides.
   * 
   * @example
   * oss-cn-hangzhou
   */
  location?: string;
  /**
   * @remarks
   * The name of the OSS object that is used as the output file.
   * 
   * @example
   * example-output.flv
   */
  object?: string;
  /**
   * @remarks
   * The ARN of the RAM role used for delegated authorization.
   * 
   * @example
   * acs:ram::<your uid>:role/<your role name>
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
      roleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputPropertiesFormat extends $dara.Model {
  /**
   * @remarks
   * The total bitrate.
   * 
   * @example
   * 490.784
   */
  bitrate?: string;
  /**
   * @remarks
   * The total duration.
   * 
   * @example
   * 17.234000
   */
  duration?: string;
  /**
   * @remarks
   * The full name of the container format.
   * 
   * @example
   * QuickTime / MOV
   */
  formatLongName?: string;
  /**
   * @remarks
   * The short name of the container format. Valid values: mov, mp4, m4a, 3gp, 3g2, and mj2.
   * 
   * @example
   * mov
   */
  formatName?: string;
  /**
   * @remarks
   * The total number of program streams.
   * 
   * @example
   * 0
   */
  numPrograms?: string;
  /**
   * @remarks
   * The total number of media streams.
   * 
   * @example
   * 2
   */
  numStreams?: string;
  /**
   * @remarks
   * The size of the media file.
   * 
   * @example
   * 1057273
   */
  size?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * -0.064000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      formatLongName: 'FormatLongName',
      formatName: 'FormatName',
      numPrograms: 'NumPrograms',
      numStreams: 'NumStreams',
      size: 'Size',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      formatLongName: 'string',
      formatName: 'string',
      numPrograms: 'string',
      numStreams: 'string',
      size: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputPropertiesSourceLogosSourceLogo extends $dara.Model {
  /**
   * @remarks
   * The keyword.
   * 
   * @example
   * example
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputPropertiesSourceLogos extends $dara.Model {
  sourceLogo?: QueryJobListResponseBodyJobListJobOutputPropertiesSourceLogosSourceLogo[];
  static names(): { [key: string]: string } {
    return {
      sourceLogo: 'SourceLogo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceLogo: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputPropertiesSourceLogosSourceLogo },
    };
  }

  validate() {
    if(Array.isArray(this.sourceLogo)) {
      $dara.Model.validateArray(this.sourceLogo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputPropertiesStreamsAudioStreamListAudioStream extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the audio stream.
   * 
   * @example
   * 64.136
   */
  bitrate?: string;
  /**
   * @remarks
   * The output layout of the sound channels.
   * 
   * @example
   * mono
   */
  channelLayout?: string;
  /**
   * @remarks
   * The number of sound channels.
   * 
   * @example
   * 1
   */
  channels?: string;
  /**
   * @remarks
   * The full name of the codec.
   * 
   * @example
   * AAC (Advanced Audio Coding)
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the codec.
   * 
   * @example
   * aac
   */
  codecName?: string;
  /**
   * @remarks
   * The tag of the codec.
   * 
   * @example
   * 0x6134706d
   */
  codecTag?: string;
  /**
   * @remarks
   * The tag string of the codec.
   * 
   * @example
   * mp4
   */
  codecTagString?: string;
  /**
   * @remarks
   * The codec time base.
   * 
   * @example
   * 1/32000
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The duration of the audio stream.
   * 
   * @example
   * 17.223562
   */
  duration?: string;
  /**
   * @remarks
   * The sequence number of the audio stream. The value indicates the position of the audio stream in all audio streams.
   * 
   * @example
   * 1
   */
  index?: string;
  /**
   * @remarks
   * The language of the audio stream. For more information, see [FFmpeg documentation](https://www.ffmpeg.org/ffmpeg-all.html#Metadata) and [ISO 639](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
   * 
   * @example
   * und
   */
  lang?: string;
  /**
   * @remarks
   * The total number of frames.
   * 
   * @example
   * 50
   */
  numFrames?: string;
  /**
   * @remarks
   * The sampling format.
   * 
   * @example
   * fltp
   */
  sampleFmt?: string;
  /**
   * @remarks
   * The sampling rate.
   * 
   * @example
   * 32000
   */
  samplerate?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 0.064000
   */
  startTime?: string;
  /**
   * @remarks
   * The time base of the audio stream.
   * 
   * @example
   * 1/32000
   */
  timebase?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channelLayout: 'ChannelLayout',
      channels: 'Channels',
      codecLongName: 'CodecLongName',
      codecName: 'CodecName',
      codecTag: 'CodecTag',
      codecTagString: 'CodecTagString',
      codecTimeBase: 'CodecTimeBase',
      duration: 'Duration',
      index: 'Index',
      lang: 'Lang',
      numFrames: 'NumFrames',
      sampleFmt: 'SampleFmt',
      samplerate: 'Samplerate',
      startTime: 'StartTime',
      timebase: 'Timebase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channelLayout: 'string',
      channels: 'string',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      duration: 'string',
      index: 'string',
      lang: 'string',
      numFrames: 'string',
      sampleFmt: 'string',
      samplerate: 'string',
      startTime: 'string',
      timebase: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputPropertiesStreamsAudioStreamList extends $dara.Model {
  audioStream?: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsAudioStreamListAudioStream[];
  static names(): { [key: string]: string } {
    return {
      audioStream: 'AudioStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStream: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputPropertiesStreamsAudioStreamListAudioStream },
    };
  }

  validate() {
    if(Array.isArray(this.audioStream)) {
      $dara.Model.validateArray(this.audioStream);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream extends $dara.Model {
  /**
   * @remarks
   * The sequence number of the caption stream. The value indicates the position of the caption stream in all caption streams.
   * 
   * @example
   * 1
   */
  index?: string;
  /**
   * @remarks
   * The language of the caption stream. For more information, see [FFmpeg documentation](https://www.ffmpeg.org/ffmpeg-all.html#Metadata) and [ISO 639](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
   * 
   * @example
   * eng
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamList extends $dara.Model {
  subtitleStream?: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream[];
  static names(): { [key: string]: string } {
    return {
      subtitleStream: 'SubtitleStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitleStream: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream },
    };
  }

  validate() {
    if(Array.isArray(this.subtitleStream)) {
      $dara.Model.validateArray(this.subtitleStream);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost extends $dara.Model {
  /**
   * @remarks
   * The average bitrate.
   * 
   * @example
   * 300
   */
  avgBitrate?: string;
  /**
   * @remarks
   * The maximum bandwidth that was consumed.
   * 
   * @example
   * 10
   */
  costBandwidth?: string;
  /**
   * @remarks
   * The amount of time consumed to preload the video stream.
   * 
   * @example
   * 8
   */
  preloadTime?: string;
  static names(): { [key: string]: string } {
    return {
      avgBitrate: 'AvgBitrate',
      costBandwidth: 'CostBandwidth',
      preloadTime: 'PreloadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgBitrate: 'string',
      costBandwidth: 'string',
      preloadTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStream extends $dara.Model {
  /**
   * @remarks
   * The average frame rate of the video stream.
   * 
   * @example
   * 30.0
   */
  avgFPS?: string;
  /**
   * @remarks
   * The video bitrate.
   * 
   * @example
   * 421.117
   */
  bitrate?: string;
  /**
   * @remarks
   * The full name of the codec.
   * 
   * @example
   * H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the codec.
   * 
   * @example
   * h264
   */
  codecName?: string;
  /**
   * @remarks
   * The tag of the codec.
   * 
   * @example
   * 0x31637661
   */
  codecTag?: string;
  /**
   * @remarks
   * The tag string of the codec.
   * 
   * @example
   * avc1
   */
  codecTagString?: string;
  /**
   * @remarks
   * The codec time base.
   * 
   * @example
   * 1/60
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The display aspect ratio (DAR) of the video stream.
   * 
   * @example
   * 9:16
   */
  dar?: string;
  /**
   * @remarks
   * The duration of the video stream.
   * 
   * @example
   * 17.233333
   */
  duration?: string;
  /**
   * @remarks
   * The frame rate of the video stream.
   * 
   * @example
   * 30.0
   */
  fps?: string;
  /**
   * @remarks
   * Indicates whether the video stream contains bidirectional frames (B-frames).
   * 
   * @example
   * 2
   */
  hasBFrames?: string;
  /**
   * @remarks
   * The height of the video stream in pixels.
   * 
   * @example
   * 1280
   */
  height?: string;
  /**
   * @remarks
   * The sequence number of the video stream. The value indicates the position of the video stream in all video streams.
   * 
   * @example
   * 0
   */
  index?: string;
  /**
   * @remarks
   * The language of the video stream. For more information, see [FFmpeg documentation](https://www.ffmpeg.org/ffmpeg-all.html#Metadata) and [ISO 639](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
   * 
   * @example
   * eng
   */
  lang?: string;
  /**
   * @remarks
   * The codec level.
   * 
   * @example
   * 31
   */
  level?: string;
  /**
   * @remarks
   * The network bandwidth that was consumed.
   */
  networkCost?: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost;
  /**
   * @remarks
   * The total number of frames.
   * 
   * @example
   * 30
   */
  numFrames?: string;
  /**
   * @remarks
   * The pixel format of the video stream.
   * 
   * @example
   * yuv420p
   */
  pixFmt?: string;
  /**
   * @remarks
   * The codec profile.
   * 
   * @example
   * high
   */
  profile?: string;
  /**
   * @remarks
   * The sample aspect ratio (SAR) of the video stream.
   * 
   * @example
   * 1:1
   */
  sar?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 0.000000
   */
  startTime?: string;
  /**
   * @remarks
   * The time base of the video stream.
   * 
   * @example
   * 1/15360
   */
  timebase?: string;
  /**
   * @remarks
   * The width of the video stream in pixels.
   * 
   * @example
   * 720
   */
  width?: string;
  /**
   * @remarks
   * The number of binary bits used by each sample or pixel.
   * 
   * @example
   * 8
   */
  bitsPerRawSample?: string;
  /**
   * @remarks
   * The primary colors.
   * 
   * @example
   * bt709
   */
  colorPrimaries?: string;
  /**
   * @remarks
   * The color transfer configuration.
   * 
   * @example
   * bt709
   */
  colorTransfer?: string;
  static names(): { [key: string]: string } {
    return {
      avgFPS: 'AvgFPS',
      bitrate: 'Bitrate',
      codecLongName: 'CodecLongName',
      codecName: 'CodecName',
      codecTag: 'CodecTag',
      codecTagString: 'CodecTagString',
      codecTimeBase: 'CodecTimeBase',
      dar: 'Dar',
      duration: 'Duration',
      fps: 'Fps',
      hasBFrames: 'HasBFrames',
      height: 'Height',
      index: 'Index',
      lang: 'Lang',
      level: 'Level',
      networkCost: 'NetworkCost',
      numFrames: 'NumFrames',
      pixFmt: 'PixFmt',
      profile: 'Profile',
      sar: 'Sar',
      startTime: 'StartTime',
      timebase: 'Timebase',
      width: 'Width',
      bitsPerRawSample: 'bitsPerRawSample',
      colorPrimaries: 'colorPrimaries',
      colorTransfer: 'colorTransfer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgFPS: 'string',
      bitrate: 'string',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      dar: 'string',
      duration: 'string',
      fps: 'string',
      hasBFrames: 'string',
      height: 'string',
      index: 'string',
      lang: 'string',
      level: 'string',
      networkCost: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost,
      numFrames: 'string',
      pixFmt: 'string',
      profile: 'string',
      sar: 'string',
      startTime: 'string',
      timebase: 'string',
      width: 'string',
      bitsPerRawSample: 'string',
      colorPrimaries: 'string',
      colorTransfer: 'string',
    };
  }

  validate() {
    if(this.networkCost && typeof (this.networkCost as any).validate === 'function') {
      (this.networkCost as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamList extends $dara.Model {
  videoStream?: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStream[];
  static names(): { [key: string]: string } {
    return {
      videoStream: 'VideoStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoStream: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStream },
    };
  }

  validate() {
    if(Array.isArray(this.videoStream)) {
      $dara.Model.validateArray(this.videoStream);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputPropertiesStreams extends $dara.Model {
  /**
   * @remarks
   * The audio streams.
   */
  audioStreamList?: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsAudioStreamList;
  /**
   * @remarks
   * The caption streams.
   */
  subtitleStreamList?: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamList;
  /**
   * @remarks
   * The video streams.
   */
  videoStreamList?: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamList;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsAudioStreamList,
      subtitleStreamList: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamList,
      videoStreamList: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamList,
    };
  }

  validate() {
    if(this.audioStreamList && typeof (this.audioStreamList as any).validate === 'function') {
      (this.audioStreamList as any).validate();
    }
    if(this.subtitleStreamList && typeof (this.subtitleStreamList as any).validate === 'function') {
      (this.subtitleStreamList as any).validate();
    }
    if(this.videoStreamList && typeof (this.videoStreamList as any).validate === 'function') {
      (this.videoStreamList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputProperties extends $dara.Model {
  /**
   * @remarks
   * The video bitrate.
   * 
   * @example
   * 490
   */
  bitrate?: string;
  /**
   * @remarks
   * The video duration.
   * 
   * @example
   * 17
   */
  duration?: string;
  /**
   * @remarks
   * The video format.
   * 
   * @example
   * mp4
   */
  fileFormat?: string;
  /**
   * @remarks
   * The size of the media file.
   * 
   * @example
   * 1057273
   */
  fileSize?: string;
  /**
   * @remarks
   * The format information.
   */
  format?: QueryJobListResponseBodyJobListJobOutputPropertiesFormat;
  /**
   * @remarks
   * The frame rate of the video.
   * 
   * @example
   * 30
   */
  fps?: string;
  /**
   * @remarks
   * The video height.
   * 
   * @example
   * 1280
   */
  height?: string;
  /**
   * @remarks
   * The non-engine layer keywords.
   */
  sourceLogos?: QueryJobListResponseBodyJobListJobOutputPropertiesSourceLogos;
  /**
   * @remarks
   * The stream information.
   */
  streams?: QueryJobListResponseBodyJobListJobOutputPropertiesStreams;
  /**
   * @remarks
   * The video width.
   * 
   * @example
   * 720
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileFormat: 'FileFormat',
      fileSize: 'FileSize',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      sourceLogos: 'SourceLogos',
      streams: 'Streams',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileFormat: 'string',
      fileSize: 'string',
      format: QueryJobListResponseBodyJobListJobOutputPropertiesFormat,
      fps: 'string',
      height: 'string',
      sourceLogos: QueryJobListResponseBodyJobListJobOutputPropertiesSourceLogos,
      streams: QueryJobListResponseBodyJobListJobOutputPropertiesStreams,
      width: 'string',
    };
  }

  validate() {
    if(this.format && typeof (this.format as any).validate === 'function') {
      (this.format as any).validate();
    }
    if(this.sourceLogos && typeof (this.sourceLogos as any).validate === 'function') {
      (this.sourceLogos as any).validate();
    }
    if(this.streams && typeof (this.streams as any).validate === 'function') {
      (this.streams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which the input caption file is stored.
   * 
   * @example
   * example-bucket-****
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS region in which the input caption file resides.
   * 
   * @example
   * oss-cn-hangzhou
   */
  location?: string;
  /**
   * @remarks
   * The name of the OSS object that is used as the input caption file.
   * 
   * @example
   * example-output.flv
   */
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitle extends $dara.Model {
  /**
   * @remarks
   * The character set used by the external caption.
   * 
   * *   Valid values: UTF-8, GBK, BIG5, and auto.
   * *   Default value: **auto**.
   * 
   * >  If the value of CharEnc is auto, the detected character set may not be the actual character set. We recommend that you set this parameter to another value.
   * 
   * @example
   * auto
   */
  charEnc?: string;
  /**
   * @remarks
   * The font of the hardcoded captions converted from external captions. Default value: SimSum. For more information, see [Fonts](https://help.aliyun.com/document_detail/59950.html).
   * 
   * @example
   * "WenQuanYi Zen Hei", "Yuanti SC Regular", "SimSun"
   */
  fontName?: string;
  /**
   * @remarks
   * The input caption file.
   * 
   * *   SRT and ASS files are supported. For more information, see the Input section of the [Parameter details](https://help.aliyun.com/document_detail/29253.html) topic.
   * *   Example: `{"Bucket":"example-bucket","Location":"oss-cn-hangzhou","Object":"example.srt"}`.
   */
  input?: QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput;
  static names(): { [key: string]: string } {
    return {
      charEnc: 'CharEnc',
      fontName: 'FontName',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charEnc: 'string',
      fontName: 'string',
      input: QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput,
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleList extends $dara.Model {
  extSubtitle?: QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitle[];
  static names(): { [key: string]: string } {
    return {
      extSubtitle: 'ExtSubtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSubtitle: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitle },
    };
  }

  validate() {
    if(Array.isArray(this.extSubtitle)) {
      $dara.Model.validateArray(this.extSubtitle);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputSubtitleConfigSubtitleListSubtitle extends $dara.Model {
  /**
   * @remarks
   * The audio track. Format: `0:{Stream}:{Stream sequence number}`, which is `0:a:{audio_index}`. The value of Stream is a, which indicates an audio stream. The sequence number is the index of the audio stream in the list and starts from 0.
   * 
   * @example
   * 0:a:0
   */
  map?: string;
  static names(): { [key: string]: string } {
    return {
      map: 'Map',
    };
  }

  static types(): { [key: string]: any } {
    return {
      map: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputSubtitleConfigSubtitleList extends $dara.Model {
  subtitle?: QueryJobListResponseBodyJobListJobOutputSubtitleConfigSubtitleListSubtitle[];
  static names(): { [key: string]: string } {
    return {
      subtitle: 'Subtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitle: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputSubtitleConfigSubtitleListSubtitle },
    };
  }

  validate() {
    if(Array.isArray(this.subtitle)) {
      $dara.Model.validateArray(this.subtitle);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputSubtitleConfig extends $dara.Model {
  /**
   * @remarks
   * The external captions.
   */
  extSubtitleList?: QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleList;
  /**
   * @remarks
   * The captions.
   */
  subtitleList?: QueryJobListResponseBodyJobListJobOutputSubtitleConfigSubtitleList;
  static names(): { [key: string]: string } {
    return {
      extSubtitleList: 'ExtSubtitleList',
      subtitleList: 'SubtitleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSubtitleList: QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleList,
      subtitleList: QueryJobListResponseBodyJobListJobOutputSubtitleConfigSubtitleList,
    };
  }

  validate() {
    if(this.extSubtitleList && typeof (this.extSubtitleList as any).validate === 'function') {
      (this.extSubtitleList as any).validate();
    }
    if(this.subtitleList && typeof (this.subtitleList as any).validate === 'function') {
      (this.subtitleList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputSuperReso extends $dara.Model {
  /**
   * @remarks
   * Indicates whether parameters related to the sampling rate are obtained. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isHalfSample?: string;
  static names(): { [key: string]: string } {
    return {
      isHalfSample: 'IsHalfSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isHalfSample: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputTailSlateListTailSlate extends $dara.Model {
  /**
   * @remarks
   * The color of the bars that are added to the ending part if the size of the ending part is smaller than that of the main part. Default value: White. For more information, see [Parameter details](https://help.aliyun.com/document_detail/29253.html).
   * 
   * @example
   * White
   */
  bgColor?: string;
  /**
   * @remarks
   * The duration of the transition between the main part and the ending part. A fade transition is used: The last frame of the main part fades out, and the first frame of the ending part fades in. Unit: seconds. Default value: 0.
   * 
   * @example
   * 0
   */
  blendDuration?: string;
  /**
   * @remarks
   * The height of the ending part.
   * 
   * *   Valid values: values in the range of (0,4096), -1, and full.
   * *   A value of -1 indicates that the original height of the ending part is retained.
   * *   A value of full indicates that the height of the ending part equals the height of the main part.
   * *   Default value: -1.
   * 
   * @example
   * -1
   */
  height?: string;
  /**
   * @remarks
   * Indicates whether the audio content of the ending part is merged. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isMergeAudio?: boolean;
  /**
   * @remarks
   * The time when the ending part is played.
   * 
   * @example
   * 00000.00
   */
  start?: string;
  /**
   * @remarks
   * The OSS URL of the ending part.
   * 
   * @example
   * http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com/opening_01.flv
   */
  tailUrl?: string;
  /**
   * @remarks
   * The width of the ending part. Valid values: values in the range of (0,4096), -1, and full.
   * 
   * *   A value of -1 indicates that the original width of the ending part is retained.
   * *   A value of full indicates that the width of the ending part equals the width of the main part.
   * *   Default value: -1.
   * 
   * @example
   * -1
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bgColor: 'BgColor',
      blendDuration: 'BlendDuration',
      height: 'Height',
      isMergeAudio: 'IsMergeAudio',
      start: 'Start',
      tailUrl: 'TailUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgColor: 'string',
      blendDuration: 'string',
      height: 'string',
      isMergeAudio: 'boolean',
      start: 'string',
      tailUrl: 'string',
      width: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputTailSlateList extends $dara.Model {
  tailSlate?: QueryJobListResponseBodyJobListJobOutputTailSlateListTailSlate[];
  static names(): { [key: string]: string } {
    return {
      tailSlate: 'TailSlate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tailSlate: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputTailSlateListTailSlate },
    };
  }

  validate() {
    if(Array.isArray(this.tailSlate)) {
      $dara.Model.validateArray(this.tailSlate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputTransConfig extends $dara.Model {
  /**
   * @remarks
   * The method of resolution adjustment. Default value: **none**. Valid values: rescale, crop, pad, and none.
   * 
   * @example
   * none
   */
  adjDarMethod?: string;
  /**
   * @remarks
   * Indicates whether the audio bitrate is checked. If the bitrate of the output audio is higher than that of the input audio, the input bitrate is retained and the specified audio bitrate does not take effect. This parameter has a lower priority than IsCheckAudioBitrateFail. Valid values:
   * 
   * *   **true**
   * 
   * *   **false**
   * 
   * *   Default value:
   * 
   *     *   If this parameter is empty and the codec of the output audio is different from that of the input audio, the default value is false.
   *     *   If this parameter is empty and the codec of the output audio is the same as that of the input audio, the default value is true.
   * 
   * @example
   * false
   */
  isCheckAudioBitrate?: string;
  /**
   * @remarks
   * Indicates whether the audio bitrate is checked. If the bitrate of the output audio is higher than that of the input audio, the input audio is not transcoded and a transcoding failure is returned. This parameter has a higher priority than IsCheckAudioBitrate. Valid values:
   * 
   * *   **true**
   * *   **false**
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  isCheckAudioBitrateFail?: string;
  /**
   * @remarks
   * Indicates whether the resolution is checked. If the output resolution is higher than the input resolution based on the width or height, the input resolution is retained. Valid values:
   * 
   * *   **true**:
   * *   **false**
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  isCheckReso?: string;
  /**
   * @remarks
   * Indicates whether the resolution is checked. If the output resolution is higher than the input resolution based on the width or height, a transcoding failure is returned. Valid values:
   * 
   * *   **true**
   * *   **false**
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  isCheckResoFail?: string;
  /**
   * @remarks
   * Indicates whether the video bitrate is checked. If the bitrate of the output video is higher than that of the input video, the input bitrate is retained. Valid values:
   * 
   * *   **true**
   * *   **false**
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  isCheckVideoBitrate?: string;
  /**
   * @remarks
   * Indicates whether the video bitrate is checked. If the bitrate of the output video is higher than that of the input video, the input video is not transcoded and a transcoding failure is returned. This parameter has a higher priority than IsCheckVideoBitrate. Valid values:
   * 
   * *   **true**
   * *   **false**
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  isCheckVideoBitrateFail?: string;
  /**
   * @remarks
   * The transcoding mode.
   * 
   * *   Valid values: onepass, twopass, and CBR.
   * *   Default value: **onepass**.
   * 
   * @example
   * onepass
   */
  transMode?: string;
  static names(): { [key: string]: string } {
    return {
      adjDarMethod: 'AdjDarMethod',
      isCheckAudioBitrate: 'IsCheckAudioBitrate',
      isCheckAudioBitrateFail: 'IsCheckAudioBitrateFail',
      isCheckReso: 'IsCheckReso',
      isCheckResoFail: 'IsCheckResoFail',
      isCheckVideoBitrate: 'IsCheckVideoBitrate',
      isCheckVideoBitrateFail: 'IsCheckVideoBitrateFail',
      transMode: 'TransMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjDarMethod: 'string',
      isCheckAudioBitrate: 'string',
      isCheckAudioBitrateFail: 'string',
      isCheckReso: 'string',
      isCheckResoFail: 'string',
      isCheckVideoBitrate: 'string',
      isCheckVideoBitrateFail: 'string',
      transMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputVideoBitrateBnd extends $dara.Model {
  /**
   * @remarks
   * The maximum bitrate.
   * 
   * @example
   * 1000
   */
  max?: string;
  /**
   * @remarks
   * The minimum bitrate.
   * 
   * @example
   * 300
   */
  min?: string;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'string',
      min: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputVideo extends $dara.Model {
  /**
   * @remarks
   * The average bitrate of the video. Unit: Kbit/s.
   * 
   * @example
   * 500
   */
  bitrate?: string;
  /**
   * @remarks
   * The average bitrate range of the video.
   */
  bitrateBnd?: QueryJobListResponseBodyJobListJobOutputVideoBitrateBnd;
  /**
   * @remarks
   * The buffer size.
   * 
   * *   Unit: KB.
   * *   Default value: **6000**.
   * 
   * @example
   * 6000
   */
  bufsize?: string;
  /**
   * @remarks
   * The video codec.
   * 
   * *   Valid values: H.264 and H.265.
   * *   Default value: H.264.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The constant rate factor.
   * 
   * *   Default value when the value of Codec is H.264: **23**, default value when the value of Codec is H.265: **26**.
   * *   If the value of this parameter is returned, the value of Bitrate becomes invalid.
   * 
   * @example
   * 26
   */
  crf?: string;
  /**
   * @remarks
   * The method of video cropping. Valid values:
   * 
   * *   **border**: automatically detects and removes borders.
   * *   A value in the width:height:left:top format: The video image is cropped based on custom settings.
   * 
   * @example
   * 1280:800:0:140
   */
  crop?: string;
  /**
   * @remarks
   * The strength of the independent noise reduction algorithm.
   * 
   * @example
   * 5
   */
  degrain?: string;
  /**
   * @remarks
   * The frame rate of the video.
   * 
   * *   Unit: frames per second.
   * *   The value is 60 if the frame rate of the input file exceeds 60.
   * *   Default value: the frame rate of the input video.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The maximum interval between keyframes or the maximum number of frames in a frame group. Unit: seconds.
   * 
   * *   Default value: **250**.
   * *   If the maximum number of frames is returned, the value does not contain a unit.
   * 
   * @example
   * 250
   */
  gop?: string;
  /**
   * @remarks
   * The height of the video.
   * 
   * *   Unit: pixel.
   * *   Default value: the height of the input video.
   * 
   * @example
   * 720
   */
  height?: string;
  /**
   * @remarks
   * The maximum frame rate.
   * 
   * @example
   * 60
   */
  maxFps?: string;
  /**
   * @remarks
   * The maximum bitrate of the video. Unit: Kbit/s.
   * 
   * @example
   * 3000
   */
  maxrate?: string;
  /**
   * @remarks
   * The black bars that are added to the video.
   * 
   * *   Unit: pixel.
   * *   Format: width:height:left:top.
   * 
   * @example
   * 1280:800:0:140
   */
  pad?: string;
  /**
   * @remarks
   * The pixel format of the video. Valid values: standard pixel formats such as yuv420p and yuvj420p.
   * 
   * @example
   * yuv420p
   */
  pixFmt?: string;
  /**
   * @remarks
   * The preset video algorithm. Default value: **medium**. Valid values:
   * 
   * *   **veryfast**
   * *   **fast**
   * *   **medium**
   * *   **slow**
   * *   **slower**
   * 
   * @example
   * medium
   */
  preset?: string;
  /**
   * @remarks
   * The codec profile of the video. Valid values: baseline, main, and high.
   * 
   * >  If multiple definitions are involved, we recommend that you use baseline for the lowest definition to ensure normal playback on low-end devices, and use main or high for other definitions.
   * 
   * *   **baseline**: applicable to mobile devices.
   * *   **main**: applicable to standard-definition devices.
   * *   **high**: applicable to high-definition devices.
   * *   Default value: **high**.
   * 
   * @example
   * high
   */
  profile?: string;
  /**
   * @remarks
   * The level of quality control on the video.
   * 
   * @example
   * 15
   */
  qscale?: string;
  /**
   * @remarks
   * The resource priority.
   * 
   * @example
   * 1
   */
  resoPriority?: string;
  /**
   * @remarks
   * The scan mode. Valid values:
   * 
   * *   If this parameter is left **empty**, the scan mode of the input video is used.
   * *   **auto**: automatic deinterlacing.
   * *   **progressive**: progressive scan.
   * *   **interlaced**: interlaced scan.
   * *   **By default**, this parameter is left empty.
   * 
   * **Best practice**: The interlaced scan mode saves data traffic than the progressive scan mode but provides poor image quality. Therefore, the progressive scan mode is commonly used in mainstream video production.
   * 
   * *   If **progressive** or **interlaced** is used when the scan mode of the input video is neither of them, the transcoding job fails.
   * *   We recommend that you use **the scan mode of the input video** or **automatic deinterlacing** for higher compatibility.
   * 
   * @example
   * interlaced
   */
  scanMode?: string;
  /**
   * @remarks
   * The width of the video.
   * 
   * *   Unit: pixel.
   * *   Default value: the width of the input video.
   * 
   * @example
   * 1280
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      bitrateBnd: 'BitrateBnd',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      crop: 'Crop',
      degrain: 'Degrain',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      maxFps: 'MaxFps',
      maxrate: 'Maxrate',
      pad: 'Pad',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      qscale: 'Qscale',
      resoPriority: 'ResoPriority',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      bitrateBnd: QueryJobListResponseBodyJobListJobOutputVideoBitrateBnd,
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      crop: 'string',
      degrain: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      maxFps: 'string',
      maxrate: 'string',
      pad: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      qscale: 'string',
      resoPriority: 'string',
      scanMode: 'string',
      width: 'string',
    };
  }

  validate() {
    if(this.bitrateBnd && typeof (this.bitrateBnd as any).validate === 'function') {
      (this.bitrateBnd as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputWaterMarkListWaterMarkInputFile extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which the input file is stored.
   * 
   * @example
   * example-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS region in which the input file resides.
   * 
   * @example
   * oss-cn-hangzhou
   */
  location?: string;
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) object that is used as the input file.
   * 
   * @example
   * example-logo-****.png
   */
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputWaterMarkListWaterMark extends $dara.Model {
  /**
   * @remarks
   * The horizontal offset of the watermark image relative to the output video. If this parameter is specified in the request, the corresponding parameter in the watermark template is overwritten. Default value: 0. The value can be an integer or a decimal number.
   * 
   * *   An integer indicates the pixel value of the horizontal offset.
   * 
   *     *   Valid values: **[8,4096]**.
   *     *   Unit: pixel.
   * 
   * *   A decimal number indicates the ratio of the horizontal offset to the width in the output video resolution.
   * 
   *     *   Valid values: (0,1).
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excessive digits are automatically discarded.
   * 
   * @example
   * 100
   */
  dx?: string;
  /**
   * @remarks
   * The vertical offset of the watermark image relative to the output video. If this parameter is specified in the request, the corresponding parameter in the watermark template is overwritten. The value can be an integer or a decimal number.
   * 
   * *   An integer indicates the pixel value of the vertical offset.
   * 
   *     *   Valid values: **[8,4096]**.
   *     *   Unit: pixel.
   * 
   * *   A decimal number indicates the ratio of the vertical offset to the height in the output video resolution.
   * 
   *     *   Valid values: **(0,1)**.
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excessive digits are automatically discarded.
   * 
   * @example
   * 100
   */
  dy?: string;
  /**
   * @remarks
   * The height of the watermark image. If this parameter is specified in the request, the corresponding parameter in the watermark template is overwritten. The value can be an integer or a decimal number.
   * 
   * *   An integer indicates the pixel value of the watermark height.
   * 
   *     *   Valid values: **[8,4096]**.
   *     *   Unit: pixel.
   * 
   * *   A decimal number indicates the ratio of the watermark height to the height in the output video resolution.
   * 
   *     *   Valid values: **(0,1)**.
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excessive digits are automatically discarded.
   * 
   * @example
   * 50
   */
  height?: string;
  /**
   * @remarks
   * The watermark input file. PNG images and MOV files are supported.
   */
  inputFile?: QueryJobListResponseBodyJobListJobOutputWaterMarkListWaterMarkInputFile;
  /**
   * @remarks
   * The position of the watermark. If this parameter is specified in the request, the corresponding parameter in the watermark template is overwritten. Valid values:
   * 
   * *   TopRight
   * *   TopLeft
   * *   BottomRight
   * *   BottomLeft
   * 
   * @example
   * TopRight
   */
  referPos?: string;
  /**
   * @remarks
   * The type of the watermark. If this parameter is specified in the request, the corresponding parameter in the watermark template is overwritten. For more information, see [Parameter details](https://help.aliyun.com/document_detail/29253.html). Valid values:
   * 
   * *   Image
   * *   Text
   * 
   * @example
   * Image
   */
  type?: string;
  /**
   * @remarks
   * The ID of the watermark template.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2a12****
   */
  waterMarkTemplateId?: string;
  /**
   * @remarks
   * The width of the watermark image. If this parameter is specified in the request, the corresponding parameter in the watermark template is overwritten. The value can be an integer or a decimal number.
   * 
   * *   An integer indicates the pixel value of the watermark width.
   * 
   *     *   Valid values: **[8,4096]**.
   *     *   Unit: pixel.
   * 
   * *   A decimal number indicates the ratio of the watermark width to the width in the output video resolution.
   * 
   *     *   Valid values: **(0,1)**.
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excessive digits are automatically discarded.
   * 
   * @example
   * 50
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      height: 'Height',
      inputFile: 'InputFile',
      referPos: 'ReferPos',
      type: 'Type',
      waterMarkTemplateId: 'WaterMarkTemplateId',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      height: 'string',
      inputFile: QueryJobListResponseBodyJobListJobOutputWaterMarkListWaterMarkInputFile,
      referPos: 'string',
      type: 'string',
      waterMarkTemplateId: 'string',
      width: 'string',
    };
  }

  validate() {
    if(this.inputFile && typeof (this.inputFile as any).validate === 'function') {
      (this.inputFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutputWaterMarkList extends $dara.Model {
  waterMark?: QueryJobListResponseBodyJobListJobOutputWaterMarkListWaterMark[];
  static names(): { [key: string]: string } {
    return {
      waterMark: 'WaterMark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      waterMark: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputWaterMarkListWaterMark },
    };
  }

  validate() {
    if(Array.isArray(this.waterMark)) {
      $dara.Model.validateArray(this.waterMark);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJobOutput extends $dara.Model {
  /**
   * @remarks
   * The audio configurations.
   * 
   * >  If this parameter is specified in the request, the corresponding parameters in the specified transcoding template are overwritten.
   */
  audio?: QueryJobListResponseBodyJobListJobOutputAudio;
  /**
   * @remarks
   * The sequence number of the audio stream.
   * 
   * *   Format: 0:a:{Sequence number}. Example: 0:a:0.
   * *   The sequence number is the index of the audio stream in the list and starts from 0.
   * *   If no sequence number is specified, the default audio stream is used.
   * 
   * @example
   * 0:a:0
   */
  audioStreamMap?: string;
  /**
   * @remarks
   * The information about clips.
   */
  clip?: QueryJobListResponseBodyJobListJobOutputClip;
  /**
   * @remarks
   * The container format configurations.
   */
  container?: QueryJobListResponseBodyJobListJobOutputContainer;
  /**
   * @remarks
   * The configurations of watermark blurring. The value is a JSON object. For more information, see the DeWatermark section of the [Parameter details](https://help.aliyun.com/document_detail/29253.html) topic.
   * 
   * @example
   * {"0":[{"l":10,"t":10,"w":10,"h":10},{"l":100,"t":0.1,"w":10,"h":10}],"128000":[],"250000":[{"l":0.2,"t":0.1,"w":0.01,"h":0.05}]}
   */
  deWatermark?: string;
  /**
   * @remarks
   * The encryption configurations. The encrypted video file is generated in the M3U8 format.
   */
  encryption?: QueryJobListResponseBodyJobListJobOutputEncryption;
  /**
   * @remarks
   * The custom fields.
   * 
   * @example
   * testid-002
   */
  extendData?: string;
  /**
   * @remarks
   * The non-standard support configurations for M3U8. The value is a JSON object. For more information, see the M3U8NonStandardSupport section of the [Parameter details](https://help.aliyun.com/document_detail/29253.html) topic.
   */
  m3U8NonStandardSupport?: QueryJobListResponseBodyJobListJobOutputM3U8NonStandardSupport;
  /**
   * @remarks
   * The URL of the merging configuration file. Only one of MergeList and MergeConfigUrl takes effect.
   * 
   * *   The configuration file specified by MergeConfigUrl can contain up to 50 clips.
   * *   MergeConfigUrl indicates the URL of the configuration file for merging clips. Make sure that the configuration file is stored as an object in OSS and that MPS can access the OSS object. For information about the file content, see the details about merging parameters.
   * *   Example of the content of the merging configuration file: `{"MergeList":[{"MergeURL":"http://exampleBucket****.oss-cn-hangzhou.aliyuncs.com/video_01.mp4"}]}`.
   * 
   * @example
   * https://ceshi-***.oss-cn-shanghai.aliyuncs.com/ccc/p0903q9wkkb.m3u8
   */
  mergeConfigUrl?: string;
  /**
   * @remarks
   * The configurations of clip merging. Up to four clips can be merged.
   */
  mergeList?: QueryJobListResponseBodyJobListJobOutputMergeList;
  /**
   * @remarks
   * The information about the high-speed transcoding job. This information is available only for jobs that are submitted by using an MPS queue for high-speed transcoding. This does not support MPS queues for high-speed transcoding of an earlier version.
   */
  multiSpeedInfo?: QueryJobListResponseBodyJobListJobOutputMultiSpeedInfo;
  /**
   * @remarks
   * The transmuxing configurations. The transmuxing configurations. If this parameter is specified in the request, the corresponding parameters in the specified transcoding template are overwritten.
   */
  muxConfig?: QueryJobListResponseBodyJobListJobOutputMuxConfig;
  /**
   * @remarks
   * The opening parts. The value is a JSON object.
   */
  openingList?: QueryJobListResponseBodyJobListJobOutputOpeningList;
  /**
   * @remarks
   * The output captions.
   */
  outSubtitleList?: QueryJobListResponseBodyJobListJobOutputOutSubtitleList;
  /**
   * @remarks
   * The details of the output file.
   */
  outputFile?: QueryJobListResponseBodyJobListJobOutputOutputFile;
  /**
   * @remarks
   * The priority of the job in the ApsaraVideo Media Processing (MPS) queue to which the job is added.
   * 
   * *   A value of 10 indicates the highest priority.
   * *   Default value: **6**.
   * 
   * @example
   * 6
   */
  priority?: string;
  /**
   * @remarks
   * The media properties.
   */
  properties?: QueryJobListResponseBodyJobListJobOutputProperties;
  /**
   * @remarks
   * The rotation angle of the video.
   * 
   * @example
   * 90
   */
  rotate?: string;
  /**
   * @remarks
   * The caption configurations.
   */
  subtitleConfig?: QueryJobListResponseBodyJobListJobOutputSubtitleConfig;
  /**
   * @remarks
   * The configurations for using the resolution of the source video.
   */
  superReso?: QueryJobListResponseBodyJobListJobOutputSuperReso;
  /**
   * @remarks
   * The ending parts.
   */
  tailSlateList?: QueryJobListResponseBodyJobListJobOutputTailSlateList;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * S00000001-200010
   */
  templateId?: string;
  /**
   * @remarks
   * The general transcoding configurations.
   * 
   * >  If this parameter is specified in the request, the corresponding parameters in the specified transcoding template are overwritten.
   */
  transConfig?: QueryJobListResponseBodyJobListJobOutputTransConfig;
  /**
   * @remarks
   * The custom data.
   * 
   * @example
   * testid-001
   */
  userData?: string;
  /**
   * @remarks
   * The video configurations.
   */
  video?: QueryJobListResponseBodyJobListJobOutputVideo;
  /**
   * @remarks
   * The sequence number of the video stream. The sequence number is the index of the video stream in the list and starts from 0. If no sequence number is specified, the default video stream is used.
   * 
   * @example
   * 0
   */
  videoStreamMap?: string;
  /**
   * @remarks
   * The URL of the watermark configuration file.
   * 
   * @example
   * http://example.com/configure
   */
  waterMarkConfigUrl?: string;
  /**
   * @remarks
   * The watermarks.
   */
  waterMarkList?: QueryJobListResponseBodyJobListJobOutputWaterMarkList;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      audioStreamMap: 'AudioStreamMap',
      clip: 'Clip',
      container: 'Container',
      deWatermark: 'DeWatermark',
      encryption: 'Encryption',
      extendData: 'ExtendData',
      m3U8NonStandardSupport: 'M3U8NonStandardSupport',
      mergeConfigUrl: 'MergeConfigUrl',
      mergeList: 'MergeList',
      multiSpeedInfo: 'MultiSpeedInfo',
      muxConfig: 'MuxConfig',
      openingList: 'OpeningList',
      outSubtitleList: 'OutSubtitleList',
      outputFile: 'OutputFile',
      priority: 'Priority',
      properties: 'Properties',
      rotate: 'Rotate',
      subtitleConfig: 'SubtitleConfig',
      superReso: 'SuperReso',
      tailSlateList: 'TailSlateList',
      templateId: 'TemplateId',
      transConfig: 'TransConfig',
      userData: 'UserData',
      video: 'Video',
      videoStreamMap: 'VideoStreamMap',
      waterMarkConfigUrl: 'WaterMarkConfigUrl',
      waterMarkList: 'WaterMarkList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: QueryJobListResponseBodyJobListJobOutputAudio,
      audioStreamMap: 'string',
      clip: QueryJobListResponseBodyJobListJobOutputClip,
      container: QueryJobListResponseBodyJobListJobOutputContainer,
      deWatermark: 'string',
      encryption: QueryJobListResponseBodyJobListJobOutputEncryption,
      extendData: 'string',
      m3U8NonStandardSupport: QueryJobListResponseBodyJobListJobOutputM3U8NonStandardSupport,
      mergeConfigUrl: 'string',
      mergeList: QueryJobListResponseBodyJobListJobOutputMergeList,
      multiSpeedInfo: QueryJobListResponseBodyJobListJobOutputMultiSpeedInfo,
      muxConfig: QueryJobListResponseBodyJobListJobOutputMuxConfig,
      openingList: QueryJobListResponseBodyJobListJobOutputOpeningList,
      outSubtitleList: QueryJobListResponseBodyJobListJobOutputOutSubtitleList,
      outputFile: QueryJobListResponseBodyJobListJobOutputOutputFile,
      priority: 'string',
      properties: QueryJobListResponseBodyJobListJobOutputProperties,
      rotate: 'string',
      subtitleConfig: QueryJobListResponseBodyJobListJobOutputSubtitleConfig,
      superReso: QueryJobListResponseBodyJobListJobOutputSuperReso,
      tailSlateList: QueryJobListResponseBodyJobListJobOutputTailSlateList,
      templateId: 'string',
      transConfig: QueryJobListResponseBodyJobListJobOutputTransConfig,
      userData: 'string',
      video: QueryJobListResponseBodyJobListJobOutputVideo,
      videoStreamMap: 'string',
      waterMarkConfigUrl: 'string',
      waterMarkList: QueryJobListResponseBodyJobListJobOutputWaterMarkList,
    };
  }

  validate() {
    if(this.audio && typeof (this.audio as any).validate === 'function') {
      (this.audio as any).validate();
    }
    if(this.clip && typeof (this.clip as any).validate === 'function') {
      (this.clip as any).validate();
    }
    if(this.container && typeof (this.container as any).validate === 'function') {
      (this.container as any).validate();
    }
    if(this.encryption && typeof (this.encryption as any).validate === 'function') {
      (this.encryption as any).validate();
    }
    if(this.m3U8NonStandardSupport && typeof (this.m3U8NonStandardSupport as any).validate === 'function') {
      (this.m3U8NonStandardSupport as any).validate();
    }
    if(this.mergeList && typeof (this.mergeList as any).validate === 'function') {
      (this.mergeList as any).validate();
    }
    if(this.multiSpeedInfo && typeof (this.multiSpeedInfo as any).validate === 'function') {
      (this.multiSpeedInfo as any).validate();
    }
    if(this.muxConfig && typeof (this.muxConfig as any).validate === 'function') {
      (this.muxConfig as any).validate();
    }
    if(this.openingList && typeof (this.openingList as any).validate === 'function') {
      (this.openingList as any).validate();
    }
    if(this.outSubtitleList && typeof (this.outSubtitleList as any).validate === 'function') {
      (this.outSubtitleList as any).validate();
    }
    if(this.outputFile && typeof (this.outputFile as any).validate === 'function') {
      (this.outputFile as any).validate();
    }
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    if(this.subtitleConfig && typeof (this.subtitleConfig as any).validate === 'function') {
      (this.subtitleConfig as any).validate();
    }
    if(this.superReso && typeof (this.superReso as any).validate === 'function') {
      (this.superReso as any).validate();
    }
    if(this.tailSlateList && typeof (this.tailSlateList as any).validate === 'function') {
      (this.tailSlateList as any).validate();
    }
    if(this.transConfig && typeof (this.transConfig as any).validate === 'function') {
      (this.transConfig as any).validate();
    }
    if(this.video && typeof (this.video as any).validate === 'function') {
      (this.video as any).validate();
    }
    if(this.waterMarkList && typeof (this.waterMarkList as any).validate === 'function') {
      (this.waterMarkList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobListJob extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the job failed. If the job was successful, this parameter is not returned.
   * 
   * @example
   * InvalidParameter.NullValue
   */
  code?: string;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2014-01-10T12:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The time when the job was complete.
   * 
   * @example
   * 2014-01-10T12:20:25Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The information about the job input.
   */
  input?: QueryJobListResponseBodyJobListJobInput;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 31fa3c9ca8134fb4b0b0f7878301****
   */
  jobId?: string;
  /**
   * @remarks
   * The message sent by Message Service (MNS) to notify users of the job result.
   */
  MNSMessageResult?: QueryJobListResponseBodyJobListJobMNSMessageResult;
  /**
   * @remarks
   * The error message returned if the job failed. If the job was successful, this parameter is not returned.
   * 
   * @example
   * The specified parameter "%s" cannot be null.
   */
  message?: string;
  /**
   * @remarks
   * The job output.
   */
  output?: QueryJobListResponseBodyJobListJobOutput;
  /**
   * @remarks
   * The transcoding progress.
   * 
   * @example
   * 100
   */
  percent?: number;
  /**
   * @remarks
   * The ID of the MPS queue that is used to run the job.
   * 
   * @example
   * 88c6ca184c0e47b665e2a1267971****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The job state. Valid values:
   * 
   * *   **Submitted**: The job was submitted.
   * *   **Transcoding**: Transcoding is in process.
   * *   **TranscodeSuccess**: The job was successful.
   * *   **TranscodeFail**: The job failed.
   * *   **TranscodeCancelled**: The job was canceled.
   * 
   * @example
   * TranscodeSuccess
   */
  state?: string;
  /**
   * @remarks
   * The time when the job was submitted.
   * 
   * @example
   * 2021-03-04T06:44:43Z
   */
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      creationTime: 'CreationTime',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      output: 'Output',
      percent: 'Percent',
      pipelineId: 'PipelineId',
      state: 'State',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      creationTime: 'string',
      finishTime: 'string',
      input: QueryJobListResponseBodyJobListJobInput,
      jobId: 'string',
      MNSMessageResult: QueryJobListResponseBodyJobListJobMNSMessageResult,
      message: 'string',
      output: QueryJobListResponseBodyJobListJobOutput,
      percent: 'number',
      pipelineId: 'string',
      state: 'string',
      submitTime: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.MNSMessageResult && typeof (this.MNSMessageResult as any).validate === 'function') {
      (this.MNSMessageResult as any).validate();
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyJobList extends $dara.Model {
  job?: QueryJobListResponseBodyJobListJob[];
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJob },
    };
  }

  validate() {
    if(Array.isArray(this.job)) {
      $dara.Model.validateArray(this.job);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBodyNonExistJobIds extends $dara.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.string)) {
      $dara.Model.validateArray(this.string);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The transcoding jobs.
   */
  jobList?: QueryJobListResponseBodyJobList;
  /**
   * @remarks
   * The list of nonexistent job IDs. If all queried job IDs exist, the response does not contain this parameter.
   */
  nonExistJobIds?: QueryJobListResponseBodyNonExistJobIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 197ADF44-104C-514C-9F92-D8924CB34E2A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobList: 'JobList',
      nonExistJobIds: 'NonExistJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobList: QueryJobListResponseBodyJobList,
      nonExistJobIds: QueryJobListResponseBodyNonExistJobIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.jobList && typeof (this.jobList as any).validate === 'function') {
      (this.jobList as any).validate();
    }
    if(this.nonExistJobIds && typeof (this.nonExistJobIds as any).validate === 'function') {
      (this.nonExistJobIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

