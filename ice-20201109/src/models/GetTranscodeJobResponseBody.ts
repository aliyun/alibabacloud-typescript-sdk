// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTranscodeJobResponseBodyTranscodeParentJobInputGroup extends $dara.Model {
  /**
   * @remarks
   * Media value:
   * 
   * - If Type is OSS, this field is a URL that supports OSS and HTTP protocols.
   * 
   * - If Type is Media, this field is a media asset ID.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * Media object type.
   * Valid values:
   * 
   * - OSS: OSS file.
   * 
   * - Media: Media asset ID.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupOutput extends $dara.Model {
  /**
   * @remarks
   * Media value:
   * 
   * - If Type is OSS, this field is a URL that supports OSS and HTTP protocols.
   * 
   * - If Type is Media, this field is a media asset ID.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * Output stream URL.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  outputUrl?: string;
  /**
   * @remarks
   * Media object type.
   * Valid values:
   * 
   * - OSS: OSS file.
   * 
   * - Media: Media asset ID.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigCombineConfigs extends $dara.Model {
  /**
   * @remarks
   * Audio stream index
   * 
   * This parameter is required.
   * 
   * @example
   * 0 or exclude
   */
  audioIndex?: string;
  /**
   * @remarks
   * Duration of the input stream. Default: video duration.
   * 
   * @example
   * 20.0
   */
  duration?: number;
  /**
   * @remarks
   * Start time of the input stream. Default: 0
   * 
   * @example
   * 0.0
   */
  start?: number;
  /**
   * @remarks
   * Video stream index
   * 
   * This parameter is required.
   * 
   * @example
   * 0 or exclude
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigEncryption extends $dara.Model {
  /**
   * @remarks
   * Ciphertext of the encryption key for standard encryption.
   * 
   * @example
   * MTYi00NDU0LTg5O****
   */
  cipherText?: string;
  /**
   * @remarks
   * Decryption service endpoint for standard encryption.
   * 
   * @example
   * https://sample.com/path?CipherText=MTYi00NDU0LTg5O****
   */
  decryptKeyUri?: string;
  /**
   * @remarks
   * Encryption type.
   * 
   * @example
   * PrivateEncryption
   */
  encryptType?: string;
  /**
   * @remarks
   * Key service type. Only KMS and Base64 are supported.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsFile extends $dara.Model {
  /**
   * @remarks
   * Media value:
   * 
   * - If Type is OSS, this field is a URL that supports OSS and HTTP protocols.
   * 
   * - If Type is Media, this field is a media asset ID.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * Media object type.
   * Valid values:
   * 
   * - OSS: OSS file.
   * 
   * - Media: Media asset ID.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline extends $dara.Model {
  /**
   * @remarks
   * Display duration in seconds or "ToEND".
   * 
   * @example
   * ToEND
   */
  duration?: string;
  /**
   * @remarks
   * Start time.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * Watermark position, x.
   * 
   * @example
   * 10
   */
  dx?: string;
  /**
   * @remarks
   * Watermark position, y.
   * 
   * @example
   * 10
   */
  dy?: string;
  /**
   * @remarks
   * Watermark image file.
   */
  file?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsFile;
  /**
   * @remarks
   * Height.
   * 
   * @example
   * 32
   */
  height?: string;
  /**
   * @remarks
   * Reference position: TopLeft, TopRight, BottomLeft, BottomRight. Default: TopLeft.
   * 
   * @example
   * TopLeft
   */
  referPos?: string;
  /**
   * @remarks
   * Display time settings.
   */
  timeline?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline;
  /**
   * @remarks
   * Width.
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
      file: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsFile,
      height: 'string',
      referPos: 'string',
      timeline: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline,
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarks extends $dara.Model {
  /**
   * @remarks
   * Override parameters. If specified, these parameters override the corresponding template parameters.
   */
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParams;
  /**
   * @remarks
   * Template ID.
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
      overwriteParams: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParams,
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParamsFile extends $dara.Model {
  /**
   * @remarks
   * Media value:
   * 
   * - If Type is OSS, this field is a URL that supports OSS and HTTP protocols.
   * 
   * - If Type is Media, this field is a media asset ID.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * Media object type.
   * Valid values:
   * 
   * - OSS: OSS file.
   * 
   * - Media: Media asset ID.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * File encoding format.
   * 
   * @example
   * UTF-8
   */
  charEnc?: string;
  /**
   * @remarks
   * Subtitle file.
   */
  file?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParamsFile;
  /**
   * @remarks
   * Subtitle file format.
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
      file: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParamsFile,
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitles extends $dara.Model {
  /**
   * @remarks
   * Override parameters. If specified, these parameters override the corresponding template parameters.
   */
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParams;
  /**
   * @remarks
   * Template ID.
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
      overwriteParams: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParams,
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarksOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * Adjust font size based on output video size. Valid values: true / false. Default: false.
   * 
   * @example
   * false
   */
  adaptive?: string;
  /**
   * @remarks
   * Border color.
   * 
   * @example
   * #006400
   */
  borderColor?: string;
  /**
   * @remarks
   * Border width.
   * 
   * @example
   * 0
   */
  borderWidth?: number;
  /**
   * @remarks
   * Watermark text. Do not Base64 encode. The string must be UTF-8 encoded.
   * 
   * @example
   * test watermark
   */
  content?: string;
  /**
   * @remarks
   * Transparency.
   * 
   * @example
   * 1.0
   */
  fontAlpha?: string;
  /**
   * @remarks
   * Color.
   * 
   * @example
   * #006400
   */
  fontColor?: string;
  /**
   * @remarks
   * Font.
   * 
   * @example
   * SimSun
   */
  fontName?: string;
  /**
   * @remarks
   * Font size.
   * 
   * @example
   * 16
   */
  fontSize?: number;
  /**
   * @remarks
   * Watermark position, distance from the left.
   * 
   * @example
   * 10
   */
  left?: string;
  /**
   * @remarks
   * Watermark position, distance from the top.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarks extends $dara.Model {
  /**
   * @remarks
   * Override parameters. If specified, these parameters override the corresponding template parameters.
   */
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarksOverwriteParams;
  /**
   * @remarks
   * Template ID.
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
      overwriteParams: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarksOverwriteParams,
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume extends $dara.Model {
  /**
   * @remarks
   * Target volume.
   * 
   * @example
   * -6
   */
  integratedLoudnessTarget?: string;
  /**
   * @remarks
   * Volume range.
   * 
   * @example
   * 8
   */
  loudnessRangeTarget?: string;
  /**
   * @remarks
   * Volume adjustment method.
   * 
   * @example
   * auto
   */
  method?: string;
  /**
   * @remarks
   * Peak volume.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudio extends $dara.Model {
  /**
   * @remarks
   * Audio bitrate of the output file.
   * 
   * - Valid range: [8, 1000]
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
   * Number of sound channels.
   * Default value: 2
   * 
   * @example
   * 2
   */
  channels?: string;
  /**
   * @remarks
   * Audio codec format: AAC, MP3, VORBIS, FLAC.
   * Default value: AAC
   * 
   * @example
   * AAC
   */
  codec?: string;
  /**
   * @remarks
   * Audio encoding preset.
   * When Codec is AAC, valid values are aac_low, aac_he, aac_he_v2, aac_ld, aac_eld.
   * 
   * @example
   * aac_low
   */
  profile?: string;
  /**
   * @remarks
   * Whether to remove the audio stream.
   * 
   * @example
   * false
   */
  remove?: string;
  /**
   * @remarks
   * Sample rate.
   * 
   * - Default value: 44100
   * 
   * - Supported values: 22050, 32000, 44100, 48000, 96000,
   * 
   * - Unit: Hz
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  /**
   * @remarks
   * Volume control.
   */
  volume?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume;
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
      volume: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume,
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsContainer extends $dara.Model {
  /**
   * @remarks
   * Container format.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment extends $dara.Model {
  /**
   * @remarks
   * Segment length.
   * 
   * @example
   * 10
   */
  duration?: string;
  /**
   * @remarks
   * Forced segmentation time points.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig extends $dara.Model {
  /**
   * @remarks
   * Segmentation settings.
   */
  segment?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment;
  static names(): { [key: string]: string } {
    return {
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segment: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment,
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsTransConfig extends $dara.Model {
  /**
   * @remarks
   * Resolution adjustment method. This parameter takes effect only when both Width and Height are specified. It can be used together with LongShortMode.
   * 
   * Valid values: rescale, crop, pad, none.
   * 
   * Default value: none.
   * 
   * @example
   * none
   */
  adjDarMethod?: string;
  /**
   * @remarks
   * Whether to check audio bitrate. IsCheckAudioBitrate and IsCheckAudioBitrateFail are mutually exclusive. IsCheckAudioBitrateFail takes precedence.
   * 
   * - true: Check. If the input audio bitrate is lower than the output setting, transcode using the input audio bitrate.
   * 
   * - false: Do not check.
   * 
   * Default value:
   * 
   * - If this parameter is empty and the codec differs from the input source: false.
   * 
   * - If this parameter is empty and the codec matches the input source: true.
   * 
   * @example
   * true
   */
  isCheckAudioBitrate?: string;
  /**
   * @remarks
   * Whether to check audio bitrate. IsCheckAudioBitrate and IsCheckAudioBitrateFail are mutually exclusive. This parameter takes precedence.
   * 
   * - true: Check. If the input audio bitrate is lower than the output setting, return a transcoding failure.
   * 
   * - false: Do not check.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckAudioBitrateFail?: string;
  /**
   * @remarks
   * Whether to check video resolution. IsCheckReso and IsCheckResoFail are mutually exclusive. IsCheckResoFail takes precedence.
   * 
   * - true: Check. If the input video resolution (width or height) is smaller than the output setting, transcode using the input video resolution.
   * 
   * - false: Do not check.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckReso?: string;
  /**
   * @remarks
   * Whether to check video resolution. IsCheckReso and IsCheckResoFail are mutually exclusive. This parameter takes precedence.
   * 
   * - true: Check. If the input video resolution (width or height) is smaller than the output setting, return a transcoding failure.
   * 
   * - false: Do not check.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckResoFail?: string;
  /**
   * @remarks
   * Whether to check video bitrate. IsCheckVideoBitrate and IsCheckVideoBitrateFail are mutually exclusive. IsCheckVideoBitrateFail takes precedence.
   * 
   * - true: Check. If the input video bitrate is lower than the output setting, transcode using the input video bitrate.
   * 
   * - false: Do not check.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckVideoBitrate?: string;
  /**
   * @remarks
   * Whether to check video bitrate. IsCheckVideoBitrate and IsCheckVideoBitrateFail are mutually exclusive. This parameter takes precedence.
   * 
   * - true: Check. If the input video bitrate is lower than the output setting, return a transcoding failure.
   * 
   * - false: Do not check.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckVideoBitrateFail?: string;
  /**
   * @remarks
   * Video transcoding mode. Valid values:
   * 
   * - onepass: generally used for ABR. Faster encoding than twopass.
   * 
   * - twopass: generally used for VBR. Slower encoding than onepass.
   * 
   * - CBR: constant bitrate mode.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsVideo extends $dara.Model {
  /**
   * @remarks
   * Maximum ABR bitrate (valid only for narrow-high 1)
   * 
   * - Valid range: [10, 50000],
   * 
   * - Unit: Kbps.
   * 
   * @example
   * 6000
   */
  abrMax?: string;
  /**
   * @remarks
   * Video average bitrate.
   * 
   * - Valid range: [10, 50000].
   * 
   * - Unit: Kbps.
   * 
   * @example
   * 3000
   */
  bitrate?: string;
  /**
   * @remarks
   * Buffer size
   * 
   * - Valid range: [1000, 128000]
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
   * Encoding format.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * Bitrate-quality control factor.
   * 
   * - Valid range: [0, 51].
   * 
   * - Default value: 23 for H.264, 26 for H.265.
   * 
   * - If Crf is set, the Bitrate setting is ignored.
   * 
   * @example
   * 23
   */
  crf?: string;
  /**
   * @remarks
   * Video cropping.
   * Two methods are supported.
   * Automatically detect and crop black bars by setting this parameter to "border".
   * Custom cropping in the format: width:height:left:top.
   * Example: 1280:800:0:140
   * 
   * @example
   * 1280:800:0:140
   */
  crop?: string;
  /**
   * @remarks
   * Frame rate.
   * 
   * - Valid range: (0, 60].
   * 
   * - If the input file frame rate exceeds 60, use 60.
   * 
   * - Default value: input file frame rate.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * Maximum number of frames between keyframes.
   * 
   * - Valid range: [1, 1080000].
   * 
   * - Default value: 250.
   * 
   * @example
   * 250
   */
  gop?: string;
  /**
   * @remarks
   * Height.
   * 
   * - Valid range: [128, 4096].
   * 
   * - Unit: px.
   * 
   * - Default value: original video height.
   * 
   * @example
   * 1080
   */
  height?: string;
  /**
   * @remarks
   * Whether to enable automatic rotation (long-short edge mode).
   * 
   * @example
   * false
   */
  longShortMode?: string;
  /**
   * @remarks
   * Peak video bitrate
   * 
   * - Valid range: [10, 50000]
   * 
   * - Unit: Kbps.
   * 
   * @example
   * 9000
   */
  maxrate?: string;
  /**
   * @remarks
   * Black bar padding parameters
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
   * Video color format.
   * Valid values: yuv420p, yuvj420p, and other standard color formats.
   * 
   * @example
   * yuv420p
   */
  pixFmt?: string;
  /**
   * @remarks
   * Video encoder preset. This parameter is supported only for H.264.
   * Supported values: veryfast, fast, medium, slow, slower.
   * Default value: medium.
   * 
   * @example
   * medium
   */
  preset?: string;
  /**
   * @remarks
   * Encoding profile.
   * Supported values: baseline, main, high.
   * 
   * - baseline: for mobile devices.
   * 
   * - main: for standard-resolution devices.
   * 
   * - high: for high-resolution devices.
   * 
   * Default value: high.
   * 
   * @example
   * Main
   */
  profile?: string;
  /**
   * @remarks
   * Whether to remove the video.
   * 
   * @example
   * false
   */
  remove?: string;
  /**
   * @remarks
   * Scan mode.
   * Supported values: interlaced, progressive.
   * 
   * @example
   * progressive
   */
  scanMode?: string;
  /**
   * @remarks
   * Width.
   * 
   * - Valid range: [128, 4096].
   * 
   * - Unit: px.
   * 
   * - Default value: original video width.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * Audio settings.
   */
  audio?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudio;
  /**
   * @remarks
   * Container format settings.
   */
  container?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsContainer;
  /**
   * @remarks
   * Muxing settings.
   */
  muxConfig?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig;
  /**
   * @remarks
   * Conditional transcoding parameters.
   */
  transConfig?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsTransConfig;
  /**
   * @remarks
   * Video settings.
   */
  video?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsVideo;
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
      audio: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudio,
      container: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsContainer,
      muxConfig: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig,
      transConfig: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsTransConfig,
      video: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsVideo,
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscode extends $dara.Model {
  /**
   * @remarks
   * Override parameters. If specified, these parameters override the corresponding template parameters.
   */
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParams;
  /**
   * @remarks
   * Template ID.
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
      overwriteParams: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParams,
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfig extends $dara.Model {
  /**
   * @remarks
   * Multi-input merging configuration
   */
  combineConfigs?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigCombineConfigs[];
  /**
   * @remarks
   * Encryption configuration.
   */
  encryption?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigEncryption;
  /**
   * @remarks
   * Image watermark configuration.
   */
  imageWatermarks?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarks[];
  /**
   * @remarks
   * Subtitle embedding configuration.
   */
  subtitles?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitles[];
  /**
   * @remarks
   * Text watermark configuration.
   */
  textWatermarks?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarks[];
  /**
   * @remarks
   * Transcoding configuration.
   */
  transcode?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscode;
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
      combineConfigs: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigCombineConfigs },
      encryption: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigEncryption,
      imageWatermarks: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarks },
      subtitles: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitles },
      textWatermarks: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarks },
      transcode: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscode,
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroup extends $dara.Model {
  /**
   * @remarks
   * Output media configuration.
   */
  output?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupOutput;
  /**
   * @remarks
   * Job processing configuration.
   */
  processConfig?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfig;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      processConfig: 'ProcessConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupOutput,
      processConfig: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfig,
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

export class GetTranscodeJobResponseBodyTranscodeParentJobScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * Pipeline ID.
   * 
   * @example
   * e37ebee5d98b4781897f6086e89f9c56
   */
  pipelineId?: string;
  /**
   * @remarks
   * Job priority. Higher numbers indicate higher priority. Valid range: 1–10.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListInputGroup extends $dara.Model {
  /**
   * @remarks
   * Media stream URL. Specify this parameter only when transcoding a media stream.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  inputUrl?: string;
  /**
   * @remarks
   * Media value:
   * 
   * - If Type is OSS, this field is a URL that supports OSS and HTTP protocols.
   * 
   * - If Type is Media, this field is a media asset ID.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * Media object type.
   * Valid values:
   * 
   * - OSS: OSS file.
   * 
   * - Media: Media asset ID.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaAudioStreamInfoList extends $dara.Model {
  /**
   * @remarks
   * Bitrate.
   * 
   * @example
   * 0.f
   */
  bitrate?: string;
  /**
   * @remarks
   * Channel layout.
   * 
   * @example
   * stereo
   */
  channelLayout?: string;
  /**
   * @remarks
   * Number of sound channels.
   * 
   * @example
   * 2
   */
  channels?: string;
  /**
   * @remarks
   * Encoding format name.
   * 
   * @example
   * AAC (Advanced Audio Coding)
   */
  codecLongName?: string;
  /**
   * @remarks
   * Encoding format.
   * 
   * @example
   * aac
   */
  codecName?: string;
  /**
   * @remarks
   * Codec tag.
   * 
   * @example
   * 0x000f
   */
  codecTag?: string;
  /**
   * @remarks
   * Codec tag name.
   * 
   * @example
   * [15][0][0][0]
   */
  codecTagString?: string;
  /**
   * @remarks
   * Codec time base.
   * 
   * @example
   * 1/44100
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * Duration (unit: seconds).
   * 
   * @example
   * 403.039989
   */
  duration?: string;
  /**
   * @remarks
   * Stream index.
   * 
   * @example
   * 1
   */
  index?: string;
  /**
   * @remarks
   * Language.
   * 
   * @example
   * cn
   */
  lang?: string;
  /**
   * @remarks
   * Sample format.
   * 
   * @example
   * fltp
   */
  sampleFmt?: string;
  /**
   * @remarks
   * Sample rate (unit: Hz).
   * 
   * @example
   * 44100
   */
  sampleRate?: string;
  /**
   * @remarks
   * Start time.
   * 
   * @example
   * 1.473556
   */
  startTime?: string;
  /**
   * @remarks
   * Time base.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaFileBasicInfo extends $dara.Model {
  /**
   * @remarks
   * Video bitrate.
   * 
   * @example
   * 888.563
   */
  bitrate?: string;
  /**
   * @remarks
   * Video duration (unit: seconds).
   * 
   * @example
   * 403.039999
   */
  duration?: string;
  /**
   * @remarks
   * File name.
   * 
   * @example
   * file.m3u8
   */
  fileName?: string;
  /**
   * @remarks
   * File size. Unit: Byte.
   * 
   * @example
   * 31737
   */
  fileSize?: string;
  /**
   * @remarks
   * File status.
   * 
   * @example
   * Normal
   */
  fileStatus?: string;
  /**
   * @remarks
   * File type. Valid values: source_file, transcode_file
   * 
   * @example
   * source_file
   */
  fileType?: string;
  /**
   * @remarks
   * File URL.
   * 
   * @example
   * http://bucket.oss-cn-shanghai.aliyuncs.com/path/to/file.m3u8
   */
  fileUrl?: string;
  /**
   * @remarks
   * Video format name.
   * 
   * @example
   * hls,applehttp
   */
  formatName?: string;
  /**
   * @remarks
   * Height.
   * 
   * @example
   * 478
   */
  height?: string;
  /**
   * @remarks
   * Media asset ID.
   * 
   * @example
   * 486c2890096871edba6f81848c016303
   */
  mediaId?: string;
  /**
   * @remarks
   * File region.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * Width.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaVideoStreamInfoList extends $dara.Model {
  /**
   * @remarks
   * Average frame rate.
   * 
   * @example
   * 25.0
   */
  avgFps?: string;
  /**
   * @remarks
   * Bitrate.
   * 
   * @example
   * 888.563
   */
  bitRate?: string;
  /**
   * @remarks
   * Encoding format name.
   * 
   * @example
   * H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10
   */
  codecLongName?: string;
  /**
   * @remarks
   * Encoding format.
   * 
   * @example
   * h264
   */
  codecName?: string;
  /**
   * @remarks
   * Codec tag.
   * 
   * @example
   * 0x001b
   */
  codecTag?: string;
  /**
   * @remarks
   * Codec tag string.
   * 
   * @example
   * [27][0][0][0]
   */
  codecTagString?: string;
  /**
   * @remarks
   * Codec time base.
   * 
   * @example
   * 1/50
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * Display aspect ratio.
   * 
   * @example
   * 16:9
   */
  dar?: string;
  /**
   * @remarks
   * Duration (unit: seconds).
   * 
   * @example
   * 403.039989
   */
  duration?: string;
  /**
   * @remarks
   * Frame rate.
   * 
   * @example
   * 25.0
   */
  fps?: string;
  /**
   * @remarks
   * Whether B-frames exist.
   * Valid values:
   * 
   * - 0: No B-frames,
   * 
   * - 1: One B-frame,
   * 
   * - 2: Multiple consecutive B-frames.
   * 
   * @example
   * 2
   */
  hasBFrames?: string;
  /**
   * @remarks
   * Height.
   * 
   * @example
   * 478
   */
  height?: string;
  /**
   * @remarks
   * Stream index.
   * 
   * @example
   * 0
   */
  index?: string;
  /**
   * @remarks
   * Language.
   * 
   * @example
   * cn
   */
  lang?: string;
  /**
   * @remarks
   * Encoding level.
   * 
   * @example
   * 31
   */
  level?: string;
  /**
   * @remarks
   * Total number of frames.
   * 
   * @example
   * 10040
   */
  numFrames?: string;
  /**
   * @remarks
   * Color storage format.
   * 
   * @example
   * yuv420p
   */
  pixFmt?: string;
  /**
   * @remarks
   * Encoder preset.
   * 
   * @example
   * High
   */
  profile?: string;
  /**
   * @remarks
   * Video rotation angle.
   * Valid values: 0, 90, 180, 270.
   * Default value: 0
   * 
   * @example
   * 0
   */
  rotate?: string;
  /**
   * @remarks
   * Sample aspect ratio.
   * 
   * @example
   * 478:477
   */
  sar?: string;
  /**
   * @remarks
   * Start time.
   * 
   * @example
   * 1.473556
   */
  startTime?: string;
  /**
   * @remarks
   * Time base.
   * 
   * @example
   * 1/90000
   */
  timeBase?: string;
  /**
   * @remarks
   * Width.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMeta extends $dara.Model {
  /**
   * @remarks
   * Audio stream information.
   */
  audioStreamInfoList?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaAudioStreamInfoList[];
  /**
   * @remarks
   * Basic file information.
   */
  fileBasicInfo?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaFileBasicInfo;
  /**
   * @remarks
   * Video stream information.
   */
  videoStreamInfoList?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaVideoStreamInfoList[];
  static names(): { [key: string]: string } {
    return {
      audioStreamInfoList: 'AudioStreamInfoList',
      fileBasicInfo: 'FileBasicInfo',
      videoStreamInfoList: 'VideoStreamInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamInfoList: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaAudioStreamInfoList },
      fileBasicInfo: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaFileBasicInfo,
      videoStreamInfoList: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaVideoStreamInfoList },
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutput extends $dara.Model {
  /**
   * @remarks
   * Media value:
   * 
   * - If Type is OSS, this field is a URL that supports OSS and HTTP protocols.
   * 
   * - If Type is Media, this field is a media asset ID.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * Transcoded stream URL. Specify this parameter only when outputting to a media stream.
   * 
   * @example
   * oss://bucket/path/to/{MediaId}/{JobId}.mp4
   */
  outputUrl?: string;
  /**
   * @remarks
   * Media object type.
   * Valid values:
   * 
   * - OSS: OSS file.
   * 
   * - Media: Media asset ID.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigCombineConfigs extends $dara.Model {
  /**
   * @remarks
   * Audio stream index
   * 
   * This parameter is required.
   * 
   * @example
   * 0 or exclude
   */
  audioIndex?: string;
  /**
   * @remarks
   * Duration of the input stream. Default: video duration.
   * 
   * @example
   * 20.0
   */
  duration?: number;
  /**
   * @remarks
   * Start time of the input stream. Default: 0
   * 
   * @example
   * 0.0
   */
  start?: number;
  /**
   * @remarks
   * Video stream index
   * 
   * This parameter is required.
   * 
   * @example
   * 0 or exclude
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigEncryption extends $dara.Model {
  /**
   * @remarks
   * Ciphertext of the encryption key for standard encryption.
   * 
   * @example
   * MTYi00NDU0LTg5O****
   */
  cipherText?: string;
  /**
   * @remarks
   * Decryption service endpoint for standard encryption.
   * 
   * @example
   * https://sample.com/path?CipherText=MTYi00NDU0LTg5O****
   */
  decryptKeyUri?: string;
  /**
   * @remarks
   * Encryption type.
   * 
   * @example
   * PrivateEncryption
   */
  encryptType?: string;
  /**
   * @remarks
   * Key service type. Only KMS and Base64 are supported.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsFile extends $dara.Model {
  /**
   * @remarks
   * Media value:
   * 
   * - If Type is OSS, this field is a URL that supports OSS and HTTP protocols.
   * 
   * - If Type is Media, this field is a media asset ID.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * Media object type.
   * Valid values:
   * 
   * - OSS: OSS file.
   * 
   * - Media: Media asset ID.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsTimeline extends $dara.Model {
  /**
   * @remarks
   * Display duration in seconds or "ToEND".
   * 
   * @example
   * ToEND
   */
  duration?: string;
  /**
   * @remarks
   * Start time.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * Watermark position, x.
   * 
   * @example
   * 10
   */
  dx?: string;
  /**
   * @remarks
   * Watermark position, y.
   * 
   * @example
   * 10
   */
  dy?: string;
  /**
   * @remarks
   * Watermark image file.
   */
  file?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsFile;
  /**
   * @remarks
   * The height of the image watermark.
   * 
   * @example
   * 32
   */
  height?: string;
  /**
   * @remarks
   * Reference position: TopLeft, TopRight, BottomLeft, BottomRight.<br>
   * Default value: TopLeft.<br>
   * 
   * @example
   * TopLeft
   */
  referPos?: string;
  /**
   * @remarks
   * Display time settings.
   */
  timeline?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsTimeline;
  /**
   * @remarks
   * Width.
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
      file: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsFile,
      height: 'string',
      referPos: 'string',
      timeline: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsTimeline,
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarks extends $dara.Model {
  /**
   * @remarks
   * Override parameters. If specified, these parameters override the corresponding template parameters.
   */
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParams;
  /**
   * @remarks
   * Template ID.
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
      overwriteParams: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParams,
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParamsFile extends $dara.Model {
  /**
   * @remarks
   * Media value:
   * 
   * - If Type is OSS, this field is a URL that supports OSS and HTTP protocols.
   * 
   * - If Type is Media, this field is a media asset ID.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * Media object type.
   * Valid values:
   * 
   * - OSS: OSS file.
   * 
   * - Media: Media asset ID.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * File encoding format.
   * 
   * @example
   * UTF-8
   */
  charEnc?: string;
  /**
   * @remarks
   * Subtitle file.
   */
  file?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParamsFile;
  /**
   * @remarks
   * Subtitle file format.
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
      file: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParamsFile,
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitles extends $dara.Model {
  /**
   * @remarks
   * Override parameters. If specified, these parameters override the corresponding template parameters.
   */
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParams;
  /**
   * @remarks
   * Template ID
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
      overwriteParams: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParams,
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarksOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * Adjust font size based on output video size. Valid values: true / false. Default: false.
   * 
   * @example
   * false
   */
  adaptive?: string;
  /**
   * @remarks
   * Border color.
   * 
   * @example
   * #006400
   */
  borderColor?: string;
  /**
   * @remarks
   * Border width.
   * 
   * @example
   * 0
   */
  borderWidth?: number;
  /**
   * @remarks
   * Watermark text. Do not Base64 encode. The string must be UTF-8 encoded.
   * 
   * @example
   * Test watermark
   */
  content?: string;
  /**
   * @remarks
   * Transparency.
   * 
   * @example
   * 1.0
   */
  fontAlpha?: string;
  /**
   * @remarks
   * Color.
   * 
   * @example
   * #006400
   */
  fontColor?: string;
  /**
   * @remarks
   * Font.
   * 
   * @example
   * SimSun
   */
  fontName?: string;
  /**
   * @remarks
   * Font size.
   * 
   * @example
   * 16
   */
  fontSize?: number;
  /**
   * @remarks
   * Watermark position, distance from the left.
   * 
   * @example
   * 10
   */
  left?: string;
  /**
   * @remarks
   * Watermark position, distance from the top.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarks extends $dara.Model {
  /**
   * @remarks
   * Override parameters. If specified, these parameters override the corresponding template parameters.
   */
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarksOverwriteParams;
  /**
   * @remarks
   * Template ID.
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
      overwriteParams: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarksOverwriteParams,
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudioVolume extends $dara.Model {
  /**
   * @remarks
   * Target volume.
   * 
   * @example
   * -6
   */
  integratedLoudnessTarget?: string;
  /**
   * @remarks
   * Volume range.
   * 
   * @example
   * 8
   */
  loudnessRangeTarget?: string;
  /**
   * @remarks
   * Volume adjustment method.
   * 
   * @example
   * auto
   */
  method?: string;
  /**
   * @remarks
   * Peak volume.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudio extends $dara.Model {
  /**
   * @remarks
   * Audio bitrate of the output file.
   * 
   * - Valid range: [8, 1000]
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
   * Number of sound channels.
   * Default value: 2
   * 
   * @example
   * 2
   */
  channels?: string;
  /**
   * @remarks
   * Audio codec format: AAC, MP3, VORBIS, FLAC.
   * Default value: AAC
   * 
   * Default value: AAC.
   * 
   * @example
   * AAC
   */
  codec?: string;
  /**
   * @remarks
   * Audio encoding preset.
   * When Codec is AAC, valid values are aac_low, aac_he, aac_he_v2, aac_ld, aac_eld.
   * 
   * @example
   * aac_low
   */
  profile?: string;
  /**
   * @remarks
   * Whether to remove the audio stream.
   * 
   * @example
   * false
   */
  remove?: string;
  /**
   * @remarks
   * Sample rate.
   * 
   * - Supported values: 22050, 32000, 44100, 48000, 96000,
   * 
   * - Unit: Hz
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  /**
   * @remarks
   * Volume control.
   */
  volume?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudioVolume;
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
      volume: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudioVolume,
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsContainer extends $dara.Model {
  /**
   * @remarks
   * Container format.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfigSegment extends $dara.Model {
  /**
   * @remarks
   * Segment length.
   * 
   * @example
   * 10
   */
  duration?: string;
  /**
   * @remarks
   * Forced segmentation time points.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfig extends $dara.Model {
  /**
   * @remarks
   * Segmentation settings.
   */
  segment?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfigSegment;
  static names(): { [key: string]: string } {
    return {
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segment: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfigSegment,
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsTransConfig extends $dara.Model {
  /**
   * @remarks
   * Resolution adjustment method. This parameter takes effect only when both Width and Height are specified. It can be used together with LongShortMode.
   * 
   * Valid values: rescale, crop, pad, none.
   * 
   * Default value: none.
   * 
   * Example: See how to set resolution.
   * 
   * @example
   * none
   */
  adjDarMethod?: string;
  /**
   * @remarks
   * Whether to check audio bitrate. IsCheckAudioBitrate and IsCheckAudioBitrateFail are mutually exclusive. IsCheckAudioBitrateFail takes precedence.
   * 
   * - true: Check. If the input audio bitrate is lower than the output setting, transcode using the input audio bitrate.
   * 
   * - false: Do not check.
   * 
   * Default value:
   * 
   * - If this parameter is empty and the codec differs from the input source: false.
   * 
   * - If this parameter is empty and the codec matches the input source: true.
   * 
   * @example
   * true
   */
  isCheckAudioBitrate?: string;
  /**
   * @remarks
   * Whether to check audio bitrate. IsCheckAudioBitrate and IsCheckAudioBitrateFail are mutually exclusive. This parameter takes precedence.
   * 
   * - true: Check. If the input audio bitrate is lower than the output setting, return a transcoding failure.
   * 
   * - false: Do not check.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckAudioBitrateFail?: string;
  /**
   * @remarks
   * Whether to check video resolution. IsCheckReso and IsCheckResoFail are mutually exclusive. IsCheckResoFail takes precedence.
   * 
   * - true: Check. If the input video resolution (width or height) is smaller than the output setting, transcode using the input video resolution.
   * 
   * - false: Do not check.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckReso?: string;
  /**
   * @remarks
   * Whether to check video resolution. IsCheckReso and IsCheckResoFail are mutually exclusive. This parameter takes precedence.
   * 
   * - true: Check. If the input video resolution (width or height) is smaller than the output setting, return a transcoding failure.
   * 
   * - false: Do not check.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckResoFail?: string;
  /**
   * @remarks
   * Whether to check video bitrate. IsCheckVideoBitrate and IsCheckVideoBitrateFail are mutually exclusive. IsCheckVideoBitrateFail takes precedence.
   * 
   * - true: Check. If the input video bitrate is lower than the output setting, transcode using the input video bitrate.
   * 
   * - false: Do not check.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckVideoBitrate?: string;
  /**
   * @remarks
   * Whether to check video bitrate. IsCheckVideoBitrate and IsCheckVideoBitrateFail are mutually exclusive. This parameter takes precedence.
   * 
   * - true: Check. If the input video bitrate is lower than the output setting, return a transcoding failure.
   * 
   * - false: Do not check.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckVideoBitrateFail?: string;
  /**
   * @remarks
   * Video transcoding mode. Valid values:
   * 
   * - onepass: generally used for ABR. Faster encoding than twopass.
   * 
   * - twopass: generally used for VBR. Slower encoding than onepass.
   * 
   * - CBR: constant bitrate mode.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsVideo extends $dara.Model {
  /**
   * @remarks
   * Maximum ABR bitrate (valid only for narrow-high 1):
   * 
   * - Valid range: [10, 50000].
   * 
   * - Unit: Kbps.
   * 
   * @example
   * 6000
   */
  abrMax?: string;
  /**
   * @remarks
   * Video average bitrate.
   * 
   * - Valid range: [10, 50000].
   * 
   * - Unit: Kbps.
   * 
   * @example
   * 3000
   */
  bitrate?: string;
  /**
   * @remarks
   * Buffer size:
   * 
   * - Valid range: [1000, 128000].
   * 
   * - Default value: 6000.
   * 
   * - Unit: Kb.
   * 
   * @example
   * 6000
   */
  bufsize?: string;
  /**
   * @remarks
   * Encoding format.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * Bitrate-quality control factor.
   * 
   * - Valid range: [0, 51].
   * 
   * - Default value: 23 for H.264, 26 for H.265.
   * 
   * If Crf is set, the Bitrate setting is ignored.
   * 
   * @example
   * 23
   */
  crf?: string;
  /**
   * @remarks
   * Video cropping. Two methods are supported:
   * 
   * - Automatically detect and crop black bars by setting this parameter to "border".
   * 
   * - Custom cropping in the format: width:height:left:top.
   * 
   * @example
   * 1280:800:0:140
   */
  crop?: string;
  /**
   * @remarks
   * Frame rate.
   * 
   * - Valid range: (0, 60].
   *   If the input file frame rate exceeds 60, use 60.
   * 
   * - Default value: input file frame rate.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * Maximum number of frames between keyframes.
   * 
   * - Valid range: [1, 1080000].
   * 
   * - Default value: 250.
   * 
   * @example
   * 250
   */
  gop?: string;
  /**
   * @remarks
   * Height.
   * 
   * - Valid range: [128, 4096].
   * 
   * - Unit: px.
   * 
   * Default value: original video height.
   * 
   * @example
   * 1080
   */
  height?: string;
  /**
   * @remarks
   * Whether to enable automatic rotation (long-short edge mode).
   * 
   * @example
   * false
   */
  longShortMode?: string;
  /**
   * @remarks
   * Peak video bitrate:
   * 
   * - Valid range: [10, 50000].
   * 
   * - Unit: Kbps.
   * 
   * @example
   * 9000
   */
  maxrate?: string;
  /**
   * @remarks
   * Add black bars to the video in the format: width:height:left:top.
   * 
   * @example
   * 1280:800:0:140
   */
  pad?: string;
  /**
   * @remarks
   * Video color format.
   * Valid values: yuv420p, yuvj420p, and other standard color formats.
   * 
   * @example
   * yuv420p
   */
  pixFmt?: string;
  /**
   * @remarks
   * Video encoder preset. This parameter is supported only for H.264.
   * Supported values: veryfast, fast, medium, slow, slower.
   * Default value: medium.
   * 
   * Default value: medium.
   * 
   * @example
   * medium
   */
  preset?: string;
  /**
   * @remarks
   * Encoding profile.
   * Supported values: baseline, main, high.
   * 
   * - baseline: for mobile devices.
   * 
   * - main: for standard-resolution devices.
   * 
   * - high: for high-resolution devices.
   * 
   * Default value: high.
   * 
   * @example
   * Main
   */
  profile?: string;
  /**
   * @remarks
   * Whether to remove the video.
   * 
   * @example
   * false
   */
  remove?: string;
  /**
   * @remarks
   * Scan mode.
   * Supported values: interlaced, progressive.
   * 
   * @example
   * progressive
   */
  scanMode?: string;
  /**
   * @remarks
   * Width.
   * 
   * - Valid range: [128, 4096].
   * 
   * - Unit: px.
   * 
   * Default value: original video width.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * Audio settings.
   */
  audio?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudio;
  /**
   * @remarks
   * Container format settings.
   */
  container?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsContainer;
  /**
   * @remarks
   * Muxing settings.
   */
  muxConfig?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfig;
  tags?: { [key: string]: string };
  /**
   * @remarks
   * Conditional transcoding parameters.
   */
  transConfig?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsTransConfig;
  /**
   * @remarks
   * Video settings.
   */
  video?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      muxConfig: 'MuxConfig',
      tags: 'Tags',
      transConfig: 'TransConfig',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudio,
      container: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsContainer,
      muxConfig: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfig,
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      transConfig: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsTransConfig,
      video: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsVideo,
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
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscode extends $dara.Model {
  /**
   * @remarks
   * Override parameters. If specified, these parameters override the corresponding template parameters.
   */
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParams;
  /**
   * @remarks
   * Template ID.
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
      overwriteParams: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParams,
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfig extends $dara.Model {
  /**
   * @remarks
   * Multi-input merging configuration
   */
  combineConfigs?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigCombineConfigs[];
  /**
   * @remarks
   * Encryption configuration.
   */
  encryption?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigEncryption;
  /**
   * @remarks
   * Image watermark configuration.
   */
  imageWatermarks?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarks[];
  /**
   * @remarks
   * Whether to inherit tags from the input stream.
   * This parameter does not take effect if the input is not a media asset.
   * Default value: false
   * 
   * @example
   * true
   */
  isInheritTags?: boolean;
  /**
   * @remarks
   * Subtitle embedding configuration.
   */
  subtitles?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitles[];
  /**
   * @remarks
   * Text watermark configuration.
   */
  textWatermarks?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarks[];
  /**
   * @remarks
   * Transcoding configuration.
   */
  transcode?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscode;
  static names(): { [key: string]: string } {
    return {
      combineConfigs: 'CombineConfigs',
      encryption: 'Encryption',
      imageWatermarks: 'ImageWatermarks',
      isInheritTags: 'IsInheritTags',
      subtitles: 'Subtitles',
      textWatermarks: 'TextWatermarks',
      transcode: 'Transcode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combineConfigs: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigCombineConfigs },
      encryption: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigEncryption,
      imageWatermarks: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarks },
      isInheritTags: 'boolean',
      subtitles: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitles },
      textWatermarks: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarks },
      transcode: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscode,
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * Pipeline ID.
   * 
   * @example
   * e37ebee5d98b4781897f6086e89f9c56
   */
  pipelineId?: string;
  /**
   * @remarks
   * Job priority. Higher numbers indicate higher priority. Valid range: 1–10.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobList extends $dara.Model {
  /**
   * @remarks
   * Job creation time.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  createTime?: string;
  /**
   * @remarks
   * Job completion time.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  finishTime?: string;
  /**
   * @remarks
   * Job input group. A single input represents a transcoding job. Multiple inputs represent an audio-video merging job.
   */
  inputGroup?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListInputGroup[];
  /**
   * @remarks
   * Sub-job ID.
   * 
   * @example
   * 7d6a7e0d4db2457a8d45ff5d43e1bf0a
   */
  jobId?: string;
  /**
   * @remarks
   * Index of the sub-job within the entire job.
   * 
   * @example
   * 0
   */
  jobIndex?: number;
  /**
   * @remarks
   * Job name.
   * 
   * @example
   * transcode-job
   */
  name?: string;
  /**
   * @remarks
   * Generated video media information.
   */
  outFileMeta?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMeta;
  /**
   * @remarks
   * Output media configuration.
   */
  output?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutput;
  /**
   * @remarks
   * Parent job ID.
   * 
   * @example
   * 8b2198504dd340b7b3c9842a74fc9baa
   */
  parentJobId?: string;
  /**
   * @remarks
   * Transcoding processing configuration.
   */
  processConfig?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfig;
  /**
   * @remarks
   * Request ID at job submission.
   * 
   * @example
   * 31E30781-9495-5E2D-A84D-759B0A01E262
   */
  requestId?: string;
  /**
   * @remarks
   * Job scheduling information.
   */
  scheduleConfig?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListScheduleConfig;
  /**
   * @remarks
   * Transcoding job status
   * 
   * - Init: Submitted.
   * 
   * - Processing: Transcoding.
   * 
   * - Success: Transcoding succeeded.
   * 
   * - Fail: Transcoding failed.
   * 
   * - Deleted: Deleted.
   * 
   * @example
   * Init
   */
  status?: string;
  /**
   * @remarks
   * Job submission result.
   * 
   * @example
   * {}
   */
  submitResultJson?: { [key: string]: any };
  /**
   * @remarks
   * Job submission time.
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
      inputGroup: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListInputGroup },
      jobId: 'string',
      jobIndex: 'number',
      name: 'string',
      outFileMeta: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMeta,
      output: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutput,
      parentJobId: 'string',
      processConfig: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfig,
      requestId: 'string',
      scheduleConfig: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListScheduleConfig,
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

export class GetTranscodeJobResponseBodyTranscodeParentJob extends $dara.Model {
  /**
   * @remarks
   * Job creation time. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  createTime?: string;
  /**
   * @remarks
   * Job completion time. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  finishTime?: string;
  /**
   * @remarks
   * Job input group. A single input represents a transcoding job. Multiple inputs represent an audio-video merging job.
   */
  inputGroup?: GetTranscodeJobResponseBodyTranscodeParentJobInputGroup[];
  /**
   * @remarks
   * Number of sub-jobs.
   * 
   * @example
   * 1
   */
  jobCount?: number;
  /**
   * @remarks
   * Job name.
   * 
   * @example
   * transcode-job
   */
  name?: string;
  /**
   * @remarks
   * Job output group.
   */
  outputGroup?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroup[];
  /**
   * @remarks
   * Parent job ID.
   * 
   * @example
   * 8b2198504dd340b7b3c9842a74fc9baa
   */
  parentJobId?: string;
  /**
   * @remarks
   * Job completion percentage.
   * 
   * @example
   * 0
   */
  percent?: number;
  /**
   * @remarks
   * Request ID at job submission.
   * 
   * @example
   * 31E30781-9495-5E2D-A84D-759B0A01E262
   */
  requestId?: string;
  /**
   * @remarks
   * Job scheduling configuration.
   */
  scheduleConfig?: GetTranscodeJobResponseBodyTranscodeParentJobScheduleConfig;
  /**
   * @remarks
   * Job status.
   * 
   * - Success: All sub-jobs completed successfully.
   * 
   * - Fail: All sub-jobs failed.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * Job submission time. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  submitTime?: string;
  /**
   * @remarks
   * List of sub-jobs.
   */
  transcodeJobList?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobList[];
  /**
   * @remarks
   * Job source.
   * 
   * - API: API
   * 
   * - WorkFlow: Workflow
   * 
   * - Console: Console
   * 
   * @example
   * API
   */
  triggerSource?: string;
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
      inputGroup: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobInputGroup },
      jobCount: 'number',
      name: 'string',
      outputGroup: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobOutputGroup },
      parentJobId: 'string',
      percent: 'number',
      requestId: 'string',
      scheduleConfig: GetTranscodeJobResponseBodyTranscodeParentJobScheduleConfig,
      status: 'string',
      submitTime: 'string',
      transcodeJobList: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobList },
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

export class GetTranscodeJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 9EDC30DC-0050-5459-B788-F761B2BE359B
   */
  requestId?: string;
  /**
   * @remarks
   * TranscodeParentJobWithSubJobDTO
   */
  transcodeParentJob?: GetTranscodeJobResponseBodyTranscodeParentJob;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transcodeParentJob: 'TranscodeParentJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transcodeParentJob: GetTranscodeJobResponseBodyTranscodeParentJob,
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

