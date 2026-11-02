// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaLiveChannelRequestAudioSettingsAudioCodecSetting extends $dara.Model {
  /**
   * @remarks
   * The audio bitrate. Unit: bit/s. Valid values: 8000 to 1000000. The value must be divisible by 1000.
   * 
   * @example
   * 200000
   */
  bitrate?: number;
  /**
   * @remarks
   * The audio codec profile.
   * When the codec is aac, valid values are AAC-LOW and AAC-MAIN.
   * When the codec is libfdk_aac, valid values are AAC-LOW, AAC-HE, and AAC-HEV2.
   * 
   * @example
   * AAC-LOW
   */
  profile?: string;
  /**
   * @remarks
   * The audio sample rate. Unit: Hz. Valid values: 22050, 32000, 44100, 48000, and 96000.
   * 
   * @example
   * 44100
   */
  sampleRate?: number;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      profile: 'Profile',
      sampleRate: 'SampleRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      profile: 'string',
      sampleRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaLiveChannelRequestAudioSettings extends $dara.Model {
  /**
   * @remarks
   * The audio codec type. If this parameter is left empty, the value is copy, which means the source codec is used.
   * Valid values: aac and libfdk_aac.
   * 
   * @example
   * libfdk_aac
   */
  audioCodec?: string;
  /**
   * @remarks
   * The audio codec settings.
   */
  audioCodecSetting?: UpdateMediaLiveChannelRequestAudioSettingsAudioCodecSetting;
  /**
   * @remarks
   * The audio selector name.
   * 
   * @example
   * a1
   */
  audioSelectorName?: string;
  /**
   * @remarks
   * The ISO 639-2 language code. The code is 3 characters in length.
   * If the output corresponding to the audio track selected by the selector has a language code, the language code of the selector takes precedence. If the audio track selected by the selector does not have a language code or no audio track matches the selector, this language code is used.
   * 
   * @example
   * eng
   */
  languageCode?: string;
  /**
   * @remarks
   * The language name. This parameter is valid only for RTMP inputs and specifies the Name tag used by the output.
   * The value can be up to 32 characters in length and supports the following character types:
   * - Unicode letters of various languages: including Latin letters (such as English and French), Chinese, Arabic, and letters of other languages.
   * - Digits: 0 to 9. 
   * - Underscores (_) 
   * - Hyphens (-)
   * - Spaces: spaces can appear in the middle of the value, but not at the beginning or end.
   * 
   * @example
   * English
   */
  languageName?: string;
  /**
   * @remarks
   * The audio setting name. The name can contain letters, digits, hyphens (-), and underscores (_). The name can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * audio1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      audioCodec: 'AudioCodec',
      audioCodecSetting: 'AudioCodecSetting',
      audioSelectorName: 'AudioSelectorName',
      languageCode: 'LanguageCode',
      languageName: 'LanguageName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioCodec: 'string',
      audioCodecSetting: UpdateMediaLiveChannelRequestAudioSettingsAudioCodecSetting,
      audioSelectorName: 'string',
      languageCode: 'string',
      languageName: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.audioCodecSetting && typeof (this.audioCodecSetting as any).validate === 'function') {
      (this.audioCodecSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioLanguageSelection extends $dara.Model {
  /**
   * @remarks
   * The ISO 639-2 language code. The code is 3 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * eng
   */
  languageCode?: string;
  static names(): { [key: string]: string } {
    return {
      languageCode: 'LanguageCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      languageCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioPidSelection extends $dara.Model {
  /**
   * @remarks
   * The PID of the input source stream.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  pid?: number;
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioTrackSelection extends $dara.Model {
  /**
   * @remarks
   * The track ID of the input source stream. The value starts from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  trackId?: number;
  static names(): { [key: string]: string } {
    return {
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trackId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectors extends $dara.Model {
  /**
   * @remarks
   * The language selector.
   */
  audioLanguageSelection?: UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioLanguageSelection;
  /**
   * @remarks
   * The PID selector.
   */
  audioPidSelection?: UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioPidSelection;
  /**
   * @remarks
   * The track selector.
   */
  audioTrackSelection?: UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioTrackSelection[];
  /**
   * @remarks
   * The audio selector name. The name can contain letters, digits, hyphens (-), and underscores (_). The name can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * myselector
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      audioLanguageSelection: 'AudioLanguageSelection',
      audioPidSelection: 'AudioPidSelection',
      audioTrackSelection: 'AudioTrackSelection',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioLanguageSelection: UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioLanguageSelection,
      audioPidSelection: UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioPidSelection,
      audioTrackSelection: { 'type': 'array', 'itemType': UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioTrackSelection },
      name: 'string',
    };
  }

  validate() {
    if(this.audioLanguageSelection && typeof (this.audioLanguageSelection as any).validate === 'function') {
      (this.audioLanguageSelection as any).validate();
    }
    if(this.audioPidSelection && typeof (this.audioPidSelection as any).validate === 'function') {
      (this.audioPidSelection as any).validate();
    }
    if(Array.isArray(this.audioTrackSelection)) {
      $dara.Model.validateArray(this.audioTrackSelection);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaLiveChannelRequestInputAttachments extends $dara.Model {
  /**
   * @remarks
   * The audio selector list.
   */
  audioSelectors?: UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectors[];
  /**
   * @remarks
   * The ID of the attached input.
   * 
   * This parameter is required.
   * 
   * @example
   * myinput
   */
  inputId?: string;
  /**
   * @remarks
   * The language name. This parameter is valid only for RTMP inputs and specifies the Name tag used by the output.
   * The value can be up to 32 characters in length and supports the following character types:
   * - Unicode letters of various languages: including Latin letters (such as English and French), Chinese, Arabic, and letters of other languages.
   * - Digits: 0 to 9. 
   * - Underscores (_) 
   * - Hyphens (-)
   * - Spaces: spaces can appear in the middle of the value, but not at the beginning or end.
   * 
   * @example
   * English
   */
  languageName?: string;
  static names(): { [key: string]: string } {
    return {
      audioSelectors: 'AudioSelectors',
      inputId: 'InputId',
      languageName: 'LanguageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioSelectors: { 'type': 'array', 'itemType': UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectors },
      inputId: 'string',
      languageName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.audioSelectors)) {
      $dara.Model.validateArray(this.audioSelectors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaLiveChannelRequestOutputGroupsMediaPackageGroupSetting extends $dara.Model {
  /**
   * @remarks
   * The ChannelName of the referenced MediaPackage.
   * 
   * This parameter is required.
   * 
   * @example
   * myPackageChannel
   */
  channelName?: string;
  /**
   * @remarks
   * The GroupName of the referenced MediaPackage.
   * 
   * This parameter is required.
   * 
   * @example
   * myPackageGroup
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      channelName: 'ChannelName',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaLiveChannelRequestOutputGroupsOutputsMediaPackageOutputSetting extends $dara.Model {
  /**
   * @remarks
   * The manifest audio group ID settings. By specifying AudioGroupId, you can group multiple audio tracks into the same group to facilitate track selection during playback. The ID can contain letters, digits, hyphens (-), and underscores (_). The ID can be up to 40 characters in length.
   * 
   * @example
   * audiogroup
   */
  audioGroupId?: string;
  /**
   * @remarks
   * The manifest suffix, which is generally used for naming child m3u8 files. The suffix can contain letters, digits, hyphens (-), and underscores (_). The suffix can be up to 40 characters in length.
   * 
   * @example
   * 480p
   */
  nameModifier?: string;
  static names(): { [key: string]: string } {
    return {
      audioGroupId: 'AudioGroupId',
      nameModifier: 'NameModifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioGroupId: 'string',
      nameModifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaLiveChannelRequestOutputGroupsOutputs extends $dara.Model {
  /**
   * @remarks
   * The list of referenced audio setting names.
   */
  audioSettingNames?: string[];
  /**
   * @remarks
   * The output settings when the output group type is MediaPackage.
   */
  mediaPackageOutputSetting?: UpdateMediaLiveChannelRequestOutputGroupsOutputsMediaPackageOutputSetting;
  /**
   * @remarks
   * The media type of the output. Valid values:
   * - 0: audio and video.
   * - 1: audio only. If this value is set, you cannot reference video settings.
   * - 2: video only. If this value is set, you cannot reference audio settings.
   * 
   * @example
   * 0
   */
  mediaType?: number;
  /**
   * @remarks
   * The output name. The name can contain letters, digits, hyphens (-), and underscores (_). The name can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * output1
   */
  name?: string;
  /**
   * @remarks
   * The name of the referenced video setting.
   * 
   * @example
   * myVideo1
   */
  videoSettingName?: string;
  static names(): { [key: string]: string } {
    return {
      audioSettingNames: 'AudioSettingNames',
      mediaPackageOutputSetting: 'MediaPackageOutputSetting',
      mediaType: 'MediaType',
      name: 'Name',
      videoSettingName: 'VideoSettingName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioSettingNames: { 'type': 'array', 'itemType': 'string' },
      mediaPackageOutputSetting: UpdateMediaLiveChannelRequestOutputGroupsOutputsMediaPackageOutputSetting,
      mediaType: 'number',
      name: 'string',
      videoSettingName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.audioSettingNames)) {
      $dara.Model.validateArray(this.audioSettingNames);
    }
    if(this.mediaPackageOutputSetting && typeof (this.mediaPackageOutputSetting as any).validate === 'function') {
      (this.mediaPackageOutputSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaLiveChannelRequestOutputGroups extends $dara.Model {
  /**
   * @remarks
   * The output group settings when the output group type is MediaPackage.
   */
  mediaPackageGroupSetting?: UpdateMediaLiveChannelRequestOutputGroupsMediaPackageGroupSetting;
  /**
   * @remarks
   * The output group name. The name can contain letters, digits, hyphens (-), and underscores (_). The name can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * group1
   */
  name?: string;
  /**
   * @remarks
   * The output list settings.
   * 
   * This parameter is required.
   */
  outputs?: UpdateMediaLiveChannelRequestOutputGroupsOutputs[];
  /**
   * @remarks
   * The output group type. Currently, only MediaPackage is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * MediaPackage
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      mediaPackageGroupSetting: 'MediaPackageGroupSetting',
      name: 'Name',
      outputs: 'Outputs',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaPackageGroupSetting: UpdateMediaLiveChannelRequestOutputGroupsMediaPackageGroupSetting,
      name: 'string',
      outputs: { 'type': 'array', 'itemType': UpdateMediaLiveChannelRequestOutputGroupsOutputs },
      type: 'string',
    };
  }

  validate() {
    if(this.mediaPackageGroupSetting && typeof (this.mediaPackageGroupSetting as any).validate === 'function') {
      (this.mediaPackageGroupSetting as any).validate();
    }
    if(Array.isArray(this.outputs)) {
      $dara.Model.validateArray(this.outputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingCodecDetail extends $dara.Model {
  /**
   * @remarks
   * The video encoding level. This parameter is not supported.
   * 
   * @example
   * H264_LEVEL_AUTO
   */
  level?: string;
  /**
   * @remarks
   * The H.264 encoding profile. Valid values: BASELINE, HIGH, and MAIN. Default value: MAIN. This parameter takes effect only when the H.264 encoder is used.
   * 
   * @example
   * MAIN
   */
  profile?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      profile: 'Profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      profile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingFramerate extends $dara.Model {
  /**
   * @remarks
   * The frame rate setting mode. Valid values: SPECIFIED (fixed frame rate) and FROM_SOURCE (same as the source video).
   * 
   * @example
   * SPECIFIED
   */
  framerateControl?: string;
  /**
   * @remarks
   * The denominator of the fixed frame rate. This parameter is required when the frame rate setting mode is set to SPECIFIED. Valid values: 1 to 60. The value must be divisible by the numerator.
   * 
   * @example
   * 1
   */
  framerateDenominator?: number;
  /**
   * @remarks
   * The numerator of the fixed frame rate. This parameter is required when the frame rate setting mode is set to SPECIFIED. Valid values: 1 to 60. The denominator must be divisible by the numerator.
   * 
   * @example
   * 25
   */
  framerateNumerator?: number;
  static names(): { [key: string]: string } {
    return {
      framerateControl: 'FramerateControl',
      framerateDenominator: 'FramerateDenominator',
      framerateNumerator: 'FramerateNumerator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      framerateControl: 'string',
      framerateDenominator: 'number',
      framerateNumerator: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingGop extends $dara.Model {
  /**
   * @remarks
   * The number of B-frames. Valid values: 1 to 3.
   * 
   * @example
   * 3
   */
  bframesNum?: number;
  /**
   * @remarks
   * The size of the video GOP. If the length unit is SECONDS, valid values are 1 to 20. If the length unit is FRAMES, valid values are 1 to 3000.
   * 
   * @example
   * 90
   */
  gopSize?: number;
  /**
   * @remarks
   * The unit of the video GOP length. Valid values: FRAMES (frames) and SECONDS (seconds).
   * 
   * @example
   * FRAMES
   */
  gopSizeUnits?: string;
  static names(): { [key: string]: string } {
    return {
      bframesNum: 'BframesNum',
      gopSize: 'GopSize',
      gopSizeUnits: 'GopSizeUnits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bframesNum: 'number',
      gopSize: 'number',
      gopSizeUnits: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingRate extends $dara.Model {
  /**
   * @remarks
   * The video bitrate. Unit: bit/s. If you do not specify this parameter or set it to 0, the bitrate of the source video is used. Valid values: 50000 to 6000000. The value must be a multiple of 1000.
   * 
   * @example
   * 2500000
   */
  bitrate?: number;
  /**
   * @remarks
   * The buffer size for video encoding. Unit: bit/s. Valid values: 100000 to 6000000. The value must be a multiple of 1000.
   * 
   * @example
   * 6000000
   */
  bufferSize?: number;
  /**
   * @remarks
   * The maximum bitrate for video encoding. Unit: bit/s. Valid values: 100000 to 6000000. The value must be a multiple of 1000.
   * 
   * @example
   * 6000000
   */
  maxBitrate?: number;
  /**
   * @remarks
   * The rate control mode for video encoding. Valid values: CBR, ABR, and VBR.
   * 
   * @example
   * ABR
   */
  rateControlMode?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      bufferSize: 'BufferSize',
      maxBitrate: 'MaxBitrate',
      rateControlMode: 'RateControlMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      bufferSize: 'number',
      maxBitrate: 'number',
      rateControlMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSetting extends $dara.Model {
  /**
   * @remarks
   * The video codec detail settings.
   */
  codecDetail?: UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingCodecDetail;
  /**
   * @remarks
   * The video frame rate settings. If you do not specify this parameter, the frame rate settings of the source video are used.
   */
  framerate?: UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingFramerate;
  /**
   * @remarks
   * The video group of pictures (GOP) settings. If you do not specify this parameter, the GOP settings of the source video are used.
   */
  gop?: UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingGop;
  /**
   * @remarks
   * The video encoding rate settings. If you do not specify this parameter, the rate settings of the source video are used.
   */
  rate?: UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingRate;
  static names(): { [key: string]: string } {
    return {
      codecDetail: 'CodecDetail',
      framerate: 'Framerate',
      gop: 'Gop',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codecDetail: UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingCodecDetail,
      framerate: UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingFramerate,
      gop: UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingGop,
      rate: UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSettingRate,
    };
  }

  validate() {
    if(this.codecDetail && typeof (this.codecDetail as any).validate === 'function') {
      (this.codecDetail as any).validate();
    }
    if(this.framerate && typeof (this.framerate as any).validate === 'function') {
      (this.framerate as any).validate();
    }
    if(this.gop && typeof (this.gop as any).validate === 'function') {
      (this.gop as any).validate();
    }
    if(this.rate && typeof (this.rate as any).validate === 'function') {
      (this.rate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaLiveChannelRequestVideoSettings extends $dara.Model {
  /**
   * @remarks
   * The height of the video resolution. If you do not specify this parameter or set it to 0, the height is automatically scaled based on the width.
   * Valid values:
   * - For standard transcoding: max(Width, Height) < 3840 and min(Width, Height) < 2160.
   * - For Narrowband HD transcoding: max(Width, Height) < 1920 and min(Width, Height) < 1080.
   * 
   * @example
   * 720
   */
  height?: number;
  /**
   * @remarks
   * The name of the video setting. The name can contain letters, digits, hyphens (-), and underscores (_). It can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * video1
   */
  name?: string;
  /**
   * @remarks
   * The video codec. Valid values: H264 and H265.
   * 
   * @example
   * H264
   */
  videoCodec?: string;
  /**
   * @remarks
   * The video codec settings.
   */
  videoCodecSetting?: UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSetting;
  /**
   * @remarks
   * The video transcoding method. Valid values:
   * - NORMAL: standard transcoding.
   * - NBHD: Narrowband HD transcoding.
   * Default value: NORMAL.
   * 
   * @example
   * NORMAL
   */
  videoCodecType?: string;
  /**
   * @remarks
   * The width of the video resolution. If you do not specify this parameter or set it to 0, the width is automatically scaled based on the height.
   * Valid values:
   * - For standard transcoding: max(Width, Height) < 3840 and min(Width, Height) < 2160.
   * - For Narrowband HD transcoding: max(Width, Height) < 1920 and min(Width, Height) < 1080.
   * 
   * @example
   * 1280
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      name: 'Name',
      videoCodec: 'VideoCodec',
      videoCodecSetting: 'VideoCodecSetting',
      videoCodecType: 'VideoCodecType',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      name: 'string',
      videoCodec: 'string',
      videoCodecSetting: UpdateMediaLiveChannelRequestVideoSettingsVideoCodecSetting,
      videoCodecType: 'string',
      width: 'number',
    };
  }

  validate() {
    if(this.videoCodecSetting && typeof (this.videoCodecSetting as any).validate === 'function') {
      (this.videoCodecSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaLiveChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The audio settings.
   */
  audioSettings?: UpdateMediaLiveChannelRequestAudioSettings[];
  /**
   * @remarks
   * The channel ID.
   * 
   * This parameter is required.
   * 
   * @example
   * SEGK5KA6KYKAWQQH
   */
  channelId?: string;
  /**
   * @remarks
   * The input attachment settings.
   * 
   * This parameter is required.
   */
  inputAttachments?: UpdateMediaLiveChannelRequestInputAttachments[];
  /**
   * @remarks
   * The channel name. The name can contain letters, digits, hyphens (-), and underscores (_). The name can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * mych
   */
  name?: string;
  /**
   * @remarks
   * The output group configuration.
   * 
   * This parameter is required.
   */
  outputGroups?: UpdateMediaLiveChannelRequestOutputGroups[];
  /**
   * @remarks
   * The video settings.
   */
  videoSettings?: UpdateMediaLiveChannelRequestVideoSettings[];
  static names(): { [key: string]: string } {
    return {
      audioSettings: 'AudioSettings',
      channelId: 'ChannelId',
      inputAttachments: 'InputAttachments',
      name: 'Name',
      outputGroups: 'OutputGroups',
      videoSettings: 'VideoSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioSettings: { 'type': 'array', 'itemType': UpdateMediaLiveChannelRequestAudioSettings },
      channelId: 'string',
      inputAttachments: { 'type': 'array', 'itemType': UpdateMediaLiveChannelRequestInputAttachments },
      name: 'string',
      outputGroups: { 'type': 'array', 'itemType': UpdateMediaLiveChannelRequestOutputGroups },
      videoSettings: { 'type': 'array', 'itemType': UpdateMediaLiveChannelRequestVideoSettings },
    };
  }

  validate() {
    if(Array.isArray(this.audioSettings)) {
      $dara.Model.validateArray(this.audioSettings);
    }
    if(Array.isArray(this.inputAttachments)) {
      $dara.Model.validateArray(this.inputAttachments);
    }
    if(Array.isArray(this.outputGroups)) {
      $dara.Model.validateArray(this.outputGroups);
    }
    if(Array.isArray(this.videoSettings)) {
      $dara.Model.validateArray(this.videoSettings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

