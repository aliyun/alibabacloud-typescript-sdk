// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitJobsResponseBodyJobResultListJobResultJobInput extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which the job input is stored.
   * 
   * @example
   * example-bucket-****
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

export class SubmitJobsResponseBodyJobResultListJobResultJobMNSMessageResult extends $dara.Model {
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
   * The resource operated "%s" cannot be found.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the error message returned if the job failed. This parameter is not returned if the job was successful.
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputAmixListAmix extends $dara.Model {
  /**
   * @remarks
   * The URL of the audio track that is mixed as the background music.
   * 
   * *   The URL can be an OSS URL or the string `input`.
   * *   A value of input indicates that two audio tracks are mixed in a video.
   * 
   * @example
   * https://outpu***.oss-cn-shanghai.aliyuncs.com/mp4-to-mp3%5E1571025263578816%40.mp3
   */
  amixURL?: string;
  /**
   * @remarks
   * The duration of the mixed audio track. The value is in the number or time format.
   * 
   * @example
   * 20
   */
  duration?: string;
  /**
   * @remarks
   * The audio track that is mixed. Format: 0:a:{audio_index}. Example: 0:a:0.
   * 
   * @example
   * 0:a:0
   */
  map?: string;
  /**
   * @remarks
   * The mode to specify the mixing duration. Valid values: **first** and **long**.
   * 
   * *   **first**: The length of the output media equals the length of the input media.
   * *   **long**: The length of the output media equals the length of the output media or the length of the input media, whichever is longer.
   * *   Default value: **long**.
   * 
   * @example
   * long
   */
  mixDurMode?: string;
  /**
   * @remarks
   * The start time. The value is in the number or time format. Examples: 1:25:36.240 and 32000.23.
   * 
   * @example
   * 0
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      amixURL: 'AmixURL',
      duration: 'Duration',
      map: 'Map',
      mixDurMode: 'MixDurMode',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amixURL: 'string',
      duration: 'string',
      map: 'string',
      mixDurMode: 'string',
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputAmixList extends $dara.Model {
  amix?: SubmitJobsResponseBodyJobResultListJobResultJobOutputAmixListAmix[];
  static names(): { [key: string]: string } {
    return {
      amix: 'Amix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amix: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputAmixListAmix },
    };
  }

  validate() {
    if(Array.isArray(this.amix)) {
      $dara.Model.validateArray(this.amix);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputAudioVolume extends $dara.Model {
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputAudio extends $dara.Model {
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
   * *   If the value of Codec is mp3, the value of this parameter can only be **1** or **2**.
   * *   If the value of Codec is aac, the value of this parameter can only be **1**, **2**, **4**, **5**, **6**, or **8**.
   * *   Default value: **2**.
   * 
   * @example
   * 6
   */
  channels?: string;
  /**
   * @remarks
   * The audio codec.
   * 
   * *   Valid values: **aac**, **mp3**, **vorbis**, and **flac**.
   * *   Default value: **aac**.
   * 
   * @example
   * aac
   */
  codec?: string;
  /**
   * @remarks
   * The codec profile of the audio.
   * 
   * >  Valid values if the value of **Codec** is **aac**: **aac_low**, **aac_he**, **aac_he_v2**, **aac_ld**, and **aac_eld**.
   * 
   * @example
   * aac_low
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
   * *   Valid values: **22050**, **32000**, **44100**, **48000**, and **96000**.
   * *   Unit: Hz.
   * *   Default value: **44100**.
   * 
   * >  If the video container format is FLV and the audio codec is MP3, the value of this parameter cannot be 32000, 48000, or 96000. If the audio codec is MP3, the value of this parameter cannot be 96000.
   * 
   * @example
   * 32000
   */
  samplerate?: string;
  /**
   * @remarks
   * The volume configurations.
   */
  volume?: SubmitJobsResponseBodyJobResultListJobResultJobOutputAudioVolume;
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
      volume: SubmitJobsResponseBodyJobResultListJobResultJobOutputAudioVolume,
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputClipTimeSpan extends $dara.Model {
  /**
   * @remarks
   * The duration of the clip.
   * 
   * *   Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * *   Valid values: `[00:00:00.000,23:59:59.999]` or `[0.000,86399.999]`.
   * 
   * @example
   * 01:00:59.999
   */
  duration?: string;
  /**
   * @remarks
   * The start time.
   * 
   * *   Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * *   Valid values: `[00:00:00.000,23:59:59.999]` or `[0.000,86399.999]`.
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputClip extends $dara.Model {
  /**
   * @remarks
   * The time span of the clip.
   */
  timeSpan?: SubmitJobsResponseBodyJobResultListJobResultJobOutputClipTimeSpan;
  static names(): { [key: string]: string } {
    return {
      timeSpan: 'TimeSpan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeSpan: SubmitJobsResponseBodyJobResultListJobResultJobOutputClipTimeSpan,
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputContainer extends $dara.Model {
  /**
   * @remarks
   * The container format.
   * 
   * *   Default value: **mp4**.
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputDigiWaterMarkInputFile extends $dara.Model {
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
   * example-intput.flv
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputDigiWaterMark extends $dara.Model {
  /**
   * @remarks
   * The transparency of the text or image.
   * 
   * *   Value values: **(0,1]**.
   * *   Default value: **1.0**.
   * 
   * @example
   * 1.0
   */
  alpha?: string;
  /**
   * @remarks
   * The details of the input file.
   */
  inputFile?: SubmitJobsResponseBodyJobResultListJobResultJobOutputDigiWaterMarkInputFile;
  /**
   * @remarks
   * The type of the watermark. If this parameter is specified in the request, the corresponding parameter in the watermark template is overwritten. Valid values:
   * 
   * *   **Image** (default)
   * *   **Text**
   * 
   * @example
   * Image
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      inputFile: 'InputFile',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'string',
      inputFile: SubmitJobsResponseBodyJobResultListJobResultJobOutputDigiWaterMarkInputFile,
      type: 'string',
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputEncryption extends $dara.Model {
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
   * The key encryption method. Keys cannot be transmitted to MPS in plaintext. Keys must be encrypted by using Base64 or Key Management Service (KMS). For example, if the key is encryptionkey128, you can encrypt the key by using the following method: Base64("encryptionkey128") or KMS(Base64("encryptionkey128").
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputM3U8NonStandardSupportTS extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the output of the MD5 value of the TS file is supported in the M3U8 video. Valid values:
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
   * Indicates whether the size of the TS file is generated in the output M3U8 video. Valid values:
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputM3U8NonStandardSupport extends $dara.Model {
  /**
   * @remarks
   * The non-standard support configurations for TS files. The value is a JSON object. For more information, see the **TS** section of the [Parameter details](https://help.aliyun.com/document_detail/29253.html) topic.
   */
  TS?: SubmitJobsResponseBodyJobResultListJobResultJobOutputM3U8NonStandardSupportTS;
  static names(): { [key: string]: string } {
    return {
      TS: 'TS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      TS: SubmitJobsResponseBodyJobResultListJobResultJobOutputM3U8NonStandardSupportTS,
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputMergeListMerge extends $dara.Model {
  /**
   * @remarks
   * The duration of the clip.
   * 
   * *   Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * *   Examples: 01:59:59.999 and 32000.23.
   * 
   * @example
   * 00000.20
   */
  duration?: string;
  /**
   * @remarks
   * The OSS URL of the clip.
   * 
   * *   Example: `http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com/example-object-****.flv`.
   * *   The OSS URL of the object must be URL-encoded by using the UTF-8 standard.
   * 
   * @example
   * http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com/example-object-****.flv
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
   * 00000.50
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputMergeList extends $dara.Model {
  merge?: SubmitJobsResponseBodyJobResultListJobResultJobOutputMergeListMerge[];
  static names(): { [key: string]: string } {
    return {
      merge: 'Merge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      merge: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputMergeListMerge },
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigGif extends $dara.Model {
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigSegment extends $dara.Model {
  /**
   * @remarks
   * The length of the segment. The value is an integer. Unit: seconds.
   * 
   * *   Valid values: **[1,10]**.
   * *   Default value: **10**.
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigWebp extends $dara.Model {
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The transmuxing configurations for GIF.
   */
  gif?: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigGif;
  /**
   * @remarks
   * The segment configuration. The value is a JSON object.
   */
  segment?: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigSegment;
  /**
   * @remarks
   * The transmuxing configurations for WebP.
   */
  webp?: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigWebp;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
      webp: 'Webp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigGif,
      segment: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigSegment,
      webp: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigWebp,
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputOpeningListOpening extends $dara.Model {
  /**
   * @remarks
   * The height of the opening part.
   * 
   * *   Valid values: values in the range of **(0,4096)**, **-1**, and **full**.
   * *   Default value: **-1**.
   * *   A value of **-1** indicates that the height of the source of the opening part is retained.
   * *   A value of **full** indicates that the height of the main part is used for the opening part.
   * 
   * @example
   * 1080
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
   * 1
   */
  start?: string;
  /**
   * @remarks
   * The width of the opening part.
   * 
   * *   Valid values: values in the range of **(0,4096)**, **-1**, and **full**.
   * *   Default value: **-1**.
   * *   A value of **-1** indicates that the width of the source of the opening part is retained.
   * *   A value of **full** indicates that the width of the main part is used for the opening part.
   * 
   * @example
   * 1920
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputOpeningList extends $dara.Model {
  opening?: SubmitJobsResponseBodyJobResultListJobResultJobOutputOpeningListOpening[];
  static names(): { [key: string]: string } {
    return {
      opening: 'Opening',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opening: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputOpeningListOpening },
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleListOutSubtitleOutSubtitleFile extends $dara.Model {
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleListOutSubtitle extends $dara.Model {
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
   * The details of the output file.
   */
  outSubtitleFile?: SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleListOutSubtitleOutSubtitleFile;
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
      outSubtitleFile: SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleListOutSubtitleOutSubtitleFile,
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleList extends $dara.Model {
  outSubtitle?: SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleListOutSubtitle[];
  static names(): { [key: string]: string } {
    return {
      outSubtitle: 'OutSubtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outSubtitle: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleListOutSubtitle },
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputOutputFile extends $dara.Model {
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesFormat extends $dara.Model {
  /**
   * @remarks
   * The total bitrate.
   * 
   * @example
   * 1000
   */
  bitrate?: string;
  /**
   * @remarks
   * The total duration.
   * 
   * @example
   * 55
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
   * 3509895
   */
  size?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 0.000000
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsAudioStreamListAudioStream extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the audio stream.
   * 
   * @example
   * 128.806
   */
  bitrate?: string;
  /**
   * @remarks
   * The output layout of the sound channels.
   * 
   * @example
   * stereo
   */
  channelLayout?: string;
  /**
   * @remarks
   * The number of sound channels.
   * 
   * @example
   * 2
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
   * 1/44100
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The duration of the audio stream.
   * 
   * @example
   * 17.159546
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
   * eng
   */
  lang?: string;
  /**
   * @remarks
   * The total number of frames.
   * 
   * @example
   * 25
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
   * 44100
   */
  samplerate?: string;
  /**
   * @remarks
   * The start time of the audio stream.
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
   * 1/44100
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsAudioStreamList extends $dara.Model {
  audioStream?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsAudioStreamListAudioStream[];
  static names(): { [key: string]: string } {
    return {
      audioStream: 'AudioStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStream: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsAudioStreamListAudioStream },
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream extends $dara.Model {
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
   * The language of the subtitle stream. For more information, see [FFmpeg documentation](https://www.ffmpeg.org/ffmpeg-all.html#Metadata) and [ISO 639](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsSubtitleStreamList extends $dara.Model {
  subtitleStream?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream[];
  static names(): { [key: string]: string } {
    return {
      subtitleStream: 'SubtitleStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitleStream: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream },
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost extends $dara.Model {
  /**
   * @remarks
   * The average bitrate of the video stream.
   * 
   * @example
   * 100
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamListVideoStream extends $dara.Model {
  /**
   * @remarks
   * The average frame rate of the video stream.
   * 
   * @example
   * 23.976025
   */
  avgFPS?: string;
  /**
   * @remarks
   * The bitrate of the video stream.
   * 
   * @example
   * 1496.46
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
   * 1001/48000
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The display aspect ratio (DAR) of the video stream.
   * 
   * @example
   * 16:9
   */
  dar?: string;
  /**
   * @remarks
   * The duration of the video stream.
   * 
   * @example
   * 17.225542
   */
  duration?: string;
  /**
   * @remarks
   * The frame rate of the video stream.
   * 
   * @example
   * 23.976025
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
   * 720
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
   * 51
   */
  level?: string;
  /**
   * @remarks
   * The network bandwidth that was consumed.
   */
  networkCost?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost;
  /**
   * @remarks
   * The total number of frames.
   * 
   * @example
   * 25
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
   * The start time of the video stream.
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
   * 1/24000
   */
  timebase?: string;
  /**
   * @remarks
   * The width of the video stream in pixels.
   * 
   * @example
   * 1280
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
      networkCost: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost,
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamList extends $dara.Model {
  videoStream?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamListVideoStream[];
  static names(): { [key: string]: string } {
    return {
      videoStream: 'VideoStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoStream: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamListVideoStream },
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreams extends $dara.Model {
  /**
   * @remarks
   * The audio streams.
   */
  audioStreamList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsAudioStreamList;
  /**
   * @remarks
   * The subtitle streams.
   */
  subtitleStreamList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsSubtitleStreamList;
  /**
   * @remarks
   * The video streams.
   */
  videoStreamList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamList;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsAudioStreamList,
      subtitleStreamList: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsSubtitleStreamList,
      videoStreamList: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamList,
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputProperties extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the video.
   * 
   * @example
   * 1000
   */
  bitrate?: string;
  /**
   * @remarks
   * The duration of the video.
   * 
   * @example
   * 55
   */
  duration?: string;
  /**
   * @remarks
   * The format of the video.
   * 
   * @example
   * QuickTime / MOV
   */
  fileFormat?: string;
  /**
   * @remarks
   * The size of the file.
   * 
   * @example
   * 3509895
   */
  fileSize?: string;
  /**
   * @remarks
   * The format information.
   */
  format?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesFormat;
  /**
   * @remarks
   * The frame rate of the video. The value is a number.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The height of the video.
   * 
   * @example
   * 720
   */
  height?: string;
  /**
   * @remarks
   * The stream information.
   */
  streams?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreams;
  /**
   * @remarks
   * The width of the video.
   * 
   * @example
   * 1280
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
      format: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesFormat,
      fps: 'string',
      height: 'string',
      streams: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreams,
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput extends $dara.Model {
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleListExtSubtitle extends $dara.Model {
  /**
   * @remarks
   * The character set used by the external subtitle.
   * 
   * *   Valid values: **UTF-8**, **GBK**, **BIG5**, and **auto**.
   * *   Default value: **auto**.
   * 
   * >  If this parameter is set to **auto**, the detected character set may not be the actual character set. We recommend that you set this parameter to another value.
   * 
   * @example
   * UTF-8
   */
  charEnc?: string;
  /**
   * @remarks
   * The font of the hardcoded subtitles converted from external subtitles. Default value: **SimSun**. For more information, see [Fonts](https://help.aliyun.com/document_detail/59950.html).
   * 
   * @example
   * "WenQuanYi Zen Hei", "Yuanti SC Regular", "SimSun"
   */
  fontName?: string;
  /**
   * @remarks
   * The OSS object that is used as the external subtitle. The value is a JSON object. Files in the **SRT** or **ASS** format are supported.
   */
  input?: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput;
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
      input: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput,
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleList extends $dara.Model {
  extSubtitle?: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleListExtSubtitle[];
  static names(): { [key: string]: string } {
    return {
      extSubtitle: 'ExtSubtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSubtitle: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleListExtSubtitle },
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigSubtitleListSubtitle extends $dara.Model {
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigSubtitleList extends $dara.Model {
  subtitle?: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigSubtitleListSubtitle[];
  static names(): { [key: string]: string } {
    return {
      subtitle: 'Subtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitle: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigSubtitleListSubtitle },
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfig extends $dara.Model {
  /**
   * @remarks
   * The external subtitles. The value is a JSON array that contains up to **four** objects.
   */
  extSubtitleList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleList;
  /**
   * @remarks
   * The subtitles.
   */
  subtitleList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigSubtitleList;
  static names(): { [key: string]: string } {
    return {
      extSubtitleList: 'ExtSubtitleList',
      subtitleList: 'SubtitleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSubtitleList: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleList,
      subtitleList: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigSubtitleList,
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputSuperReso extends $dara.Model {
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputTailSlateListTailSlate extends $dara.Model {
  /**
   * @remarks
   * The color of the bars that are added to the ending part if the size of the ending part is smaller than that of the main part. Default value: **White**. For more information, see [Background colors](https://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/29253/cn_zh/1502784952344/color.txt?spm=a2c4g.11186623.2.63.241240f77qp3Yy\\&file=color.txt).
   * 
   * @example
   * White
   */
  bgColor?: string;
  /**
   * @remarks
   * The duration of the transition between the main part and the ending part. A fade transition is used: The last frame of the main part fades out, and the first frame of the ending part fades in. Unit: seconds. Default value: **0**.
   * 
   * @example
   * 2
   */
  blendDuration?: string;
  /**
   * @remarks
   * The height of the ending part.
   * 
   * *   Valid values: values in the range of **(0,4096)**, **-1**, and **full**.
   * *   A value of **-1** indicates that the height of the source of the ending part is retained. A value of **full** indicates that the height of the main part is used for the ending part.
   * *   Default value: -1.
   * 
   * @example
   * 1080
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
   * false
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
   * The width of the ending part.
   * 
   * *   Valid values: values in the range of **(0,4096)**, **-1**, and **full**.
   * *   A value of **-1** indicates that the width of the source of the ending part is retained. A value of **full** indicates that the width of the main part is used for the ending part.
   * *   Default value: -1.
   * 
   * @example
   * 1920
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputTailSlateList extends $dara.Model {
  tailSlate?: SubmitJobsResponseBodyJobResultListJobResultJobOutputTailSlateListTailSlate[];
  static names(): { [key: string]: string } {
    return {
      tailSlate: 'TailSlate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tailSlate: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputTailSlateListTailSlate },
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputTransConfig extends $dara.Model {
  /**
   * @remarks
   * The method of resolution adjustment. Default value: **none**. Valid values:
   * 
   * *   rescale: The video image is resized.
   * *   crop: The video image is cropped.
   * *   pad: The video image is scaled out to fill the view.
   * *   none: The resolution is not adjusted.
   * 
   * @example
   * crop
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
   * Indicates whether the audio bitrate is checked. This parameter has a higher priority than **IsCheckAudioBitrate**. If the bitrate of the output audio is higher than that of the input audio, a transcoding failure is returned without transcoding the audio. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * true
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
   * Indicates whether the resolution is checked. This parameter has a higher priority than IsCheckReso. If the output resolution is higher than the input resolution based on the width or height, a transcoding failure is returned without transcoding the video. Valid values:
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
   * Indicates whether the video bitrate is checked. If the bitrate of the output video is higher than that of the input video, a transcoding failure is returned without transcoding the video. This parameter has a higher priority than**IsCheckVideoBitrate**. Valid values:
   * 
   * *   **true**
   * *   **false**
   * *   Default value: **false**.
   * 
   * @example
   * true
   */
  isCheckVideoBitrateFail?: string;
  /**
   * @remarks
   * The transcoding mode. Valid values:
   * 
   * *   **onepass**: transcoding based on one-pass algorithms, which has higher accuracy.
   * *   **twopass**: transcoding based on two-pass algorithms, which has lower accuracy.
   * *   **CBR**: transcoding based on a fixed bitrate.
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputVideoBitrateBnd extends $dara.Model {
  /**
   * @remarks
   * The upper limit of the total bitrate. Unit: Kbit/s.
   * 
   * @example
   * 20
   */
  max?: string;
  /**
   * @remarks
   * The lower limit of the total bitrate. Unit: Kbit/s.
   * 
   * @example
   * 10
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputVideo extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the output video. Unit: Kbit/s.
   * 
   * @example
   * 10
   */
  bitrate?: string;
  /**
   * @remarks
   * The average bitrate range of the video.
   */
  bitrateBnd?: SubmitJobsResponseBodyJobResultListJobResultJobOutputVideoBitrateBnd;
  /**
   * @remarks
   * The size of the buffer.
   * 
   * *   Unit: KB.
   * *   Default value: **6000**.
   * 
   * @example
   * 1000
   */
  bufsize?: string;
  /**
   * @remarks
   * The video codec.
   * 
   * *   Valid values: **H.264**, **H.265**, **GIF**, and **WEBP**.
   * *   Default value: **H.264**.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The constant rate factor.
   * 
   * *   If **Crf** is returned, the value of **Bitrate** is invalid.
   * *   Default value if the value of Codec is H.264: **23**. Default value if the value of Codec is H.265: **26**.
   * 
   * @example
   * 22
   */
  crf?: string;
  /**
   * @remarks
   * The method of video cropping. Valid values:
   * 
   * *   **border**: Black borders are automatically detected and removed.
   * *   A value in the format of width:height:left:top: The video is cropped based on the custom settings.
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
   * The frame rate.
   * 
   * *   Unit: frames per second.
   * *   Valid values: 0 to 60. The value is 60 if the frame rate of the input file exceeds 60.
   * *   Default value: the frame rate of the input file.
   * 
   * @example
   * 60
   */
  fps?: string;
  /**
   * @remarks
   * The maximum interval between keyframes or the maximum number of frames in a frame group. Unit: seconds.
   * 
   * *   Default value: 10.
   * *   If the maximum number of frames is returned, the value does not have a unit.
   * 
   * @example
   * 1
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
   * 1280
   */
  height?: string;
  /**
   * @remarks
   * The maximum frame rate.
   * 
   * @example
   * 15
   */
  maxFps?: string;
  /**
   * @remarks
   * The maximum bitrate of the video. Unit: Kbit/s.
   * 
   * @example
   * 10
   */
  maxrate?: string;
  /**
   * @remarks
   * The black borders that are added to the video.
   * 
   * *   The value is in the width:height:left:top format.
   * *   Unit: pixel.
   * 
   * @example
   * 1280:800:0:140
   */
  pad?: string;
  /**
   * @remarks
   * The pixel format of the video.
   * 
   * *   The default pixel format can be **yuv420p** or the pixel format of the input file.
   * 
   * *   Valid values: standard pixel formats such as **yuv420p** and **yuvj420p**.
   * 
   *     **
   * 
   *     **Note** If a non-standard pixel format such as yuvj420p(pc, bt470bg/bt470bg/smpte170m) is used, compatibility with the pixel format must be configured. Otherwise, the transcoding job fails.
   * 
   * @example
   * yuvj420p
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
   * veryfast
   */
  preset?: string;
  /**
   * @remarks
   * The encoding profile. This parameter is returned only for the H.264 codec. Default value: **high**. Valid values:
   * 
   * >  If multiple definitions are involved, we recommend that you use baseline for the lowest definition to ensure normal playback on low-definition devices, and use main or high for other definitions.
   * 
   * *   **baseline**: applicable to mobile devices.
   * *   **main**: applicable to standard-definition devices.
   * *   **high**: applicable to high-definition devices.
   * 
   * @example
   * baseline
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
   * *   Default value: **the width of the input video**.
   * 
   * @example
   * 1080
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
      bitrateBnd: SubmitJobsResponseBodyJobResultListJobResultJobOutputVideoBitrateBnd,
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkListWaterMarkInputFile extends $dara.Model {
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
   * The name of the OSS object that is used as the input file.
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkListWaterMark extends $dara.Model {
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
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excess digits are automatically deleted.
   * 
   * @example
   * 1
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
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excess digits are automatically deleted.
   * 
   * @example
   * 1
   */
  dy?: string;
  /**
   * @remarks
   * The height of the watermark. If this parameter is specified in the request, the corresponding parameter in the watermark template is overwritten. The value can be an integer or a decimal number.
   * 
   * *   An integer indicates the pixel value of the watermark height.
   * 
   *     *   Valid values: **[8,4096]**.
   *     *   Unit: pixel.
   * 
   * *   A decimal number indicates the ratio of the watermark height to the height in the output video resolution.
   * 
   *     *   Valid values: **(0,1)**.
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excess digits are automatically deleted.
   * 
   * @example
   * 1280
   */
  height?: string;
  /**
   * @remarks
   * The watermark input file. PNG images and MOV files are supported.
   */
  inputFile?: SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkListWaterMarkInputFile;
  /**
   * @remarks
   * The position of the watermark. If this parameter is specified in the request, the corresponding parameter in the watermark template is overwritten. Valid values:
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
   *     *   Valid values: **[8,4096]**.
   *     *   Unit: pixel.
   * 
   * *   A decimal number indicates the ratio of the watermark width to the width in the output video resolution.
   * 
   *     *   Valid values: **(0,1)**.
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excess digits are automatically deleted.
   * 
   * @example
   * 1080
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
      inputFile: SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkListWaterMarkInputFile,
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkList extends $dara.Model {
  waterMark?: SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkListWaterMark[];
  static names(): { [key: string]: string } {
    return {
      waterMark: 'WaterMark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      waterMark: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkListWaterMark },
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

export class SubmitJobsResponseBodyJobResultListJobResultJobOutput extends $dara.Model {
  /**
   * @remarks
   * The audio tracks that are mixed.
   */
  amixList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputAmixList;
  /**
   * @remarks
   * The audio configurations.
   * 
   * >  If this parameter is specified in the request, the corresponding configurations in the specified transcoding template are overwritten.
   */
  audio?: SubmitJobsResponseBodyJobResultListJobResultJobOutputAudio;
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
   * The information about the clip.
   */
  clip?: SubmitJobsResponseBodyJobResultListJobResultJobOutputClip;
  /**
   * @remarks
   * The container format configurations.
   */
  container?: SubmitJobsResponseBodyJobResultListJobResultJobOutputContainer;
  /**
   * @remarks
   * The configurations of watermark blurring. The value is a JSON object. For more information, see the **DeWatermark** section of the [Parameter details](https://help.aliyun.com/document_detail/29253.html) topic.
   * 
   * @example
   * {"0": [{"l": 10,"t": 10,"w": 10,"h": 10},{"l": 100,"t": 0.1,"w": 10,"h": 10}],"128000": [],"250000": [{"l": 0.2,"t": 0.1,"w": 0.01,"h": 0.05}]}
   */
  deWatermark?: string;
  /**
   * @remarks
   * The digital watermarks.
   */
  digiWaterMark?: SubmitJobsResponseBodyJobResultListJobResultJobOutputDigiWaterMark;
  /**
   * @remarks
   * The encryption configurations. Only outputs in the M3U8 format are supported.
   */
  encryption?: SubmitJobsResponseBodyJobResultListJobResultJobOutputEncryption;
  /**
   * @remarks
   * The non-standard support configuration for M3U8. The value is a JSON object. For more information, see the **M3U8NonStandardSupport** section of the [Parameter details](https://help.aliyun.com/document_detail/29253.html) topic.
   */
  m3U8NonStandardSupport?: SubmitJobsResponseBodyJobResultListJobResultJobOutputM3U8NonStandardSupport;
  /**
   * @remarks
   * The URL of the merging configuration file. Only one of **MergeList** and **MergeConfigUrl** takes effect.
   * 
   * *   The configuration file specified by MergeConfigUrl can contain up to 50 clips.
   * *   MergeConfigUrl indicates the URL of the configuration file for merging clips.
   * *   Make sure that the configuration file is stored as an object in OSS and that MPS can access the OSS object. For information about the file content, see the details about merging parameters.
   * *   Example of the content of the merging configuration file: `{"MergeList":[{"MergeURL":"http://exampleBucket****.oss-cn-hangzhou.aliyuncs.com/video_01.mp4"}]}`.
   * 
   * @example
   * `{"MergeList":[{"MergeURL":"http://exampleBucket****.oss-cn-hangzhou.aliyuncs.com/video_01.mp4"}]}
   */
  mergeConfigUrl?: string;
  /**
   * @remarks
   * The configurations for merging clips.
   */
  mergeList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputMergeList;
  /**
   * @remarks
   * The transmuxing configurations. If this parameter is specified in the request, the corresponding configurations in the specified transcoding template are overwritten.
   */
  muxConfig?: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfig;
  /**
   * @remarks
   * The opening parts. The value is a JSON object.
   */
  openingList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputOpeningList;
  /**
   * @remarks
   * The output subtitles.
   */
  outSubtitleList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleList;
  /**
   * @remarks
   * The details of the output file.
   */
  outputFile?: SubmitJobsResponseBodyJobResultListJobResultJobOutputOutputFile;
  /**
   * @remarks
   * The priority of the job in the MPS queue to which the job is added.
   * 
   * *   A value of **10** indicates the highest priority.
   * *   Default value: **6**.
   * 
   * @example
   * 5
   */
  priority?: string;
  /**
   * @remarks
   * The media properties.
   */
  properties?: SubmitJobsResponseBodyJobResultListJobResultJobOutputProperties;
  /**
   * @remarks
   * The rotation angle of the video, in the clockwise direction.
   * 
   * @example
   * 180
   */
  rotate?: string;
  /**
   * @remarks
   * The subtitle configurations.
   */
  subtitleConfig?: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfig;
  /**
   * @remarks
   * The configurations for using the resolution of the source video.
   */
  superReso?: SubmitJobsResponseBodyJobResultListJobResultJobOutputSuperReso;
  /**
   * @remarks
   * The ending parts. The value is a JSON object.
   */
  tailSlateList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputTailSlateList;
  /**
   * @remarks
   * The ID of the transcoding template.
   * 
   * @example
   * S00000000-000010
   */
  templateId?: string;
  /**
   * @remarks
   * The general transcoding configurations.
   * 
   * >  If this parameter is specified in the request, the corresponding parameter in the specified transcoding template are overwritten.
   */
  transConfig?: SubmitJobsResponseBodyJobResultListJobResultJobOutputTransConfig;
  /**
   * @remarks
   * The custom data.
   * 
   * @example
   * example data
   */
  userData?: string;
  /**
   * @remarks
   * The video configurations.
   * 
   * >  If this parameter is specified, **AliyunVideoCodec** in the template specified by **TemplateId** is overwritten.
   */
  video?: SubmitJobsResponseBodyJobResultListJobResultJobOutputVideo;
  /**
   * @remarks
   * The sequence number of the video stream.
   * 
   * *   Format: 0:a:{Sequence number}. Example: 0:a:0.
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
   * 
   * >  If watermarks are truncated or fail to be generated, check whether the text watermarks that you add contain special characters. If the text watermarks contain special characters, you must escape the special characters before you add the watermarks. Alternatively, you can [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.12246746.top-nav.dticket.68797bbcm8H408#/ticket/add/?productId=1232) to contact Alibaba Cloud customer service for compatibility processing.
   */
  waterMarkList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkList;
  static names(): { [key: string]: string } {
    return {
      amixList: 'AmixList',
      audio: 'Audio',
      audioStreamMap: 'AudioStreamMap',
      clip: 'Clip',
      container: 'Container',
      deWatermark: 'DeWatermark',
      digiWaterMark: 'DigiWaterMark',
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
      amixList: SubmitJobsResponseBodyJobResultListJobResultJobOutputAmixList,
      audio: SubmitJobsResponseBodyJobResultListJobResultJobOutputAudio,
      audioStreamMap: 'string',
      clip: SubmitJobsResponseBodyJobResultListJobResultJobOutputClip,
      container: SubmitJobsResponseBodyJobResultListJobResultJobOutputContainer,
      deWatermark: 'string',
      digiWaterMark: SubmitJobsResponseBodyJobResultListJobResultJobOutputDigiWaterMark,
      encryption: SubmitJobsResponseBodyJobResultListJobResultJobOutputEncryption,
      m3U8NonStandardSupport: SubmitJobsResponseBodyJobResultListJobResultJobOutputM3U8NonStandardSupport,
      mergeConfigUrl: 'string',
      mergeList: SubmitJobsResponseBodyJobResultListJobResultJobOutputMergeList,
      muxConfig: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfig,
      openingList: SubmitJobsResponseBodyJobResultListJobResultJobOutputOpeningList,
      outSubtitleList: SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleList,
      outputFile: SubmitJobsResponseBodyJobResultListJobResultJobOutputOutputFile,
      priority: 'string',
      properties: SubmitJobsResponseBodyJobResultListJobResultJobOutputProperties,
      rotate: 'string',
      subtitleConfig: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfig,
      superReso: SubmitJobsResponseBodyJobResultListJobResultJobOutputSuperReso,
      tailSlateList: SubmitJobsResponseBodyJobResultListJobResultJobOutputTailSlateList,
      templateId: 'string',
      transConfig: SubmitJobsResponseBodyJobResultListJobResultJobOutputTransConfig,
      userData: 'string',
      video: SubmitJobsResponseBodyJobResultListJobResultJobOutputVideo,
      videoStreamMap: 'string',
      waterMarkConfigUrl: 'string',
      waterMarkList: SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkList,
    };
  }

  validate() {
    if(this.amixList && typeof (this.amixList as any).validate === 'function') {
      (this.amixList as any).validate();
    }
    if(this.audio && typeof (this.audio as any).validate === 'function') {
      (this.audio as any).validate();
    }
    if(this.clip && typeof (this.clip as any).validate === 'function') {
      (this.clip as any).validate();
    }
    if(this.container && typeof (this.container as any).validate === 'function') {
      (this.container as any).validate();
    }
    if(this.digiWaterMark && typeof (this.digiWaterMark as any).validate === 'function') {
      (this.digiWaterMark as any).validate();
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

export class SubmitJobsResponseBodyJobResultListJobResultJob extends $dara.Model {
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
   * 2014-01-10T12:20:00Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The information about the job input.
   */
  input?: SubmitJobsResponseBodyJobResultListJobResultJobInput;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 31fa3c9ca8134f9cec2b4b0b0f78****
   */
  jobId?: string;
  /**
   * @remarks
   * The message sent by MNS to notify users of the job result.
   */
  MNSMessageResult?: SubmitJobsResponseBodyJobResultListJobResultJobMNSMessageResult;
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
  output?: SubmitJobsResponseBodyJobResultListJobResultJobOutput;
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
   * 88c6ca184c0e47098a5b665e2a126797
   */
  pipelineId?: string;
  /**
   * @remarks
   * The state of the job. Valid values:
   * 
   * *   **Submitted**
   * *   **TranscodeFail**
   * 
   * @example
   * Submitted
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
      input: SubmitJobsResponseBodyJobResultListJobResultJobInput,
      jobId: 'string',
      MNSMessageResult: SubmitJobsResponseBodyJobResultListJobResultJobMNSMessageResult,
      message: 'string',
      output: SubmitJobsResponseBodyJobResultListJobResultJobOutput,
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

export class SubmitJobsResponseBodyJobResultListJobResult extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the job failed to be created. This parameter is not returned if the job was created.
   * 
   * @example
   * InvalidParameter.NullValue
   */
  code?: string;
  /**
   * @remarks
   * The details of the job. If the job fails to be submitted, no job ID is generated.
   */
  job?: SubmitJobsResponseBodyJobResultListJobResultJob;
  /**
   * @remarks
   * The error message returned if the job failed to be created. This parameter is not returned if the job was created.
   * 
   * @example
   * The specified parameter "%s" cannot be null.
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the job was successful. Valid values:
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
      code: 'Code',
      job: 'Job',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      job: SubmitJobsResponseBodyJobResultListJobResultJob,
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.job && typeof (this.job as any).validate === 'function') {
      (this.job as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBodyJobResultList extends $dara.Model {
  jobResult?: SubmitJobsResponseBodyJobResultListJobResult[];
  static names(): { [key: string]: string } {
    return {
      jobResult: 'JobResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobResult: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResult },
    };
  }

  validate() {
    if(Array.isArray(this.jobResult)) {
      $dara.Model.validateArray(this.jobResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The transcoding jobs that are generated.
   */
  jobResultList?: SubmitJobsResponseBodyJobResultList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4A45S71F6-D73936451234
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobResultList: 'JobResultList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobResultList: SubmitJobsResponseBodyJobResultList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.jobResultList && typeof (this.jobResultList as any).validate === 'function') {
      (this.jobResultList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

