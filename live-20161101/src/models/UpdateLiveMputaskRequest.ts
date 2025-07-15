// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveMPUTaskRequestMultiStreamURL extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform stream relay by using Alibaba Cloud CDN. Valid values:
   * 
   * *   false: performs stream relay by using a CDN service that is not Alibaba Cloud CDN.
   * *   true: performs stream relay by using Alibaba Cloud CDN.
   * 
   * >  The default value of this parameter is false.
   * 
   * @example
   * false
   */
  isAliCdn?: boolean;
  /**
   * @remarks
   * The ingest URL. Only the RTMP format is supported. The URL can be up to 2,048 characters in length. For information about the generation rules of ingest URLs, see [Ingest and streaming URLs](https://help.aliyun.com/document_detail/199339.html).
   * 
   * @example
   * rtmp://example.com/live/stream****
   */
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      isAliCdn: 'IsAliCdn',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAliCdn: 'boolean',
      URL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveMPUTaskRequestSeiParamsLayoutVolume extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include the SEI in an Instantaneous Decoder Refresh (IDR) frame. Valid values:
   * 
   * *   **0**: does not include the SEI.
   * *   **1**: includes the SEI.
   * 
   * @example
   * 0
   */
  followIdr?: string;
  /**
   * @remarks
   * The interval at which the SEI is sent. Valid values: [1000,5000]. Unit: milliseconds.
   * 
   * @example
   * 1000
   */
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      followIdr: 'FollowIdr',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      followIdr: 'string',
      interval: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveMPUTaskRequestSeiParamsPassThrough extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include the SEI in an IDR frame. Valid values:
   * 
   * *   **0**: does not include the SEI.
   * *   **1**: includes the SEI.
   * 
   * @example
   * 0
   */
  followIdr?: string;
  /**
   * @remarks
   * The interval at which the SEI is sent. Valid values: [1000,5000]. Unit: milliseconds.
   * 
   * @example
   * 1000
   */
  interval?: string;
  /**
   * @remarks
   * The payload content of the SEI.
   * 
   * @example
   * yourPayloadContent
   */
  payloadContent?: string;
  /**
   * @remarks
   * The key of the payload content of the SEI. If you do not specify this parameter, the default value udd is used.
   * 
   * @example
   * yourPayloadContentKey
   */
  payloadContentKey?: string;
  static names(): { [key: string]: string } {
    return {
      followIdr: 'FollowIdr',
      interval: 'Interval',
      payloadContent: 'PayloadContent',
      payloadContentKey: 'PayloadContentKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      followIdr: 'string',
      interval: 'string',
      payloadContent: 'string',
      payloadContentKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveMPUTaskRequestSeiParams extends $dara.Model {
  /**
   * @remarks
   * The layout and volume SEI. If you leave this parameter empty, the default layout and volume SEI is used.
   */
  layoutVolume?: UpdateLiveMPUTaskRequestSeiParamsLayoutVolume;
  /**
   * @remarks
   * Specifies whether to pass through the SEI.
   */
  passThrough?: UpdateLiveMPUTaskRequestSeiParamsPassThrough;
  static names(): { [key: string]: string } {
    return {
      layoutVolume: 'LayoutVolume',
      passThrough: 'PassThrough',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutVolume: UpdateLiveMPUTaskRequestSeiParamsLayoutVolume,
      passThrough: UpdateLiveMPUTaskRequestSeiParamsPassThrough,
    };
  }

  validate() {
    if(this.layoutVolume && typeof (this.layoutVolume as any).validate === 'function') {
      (this.layoutVolume as any).validate();
    }
    if(this.passThrough && typeof (this.passThrough as any).validate === 'function') {
      (this.passThrough as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveMPUTaskRequestSingleSubParams extends $dara.Model {
  /**
   * @remarks
   * The type of the video source. This parameter is valid only when you set StreamType to 2. Valid values:
   * 
   * *   **camera** (default)
   * *   **shareScreen**
   * 
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @remarks
   * The type of the stream that you want to relay. Valid values:
   * 
   * *   **0** (default): original stream
   * *   **1**: only the audio track
   * *   **2**: only the video track
   * 
   * @example
   * 0
   */
  streamType?: string;
  /**
   * @remarks
   * The user ID. In the single-stream relay mode, you can relay only one stream in a request.
   * 
   * This parameter is required.
   * 
   * @example
   * yourSubUserId
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceType: 'SourceType',
      streamType: 'StreamType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceType: 'string',
      streamType: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveMPUTaskRequestTranscodeParamsBackground extends $dara.Model {
  /**
   * @remarks
   * The display mode of the global background image.
   * 
   * *   **0**: scales the background image proportionally to fit the view, with black bars displayed.
   * *   **1** (default): crops the background image to fit the view.
   * 
   * @example
   * 1
   */
  renderMode?: string;
  /**
   * @remarks
   * The URL of the global background image.
   * 
   * @example
   * yourImageUrl
   */
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      renderMode: 'RenderMode',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderMode: 'string',
      URL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveMPUTaskRequestTranscodeParamsEncodeParams extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the audio. Valid values: [8,500]. Unit: Kbit/s.
   * 
   * @example
   * 128
   */
  audioBitrate?: string;
  /**
   * @remarks
   * The number of sound channels. Valid values: 1 and 2.
   * 
   * @example
   * 2
   */
  audioChannels?: string;
  /**
   * @remarks
   * Specifies whether the output stream is an audio-only stream. Valid values:
   * 
   * *   **true**: The output stream is an audio-only stream. If you set this parameter to true, you need to configure only audio-related parameters under EncodeParams.
   * *   **false** (default): The output stream is not an audio-only stream. If you set this parameter to false, you need to configure all parameters under EncodeParams, except the VideoCodec and EnhancedParam parameters.
   * 
   * @example
   * false
   */
  audioOnly?: string;
  /**
   * @remarks
   * The audio sampling rate. Valid values: 8000, 16000, 32000, 44100, and 48000. Unit: Hz.
   * 
   * @example
   * 44100
   */
  audioSampleRate?: string;
  /**
   * @remarks
   * The parameter used for encoding enhancement, which is a JSON string. The parameter includes the optional profile and preset fields.
   * 
   * *   profile: the encoding level. If the video codec is H.264, the valid values of this field are baseline, main, and high. If the video codec is H.265, the valid value of this field is main.
   * *   preset: adjusts the trade-off between encoding speed and video quality. The valid values of this field are ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow, and placebo. Each value specifies a level of trade-off between encoding speed and video quality. For example, the ultrafast preset has the fastest encoding speed but the lowest video quality, while the placebo preset sacrifices the encoding speed for the best video quality.
   * 
   * >  A value of superfast for the preset field is suitable for real-time communication scenarios. We recommend that you not set the field if you are not a professional encoding engineer.
   * 
   * @example
   * {"profile": "high", "preset": "veryfast"}
   */
  enhancedParam?: string;
  /**
   * @remarks
   * The bitrate of the video. Valid values: [1,10000]. Unit: Kbit/s.
   * 
   * @example
   * 3500
   */
  videoBitrate?: string;
  /**
   * @remarks
   * The video codec. Valid values:
   * 
   * *   H.264 (default)
   * *   H.265
   * 
   * @example
   * H.264
   */
  videoCodec?: string;
  /**
   * @remarks
   * The frame rate of the video. Valid values: [1,60]. Unit: frames per second (FPS).
   * 
   * @example
   * 25
   */
  videoFramerate?: string;
  /**
   * @remarks
   * The group of pictures (GOP) size of the video. Valid values: [1,60].
   * 
   * @example
   * 20
   */
  videoGop?: string;
  /**
   * @remarks
   * The height of the video. Valid values: [0,1920]. Unit: pixels.
   * 
   * @example
   * 1000
   */
  videoHeight?: string;
  /**
   * @remarks
   * The width of the video. Valid values: [0,1920]. Unit: pixels.
   * 
   * @example
   * 1920
   */
  videoWidth?: string;
  static names(): { [key: string]: string } {
    return {
      audioBitrate: 'AudioBitrate',
      audioChannels: 'AudioChannels',
      audioOnly: 'AudioOnly',
      audioSampleRate: 'AudioSampleRate',
      enhancedParam: 'EnhancedParam',
      videoBitrate: 'VideoBitrate',
      videoCodec: 'VideoCodec',
      videoFramerate: 'VideoFramerate',
      videoGop: 'VideoGop',
      videoHeight: 'VideoHeight',
      videoWidth: 'VideoWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioBitrate: 'string',
      audioChannels: 'string',
      audioOnly: 'string',
      audioSampleRate: 'string',
      enhancedParam: 'string',
      videoBitrate: 'string',
      videoCodec: 'string',
      videoFramerate: 'string',
      videoGop: 'string',
      videoHeight: 'string',
      videoWidth: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveMPUTaskRequestTranscodeParamsLayoutUserPanesUserInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the channel where the user is. If the user is in the same channel, you can leave this parameter empty. We recommend that you specify this parameter when you perform stream mixing across channels.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @remarks
   * The type of the video source. This parameter is valid only when you set StreamType to 2. Valid values:
   * 
   * *   **camera** (default)
   * *   **shareScreen**
   * 
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * yourSubUserId
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      sourceType: 'SourceType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      sourceType: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveMPUTaskRequestTranscodeParamsLayoutUserPanes extends $dara.Model {
  /**
   * @remarks
   * The URL of the background image of the pane. This image is displayed if the user turns off the camera or is not present in the channel.
   * 
   * @example
   * yourImageUrl
   */
  backgroundImageUrl?: string;
  /**
   * @remarks
   * The height of the pane. The value is normalized.
   * 
   * @example
   * 0.2632
   */
  height?: string;
  /**
   * @remarks
   * The display mode of the pane. Valid values:
   * 
   * *   **0**: scales the video proportionally to fit the view, with black bars displayed.
   * *   **1 (default)**: crops the video to fit the view.
   * 
   * @example
   * 1
   */
  renderMode?: string;
  /**
   * @remarks
   * The information about the user whose stream is played in the pane. If you leave this parameter empty, the system automatically sets this parameter based on the order in which streamers join the channel.
   * 
   * > 
   * 
   * *   If you specify the information about a user by using this parameter, the information about the user must also be specified by using the TranscodeParams.UserInfos parameter.
   * 
   * *   This parameter is valid only when you set StreamType to 0 or 2.
   */
  userInfo?: UpdateLiveMPUTaskRequestTranscodeParamsLayoutUserPanesUserInfo;
  /**
   * @remarks
   * The width of the pane. The value is normalized.
   * 
   * @example
   * 0.3564
   */
  width?: string;
  /**
   * @remarks
   * The x-coordinate of the pane. The value is normalized.
   * 
   * @example
   * 0.2456
   */
  x?: string;
  /**
   * @remarks
   * The y-coordinate of the pane. The value is normalized.
   * 
   * @example
   * 0.3789
   */
  y?: string;
  /**
   * @remarks
   * The layer in which the pane resides. A value of 0 indicates the bottom layer. Each increment of the value by 1 indicates the next upper layer.
   * 
   * @example
   * 0
   */
  ZOrder?: string;
  static names(): { [key: string]: string } {
    return {
      backgroundImageUrl: 'BackgroundImageUrl',
      height: 'Height',
      renderMode: 'RenderMode',
      userInfo: 'UserInfo',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundImageUrl: 'string',
      height: 'string',
      renderMode: 'string',
      userInfo: UpdateLiveMPUTaskRequestTranscodeParamsLayoutUserPanesUserInfo,
      width: 'string',
      x: 'string',
      y: 'string',
      ZOrder: 'string',
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveMPUTaskRequestTranscodeParamsLayout extends $dara.Model {
  /**
   * @remarks
   * The information about the panes.
   */
  userPanes?: UpdateLiveMPUTaskRequestTranscodeParamsLayoutUserPanes[];
  static names(): { [key: string]: string } {
    return {
      userPanes: 'UserPanes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPanes: { 'type': 'array', 'itemType': UpdateLiveMPUTaskRequestTranscodeParamsLayoutUserPanes },
    };
  }

  validate() {
    if(Array.isArray(this.userPanes)) {
      $dara.Model.validateArray(this.userPanes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveMPUTaskRequestTranscodeParamsUserInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the channel where the subscribed user is. If the user is in the same channel, you can leave this parameter empty. We recommend that you specify this parameter when you perform stream mixing across channels.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @remarks
   * The type of the video source that is subscribed to. This parameter is valid only when you set StreamType to 2. Valid values:
   * 
   * *   **camera** (default)
   * *   **shareScreen**
   * 
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @remarks
   * The type of the relayed stream that is subscribed to. Valid values:
   * 
   * *   **0** (default): original stream
   * *   **1**: only the audio track
   * *   **2**: only the video track
   * 
   * @example
   * 0
   */
  streamType?: string;
  /**
   * @remarks
   * The ID of the subscribed user.
   * 
   * This parameter is required.
   * 
   * @example
   * yourSubUserId
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      sourceType: 'SourceType',
      streamType: 'StreamType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      sourceType: 'string',
      streamType: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveMPUTaskRequestTranscodeParams extends $dara.Model {
  /**
   * @remarks
   * The global background image.
   */
  background?: UpdateLiveMPUTaskRequestTranscodeParamsBackground;
  /**
   * @remarks
   * The encoding parameters for the output stream.
   */
  encodeParams?: UpdateLiveMPUTaskRequestTranscodeParamsEncodeParams;
  /**
   * @remarks
   * The video layout information.
   * 
   * >  If video transcoding is required, you must specify the video layout information, including the x-coordinate and y-coordinate, the width and height, and the layer. For audio-only transcoding, leave the video layout information empty.
   */
  layout?: UpdateLiveMPUTaskRequestTranscodeParamsLayout;
  /**
   * @remarks
   * The information about the users whose streams are subscribed to. If you leave this parameter empty, streams from all users are mixed.
   */
  userInfos?: UpdateLiveMPUTaskRequestTranscodeParamsUserInfos[];
  static names(): { [key: string]: string } {
    return {
      background: 'Background',
      encodeParams: 'EncodeParams',
      layout: 'Layout',
      userInfos: 'UserInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      background: UpdateLiveMPUTaskRequestTranscodeParamsBackground,
      encodeParams: UpdateLiveMPUTaskRequestTranscodeParamsEncodeParams,
      layout: UpdateLiveMPUTaskRequestTranscodeParamsLayout,
      userInfos: { 'type': 'array', 'itemType': UpdateLiveMPUTaskRequestTranscodeParamsUserInfos },
    };
  }

  validate() {
    if(this.background && typeof (this.background as any).validate === 'function') {
      (this.background as any).validate();
    }
    if(this.encodeParams && typeof (this.encodeParams as any).validate === 'function') {
      (this.encodeParams as any).validate();
    }
    if(this.layout && typeof (this.layout as any).validate === 'function') {
      (this.layout as any).validate();
    }
    if(Array.isArray(this.userInfos)) {
      $dara.Model.validateArray(this.userInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveMPUTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can specify only one application ID. The ID can be up to 64 characters in length and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The channel ID. You can specify only one channel ID. The ID can be up to 64 characters in length and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @remarks
   * The stream mixing mode. Valid values:
   * 
   * *   **0**: the single-stream relay mode. In this mode, the service only relays the original single stream, but does not transcode mixed streams. You do not need to set parameters for mixed-stream transcoding.
   * *   **1** (default): the mixed-stream relay mode.
   * 
   * @example
   * 0
   */
  mixMode?: string;
  /**
   * @remarks
   * The multiple ingest URLs to relay. This parameter allows you to specify multiple ingest URLs.
   */
  multiStreamURL?: UpdateLiveMPUTaskRequestMultiStreamURL[];
  /**
   * @remarks
   * The supplemental enhancement information (SEI) parameters.
   */
  seiParams?: UpdateLiveMPUTaskRequestSeiParams;
  /**
   * @remarks
   * The single-stream relay parameters. These parameters are required if you set MixMode to 0.
   */
  singleSubParams?: UpdateLiveMPUTaskRequestSingleSubParams;
  /**
   * @remarks
   * The ingest URL. You can specify only one ingest URL in the Real-Time Messaging Protocol (RTMP) format. The URL can be up to 2,048 characters in length. For information about the generation rules of ingest URLs, see [Ingest and streaming URLs](https://help.aliyun.com/document_detail/199339.html).
   * 
   * > 
   * 
   * *   If the ingest URL is under a domain name for which hotlink protection is enabled, you must include an access token in the URL.
   * *   You cannot use the same ingest URL in different tasks.
   * *   You cannot use the same ingest URL within 10 seconds after a task is stopped.
   * 
   * @example
   * rtmp://example.com/live/stream
   */
  streamURL?: string;
  /**
   * @remarks
   * The task ID. You can specify only one task ID. The ID can be up to 55 characters in length and can contain letters, digits, underscores (_), and hyphens (-). The ID must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * The mixed-stream relay parameters. These parameters are required if you set MixMode to 1.
   */
  transcodeParams?: UpdateLiveMPUTaskRequestTranscodeParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      mixMode: 'MixMode',
      multiStreamURL: 'MultiStreamURL',
      seiParams: 'SeiParams',
      singleSubParams: 'SingleSubParams',
      streamURL: 'StreamURL',
      taskId: 'TaskId',
      transcodeParams: 'TranscodeParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      mixMode: 'string',
      multiStreamURL: { 'type': 'array', 'itemType': UpdateLiveMPUTaskRequestMultiStreamURL },
      seiParams: UpdateLiveMPUTaskRequestSeiParams,
      singleSubParams: UpdateLiveMPUTaskRequestSingleSubParams,
      streamURL: 'string',
      taskId: 'string',
      transcodeParams: UpdateLiveMPUTaskRequestTranscodeParams,
    };
  }

  validate() {
    if(Array.isArray(this.multiStreamURL)) {
      $dara.Model.validateArray(this.multiStreamURL);
    }
    if(this.seiParams && typeof (this.seiParams as any).validate === 'function') {
      (this.seiParams as any).validate();
    }
    if(this.singleSubParams && typeof (this.singleSubParams as any).validate === 'function') {
      (this.singleSubParams as any).validate();
    }
    if(this.transcodeParams && typeof (this.transcodeParams as any).validate === 'function') {
      (this.transcodeParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

