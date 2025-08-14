// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMediaLiveChannelRequestAudioSettingsAudioCodecSetting extends $dara.Model {
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
   * The audio codec profile. When AudioCodec is set to aac, AAC-LOW and AAC-MAIN are supported. When AudioCodec is set to libfdk_aac, AAC-LOW, AAC-HE, and AAC-HEV2 are supported.
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

export class CreateMediaLiveChannelRequestAudioSettings extends $dara.Model {
  /**
   * @remarks
   * The audio codec. If it is not specified, the source specification is used. Valid values: aac and libfdk_aac.
   * 
   * @example
   * libfdk_aac
   */
  audioCodec?: string;
  /**
   * @remarks
   * The audio encoding settings.
   */
  audioCodecSetting?: CreateMediaLiveChannelRequestAudioSettingsAudioCodecSetting;
  /**
   * @remarks
   * The name of the audio selector.
   * 
   * @example
   * a1
   */
  audioSelectorName?: string;
  /**
   * @remarks
   * Enter a three-letter ISO 639-2 language code. If the audio track selected by the audio selector has a language code, the language code specified in the audio selector is used. If the selected audio track does not have a language code, or if the audio selector cannot find a track that matches its criteria, this language code is used.
   * 
   * @example
   * eng
   */
  languageCode?: string;
  /**
   * @remarks
   * The tag that identifies the language of the RTMP input. It can be referenced by the output. The maximum length is 32 characters. Supported characters:
   * 
   * *   Unicode letters
   * *   Digits (0-9)
   * *   Underscore (_)
   * *   Hyphen (-)
   * *   Space (a space cannot be at the beginning or end)
   * 
   * @example
   * English
   */
  languageName?: string;
  /**
   * @remarks
   * The name of the audio settings. Letters, digits, hyphens (-), and underscores (_) are supported. It can be up to 64 characters in length.
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
      audioCodecSetting: CreateMediaLiveChannelRequestAudioSettingsAudioCodecSetting,
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

export class CreateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioLanguageSelection extends $dara.Model {
  /**
   * @remarks
   * Enter a three-letter ISO 639-2 language code from within an audio source.
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

export class CreateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioPidSelection extends $dara.Model {
  /**
   * @remarks
   * Enter a specific PID from within a source.
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

export class CreateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioTrackSelection extends $dara.Model {
  /**
   * @remarks
   * Specify one or more audio tracks from within a source using Track ID.
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

export class CreateMediaLiveChannelRequestInputAttachmentsAudioSelectors extends $dara.Model {
  /**
   * @remarks
   * The audio language selection.
   */
  audioLanguageSelection?: CreateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioLanguageSelection;
  /**
   * @remarks
   * The audio PID selection.
   */
  audioPidSelection?: CreateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioPidSelection;
  /**
   * @remarks
   * The audio track selection.
   */
  audioTrackSelection?: CreateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioTrackSelection[];
  /**
   * @remarks
   * The name of the audio selector. Letters, digits, hyphens (-), and underscores (_) are supported. It can be up to 64 characters in length.
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
      audioLanguageSelection: CreateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioLanguageSelection,
      audioPidSelection: CreateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioPidSelection,
      audioTrackSelection: { 'type': 'array', 'itemType': CreateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioTrackSelection },
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

export class CreateMediaLiveChannelRequestInputAttachments extends $dara.Model {
  /**
   * @remarks
   * The audio selectors.
   */
  audioSelectors?: CreateMediaLiveChannelRequestInputAttachmentsAudioSelectors[];
  /**
   * @remarks
   * The ID of the associated input.
   * 
   * This parameter is required.
   * 
   * @example
   * myinput
   */
  inputId?: string;
  /**
   * @remarks
   * The tag that identifies the language of the RTMP input. It can be referenced by the output. The maximum length is 32 characters. Supported characters:
   * 
   * *   Unicode letters
   * *   Digits (0-9)
   * *   Underscore (_)
   * *   Hyphen (-)
   * *   Space (a space cannot be at the beginning or end)
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
      audioSelectors: { 'type': 'array', 'itemType': CreateMediaLiveChannelRequestInputAttachmentsAudioSelectors },
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

export class CreateMediaLiveChannelRequestOutputGroupsMediaPackageGroupSetting extends $dara.Model {
  /**
   * @remarks
   * ChannelName in MediaPackage.
   * 
   * This parameter is required.
   * 
   * @example
   * myPackageChannel
   */
  channelName?: string;
  /**
   * @remarks
   * GroupName in MediaPackage.
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

export class CreateMediaLiveChannelRequestOutputGroupsOutputsMediaPackageOutputSetting extends $dara.Model {
  /**
   * @remarks
   * The manifest audio group ID. To associate several audio tracks into one group, assign the same audio group ID. Viewers can select a track as needed. Letters, digits, hyphens (-), and underscores (_) are supported. It can be up to 40 characters in length.
   * 
   * @example
   * audiogroup
   */
  audioGroupId?: string;
  /**
   * @remarks
   * The manifest name modifier. The child manifests include this modifier in their M3U8 file names. Letters, digits, hyphens (-), and underscores (_) are supported. The maximum length is 40 characters.
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

export class CreateMediaLiveChannelRequestOutputGroupsOutputs extends $dara.Model {
  /**
   * @remarks
   * The referenced AudioSettings.
   */
  audioSettingNames?: string[];
  /**
   * @remarks
   * The settings of the output delivered to MediaPackage.
   */
  mediaPackageOutputSetting?: CreateMediaLiveChannelRequestOutputGroupsOutputsMediaPackageOutputSetting;
  /**
   * @remarks
   * The media type of the output. Valid values:
   * 
   * *   0: Audio and Video.
   * *   1: Audio. If you set the value to 1, you cannot reference VideoSettings.
   * *   2: Video. If you set the value to 2, you cannot reference AudioSettings.
   * 
   * @example
   * 0
   */
  mediaType?: number;
  /**
   * @remarks
   * The name of the output. Letters, digits, hyphens (-), and underscores (_) are supported. It can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * output1
   */
  name?: string;
  /**
   * @remarks
   * The name of the referenced VideoSettings.
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
      mediaPackageOutputSetting: CreateMediaLiveChannelRequestOutputGroupsOutputsMediaPackageOutputSetting,
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

export class CreateMediaLiveChannelRequestOutputGroups extends $dara.Model {
  /**
   * @remarks
   * The MediaPackage destination.
   */
  mediaPackageGroupSetting?: CreateMediaLiveChannelRequestOutputGroupsMediaPackageGroupSetting;
  /**
   * @remarks
   * The name of the output group. Letters, digits, hyphens (-), and underscores (_) are supported. It can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * group1
   */
  name?: string;
  /**
   * @remarks
   * The outputs in the output group.
   * 
   * This parameter is required.
   */
  outputs?: CreateMediaLiveChannelRequestOutputGroupsOutputs[];
  /**
   * @remarks
   * The output group type. Only MediaPackage is supported.
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
      mediaPackageGroupSetting: CreateMediaLiveChannelRequestOutputGroupsMediaPackageGroupSetting,
      name: 'string',
      outputs: { 'type': 'array', 'itemType': CreateMediaLiveChannelRequestOutputGroupsOutputs },
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

export class CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingCodecDetail extends $dara.Model {
  /**
   * @remarks
   * The video encoding level. It is not supported yet.
   * 
   * @example
   * H264_LEVEL_AUTO
   */
  level?: string;
  /**
   * @remarks
   * The H.264 profile. Valid values: BASELINE, HIGH, and MAIN. Default value: MAIN. The parameter takes effect only when the codec is H.264.
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

export class CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingFramerate extends $dara.Model {
  /**
   * @remarks
   * The frame rate mode. Valid values: SPECIFIED (fixed frame rate) and FROM_SOURCE (use source specification).
   * 
   * @example
   * SPECIFIED
   */
  framerateControl?: string;
  /**
   * @remarks
   * The denominator of the fixed frame rate. The parameter is required when FramerateControl is set to SPECIFIED. Valid values: 1 to 60. The numerator must be divisible by the denominator.
   * 
   * @example
   * 1
   */
  framerateDenominator?: number;
  /**
   * @remarks
   * The numerator of the fixed frame rate. The parameter is required when FramerateControl is set to SPECIFIED. Valid values: 1 to 60. The numerator must be divisible by the denominator.
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

export class CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingGop extends $dara.Model {
  /**
   * @remarks
   * The number of B frames. Valid values: 1 to 3.
   * 
   * @example
   * 3
   */
  bframesNum?: number;
  /**
   * @remarks
   * The GOP size. When GopSizeUnits is set to SECONDS, the value range is from 1 to 20. When GopSizeUnits is set to FRAMES, the value range is from 1 to 3000.
   * 
   * @example
   * 90
   */
  gopSize?: number;
  /**
   * @remarks
   * The GOP size unit. Valid values: FRAMES and SECONDS.
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

export class CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingRate extends $dara.Model {
  /**
   * @remarks
   * The video bitrate. Unit: bit/s. If you set it to 0 or leave it empty, the source specification is used. Valid values: 50000 to 6000000. The value must be divisible by 1000.
   * 
   * @example
   * 2500000
   */
  bitrate?: number;
  /**
   * @remarks
   * The video buffer size. Unit: bit/s. Valid values: 100000 to 6000000. The value must be divisible by 1000.
   * 
   * @example
   * 6000000
   */
  bufferSize?: number;
  /**
   * @remarks
   * The maximum bitrate. Unit: bit/s. Valid values: 100000 to 6000000. The value must be divisible by 1000.
   * 
   * @example
   * 6000000
   */
  maxBitrate?: number;
  /**
   * @remarks
   * The bitrate control mode. Valid values: CBR, ABR, and VBR.
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

export class CreateMediaLiveChannelRequestVideoSettingsVideoCodecSetting extends $dara.Model {
  /**
   * @remarks
   * The video encoding settings.
   */
  codecDetail?: CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingCodecDetail;
  /**
   * @remarks
   * The frame rate. If it is not specified, the source specification is used.
   */
  framerate?: CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingFramerate;
  /**
   * @remarks
   * The GOP setting. If it is not specified, the source specification is used.
   */
  gop?: CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingGop;
  /**
   * @remarks
   * The video encoding rate. If it is not specified, the source specification is used.
   */
  rate?: CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingRate;
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
      codecDetail: CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingCodecDetail,
      framerate: CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingFramerate,
      gop: CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingGop,
      rate: CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingRate,
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

export class CreateMediaLiveChannelRequestVideoSettings extends $dara.Model {
  /**
   * @remarks
   * The height of the output. If you set it to 0 or leave it empty, the height automatically adapts to the specified width to maintain the original aspect ratio.
   * 
   * Valid values:
   * 
   * *   For regular transcoding, the larger dimension cannot exceed 3840 px, and the smaller one cannot exceed 2160 px.
   * *   For Narrowband HD™ transcoding, the larger dimension cannot exceed 1920 px, and the smaller one cannot exceed 1080 px.
   * 
   * @example
   * 720
   */
  height?: number;
  /**
   * @remarks
   * The name of the video settings. Letters, digits, hyphens (-), and underscores (_) are supported. It can be up to 64 characters in length.
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
   * The video encoding settings.
   */
  videoCodecSetting?: CreateMediaLiveChannelRequestVideoSettingsVideoCodecSetting;
  /**
   * @remarks
   * The video transcoding method. Valid values:
   * 
   * *   NORMAL: regular transcoding
   * *   NBHD: Narrowband HD™ transcoding
   * 
   * If not specified, regular transcoding is used by default.
   * 
   * @example
   * NORMAL
   */
  videoCodecType?: string;
  /**
   * @remarks
   * The width of the output. If you set it to 0 or leave it empty, the width automatically adapts to the specified height to maintain the original aspect ratio.
   * 
   * Valid values:
   * 
   * *   For regular transcoding, the larger dimension cannot exceed 3840 px, and the smaller one cannot exceed 2160 px.
   * *   For Narrowband HD™ transcoding, the larger dimension cannot exceed 1920 px, and the smaller one cannot exceed 1080 px.
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
      videoCodecSetting: CreateMediaLiveChannelRequestVideoSettingsVideoCodecSetting,
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

export class CreateMediaLiveChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The audio settings.
   */
  audioSettings?: CreateMediaLiveChannelRequestAudioSettings[];
  /**
   * @remarks
   * The associated inputs.
   * 
   * This parameter is required.
   */
  inputAttachments?: CreateMediaLiveChannelRequestInputAttachments[];
  /**
   * @remarks
   * The name of the channel. Letters, digits, hyphens (-), and underscores (_) are supported. It can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * mych
   */
  name?: string;
  /**
   * @remarks
   * The output groups.
   * 
   * This parameter is required.
   */
  outputGroups?: CreateMediaLiveChannelRequestOutputGroups[];
  /**
   * @remarks
   * The video settings.
   */
  videoSettings?: CreateMediaLiveChannelRequestVideoSettings[];
  static names(): { [key: string]: string } {
    return {
      audioSettings: 'AudioSettings',
      inputAttachments: 'InputAttachments',
      name: 'Name',
      outputGroups: 'OutputGroups',
      videoSettings: 'VideoSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioSettings: { 'type': 'array', 'itemType': CreateMediaLiveChannelRequestAudioSettings },
      inputAttachments: { 'type': 'array', 'itemType': CreateMediaLiveChannelRequestInputAttachments },
      name: 'string',
      outputGroups: { 'type': 'array', 'itemType': CreateMediaLiveChannelRequestOutputGroups },
      videoSettings: { 'type': 'array', 'itemType': CreateMediaLiveChannelRequestVideoSettings },
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

