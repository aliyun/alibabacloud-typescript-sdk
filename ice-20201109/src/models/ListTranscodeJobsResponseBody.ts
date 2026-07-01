// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTranscodeJobsResponseBodyJobsInputGroup extends $dara.Model {
  /**
   * @remarks
   * The URL of the media stream. This parameter is required only when you transcode a media stream.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  inputUrl?: string;
  /**
   * @remarks
   * The media information. The value of this parameter varies based on the value of Type.
   * 
   * - If Type is set to `OSS`, the value of this parameter must be an OSS URL. Both the `oss://` and `http(s)://` protocols are supported.
   * 
   * - If Type is set to `Media`, the value of this parameter must be a media ID.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The type of the media asset. Valid values:
   * 
   * - `OSS`: an OSS file.
   * 
   * - `Media`: a media asset ID.
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupOutput extends $dara.Model {
  /**
   * @remarks
   * The media information. The value of this parameter varies based on the value of Type.
   * 
   * - If Type is set to `OSS`, the value of this parameter must be an OSS URL. Both the `oss://` and `http(s)://` protocols are supported.
   * 
   * - If Type is set to `Media`, the value of this parameter must be a media ID.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The URL of the output stream. This parameter is required only when you transcode a media stream.
   * 
   * @example
   * oss://bucket/path/to/{MediaId}/{JobId}.mp4
   */
  outputUrl?: string;
  /**
   * @remarks
   * The type of the media asset. Valid values:
   * 
   * - `OSS`: an OSS file.
   * 
   * - `Media`: a media asset ID.
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigCombineConfigs extends $dara.Model {
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
   * The duration of the input stream. The default is the duration of the video.
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigEncryption extends $dara.Model {
  /**
   * @remarks
   * The key ciphertext for standard encryption.
   * 
   * @example
   * MTYi00NDU0LTg5O****
   */
  cipherText?: string;
  /**
   * @remarks
   * The URL of the decryption service for standard encryption.
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
  static names(): { [key: string]: string } {
    return {
      cipherText: 'CipherText',
      decryptKeyUri: 'DecryptKeyUri',
      encryptType: 'EncryptType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cipherText: 'string',
      decryptKeyUri: 'string',
      encryptType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarksOverwriteParamsFile extends $dara.Model {
  /**
   * @remarks
   * The media information. The value of this parameter varies based on the value of Type.
   * 
   * - If Type is set to `OSS`, the value of this parameter must be an OSS URL. Both the `oss://` and `http(s)://` protocols are supported.
   * 
   * - If Type is set to `Media`, the value of this parameter must be a media ID.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The type of the media asset. Valid values:
   * 
   * - `OSS`: an OSS file.
   * 
   * - `Media`: a media asset ID.
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline extends $dara.Model {
  /**
   * @remarks
   * The display duration in seconds. You can also set the value to `ToEND`.
   * 
   * @example
   * ToEND
   */
  duration?: string;
  /**
   * @remarks
   * The start time.
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarksOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * The horizontal offset of the watermark.
   * 
   * @example
   * 10
   */
  dx?: string;
  /**
   * @remarks
   * The vertical offset of the watermark.
   * 
   * @example
   * 10
   */
  dy?: string;
  /**
   * @remarks
   * The watermark image file.
   */
  file?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarksOverwriteParamsFile;
  /**
   * @remarks
   * The height of the watermark.
   * 
   * @example
   * 32
   */
  height?: string;
  /**
   * @remarks
   * The reference position. Valid values: `TopLeft`, `TopRight`, `BottomLeft`, and `BottomRight`. Default value: `TopLeft`.
   * 
   * @example
   * TopLeft
   */
  referPos?: string;
  /**
   * @remarks
   * The timeline settings.
   */
  timeline?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline;
  /**
   * @remarks
   * The width of the watermark.
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
      file: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarksOverwriteParamsFile,
      height: 'string',
      referPos: 'string',
      timeline: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline,
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarks extends $dara.Model {
  /**
   * @remarks
   * The override parameter. If you specify this parameter, the corresponding parameter in the template is overwritten.
   */
  overwriteParams?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarksOverwriteParams;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 9547c6ad97cb4f2aaa29683ebd18****
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
      overwriteParams: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarksOverwriteParams,
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitlesOverwriteParamsFile extends $dara.Model {
  /**
   * @remarks
   * The media value:
   * 
   * - If type is OSS, the value is a URL. Both OSS and HTTP protocols are supported.
   * 
   * - If type is Media, the value is the Media Asset ID.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The type of the media object. Valid values:
   * 
   * - OSS: an Object Storage Service (OSS) file.
   * 
   * - Media: the ID of the Media Asset.
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitlesOverwriteParams extends $dara.Model {
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
  file?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitlesOverwriteParamsFile;
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
      file: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitlesOverwriteParamsFile,
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitles extends $dara.Model {
  /**
   * @remarks
   * The overwrite parameters. If specified, these parameters overwrite the corresponding parameters in the template.
   */
  overwriteParams?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitlesOverwriteParams;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 9547c6ad97cb4f2aaa29683ebd18****
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
      overwriteParams: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitlesOverwriteParams,
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTextWatermarksOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to adjust the font size based on the output video size.
   * 
   * - `true`: The font size is automatically adjusted based on the output video size.
   * 
   * - `false`: The font size remains fixed and is not affected by the output video size.
   * 
   * Default value: false
   * 
   * @example
   * false
   */
  adaptive?: string;
  /**
   * @remarks
   * The color of the border.
   * 
   * @example
   * #006400
   */
  borderColor?: string;
  /**
   * @remarks
   * The width of the border.
   * 
   * @example
   * 0
   */
  borderWidth?: number;
  /**
   * @remarks
   * The watermark text, which must be UTF-8 encoded. The text does not need to be Base64 encoded.
   * 
   * @example
   * Test watermark
   */
  content?: string;
  /**
   * @remarks
   * The transparency.
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
   * The font.
   * 
   * @example
   * SimSun
   */
  fontName?: string;
  /**
   * @remarks
   * The font size.
   * 
   * @example
   * 16
   */
  fontSize?: number;
  /**
   * @remarks
   * The distance from the left edge of the video.
   * 
   * @example
   * 10
   */
  left?: string;
  /**
   * @remarks
   * The distance of the watermark from the top edge.
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTextWatermarks extends $dara.Model {
  /**
   * @remarks
   * The override parameter. If you specify this parameter, the corresponding parameter in the template is overwritten.
   */
  overwriteParams?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTextWatermarksOverwriteParams;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 9547c6ad97cb4f2aaa29683ebd18****
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
      overwriteParams: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTextWatermarksOverwriteParams,
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume extends $dara.Model {
  /**
   * @remarks
   * The target integrated loudness.
   * 
   * @example
   * -6
   */
  integratedLoudnessTarget?: string;
  /**
   * @remarks
   * The target loudness range.
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsAudio extends $dara.Model {
  /**
   * @remarks
   * The audio bitrate of the output file.
   * 
   * - Valid values: 8 to 1000.
   * 
   * - Unit: Kbit/s.
   * 
   * - Default value: 128.
   * 
   * @example
   * 128
   */
  bitrate?: string;
  /**
   * @remarks
   * The number of audio channels. Default value: 2.
   * 
   * @example
   * 2
   */
  channels?: string;
  /**
   * @remarks
   * The audio codec. Valid values: `AAC`, `MP3`, `VORBIS`, and `FLAC`. Default value: `AAC`.
   * 
   * @example
   * AAC
   */
  codec?: string;
  /**
   * @remarks
   * The audio encoding preset. This parameter is supported only when the audio codec is AAC. Valid values: `aac_low`, `aac_he`, `aac_he_v2`, `aac_ld`, and `aac_eld`.
   * 
   * @example
   * aac_low
   */
  profile?: string;
  /**
   * @remarks
   * Specifies whether to delete the audio stream. Valid values: `true` and `false`.
   * 
   * @example
   * false
   */
  remove?: string;
  /**
   * @remarks
   * The sample rate.
   * 
   * - Valid values: 22050, 32000, 44100, 48000, and 96000.
   * 
   * - Default value: 44100.
   * 
   * - Unit: Hz.
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  /**
   * @remarks
   * The volume control settings.
   */
  volume?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume;
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
      volume: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsAudioVolume,
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsContainer extends $dara.Model {
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment extends $dara.Model {
  /**
   * @remarks
   * The duration of each segment.
   * 
   * @example
   * 10
   */
  duration?: string;
  /**
   * @remarks
   * The time points at which to enforce segmentation.
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The segment settings.
   */
  segment?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment;
  static names(): { [key: string]: string } {
    return {
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segment: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment,
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsVideo extends $dara.Model {
  /**
   * @remarks
   * The maximum bitrate for adaptive bitrate (ABR) streaming. This parameter is valid only for videos with a narrow height and a wide width. Valid values: 10 to 50000. Unit: Kbit/s.
   * 
   * @example
   * 6000
   */
  abrMax?: string;
  /**
   * @remarks
   * The average video bitrate.
   * 
   * - Valid values: 10 to 50000.
   * 
   * - Unit: Kbit/s.
   * 
   * @example
   * 3000
   */
  bitrate?: string;
  /**
   * @remarks
   * The buffer size.
   * 
   * - Valid values: 1000 to 128000.
   * 
   * - Default value: 6000.
   * 
   * - Unit: Kbit.
   * 
   * @example
   * 6000
   */
  bufsize?: string;
  /**
   * @remarks
   * The video codec.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The quality-to-bitrate control factor.
   * 
   * - Valid values: 0 to 51.
   * 
   * - Default value: If the codec is H.264, the default value is 23. If the codec is H.265, the default value is 26.
   * 
   * If you specify Crf, the value of Bitrate is ignored.
   * 
   * @example
   * 23
   */
  crf?: string;
  /**
   * @remarks
   * The cropping settings. Two modes are supported.
   * 
   * - Automatic: Set the value to `border` to automatically detect and crop black borders.
   * 
   * - Manual: Specify the crop area in the `width:height:left:top` format. Example: `1280:800:0:140`.
   * 
   * @example
   * 1280:800:0:140
   */
  crop?: string;
  /**
   * @remarks
   * The frame rate.
   * 
   * - Valid values: 0 to 60.
   * 
   * - If the frame rate of the input file is greater than 60, the value is 60.
   * 
   * - Default value: the frame rate of the input file.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The maximum number of frames in a Group of Pictures (GOP).
   * 
   * - Valid values: 1 to 1080000.
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
   * - Valid values: 128 to 4096.
   * 
   * - Unit: px.
   * 
   * - Default value: the height of the source video.
   * 
   * @example
   * 1080
   */
  height?: string;
  /**
   * @remarks
   * Specifies whether to enable adaptive resolution by long and short sides.
   * 
   * @example
   * false
   */
  longShortMode?: string;
  /**
   * @remarks
   * The maximum video bitrate. Valid values: 10 to 50000. Unit: Kbit/s.
   * 
   * @example
   * 9000
   */
  maxrate?: string;
  /**
   * @remarks
   * The settings for adding black bars.
   * 
   * - Format: `width:height:left:top`.
   * 
   * - Example: `1280:800:0:140`.
   * 
   * @example
   * 1280:800:0:140
   */
  pad?: string;
  /**
   * @remarks
   * The pixel format. Valid values include `yuv420p` and `yuvj420p`.
   * 
   * @example
   * yuv420p
   */
  pixFmt?: string;
  /**
   * @remarks
   * The preset of the video encoder. This parameter is supported only when the video codec is H.264. Valid values: `veryfast`, `fast`, `medium`, `slow`, and `slower`. Default value: `medium`.
   * 
   * @example
   * medium
   */
  preset?: string;
  /**
   * @remarks
   * The encoding profile. Valid values include baseline, main, and high.
   * 
   * - `baseline`: suitable for mobile devices.
   * 
   * - `main`: suitable for standard-definition devices.
   * 
   * - `high`: suitable for high-definition devices.
   * 
   * Default value: `high`.
   * 
   * @example
   * Main
   */
  profile?: string;
  /**
   * @remarks
   * Specifies whether to delete the video. Valid values: `true` and `false`.
   * 
   * @example
   * false
   */
  remove?: string;
  /**
   * @remarks
   * The scan mode. Valid values: `interlaced` and `progressive`.
   * 
   * @example
   * progressive
   */
  scanMode?: string;
  /**
   * @remarks
   * The width.
   * 
   * - Valid values: 128 to 4096.
   * 
   * - Unit: px.
   * 
   * - Default value: the width of the source video.
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * The audio settings.
   */
  audio?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsAudio;
  /**
   * @remarks
   * The container format settings.
   */
  container?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsContainer;
  /**
   * @remarks
   * The muxing settings.
   */
  muxConfig?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig;
  /**
   * @remarks
   * The custom tags.
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The video settings.
   */
  video?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      muxConfig: 'MuxConfig',
      tags: 'Tags',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsAudio,
      container: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsContainer,
      muxConfig: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig,
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      video: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsVideo,
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
    if(this.video && typeof (this.video as any).validate === 'function') {
      (this.video as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscode extends $dara.Model {
  /**
   * @remarks
   * The override parameter. If you specify this parameter, the corresponding parameter in the template is overwritten.
   */
  overwriteParams?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParams;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 9547c6ad97cb4f2aaa29683ebd18****
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
      overwriteParams: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParams,
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfig extends $dara.Model {
  /**
   * @remarks
   * The configurations for combining multiple inputs.
   */
  combineConfigs?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigCombineConfigs[];
  /**
   * @remarks
   * The encryption settings.
   */
  encryption?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigEncryption;
  /**
   * @remarks
   * The image watermark configurations.
   */
  imageWatermarks?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarks[];
  /**
   * @remarks
   * Specifies whether to inherit tags from the input stream. This parameter applies only when the input is a Media Asset. Default Value: false
   */
  isInheritTags?: boolean;
  /**
   * @remarks
   * The subtitle burn-in settings.
   */
  subtitles?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitles[];
  /**
   * @remarks
   * The text watermark configurations.
   */
  textWatermarks?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTextWatermarks[];
  /**
   * @remarks
   * The transcoding configuration.
   */
  transcode?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscode;
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
      combineConfigs: { 'type': 'array', 'itemType': ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigCombineConfigs },
      encryption: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigEncryption,
      imageWatermarks: { 'type': 'array', 'itemType': ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarks },
      isInheritTags: 'boolean',
      subtitles: { 'type': 'array', 'itemType': ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitles },
      textWatermarks: { 'type': 'array', 'itemType': ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTextWatermarks },
      transcode: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscode,
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

export class ListTranscodeJobsResponseBodyJobsOutputGroup extends $dara.Model {
  /**
   * @remarks
   * The output media configuration.
   */
  output?: ListTranscodeJobsResponseBodyJobsOutputGroupOutput;
  /**
   * @remarks
   * The job processing configuration.
   */
  processConfig?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfig;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      processConfig: 'ProcessConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: ListTranscodeJobsResponseBodyJobsOutputGroupOutput,
      processConfig: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfig,
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

export class ListTranscodeJobsResponseBodyJobsScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * The pipeline ID.
   * 
   * @example
   * e37ebee5d98b4781897f6086e89f****
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

export class ListTranscodeJobsResponseBodyJobs extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the job was complete. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The input group of the job. A single input indicates a transcoding job. Multiple inputs indicate a composition job.
   */
  inputGroup?: ListTranscodeJobsResponseBodyJobsInputGroup[];
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
  outputGroup?: ListTranscodeJobsResponseBodyJobsOutputGroup[];
  /**
   * @remarks
   * The parent job ID.
   * 
   * @example
   * 8b2198504dd340b7b3c9842a74fc****
   */
  parentJobId?: string;
  /**
   * @remarks
   * The progress of the job.
   * 
   * @example
   * 0
   */
  percent?: number;
  /**
   * @remarks
   * The request ID of the job.
   * 
   * @example
   * 31E30781-9495-5E2D-A84D-759B0A01E262
   */
  requestId?: string;
  /**
   * @remarks
   * The schedule configuration of the job.
   */
  scheduleConfig?: ListTranscodeJobsResponseBodyJobsScheduleConfig;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * - `Success`: The job is successful if at least one sub-job is successful.
   * 
   * - `Fail`: The job fails if all sub-jobs fail.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The time when the job was submitted. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  submitTime?: string;
  /**
   * @remarks
   * The source of the job. Valid values:
   * 
   * - `API`: The job is submitted by calling an API operation.
   * 
   * - `Workflow`: The job is triggered by a workflow.
   * 
   * - `Console`: The job is submitted on the console.
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
      triggerSource: 'TriggerSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      finishTime: 'string',
      inputGroup: { 'type': 'array', 'itemType': ListTranscodeJobsResponseBodyJobsInputGroup },
      jobCount: 'number',
      name: 'string',
      outputGroup: { 'type': 'array', 'itemType': ListTranscodeJobsResponseBodyJobsOutputGroup },
      parentJobId: 'string',
      percent: 'number',
      requestId: 'string',
      scheduleConfig: ListTranscodeJobsResponseBodyJobsScheduleConfig,
      status: 'string',
      submitTime: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of jobs.
   */
  jobs?: ListTranscodeJobsResponseBodyJobs[];
  /**
   * @remarks
   * The token for the next page of results. Leave this parameter empty for the first request. The token is returned after the first query.
   * 
   * @example
   * 019daf5780f74831b0e1a767c9f1****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 31E30781-9495-5E2D-A84D-759B0A01E262
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListTranscodeJobsResponseBodyJobs },
      nextPageToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

