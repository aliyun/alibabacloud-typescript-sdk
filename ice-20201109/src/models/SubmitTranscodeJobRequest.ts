// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTranscodeJobRequestInputGroup extends $dara.Model {
  /**
   * @remarks
   * The URL of the input stream.
   * 
   * *   This parameter takes effect only when Type is set to Media. You can select a specific file within the media asset as an input.
   * *   The system checks whether the input URL exists within the media asset.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  inputUrl?: string;
  /**
   * @remarks
   * The media object.
   * 
   * *   If Type is set to OSS, set this parameter to the URL of an OSS object. Both the OSS and HTTP protocols are supported.
   * 
   * >  Before you use the OSS bucket in the URL, you must add the bucket on the [Storage Management](https://help.aliyun.com/document_detail/609918.html) page of the Intelligent Media Services (IMS) console.
   * 
   * *   If Type is set to Media, set this parameter to the ID of a media asset.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The type of the media object. Valid values:
   * 
   * *   OSS: an Object Storage Service (OSS) object.
   * *   Media: a media asset.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      inputUrl: 'InputUrl',
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputUrl: 'string',
      media: 'string',
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

export class SubmitTranscodeJobRequestOutputGroupOutput extends $dara.Model {
  /**
   * @remarks
   * The media object.
   * 
   * *   If Type is set to OSS, set this parameter to the URL of an OSS object. Both the OSS and HTTP protocols are supported.
   * 
   * >  Before you use the OSS bucket in the URL, you must add the bucket on the [Storage Management](https://help.aliyun.com/document_detail/609918.html) page of the IMS console.
   * 
   * *   If Type is set to Media, set this parameter to the ID of a media asset.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The URL of the output stream.\\
   * This parameter takes effect only when Type is set to Media. You can select a specific file within the media asset as an output.\\
   * Supported placeholders:
   * 
   * *   {MediaId}: the ID of the media asset.
   * *   {JobId}: the ID of the transcoding subjob.
   * *   {MediaBucket}: the bucket to which the media asset belongs.
   * *   {ExtName}: the file suffix, which uses the output format of the transcoding template.
   * *   {DestMd5}: the MD5 value of the transcoded output file.\\
   *     Notes:
   * 
   * 1.  This parameter must contain the {MediaId} and {JobId} placeholders.
   * 2.  The output bucket is the same as the bucket to which the media asset belongs.
   * 
   * @example
   * oss://bucket/path/to/{MediaId}/{JobId}.mp4
   */
  outputUrl?: string;
  /**
   * @remarks
   * The type of the media object. Valid values:
   * 
   * *   OSS: an OSS object.
   * *   Media: a media asset.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      outputUrl: 'OutputUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      outputUrl: 'string',
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

export class SubmitTranscodeJobRequestOutputGroupProcessConfigCombineConfigs extends $dara.Model {
  /**
   * @remarks
   * The audio stream index.
   * 
   * This parameter is required.
   * 
   * @example
   * 0 或 exclude
   */
  audioIndex?: string;
  /**
   * @remarks
   * The duration of the input stream. The default value is the duration of the video.
   * 
   * @example
   * 20.0
   */
  duration?: number;
  /**
   * @remarks
   * The start time of the input stream. Default value: 0.
   * 
   * @example
   * 0.0
   */
  start?: number;
  /**
   * @remarks
   * The video stream index.
   * 
   * This parameter is required.
   * 
   * @example
   * 0 或 exclude
   */
  videoIndex?: string;
  static names(): { [key: string]: string } {
    return {
      audioIndex: 'AudioIndex',
      duration: 'Duration',
      start: 'Start',
      videoIndex: 'VideoIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioIndex: 'string',
      duration: 'number',
      start: 'number',
      videoIndex: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigEncryption extends $dara.Model {
  /**
   * @remarks
   * The ciphertext of HTTP Live Streaming (HLS) encryption.
   * 
   * @example
   * MTYi00NDU0LTg5O****
   */
  cipherText?: string;
  /**
   * @remarks
   * The address of the decryption service for HLS encryption.
   * 
   * @example
   * https://sample.com/path?CipherText=MTYi00NDU0LTg5O****
   */
  decryptKeyUri?: string;
  /**
   * @remarks
   * Specifies the encryption type. Valid values:
   * 
   * *   PrivateEncryption: Alibaba Cloud proprietary cryptography
   * *   HLSEncryption: HTTP Live Streaming (HLS) encryption
   * 
   * @example
   * PrivateEncryption
   */
  encryptType?: string;
  /**
   * @remarks
   * The key service type for HLS encryption. Valid values:
   * 
   * *   KMS
   * *   Base64
   * 
   * @example
   * KMS
   */
  keyServiceType?: string;
  static names(): { [key: string]: string } {
    return {
      cipherText: 'CipherText',
      decryptKeyUri: 'DecryptKeyUri',
      encryptType: 'EncryptType',
      keyServiceType: 'KeyServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cipherText: 'string',
      decryptKeyUri: 'string',
      encryptType: 'string',
      keyServiceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsFile extends $dara.Model {
  /**
   * @remarks
   * The media object.
   * 
   * *   If Type is set to OSS, set this parameter to the URL of an OSS object. Both the OSS and HTTP protocols are supported.
   * *   If Type is set to Media, set this parameter to the ID of a media asset.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The type of the media object. Valid values:
   * 
   * *   OSS: an OSS object.
   * *   Media: a media asset.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
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

export class SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline extends $dara.Model {
  /**
   * @remarks
   * The time range in which the watermark is displayed.
   * 
   * *   Valid values: integers and ToEND.
   * *   Default value: ToEND.
   * 
   * @example
   * ToEND
   */
  duration?: string;
  /**
   * @remarks
   * The beginning of the time range in which the watermark is displayed.
   * 
   * *   Unit: seconds.
   * *   Value values: integers.
   * *   Default value: 0.
   * 
   * @example
   * 00:00:05
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
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

export class SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * The horizontal offset of the watermark relative to the output video. Default value: 0.
   * 
   * The following value types are supported:
   * 
   * *   Integer: the pixel value of the horizontal offset.
   * 
   *     *   Valid values: [8,4096].
   *     *   Unit: pixels.
   * 
   * *   Decimal: the ratio of the horizontal offset to the width of the output video.
   * 
   *     *   Valid values: (0,1).
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excessive digits are automatically discarded.
   * 
   * @example
   * 10
   */
  dx?: string;
  /**
   * @remarks
   * The vertical offset of the watermark relative to the output video. Default value: 0.
   * 
   * The following value types are supported:
   * 
   * *   Integer: the pixel value of the horizontal offset.
   * 
   *     *   Valid values: [8,4096].
   *     *   Unit: pixels.
   * 
   * *   Decimal: the ratio of the vertical offset to the height of the output video.
   * 
   *     *   Valid values: (0,1).
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excessive digits are automatically discarded.
   * 
   * @example
   * 10
   */
  dy?: string;
  /**
   * @remarks
   * The watermark image file.
   */
  file?: SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsFile;
  /**
   * @remarks
   * The height of the watermark image in the output video. The following value types are supported:
   * 
   * *   Integer: the pixel value of the watermark height.
   * 
   *     *   Valid values: [8,4096].
   *     *   Unit: pixels.
   * 
   * *   Decimal: the ratio of the watermark height to the height of the output video.
   * 
   *     *   Valid values: (0,1).
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excessive digits are automatically discarded.
   * 
   * @example
   * 32
   */
  height?: string;
  /**
   * @remarks
   * The position of the watermark.
   * 
   * *   Valid values: TopRight, TopLeft, BottomRight, and BottomLeft.
   * *   Default value: TopRight.
   * 
   * @example
   * TopLeft
   */
  referPos?: string;
  /**
   * @remarks
   * The time settings of the dynamic watermark.
   */
  timeline?: SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline;
  /**
   * @remarks
   * The width of the watermark in the output video. The following value types are supported:
   * 
   * *   Integer: the pixel value of the watermark width.
   * 
   *     *   Valid values: [8,4096].
   *     *   Unit: pixels.
   * 
   * *   Decimal: the ratio of the watermark width to the width of the output video.
   * 
   *     *   Valid values: (0,1).
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excessive digits are automatically discarded.
   * 
   * @example
   * 32
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      file: 'File',
      height: 'Height',
      referPos: 'ReferPos',
      timeline: 'Timeline',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      file: SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsFile,
      height: 'string',
      referPos: 'string',
      timeline: SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline,
      width: 'string',
    };
  }

  validate() {
    if(this.file && typeof (this.file as any).validate === 'function') {
      (this.file as any).validate();
    }
    if(this.timeline && typeof (this.timeline as any).validate === 'function') {
      (this.timeline as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarks extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParams;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9547c6ad97cb4f2aaa29683ebd18d410
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParams,
      templateId: 'string',
    };
  }

  validate() {
    if(this.overwriteParams && typeof (this.overwriteParams as any).validate === 'function') {
      (this.overwriteParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitlesOverwriteParamsFile extends $dara.Model {
  /**
   * @remarks
   * The media object.
   * 
   * *   If Type is set to OSS, set this parameter to the URL of an OSS object. Both the OSS and HTTP protocols are supported.
   * *   If Type is set to Media, set this parameter to the ID of a media asset.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The type of the media object. Valid values:
   * 
   * *   OSS: an OSS object.
   * *   Media: a media asset.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
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

export class SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitlesOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * The file encoding format.
   * 
   * @example
   * UTF-8
   */
  charEnc?: string;
  /**
   * @remarks
   * The subtitle file.
   */
  file?: SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitlesOverwriteParamsFile;
  /**
   * @remarks
   * The format of the subtitle file.
   * 
   * @example
   * vtt
   */
  format?: string;
  static names(): { [key: string]: string } {
    return {
      charEnc: 'CharEnc',
      file: 'File',
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charEnc: 'string',
      file: SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitlesOverwriteParamsFile,
      format: 'string',
    };
  }

  validate() {
    if(this.file && typeof (this.file as any).validate === 'function') {
      (this.file as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitles extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitlesOverwriteParams;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9547c6ad97cb4f2aaa29683ebd18d410
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitlesOverwriteParams,
      templateId: 'string',
    };
  }

  validate() {
    if(this.overwriteParams && typeof (this.overwriteParams as any).validate === 'function') {
      (this.overwriteParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigTextWatermarksOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to the font size based on the output video dimensions. true / false, default: false
   * 
   * @example
   * false
   */
  adaptive?: string;
  /**
   * @remarks
   * The outline color of the text watermark. Default value: black. For more information, see BorderColor.
   * 
   * @example
   * #006400
   */
  borderColor?: string;
  /**
   * @remarks
   * The outline width of the text watermark.
   * 
   * *   Default value: 0.
   * *   Valid values: (0,4096].
   * 
   * @example
   * 0
   */
  borderWidth?: number;
  /**
   * @remarks
   * The watermark text. Base64 encoding is not required. The string must be encoded in UTF-8.
   * 
   * @example
   * 测试水印
   */
  content?: string;
  /**
   * @remarks
   * The transparency of the text.
   * 
   * *   Valid values: (0,1].
   * *   Default value: 1.
   * 
   * @example
   * 1.0
   */
  fontAlpha?: string;
  /**
   * @remarks
   * The color of the text.
   * 
   * @example
   * #006400
   */
  fontColor?: string;
  /**
   * @remarks
   * The font of the text. Default value: SimSun.
   * 
   * @example
   * SimSun
   */
  fontName?: string;
  /**
   * @remarks
   * The size of the text.
   * 
   * *   Default value: 16.
   * *   Valid values: (4,120).
   * 
   * @example
   * 16
   */
  fontSize?: number;
  /**
   * @remarks
   * The left margin of the text watermark.
   * 
   * *   Default value: 0.
   * *   Valid values: [0,4096].
   * 
   * @example
   * 10
   */
  left?: string;
  /**
   * @remarks
   * The top margin of the text.
   * 
   * *   Default value: 0.
   * *   Valid values: [0,4096].
   * 
   * @example
   * 10
   */
  top?: string;
  static names(): { [key: string]: string } {
    return {
      adaptive: 'Adaptive',
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      content: 'Content',
      fontAlpha: 'FontAlpha',
      fontColor: 'FontColor',
      fontName: 'FontName',
      fontSize: 'FontSize',
      left: 'Left',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptive: 'string',
      borderColor: 'string',
      borderWidth: 'number',
      content: 'string',
      fontAlpha: 'string',
      fontColor: 'string',
      fontName: 'string',
      fontSize: 'number',
      left: 'string',
      top: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigTextWatermarks extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: SubmitTranscodeJobRequestOutputGroupProcessConfigTextWatermarksOverwriteParams;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9547c6ad97cb4f2aaa29683ebd18d410
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: SubmitTranscodeJobRequestOutputGroupProcessConfigTextWatermarksOverwriteParams,
      templateId: 'string',
    };
  }

  validate() {
    if(this.overwriteParams && typeof (this.overwriteParams as any).validate === 'function') {
      (this.overwriteParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume extends $dara.Model {
  /**
   * @remarks
   * The output volume.
   * 
   * @example
   * -6
   */
  integratedLoudnessTarget?: string;
  /**
   * @remarks
   * The volume range.
   * 
   * @example
   * 8
   */
  loudnessRangeTarget?: string;
  /**
   * @remarks
   * The volume adjustment method. Valid values:
   * 
   * @example
   * auto
   */
  method?: string;
  /**
   * @remarks
   * The peak volume.
   * 
   * @example
   * -1
   */
  truePeak?: string;
  static names(): { [key: string]: string } {
    return {
      integratedLoudnessTarget: 'IntegratedLoudnessTarget',
      loudnessRangeTarget: 'LoudnessRangeTarget',
      method: 'Method',
      truePeak: 'TruePeak',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integratedLoudnessTarget: 'string',
      loudnessRangeTarget: 'string',
      method: 'string',
      truePeak: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsAudio extends $dara.Model {
  /**
   * @remarks
   * The audio bitrate of the output file. Valid values: [8,1000]. Unit: Kbit/s. Default value: 128.
   * 
   * @example
   * 128
   */
  bitrate?: string;
  /**
   * @remarks
   * The number of sound channels. Default value: 2.
   * 
   * @example
   * 2
   */
  channels?: string;
  /**
   * @remarks
   * The audio codec. Valid values: AAC, MP3, VORBIS, and FLAC. Default value: AAC.
   * 
   * @example
   * AAC
   */
  codec?: string;
  /**
   * @remarks
   * The audio codec profile. If the Codec parameter is set to AAC, the valid values are aac_low, aac_he, aac_he_v2, aac_ld, and aac_eld.
   * 
   * @example
   * aac_low
   */
  profile?: string;
  /**
   * @remarks
   * Specifies whether to delete the audio stream.
   * 
   * @example
   * false
   */
  remove?: string;
  /**
   * @remarks
   * The sampling rate. Valid values: 22050, 32000, 44100, 48000, and 96000. Default value: 44100. Unit: Hz.
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  /**
   * @remarks
   * The volume configurations.
   */
  volume?: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      remove: 'Remove',
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
      remove: 'string',
      samplerate: 'string',
      volume: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume,
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

export class SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsContainer extends $dara.Model {
  /**
   * @remarks
   * The container format.
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

export class SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment extends $dara.Model {
  /**
   * @remarks
   * The segment length.
   * 
   * @example
   * 10
   */
  duration?: string;
  /**
   * @remarks
   * The forced segmentation point in time.
   * 
   * @example
   * 2,3
   */
  forceSegTime?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      forceSegTime: 'ForceSegTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      forceSegTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The segment settings.
   */
  segment?: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment;
  static names(): { [key: string]: string } {
    return {
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segment: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment,
    };
  }

  validate() {
    if(this.segment && typeof (this.segment as any).validate === 'function') {
      (this.segment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsTransConfig extends $dara.Model {
  /**
   * @remarks
   * The method that is used to adjust the resolution. This parameter takes effect only if both the Width and Height parameters are specified. You can use this parameter together with the LongShortMode parameter.
   * 
   * Valid values: rescale, crop, pad, and none.
   * 
   * Default value: none.
   * 
   * @example
   * none
   */
  adjDarMethod?: string;
  /**
   * @remarks
   * Specifies whether to check the audio bitrate. You can specify only one of the IsCheckAudioBitrate and IsCheckAudioBitrateFail parameters. The priority of the IsCheckAudioBitrateFail parameter is higher. Valid values:
   * 
   * *   true: checks the video resolution. If the bitrate of the input audio is less than that of the output audio, the bitrate of the input audio is used for transcoding.
   * *   false: does not check the video resolution.
   * 
   * Default value:
   * 
   * *   If this parameter is not specified and the codec of the output audio is different from that of the input audio, the default value is false.
   * *   If this parameter is not specified and the codec of the output audio is the same as that of the input audio, the default value is true.
   * 
   * @example
   * true
   */
  isCheckAudioBitrate?: string;
  /**
   * @remarks
   * Specifies whether to check the audio bitrate. You can specify only one of the IsCheckAudioBitrate and IsCheckAudioBitrateFail parameters. The priority of the IsCheckAudioBitrateFail parameter is higher. Valid values:
   * 
   * *   true: checks the video resolution. If the bitrate of the input audio is less than that of the output audio, the transcoding job fails.
   * *   false: does not check the video resolution.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckAudioBitrateFail?: string;
  /**
   * @remarks
   * Specifies whether to check the video resolution. You can specify only one of the IsCheckReso and IsCheckResoFail parameters. The priority of the IsCheckResoFail parameter is higher. Valid values:
   * 
   * *   true: checks the video resolution. If the width or height of the input video is less than that of the output video, the resolution of the input video is used for transcoding.
   * *   false: does not check the video resolution.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckReso?: string;
  /**
   * @remarks
   * Specifies whether to check the video resolution. You can specify only one of the IsCheckReso and IsCheckResoFail parameters. The priority of the IsCheckResoFail parameter is higher. Valid values:
   * 
   * *   true: checks the video resolution. If the width or height of the input video is less than that of the output video, the transcoding job fails.
   * *   false: does not check the video resolution.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckResoFail?: string;
  /**
   * @remarks
   * Specifies whether to check the video bitrate. You can specify only one of the IsCheckVideoBitrate and IsCheckVideoBitrateFail parameters. The priority of the IsCheckVideoBitrateFail parameter is higher. Valid values:
   * 
   * *   true: checks the video resolution. If the bitrate of the input video is less than that of the output video, the bitrate of the input video is used for transcoding.
   * *   false: does not check the video resolution.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckVideoBitrate?: string;
  /**
   * @remarks
   * Specifies whether to check the video bitrate. You can specify only one of the IsCheckVideoBitrate and IsCheckVideoBitrateFail parameters. The priority of the IsCheckVideoBitrateFail parameter is higher. Valid values:
   * 
   * *   true: checks the video resolution. If the bitrate of the input video is less than that of the output video, the transcoding job fails.
   * *   false: does not check the video resolution.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckVideoBitrateFail?: string;
  /**
   * @remarks
   * The video transcoding mode. Valid values:
   * 
   * *   onepass: You can set this parameter to onepass if the Bitrate parameter is set to ABR. The encoding speed of this mode is faster than that of the twopass mode.
   * *   twopass: You can set this parameter to twopass if the Bitrate parameter is set to VBR. The encoding speed of this mode is slower than that of the onepass mode.
   * *   CBR: the constant bitrate mode.
   * 
   * Default value: onepass.
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

export class SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsVideo extends $dara.Model {
  /**
   * @remarks
   * The maximum adaptive bitrate (ABR). This parameter takes effect only for Narrowband HD 1.0. Valid values: [10,50000]. Unit: Kbit/s.
   * 
   * @example
   * 6000
   */
  abrMax?: string;
  /**
   * @remarks
   * The average video bitrate. Valid values: [10,50000]. Unit: Kbit/s.
   * 
   * @example
   * 3000
   */
  bitrate?: string;
  /**
   * @remarks
   * The buffer size. Valid values: [1000,128000]. Default value: 6000. Unit: KB.
   * 
   * @example
   * 6000
   */
  bufsize?: string;
  /**
   * @remarks
   * The encoding format.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The constant rate factor (CRF). Valid values: [0,51]. Default value: 23 if the encoding format is H.264, or 26 if the encoding format is H.265.
   * 
   * >  If this parameter is specified, the setting of the bitrate becomes invalid.
   * 
   * @example
   * 23
   */
  crf?: string;
  /**
   * @remarks
   * The method of video cropping. Valid values:
   * 
   * *   border: automatically detects and removes black bars.
   * *   A value in the width:height:left:top format: crops the videos based on the custom settings. Example: 1280:800:0:140.
   * 
   * @example
   * 1280:800:0:140
   */
  crop?: string;
  /**
   * @remarks
   * The frame rate. Valid values:(0,60]. Default value: the frame rate of the input file.
   * 
   * >  The value is 60 if the frame rate of the input file exceeds 60.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The maximum number of frames between keyframes. Valid values: [1,1080000]. Default value: 250.
   * 
   * @example
   * 250
   */
  gop?: string;
  /**
   * @remarks
   * The height of the video. Valid values: [128,4096]. Unit: pixels. Default value: the original height of the video.
   * 
   * @example
   * 1080
   */
  height?: string;
  /**
   * @remarks
   * Specifies whether to enable the auto-rotate screen feature.
   * 
   * @example
   * false
   */
  longShortMode?: string;
  /**
   * @remarks
   * The maximum bitrate of the video. Valid values: [10,50000]. Unit: Kbit/s.
   * 
   * @example
   * 9000
   */
  maxrate?: string;
  /**
   * @remarks
   * The black bars added to the video. Format: width:height:left:top. Example: 1280:800:0:140.
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
   * The preset video algorithm. This parameter takes effect only if the encoding format is H.264. Valid values: veryfast, fast, medium, slow, and slower. Default value: medium.
   * 
   * @example
   * medium
   */
  preset?: string;
  /**
   * @remarks
   * The encoding profile. Valid values: baseline, main, and high.
   * 
   * *   baseline: applicable to mobile devices.
   * *   main: applicable to standard-definition devices.
   * *   high: applicable to high-definition devices.
   * 
   * Default value: high.
   * 
   * @example
   * Main
   */
  profile?: string;
  /**
   * @remarks
   * Specifies whether to remove the video.
   * 
   * @example
   * false
   */
  remove?: string;
  /**
   * @remarks
   * The scan mode. Valid values: interlaced and progressive.
   * 
   * @example
   * progressive
   */
  scanMode?: string;
  /**
   * @remarks
   * The width of the video. Valid values: [128,4096]. Unit: pixels. Default value: the original width of the video.
   * 
   * @example
   * 1920
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      abrMax: 'AbrMax',
      bitrate: 'Bitrate',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      crop: 'Crop',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      longShortMode: 'LongShortMode',
      maxrate: 'Maxrate',
      pad: 'Pad',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      remove: 'Remove',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abrMax: 'string',
      bitrate: 'string',
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      crop: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      longShortMode: 'string',
      maxrate: 'string',
      pad: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      remove: 'string',
      scanMode: 'string',
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

export class SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * The audio settings.
   */
  audio?: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsAudio;
  /**
   * @remarks
   * The encapsulation format settings.
   */
  container?: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsContainer;
  /**
   * @remarks
   * The encapsulation settings.
   */
  muxConfig?: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig;
  /**
   * @remarks
   * The conditional transcoding configurations.
   */
  transConfig?: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsTransConfig;
  /**
   * @remarks
   * The video settings.
   */
  video?: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      muxConfig: 'MuxConfig',
      transConfig: 'TransConfig',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsAudio,
      container: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsContainer,
      muxConfig: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig,
      transConfig: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsTransConfig,
      video: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsVideo,
    };
  }

  validate() {
    if(this.audio && typeof (this.audio as any).validate === 'function') {
      (this.audio as any).validate();
    }
    if(this.container && typeof (this.container as any).validate === 'function') {
      (this.container as any).validate();
    }
    if(this.muxConfig && typeof (this.muxConfig as any).validate === 'function') {
      (this.muxConfig as any).validate();
    }
    if(this.transConfig && typeof (this.transConfig as any).validate === 'function') {
      (this.transConfig as any).validate();
    }
    if(this.video && typeof (this.video as any).validate === 'function') {
      (this.video as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfigTranscode extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParams;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9547c6ad97cb4f2aaa29683ebd18d410
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParams,
      templateId: 'string',
    };
  }

  validate() {
    if(this.overwriteParams && typeof (this.overwriteParams as any).validate === 'function') {
      (this.overwriteParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroupProcessConfig extends $dara.Model {
  /**
   * @remarks
   * The multi-input stream merge configuration.
   */
  combineConfigs?: SubmitTranscodeJobRequestOutputGroupProcessConfigCombineConfigs[];
  /**
   * @remarks
   * The encryption settings.
   */
  encryption?: SubmitTranscodeJobRequestOutputGroupProcessConfigEncryption;
  /**
   * @remarks
   * The watermark configuration of an image.
   */
  imageWatermarks?: SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarks[];
  /**
   * @remarks
   * The subtitle configuration.
   */
  subtitles?: SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitles[];
  /**
   * @remarks
   * The configurations of the text watermark.
   */
  textWatermarks?: SubmitTranscodeJobRequestOutputGroupProcessConfigTextWatermarks[];
  /**
   * @remarks
   * The transcoding configuration.
   * 
   * This parameter is required.
   */
  transcode?: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscode;
  static names(): { [key: string]: string } {
    return {
      combineConfigs: 'CombineConfigs',
      encryption: 'Encryption',
      imageWatermarks: 'ImageWatermarks',
      subtitles: 'Subtitles',
      textWatermarks: 'TextWatermarks',
      transcode: 'Transcode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combineConfigs: { 'type': 'array', 'itemType': SubmitTranscodeJobRequestOutputGroupProcessConfigCombineConfigs },
      encryption: SubmitTranscodeJobRequestOutputGroupProcessConfigEncryption,
      imageWatermarks: { 'type': 'array', 'itemType': SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarks },
      subtitles: { 'type': 'array', 'itemType': SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitles },
      textWatermarks: { 'type': 'array', 'itemType': SubmitTranscodeJobRequestOutputGroupProcessConfigTextWatermarks },
      transcode: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscode,
    };
  }

  validate() {
    if(Array.isArray(this.combineConfigs)) {
      $dara.Model.validateArray(this.combineConfigs);
    }
    if(this.encryption && typeof (this.encryption as any).validate === 'function') {
      (this.encryption as any).validate();
    }
    if(Array.isArray(this.imageWatermarks)) {
      $dara.Model.validateArray(this.imageWatermarks);
    }
    if(Array.isArray(this.subtitles)) {
      $dara.Model.validateArray(this.subtitles);
    }
    if(Array.isArray(this.textWatermarks)) {
      $dara.Model.validateArray(this.textWatermarks);
    }
    if(this.transcode && typeof (this.transcode as any).validate === 'function') {
      (this.transcode as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestOutputGroup extends $dara.Model {
  /**
   * @remarks
   * The output file configuration.
   * 
   * This parameter is required.
   */
  output?: SubmitTranscodeJobRequestOutputGroupOutput;
  /**
   * @remarks
   * The job processing configuration.
   * 
   * This parameter is required.
   */
  processConfig?: SubmitTranscodeJobRequestOutputGroupProcessConfig;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      processConfig: 'ProcessConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: SubmitTranscodeJobRequestOutputGroupOutput,
      processConfig: SubmitTranscodeJobRequestOutputGroupProcessConfig,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(this.processConfig && typeof (this.processConfig as any).validate === 'function') {
      (this.processConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequestScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the MPS queue to which the job was submitted.
   * 
   * @example
   * e37ebee5d98b4781897f6086e89f9c56
   */
  pipelineId?: string;
  /**
   * @remarks
   * The priority of the job. Valid values: 1 to 10. The greater the value, the higher the priority.
   * 
   * @example
   * 5
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ****12e8864746a0a398****
   */
  clientToken?: string;
  /**
   * @remarks
   * The input group of the job. An input of a single file indicates a transcoding job. An input of multiple files indicates an audio and video stream merge job.
   * 
   * This parameter is required.
   * 
   * @example
   * job-name
   */
  inputGroup?: SubmitTranscodeJobRequestInputGroup[];
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * job-name
   */
  name?: string;
  /**
   * @remarks
   * The output group of the job.
   * 
   * This parameter is required.
   * 
   * @example
   * user-data
   */
  outputGroup?: SubmitTranscodeJobRequestOutputGroup[];
  /**
   * @remarks
   * The scheduling information about the job.
   * 
   * @example
   * job-name
   */
  scheduleConfig?: SubmitTranscodeJobRequestScheduleConfig;
  /**
   * @remarks
   * The custom settings. The value must be in the JSON format and can be up to 512 bytes in length. You can specify a [custom callback URL](https://help.aliyun.com/document_detail/451631.html).
   * 
   * @example
   * user-data
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      inputGroup: 'InputGroup',
      name: 'Name',
      outputGroup: 'OutputGroup',
      scheduleConfig: 'ScheduleConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      inputGroup: { 'type': 'array', 'itemType': SubmitTranscodeJobRequestInputGroup },
      name: 'string',
      outputGroup: { 'type': 'array', 'itemType': SubmitTranscodeJobRequestOutputGroup },
      scheduleConfig: SubmitTranscodeJobRequestScheduleConfig,
      userData: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inputGroup)) {
      $dara.Model.validateArray(this.inputGroup);
    }
    if(Array.isArray(this.outputGroup)) {
      $dara.Model.validateArray(this.outputGroup);
    }
    if(this.scheduleConfig && typeof (this.scheduleConfig as any).validate === 'function') {
      (this.scheduleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

