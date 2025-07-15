// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRtcMPUTaskDetailResponseBodyMPUTasksMultiStreamURL extends $dara.Model {
  /**
   * @remarks
   * Indicates whether stream relay is performed by using Alibaba Cloud CDN. Valid values:
   * 
   * *   false: Stream relay is performed by using a CDN service that is not Alibaba Cloud CDN.
   * *   true: Stream relay is performed by using Alibaba Cloud CDN.
   * 
   * @example
   * false
   */
  isAliCdn?: boolean;
  /**
   * @remarks
   * The ingest URL.
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

export class ListRtcMPUTaskDetailResponseBodyMPUTasksSeiParamsLayoutVolume extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to add SEI messages to Instantaneous Decoder Refresh (IDR) frames. Valid values:
   * 
   * *   0: does not add SEI messages.
   * *   1: adds SEI messages.
   * 
   * @example
   * 0
   */
  followIdr?: string;
  /**
   * @remarks
   * The interval at which the SEI messages are added. Unit: milliseconds.
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

export class ListRtcMPUTaskDetailResponseBodyMPUTasksSeiParamsPassThrough extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to add SEI messages to Instantaneous Decoder Refresh (IDR) frames. Valid values:
   * 
   * *   0: does not add SEI messages.
   * *   1: adds SEI messages.
   * 
   * @example
   * 0
   */
  followIdr?: string;
  /**
   * @remarks
   * The interval at which the SEI messages are added. Unit: milliseconds.
   * 
   * @example
   * 1000
   */
  interval?: string;
  /**
   * @remarks
   * The payload content of the custom SEI.
   * 
   * @example
   * yourPayloadContent
   */
  payloadContent?: string;
  /**
   * @remarks
   * The key of the payload content. Default value: udd.
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

export class ListRtcMPUTaskDetailResponseBodyMPUTasksSeiParams extends $dara.Model {
  /**
   * @remarks
   * The layout and volume SEI. If the return value is an empty string, the default layout and volume SEI is used.
   */
  layoutVolume?: ListRtcMPUTaskDetailResponseBodyMPUTasksSeiParamsLayoutVolume;
  /**
   * @remarks
   * The custom SEI.
   */
  passThrough?: ListRtcMPUTaskDetailResponseBodyMPUTasksSeiParamsPassThrough;
  /**
   * @remarks
   * The custom payload type. Valid values: 100 to 254. Default value: 5.
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
      layoutVolume: ListRtcMPUTaskDetailResponseBodyMPUTasksSeiParamsLayoutVolume,
      passThrough: ListRtcMPUTaskDetailResponseBodyMPUTasksSeiParamsPassThrough,
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

export class ListRtcMPUTaskDetailResponseBodyMPUTasksSingleSubParams extends $dara.Model {
  /**
   * @remarks
   * The source of the video. This parameter is valid only if you set StreamType to 2. Valid values:
   * 
   * *   camera (default): captures the video by using a camera.
   * *   shareScreen: captures the content displayed on a screen.
   * 
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @remarks
   * The type of the stream that is relayed. Valid values:
   * 
   * *   0 (default): the original stream.
   * *   1: the audio-only stream.
   * *   2: the video-only stream.
   * 
   * @example
   * 0
   */
  streamType?: string;
  /**
   * @remarks
   * The ID of the user whose stream is relayed. In single-stream relay mode, you can relay only one stream in a request.
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

export class ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParamsBackground extends $dara.Model {
  /**
   * @remarks
   * The display mode. Valid values:
   * 
   * *   0: proportionally scales the video or background image to fit the pane. Black bars are added to fill the extra space.
   * *   1 (default): crops the video or background image to fit the pane.
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

export class ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParamsEncodeParams extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the audio. Unit: Kbit/s.
   * 
   * @example
   * 128
   */
  audioBitrate?: string;
  /**
   * @remarks
   * The number of audio channels. Valid values: 1 and 2.
   * 
   * @example
   * 2
   */
  audioChannels?: string;
  /**
   * @remarks
   * Indicates whether the output stream is an audio-only stream. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  audioOnly?: string;
  /**
   * @remarks
   * The audio sampling rate. Unit: Hz.
   * 
   * @example
   * 44100
   */
  audioSampleRate?: string;
  /**
   * @remarks
   * The parameter for advanced video encoding. The value is a JSON string. Optional fields:
   * 
   * *   profile: the encoding level. If the video encoding format is set to H.264, the valid values of this field are baseline, main, and high.
   * *   preset: adjusts the trade-off between encoding speed and video quality. Valid values: ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow, and placebo. Each value specifies a level of trade-off between encoding speed and video quality. For example, the ultrafast preset has the fastest encoding speed but the lowest video quality, while the placebo preset sacrifices the encoding speed for the best video quality.
   * 
   * @example
   * {"profile": "high", "preset": "veryfast"}
   */
  enhancedParam?: string;
  /**
   * @remarks
   * The bitrate of the video. Unit: Kbit/s.
   * 
   * @example
   * 3500
   */
  videoBitrate?: string;
  /**
   * @remarks
   * The video encoding format. Default value: H.264.
   * 
   * @example
   * H.264
   */
  videoCodec?: string;
  /**
   * @remarks
   * The frame rate of the video. Unit: frames per second (FPS).
   * 
   * @example
   * 25
   */
  videoFramerate?: string;
  /**
   * @remarks
   * The group of pictures (GOP) size of the video.
   * 
   * @example
   * 20
   */
  videoGop?: string;
  /**
   * @remarks
   * The height of the video. Unit: pixels.
   * 
   * @example
   * 1000
   */
  videoHeight?: string;
  /**
   * @remarks
   * The width of the video. Unit: pixels.
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

export class ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParamsLayoutUserPanesUserInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the channel where the user is.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @remarks
   * The source of the video. This parameter is valid only if you set StreamType to 2. Valid values:
   * 
   * *   camera (default): captures the video by using a camera.
   * *   shareScreen: captures the content displayed on a screen.
   * 
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @remarks
   * The ID of the user.
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

export class ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParamsLayoutUserPanes extends $dara.Model {
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
   * The display mode. Valid values:
   * 
   * *   0: proportionally scales the video or background image to fit the pane. Black bars are added to fill the extra space.
   * *   1 (default): crops the video or background image to fit the pane.
   * 
   * @example
   * 1
   */
  renderMode?: string;
  /**
   * @remarks
   * The information about the user whose stream is played in the pane.
   */
  userInfo?: ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParamsLayoutUserPanesUserInfo;
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
   * The layer of the pane. A value of 0 indicates that the pane is placed at the bottom layer. A larger value indicates a higher layer.
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
      userInfo: ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParamsLayoutUserPanesUserInfo,
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

export class ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParamsLayout extends $dara.Model {
  /**
   * @remarks
   * The information about the panes.
   */
  userPanes?: ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParamsLayoutUserPanes[];
  static names(): { [key: string]: string } {
    return {
      userPanes: 'UserPanes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPanes: { 'type': 'array', 'itemType': ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParamsLayoutUserPanes },
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

export class ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParamsUserInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the channel where the user is.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @remarks
   * The source of the video. This parameter is valid only if you set StreamType to 2. Valid values:
   * 
   * *   camera (default): captures the video by using a camera.
   * *   shareScreen: captures the content displayed on a screen.
   * 
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @remarks
   * The type of the stream that is relayed. Valid values:
   * 
   * *   0 (default): the original stream.
   * *   1: the audio-only stream.
   * *   2: the video-only stream.
   * 
   * @example
   * 0
   */
  streamType?: string;
  /**
   * @remarks
   * The ID of the user.
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

export class ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParams extends $dara.Model {
  /**
   * @remarks
   * The global background image.
   */
  background?: ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParamsBackground;
  /**
   * @remarks
   * The encoding parameters of the output stream.
   */
  encodeParams?: ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParamsEncodeParams;
  /**
   * @remarks
   * The video layout information.
   * 
   * >  The video layout information includes the x-coordinate, y-coordinate, width, height, and layer of the pane. For audio-only transcoding, no video layout information is returned.
   */
  layout?: ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParamsLayout;
  /**
   * @remarks
   * The information about the user whose stream is mixed. If an empty value is returned, streams from all users are mixed.
   */
  userInfos?: ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParamsUserInfos[];
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
      background: ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParamsBackground,
      encodeParams: ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParamsEncodeParams,
      layout: ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParamsLayout,
      userInfos: { 'type': 'array', 'itemType': ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParamsUserInfos },
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

export class ListRtcMPUTaskDetailResponseBodyMPUTasks extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the channel.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @remarks
   * The timeout period of an idle connection. Unit: seconds.
   * 
   * >  If the task is idle for a period of time longer than the duration specified by the MaxIdleTime parameter, the task is automatically stopped. If the parameter is not specified, the task is stopped after the channel is closed.
   * 
   * @example
   * 10
   */
  maxIdleTime?: string;
  /**
   * @remarks
   * The stream mixing mode. Valid values:
   * 
   * *   0: relays the original single stream without mixing streams. If the value of this parameter is 0, the TranscodeParams parameter is empty.
   * *   1 (default): mixes multiple streams into a single stream and relays the mixed stream.
   * 
   * @example
   * 0
   */
  mixMode?: string;
  /**
   * @remarks
   * The multiple ingest URLs relayed.
   */
  multiStreamURL?: ListRtcMPUTaskDetailResponseBodyMPUTasksMultiStreamURL[];
  /**
   * @remarks
   * The region in which the streams are mixed. Valid values:
   * 
   * *   **CN-shanghai**
   * *   **AP-Singapore (default)**
   * *   **EMAA-Saudi**
   * 
   * @example
   * CN-Shanghai
   */
  region?: string;
  /**
   * @remarks
   * The supplemental enhancement information (SEI) parameters.
   */
  seiParams?: ListRtcMPUTaskDetailResponseBodyMPUTasksSeiParams;
  /**
   * @remarks
   * The parameters of the single-stream relay task.
   */
  singleSubParams?: ListRtcMPUTaskDetailResponseBodyMPUTasksSingleSubParams;
  /**
   * @remarks
   * The ingest URL.
   * 
   * @example
   * rtmp://example.com/live/stream****
   */
  streamURL?: string;
  /**
   * @remarks
   * The ID of the stream relay task.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * The mixed-stream relay parameters.
   */
  transcodeParams?: ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParams;
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
      multiStreamURL: { 'type': 'array', 'itemType': ListRtcMPUTaskDetailResponseBodyMPUTasksMultiStreamURL },
      region: 'string',
      seiParams: ListRtcMPUTaskDetailResponseBodyMPUTasksSeiParams,
      singleSubParams: ListRtcMPUTaskDetailResponseBodyMPUTasksSingleSubParams,
      streamURL: 'string',
      taskId: 'string',
      transcodeParams: ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParams,
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

export class ListRtcMPUTaskDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The parameters that you configured when you called the StartLiveMPUTask operation to create the tasks.
   */
  MPUTasks?: ListRtcMPUTaskDetailResponseBodyMPUTasks[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      MPUTasks: 'MPUTasks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MPUTasks: { 'type': 'array', 'itemType': ListRtcMPUTaskDetailResponseBodyMPUTasks },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.MPUTasks)) {
      $dara.Model.validateArray(this.MPUTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

