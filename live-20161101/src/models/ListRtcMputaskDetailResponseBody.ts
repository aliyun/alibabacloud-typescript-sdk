// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRtcMPUTaskDetailResponseBodyMPUTasksMultiStreamURL extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the stream is relayed to Content Delivery Network (CDN). Valid values:
   * - false: The stream is relayed to a non-Alibaba Cloud CDN.
   * - true: The stream is relayed to Content Delivery Network (CDN).
   * 
   * @example
   * false
   */
  isAliCdn?: boolean;
  /**
   * @remarks
   * The live stream ingest URL.
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
   * Specifies whether to ensure that SEI is carried when sending IDR keyframes. Valid values:
   * - 0: does not ensure SEI is carried.
   * - 1: ensures SEI is carried.
   * 
   * @example
   * 0
   */
  followIdr?: string;
  /**
   * @remarks
   * The SEI sending interval. Unit: milliseconds.
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
   * Specifies whether to ensure that SEI is carried when sending IDR keyframes. Valid values:
   * - 0: does not ensure SEI is carried.
   * - 1: ensures SEI is carried.
   * 
   * @example
   * 0
   */
  followIdr?: string;
  /**
   * @remarks
   * The SEI sending interval. Unit: milliseconds.
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
   * The key value corresponding to the payload content of the pass-through SEI. If not set, the key defaults to udd.
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
   * The layout and volume SEI. If this parameter is empty, the default layout and volume SEI is carried.
   */
  layoutVolume?: ListRtcMPUTaskDetailResponseBodyMPUTasksSeiParamsLayoutVolume;
  /**
   * @remarks
   * The pass-through SEI.
   */
  passThrough?: ListRtcMPUTaskDetailResponseBodyMPUTasksSeiParamsPassThrough;
  /**
   * @remarks
   * The custom payload_type of the SEI message. Valid values: 100 to 254. If not set, the SEI payload_type defaults to 5.
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
   * The video input stream type in single-stream relaying mode. This parameter is valid only when the stream type is video (StreamType=2). Valid values:
   * - camera (default): camera.
   * - shareScreen: screen sharing.
   * 
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @remarks
   * The stream type for relaying in single-stream relaying mode. Valid values:
   * - 0 (default): relay the original stream.
   * - 1: relay only the audio stream.
   * - 2: relay only the video stream.
   * 
   * @example
   * 0
   */
  streamType?: string;
  /**
   * @remarks
   * The user ID for relaying. Only one stream can be relayed at a time.
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
   * The display mode for the sub-image output. Valid values:
   * - 0: scales the image and displays a black background.
   * - 1 (default): crops the image.
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
   * The audio bitrate. Unit: kbps.
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
   * Specifies whether the output is audio-only. Valid values:
   * - true: audio-only.
   * - false (default): not audio-only.
   * 
   * @example
   * false
   */
  audioOnly?: string;
  /**
   * @remarks
   * The audio sample rate. Unit: Hz.
   * 
   * @example
   * 44100
   */
  audioSampleRate?: string;
  /**
   * @remarks
   * The enhanced encoding parameters in JSON string format. The supported optional configurations include profile and preset.
   * - profile: the encoding level. When the video encoding format is H.264, the supported values for profile include: "baseline", "main", "high".
   * - preset: adjusts the balance between encoding speed and quality. The supported values for preset include: "ultrafast", "superfast", "veryfast", "faster", "fast", "medium", "slow", "slower", "veryslow", "placebo". Each value represents a strategy for encoding speed versus output video quality, ranging from "ultrafast" (extremely fast, encoding speed prioritized) to "placebo" (pursuing ultimate quality, extremely slow encoding).
   * 
   * @example
   * {"profile": "high", "preset": "veryfast"}
   */
  enhancedParam?: string;
  /**
   * @remarks
   * The video bitrate. Unit: kbps.
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
   * The video frame rate. Unit: fps.
   * 
   * @example
   * 25
   */
  videoFramerate?: string;
  /**
   * @remarks
   * The video GOP.
   * 
   * @example
   * 20
   */
  videoGop?: string;
  /**
   * @remarks
   * The video height. Unit: px.
   * 
   * @example
   * 1000
   */
  videoHeight?: string;
  /**
   * @remarks
   * The video width. Unit: px.
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
   * The channel ID where the stream mixing user resides.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @remarks
   * The video input stream type in stream mixing and transcoding mode. This parameter is valid only for video streams (StreamType=2). Valid values:
   * - camera (default): camera.
   * - shareScreen: screen sharing.
   * 
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @remarks
   * The stream mixing user ID.
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
   * The background image URL of the sub-image. When the user turns off the camera or has not entered the channel, this image fills the layout position.
   * 
   * @example
   * yourImageUrl
   */
  backgroundImageUrl?: string;
  /**
   * @remarks
   * The pane height, as a normalized percentage.
   * 
   * @example
   * 0.2632
   */
  height?: string;
  /**
   * @remarks
   * The display mode for the sub-image output. Valid values:
   * - 0: scales the image and displays a black background.
   * - 1 (default): crops the image.
   * 
   * @example
   * 1
   */
  renderMode?: string;
  /**
   * @remarks
   * The stream mixing user information.
   */
  userInfo?: ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParamsLayoutUserPanesUserInfo;
  /**
   * @remarks
   * The pane width, as a normalized percentage.
   * 
   * @example
   * 0.3564
   */
  width?: string;
  /**
   * @remarks
   * The X coordinate, as a normalized percentage.
   * 
   * @example
   * 0.2456
   */
  x?: string;
  /**
   * @remarks
   * The Y coordinate, as a normalized percentage.
   * 
   * @example
   * 0.3789
   */
  y?: string;
  /**
   * @remarks
   * The stacking order. 0 is the bottom layer, layer 1 is above layer 0, and so on.
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
   * The stream mixing user pane information.
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
   * The channel ID where the stream mixing user resides.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @remarks
   * The video input stream type in stream mixing and transcoding mode. This parameter is valid only for video streams (StreamType=2). Valid values:
   * - camera (default): camera.
   * - shareScreen: screen sharing.
   * 
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @remarks
   * The stream type for relaying in stream mixing and transcoding mode. Valid values:
   * - 0 (default): relay the original stream.
   * - 1: relay only the audio stream.
   * - 2: relay only the video stream.
   * 
   * @example
   * 0
   */
  streamType?: string;
  /**
   * @remarks
   * The stream mixing user ID.
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
   * The global background image for stream mixing.
   */
  background?: ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParamsBackground;
  /**
   * @remarks
   * The encoding parameters for the relayed output.
   */
  encodeParams?: ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParamsEncodeParams;
  /**
   * @remarks
   * The video layout information.
   * > For video transcoding, the video layout information includes layout coordinates (X, Y), layout pane dimensions (Width, Height), and stacking order (ZOrder). For audio-only transcoding, no video layout information is included.
   */
  layout?: ListRtcMPUTaskDetailResponseBodyMPUTasksTranscodeParamsLayout;
  /**
   * @remarks
   * The stream mixing user information. If no user is specified, all users are mixed.
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
   * The application ID.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The channel ID.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @remarks
   * The idle timeout period. Unit: seconds.
   * > If this parameter is set, the task is automatically stopped when the task has been idle for a period longer than MaxIdleTime. If this parameter is not set, the task is stopped immediately after the channel is closed.
   * 
   * @example
   * 10
   */
  maxIdleTime?: string;
  /**
   * @remarks
   * The stream mixing mode. Valid values:
   * - 0: single-stream relaying without stream mixing or transcoding. Only the original single stream is relayed. You do not need to configure stream mixing and transcoding parameters.
   * - 1 (default): stream mixing, transcoding, and relaying.
   * 
   * @example
   * 0
   */
  mixMode?: string;
  /**
   * @remarks
   * The multi-address relaying parameters.
   */
  multiStreamURL?: ListRtcMPUTaskDetailResponseBodyMPUTasksMultiStreamURL[];
  /**
   * @remarks
   * The region where the requested stream mixing service resides. Valid values:
   * - **CN-Shanghai<props="china"><ph> (default)</ph>**: Shanghai.
   * - **AP-Singapore<props="intl"><ph> (default)</ph>**: Singapore.
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
  seiParams?: ListRtcMPUTaskDetailResponseBodyMPUTasksSeiParams;
  /**
   * @remarks
   * The single-stream relaying parameters.
   */
  singleSubParams?: ListRtcMPUTaskDetailResponseBodyMPUTasksSingleSubParams;
  /**
   * @remarks
   * The live stream ingest URL.
   * 
   * @example
   * rtmp://example.com/live/stream****
   */
  streamURL?: string;
  /**
   * @remarks
   * The task ID. This ID is the identifier of the stream mixing and relaying task.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * The stream mixing, transcoding, and relaying parameters.
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
   * The task parameter details. The parameter format is the same as the parameter format used when you call the operation to create a stream mixing task.
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

