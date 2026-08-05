// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartLiveMPUTaskRequestMultiStreamURL extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to ingest the stream to Alibaba Cloud CDN.
   * 
   * - false: Ingest to a non-Alibaba Cloud CDN.
   * 
   * - true: Ingest to Alibaba Cloud CDN.
   * 
   * > The default value is false.
   * 
   * @example
   * false
   */
  isAliCdn?: boolean;
  /**
   * @remarks
   * The live ingest URL. Only the RTMP protocol is supported. The maximum length is 2048 characters. For information about how to generate the URL, see [Ingest URLs and playback URLs](https://help.aliyun.com/document_detail/199339.html).
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

export class StartLiveMPUTaskRequestSeiParamsLayoutVolume extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to ensure that SEI is carried when sending an IDR keyframe. Valid values:
   * 
   * - **0**: Does not ensure SEI is carried.
   * 
   * - **1**: Ensures SEI is carried.
   * 
   * @example
   * 0
   */
  followIdr?: string;
  /**
   * @remarks
   * The SEI sending interval. Unit: milliseconds. The value must be in the range of [1000, 5000].
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

export class StartLiveMPUTaskRequestSeiParamsPassThrough extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to ensure that SEI is carried when sending an IDR keyframe. Valid values:
   * 
   * - **0**: Does not ensure SEI is carried.
   * 
   * - **1**: Ensures SEI is carried.
   * 
   * @example
   * 0
   */
  followIdr?: string;
  /**
   * @remarks
   * The SEI sending interval. Unit: milliseconds. The value must be in the range of [1000, 5000].
   * 
   * @example
   * 1000
   */
  interval?: string;
  /**
   * @remarks
   * The payload content of the pass-through SEI.
   * 
   * @example
   * yourPayloadContent
   */
  payloadContent?: string;
  /**
   * @remarks
   * The key corresponding to the payload content of the pass-through SEI. If not set, the default key is \\`udd\\`.
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

export class StartLiveMPUTaskRequestSeiParams extends $dara.Model {
  /**
   * @remarks
   * The layout and volume SEI. The content of this parameter can be empty, which means the default layout and volume SEI is carried.
   */
  layoutVolume?: StartLiveMPUTaskRequestSeiParamsLayoutVolume;
  /**
   * @remarks
   * The pass-through SEI.
   */
  passThrough?: StartLiveMPUTaskRequestSeiParamsPassThrough;
  /**
   * @remarks
   * The custom payload_type of the SEI message. The value must be in the range of 100-254. If not set, the default payload_type is 5.
   * 
   * @example
   * 100
   */
  payloadType?: string;
  static names(): { [key: string]: string } {
    return {
      layoutVolume: 'LayoutVolume',
      passThrough: 'PassThrough',
      payloadType: 'PayloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutVolume: StartLiveMPUTaskRequestSeiParamsLayoutVolume,
      passThrough: StartLiveMPUTaskRequestSeiParamsPassThrough,
      payloadType: 'string',
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

export class StartLiveMPUTaskRequestSingleSubParams extends $dara.Model {
  /**
   * @remarks
   * The type of video input stream in single-stream ingest mode. This parameter is valid only for video streams (StreamType=2). Valid values:
   * 
   * - **camera** (default): Camera stream.
   * 
   * - **shareScreen**: Screen sharing stream.
   * 
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @remarks
   * The type of stream to ingest in single-stream ingest mode. Valid values:
   * 
   * - **0** (default): Ingest the original stream.
   * 
   * - **1**: Ingest only the audio stream.
   * 
   * - **2**: Ingest only the video stream.
   * 
   * @example
   * 0
   */
  streamType?: string;
  /**
   * @remarks
   * The ID of the user whose stream is ingested. Only one stream can be ingested at a time.
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

export class StartLiveMPUTaskRequestTranscodeParamsBackground extends $dara.Model {
  /**
   * @remarks
   * The display mode of the output video. Valid values:
   * 
   * - **0**: Scale and display a black background.
   * 
   * - **1** (default): Clip.
   * 
   * @example
   * 1
   */
  renderMode?: string;
  /**
   * @remarks
   * The URL of the global background image. The maximum length is 2048 characters.
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

export class StartLiveMPUTaskRequestTranscodeParamsEncodeParams extends $dara.Model {
  /**
   * @remarks
   * The audio bitrate. Unit: kbps. The value must be in the range of [8, 500].
   * 
   * @example
   * 128
   */
  audioBitrate?: string;
  /**
   * @remarks
   * The number of audio channels. Valid values: 1, 2.
   * 
   * @example
   * 2
   */
  audioChannels?: string;
  /**
   * @remarks
   * Specifies whether the stream is audio-only. Valid values:
   * 
   * - **true**: Audio-only. You only need to set audio-related parameters.
   * 
   * - **false** (default): Not audio-only. All parameters except VideoCodec and EnhancedParam must be specified.
   * 
   * @example
   * false
   */
  audioOnly?: string;
  /**
   * @remarks
   * The audio sampling rate. Unit: Hz. Valid values: 8000, 16000, 32000, 44100, 48000.
   * 
   * @example
   * 44100
   */
  audioSampleRate?: string;
  /**
   * @remarks
   * The enhanced encoding parameters. This is a JSON string. The supported optional configurations include \\`profile\\` and \\`preset\\`.
   * 
   * - \\`profile\\`: The encoding profile. If the video encoding format is H.264, valid values for \\`profile\\` include "baseline", "main", and "high". If the video encoding format is H.265, the valid value for \\`profile\\` is "main".
   * 
   * - \\`preset\\`: Balances encoding speed and quality. Valid values for \\`preset\\` include "ultrafast", "superfast", "veryfast", "faster", "fast", "medium", "slow", "slower", "veryslow", and "placebo". Each value represents a strategy for balancing encoding speed and output video quality, from "ultrafast" (fastest encoding speed) to "placebo" (highest quality, slowest encoding speed).
   * 
   * > For example, "superfast" is mainly used for real-time communication. If you are not an expert in encoders, do not set this option.
   * 
   * @example
   * {"profile": "high", "preset": "veryfast"}
   */
  enhancedParam?: string;
  /**
   * @remarks
   * The video bitrate. Unit: kbps. The value must be in the range of [1, 10000].
   * 
   * @example
   * 3500
   */
  videoBitrate?: string;
  /**
   * @remarks
   * The video encoding format. Valid values:
   * 
   * - H.264 (default).
   * 
   * - H.265.
   * 
   * @example
   * H.264
   */
  videoCodec?: string;
  /**
   * @remarks
   * The video frame rate. Unit: fps. The value must be in the range of [1, 60].
   * 
   * @example
   * 25
   */
  videoFramerate?: string;
  /**
   * @remarks
   * The video GOP size. The value must be in the range of [1, 60].
   * 
   * @example
   * 20
   */
  videoGop?: string;
  /**
   * @remarks
   * The video height. Unit: pixels. The value must be in the range of [0, 1920].
   * 
   * @example
   * 1000
   */
  videoHeight?: string;
  /**
   * @remarks
   * The video width. Unit: pixels. The value must be in the range of [0, 1920].
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

export class StartLiveMPUTaskRequestTranscodeParamsLayoutUserPanesUserInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the channel where the user is located. You do not need to set this parameter for users in the same channel. For cross-channel stream mixing, set this parameter.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @remarks
   * The type of video input stream in stream mixing and transcoding mode. This parameter is valid only for video streams (StreamType=2). Valid values:
   * 
   * - **camera** (default): Camera stream.
   * 
   * - **shareScreen**: Screen sharing stream.
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

export class StartLiveMPUTaskRequestTranscodeParamsLayoutUserPanes extends $dara.Model {
  /**
   * @remarks
   * The URL of the background image for the video pane. The maximum length is 2048 characters. When a user turns off their camera or has not joined the channel, this image is displayed in their layout position.
   * 
   * @example
   * yourImageUrl
   */
  backgroundImageUrl?: string;
  /**
   * @remarks
   * The height of the pane, as a normalized percentage.
   * 
   * @example
   * 0.2632
   */
  height?: string;
  /**
   * @remarks
   * The display mode of the output video pane. Valid values:
   * 
   * - **0**: Scale and display a black background.
   * 
   * - **1** (default): Clip.
   * 
   * @example
   * 1
   */
  renderMode?: string;
  /**
   * @remarks
   * The information about the user corresponding to this pane. If you do not set this parameter, the system automatically fills it based on the order in which streamers join the channel.
   * 
   * > - If you specify user information, that user must already be configured in the \\`TranscodeParams.UserInfos\\` parameter.
   * 
   * - This parameter is valid only for original streams and video streams.
   */
  userInfo?: StartLiveMPUTaskRequestTranscodeParamsLayoutUserPanesUserInfo;
  /**
   * @remarks
   * The width of the pane, as a normalized percentage.
   * 
   * @example
   * 0.3564
   */
  width?: string;
  /**
   * @remarks
   * The X-coordinate, as a normalized percentage.
   * 
   * @example
   * 0.2456
   */
  x?: string;
  /**
   * @remarks
   * The Y-coordinate, as a normalized percentage.
   * 
   * @example
   * 0.3789
   */
  y?: string;
  /**
   * @remarks
   * The stacking order. 0 is the bottom layer. Layer 1 is on top of layer 0, and so on.
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
      userInfo: StartLiveMPUTaskRequestTranscodeParamsLayoutUserPanesUserInfo,
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

export class StartLiveMPUTaskRequestTranscodeParamsLayout extends $dara.Model {
  /**
   * @remarks
   * The information about user panes in the mixed stream.
   */
  userPanes?: StartLiveMPUTaskRequestTranscodeParamsLayoutUserPanes[];
  static names(): { [key: string]: string } {
    return {
      userPanes: 'UserPanes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPanes: { 'type': 'array', 'itemType': StartLiveMPUTaskRequestTranscodeParamsLayoutUserPanes },
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

export class StartLiveMPUTaskRequestTranscodeParamsUserInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the channel where the subscribed user is located. You do not need to set this parameter for users in the same channel. For cross-channel stream mixing, set this parameter.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @remarks
   * The type of video input stream to subscribe to for stream mixing. This parameter is valid only for video streams (StreamType=2). Valid values:
   * 
   * - **camera** (default): Camera stream.
   * 
   * - **shareScreen**: Screen sharing stream.
   * 
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @remarks
   * The type of stream to subscribe to for stream mixing. Valid values:
   * 
   * - **0** (default): Ingest the original stream.
   * 
   * - **1**: Ingest only the audio stream.
   * 
   * - **2**: Ingest only the video stream.
   * 
   * @example
   * 0
   */
  streamType?: string;
  /**
   * @remarks
   * The ID of the user to subscribe to for stream mixing.
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

export class StartLiveMPUTaskRequestTranscodeParams extends $dara.Model {
  /**
   * @remarks
   * The global background image for the mixed stream.
   */
  background?: StartLiveMPUTaskRequestTranscodeParamsBackground;
  /**
   * @remarks
   * The encoding parameters for the output stream.
   */
  encodeParams?: StartLiveMPUTaskRequestTranscodeParamsEncodeParams;
  /**
   * @remarks
   * The video layout information.
   * 
   * > For video transcoding, you must specify the video layout information, including coordinates (X, Y), pane dimensions (Width, Height), and stacking order (ZOrder). For audio-only transcoding, do not specify video layout information.
   */
  layout?: StartLiveMPUTaskRequestTranscodeParamsLayout;
  /**
   * @remarks
   * The information about the users to subscribe to for stream mixing. If you do not specify users, all users are included in the mixed stream.
   */
  userInfos?: StartLiveMPUTaskRequestTranscodeParamsUserInfos[];
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
      background: StartLiveMPUTaskRequestTranscodeParamsBackground,
      encodeParams: StartLiveMPUTaskRequestTranscodeParamsEncodeParams,
      layout: StartLiveMPUTaskRequestTranscodeParamsLayout,
      userInfos: { 'type': 'array', 'itemType': StartLiveMPUTaskRequestTranscodeParamsUserInfos },
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

export class StartLiveMPUTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Only one ID is supported. It can contain uppercase letters, lowercase letters, digits, underscores (_), and hyphens (-). The maximum length is 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The channel ID. Only one ID is supported. It can contain uppercase letters, lowercase letters, digits, underscores (_), and hyphens (-). The maximum length is 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @remarks
   * The idle timeout period. Unit: seconds. The value must be in the range of [10, 86400].
   * 
   * > If you set this parameter, the task is automatically stopped when it has been idle for a period longer than MaxIdleTime. If you do not set this parameter, the task is stopped immediately after the channel is closed.
   * 
   * @example
   * 10
   */
  maxIdleTime?: string;
  /**
   * @remarks
   * The stream mixing mode. Valid values:
   * 
   * - **0**: Single-stream ingest. The original single stream is ingested without stream mixing or transcoding. You do not need to configure stream mixing and transcoding parameters.
   * 
   * - **1** (default): Stream mixing and transcoding.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  mixMode?: string;
  /**
   * @remarks
   * The parameters for ingesting to multiple URLs. You can specify multiple live ingest URLs.
   * 
   * > When you set the ingest URL for a task, you must configure either the StreamURL parameter or the MultiStreamURL parameter, but not both.
   */
  multiStreamURL?: StartLiveMPUTaskRequestMultiStreamURL[];
  /**
   * @remarks
   * The region where the stream mixing service is located. Valid values:
   * 
   * - **CN-Shanghai<props="china">(default)**: Shanghai.
   * 
   * - **AP-Singapore<props="intl">(default)**: Singapore.
   * 
   * - **EMAA-Saudi**: Saudi Arabia.
   * 
   * @example
   * CN-Shanghai
   */
  region?: string;
  /**
   * @remarks
   * The SEI configuration parameters.
   */
  seiParams?: StartLiveMPUTaskRequestSeiParams;
  /**
   * @remarks
   * The parameters for single-stream ingest. This parameter is required when MixMode is set to 0. Do not set this parameter for stream mixing and transcoding.
   */
  singleSubParams?: StartLiveMPUTaskRequestSingleSubParams;
  /**
   * @remarks
   * The live ingest URL. Only the RTMP protocol is supported. Only one URL is supported. The maximum length is 2048 characters. For information about how to generate the URL, see [Ingest URLs and playback URLs](https://help.aliyun.com/document_detail/199339.html).
   * 
   * > - For domain names with hotlink protection enabled, the ingest URL must include an access token.
   * 
   * - Do not use the same StreamURL in different tasks at the same time.
   * 
   * - Do not use the same StreamURL within 10 seconds after a task stops.
   * 
   * @example
   * rtmp://example.com/live/stream
   */
  streamURL?: string;
  /**
   * @remarks
   * The task ID. Only one ID is supported. It can contain uppercase letters, lowercase letters, digits, underscores (_), and hyphens (-). The maximum length is 55 characters. This ID is the unique identifier for the bypass ingest task.
   * If a task with the same ID still exists and has not been cleared when you start a new task, \\`InvalidParam\\` is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * The parameters for stream mixing and transcoding. This parameter is required when MixMode is set to 1. Do not set this parameter for single-stream ingest.
   */
  transcodeParams?: StartLiveMPUTaskRequestTranscodeParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      maxIdleTime: 'MaxIdleTime',
      mixMode: 'MixMode',
      multiStreamURL: 'MultiStreamURL',
      region: 'Region',
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
      maxIdleTime: 'string',
      mixMode: 'string',
      multiStreamURL: { 'type': 'array', 'itemType': StartLiveMPUTaskRequestMultiStreamURL },
      region: 'string',
      seiParams: StartLiveMPUTaskRequestSeiParams,
      singleSubParams: StartLiveMPUTaskRequestSingleSubParams,
      streamURL: 'string',
      taskId: 'string',
      transcodeParams: StartLiveMPUTaskRequestTranscodeParams,
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

