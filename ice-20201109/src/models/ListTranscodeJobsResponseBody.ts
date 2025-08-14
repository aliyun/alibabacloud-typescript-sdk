// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTranscodeJobsResponseBodyJobsInputGroup extends $dara.Model {
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupOutput extends $dara.Model {
  /**
   * @remarks
   * The media object. If Type is set to OSS, the URL of an OSS object is returned. Both the OSS and HTTP protocols are supported. If Type is set to Media, the ID of a media asset is returned.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The URL of the transcoded output stream. This parameter is required only when the output is a media asset.
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigCombineConfigs extends $dara.Model {
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigEncryption extends $dara.Model {
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
   * The media object. If Type is set to OSS, the URL of an OSS object is returned. Both the OSS and HTTP protocols are supported. If Type is set to Media, the ID of a media asset is returned.
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline extends $dara.Model {
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
   * The beginning of the time range for which data was queried.
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
  file?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarksOverwriteParamsFile;
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
  timeline?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline;
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
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarksOverwriteParams;
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
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitlesOverwriteParams;
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
   * Indicates whether the text size was adjusted based on the output video dimensions. true / false, default: false
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTextWatermarks extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTextWatermarksOverwriteParams;
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsAudio extends $dara.Model {
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
   * The maximum adaptive bitrate (ABR). This parameter takes effect only for Narrowband HD 1.0. Valid values: [10,50000]. Unit: Kbit/s.
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
   * 
   * If this parameter is set, the value of Bitrate becomes invalid.
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
   * Indicates whether the auto-rotate screen feature is enabled.
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

export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * The audio settings.
   */
  audio?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsAudio;
  /**
   * @remarks
   * The encapsulation format settings.
   */
  container?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsContainer;
  /**
   * @remarks
   * The encapsulation settings.
   */
  muxConfig?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParamsMuxConfig;
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
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParams;
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
   * The multi-input stream merge configuration.
   */
  combineConfigs?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigCombineConfigs[];
  /**
   * @remarks
   * The encryption settings.
   */
  encryption?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigEncryption;
  /**
   * @remarks
   * The watermark configuration for an image.
   */
  imageWatermarks?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarks[];
  /**
   * @remarks
   * Indicates whether the tags of the input stream are inherited in the output stream. This parameter does not take effect when the input is not a media asset. Default value: false.
   */
  isInheritTags?: boolean;
  /**
   * @remarks
   * The subtitle configuration.
   */
  subtitles?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitles[];
  /**
   * @remarks
   * The configurations of the text watermarks.
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
   * The output file configuration.
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

export class ListTranscodeJobsResponseBodyJobs extends $dara.Model {
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
  inputGroup?: ListTranscodeJobsResponseBodyJobsInputGroup[];
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
  outputGroup?: ListTranscodeJobsResponseBodyJobsOutputGroup[];
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
  scheduleConfig?: ListTranscodeJobsResponseBodyJobsScheduleConfig;
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
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. The token of the next page is returned after you call this operation for the first time.
   * 
   * @example
   * 019daf5780f74831b0e1a767c9f1c178
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The request ID.
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

