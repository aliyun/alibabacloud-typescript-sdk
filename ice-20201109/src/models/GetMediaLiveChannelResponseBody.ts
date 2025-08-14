// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaLiveChannelResponseBodyChannelAudioSettingsAudioCodecSetting extends $dara.Model {
  /**
   * @remarks
   * The audio bitrate. Unit: bit/s.
   * 
   * @example
   * 200000
   */
  bitrate?: number;
  /**
   * @remarks
   * The audio codec profile.
   * 
   * @example
   * AAC-LOW
   */
  profile?: string;
  /**
   * @remarks
   * The audio sample rate. Unit: Hz.
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

export class GetMediaLiveChannelResponseBodyChannelAudioSettings extends $dara.Model {
  /**
   * @remarks
   * The audio codec.
   * 
   * @example
   * aac
   */
  audioCodec?: string;
  /**
   * @remarks
   * The audio encoding settings.
   */
  audioCodecSetting?: GetMediaLiveChannelResponseBodyChannelAudioSettingsAudioCodecSetting;
  /**
   * @remarks
   * The name of the audio selector.
   * 
   * @example
   * myselector
   */
  audioSelectorName?: string;
  /**
   * @remarks
   * A three-letter ISO 639-2 language code.
   * 
   * @example
   * eng
   */
  languageCode?: string;
  /**
   * @remarks
   * The name of the language.
   * 
   * @example
   * English
   */
  languageName?: string;
  /**
   * @remarks
   * The name of the audio settings.
   * 
   * @example
   * zhuanfengzhuang
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
      audioCodecSetting: GetMediaLiveChannelResponseBodyChannelAudioSettingsAudioCodecSetting,
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

export class GetMediaLiveChannelResponseBodyChannelInputAttachmentsAudioSelectorsAudioLanguageSelection extends $dara.Model {
  /**
   * @remarks
   * A three-letter ISO 639-2 language code from within an audio source.
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

export class GetMediaLiveChannelResponseBodyChannelInputAttachmentsAudioSelectorsAudioPidSelection extends $dara.Model {
  /**
   * @remarks
   * A PID from within a source.
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

export class GetMediaLiveChannelResponseBodyChannelInputAttachmentsAudioSelectorsAudioTrackSelection extends $dara.Model {
  /**
   * @remarks
   * The track ID from within a source.
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

export class GetMediaLiveChannelResponseBodyChannelInputAttachmentsAudioSelectors extends $dara.Model {
  /**
   * @remarks
   * The audio language selection.
   */
  audioLanguageSelection?: GetMediaLiveChannelResponseBodyChannelInputAttachmentsAudioSelectorsAudioLanguageSelection;
  /**
   * @remarks
   * The audio PID selection.
   */
  audioPidSelection?: GetMediaLiveChannelResponseBodyChannelInputAttachmentsAudioSelectorsAudioPidSelection;
  /**
   * @remarks
   * The audio track selection.
   */
  audioTrackSelection?: GetMediaLiveChannelResponseBodyChannelInputAttachmentsAudioSelectorsAudioTrackSelection[];
  /**
   * @remarks
   * The name of the audio selector.
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
      audioLanguageSelection: GetMediaLiveChannelResponseBodyChannelInputAttachmentsAudioSelectorsAudioLanguageSelection,
      audioPidSelection: GetMediaLiveChannelResponseBodyChannelInputAttachmentsAudioSelectorsAudioPidSelection,
      audioTrackSelection: { 'type': 'array', 'itemType': GetMediaLiveChannelResponseBodyChannelInputAttachmentsAudioSelectorsAudioTrackSelection },
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

export class GetMediaLiveChannelResponseBodyChannelInputAttachments extends $dara.Model {
  /**
   * @remarks
   * The audio selectors.
   */
  audioSelectors?: GetMediaLiveChannelResponseBodyChannelInputAttachmentsAudioSelectors[];
  /**
   * @remarks
   * The ID of the associated input.
   * 
   * This parameter is required.
   * 
   * @example
   * SEGK5KA6KYKAWQQH
   */
  inputId?: string;
  /**
   * @remarks
   * The name of the input.
   * 
   * @example
   * myinput
   */
  inputName?: string;
  /**
   * @remarks
   * The language name.
   * 
   * @example
   * eng
   */
  languageName?: string;
  static names(): { [key: string]: string } {
    return {
      audioSelectors: 'AudioSelectors',
      inputId: 'InputId',
      inputName: 'InputName',
      languageName: 'LanguageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioSelectors: { 'type': 'array', 'itemType': GetMediaLiveChannelResponseBodyChannelInputAttachmentsAudioSelectors },
      inputId: 'string',
      inputName: 'string',
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

export class GetMediaLiveChannelResponseBodyChannelOutputGroupsMediaPackageGroupSetting extends $dara.Model {
  /**
   * @remarks
   * ChannelName in MediaPackage.
   * 
   * @example
   * myPackageChannel
   */
  channelName?: string;
  /**
   * @remarks
   * GroupName in MediaPackage.
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

export class GetMediaLiveChannelResponseBodyChannelOutputGroupsOutputsMediaPackageOutputSetting extends $dara.Model {
  /**
   * @remarks
   * The manifest audio group ID.
   * 
   * @example
   * audiogroup
   */
  audioGroupId?: string;
  /**
   * @remarks
   * The manifest name modifier. The child manifests include this modifier in their M3U8 file names.
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

export class GetMediaLiveChannelResponseBodyChannelOutputGroupsOutputs extends $dara.Model {
  /**
   * @remarks
   * The referenced AudioSettings.
   */
  audioSettingNames?: string[];
  /**
   * @remarks
   * The settings of the output delivered to MediaPackage.
   */
  mediaPackageOutputSetting?: GetMediaLiveChannelResponseBodyChannelOutputGroupsOutputsMediaPackageOutputSetting;
  /**
   * @remarks
   * The media type of the output.
   * 
   * @example
   * 0
   */
  mediaType?: number;
  /**
   * @remarks
   * The name of the output.
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
      mediaPackageOutputSetting: GetMediaLiveChannelResponseBodyChannelOutputGroupsOutputsMediaPackageOutputSetting,
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

export class GetMediaLiveChannelResponseBodyChannelOutputGroups extends $dara.Model {
  /**
   * @remarks
   * The MediaPackage destination.
   */
  mediaPackageGroupSetting?: GetMediaLiveChannelResponseBodyChannelOutputGroupsMediaPackageGroupSetting;
  /**
   * @remarks
   * The URL for monitoring the output group. The parameter is returned only when the output gourp type is MediaPackage.
   * 
   * @example
   * rtmp://xxx
   */
  monitorUrl?: string;
  /**
   * @remarks
   * The name of the output group.
   * 
   * @example
   * group1
   */
  name?: string;
  /**
   * @remarks
   * The outputs in the output group.
   */
  outputs?: GetMediaLiveChannelResponseBodyChannelOutputGroupsOutputs[];
  /**
   * @remarks
   * The output group type.
   * 
   * @example
   * MediaPackage
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      mediaPackageGroupSetting: 'MediaPackageGroupSetting',
      monitorUrl: 'MonitorUrl',
      name: 'Name',
      outputs: 'Outputs',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaPackageGroupSetting: GetMediaLiveChannelResponseBodyChannelOutputGroupsMediaPackageGroupSetting,
      monitorUrl: 'string',
      name: 'string',
      outputs: { 'type': 'array', 'itemType': GetMediaLiveChannelResponseBodyChannelOutputGroupsOutputs },
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

export class GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingCodecDetail extends $dara.Model {
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
   * The H.264 profile.
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

export class GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingFramerate extends $dara.Model {
  /**
   * @remarks
   * The frame rate mode.
   * 
   * @example
   * SPECIFIED
   */
  framerateControl?: string;
  /**
   * @remarks
   * The denominator of the fixed frame rate.
   * 
   * @example
   * 1
   */
  framerateDenominator?: number;
  /**
   * @remarks
   * The numerator of the fixed frame rate.
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

export class GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingGop extends $dara.Model {
  /**
   * @remarks
   * The number of B frames.
   * 
   * @example
   * 3
   */
  bframesNum?: number;
  /**
   * @remarks
   * The GOP size.
   * 
   * @example
   * 90
   */
  gopSize?: number;
  /**
   * @remarks
   * The GOP size unit.
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

export class GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingRate extends $dara.Model {
  /**
   * @remarks
   * The video bitrate. Unit: bit/s.
   * 
   * @example
   * 2500000
   */
  bitrate?: number;
  /**
   * @remarks
   * The video buffer size. Unit: bit/s.
   * 
   * @example
   * 6000000
   */
  bufferSize?: number;
  /**
   * @remarks
   * The maximum bitrate. Unit: bit/s.
   * 
   * @example
   * 6000000
   */
  maxBitrate?: number;
  /**
   * @remarks
   * The bitrate control mode.
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

export class GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSetting extends $dara.Model {
  /**
   * @remarks
   * The video encoding settings.
   */
  codecDetail?: GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingCodecDetail;
  /**
   * @remarks
   * The frame rate.
   */
  framerate?: GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingFramerate;
  /**
   * @remarks
   * The GOP setting.
   */
  gop?: GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingGop;
  /**
   * @remarks
   * The video encoding rate.
   */
  rate?: GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingRate;
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
      codecDetail: GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingCodecDetail,
      framerate: GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingFramerate,
      gop: GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingGop,
      rate: GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingRate,
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

export class GetMediaLiveChannelResponseBodyChannelVideoSettings extends $dara.Model {
  /**
   * @remarks
   * The height of the video in pixels.
   * 
   * @example
   * 720
   */
  height?: number;
  /**
   * @remarks
   * The name of the video settings.
   * 
   * @example
   * video1
   */
  name?: string;
  /**
   * @remarks
   * The video codec.
   * 
   * @example
   * H264
   */
  videoCodec?: string;
  /**
   * @remarks
   * The video encoding settings.
   */
  videoCodecSetting?: GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSetting;
  /**
   * @remarks
   * The video transcoding method. Valid values: NORMAL (regular transcoding) and NBHD (Narrowband HD™ transcoding).
   * 
   * @example
   * NORMAL
   */
  videoCodecType?: string;
  /**
   * @remarks
   * The width of the video in pixels.
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
      videoCodecSetting: GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSetting,
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

export class GetMediaLiveChannelResponseBodyChannel extends $dara.Model {
  /**
   * @remarks
   * The audio settings.
   */
  audioSettings?: GetMediaLiveChannelResponseBodyChannelAudioSettings[];
  /**
   * @remarks
   * The ID of the channel.
   * 
   * @example
   * SEGK5KA6KYKAWQQH
   */
  channelId?: string;
  /**
   * @remarks
   * The time when the channel was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-12-03T06:56:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The inputs associated with the channel.
   */
  inputAttachments?: GetMediaLiveChannelResponseBodyChannelInputAttachments[];
  /**
   * @remarks
   * The time when the channel was last started. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC. If the channel has never been started since it was created, an empty string is returned.
   * 
   * @example
   * 2024-12-03T06:56:42Z
   */
  lastStartTime?: string;
  /**
   * @remarks
   * The time when the channel was last stopped. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC. If the channel has never stopped since it was created, an empty string is returned.
   * 
   * @example
   * 2024-12-03T06:56:42Z
   */
  lastStopTime?: string;
  /**
   * @remarks
   * The channel name.
   * 
   * @example
   * mych
   */
  name?: string;
  /**
   * @remarks
   * The output groups.
   */
  outputGroups?: GetMediaLiveChannelResponseBodyChannelOutputGroups[];
  /**
   * @remarks
   * The state of the channel. Valid values: IDLE, STARTING, RUNNING, RECOVERING, and STOPPING.
   * 
   * @example
   * IDLE
   */
  state?: string;
  /**
   * @remarks
   * The video settings.
   */
  videoSettings?: GetMediaLiveChannelResponseBodyChannelVideoSettings[];
  static names(): { [key: string]: string } {
    return {
      audioSettings: 'AudioSettings',
      channelId: 'ChannelId',
      createTime: 'CreateTime',
      inputAttachments: 'InputAttachments',
      lastStartTime: 'LastStartTime',
      lastStopTime: 'LastStopTime',
      name: 'Name',
      outputGroups: 'OutputGroups',
      state: 'State',
      videoSettings: 'VideoSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioSettings: { 'type': 'array', 'itemType': GetMediaLiveChannelResponseBodyChannelAudioSettings },
      channelId: 'string',
      createTime: 'string',
      inputAttachments: { 'type': 'array', 'itemType': GetMediaLiveChannelResponseBodyChannelInputAttachments },
      lastStartTime: 'string',
      lastStopTime: 'string',
      name: 'string',
      outputGroups: { 'type': 'array', 'itemType': GetMediaLiveChannelResponseBodyChannelOutputGroups },
      state: 'string',
      videoSettings: { 'type': 'array', 'itemType': GetMediaLiveChannelResponseBodyChannelVideoSettings },
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

export class GetMediaLiveChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The channel information.
   */
  channel?: GetMediaLiveChannelResponseBodyChannel;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: GetMediaLiveChannelResponseBodyChannel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.channel && typeof (this.channel as any).validate === 'function') {
      (this.channel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

