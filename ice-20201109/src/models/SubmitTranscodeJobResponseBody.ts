// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTranscodeJobResponseBodyTranscodeParentJobInputGroup extends $dara.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupOutput extends $dara.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigCombineConfigs extends $dara.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigEncryption extends $dara.Model {
  /**
   * @remarks
   * The ciphertext of HLS encryption.
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
   * Specifies the encryption type.
   * 
   * @example
   * PrivateEncryption
   */
  encryptType?: string;
  /**
   * @remarks
   * The type of the key service. Valid values: KMS and Base64.
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsFile extends $dara.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline extends $dara.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParams extends $dara.Model {
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
  file?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsFile;
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
  timeline?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline;
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
      file: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsFile,
      height: 'string',
      referPos: 'string',
      timeline: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline,
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarks extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParams;
  /**
   * @remarks
   * The template ID.
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
      overwriteParams: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParams,
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParamsFile extends $dara.Model {
  /**
   * @remarks
   * The media object. If Type is set to OSS, set this parameter to the URL of an OSS object. Both the OSS and HTTP protocols are supported. If Type is set to Media, set this parameter to the ID of a media asset.
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParams extends $dara.Model {
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
  file?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParamsFile;
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
      file: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParamsFile,
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitles extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParams;
  /**
   * @remarks
   * The template ID.
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
      overwriteParams: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParams,
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarksOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to the font size based on the output video dimensions.
   * 
   * *   true: false
   * *   default: false
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarks extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarksOverwriteParams;
  /**
   * @remarks
   * The template ID.
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
      overwriteParams: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarksOverwriteParams,
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume extends $dara.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudio extends $dara.Model {
  /**
   * @remarks
   * The audio bitrate of the output file.
   * 
   * *   Valid values: [8,1000].
   * *   Unit: Kbit/s.
   * *   Default value: 128.
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
   * The sampling rate.
   * 
   * *   Valid values: 22050, 32000, 44100, 48000, and 96000. Default value: 44100.
   * *   Unit: Hz.
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  /**
   * @remarks
   * The volume configurations.
   */
  volume?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume;
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
      volume: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume,
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsContainer extends $dara.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment extends $dara.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The segment settings.
   */
  segment?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment;
  static names(): { [key: string]: string } {
    return {
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segment: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment,
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsTransConfig extends $dara.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsVideo extends $dara.Model {
  /**
   * @remarks
   * The maximum ABR. This parameter takes effect only for Narrowband HD 1.0.
   * 
   * *   Valid values: [10,50000].
   * *   Unit: Kbit/s.
   * 
   * @example
   * 6000
   */
  abrMax?: string;
  /**
   * @remarks
   * The average bitrate of the video.
   * 
   * *   Valid values: [10,50000].
   * *   Unit: Kbit/s.
   * 
   * @example
   * 3000
   */
  bitrate?: string;
  /**
   * @remarks
   * The buffer size.
   * 
   * *   Valid values: [1000,128000].
   * *   Default value: 6000.
   * *   Unit: KB.
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
   * The constant rate factor.
   * 
   * *   Valid values: [0,51].
   * *   Default value: 23 if the encoding format is H.264, or Default value when the Codec parameter is set to H.265: 26.
   * 
   * If this parameter is specified, the value of Bitrate becomes invalid.
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
   * The frame rate.
   * 
   * *   Valid values: (0,60].
   * *   The value is 60 if the frame rate of the input video exceeds 60.
   * *   Default value: the frame rate of the input video.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The maximum number of frames between two keyframes.
   * 
   * *   Valid values: [1,1080000].
   * *   Default value: 250.
   * 
   * @example
   * 250
   */
  gop?: string;
  /**
   * @remarks
   * The height of the output video.
   * 
   * *   Valid values: [128,4096].
   * *   Unit: pixels.
   * *   Default value: the height of the input video.
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
   * The maximum bitrate of the output video.
   * 
   * *   Valid values: [10,50000].
   * *   Unit: Kbit/s.
   * 
   * @example
   * 9000
   */
  maxrate?: string;
  /**
   * @remarks
   * The black bars added to the video.
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
   * The width of the output video.
   * 
   * *   Valid values: [128,4096].
   * *   Unit: pixels.
   * *   Default value: the width of the input video.
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * The audio settings.
   */
  audio?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudio;
  /**
   * @remarks
   * The encapsulation format settings.
   */
  container?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsContainer;
  /**
   * @remarks
   * The encapsulation settings.
   */
  muxConfig?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig;
  /**
   * @remarks
   * The conditional transcoding configurations.
   */
  transConfig?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsTransConfig;
  /**
   * @remarks
   * The video settings.
   */
  video?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsVideo;
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
      audio: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudio,
      container: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsContainer,
      muxConfig: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig,
      transConfig: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsTransConfig,
      video: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsVideo,
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscode extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParams;
  /**
   * @remarks
   * The template ID.
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
      overwriteParams: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParams,
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfig extends $dara.Model {
  /**
   * @remarks
   * The multi-input stream merge configuration.
   */
  combineConfigs?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigCombineConfigs[];
  /**
   * @remarks
   * The encryption settings.
   */
  encryption?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigEncryption;
  /**
   * @remarks
   * The watermark configuration of an image.
   */
  imageWatermarks?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarks[];
  /**
   * @remarks
   * The subtitle configuration.
   */
  subtitles?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitles[];
  /**
   * @remarks
   * The configurations of the text watermark.
   */
  textWatermarks?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarks[];
  /**
   * @remarks
   * The transcoding configuration.
   */
  transcode?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscode;
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
      combineConfigs: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigCombineConfigs },
      encryption: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigEncryption,
      imageWatermarks: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarks },
      subtitles: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitles },
      textWatermarks: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarks },
      transcode: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscode,
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroup extends $dara.Model {
  /**
   * @remarks
   * The output file configuration.
   */
  output?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupOutput;
  /**
   * @remarks
   * The job processing configuration.
   */
  processConfig?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfig;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      processConfig: 'ProcessConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupOutput,
      processConfig: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfig,
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobScheduleConfig extends $dara.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListInputGroup extends $dara.Model {
  /**
   * @remarks
   * The URL of the input stream:
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaAudioStreamInfoList extends $dara.Model {
  /**
   * @remarks
   * The bitrate.
   * 
   * @example
   * 0.f
   */
  bitrate?: string;
  /**
   * @remarks
   * The sound channel layout.
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
   * The name of the encoding format.
   * 
   * @example
   * AAC (Advanced Audio Coding)
   */
  codecLongName?: string;
  /**
   * @remarks
   * The encoding format.
   * 
   * @example
   * aac
   */
  codecName?: string;
  /**
   * @remarks
   * The encoder tag.
   * 
   * @example
   * 0x000f
   */
  codecTag?: string;
  /**
   * @remarks
   * The name of the encoder tag.
   * 
   * @example
   * [15][0][0][0]
   */
  codecTagString?: string;
  /**
   * @remarks
   * The time base of the encoder.
   * 
   * @example
   * 1/44100
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The duration of the stream. Unit: seconds.
   * 
   * @example
   * 403.039989
   */
  duration?: string;
  /**
   * @remarks
   * The sequence number of the stream.
   * 
   * @example
   * 1
   */
  index?: string;
  /**
   * @remarks
   * The language of the stream.
   * 
   * @example
   * cn
   */
  lang?: string;
  /**
   * @remarks
   * The sample format.
   * 
   * @example
   * fltp
   */
  sampleFmt?: string;
  /**
   * @remarks
   * The sampling rate. Unit: Hz.
   * 
   * @example
   * 44100
   */
  sampleRate?: string;
  /**
   * @remarks
   * The start time of the stream.
   * 
   * @example
   * 1.473556
   */
  startTime?: string;
  /**
   * @remarks
   * The time base.
   * 
   * @example
   * 1/90000
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
      sampleFmt: 'SampleFmt',
      sampleRate: 'SampleRate',
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
      sampleFmt: 'string',
      sampleRate: 'string',
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaFileBasicInfo extends $dara.Model {
  /**
   * @remarks
   * The video bitrate.
   * 
   * @example
   * 888.563
   */
  bitrate?: string;
  /**
   * @remarks
   * The duration of the video. Unit: seconds.
   * 
   * @example
   * 403.039999
   */
  duration?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * file.m3u8
   */
  fileName?: string;
  /**
   * @remarks
   * The file size. Unit: bytes.
   * 
   * @example
   * 31737
   */
  fileSize?: string;
  /**
   * @remarks
   * The state of the file.
   * 
   * @example
   * Normal
   */
  fileStatus?: string;
  /**
   * @remarks
   * The file type. Valid values: source_file and transcode_file.
   * 
   * @example
   * source_file
   */
  fileType?: string;
  /**
   * @remarks
   * The URL of the file.
   * 
   * @example
   * http://bucket.oss-cn-shanghai.aliyuncs.com/path/to/file.m3u8
   */
  fileUrl?: string;
  /**
   * @remarks
   * The name of the video format.
   * 
   * @example
   * hls,applehttp
   */
  formatName?: string;
  /**
   * @remarks
   * The height of the output video.
   * 
   * @example
   * 478
   */
  height?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 73e07de0f77171eca3fc7035d0b26402
   */
  mediaId?: string;
  /**
   * @remarks
   * The region in which the file resides.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The width of the output video.
   * 
   * @example
   * 848
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      formatName: 'FormatName',
      height: 'Height',
      mediaId: 'MediaId',
      region: 'Region',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileUrl: 'string',
      formatName: 'string',
      height: 'string',
      mediaId: 'string',
      region: 'string',
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaVideoStreamInfoList extends $dara.Model {
  /**
   * @remarks
   * The average frame rate.
   * 
   * @example
   * 25.0
   */
  avgFps?: string;
  /**
   * @remarks
   * The bitrate.
   * 
   * @example
   * 888.563
   */
  bitRate?: string;
  /**
   * @remarks
   * The name of the encoding format.
   * 
   * @example
   * H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10
   */
  codecLongName?: string;
  /**
   * @remarks
   * The encoding format.
   * 
   * @example
   * h264
   */
  codecName?: string;
  /**
   * @remarks
   * The tag of the encoding format.
   * 
   * @example
   * 0x001b
   */
  codecTag?: string;
  /**
   * @remarks
   * The tag string of the encoding format.
   * 
   * @example
   * [27][0][0][0]
   */
  codecTagString?: string;
  /**
   * @remarks
   * The time base of the encoder.
   * 
   * @example
   * 1/50
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The display aspect ratio.
   * 
   * @example
   * 16:9
   */
  dar?: string;
  /**
   * @remarks
   * The duration of the stream. Unit: seconds.
   * 
   * @example
   * 403.039989
   */
  duration?: string;
  /**
   * @remarks
   * The frame rate.
   * 
   * @example
   * 25.0
   */
  fps?: string;
  /**
   * @remarks
   * Indicates whether the video stream contains bidirectional frames (B-frames). Valid values:
   * 
   * *   0: The stream contains no B-frames.
   * *   1: The stream contains one B-frame.
   * *   2: The stream contains multiple consecutive B-frames.
   * 
   * @example
   * 2
   */
  hasBFrames?: string;
  /**
   * @remarks
   * The height of the output video.
   * 
   * @example
   * 478
   */
  height?: string;
  /**
   * @remarks
   * The sequence number of the stream.
   * 
   * @example
   * 0
   */
  index?: string;
  /**
   * @remarks
   * The language of the stream.
   * 
   * @example
   * cn
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
   * The total number of frames.
   * 
   * @example
   * 10040
   */
  numFrames?: string;
  /**
   * @remarks
   * The pixel format.
   * 
   * @example
   * yuv420p
   */
  pixFmt?: string;
  /**
   * @remarks
   * The encoder profile.
   * 
   * @example
   * High
   */
  profile?: string;
  /**
   * @remarks
   * The rotation angle of the video image. Valid values: 0, 90, 180, and 270. Default value: 0.
   * 
   * @example
   * 0
   */
  rotate?: string;
  /**
   * @remarks
   * The aspect ratio of the area from which the sampling points are collected.
   * 
   * @example
   * 478:477
   */
  sar?: string;
  /**
   * @remarks
   * The start time of the stream.
   * 
   * @example
   * 1.473556
   */
  startTime?: string;
  /**
   * @remarks
   * The time base.
   * 
   * @example
   * 1/90000
   */
  timeBase?: string;
  /**
   * @remarks
   * The width of the output video.
   * 
   * @example
   * 848
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      avgFps: 'Avg_fps',
      bitRate: 'Bit_rate',
      codecLongName: 'Codec_long_name',
      codecName: 'Codec_name',
      codecTag: 'Codec_tag',
      codecTagString: 'Codec_tag_string',
      codecTimeBase: 'Codec_time_base',
      dar: 'Dar',
      duration: 'Duration',
      fps: 'Fps',
      hasBFrames: 'Has_b_frames',
      height: 'Height',
      index: 'Index',
      lang: 'Lang',
      level: 'Level',
      numFrames: 'NumFrames',
      pixFmt: 'PixFmt',
      profile: 'Profile',
      rotate: 'Rotate',
      sar: 'Sar',
      startTime: 'Start_time',
      timeBase: 'Time_base',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgFps: 'string',
      bitRate: 'string',
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
      numFrames: 'string',
      pixFmt: 'string',
      profile: 'string',
      rotate: 'string',
      sar: 'string',
      startTime: 'string',
      timeBase: 'string',
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMeta extends $dara.Model {
  /**
   * @remarks
   * The information about the audio stream.
   */
  audioStreamInfoList?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaAudioStreamInfoList[];
  /**
   * @remarks
   * The basic file information.
   */
  fileBasicInfo?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaFileBasicInfo;
  /**
   * @remarks
   * The information about the video stream.
   */
  videoStreamInfoList?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaVideoStreamInfoList[];
  static names(): { [key: string]: string } {
    return {
      audioStreamInfoList: 'AudioStreamInfoList',
      fileBasicInfo: 'FileBasicInfo',
      videoStreamInfoList: 'VideoStreamInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamInfoList: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaAudioStreamInfoList },
      fileBasicInfo: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaFileBasicInfo,
      videoStreamInfoList: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaVideoStreamInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.audioStreamInfoList)) {
      $dara.Model.validateArray(this.audioStreamInfoList);
    }
    if(this.fileBasicInfo && typeof (this.fileBasicInfo as any).validate === 'function') {
      (this.fileBasicInfo as any).validate();
    }
    if(Array.isArray(this.videoStreamInfoList)) {
      $dara.Model.validateArray(this.videoStreamInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutput extends $dara.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigCombineConfigs extends $dara.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigEncryption extends $dara.Model {
  /**
   * @remarks
   * The ciphertext of HLS encryption.
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
   * Specifies the encryption type.
   * 
   * @example
   * PrivateEncryption
   */
  encryptType?: string;
  /**
   * @remarks
   * The type of the key service. Valid values: KMS and Base64.
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsFile extends $dara.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsTimeline extends $dara.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParams extends $dara.Model {
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
  file?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsFile;
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
  timeline?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsTimeline;
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
      file: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsFile,
      height: 'string',
      referPos: 'string',
      timeline: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsTimeline,
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarks extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParams;
  /**
   * @remarks
   * The template ID.
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
      overwriteParams: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParams,
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParamsFile extends $dara.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParams extends $dara.Model {
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
  file?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParamsFile;
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
      file: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParamsFile,
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitles extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParams;
  /**
   * @remarks
   * The template ID.
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
      overwriteParams: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParams,
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarksOverwriteParams extends $dara.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarks extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarksOverwriteParams;
  /**
   * @remarks
   * The template ID.
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
      overwriteParams: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarksOverwriteParams,
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudioVolume extends $dara.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudio extends $dara.Model {
  /**
   * @remarks
   * The audio bitrate of the output file.
   * 
   * *   Valid values: [8,1000].
   * *   Unit: Kbit/s.
   * *   Default value: 128.
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
   * The sampling rate.
   * 
   * *   Default value: 44100.
   * *   Valid values: 22050, 32000, 44100, 48000, and 96000.
   * *   Unit: Hz.
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  /**
   * @remarks
   * The volume configurations.
   */
  volume?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudioVolume;
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
      volume: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudioVolume,
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsContainer extends $dara.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfigSegment extends $dara.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The segment settings.
   */
  segment?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfigSegment;
  static names(): { [key: string]: string } {
    return {
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segment: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfigSegment,
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsTransConfig extends $dara.Model {
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
   * Default values:
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
   * *   false: does not check the video resolution. This is the default value.
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
   * *   false: does not check the video resolution. This is the default value.
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
   * *   false: does not check the video resolution. This is the default value.
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
   * *   false: does not check the video resolution. This is the default value.
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
   * *   false: does not check the video resolution. This is the default value.
   * 
   * @example
   * true
   */
  isCheckVideoBitrateFail?: string;
  /**
   * @remarks
   * The video transcoding mode. Valid values:
   * 
   * *   onepass: You can set this parameter to onepass if the Bitrate parameter is set to ABR. This is the default value. The encoding speed of this mode is faster than that of the twopass mode.
   * *   twopass: You can set this parameter to twopass if the Bitrate parameter is set to VBR. The encoding speed of this mode is slower than that of the onepass mode.
   * *   CBR: the constant bitrate mode.
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsVideo extends $dara.Model {
  /**
   * @remarks
   * The maximum ABR. This parameter takes effect only for Narrowband HD 1.0. Valid values: [10,50000]. Unit: Kbit/s.
   * 
   * @example
   * 6000
   */
  abrMax?: string;
  /**
   * @remarks
   * The average bitrate of the video.
   * 
   * *   Valid values: [10,50000].
   * *   Unit: Kbit/s.
   * 
   * @example
   * 3000
   */
  bitrate?: string;
  /**
   * @remarks
   * The buffer size.
   * 
   * *   Valid values: [1000,128000].
   * *   Default value: 6000.
   * *   Unit: KB.
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
   * The constant rate factor.
   * 
   * *   Valid values: [0,51].
   * *   Default value: 23 if the encoding format is H.264, or Default value when the Codec parameter is set to H.265: 26.
   * 
   * If this parameter is specified, the value of Bitrate becomes invalid.
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
   * The frame rate.
   * 
   * *   Valid values: (0,60].
   * *   The value is 60 if the frame rate of the input video exceeds 60.
   * *   Default value: the frame rate of the input video.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The maximum number of frames between two keyframes.
   * 
   * *   Valid values: [1,1080000].
   * *   Default value: 250.
   * 
   * @example
   * 250
   */
  gop?: string;
  /**
   * @remarks
   * The height of the output video.
   * 
   * *   Valid values: [128,4096].
   * *   Unit: pixels.
   * *   Default value: the height of the input video.
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
   * The maximum bitrate of the output video. Valid values: [10,50000]. Unit: Kbit/s.
   * 
   * @example
   * 9000
   */
  maxrate?: string;
  /**
   * @remarks
   * The black bars added to the video.
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
   * The width of the output video.
   * 
   * *   Valid values: [128,4096].
   * *   Unit: pixels.
   * *   Default value: the width of the input video.
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * The audio settings.
   */
  audio?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudio;
  /**
   * @remarks
   * The encapsulation format settings.
   */
  container?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsContainer;
  /**
   * @remarks
   * The encapsulation settings.
   */
  muxConfig?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfig;
  /**
   * @remarks
   * The conditional transcoding configurations.
   */
  transConfig?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsTransConfig;
  /**
   * @remarks
   * The video settings.
   */
  video?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsVideo;
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
      audio: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudio,
      container: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsContainer,
      muxConfig: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfig,
      transConfig: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsTransConfig,
      video: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsVideo,
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscode extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParams;
  /**
   * @remarks
   * The template ID.
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
      overwriteParams: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParams,
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfig extends $dara.Model {
  /**
   * @remarks
   * The multi-input stream merge configuration.
   */
  combineConfigs?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigCombineConfigs[];
  /**
   * @remarks
   * The encryption settings.
   */
  encryption?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigEncryption;
  /**
   * @remarks
   * The watermark configuration of an image.
   */
  imageWatermarks?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarks[];
  /**
   * @remarks
   * The subtitle configuration.
   */
  subtitles?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitles[];
  /**
   * @remarks
   * The configurations of the text watermark.
   */
  textWatermarks?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarks[];
  /**
   * @remarks
   * The transcoding configuration.
   */
  transcode?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscode;
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
      combineConfigs: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigCombineConfigs },
      encryption: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigEncryption,
      imageWatermarks: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarks },
      subtitles: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitles },
      textWatermarks: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarks },
      transcode: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscode,
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListScheduleConfig extends $dara.Model {
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

export class SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobList extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the job was complete.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The input group of the job. An input of a single file indicates a transcoding job. An input of multiple files indicates an audio and video stream merge job.
   */
  inputGroup?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListInputGroup[];
  /**
   * @remarks
   * The subjob ID.
   * 
   * @example
   * 7d6a7e0d4db2457a8d45ff5d43e1bf0a
   */
  jobId?: string;
  /**
   * @remarks
   * The index number of the subjob in the entire job.
   * 
   * @example
   * 0
   */
  jobIndex?: number;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * transcode-job
   */
  name?: string;
  /**
   * @remarks
   * The media information about the video generated by the job.
   */
  outFileMeta?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMeta;
  /**
   * @remarks
   * The output file configuration.
   */
  output?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutput;
  /**
   * @remarks
   * The main job ID.
   * 
   * @example
   * 8b2198504dd340b7b3c9842a74fc9baa
   */
  parentJobId?: string;
  /**
   * @remarks
   * The transcoding configuration.
   */
  processConfig?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfig;
  /**
   * @remarks
   * The ID of the request that submitted the job.
   * 
   * @example
   * 31E30781-9495-5E2D-A84D-759B0A01E262
   */
  requestId?: string;
  /**
   * @remarks
   * The scheduling information about the job.
   */
  scheduleConfig?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListScheduleConfig;
  /**
   * @remarks
   * The state of the transcoding job. Valid values:
   * 
   * *   Init: The job is submitted.
   * *   Processing: The job is in progress.
   * *   Success: The job is successful.
   * *   Fail: The job failed.
   * *   Deleted: The job is deleted.
   * 
   * @example
   * Init
   */
  status?: string;
  /**
   * @remarks
   * The job submission result.
   * 
   * @example
   * {}
   */
  submitResultJson?: { [key: string]: any };
  /**
   * @remarks
   * The time when the job was submitted.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  submitTime?: string;
  /**
   * @remarks
   * The user data.
   * 
   * @example
   * user-data
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      inputGroup: 'InputGroup',
      jobId: 'JobId',
      jobIndex: 'JobIndex',
      name: 'Name',
      outFileMeta: 'OutFileMeta',
      output: 'Output',
      parentJobId: 'ParentJobId',
      processConfig: 'ProcessConfig',
      requestId: 'RequestId',
      scheduleConfig: 'ScheduleConfig',
      status: 'Status',
      submitResultJson: 'SubmitResultJson',
      submitTime: 'SubmitTime',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      finishTime: 'string',
      inputGroup: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListInputGroup },
      jobId: 'string',
      jobIndex: 'number',
      name: 'string',
      outFileMeta: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMeta,
      output: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutput,
      parentJobId: 'string',
      processConfig: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfig,
      requestId: 'string',
      scheduleConfig: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListScheduleConfig,
      status: 'string',
      submitResultJson: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      submitTime: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inputGroup)) {
      $dara.Model.validateArray(this.inputGroup);
    }
    if(this.outFileMeta && typeof (this.outFileMeta as any).validate === 'function') {
      (this.outFileMeta as any).validate();
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(this.processConfig && typeof (this.processConfig as any).validate === 'function') {
      (this.processConfig as any).validate();
    }
    if(this.scheduleConfig && typeof (this.scheduleConfig as any).validate === 'function') {
      (this.scheduleConfig as any).validate();
    }
    if(this.submitResultJson) {
      $dara.Model.validateMap(this.submitResultJson);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBodyTranscodeParentJob extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the job was complete. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The input group of the job. An input of a single file indicates a transcoding job. An input of multiple files indicates an audio and video stream merge job.
   */
  inputGroup?: SubmitTranscodeJobResponseBodyTranscodeParentJobInputGroup[];
  /**
   * @remarks
   * The number of subjobs.
   * 
   * @example
   * 1
   */
  jobCount?: number;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * transcode-job
   */
  name?: string;
  /**
   * @remarks
   * The output group of the job.
   */
  outputGroup?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroup[];
  /**
   * @remarks
   * The main job ID.
   * 
   * @example
   * 8b2198504dd340b7b3c9842a74fc9baa
   */
  parentJobId?: string;
  /**
   * @remarks
   * The completion percentage of the job.
   * 
   * @example
   * 0
   */
  percent?: number;
  /**
   * @remarks
   * The ID of the request that submitted the job.
   * 
   * @example
   * 31E30781-9495-5E2D-A84D-759B0A01E262
   */
  requestId?: string;
  /**
   * @remarks
   * The scheduling configuration of the job.
   */
  scheduleConfig?: SubmitTranscodeJobResponseBodyTranscodeParentJobScheduleConfig;
  /**
   * @remarks
   * The state of the job. Success: At least one of the subjobs is successful. Fail: All subjobs failed.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The time when the job was submitted. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  submitTime?: string;
  /**
   * @remarks
   * The list of subjobs.
   */
  transcodeJobList?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobList[];
  /**
   * @remarks
   * The source of the job. Valid values: API, WorkFlow, and Console.
   * 
   * @example
   * API
   */
  triggerSource?: string;
  /**
   * @remarks
   * The user data.
   * 
   * @example
   * user-data
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      inputGroup: 'InputGroup',
      jobCount: 'JobCount',
      name: 'Name',
      outputGroup: 'OutputGroup',
      parentJobId: 'ParentJobId',
      percent: 'Percent',
      requestId: 'RequestId',
      scheduleConfig: 'ScheduleConfig',
      status: 'Status',
      submitTime: 'SubmitTime',
      transcodeJobList: 'TranscodeJobList',
      triggerSource: 'TriggerSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      finishTime: 'string',
      inputGroup: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobInputGroup },
      jobCount: 'number',
      name: 'string',
      outputGroup: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroup },
      parentJobId: 'string',
      percent: 'number',
      requestId: 'string',
      scheduleConfig: SubmitTranscodeJobResponseBodyTranscodeParentJobScheduleConfig,
      status: 'string',
      submitTime: 'string',
      transcodeJobList: { 'type': 'array', 'itemType': SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobList },
      triggerSource: 'string',
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
    if(Array.isArray(this.transcodeJobList)) {
      $dara.Model.validateArray(this.transcodeJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranscodeJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 31E30781-9495-5E2D-A84D-759B0A01E262
   */
  requestId?: string;
  /**
   * @remarks
   * TranscodeParentJobWithSubJobDTO
   */
  transcodeParentJob?: SubmitTranscodeJobResponseBodyTranscodeParentJob;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transcodeParentJob: 'TranscodeParentJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transcodeParentJob: SubmitTranscodeJobResponseBodyTranscodeParentJob,
    };
  }

  validate() {
    if(this.transcodeParentJob && typeof (this.transcodeParentJob as any).validate === 'function') {
      (this.transcodeParentJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

