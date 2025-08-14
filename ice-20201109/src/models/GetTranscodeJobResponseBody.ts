// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTranscodeJobResponseBodyTranscodeParentJobInputGroup extends $dara.Model {
  /**
   * @remarks
   * The media object.
   * 
   * *   If Type is set to OSS, the URL of an OSS object is returned. Both the OSS and HTTP protocols are supported.
   * *   If Type is set to Media, the ID of a media asset is returned.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupOutput extends $dara.Model {
  /**
   * @remarks
   * The media object.
   * 
   * *   If Type is set to OSS, the URL of an OSS object is returned. Both the OSS and HTTP protocols are supported.
   * *   If Type is set to Media, the ID of a media asset is returned.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The URL of the output stream.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigCombineConfigs extends $dara.Model {
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigEncryption extends $dara.Model {
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
   * The endpoint of the decryption service for HLS encryption.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsFile extends $dara.Model {
  /**
   * @remarks
   * The media object.
   * 
   * *   If Type is set to OSS, the URL of an OSS object is returned. Both the OSS and HTTP protocols are supported.
   * *   If Type is set to Media, the ID of a media asset is returned.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline extends $dara.Model {
  /**
   * @remarks
   * The duration of the stream. Valid values: the number of seconds or "ToEND".
   * 
   * @example
   * ToEND
   */
  duration?: string;
  /**
   * @remarks
   * The start time of the stream.
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
   * The position of the watermark on the x-axis.
   * 
   * @example
   * 10
   */
  dx?: string;
  /**
   * @remarks
   * The position of the watermark on the y-axis.
   * 
   * @example
   * 10
   */
  dy?: string;
  /**
   * @remarks
   * The watermark image file.
   */
  file?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsFile;
  /**
   * @remarks
   * The height of the output video.
   * 
   * @example
   * 32
   */
  height?: string;
  /**
   * @remarks
   * The reference position of the watermark. Valid values: TopLeft, TopRight, BottomLeft, and BottomRight. Default value: TopLeft.
   * 
   * @example
   * TopLeft
   */
  referPos?: string;
  /**
   * @remarks
   * The timeline settings.
   */
  timeline?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline;
  /**
   * @remarks
   * The width of the output video.
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
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarksOverwriteParams;
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
   * The media object.
   * 
   * *   If Type is set to OSS, the URL of an OSS object is returned. Both the OSS and HTTP protocols are supported.
   * *   If Type is set to Media, the ID of a media asset is returned.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParams extends $dara.Model {
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
  file?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParamsFile;
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
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitlesOverwriteParams;
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
   * Indicates whether the text size was adjusted based on the output video dimensions. Valid values: true and false. Default value: false.
   * 
   * @example
   * false
   */
  adaptive?: string;
  /**
   * @remarks
   * The border color.
   * 
   * @example
   * #006400
   */
  borderColor?: string;
  /**
   * @remarks
   * The border width.
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
   * The transparency of the watermark.
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
   * The font of the text.
   * 
   * @example
   * SimSun
   */
  fontName?: string;
  /**
   * @remarks
   * The size of the text.
   * 
   * @example
   * 16
   */
  fontSize?: number;
  /**
   * @remarks
   * The distance of the watermark from the left edge.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarks extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarksOverwriteParams;
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudio extends $dara.Model {
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
   * Indicates whether the audio stream is deleted.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfigSegment extends $dara.Model {
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The segment settings.
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
   * Indicates whether the audio bitrate was checked. You can specify only one of the IsCheckAudioBitrate and IsCheckAudioBitrateFail parameters. The priority of the IsCheckAudioBitrateFail parameter is higher. Valid values:
   * 
   * *   true If the bitrate of the input audio is less than that of the output audio, the bitrate of the input audio is used for transcoding.
   * *   false
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
   * Indicates whether the audio bitrate was checked. You can specify only one of the IsCheckAudioBitrate and IsCheckAudioBitrateFail parameters. The priority of the IsCheckAudioBitrateFail parameter is higher. Valid values:
   * 
   * *   true If the bitrate of the input audio is less than that of the output audio, the transcoding job fails.
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckAudioBitrateFail?: string;
  /**
   * @remarks
   * Indicates whether the video resolution was checked. You can specify only one of the IsCheckReso and IsCheckResoFail parameters. The priority of the IsCheckResoFail parameter is higher. Valid values:
   * 
   * *   true If the width or height of the input video is less than that of the output video, the resolution of the input video is used for transcoding.
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckReso?: string;
  /**
   * @remarks
   * Indicates whether the video resolution was checked. You can specify only one of the IsCheckReso and IsCheckResoFail parameters. The priority of the IsCheckResoFail parameter is higher. Valid values:
   * 
   * *   true If the width or height of the input video is less than that of the output video, the transcoding job fails.
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckResoFail?: string;
  /**
   * @remarks
   * Indicates whether the video bitrate was checked. You can specify only one of the IsCheckVideoBitrate and IsCheckVideoBitrateFail parameters. The priority of the IsCheckVideoBitrateFail parameter is higher. Valid values:
   * 
   * *   true If the bitrate of the input video is less than that of the output video, the bitrate of the input video is used for transcoding.
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckVideoBitrate?: string;
  /**
   * @remarks
   * Indicates whether the video bitrate was checked. You can specify only one of the IsCheckVideoBitrate and IsCheckVideoBitrateFail parameters. The priority of the IsCheckVideoBitrateFail parameter is higher. Valid values:
   * 
   * *   true If the bitrate of the input video is less than that of the output video, the transcoding job fails.
   * *   false
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsVideo extends $dara.Model {
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
   * *   Default value: 23 if the encoding format is H.264, or 26 if the encoding format is H.265.
   * *   If this parameter is specified, the value of Bitrate becomes invalid.
   * 
   * @example
   * 23
   */
  crf?: string;
  /**
   * @remarks
   * The method of video cropping. Valid values: border: automatically detects and removes black bars. A value in the width:height:left:top format: crops the videos based on the custom settings. Example: 1280:800:0:140.
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
   * Indicates whether the auto-rotate screen feature is enabled.
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
   * Indicates whether the video was removed.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * The audio settings.
   */
  audio?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsAudio;
  /**
   * @remarks
   * The encapsulation format settings.
   */
  container?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsContainer;
  /**
   * @remarks
   * The encapsulation settings.
   */
  muxConfig?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig;
  /**
   * @remarks
   * The conditional transcoding configurations.
   */
  transConfig?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParamsTransConfig;
  /**
   * @remarks
   * The video settings.
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
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTranscodeOverwriteParams;
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
   * The multi-input stream merge configuration.
   */
  combineConfigs?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigCombineConfigs[];
  /**
   * @remarks
   * The encryption settings.
   */
  encryption?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigEncryption;
  /**
   * @remarks
   * The watermark configuration of an image.
   */
  imageWatermarks?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigImageWatermarks[];
  /**
   * @remarks
   * The subtitle configuration.
   */
  subtitles?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigSubtitles[];
  /**
   * @remarks
   * The configurations of the text watermark.
   */
  textWatermarks?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupProcessConfigTextWatermarks[];
  /**
   * @remarks
   * The transcoding configuration.
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
   * The output file configuration.
   */
  output?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroupOutput;
  /**
   * @remarks
   * The job processing configuration.
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
   * The ID of the ApsaraVideo Media Processing (MPS) queue to which the snapshot job was submitted.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListInputGroup extends $dara.Model {
  /**
   * @remarks
   * The URL of the media asset. This parameter is specified only when the media asset is transcoded.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  inputUrl?: string;
  /**
   * @remarks
   * The media object.
   * 
   * *   If Type is set to OSS, the URL of an OSS object is returned. Both the OSS and HTTP protocols are supported.
   * *   If Type is set to Media, the ID of a media asset is returned.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaFileBasicInfo extends $dara.Model {
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
   * 486c2890096871edba6f81848c016303
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaVideoStreamInfoList extends $dara.Model {
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMeta extends $dara.Model {
  /**
   * @remarks
   * The information about the audio stream.
   */
  audioStreamInfoList?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaAudioStreamInfoList[];
  /**
   * @remarks
   * The basic file information.
   */
  fileBasicInfo?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMetaFileBasicInfo;
  /**
   * @remarks
   * The information about the video stream.
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
   * The media object.
   * 
   * *   If Type is set to OSS, the URL of an OSS object is returned. Both the OSS and HTTP protocols are supported.
   * *   If Type is set to Media, the ID of a media asset is returned.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The path of the transcoded output stream. This parameter is required only when the output is a media asset.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigCombineConfigs extends $dara.Model {
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigEncryption extends $dara.Model {
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
   * The endpoint of the decryption service for HLS encryption.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsFile extends $dara.Model {
  /**
   * @remarks
   * The media object.
   * 
   * *   If Type is set to OSS, the URL of an OSS object is returned. Both the OSS and HTTP protocols are supported.
   * *   If Type is set to Media, the ID of a media asset is returned.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsTimeline extends $dara.Model {
  /**
   * @remarks
   * The duration of the stream. Valid values: the number of seconds or "ToEND".
   * 
   * @example
   * ToEND
   */
  duration?: string;
  /**
   * @remarks
   * The start time of the stream.
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
   * The position of the watermark on the x-axis.
   * 
   * @example
   * 10
   */
  dx?: string;
  /**
   * @remarks
   * The position of the watermark on the y-axis.
   * 
   * @example
   * 10
   */
  dy?: string;
  /**
   * @remarks
   * The watermark image file.
   */
  file?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsFile;
  /**
   * @remarks
   * The height of the output video.
   * 
   * @example
   * 32
   */
  height?: string;
  /**
   * @remarks
   * The reference position of the watermark. Valid values: TopLeft, TopRight, BottomLeft, and BottomRight. Default value: TopLeft.
   * 
   * @example
   * TopLeft
   */
  referPos?: string;
  /**
   * @remarks
   * The timeline settings.
   */
  timeline?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParamsTimeline;
  /**
   * @remarks
   * The width of the output video.
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
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarksOverwriteParams;
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
   * The media object.
   * 
   * *   If Type is set to OSS, the URL of an OSS object is returned. Both the OSS and HTTP protocols are supported.
   * *   If Type is set to Media, the ID of a media asset is returned.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParams extends $dara.Model {
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
  file?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParamsFile;
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
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitlesOverwriteParams;
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
   * Indicates whether the text size was adjusted based on the output video dimensions. Valid values: true and false. Default value: false.
   * 
   * @example
   * false
   */
  adaptive?: string;
  /**
   * @remarks
   * The border color.
   * 
   * @example
   * #006400
   */
  borderColor?: string;
  /**
   * @remarks
   * The border width.
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
   * The transparency of the watermark.
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
   * The font of the text.
   * 
   * @example
   * SimSun
   */
  fontName?: string;
  /**
   * @remarks
   * The size of the text.
   * 
   * @example
   * 16
   */
  fontSize?: number;
  /**
   * @remarks
   * The distance of the watermark from the left edge.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarks extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarksOverwriteParams;
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudio extends $dara.Model {
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
   * Indicates whether the audio stream is deleted.
   * 
   * @example
   * false
   */
  remove?: string;
  /**
   * @remarks
   * The sampling rate.
   * 
   * *   Default value: 44100. Valid values: 22050, 32000, 44100, 48000, and 96000.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfigSegment extends $dara.Model {
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The segment settings.
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
   * The method that is used to adjust the resolution. This parameter takes effect only if both the Width and Height parameters are specified. You can use this parameter together with the LongShortMode parameter.
   * 
   * Valid values: rescale, crop, pad, and none.
   * 
   * Default value: none.
   * 
   * For more information about examples, see How do I set the resolution for an output video?
   * 
   * @example
   * none
   */
  adjDarMethod?: string;
  /**
   * @remarks
   * Indicates whether the audio bitrate was checked. You can specify only one of the IsCheckAudioBitrate and IsCheckAudioBitrateFail parameters. The priority of the IsCheckAudioBitrateFail parameter is higher. Valid values:
   * 
   * *   true If the bitrate of the input audio is less than that of the output audio, the bitrate of the input audio is used for transcoding.
   * *   false
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
   * Indicates whether the audio bitrate was checked. You can specify only one of the IsCheckAudioBitrate and IsCheckAudioBitrateFail parameters. The priority of the IsCheckAudioBitrateFail parameter is higher. Valid values:
   * 
   * *   true If the bitrate of the input audio is less than that of the output audio, the transcoding job fails.
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckAudioBitrateFail?: string;
  /**
   * @remarks
   * Indicates whether the video resolution was checked. You can specify only one of the IsCheckReso and IsCheckResoFail parameters. The priority of the IsCheckResoFail parameter is higher. Valid values:
   * 
   * *   true If the width or height of the input video is less than that of the output video, the resolution of the input video is used for transcoding.
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckReso?: string;
  /**
   * @remarks
   * Indicates whether the video resolution was checked. You can specify only one of the IsCheckReso and IsCheckResoFail parameters. The priority of the IsCheckResoFail parameter is higher. Valid values:
   * 
   * *   true If the width or height of the input video is less than that of the output video, the transcoding job fails.
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckResoFail?: string;
  /**
   * @remarks
   * Indicates whether the video bitrate was checked. You can specify only one of the IsCheckVideoBitrate and IsCheckVideoBitrateFail parameters. The priority of the IsCheckVideoBitrateFail parameter is higher. Valid values:
   * 
   * *   true If the bitrate of the input video is less than that of the output video, the bitrate of the input video is used for transcoding.
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isCheckVideoBitrate?: string;
  /**
   * @remarks
   * Indicates whether the video bitrate was checked. You can specify only one of the IsCheckVideoBitrate and IsCheckVideoBitrateFail parameters. The priority of the IsCheckVideoBitrateFail parameter is higher. Valid values:
   * 
   * *   true If the bitrate of the input video is less than that of the output video, the transcoding job fails.
   * *   false
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsVideo extends $dara.Model {
  /**
   * @remarks
   * The maximum adaptive bitrate (ABR). This parameter takes effect only for Narrowband HD 1.0.
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
   * *   Unit: Kbit/s.
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
   * *   Default value: 23 if the encoding format is H.264, or 26 if the encoding format is H.265.
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
   * *   A value in the width:height:left:top format: crops the videos based on the custom settings.
   * 
   * @example
   * 1280:800:0:140
   */
  crop?: string;
  /**
   * @remarks
   * The frame rate.
   * 
   * *   Valid values: (0,60]. The value is 60 if the frame rate of the input video exceeds 60.
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
   * 
   * Default value: the height of the input video.
   * 
   * @example
   * 1080
   */
  height?: string;
  /**
   * @remarks
   * Indicates whether the auto-rotate screen feature is enabled.
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
   * The black bars added to the video. Format: width:height:left:top.
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
   * Indicates whether the video was removed.
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
   * 
   * Default value: the width of the input video.
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
   * The audio settings.
   */
  audio?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsAudio;
  /**
   * @remarks
   * The encapsulation format settings.
   */
  container?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsContainer;
  /**
   * @remarks
   * The encapsulation settings.
   */
  muxConfig?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsMuxConfig;
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The conditional transcoding configurations.
   */
  transConfig?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParamsTransConfig;
  /**
   * @remarks
   * The video settings.
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
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTranscodeOverwriteParams;
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
   * The multi-input stream merge configuration.
   */
  combineConfigs?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigCombineConfigs[];
  /**
   * @remarks
   * The encryption settings.
   */
  encryption?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigEncryption;
  /**
   * @remarks
   * The watermark configuration of an image.
   */
  imageWatermarks?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigImageWatermarks[];
  /**
   * @remarks
   * Indicates whether the tags of the input stream are inherited in the output stream. This parameter does not take effect when the input is not a media asset. Default value: false.
   * 
   * @example
   * true
   */
  isInheritTags?: boolean;
  /**
   * @remarks
   * The subtitle configuration.
   */
  subtitles?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigSubtitles[];
  /**
   * @remarks
   * The configurations of the text watermark.
   */
  textWatermarks?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfigTextWatermarks[];
  /**
   * @remarks
   * The transcoding configuration.
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
   * The ID of the ApsaraVideo Media Processing (MPS) queue to which the snapshot job was submitted.
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

export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobList extends $dara.Model {
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
  inputGroup?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListInputGroup[];
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
  outFileMeta?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMeta;
  /**
   * @remarks
   * The output file configuration.
   */
  output?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutput;
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
  processConfig?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfig;
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
  scheduleConfig?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListScheduleConfig;
  /**
   * @remarks
   * The state of the transcoding job. Valid values: Init (the job is submitted), Success (the job is successful), Fail (the job failed), and Deleted (the job is deleted).
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
  inputGroup?: GetTranscodeJobResponseBodyTranscodeParentJobInputGroup[];
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
  outputGroup?: GetTranscodeJobResponseBodyTranscodeParentJobOutputGroup[];
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
  scheduleConfig?: GetTranscodeJobResponseBodyTranscodeParentJobScheduleConfig;
  /**
   * @remarks
   * The state of the job.
   * 
   * *   Success: At least one of the subjobs is successful.
   * *   Fail: All subjobs failed.
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
  transcodeJobList?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobList[];
  /**
   * @remarks
   * The source of the job. Valid values:
   * 
   * *   API
   * *   WorkFlow
   * *   Console
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
   * The request ID.
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

