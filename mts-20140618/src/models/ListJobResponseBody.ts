// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobResponseBodyJobListJobInput extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which the job input is stored.
   * 
   * @example
   * example-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The ID of the OSS region in which the job input is stored.
   * 
   * @example
   * oss-cn-hangzhou
   */
  location?: string;
  /**
   * @remarks
   * The name of the OSS object that is used as the job input.
   * 
   * @example
   * example.flv
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

export class ListJobResponseBodyJobListJobMNSMessageResult extends $dara.Model {
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

export class ListJobResponseBodyJobListJobOutputAudioVolume extends $dara.Model {
  /**
   * @remarks
   * The volume adjustment range.
   * 
   * *   Unit: decibel.
   * *   Default value: **-20**.
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

export class ListJobResponseBodyJobListJobOutputAudio extends $dara.Model {
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
   * *   If the value of Codec is mp3, the value of this parameter can only be 1 or 2.
   * *   If the value of Codec is aac, the value of this parameter can only be 1, 2, 4, 5, 6, or 8.
   * *   Default value: 2.
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
   * The codec profile of the audio. Valid values if the value of Codec is aac: aaclow, aache, aachev2, aacld, and aaceld.
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
   * *   If the video container format is FLV and the audio codec is MP3, the value of this parameter cannot be 32000, 48000, or 96000. If the audio codec is MP3, the value of this parameter cannot be 96000.
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  /**
   * @remarks
   * The volume configurations.
   */
  volume?: ListJobResponseBodyJobListJobOutputAudioVolume;
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
      volume: ListJobResponseBodyJobListJobOutputAudioVolume,
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

export class ListJobResponseBodyJobListJobOutputClipTimeSpan extends $dara.Model {
  /**
   * @remarks
   * The duration of the clip.
   * 
   * *   Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * *   Valid values: `[00:00:00.000,23:59:59.999]` or `[0.000,86399.999]`.
   * *   Examples: 01:00:59.999 and 32000.23.
   * 
   * @example
   * 01:00:59.999
   */
  duration?: string;
  /**
   * @remarks
   * The point in time when the clip starts.
   * 
   * *   Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * *   Valid values: `[00:00:00.000,23:59:59.999]` or `[0.000,86399.999]`.
   * *   Examples: 01:59:59.999 and 32000.23.
   * 
   * @example
   * 01:00:59.999
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

export class ListJobResponseBodyJobListJobOutputClip extends $dara.Model {
  /**
   * @remarks
   * The time span of the clip.
   */
  timeSpan?: ListJobResponseBodyJobListJobOutputClipTimeSpan;
  static names(): { [key: string]: string } {
    return {
      timeSpan: 'TimeSpan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeSpan: ListJobResponseBodyJobListJobOutputClipTimeSpan,
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

export class ListJobResponseBodyJobListJobOutputContainer extends $dara.Model {
  /**
   * @remarks
   * The container format.
   * 
   * *   Default value: mp4.
   * *   Video formats include FLV, MP4, HLS (M3U8 + TS), and MPEG-DASH (MPD + fMP4).
   * *   Audio formats include MP3, MP4, Ogg, FLAC, and M4A.
   * *   Image formats include GIF and WebP.
   * *   If the container format is GIF, the video codec must be GIF.
   * *   If the container format is WebP, the video codec must be WebP.
   * *   If the container format is FLV, the video codec cannot be H.265.
   * 
   * @example
   * flv
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

export class ListJobResponseBodyJobListJobOutputEncryption extends $dara.Model {
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
   * >  For example, if the key is encryptionkey128, you can encrypt the key in the Base64 format or use Key Management Service (KMS) to encrypt the key.``````
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
   * The encryption type. Only hls-aes-128 may be returned.
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

export class ListJobResponseBodyJobListJobOutputM3U8NonStandardSupportTS extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the MD5 value of the TS file is included in the M3U8 file. Valid values:
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
   * Indicates whether the size of the TS file is included in the M3U8 file.
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

export class ListJobResponseBodyJobListJobOutputM3U8NonStandardSupport extends $dara.Model {
  /**
   * @remarks
   * The non-standard support configurations for TS files. The value is a JSON object. For more information, see [Parameter details](https://help.aliyun.com/document_detail/29253.html).
   */
  TS?: ListJobResponseBodyJobListJobOutputM3U8NonStandardSupportTS;
  static names(): { [key: string]: string } {
    return {
      TS: 'TS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      TS: ListJobResponseBodyJobListJobOutputM3U8NonStandardSupportTS,
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

export class ListJobResponseBodyJobListJobOutputMergeListMerge extends $dara.Model {
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
   * *   Example: `http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com/example-object.flv`.
   * *   The object must be URL-encoded by using the UTF-8 standard.
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

export class ListJobResponseBodyJobListJobOutputMergeList extends $dara.Model {
  merge?: ListJobResponseBodyJobListJobOutputMergeListMerge[];
  static names(): { [key: string]: string } {
    return {
      merge: 'Merge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      merge: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputMergeListMerge },
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

export class ListJobResponseBodyJobListJobOutputMuxConfigGif extends $dara.Model {
  /**
   * @remarks
   * The color dithering algorithm of the palette. Valid values: **sierra** and **bayer**.
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
   * true
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

export class ListJobResponseBodyJobListJobOutputMuxConfigSegment extends $dara.Model {
  /**
   * @remarks
   * The length of the segment. The value must be an integer. Unit: seconds.
   * 
   * *   Valid values: [1,10].
   * *   Default value: 10.
   * 
   * @example
   * 10
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

export class ListJobResponseBodyJobListJobOutputMuxConfigWebp extends $dara.Model {
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

export class ListJobResponseBodyJobListJobOutputMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The transmuxing configurations for GIF.
   */
  gif?: ListJobResponseBodyJobListJobOutputMuxConfigGif;
  /**
   * @remarks
   * The segment configurations. The value is a JSON object.
   */
  segment?: ListJobResponseBodyJobListJobOutputMuxConfigSegment;
  /**
   * @remarks
   * The transmuxing configurations for WebP.
   */
  webp?: ListJobResponseBodyJobListJobOutputMuxConfigWebp;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
      webp: 'Webp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: ListJobResponseBodyJobListJobOutputMuxConfigGif,
      segment: ListJobResponseBodyJobListJobOutputMuxConfigSegment,
      webp: ListJobResponseBodyJobListJobOutputMuxConfigWebp,
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

export class ListJobResponseBodyJobListJobOutputOpeningListOpening extends $dara.Model {
  /**
   * @remarks
   * The height of the opening part. Valid values: values in the range of (0, 4096), -1, and full.
   * 
   * *   Default value: **-1**.
   * *   A value of -1 indicates that the height of the source of the opening part is retained.
   * *   A value of full indicates that the height of the opening part equals the height of the main part.
   * 
   * @example
   * -1
   */
  height?: string;
  /**
   * @remarks
   * The amount of time after which the opening part is played. The value starts from 0.
   * 
   * *   Unit: seconds.
   * *   Default value: **0**.
   * 
   * @example
   * 0
   */
  start?: string;
  /**
   * @remarks
   * The width of the opening part. Valid values: values in the range of (0, 4096), -1, and full.
   * 
   * *   Default value: **-1**.
   * *   A value of -1 indicates that the width of the source of the opening part is retained.
   * *   A value of full indicates that the width of the opening part equals the width of the main part.
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
   * http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com/opening_01.flv
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

export class ListJobResponseBodyJobListJobOutputOpeningList extends $dara.Model {
  opening?: ListJobResponseBodyJobListJobOutputOpeningListOpening[];
  static names(): { [key: string]: string } {
    return {
      opening: 'Opening',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opening: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputOpeningListOpening },
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

export class ListJobResponseBodyJobListJobOutputOutSubtitleListOutSubtitleOutSubtitleFile extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which the input file is stored.
   * 
   * @example
   * example-bucket-****
   */
  bucket?: string;
  /**
   * @remarks
   * The ID of the OSS region in which the output file is stored.
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

export class ListJobResponseBodyJobListJobOutputOutSubtitleListOutSubtitle extends $dara.Model {
  /**
   * @remarks
   * The video track. Format: 0:{Stream}:{Stream sequence number}, that is, 0:v:{video_index}. The value of Stream is v, which indicates a video stream. The sequence number is the index of the video stream in the list and starts from 0.
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
   * The details of the output file.
   */
  outSubtitleFile?: ListJobResponseBodyJobListJobOutputOutSubtitleListOutSubtitleOutSubtitleFile;
  /**
   * @remarks
   * Indicates whether the job was created. Valid values:
   * 
   * *   **true**
   * *   **false**
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
      outSubtitleFile: ListJobResponseBodyJobListJobOutputOutSubtitleListOutSubtitleOutSubtitleFile,
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

export class ListJobResponseBodyJobListJobOutputOutSubtitleList extends $dara.Model {
  outSubtitle?: ListJobResponseBodyJobListJobOutputOutSubtitleListOutSubtitle[];
  static names(): { [key: string]: string } {
    return {
      outSubtitle: 'OutSubtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outSubtitle: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputOutSubtitleListOutSubtitle },
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

export class ListJobResponseBodyJobListJobOutputOutputFile extends $dara.Model {
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
   * The ID of the OSS region in which the output file is stored.
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

export class ListJobResponseBodyJobListJobOutputPropertiesFormat extends $dara.Model {
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
   * The size of the file.
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
   * 0.064000
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

export class ListJobResponseBodyJobListJobOutputPropertiesStreamsAudioStreamListAudioStream extends $dara.Model {
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
   * mp4a
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
   * 30
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
   * The sampling rate of the audio stream.
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
   * 0.000000
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

export class ListJobResponseBodyJobListJobOutputPropertiesStreamsAudioStreamList extends $dara.Model {
  audioStream?: ListJobResponseBodyJobListJobOutputPropertiesStreamsAudioStreamListAudioStream[];
  static names(): { [key: string]: string } {
    return {
      audioStream: 'AudioStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStream: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputPropertiesStreamsAudioStreamListAudioStream },
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

export class ListJobResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream extends $dara.Model {
  /**
   * @remarks
   * The sequence number of the subtitle stream. The value indicates the position of the subtitle stream in all subtitle streams.
   * 
   * @example
   * 1
   */
  index?: string;
  /**
   * @remarks
   * The language of the subtitle stream.
   * 
   * @example
   * und
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

export class ListJobResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamList extends $dara.Model {
  subtitleStream?: ListJobResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream[];
  static names(): { [key: string]: string } {
    return {
      subtitleStream: 'SubtitleStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitleStream: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream },
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

export class ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost extends $dara.Model {
  /**
   * @remarks
   * The average bitrate of the video stream.
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

export class ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStream extends $dara.Model {
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
   * The bitrate of the video stream.
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
   * The display aspect ratio (DAR).
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
   * Indicates whether the video stream contains B-frames.
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
   * und
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
  networkCost?: ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost;
  /**
   * @remarks
   * The total frame rate.
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
      networkCost: ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost,
      numFrames: 'string',
      pixFmt: 'string',
      profile: 'string',
      sar: 'string',
      startTime: 'string',
      timebase: 'string',
      width: 'string',
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

export class ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamList extends $dara.Model {
  videoStream?: ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStream[];
  static names(): { [key: string]: string } {
    return {
      videoStream: 'VideoStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoStream: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStream },
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

export class ListJobResponseBodyJobListJobOutputPropertiesStreams extends $dara.Model {
  /**
   * @remarks
   * The audio streams.
   */
  audioStreamList?: ListJobResponseBodyJobListJobOutputPropertiesStreamsAudioStreamList;
  /**
   * @remarks
   * The subtitle streams.
   */
  subtitleStreamList?: ListJobResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamList;
  /**
   * @remarks
   * The video streams.
   */
  videoStreamList?: ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamList;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: ListJobResponseBodyJobListJobOutputPropertiesStreamsAudioStreamList,
      subtitleStreamList: ListJobResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamList,
      videoStreamList: ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamList,
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

export class ListJobResponseBodyJobListJobOutputProperties extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the video.
   * 
   * @example
   * 490
   */
  bitrate?: string;
  /**
   * @remarks
   * The duration of the video.
   * 
   * @example
   * 17
   */
  duration?: string;
  /**
   * @remarks
   * The format of the video.
   * 
   * @example
   * mp4
   */
  fileFormat?: string;
  /**
   * @remarks
   * The size of the file.
   * 
   * @example
   * 1057273
   */
  fileSize?: string;
  /**
   * @remarks
   * The format information.
   */
  format?: ListJobResponseBodyJobListJobOutputPropertiesFormat;
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
   * The height of the video.
   * 
   * @example
   * 1280
   */
  height?: string;
  /**
   * @remarks
   * The stream information.
   */
  streams?: ListJobResponseBodyJobListJobOutputPropertiesStreams;
  /**
   * @remarks
   * The width of the video.
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
      format: ListJobResponseBodyJobListJobOutputPropertiesFormat,
      fps: 'string',
      height: 'string',
      streams: ListJobResponseBodyJobListJobOutputPropertiesStreams,
      width: 'string',
    };
  }

  validate() {
    if(this.format && typeof (this.format as any).validate === 'function') {
      (this.format as any).validate();
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

export class ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which the input file is stored.
   * 
   * @example
   * example-bucket-****
   */
  bucket?: string;
  /**
   * @remarks
   * The ID of the OSS region in which the input file is stored.
   * 
   * @example
   * oss-cn-hangzhou
   */
  location?: string;
  /**
   * @remarks
   * The name of the OSS object that is used as the input file.
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

export class ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitle extends $dara.Model {
  /**
   * @remarks
   * The character set used by the external subtitle.
   * 
   * *   Valid values: UTF-8, GBK, BIG5, and auto.
   * *   Default value: **auto**.
   * 
   * >  If this parameter is set to auto, the detected character set may not be the actual character set. We recommend that you set this parameter to another value.
   * 
   * @example
   * auto
   */
  charEnc?: string;
  /**
   * @remarks
   * The font of the hardcoded subtitles converted from external subtitles.
   * 
   * @example
   * "WenQuanYi Zen Hei", "Yuanti SC Regular", "SimSun"
   */
  fontName?: string;
  /**
   * @remarks
   * The input subtitle file.
   * 
   * *   Files in the SRT or ASS format are supported. For more information, see [Parameter details](https://help.aliyun.com/document_detail/29253.html).
   * *   Example: `{"Bucket":"example-bucket","Location":"oss-cn-hangzhou","Object":"example.srt"}`.
   */
  input?: ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput;
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
      input: ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput,
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

export class ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleList extends $dara.Model {
  extSubtitle?: ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitle[];
  static names(): { [key: string]: string } {
    return {
      extSubtitle: 'ExtSubtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSubtitle: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitle },
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

export class ListJobResponseBodyJobListJobOutputSubtitleConfigSubtitleListSubtitle extends $dara.Model {
  /**
   * @remarks
   * The sequence number of the video stream. The sequence number is the index of the video stream in the list and starts from 0. If you do not set the corresponding parameter in the request, the default video stream is selected.
   * 
   * @example
   * 0
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

export class ListJobResponseBodyJobListJobOutputSubtitleConfigSubtitleList extends $dara.Model {
  subtitle?: ListJobResponseBodyJobListJobOutputSubtitleConfigSubtitleListSubtitle[];
  static names(): { [key: string]: string } {
    return {
      subtitle: 'Subtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitle: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputSubtitleConfigSubtitleListSubtitle },
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

export class ListJobResponseBodyJobListJobOutputSubtitleConfig extends $dara.Model {
  /**
   * @remarks
   * The external subtitles. The value is a JSON array.
   */
  extSubtitleList?: ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleList;
  /**
   * @remarks
   * The subtitles.
   */
  subtitleList?: ListJobResponseBodyJobListJobOutputSubtitleConfigSubtitleList;
  static names(): { [key: string]: string } {
    return {
      extSubtitleList: 'ExtSubtitleList',
      subtitleList: 'SubtitleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSubtitleList: ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleList,
      subtitleList: ListJobResponseBodyJobListJobOutputSubtitleConfigSubtitleList,
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

export class ListJobResponseBodyJobListJobOutputSuperReso extends $dara.Model {
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

export class ListJobResponseBodyJobListJobOutputTailSlateListTailSlate extends $dara.Model {
  /**
   * @remarks
   * The color of the bars that are added to the ending part if the size of the ending part is smaller than that of the main part. Default value: **White**. For more information, see [Background colors](https://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/29253/cn_zh/1502784952344/color.txt?spm=a2c4g.11186623.2.63.1df840f74IH4Eq\\&file=color.txt).
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
   * The height of the ending part. Valid values: values in the range of (0, 4096), -1, and full.
   * 
   * *   A value of -1 indicates that the height of the source of the ending part is retained.
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
   * The start time.
   * 
   * @example
   * 1
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
   * The width of the ending part. Valid values: values in the range of (0, 4096), -1, and full.
   * 
   * *   A value of -1 indicates that the width of the source of the ending part is retained. A value of full indicates that the width of the ending part equals the width of the main part.
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

export class ListJobResponseBodyJobListJobOutputTailSlateList extends $dara.Model {
  tailSlate?: ListJobResponseBodyJobListJobOutputTailSlateListTailSlate[];
  static names(): { [key: string]: string } {
    return {
      tailSlate: 'TailSlate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tailSlate: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputTailSlateListTailSlate },
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

export class ListJobResponseBodyJobListJobOutputTransConfig extends $dara.Model {
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
   *     *   If this parameter is empty and the codec of the output audio is different from the codec of the input audio, the default value is false.
   *     *   If this parameter is empty and the codec of the output audio is the same as the codec of the input audio, the default value is true.
   * 
   * @example
   * false
   */
  isCheckAudioBitrate?: string;
  /**
   * @remarks
   * Indicates whether the audio bitrate is checked. If the bitrate of the output audio is higher than that of the input audio, a transcoding failure is returned without transcoding the audio. This parameter has a higher priority than IsCheckAudioBitrate. Valid values:
   * 
   * *   **false**: The audio bitrate is checked.
   * *   **true**: The audio bitrate is not checked.
   * 
   * @example
   * false
   */
  isCheckAudioBitrateFail?: string;
  /**
   * @remarks
   * Indicates whether the resolution is checked. If the output resolution is higher than the input resolution based on the width or height, the input resolution is retained. Valid values:
   * 
   * *   **true**
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
   * Indicates whether the video bitrate is checked. If the bitrate of the output video is higher than that of the input video, a transcoding failure is returned without transcoding the video. This parameter has a higher priority than IsCheckVideoBitrate. Valid values:
   * 
   * *   **true**
   * *   **false**
   * *   Default value: false.
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
   * *   Default value: onepass.
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

export class ListJobResponseBodyJobListJobOutputVideoBitrateBnd extends $dara.Model {
  /**
   * @remarks
   * The maximum bitrate. Unit: Kbit/s.
   * 
   * @example
   * 1000
   */
  max?: string;
  /**
   * @remarks
   * The minimum bitrate. Unit: Kbit/s.
   * 
   * @example
   * 200
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

export class ListJobResponseBodyJobListJobOutputVideo extends $dara.Model {
  /**
   * @remarks
   * The average bitrate of the video. Unit: Kbit/s.
   * 
   * @example
   * 428
   */
  bitrate?: string;
  /**
   * @remarks
   * The bitrate range of the video.
   */
  bitrateBnd?: ListJobResponseBodyJobListJobOutputVideoBitrateBnd;
  /**
   * @remarks
   * The size of the buffer.
   * 
   * @example
   * 6000
   */
  bufsize?: string;
  /**
   * @remarks
   * The video codec. Valid values: **H.264**, **H.265**, **GIF**, and **WEBP**.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The constant rate factor. If this parameter is returned, the value of Bitrate is invalid. Default value: **26**.
   * 
   * @example
   * 26
   */
  crf?: string;
  /**
   * @remarks
   * The video cropping mode. Valid values:
   * 
   * *   **border**: automatically detects and removes black borders.
   * *   A value in the width:height:left:top format: crops the videos based on the custom settings. Example: 1280:800:0:140.
   * 
   * @example
   * border
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
   * The frame rate.
   * 
   * *   The value is 60 if the frame rate of the input video exceeds 60.
   * *   Default value: the frame rate of the input file.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The maximum number of frames between two keyframes. Default value: 250.
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
   * 1000
   */
  maxrate?: string;
  /**
   * @remarks
   * The black borders that are added to the video. Unit: pixel.
   * 
   * *   Format: width:height:left:top.
   * *   Example: 1280:800:0:140.
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
   * The preset video algorithm. Default value: medium. Valid values:
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
   * The codec profile. Valid values:
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
   * The priority of the resource.
   * 
   * @example
   * 1
   */
  resoPriority?: string;
  /**
   * @remarks
   * The scan mode. Valid values:
   * 
   * *   If this parameter is **empty**, the scan mode of the input file is used.
   * *   **auto**: automatic deinterlacing.
   * *   **progressive**: progressive scan.
   * *   **interlaced**: interlaced scan.
   * *   **By default**, this parameter is empty.
   * 
   * **Best practice**: Interlaced scan consumes less bandwidth than progressive scan, but the image quality is poor. Therefore, mainstream video production uses progressive scan.
   * 
   * *   If **progressive scan** or **interlaced scan** is used when the scan mode of the input file is neither of them, the transcoding job fails.
   * *   We recommend that you use **the scan mode of the input file** or **automatic deinterlacing** to improve compatibility.
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
      bitrateBnd: ListJobResponseBodyJobListJobOutputVideoBitrateBnd,
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

export class ListJobResponseBodyJobListJobOutputWaterMarkListWaterMarkInputFile extends $dara.Model {
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
   * The ID of the OSS region in which the input file is stored.
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

export class ListJobResponseBodyJobListJobOutputWaterMarkListWaterMark extends $dara.Model {
  /**
   * @remarks
   * The horizontal offset of the watermark image relative to the output video. If this parameter is specified in the request, the corresponding parameter in the watermark template is overwritten. Default value: 0. The value can be an integer or a decimal number.
   * 
   * *   An integer indicates the pixel value of the horizontal offset.
   * 
   *     *   Valid values: [8,4096].
   *     *   Unit: pixel.
   * 
   * *   A decimal number indicates the ratio of the horizontal offset to the width in the output video resolution.
   * 
   *     *   Valid values: (0,1).
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excess digits are automatically deleted.
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
   *     *   Valid values: [8,4096].
   *     *   Unit: pixel.
   * 
   * *   A decimal indicates the ratio of the vertical offset to the height in the output video resolution.
   * 
   *     *   Valid values: (0,1).
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excess digits are automatically deleted.
   * 
   * @example
   * 100
   */
  dy?: string;
  /**
   * @remarks
   * The height of the watermark. If this parameter is specified in the request, the corresponding parameter in the specified watermark template is overwritten. The value can be an integer or a decimal number.
   * 
   * *   An integer indicates the pixel value of the watermark height.
   * 
   *     *   Valid values: [8,4096].
   *     *   Unit: pixel.
   * 
   * *   A decimal indicates the ratio of the watermark height to the height in the output video resolution.
   * 
   *     *   Valid values: (0,1).
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excess digits are automatically deleted.
   * 
   * @example
   * 50
   */
  height?: string;
  /**
   * @remarks
   * The watermark input file.
   */
  inputFile?: ListJobResponseBodyJobListJobOutputWaterMarkListWaterMarkInputFile;
  /**
   * @remarks
   * The position of the watermark.
   * 
   * *   **TopRight**
   * *   **TopLeft**
   * *   **BottomRight**
   * *   **BottomLeft**
   * 
   * @example
   * TopRight
   */
  referPos?: string;
  /**
   * @remarks
   * The type of the watermark. If this parameter is specified in the request, the corresponding parameter in the watermark template is overwritten. For more information, see [Parameter details](https://help.aliyun.com/document_detail/29253.html). Valid values:
   * 
   * *   **Image**
   * *   **Text**
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
   *     *   Valid values: [8,4096].
   *     *   Unit: pixel.
   * 
   * *   A decimal indicates the ratio of the watermark width to the width in the output video resolution.
   * 
   *     *   Valid values: (0,1).
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excess digits are automatically deleted.
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
      inputFile: ListJobResponseBodyJobListJobOutputWaterMarkListWaterMarkInputFile,
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

export class ListJobResponseBodyJobListJobOutputWaterMarkList extends $dara.Model {
  waterMark?: ListJobResponseBodyJobListJobOutputWaterMarkListWaterMark[];
  static names(): { [key: string]: string } {
    return {
      waterMark: 'WaterMark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      waterMark: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputWaterMarkListWaterMark },
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

export class ListJobResponseBodyJobListJobOutput extends $dara.Model {
  /**
   * @remarks
   * The audio configurations.
   */
  audio?: ListJobResponseBodyJobListJobOutputAudio;
  /**
   * @remarks
   * The sequence number of the audio stream.
   * 
   * *   Format: `0:a:{Sequence number}`.
   * *   The sequence number is the index of the audio stream in the list and starts from 0. If no sequence number is specified, the default audio stream is used.
   * 
   * @example
   * 0:a:0
   */
  audioStreamMap?: string;
  /**
   * @remarks
   * The information about the clip.
   */
  clip?: ListJobResponseBodyJobListJobOutputClip;
  /**
   * @remarks
   * The container format configurations.
   */
  container?: ListJobResponseBodyJobListJobOutputContainer;
  /**
   * @remarks
   * The configurations of watermark blurring. The value is a JSON object. For more information, see [Parameter details](https://help.aliyun.com/document_detail/29253.html).
   * 
   * @example
   * {"0": [{"l": 10,"t": 10,"w": 10,"h": 10},{"l": 100,"t": 0.1,"w": 10,"h": 10}],"128000": [],"250000": [{"l": 0.2,"t": 0.1,"w": 0.01,"h": 0.05}]}
   */
  deWatermark?: string;
  /**
   * @remarks
   * The encryption configurations. Only outputs in the M3U8 format are supported.
   */
  encryption?: ListJobResponseBodyJobListJobOutputEncryption;
  /**
   * @remarks
   * The non-standard support configuration for M3U8. The value must be a JSON object. For more information, see [Parameter details](https://help.aliyun.com/document_detail/29253.html).
   */
  m3U8NonStandardSupport?: ListJobResponseBodyJobListJobOutputM3U8NonStandardSupport;
  /**
   * @remarks
   * The URL of the merging configuration file. You can specify either MergeList or MergeConfigUrl when you submit the transcoding job.
   * 
   * *   The configuration file specified by MergeConfigUrl can contain up to 50 clips.
   * *   MergeConfigUrl indicates the URL of the configuration file for merging clips.
   * *   Make sure that the configuration file is stored as an object in OSS and that MPS can access the OSS object. For information about the file content, see the details of merging parameters.
   * *   Example of the content of the merging configuration file: `{"MergeList":[{"MergeURL":"http://exampleBucket****.oss-cn-hangzhou.aliyuncs.com/video_01.mp4"}]}`.
   * 
   * @example
   * {"MergeList":[{"MergeURL":"http://exampleBucket****.oss-cn-hangzhou.aliyuncs.com/video_01.mp4"}]}
   */
  mergeConfigUrl?: string;
  /**
   * @remarks
   * The configurations for merging clips.
   */
  mergeList?: ListJobResponseBodyJobListJobOutputMergeList;
  /**
   * @remarks
   * The transmuxing configurations.
   */
  muxConfig?: ListJobResponseBodyJobListJobOutputMuxConfig;
  /**
   * @remarks
   * The opening parts.
   */
  openingList?: ListJobResponseBodyJobListJobOutputOpeningList;
  /**
   * @remarks
   * The output subtitles.
   */
  outSubtitleList?: ListJobResponseBodyJobListJobOutputOutSubtitleList;
  /**
   * @remarks
   * The details of the output file.
   */
  outputFile?: ListJobResponseBodyJobListJobOutputOutputFile;
  /**
   * @remarks
   * The priority of the job in the MPS queue to which the job is added.
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
  properties?: ListJobResponseBodyJobListJobOutputProperties;
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
   * The subtitle configurations.
   */
  subtitleConfig?: ListJobResponseBodyJobListJobOutputSubtitleConfig;
  /**
   * @remarks
   * The configurations for using the resolution of the source video.
   */
  superReso?: ListJobResponseBodyJobListJobOutputSuperReso;
  /**
   * @remarks
   * The ending parts.
   */
  tailSlateList?: ListJobResponseBodyJobListJobOutputTailSlateList;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * S00000000-000010
   */
  templateId?: string;
  /**
   * @remarks
   * The general transcoding configurations. If this parameter is specified in the request, the corresponding parameters in the specified transcoding template are overwritten.
   */
  transConfig?: ListJobResponseBodyJobListJobOutputTransConfig;
  /**
   * @remarks
   * The custom data.
   * 
   * @example
   * test-001
   */
  userData?: string;
  /**
   * @remarks
   * The video configurations.
   */
  video?: ListJobResponseBodyJobListJobOutputVideo;
  /**
   * @remarks
   * The sequence number of the video stream.
   * 
   * *   Format: 0:a:{Sequence number}. Example value: 0:a:0.
   * *   The sequence number is the index of the video stream in the list and starts from 0.
   * *   If no sequence number is specified, the default video stream is used.
   * 
   * @example
   * 0:a:0
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
  waterMarkList?: ListJobResponseBodyJobListJobOutputWaterMarkList;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      audioStreamMap: 'AudioStreamMap',
      clip: 'Clip',
      container: 'Container',
      deWatermark: 'DeWatermark',
      encryption: 'Encryption',
      m3U8NonStandardSupport: 'M3U8NonStandardSupport',
      mergeConfigUrl: 'MergeConfigUrl',
      mergeList: 'MergeList',
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
      audio: ListJobResponseBodyJobListJobOutputAudio,
      audioStreamMap: 'string',
      clip: ListJobResponseBodyJobListJobOutputClip,
      container: ListJobResponseBodyJobListJobOutputContainer,
      deWatermark: 'string',
      encryption: ListJobResponseBodyJobListJobOutputEncryption,
      m3U8NonStandardSupport: ListJobResponseBodyJobListJobOutputM3U8NonStandardSupport,
      mergeConfigUrl: 'string',
      mergeList: ListJobResponseBodyJobListJobOutputMergeList,
      muxConfig: ListJobResponseBodyJobListJobOutputMuxConfig,
      openingList: ListJobResponseBodyJobListJobOutputOpeningList,
      outSubtitleList: ListJobResponseBodyJobListJobOutputOutSubtitleList,
      outputFile: ListJobResponseBodyJobListJobOutputOutputFile,
      priority: 'string',
      properties: ListJobResponseBodyJobListJobOutputProperties,
      rotate: 'string',
      subtitleConfig: ListJobResponseBodyJobListJobOutputSubtitleConfig,
      superReso: ListJobResponseBodyJobListJobOutputSuperReso,
      tailSlateList: ListJobResponseBodyJobListJobOutputTailSlateList,
      templateId: 'string',
      transConfig: ListJobResponseBodyJobListJobOutputTransConfig,
      userData: 'string',
      video: ListJobResponseBodyJobListJobOutputVideo,
      videoStreamMap: 'string',
      waterMarkConfigUrl: 'string',
      waterMarkList: ListJobResponseBodyJobListJobOutputWaterMarkList,
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

export class ListJobResponseBodyJobListJob extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the job failed. This parameter is not returned if the job was successful.
   * 
   * @example
   * InternalError
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
  input?: ListJobResponseBodyJobListJobInput;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 31fa3c9ca8134fb4b0b0f7878301****
   */
  jobId?: string;
  /**
   * @remarks
   * The message sent by Message Service (MNS) to notify users of the job result.
   */
  MNSMessageResult?: ListJobResponseBodyJobListJobMNSMessageResult;
  /**
   * @remarks
   * The error message returned if the job failed. This parameter is not returned if the job was successful.
   * 
   * @example
   * The operation has failed due to some unknown error, exception or failure.
   */
  message?: string;
  /**
   * @remarks
   * The output of the job.
   */
  output?: ListJobResponseBodyJobListJobOutput;
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
   * The ID of the MPS queue.
   * 
   * @example
   * 88c6ca184c0e47b665e2a1267971****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The state of the job. Valid values:
   * 
   * *   **Submitted**
   * *   **Transcoding**
   * *   **TranscodeSuccess**
   * *   **TranscodeFail**
   * *   **TranscodeCancelled**
   * 
   * @example
   * TranscodeSuccess
   */
  state?: string;
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      creationTime: 'string',
      finishTime: 'string',
      input: ListJobResponseBodyJobListJobInput,
      jobId: 'string',
      MNSMessageResult: ListJobResponseBodyJobListJobMNSMessageResult,
      message: 'string',
      output: ListJobResponseBodyJobListJobOutput,
      percent: 'number',
      pipelineId: 'string',
      state: 'string',
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

export class ListJobResponseBodyJobList extends $dara.Model {
  job?: ListJobResponseBodyJobListJob[];
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJob },
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

export class ListJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The transcoding jobs.
   */
  jobList?: ListJobResponseBodyJobList;
  /**
   * @remarks
   * The pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * 16f01ad6175e4230ac42bb5182cd****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC860F04-778A-472F-AB39-E1BF329C1EA8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobList: 'JobList',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobList: ListJobResponseBodyJobList,
      nextPageToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.jobList && typeof (this.jobList as any).validate === 'function') {
      (this.jobList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

