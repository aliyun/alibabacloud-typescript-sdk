// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaLiveChannelsResponseBodyChannelsAudioSettingsAudioCodecSetting extends $dara.Model {
  /**
   * @remarks
   * The audio bitrate.
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
   * The audio sample rate.
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

export class ListMediaLiveChannelsResponseBodyChannelsAudioSettings extends $dara.Model {
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
   * The audio codec settings.
   */
  audioCodecSetting?: ListMediaLiveChannelsResponseBodyChannelsAudioSettingsAudioCodecSetting;
  /**
   * @remarks
   * The audio selector name.
   * 
   * @example
   * myselector
   */
  audioSelectorName?: string;
  /**
   * @remarks
   * The ISO 639-2 language code. The code consists of three characters.
   * 
   * @example
   * eng
   */
  languageCode?: string;
  /**
   * @remarks
   * The language name. This parameter is valid only for RTMP inputs and specifies the name tag used by the output.
   * 
   * @example
   * English
   */
  languageName?: string;
  /**
   * @remarks
   * The audio setting name.
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
      audioCodecSetting: ListMediaLiveChannelsResponseBodyChannelsAudioSettingsAudioCodecSetting,
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

export class ListMediaLiveChannelsResponseBodyChannelsInputAttachmentsAudioSelectorsAudioLanguageSelection extends $dara.Model {
  /**
   * @remarks
   * The ISO 639-2 language code. The code consists of three characters.
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

export class ListMediaLiveChannelsResponseBodyChannelsInputAttachmentsAudioSelectorsAudioPidSelection extends $dara.Model {
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

export class ListMediaLiveChannelsResponseBodyChannelsInputAttachmentsAudioSelectorsAudioTrackSelection extends $dara.Model {
  /**
   * @remarks
   * The track ID of the input source stream.
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

export class ListMediaLiveChannelsResponseBodyChannelsInputAttachmentsAudioSelectors extends $dara.Model {
  /**
   * @remarks
   * The language selector.
   */
  audioLanguageSelection?: ListMediaLiveChannelsResponseBodyChannelsInputAttachmentsAudioSelectorsAudioLanguageSelection;
  /**
   * @remarks
   * The PID selector.
   */
  audioPidSelection?: ListMediaLiveChannelsResponseBodyChannelsInputAttachmentsAudioSelectorsAudioPidSelection;
  /**
   * @remarks
   * The audio track selector.
   */
  audioTrackSelection?: ListMediaLiveChannelsResponseBodyChannelsInputAttachmentsAudioSelectorsAudioTrackSelection[];
  /**
   * @remarks
   * The audio selector name.
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
      audioLanguageSelection: ListMediaLiveChannelsResponseBodyChannelsInputAttachmentsAudioSelectorsAudioLanguageSelection,
      audioPidSelection: ListMediaLiveChannelsResponseBodyChannelsInputAttachmentsAudioSelectorsAudioPidSelection,
      audioTrackSelection: { 'type': 'array', 'itemType': ListMediaLiveChannelsResponseBodyChannelsInputAttachmentsAudioSelectorsAudioTrackSelection },
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

export class ListMediaLiveChannelsResponseBodyChannelsInputAttachments extends $dara.Model {
  /**
   * @remarks
   * The audio selectors.
   */
  audioSelectors?: ListMediaLiveChannelsResponseBodyChannelsInputAttachmentsAudioSelectors[];
  /**
   * @remarks
   * The ID of the attached input.
   * 
   * This parameter is required.
   * 
   * @example
   * SEGK5KA6KYKAWQQH
   */
  inputId?: string;
  /**
   * @remarks
   * The input name.
   * 
   * @example
   * myinput
   */
  inputName?: string;
  /**
   * @remarks
   * The language name. This parameter is valid only for RTMP inputs and specifies the name tag used by the output.
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
      audioSelectors: { 'type': 'array', 'itemType': ListMediaLiveChannelsResponseBodyChannelsInputAttachmentsAudioSelectors },
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

export class ListMediaLiveChannelsResponseBodyChannelsOutputGroupsMediaPackageGroupSetting extends $dara.Model {
  /**
   * @remarks
   * The channel name of the referenced MediaPackage.
   * 
   * @example
   * myPackageChannel
   */
  channelName?: string;
  /**
   * @remarks
   * The group name of the referenced MediaPackage.
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

export class ListMediaLiveChannelsResponseBodyChannelsOutputGroupsOutputsMediaPackageOutputSetting extends $dara.Model {
  /**
   * @remarks
   * The audio group ID in the manifest.
   * 
   * @example
   * audiogroup
   */
  audioGroupId?: string;
  /**
   * @remarks
   * The manifest suffix.
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

export class ListMediaLiveChannelsResponseBodyChannelsOutputGroupsOutputs extends $dara.Model {
  /**
   * @remarks
   * The list of referenced audio setting names.
   */
  audioSettingNames?: string[];
  /**
   * @remarks
   * The output settings when the output group type is MediaPackage.
   */
  mediaPackageOutputSetting?: ListMediaLiveChannelsResponseBodyChannelsOutputGroupsOutputsMediaPackageOutputSetting;
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
   * The output name.
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
      mediaPackageOutputSetting: ListMediaLiveChannelsResponseBodyChannelsOutputGroupsOutputsMediaPackageOutputSetting,
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

export class ListMediaLiveChannelsResponseBodyChannelsOutputGroups extends $dara.Model {
  /**
   * @remarks
   * The output group settings when the output group type is MediaPackage.
   */
  mediaPackageGroupSetting?: ListMediaLiveChannelsResponseBodyChannelsOutputGroupsMediaPackageGroupSetting;
  /**
   * @remarks
   * The output group monitoring URL for monitoring. This URL is returned only when the output group type is MediaPackage and you query the channel details.
   * 
   * @example
   * rtmp://xxx
   */
  monitorUrl?: string;
  /**
   * @remarks
   * The output group name.
   * 
   * @example
   * group1
   */
  name?: string;
  /**
   * @remarks
   * The output settings.
   */
  outputs?: ListMediaLiveChannelsResponseBodyChannelsOutputGroupsOutputs[];
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
      mediaPackageGroupSetting: ListMediaLiveChannelsResponseBodyChannelsOutputGroupsMediaPackageGroupSetting,
      monitorUrl: 'string',
      name: 'string',
      outputs: { 'type': 'array', 'itemType': ListMediaLiveChannelsResponseBodyChannelsOutputGroupsOutputs },
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

export class ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingCodecDetail extends $dara.Model {
  /**
   * @remarks
   * The video codec level. This parameter is not supported.
   * 
   * @example
   * H264_LEVEL_AUTO
   */
  level?: string;
  /**
   * @remarks
   * The video codec profile.
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

export class ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingFramerate extends $dara.Model {
  /**
   * @remarks
   * The video frame rate control mode.
   * 
   * @example
   * SPECIFIED
   */
  framerateControl?: string;
  /**
   * @remarks
   * The video frame rate denominator.
   * 
   * @example
   * 1
   */
  framerateDenominator?: number;
  /**
   * @remarks
   * The video frame rate numerator.
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

export class ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingGop extends $dara.Model {
  /**
   * @remarks
   * The number of B-frames.
   * 
   * @example
   * 3
   */
  bframesNum?: number;
  /**
   * @remarks
   * The video GOP size.
   * 
   * @example
   * 90
   */
  gopSize?: number;
  /**
   * @remarks
   * The unit of the video GOP size.
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

export class ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingRate extends $dara.Model {
  /**
   * @remarks
   * The video bitrate.
   * 
   * @example
   * 2500000
   */
  bitrate?: number;
  /**
   * @remarks
   * The video codec buffer size.
   * 
   * @example
   * 6000000
   */
  bufferSize?: number;
  /**
   * @remarks
   * The maximum video bitrate.
   * 
   * @example
   * 6000000
   */
  maxBitrate?: number;
  /**
   * @remarks
   * The video codec rate control mode.
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

export class ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSetting extends $dara.Model {
  /**
   * @remarks
   * The video codec detail settings.
   */
  codecDetail?: ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingCodecDetail;
  /**
   * @remarks
   * The video frame rate settings.
   */
  framerate?: ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingFramerate;
  /**
   * @remarks
   * The video GOP settings.
   */
  gop?: ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingGop;
  /**
   * @remarks
   * The video codec rate settings.
   */
  rate?: ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingRate;
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
      codecDetail: ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingCodecDetail,
      framerate: ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingFramerate,
      gop: ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingGop,
      rate: ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSettingRate,
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

export class ListMediaLiveChannelsResponseBodyChannelsVideoSettings extends $dara.Model {
  /**
   * @remarks
   * The height of the video resolution.
   * 
   * @example
   * 720
   */
  height?: number;
  /**
   * @remarks
   * The name of the video setting.
   * 
   * @example
   * video1
   */
  name?: string;
  /**
   * @remarks
   * The video codec type.
   * 
   * @example
   * H264
   */
  videoCodec?: string;
  /**
   * @remarks
   * The video codec settings.
   */
  videoCodecSetting?: ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSetting;
  /**
   * @remarks
   * The video transcoding method, such as standard transcoding and Narrowband HD transcoding.
   * 
   * @example
   * NORMAL
   */
  videoCodecType?: string;
  /**
   * @remarks
   * The width of the video resolution.
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
      videoCodecSetting: ListMediaLiveChannelsResponseBodyChannelsVideoSettingsVideoCodecSetting,
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

export class ListMediaLiveChannelsResponseBodyChannels extends $dara.Model {
  /**
   * @remarks
   * The audio settings.
   */
  audioSettings?: ListMediaLiveChannelsResponseBodyChannelsAudioSettings[];
  /**
   * @remarks
   * The channel ID.
   * 
   * @example
   * SEGK5KA6KYKAWQQH
   */
  channelId?: string;
  /**
   * @remarks
   * The time when the channel was created. The time is displayed in the yyyy-MM-ddTHH:mm:ssZ format (RFC 3339 format) and in UTC+0.
   * 
   * @example
   * 2024-12-03T06:56:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The input attachment settings.
   */
  inputAttachments?: ListMediaLiveChannelsResponseBodyChannelsInputAttachments[];
  /**
   * @remarks
   * The last time when the channel was started. The time is displayed in the yyyy-MM-ddTHH:mm:ssZ format (RFC 3339 format) and in UTC+0. If the channel has never been started since it was created, an empty string is returned.
   * 
   * @example
   * 2024-12-03T06:56:42Z
   */
  lastStartTime?: string;
  /**
   * @remarks
   * The last time when the channel was stopped. The time is displayed in the yyyy-MM-ddTHH:mm:ssZ format (RFC 3339 format) and in UTC+0. If the channel has never been stopped since it was created, an empty string is returned.
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
   * The output group configurations.
   */
  outputGroups?: ListMediaLiveChannelsResponseBodyChannelsOutputGroups[];
  /**
   * @remarks
   * The channel status. Valid values: IDLE, STARTING, RUNNING, RECOVERING, and STOPPING.
   * 
   * @example
   * IDLE
   */
  state?: string;
  /**
   * @remarks
   * The video settings.
   */
  videoSettings?: ListMediaLiveChannelsResponseBodyChannelsVideoSettings[];
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
      audioSettings: { 'type': 'array', 'itemType': ListMediaLiveChannelsResponseBodyChannelsAudioSettings },
      channelId: 'string',
      createTime: 'string',
      inputAttachments: { 'type': 'array', 'itemType': ListMediaLiveChannelsResponseBodyChannelsInputAttachments },
      lastStartTime: 'string',
      lastStopTime: 'string',
      name: 'string',
      outputGroups: { 'type': 'array', 'itemType': ListMediaLiveChannelsResponseBodyChannelsOutputGroups },
      state: 'string',
      videoSettings: { 'type': 'array', 'itemType': ListMediaLiveChannelsResponseBodyChannelsVideoSettings },
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

export class ListMediaLiveChannelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The channel configurations.
   */
  channels?: ListMediaLiveChannelsResponseBodyChannels[];
  /**
   * @remarks
   * The number of entries returned per page during paging in a paged query.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that meet the conditions of a conditional query with paging.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': ListMediaLiveChannelsResponseBodyChannels },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

