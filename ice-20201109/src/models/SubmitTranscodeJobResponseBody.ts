// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTranscodeJobResponseBodyTranscodeParentJobInputGroup extends $dara.Model {
  /**
   * @remarks
   * The value of the media asset:
   * 
   * - If type is OSS, this is a URL. Both the OSS and HTTP protocols are supported.
   * 
   * - If type is Media, this is the media asset ID.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The type of the media object.
   * Valid values:
   * 
   * - OSS: an OSS file.
   * 
   * - Media: a media asset ID.
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
   * The value of the media asset:
   * 
   * - If type is set to OSS, the value is a URL. The OSS and HTTP protocols are supported.
   * 
   * - If type is set to Media, the value is the media asset ID.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The media object type.
   * Valid values:
   * 
   * - OSS: An OSS file.
   * 
   * - Media: A media asset ID.
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
   * The index of the audio stream.
   * 
   * This parameter is required.
   * 
   * @example
   * 0 或 exclude
   */
  audioIndex?: string;
  /**
   * @remarks
   * The duration of the input stream. By default, this is the duration of the video.
   * 
   * @example
   * 20.0
   */
  duration?: number;
  /**
   * @remarks
   * The start time of the input stream. The default value is 0.
   * 
   * @example
   * 0.0
   */
  start?: number;
  /**
   * @remarks
   * The index of the video stream.
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
   * The ciphertext of the key for standard encryption.
   * 
   * @example
   * MTYi00NDU0LTg5O****
   */
  cipherText?: string;
  /**
   * @remarks
   * The decryption endpoint for standard encryption.
   * 
   * @example
   * https://sample.com/path?CipherText=MTYi00NDU0LTg5O****
   */
  decryptKeyUri?: string;
  /**
   * @remarks
   * The encryption type.
   * 
   * @example
   * PrivateEncryption
   */
  encryptType?: string;
  /**
   * @remarks
   * The type of the key service. Only KMS and Base64 are supported.
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
   * The value of the media asset:
   * 
   * - If type is OSS, the value is a URL that supports the OSS and HTTP protocols.
   * 
   * - If type is Media, the value is the media asset ID.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The object type of the media asset.
   * Valid values:
   * 
   * - OSS: An OSS file.
   * 
   * - Media: A media asset ID.
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
   * The duration of the watermark.
   * 
   * - Valid values: [Number, ToEND]
   * 
   * - Default value: ToEND
   * 
   * @example
   * ToEND
   */
  duration?: string;
  /**
   * @remarks
   * The time when the watermark appears.
   * 
   * - Unit: seconds
   * 
   * - The value must be numeric.
   * 
   * - Default value: 0
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
   * The horizontal offset of the watermark image relative to the output video.
   * Default: 0
   * 
   * The value can be specified in two formats:
   * 
   * - An integer that specifies the offset in pixels.
   * 
   *   - Range: [8, 4096]
   * 
   *   - Unit: px
   * 
   * - A decimal that specifies the ratio of the horizontal offset to the width of the output video.
   * 
   *   - Range: (0, 1)
   * 
   *   - The value can have up to four decimal places, such as 0.9999. The system automatically discards any digits beyond the fourth decimal place.
   * 
   * @example
   * 10
   */
  dx?: string;
  /**
   * @remarks
   * The vertical offset of the watermark image relative to the output video.
   * Default value: 0.
   * 
   * The value can be in one of the following two formats:
   * 
   * - An integer that specifies the offset in pixels.
   * 
   *   - Range: [8, 4096].
   * 
   *   - Unit: px.
   * 
   * - A decimal that specifies the ratio of the vertical offset to the output video height.
   * 
   *   - Range: (0, 1).
   * 
   *   - The value supports up to four decimal places, such as 0.9999. Any additional digits are automatically discarded.
   * 
   * @example
   * 10
   */
  dy?: string;
  /**
   * @remarks
   * The image file for the watermark.
   */
  file?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsFile;
  /**
   * @remarks
   * The height of the image watermark on the output video.
   * The value can be specified in two ways:
   * 
   * - An integer that represents the watermark height in pixels.
   * 
   *   - Range: [8, 4096].
   * 
   *   - Unit: px.
   * 
   * - A decimal that represents the watermark height as a ratio of the output video\\"s height.
   * 
   *   - Range: (0, 1).
   * 
   *   - The value supports up to four decimal places, such as 0.9999. Digits beyond the fourth decimal place are automatically discarded.
   * 
   * @example
   * 32
   */
  height?: string;
  /**
   * @remarks
   * The position of the watermark.
   * 
   * - Valid values: TopRight, TopLeft, BottomRight, and BottomLeft.
   * 
   * - Default value: TopRight.
   * 
   * @example
   * TopLeft
   */
  referPos?: string;
  /**
   * @remarks
   * The display time settings for the dynamic watermark.
   */
  timeline?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline;
  /**
   * @remarks
   * The width of the watermark image on the output video.
   * The value can be specified in two formats:
   * 
   * - An integer that specifies the width of the watermark image in pixels.
   * 
   *   - Range: [8, 4096].
   * 
   *   - Unit: px.
   * 
   * - A decimal that represents the width of the watermark relative to the width of the output video.
   * 
   *   - Range: (0, 1).
   * 
   *   - The value supports up to four decimal places, such as 0.9999. Digits beyond the fourth decimal place are automatically discarded.
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
   * The parameters that, when specified, overwrite the corresponding parameters in the template.
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
   * The value of the media asset. If the type is OSS, the value is a URL that supports the OSS and HTTP protocols. If the type is Media, the value is the media asset ID.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The type of the media object.
   * Valid values:
   * 
   * - OSS: an OSS file.
   * 
   * - Media: a media asset ID.
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
   * The caption file format.
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
   * The overwrite parameters. If specified, these parameters overwrite the corresponding parameters in the template.
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
   * Adjusts the font size based on the size of the output video.
   * 
   * - Valid values: true, false
   * 
   * - default: false
   * 
   * @example
   * false
   */
  adaptive?: string;
  /**
   * @remarks
   * The outline color.
   * Default: Black
   * For more values, see BorderColor.
   * 
   * @example
   * #006400
   */
  borderColor?: string;
  /**
   * @remarks
   * The width of the border.
   * 
   * - Default: 0
   * 
   * - Range: (0, 4096]
   * 
   * @example
   * 0
   */
  borderWidth?: number;
  /**
   * @remarks
   * The watermark text. The string must be UTF-8 encoded. Base64 encoding is not required.
   * 
   * @example
   * 测试水印
   */
  content?: string;
  /**
   * @remarks
   * The transparency of the font.
   * 
   * - Range: (0, 1].
   * 
   * - Default: 1.0.
   * 
   * @example
   * 1.0
   */
  fontAlpha?: string;
  /**
   * @remarks
   * The font color.
   * 
   * @example
   * #006400
   */
  fontColor?: string;
  /**
   * @remarks
   * The font. Default: SimSun.
   * 
   * @example
   * SimSun
   */
  fontName?: string;
  /**
   * @remarks
   * The font size.
   * 
   * - Default value: 16
   * 
   * - Range: (4, 120)
   * 
   * @example
   * 16
   */
  fontSize?: number;
  /**
   * @remarks
   * The left margin of the text.
   * 
   * - Default: 0
   * 
   * - Range: [0,4096]
   * 
   * @example
   * 10
   */
  left?: string;
  /**
   * @remarks
   * The top margin of the text.
   * 
   * - Default: 0.
   * 
   * - Range: [0,4096].
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
   * The overwrite parameters. If specified, these parameters overwrite the corresponding parameters in the template.
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
   * The target volume.
   * 
   * @example
   * -6
   */
  integratedLoudnessTarget?: string;
  /**
   * @remarks
   * The loudness range.
   * 
   * @example
   * 8
   */
  loudnessRangeTarget?: string;
  /**
   * @remarks
   * The volume adjustment method.
   * 
   * @example
   * auto
   */
  method?: string;
  /**
   * @remarks
   * The true peak.
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
   * - Value range: [8, 1000]
   * 
   * - Unit: Kbps
   * 
   * - Default value: 128
   * 
   * @example
   * 128
   */
  bitrate?: string;
  /**
   * @remarks
   * The number of sound channels.
   * Default value: 2.
   * 
   * @example
   * 2
   */
  channels?: string;
  /**
   * @remarks
   * The audio codec format. Valid values are AAC, MP3, VORBIS, and FLAC.
   * Default value: AAC
   * 
   * @example
   * AAC
   */
  codec?: string;
  /**
   * @remarks
   * The audio encoding preset.
   * When Codec is set to AAC, valid values are aac_low, aac_he, aac_he_v2, aac_ld, and aac_eld.
   * 
   * @example
   * aac_low
   */
  profile?: string;
  /**
   * @remarks
   * Specifies whether to remove the audio stream.
   * 
   * @example
   * false
   */
  remove?: string;
  /**
   * @remarks
   * The sample rate.
   * 
   * - Default value: 44100. Valid values: 22050, 32000, 44100, 48000, and 96000.
   * 
   * - Unit: Hz
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  /**
   * @remarks
   * The volume control settings.
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
   * The time points for forced segmentation.
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
   * Segment settings.
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
   * The method to adjust the resolution. This setting takes effect only when both Width and Height are specified. It can be used with LongShortMode.
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
   * Specifies whether to check the audio bitrate. You can set either this parameter or IsCheckAudioBitrateFail. IsCheckAudioBitrateFail takes precedence.
   * 
   * - true: Checks the audio bitrate. If the input audio bitrate is lower than the configured output bitrate, the service uses the input audio bitrate for transcoding.
   * 
   * - false: Does not check the audio bitrate.
   * 
   * Default value:
   * 
   * - false: If this parameter is empty and the output codec is different from the input codec.
   * 
   * - true: If this parameter is empty and the output codec is the same as the input codec.
   * 
   * @example
   * true
   */
  isCheckAudioBitrate?: string;
  /**
   * @remarks
   * Specifies whether to check the audio bitrate. You can set either IsCheckAudioBitrate or IsCheckAudioBitrateFail. This parameter has a higher priority.
   * 
   * - true: The transcoding job fails if the input audio bitrate is lower than the output bitrate setting.
   * 
   * - false: The audio bitrate is not checked.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckAudioBitrateFail?: string;
  /**
   * @remarks
   * Specifies whether to check the video resolution. The IsCheckReso and IsCheckResoFail parameters are mutually exclusive. IsCheckResoFail takes precedence.
   * 
   * - true: Enables the resolution check. If the resolution (width or height) of the input video is lower than the output resolution, the transcoding job uses the input resolution.
   * 
   * - false: Disables the resolution check.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckReso?: string;
  /**
   * @remarks
   * Specifies whether to check the video resolution. You can use either IsCheckReso or IsCheckResoFail, but not both. This parameter has a higher priority.
   * 
   * - true: Checks the resolution. The transcoding job fails if the width or height of the input video is smaller than the output resolution.
   * 
   * - false: Does not check the resolution.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckResoFail?: string;
  /**
   * @remarks
   * Specifies whether to check the video bitrate. You can set either IsCheckVideoBitrate or IsCheckVideoBitrateFail. IsCheckVideoBitrateFail has a higher priority.
   * 
   * - true: Checks the bitrate. If the input video bitrate is lower than the output bitrate, the video is transcoded at the input bitrate.
   * 
   * - false: Does not check the bitrate.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckVideoBitrate?: string;
  /**
   * @remarks
   * Specifies whether to check the video bitrate. This parameter and IsCheckVideoBitrate are mutually exclusive. IsCheckVideoBitrateFail has a higher priority.
   * 
   * - true: Enables the check. The transcoding job fails if the input video bitrate is lower than the output bitrate setting.
   * 
   * - false: Disables the check.
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
   * - onepass: Typically used for ABR. The encoding speed is faster than twopass.
   * 
   * - twopass: Typically used for VBR. The encoding speed is slower than onepass.
   * 
   * - CBR: Constant Bitrate mode.
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
   * The maximum bitrate for adaptive bitrate (ABR) streaming. This parameter is valid only for Narrowband HD 1.0.
   * 
   * - Value range: [10, 50000]
   * 
   * - Unit: Kbps
   * 
   * @example
   * 6000
   */
  abrMax?: string;
  /**
   * @remarks
   * The average video bitrate.
   * 
   * - Value range: [10, 50000].
   * 
   * - Unit: Kbps.
   * 
   * @example
   * 3000
   */
  bitrate?: string;
  /**
   * @remarks
   * The buffer size.
   * 
   * - Value range: [1000, 128000]
   * 
   * - Default value: 6000
   * 
   * - Unit: Kb
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
   * The Constant Rate Factor (CRF).
   * 
   * - The value can be from 0 to 51.
   * 
   * - The default value is 23 for H264 encoding and 26 for H265 encoding.
   * 
   * If Crf is set, the Bitrate setting is ignored.
   * 
   * @example
   * 23
   */
  crf?: string;
  /**
   * @remarks
   * Crops the video frame.
   * Two methods are available.
   * 
   * - To automatically detect and crop black bars, set the parameter to "border".
   * 
   * - To specify a custom crop area, use the width:height:left:top format.
   *   Example: 1280:800:0:140
   * 
   * @example
   * 1280:800:0:140
   */
  crop?: string;
  /**
   * @remarks
   * The frame rate.
   * 
   * - Valid values: (0, 60].
   * 
   * - If the input file has a frame rate greater than 60, the frame rate is capped at 60.
   * 
   * - Default: The frame rate of the input file.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The maximum number of frames between two keyframes.
   * 
   * - The value must be in the range of [1, 1080000].
   * 
   * - The default value is 250.
   * 
   * @example
   * 250
   */
  gop?: string;
  /**
   * @remarks
   * The height of the video.
   * 
   * - Valid values: [128, 4096].
   * 
   * - Unit: px.
   * 
   * - Default value: The original height of the video.
   * 
   * @example
   * 1080
   */
  height?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic rotation for landscape and portrait orientations (long and short edge pattern).
   * 
   * @example
   * false
   */
  longShortMode?: string;
  /**
   * @remarks
   * The peak video bitrate.
   * 
   * - Value range: [10, 50000]
   * 
   * - Unit: Kbps
   * 
   * @example
   * 9000
   */
  maxrate?: string;
  /**
   * @remarks
   * Adds black bars to the video.
   * 
   * - Format: width:height:left:top
   * 
   * - Example: 1280:800:0:140
   * 
   * @example
   * 1280:800:0:140
   */
  pad?: string;
  /**
   * @remarks
   * The pixel format of the video. Valid values include standard formats such as yuv420p and yuvj420p.
   * 
   * @example
   * yuv420p
   */
  pixFmt?: string;
  /**
   * @remarks
   * The video algorithm preset. This parameter is supported only for H.264. Supported values are veryfast, fast, medium, slow, and slower. The default value is medium.
   * 
   * @example
   * medium
   */
  preset?: string;
  /**
   * @remarks
   * The encoding profile.
   * Supported values are baseline, main, and high.
   * 
   * - baseline: For mobile devices.
   * 
   * - main: For standard-resolution devices.
   * 
   * - high: For high-resolution devices.
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
   * The scan mode. Valid values are interlaced and progressive.
   * 
   * @example
   * progressive
   */
  scanMode?: string;
  /**
   * @remarks
   * The width of the output video.
   * 
   * - Valid values: 128 to 4096.
   * 
   * - Unit: px.
   * 
   * - Default value: The original width of the video.
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
   * Audio settings.
   */
  audio?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudio;
  /**
   * @remarks
   * The container format settings.
   */
  container?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsContainer;
  /**
   * @remarks
   * The encapsulation settings.
   */
  muxConfig?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig;
  /**
   * @remarks
   * The conditional transcoding parameters.
   */
  transConfig?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsTransConfig;
  /**
   * @remarks
   * Video settings
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
   * The overwrite parameters. If specified, these parameters overwrite the corresponding parameters in the template.
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
   * The settings for combining multiple input streams.
   */
  combineConfigs?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigCombineConfigs[];
  /**
   * @remarks
   * The encryption configuration.
   */
  encryption?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigEncryption;
  /**
   * @remarks
   * The image watermark settings.
   */
  imageWatermarks?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarks[];
  /**
   * @remarks
   * The caption burn-in configuration.
   */
  subtitles?: SubmitTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitles[];
  /**
   * @remarks
   * The text watermark configurations.
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
   * The output media configuration.
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
   * The pipeline ID.
   * 
   * @example
   * e37ebee5d98b4781897f6086e89f9c56
   */
  pipelineId?: string;
  /**
   * @remarks
   * The priority of the job. A larger value indicates a higher priority. The value can be an integer from 1 to 10.
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
   * The input stream path:
   * 
   * - This parameter takes effect only when Type is Media. It lets you select a specific file from the media asset as the input.
   * 
   * - The system checks whether the input URL exists in the media asset.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  inputUrl?: string;
  /**
   * @remarks
   * The media value:
   * 
   * - If Type is OSS, this is a URL that supports the OSS or HTTP protocol.
   * 
   * - If Type is Media, this is a media asset ID.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The media object type. Valid values:
   * 
   * - OSS: An OSS file.
   * 
   * - Media: A media asset ID.
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
   * The channel layout.
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
   * The encoder tag name.
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
   * The duration in seconds.
   * 
   * @example
   * 403.039989
   */
  duration?: string;
  /**
   * @remarks
   * The index of the stream.
   * 
   * @example
   * 1
   */
  index?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * cn
   */
  lang?: string;
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
   * The sample rate in Hz.
   * 
   * @example
   * 44100
   */
  sampleRate?: string;
  /**
   * @remarks
   * The start time.
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
   * The duration of the video in seconds.
   * 
   * @example
   * 403.039999
   */
  duration?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * file.m3u8
   */
  fileName?: string;
  /**
   * @remarks
   * The size of the file in bytes.
   * 
   * @example
   * 31737
   */
  fileSize?: string;
  /**
   * @remarks
   * The status of the file.
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
   * The height.
   * 
   * @example
   * 478
   */
  height?: string;
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * 73e07de0f77171eca3fc7035d0b26402
   */
  mediaId?: string;
  /**
   * @remarks
   * The region where the file is located.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The width of the output file.
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
   * The encoding format tag.
   * 
   * @example
   * 0x001b
   */
  codecTag?: string;
  /**
   * @remarks
   * The text of the encoding format tag.
   * 
   * @example
   * [27][0][0][0]
   */
  codecTagString?: string;
  /**
   * @remarks
   * The codec time base.
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
   * The duration in seconds.
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
   * Indicates whether B-frames exist.
   * Valid values:
   * 
   * - 0: No B-frames.
   * 
   * - 1: One B-frame.
   * 
   * - 2: Multiple consecutive B-frames.
   * 
   * @example
   * 2
   */
  hasBFrames?: string;
  /**
   * @remarks
   * The height of the output video stream.
   * 
   * @example
   * 478
   */
  height?: string;
  /**
   * @remarks
   * The index of the stream.
   * 
   * @example
   * 0
   */
  index?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * cn
   */
  lang?: string;
  /**
   * @remarks
   * The encoding level.
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
   * The color storage format.
   * 
   * @example
   * yuv420p
   */
  pixFmt?: string;
  /**
   * @remarks
   * The encoder preset.
   * 
   * @example
   * High
   */
  profile?: string;
  /**
   * @remarks
   * The rotation angle of the video. Valid values: 0, 90, 180, and 270. The default value is 0.
   * 
   * @example
   * 0
   */
  rotate?: string;
  /**
   * @remarks
   * The sample aspect ratio.
   * 
   * @example
   * 478:477
   */
  sar?: string;
  /**
   * @remarks
   * The start time.
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
   * The video width.
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
   * The audio stream information.
   */
  audioStreamInfoList?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaAudioStreamInfoList[];
  /**
   * @remarks
   * Basic file information.
   */
  fileBasicInfo?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaFileBasicInfo;
  /**
   * @remarks
   * The video stream information.
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
   * The value of the media asset:
   * 
   * - If type is OSS, the value is a URL. The OSS and HTTP protocols are supported.
   * 
   * - If type is Media, the value is the media asset ID.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The path of the output stream.<br>
   * This parameter is valid only when \\`Type\\` is set to \\`Media\\`. It lets you select a specific file from the media asset for output.<br>
   * The following placeholders are supported:<br><br>
   * 
   * - {MediaId}: The ID of the media asset.
   * 
   * - {JobId}: The ID of the transcoding subtask.
   * 
   * - {MediaBucket}: The bucket where the media asset is stored.
   * 
   * - {ExtName}: The file extension. The value is the output format specified in the transcoding template.
   * 
   * - {DestMd5}: The MD5 hash of the output file.<br>
   *   Note:<br>
   * 
   * 1. This parameter must contain the {MediaId} and {JobId} placeholders.
   * 
   * 2. The output bucket is the same as the bucket where the media asset is stored.
   * 
   * @example
   * oss://bucket/path/to/{MediaId}/{JobId}.mp4
   */
  outputUrl?: string;
  /**
   * @remarks
   * The media object type.
   * Valid values:
   * 
   * - OSS: An OSS file.
   * 
   * - Media: A media asset ID.
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
   * The index of the audio stream.
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
   * The start time of the input stream. The default value is 0.
   * 
   * @example
   * 0.0
   */
  start?: number;
  /**
   * @remarks
   * The index of the video stream.
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
   * The ciphertext of the key for standard encryption.
   * 
   * @example
   * MTYi00NDU0LTg5O****
   */
  cipherText?: string;
  /**
   * @remarks
   * The decryption service endpoint for standard encryption.
   * 
   * @example
   * https://sample.com/path?CipherText=MTYi00NDU0LTg5O****
   */
  decryptKeyUri?: string;
  /**
   * @remarks
   * The encryption type.
   * 
   * @example
   * PrivateEncryption
   */
  encryptType?: string;
  /**
   * @remarks
   * The type of the key service. Only KMS and Base64 are supported.
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
   * The media value:
   * 
   * - If Type is OSS, this is a URL that supports the OSS or HTTP protocol.
   * 
   * - If Type is Media, this is a media asset ID.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The media object type. Valid values:
   * 
   * - OSS: An OSS file.
   * 
   * - Media: A media asset ID.
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
   * The duration of the watermark.
   * 
   * - Valid values: [number, ToEND]
   * 
   * - Default value: ToEND
   * 
   * @example
   * ToEND
   */
  duration?: string;
  /**
   * @remarks
   * The start time of the watermark.
   * 
   * - Unit: seconds
   * 
   * - Valid values: numbers
   * 
   * - Default value: 0
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
   * The horizontal offset of the image watermark relative to the output video. Default value: 0.
   * 
   * Values can be one of the following:
   * 
   * - Integer: The offset in pixels.
   * 
   *   - Valid values: [8, 4096]
   * 
   *   - Unit: px
   * 
   * - Decimal: The ratio of the horizontal offset to the output video width.
   * 
   *   - Valid values: (0, 1)
   * 
   *   - Up to four decimal places are supported, such as 0.9999. Extra digits are automatically discarded.
   * 
   * @example
   * 10
   */
  dx?: string;
  /**
   * @remarks
   * The vertical offset of the image watermark relative to the output video. Default value: 0.
   * 
   * Values can be one of the following:
   * 
   * - Integer: The offset in pixels.
   * 
   *   - Valid values: [8, 4096]
   * 
   *   - Unit: px
   * 
   * - Decimal: The ratio of the vertical offset to the output video height.
   * 
   *   - Valid values: (0, 1)
   * 
   *   - Up to four decimal places are supported, such as 0.9999. Extra digits are automatically discarded.
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
   * The height of the image watermark on the output video. Values can be one of the following:
   * 
   * - Integer: The pixel height of the watermark image.
   * 
   *   - Valid values: [8, 4096]
   * 
   *   - Unit: px
   * 
   * - Decimal: The ratio of the watermark height to the output video height.
   * 
   *   - Valid values: (0, 1)
   * 
   *   - Up to four decimal places are supported, such as 0.9999. Extra digits are automatically discarded.
   * 
   * @example
   * 32
   */
  height?: string;
  /**
   * @remarks
   * The position of the watermark.
   * 
   * - Valid values: TopRight (top-right), TopLeft (top-left), BottomRight (bottom-right), and BottomLeft (bottom-left).
   * 
   * - Default value: TopRight.
   * 
   * @example
   * TopLeft
   */
  referPos?: string;
  /**
   * @remarks
   * The display time settings for a dynamic watermark.
   */
  timeline?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsTimeline;
  /**
   * @remarks
   * The width of the image watermark on the output video. Values can be one of the following:
   * 
   * - Integer: The pixel width of the watermark image.
   * 
   *   - Valid values: [8, 4096]
   * 
   *   - Unit: px
   * 
   * - Decimal: The ratio of the watermark width to the output video width.
   * 
   *   - Valid values: (0, 1)
   * 
   *   - Up to four decimal places are supported, such as 0.9999. Extra digits are automatically discarded.
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
   * Parameters to overwrite. If you specify these, they replace the corresponding parameters in the template.
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
   * The value of Media:
   * 
   * - If type is OSS, the value is a URL. The URL supports the OSS and HTTP protocols.
   * 
   * - If type is Media, the value is the media asset ID.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The type of the media object.
   * Valid values:
   * 
   * - OSS: An OSS file.
   * 
   * - Media: The ID of a media asset.
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
   * The encoding format of the file.
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
   * The file format of the caption.
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
   * Parameters to overwrite. If you specify these, they replace the corresponding parameters in the template.
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
   * Adjusts the font size based on the output video size. The default is false.
   * 
   * @example
   * false
   */
  adaptive?: string;
  /**
   * @remarks
   * The outline color.
   * Default: Black.
   * For more values, see BorderColor.
   * 
   * @example
   * #006400
   */
  borderColor?: string;
  /**
   * @remarks
   * The outline width.
   * 
   * - Default: 0
   * 
   * - Range: (0,4096]
   * 
   * @example
   * 0
   */
  borderWidth?: number;
  /**
   * @remarks
   * The watermark text. It does not need to be Base64 encoded. The string must be UTF-8 encoded.
   * 
   * @example
   * 测试水印
   */
  content?: string;
  /**
   * @remarks
   * The font transparency.
   * 
   * - Valid values: (0, 1]
   * 
   * - Default: 1.0
   * 
   * @example
   * 1.0
   */
  fontAlpha?: string;
  /**
   * @remarks
   * The color.
   * 
   * @example
   * #006400
   */
  fontColor?: string;
  /**
   * @remarks
   * The font. Default: SimSun.
   * 
   * @example
   * SimSun
   */
  fontName?: string;
  /**
   * @remarks
   * The font size.
   * 
   * - Default value: 16
   * 
   * - Valid values: (4, 120)
   * 
   * @example
   * 16
   */
  fontSize?: number;
  /**
   * @remarks
   * The left margin of the text.
   * 
   * - Default: 0
   * 
   * - Valid values: [0, 4096]
   * 
   * @example
   * 10
   */
  left?: string;
  /**
   * @remarks
   * The top margin of the text.
   * 
   * - Default: 0
   * 
   * - Valid values: [0, 4096]
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
   * Parameters to overwrite. If you specify these, they replace the corresponding parameters in the template.
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
   * The target loudness level.
   * 
   * @example
   * -6
   */
  integratedLoudnessTarget?: string;
  /**
   * @remarks
   * The loudness range.
   * 
   * @example
   * 8
   */
  loudnessRangeTarget?: string;
  /**
   * @remarks
   * The volume adjustment method.
   * 
   * @example
   * auto
   */
  method?: string;
  /**
   * @remarks
   * The true peak level.
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
   * - Valid values: [8, 1000]
   * 
   * - Unit: Kbps
   * 
   * - Default value: 128
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
   * The audio encoding profile. When Codec is AAC, valid values are aac_low, aac_he, aac_he_v2, aac_ld, and aac_eld.
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
   * The sample rate.
   * 
   * - Default value: 44100
   * 
   * - Valid values: 22050, 32000, 44100, 48000, and 96000.
   * 
   * - Unit: Hz
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  /**
   * @remarks
   * The volume control.
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
   * The segment duration.
   * 
   * @example
   * 10
   */
  duration?: string;
  /**
   * @remarks
   * The forced segment time points.
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
   * The method used to adjust the display aspect ratio. This parameter takes effect only when both Width and Height are specified. You can use it with LongShortMode.
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
   * Specifies whether to check the audio bitrate. IsCheckAudioBitrate and IsCheckAudioBitrateFail are mutually exclusive. IsCheckAudioBitrateFail has higher priority.
   * 
   * - true: Check the bitrate. If the input audio bitrate is lower than the output setting, transcode at the input bitrate.
   * 
   * - false: Do not check the bitrate.
   * 
   * Default value rules:
   * 
   * - Empty and the codec differs from the input source: false.
   * 
   * - Empty and the codec matches the input source: true.
   * 
   * @example
   * true
   */
  isCheckAudioBitrate?: string;
  /**
   * @remarks
   * Specifies whether to check the audio bitrate. IsCheckAudioBitrate and IsCheckAudioBitrateFail are mutually exclusive. This parameter has higher priority.
   * 
   * - true: Check the bitrate. If the input audio bitrate is lower than the output setting, return a failure.
   * 
   * - false (default): Do not check the bitrate.
   * 
   * @example
   * true
   */
  isCheckAudioBitrateFail?: string;
  /**
   * @remarks
   * Specifies whether to check the video resolution. IsCheckReso and IsCheckResoFail are mutually exclusive. IsCheckResoFail has higher priority.
   * 
   * - true: Check the resolution. If the input video resolution (width or height) is smaller than the output setting, transcode at the input resolution.
   * 
   * - false (default): Do not check the resolution.
   * 
   * @example
   * true
   */
  isCheckReso?: string;
  /**
   * @remarks
   * Specifies whether to check the video resolution. IsCheckReso and IsCheckResoFail are mutually exclusive. This parameter has higher priority.
   * 
   * - true: Check the resolution. If the input video resolution (width or height) is smaller than the output setting, return a failure.
   * 
   * - false (default): Do not check the resolution.
   * 
   * @example
   * true
   */
  isCheckResoFail?: string;
  /**
   * @remarks
   * Specifies whether to check the video bitrate. IsCheckVideoBitrate and IsCheckVideoBitrateFail are mutually exclusive. IsCheckVideoBitrateFail has higher priority.
   * 
   * - true: Check the bitrate. If the input video bitrate is lower than the output setting, transcode at the input bitrate.
   * 
   * - false (default): Do not check the bitrate.
   * 
   * @example
   * true
   */
  isCheckVideoBitrate?: string;
  /**
   * @remarks
   * Specifies whether to check the video bitrate. IsCheckVideoBitrate and IsCheckVideoBitrateFail are mutually exclusive. This parameter has higher priority.
   * 
   * - true: Check the bitrate. If the input video bitrate is lower than the output setting, return a failure.
   * 
   * - false (default): Do not check the bitrate.
   * 
   * @example
   * true
   */
  isCheckVideoBitrateFail?: string;
  /**
   * @remarks
   * The video transcoding mode. Valid values:
   * 
   * - onepass (default): Used for ABR. Encoding is faster than twopass.
   * 
   * - twopass: Used for VBR. Encoding is slower than onepass.
   * 
   * - CBR: Constant bitrate mode.
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
   * The maximum bitrate for adaptive bitrate streaming (ABR). This applies only to narrow-high 1. Valid values: [10, 50000]. Unit: Kbps.
   * 
   * @example
   * 6000
   */
  abrMax?: string;
  /**
   * @remarks
   * The average video bitrate.
   * 
   * - Valid values: [10, 50000].
   * 
   * - Unit: Kbps.
   * 
   * @example
   * 3000
   */
  bitrate?: string;
  /**
   * @remarks
   * The buffer size.
   * 
   * - Valid values: [1000, 128000]
   * 
   * - Default value: 6000
   * 
   * - Unit: Kb
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
   * The constant rate factor (CRF), which controls the trade-off between quality and bitrate.
   * 
   * - Valid values: [0, 51].
   * 
   * - Default values: 23 for H.264 and 26 for H.265.
   * 
   * If you set Crf, the Bitrate setting is ignored.
   * 
   * @example
   * 23
   */
  crf?: string;
  /**
   * @remarks
   * The video cropping method. Two options are available.
   * 
   * - Automatically detect and crop black bars. Set this to border.
   * 
   * - Custom cropping. Format: width:height:left:top. Example: 1280:800:0:140
   * 
   * @example
   * 1280:800:0:140
   */
  crop?: string;
  /**
   * @remarks
   * The frame rate.
   * 
   * - Valid values: (0, 60].
   * 
   * - If the frame rate of the input file exceeds 60, the system uses 60.
   * 
   * - Default value: The frame rate of the input file.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The maximum number of frames between keyframes.
   * 
   * - Valid values: [1, 1080000].
   * 
   * - Default value: 250.
   * 
   * @example
   * 250
   */
  gop?: string;
  /**
   * @remarks
   * The height.
   * 
   * - Valid values: [128, 4096].
   * 
   * - Unit: px.
   * 
   * - Default value: The original video height.
   * 
   * @example
   * 1080
   */
  height?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic rotation for portrait or landscape videos (also known as long-side/short-side mode).
   * 
   * @example
   * false
   */
  longShortMode?: string;
  /**
   * @remarks
   * The peak video bitrate. Valid values: [10, 50000]. Unit: Kbps.
   * 
   * @example
   * 9000
   */
  maxrate?: string;
  /**
   * @remarks
   * The padding configuration for black bars.
   * 
   * - Format: width:height:left:top.
   * 
   * - Example: 1280:800:0:140
   * 
   * @example
   * 1280:800:0:140
   */
  pad?: string;
  /**
   * @remarks
   * The video color format. Valid values include yuv420p and yuvj420p.
   * 
   * @example
   * yuv420p
   */
  pixFmt?: string;
  /**
   * @remarks
   * The video encoder preset. Only H.264 supports this parameter. Valid values: veryfast, fast, medium, slow, and slower. Default value: medium.
   * 
   * @example
   * medium
   */
  preset?: string;
  /**
   * @remarks
   * The encoding profile. Valid values: baseline, main, and high.
   * 
   * - baseline: For mobile devices.
   * 
   * - main: For standard-resolution devices.
   * 
   * - high: For high-resolution devices.
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
   * The width.
   * 
   * - Valid values: [128, 4096].
   * 
   * - Unit: px.
   * 
   * - Default value: The original video width.
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
   * The container format settings.
   */
  container?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsContainer;
  /**
   * @remarks
   * The multiplexing settings.
   */
  muxConfig?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfig;
  /**
   * @remarks
   * The conditional transcoding parameters.
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
   * Parameters to overwrite. If you specify these, they replace the corresponding parameters in the template.
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
   * The configuration for mixing multiple input streams.
   */
  combineConfigs?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigCombineConfigs[];
  /**
   * @remarks
   * The encryption configuration.
   */
  encryption?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigEncryption;
  /**
   * @remarks
   * The image watermark configuration.
   */
  imageWatermarks?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarks[];
  /**
   * @remarks
   * The configuration for burning in captions.
   */
  subtitles?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitles[];
  /**
   * @remarks
   * The text watermark configuration.
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
   * The ID of the pipeline.
   * 
   * @example
   * e37ebee5d98b4781897f6086e89f9c56
   */
  pipelineId?: string;
  /**
   * @remarks
   * The priority of the task. A larger value indicates a higher priority. The value can be an integer from 1 to 10.
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
   * The time the job was created.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the job finished.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The input group for the job. A single input creates a transcoding job. Multiple inputs create a media merging job.
   */
  inputGroup?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListInputGroup[];
  /**
   * @remarks
   * The sub-job ID.
   * 
   * @example
   * 7d6a7e0d4db2457a8d45ff5d43e1bf0a
   */
  jobId?: string;
  /**
   * @remarks
   * The index of the sub-job within the entire job.
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
   * The media information of the video generated by the job.
   */
  outFileMeta?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMeta;
  /**
   * @remarks
   * The output media configuration.
   */
  output?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutput;
  /**
   * @remarks
   * The parent job ID.
   * 
   * @example
   * 8b2198504dd340b7b3c9842a74fc9baa
   */
  parentJobId?: string;
  /**
   * @remarks
   * The transcoding processing configuration.
   */
  processConfig?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfig;
  /**
   * @remarks
   * The ID of the request to submit the job.
   * 
   * @example
   * 31E30781-9495-5E2D-A84D-759B0A01E262
   */
  requestId?: string;
  /**
   * @remarks
   * The scheduling information for the job.
   */
  scheduleConfig?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListScheduleConfig;
  /**
   * @remarks
   * The status of the transcoding job.
   * 
   * - Init: The job is submitted.
   * 
   * - Processing: The job is being transcoded.
   * 
   * - Success: The transcoding is successful.
   * 
   * - Fail: The transcoding failed.
   * 
   * - Deleted: The job is deleted.
   * 
   * @example
   * Init
   */
  status?: string;
  /**
   * @remarks
   * The result of the job submission.
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
   * User data.
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
   * The time when the job was created. The format is yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the job finished. The format is yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The input group for the job. A single input creates a transcoding job. Multiple inputs create a job to merge audio and video streams.
   */
  inputGroup?: SubmitTranscodeJobResponseBodyTranscodeParentJobInputGroup[];
  /**
   * @remarks
   * The number of sub-jobs.
   * 
   * @example
   * 1
   */
  jobCount?: number;
  /**
   * @remarks
   * The name of the job.
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
   * The ID of the parent job.
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
   * The ID of the request.
   * 
   * @example
   * 31E30781-9495-5E2D-A84D-759B0A01E262
   */
  requestId?: string;
  /**
   * @remarks
   * The job scheduling configuration.
   */
  scheduleConfig?: SubmitTranscodeJobResponseBodyTranscodeParentJobScheduleConfig;
  /**
   * @remarks
   * The status of the job. Success: At least one sub-job succeeded after all sub-jobs are complete. Fail: All sub-jobs failed.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The time when the job was submitted. The format is yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  submitTime?: string;
  /**
   * @remarks
   * The list of sub-jobs.
   */
  transcodeJobList?: SubmitTranscodeJobResponseBodyTranscodeParentJobTranscodeJobList[];
  /**
   * @remarks
   * The source of the job. Valid values: \\`API\\`, \\`WorkFlow\\`, and \\`Console\\`.
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

