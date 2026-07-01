// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTranscodeJobRequestInputGroup extends $dara.Model {
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
   * > You must add the OSS bucket in the URL to IMS [storage management](https://help.aliyun.com/document_detail/609918.html) before you use it.
   * 
   * - If Type is Media, this is a media asset ID.
   * 
   * This parameter is required.
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
   * The media value:
   * 
   * - If Type is OSS, this is a URL that supports the OSS or HTTP protocol.
   * 
   * > You must add the OSS bucket in the URL to IMS [storage management](https://help.aliyun.com/document_detail/609918.html) before you use it.
   * 
   * - If Type is Media, this is a media asset ID.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The output stream path:<br>
   * This parameter takes effect only when Type is Media. It lets you select a specific file from the media asset as the output.<br>
   * Valid placeholders:<br><br>
   * 
   * - {MediaId}: The media asset ID.
   * 
   * - {JobId}: The sub-job ID.
   * 
   * - {MediaBucket}: The bucket where the media asset resides.
   * 
   * - {ExtName}: The file extension. This is the output format specified in the transcoding template.
   * 
   * - {DestMd5}: The MD5 hash of the transcoded output file.
   * 
   * > 1. You must include both {MediaId} and {JobId} in this parameter.
   * >
   * > 2. The output bucket must be the same as the bucket where the media asset resides.
   * 
   * @example
   * oss://bucket/path/to/{MediaId}/{JobId}.mp4
   */
  outputUrl?: string;
  /**
   * @remarks
   * The media object type. Valid values:
   * 
   * - OSS: An OSS file.
   * 
   * - Media: A media asset ID.
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
   * 0 or exclude
   */
  audioIndex?: string;
  /**
   * @remarks
   * The duration of the input stream. Default: The video duration.
   * 
   * @example
   * 20.0
   */
  duration?: number;
  /**
   * @remarks
   * The start time of the input stream. Default: 0.
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

export class SubmitTranscodeJobRequestOutputGroupProcessConfigEncryption extends $dara.Model {
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
   * The encryption type. Valid values:
   * 
   * - PrivateEncryption: Alibaba Cloud proprietary cryptography.
   * 
   * - HLSEncryption: HLS standard encryption.
   * 
   * @example
   * PrivateEncryption
   */
  encryptType?: string;
  /**
   * @remarks
   * The key service type for standard encryption. Valid values:
   * 
   * - KMS
   * 
   * - Base64
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

export class SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline extends $dara.Model {
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

export class SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParams extends $dara.Model {
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
  file?: SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsFile;
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
  timeline?: SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline;
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
   * Parameters to overwrite. If you specify these, they replace the corresponding parameters in the template.
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
   * The subtitle file format.
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
   * Parameters to overwrite. If you specify these, they replace the corresponding parameters in the template.
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
   * Adjusts the font size based on the output video size. Valid values: true or false. Default: false.
   * 
   * @example
   * false
   */
  adaptive?: string;
  /**
   * @remarks
   * The outline color. Default: Black. For more values, see BorderColor.
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
   * - Valid values: (0, 4096]
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
   * Test watermark
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

export class SubmitTranscodeJobRequestOutputGroupProcessConfigTextWatermarks extends $dara.Model {
  /**
   * @remarks
   * Parameters to overwrite. If you specify these, they replace the corresponding parameters in the template.
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
   * The true peak volume.
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
   * The audio bitrate of the output file. Valid values: [8, 1000]. Unit: Kbps. Default value: 128.
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
   * The sample rate. Default value: 44100. Valid values: 22050, 32000, 44100, 48000, and 96000. Unit: Hz.
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  /**
   * @remarks
   * The volume control.
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
   * Default value:
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
   * Specifies whether to check the audio bitrate. IsCheckAudioBitrate and IsCheckAudioBitrateFail are mutually exclusive. IsCheckAudioBitrateFail has higher priority.
   * 
   * - true: Check the bitrate. If the input audio bitrate is lower than the output setting, return a failure.
   * 
   * - false: Do not check the bitrate.
   * 
   * Default value: false.
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
   * - false: Do not check the resolution.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckReso?: string;
  /**
   * @remarks
   * Specifies whether to check the video resolution. IsCheckReso and IsCheckResoFail are mutually exclusive. IsCheckResoFail has higher priority.
   * 
   * - true: Check the resolution. If the input video resolution (width or height) is smaller than the output setting, return a failure.
   * 
   * - false: Do not check the resolution.
   * 
   * Default value: false.
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
   * - false: Do not check the bitrate.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckVideoBitrate?: string;
  /**
   * @remarks
   * Specifies whether to check the video bitrate. IsCheckVideoBitrate and IsCheckVideoBitrateFail are mutually exclusive. IsCheckVideoBitrateFail has higher priority.
   * 
   * - true: Check the bitrate. If the input video bitrate is lower than the output setting, return a failure.
   * 
   * - false: Do not check the bitrate.
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
   * - onepass: Used for adaptive bitrate (ABR) streaming. Encoding is faster than twopass.
   * 
   * - twopass: Used for variable bitrate (VBR) streaming. Encoding is slower than onepass.
   * 
   * - CBR: Constant bitrate mode.
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
   * The maximum bitrate for adaptive bitrate streaming (ABR). This applies only to narrow-high 1. Valid values: [10, 50000]. Unit: Kbps.
   * 
   * @example
   * 6000
   */
  abrMax?: string;
  /**
   * @remarks
   * The average video bitrate. Valid values: [10, 50000]. Unit: Kbps.
   * 
   * @example
   * 3000
   */
  bitrate?: string;
  /**
   * @remarks
   * The buffer size. Valid values: [1000, 128000]. Default value: 6000. Unit: Kb.
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
   * The constant rate factor (CRF), which controls the trade-off between quality and bitrate. Valid values: [0, 51]. Default values: 23 for H.264 and 26 for H.265.
   * 
   * > If you set Crf, the Bitrate setting is ignored.
   * 
   * @example
   * 23
   */
  crf?: string;
  /**
   * @remarks
   * The video cropping method. Two options are available:
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
   * The frame rate. Valid values: (0, 60]. Default value: The frame rate of the input file.
   * 
   * > If the frame rate of the input file exceeds 60, the system uses 60.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The maximum number of frames between keyframes. Valid values: [1, 1080000]. Default value: 250.
   * 
   * @example
   * 250
   */
  gop?: string;
  /**
   * @remarks
   * The height. Valid values: [128, 4096]. Unit: px. Default value: The original video height.
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
   * The padding configuration for black bars. Format: width:height:left:top. Example: 1280:800:0:140
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
   * The width. Valid values: [128, 4096]. Unit: px. Default value: The original video width.
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
   * The container format settings.
   */
  container?: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsContainer;
  /**
   * @remarks
   * The multiplexing settings.
   */
  muxConfig?: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig;
  /**
   * @remarks
   * The conditional transcoding parameters.
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
   * Parameters to overwrite. If you specify these, they replace the corresponding parameters in the template.
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
   * The configuration for merging multiple inputs.
   */
  combineConfigs?: SubmitTranscodeJobRequestOutputGroupProcessConfigCombineConfigs[];
  /**
   * @remarks
   * The encryption configuration.
   */
  encryption?: SubmitTranscodeJobRequestOutputGroupProcessConfigEncryption;
  /**
   * @remarks
   * The image watermark configuration.
   */
  imageWatermarks?: SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarks[];
  /**
   * @remarks
   * The subtitle burn-in configuration.
   */
  subtitles?: SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitles[];
  /**
   * @remarks
   * The text watermark configuration.
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
   * The output media configuration.
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
   * The MPS queue ID.
   * 
   * @example
   * e37ebee5d98b4781897f6086e89f9c56
   */
  pipelineId?: string;
  /**
   * @remarks
   * The job priority. A larger number indicates a higher priority. Valid values: 1 to 10.
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
   * The idempotence key. Ensures request idempotence.
   * 
   * @example
   * ****12e8864746a0a398****
   */
  clientToken?: string;
  /**
   * @remarks
   * The input group for the job. A single input creates a transcoding job. Multiple inputs create a media merging job.
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
   * The output group for the job.
   * 
   * This parameter is required.
   * 
   * @example
   * user-data
   */
  outputGroup?: SubmitTranscodeJobRequestOutputGroup[];
  /**
   * @remarks
   * The job scheduling information.
   * 
   * @example
   * job-name
   */
  scheduleConfig?: SubmitTranscodeJobRequestScheduleConfig;
  /**
   * @remarks
   * Custom settings in JSON format. The length is limited to 512 bytes. Supports [custom webhook address configuration](https://help.aliyun.com/document_detail/451631.html).
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

