// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRtcCloudRecordingRequestMixLayoutParamsMixBackground extends $dara.Model {
  /**
   * @remarks
   * The display mode for the output. Valid values:
   * 
   * @example
   * 0
   */
  renderMode?: number;
  /**
   * @remarks
   * The URL of the background image. The maximum length is 2048 characters.
   * 
   * @example
   * https://xxxx.com/photos/my-test-picture.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      renderMode: 'RenderMode',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderMode: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRtcCloudRecordingRequestMixLayoutParamsUserPanesSubBackground extends $dara.Model {
  /**
   * @remarks
   * The display mode for the sub-pane output. Valid values:
   * 
   * @example
   * 0
   */
  renderMode?: number;
  /**
   * @remarks
   * The URL of the background image. The maximum length is 2048 characters.
   * 
   * @example
   * https://xxxx.com/photos/my-test-pane-picture.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      renderMode: 'RenderMode',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderMode: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRtcCloudRecordingRequestMixLayoutParamsUserPanes extends $dara.Model {
  /**
   * @remarks
   * The pane height as a normalized percentage. The value must be within [0,1]. Default value: 0.
   * 
   * @example
   * 0.5
   */
  height?: string;
  /**
   * @remarks
   * The video input stream type for this UserId. If UserId is not specified, this SourceType setting has no effect. Valid values:
   * 
   * @example
   * 0
   */
  sourceType?: number;
  /**
   * @remarks
   * The background image for the sub-pane. When a user turns off the camera, has not published a stream after joining, or leaves the channel midway, the corresponding image fills the layout position.
   */
  subBackground?: StartRtcCloudRecordingRequestMixLayoutParamsUserPanesSubBackground;
  /**
   * @remarks
   * The UserId corresponding to this window.
   * 
   * @example
   * userA
   */
  userId?: string;
  /**
   * @remarks
   * The pane width as a normalized percentage. The value must be within [0,1]. Default value: 0.
   * 
   * @example
   * 0.5
   */
  width?: string;
  /**
   * @remarks
   * The X coordinate as a normalized percentage. The value must be within [0,1]. Default value: 0.
   * 
   * @example
   * 0
   */
  x?: string;
  /**
   * @remarks
   * The Y coordinate as a normalized percentage. The value must be within [0,1]. Default value: 0.
   * 
   * @example
   * 0
   */
  y?: string;
  /**
   * @remarks
   * The stacking order. 0 is the bottom layer, layer 1 is above layer 0, and so on. Default value: 0.
   * 
   * @example
   * 0
   */
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      sourceType: 'SourceType',
      subBackground: 'SubBackground',
      userId: 'UserId',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'string',
      sourceType: 'number',
      subBackground: StartRtcCloudRecordingRequestMixLayoutParamsUserPanesSubBackground,
      userId: 'string',
      width: 'string',
      x: 'string',
      y: 'string',
      ZOrder: 'number',
    };
  }

  validate() {
    if(this.subBackground && typeof (this.subBackground as any).validate === 'function') {
      (this.subBackground as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRtcCloudRecordingRequestMixLayoutParams extends $dara.Model {
  /**
   * @remarks
   * The global background image for stream mixing.
   */
  mixBackground?: StartRtcCloudRecordingRequestMixLayoutParamsMixBackground;
  /**
   * @remarks
   * Specifies the window layout information for subscribed users. Only users whose UserId has layout information configured are included in the video. This parameter is required in stream mixing mode when recording non-audio-only files.
   */
  userPanes?: StartRtcCloudRecordingRequestMixLayoutParamsUserPanes[];
  static names(): { [key: string]: string } {
    return {
      mixBackground: 'MixBackground',
      userPanes: 'UserPanes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mixBackground: StartRtcCloudRecordingRequestMixLayoutParamsMixBackground,
      userPanes: { 'type': 'array', 'itemType': StartRtcCloudRecordingRequestMixLayoutParamsUserPanes },
    };
  }

  validate() {
    if(this.mixBackground && typeof (this.mixBackground as any).validate === 'function') {
      (this.mixBackground as any).validate();
    }
    if(Array.isArray(this.userPanes)) {
      $dara.Model.validateArray(this.userPanes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRtcCloudRecordingRequestMixTranscodeParams extends $dara.Model {
  /**
   * @remarks
   * The audio bitrate in kbps. The value must be in the range of [8, 500]. This parameter is required in stream mixing mode.
   * 
   * This parameter is required.
   * 
   * @example
   * 300
   */
  audioBitrate?: number;
  /**
   * @remarks
   * The number of audio channels. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  audioChannels?: number;
  /**
   * @remarks
   * The audio sample rate in Hz. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * 32000
   */
  audioSampleRate?: number;
  /**
   * @remarks
   * The frame fill type when a stream is interrupted. Valid values:
   * 
   * @example
   * 0
   */
  frameFillType?: number;
  /**
   * @remarks
   * The video bitrate in kbps. The value must be in the range of [1, 10000].
   * 
   * @example
   * 5000
   */
  videoBitrate?: number;
  /**
   * @remarks
   * The video encoding format. Valid values:
   * 
   * @example
   * H.264
   */
  videoCodec?: string;
  /**
   * @remarks
   * The video frame rate in fps. The value must be in the range of [1, 60].
   * 
   * @example
   * 30
   */
  videoFramerate?: number;
  /**
   * @remarks
   * The video GOP. An I-frame is inserted every VideoGop frames. The value must be in the range of [1, 60].
   * 
   * @example
   * 30
   */
  videoGop?: number;
  /**
   * @remarks
   * The video height in pixels. The value must be in the range of [0, 1920]. Default value: 0.
   * 
   * @example
   * 480
   */
  videoHeight?: number;
  /**
   * @remarks
   * The video width in pixels. The value must be in the range of [0, 1920]. Default value: 0.
   * 
   * @example
   * 640
   */
  videoWidth?: number;
  static names(): { [key: string]: string } {
    return {
      audioBitrate: 'AudioBitrate',
      audioChannels: 'AudioChannels',
      audioSampleRate: 'AudioSampleRate',
      frameFillType: 'FrameFillType',
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
      audioBitrate: 'number',
      audioChannels: 'number',
      audioSampleRate: 'number',
      frameFillType: 'number',
      videoBitrate: 'number',
      videoCodec: 'string',
      videoFramerate: 'number',
      videoGop: 'number',
      videoHeight: 'number',
      videoWidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRtcCloudRecordingRequestRecordParams extends $dara.Model {
  /**
   * @remarks
   * The maximum duration of a recording file, in seconds. A recording file that exceeds this duration is split. The value must be in the range of [180, 7200], which means a maximum of 2 hours. If this parameter is not specified, the default value is 7200 (2 hours).
   * 
   * @example
   * 7200
   */
  maxFileDuration?: number;
  /**
   * @remarks
   * The recording mode. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  recordMode?: number;
  /**
   * @remarks
   * The media type of the output recording stream. Valid values:
   * 
   * @example
   * 0
   */
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      maxFileDuration: 'MaxFileDuration',
      recordMode: 'RecordMode',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxFileDuration: 'number',
      recordMode: 'number',
      streamType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRtcCloudRecordingRequestStorageParamsFileInfo extends $dara.Model {
  /**
   * @remarks
   * The file naming format. You can select and combine the following variables in any order:
   * 
   * @example
   * {AppId}_{ChannelId}_{StartTime}_{UserId}
   */
  fileNamePattern?: string;
  /**
   * @remarks
   * The file storage path. Each element in the array corresponds to a directory level. For example, if the value is ["dir1","dir2"], the xxx.m3u8 file is saved as dir1/dir2/TaskId/xxx.m3u8. If this parameter is empty, the file is saved as TaskId/xxx.m3u8.
   */
  filePathPrefix?: string[];
  /**
   * @remarks
   * The file storage format. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * HLS
   */
  format?: string;
  /**
   * @remarks
   * The segment length in seconds. This parameter takes effect only in HLS format. The value must be in the range of [10, 30]. Default value: 30.
   * 
   * @example
   * 30
   */
  sliceDuration?: number;
  /**
   * @remarks
   * The segment naming format. This parameter takes effect only in HLS format. Similar to FileNamePattern, but with an additional variable Sequence:
   * 
   * @example
   * {AppId}_{ChannelId}_{StartTime}_{Sequence}
   */
  sliceNamePattern?: string;
  static names(): { [key: string]: string } {
    return {
      fileNamePattern: 'FileNamePattern',
      filePathPrefix: 'FilePathPrefix',
      format: 'Format',
      sliceDuration: 'SliceDuration',
      sliceNamePattern: 'SliceNamePattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileNamePattern: 'string',
      filePathPrefix: { 'type': 'array', 'itemType': 'string' },
      format: 'string',
      sliceDuration: 'number',
      sliceNamePattern: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filePathPrefix)) {
      $dara.Model.validateArray(this.filePathPrefix);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRtcCloudRecordingRequestStorageParamsOSSParams extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket. The bucket must belong to the primary account associated with the current API caller\\"s account.
   * 
   * This parameter is required.
   * 
   * @example
   * mytest-bucket
   */
  OSSBucket?: string;
  /**
   * @remarks
   * The endpoint of the OSS storage. The corresponding region ID must be consistent with the selected service registration endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * oss-cn-shanghai.aliyuncs.com
   */
  OSSEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      OSSBucket: 'OSSBucket',
      OSSEndpoint: 'OSSEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OSSBucket: 'string',
      OSSEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRtcCloudRecordingRequestStorageParamsVodParams extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic composition. Valid values:
   * 
   * @example
   * 0
   */
  autoCompose?: number;
  /**
   * @remarks
   * The ID of the VOD transcoding template group used to transcode the automatically composed video in the VOD service.
   * 
   * @example
   * ****4c34112cfe68248f2f77759c****
   */
  composeVodTranscodeGroupId?: string;
  /**
   * @remarks
   * The storage address configured in the ApsaraVideo VOD console under Media Asset Management > Storage Management. Recording files are first saved to this location and then uploaded to VOD.
   * 
   * @example
   * mytest.oss-cn-shenzhen.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The ID of the VOD transcoding template group.
   * 
   * @example
   * ****8a914d3989e9825eb90530b2****
   */
  vodTranscodeGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      autoCompose: 'AutoCompose',
      composeVodTranscodeGroupId: 'ComposeVodTranscodeGroupId',
      storageLocation: 'StorageLocation',
      vodTranscodeGroupId: 'VodTranscodeGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCompose: 'number',
      composeVodTranscodeGroupId: 'string',
      storageLocation: 'string',
      vodTranscodeGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRtcCloudRecordingRequestStorageParams extends $dara.Model {
  /**
   * @remarks
   * The file storage information, which specifies the format, storage location, and naming of recording files. This parameter takes effect only when StorageType is set to OSS.
   */
  fileInfo?: StartRtcCloudRecordingRequestStorageParamsFileInfo[];
  /**
   * @remarks
   * The OSS storage configuration. This parameter is required when the storage method is OSS and is invalid when the storage method is VOD.
   */
  OSSParams?: StartRtcCloudRecordingRequestStorageParamsOSSParams;
  /**
   * @remarks
   * The storage method. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  storageType?: number;
  /**
   * @remarks
   * The VOD storage configuration. This parameter is required when the storage method is VOD and is invalid when the storage method is OSS.
   */
  vodParams?: StartRtcCloudRecordingRequestStorageParamsVodParams;
  static names(): { [key: string]: string } {
    return {
      fileInfo: 'FileInfo',
      OSSParams: 'OSSParams',
      storageType: 'StorageType',
      vodParams: 'VodParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileInfo: { 'type': 'array', 'itemType': StartRtcCloudRecordingRequestStorageParamsFileInfo },
      OSSParams: StartRtcCloudRecordingRequestStorageParamsOSSParams,
      storageType: 'number',
      vodParams: StartRtcCloudRecordingRequestStorageParamsVodParams,
    };
  }

  validate() {
    if(Array.isArray(this.fileInfo)) {
      $dara.Model.validateArray(this.fileInfo);
    }
    if(this.OSSParams && typeof (this.OSSParams as any).validate === 'function') {
      (this.OSSParams as any).validate();
    }
    if(this.vodParams && typeof (this.vodParams as any).validate === 'function') {
      (this.vodParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRtcCloudRecordingRequestSubscribeParamsSubscribeUserIdList extends $dara.Model {
  /**
   * @remarks
   * The video input stream type of the UserId. This parameter takes effect only when the subscription is not audio-only (StreamType != 1). Valid values:
   * 
   * @example
   * 0
   */
  sourceType?: number;
  /**
   * @remarks
   * The media type of the subscribed UserId. Valid values:
   * 
   * @example
   * 0
   */
  streamType?: number;
  /**
   * @remarks
   * The subscribed UserId.
   * 
   * This parameter is required.
   * 
   * @example
   * userA
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
      sourceType: 'number',
      streamType: 'number',
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

export class StartRtcCloudRecordingRequestSubscribeParams extends $dara.Model {
  /**
   * @remarks
   * The list of subscribed UserId entries. In single-stream recording mode, each UserId is recorded separately. In stream mixing recording mode, the audio and video of all UserIds are mixed into a single set of audio and video.
   * 
   * This parameter is required.
   */
  subscribeUserIdList?: StartRtcCloudRecordingRequestSubscribeParamsSubscribeUserIdList[];
  static names(): { [key: string]: string } {
    return {
      subscribeUserIdList: 'SubscribeUserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscribeUserIdList: { 'type': 'array', 'itemType': StartRtcCloudRecordingRequestSubscribeParamsSubscribeUserIdList },
    };
  }

  validate() {
    if(Array.isArray(this.subscribeUserIdList)) {
      $dara.Model.validateArray(this.subscribeUserIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRtcCloudRecordingRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the app to which the channel to be recorded belongs. The app must belong to the primary account associated with the current API caller\\"s account.
   * 
   * This parameter is required.
   * 
   * @example
   * ********-7074-****-9ef5-85c19a4*****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the channel to be recorded. Make sure that the channel has active users when you call this operation. Otherwise, the recording task fails to be created.
   * 
   * This parameter is required.
   * 
   * @example
   * room1024
   */
  channelId?: string;
  /**
   * @remarks
   * The idle timeout period. When the task remains idle for longer than MaxIdleTime, the task is automatically stopped. Unit: seconds. The value must be within [10,14400], which is a maximum of 4 hours. Default value: 300.
   * 
   * @example
   * 600
   */
  maxIdleTime?: number;
  /**
   * @remarks
   * The layout parameters. This parameter is not required in single-stream recording mode and is required in stream mixing recording mode when the output is not audio-only.
   */
  mixLayoutParams?: StartRtcCloudRecordingRequestMixLayoutParams;
  /**
   * @remarks
   * The transcoding parameters. This parameter is not required in single-stream recording mode and is required in stream mixing recording mode.
   */
  mixTranscodeParams?: StartRtcCloudRecordingRequestMixTranscodeParams;
  /**
   * @remarks
   * The authentication key for callback messages. Leave this parameter empty to skip authentication. If specified, the key must be 16 to 64 characters in length and consist of only uppercase and lowercase letters and digits.
   * 
   * @example
   * mytestkeymytestkey
   */
  notifyAuthKey?: string;
  /**
   * @remarks
   * The specified formats for which a callback message is sent when the recording file upload event (RecordFileUploaded) is triggered.
   */
  notifyFileUploadedFormat?: string[];
  /**
   * @remarks
   * The URL for receiving callback messages. Task status messages are pushed to this URL in JSON format by using the POST method. The maximum length is 2048 characters.
   * 
   * @example
   * http://xxxx/test/mycallback
   */
  notifyUrl?: string;
  /**
   * @remarks
   * The recording parameters.
   * 
   * This parameter is required.
   */
  recordParams?: StartRtcCloudRecordingRequestRecordParams;
  /**
   * @remarks
   * The storage parameters.
   * 
   * This parameter is required.
   */
  storageParams?: StartRtcCloudRecordingRequestStorageParams;
  /**
   * @remarks
   * The subscription parameters.
   * 
   * This parameter is required.
   */
  subscribeParams?: StartRtcCloudRecordingRequestSubscribeParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      maxIdleTime: 'MaxIdleTime',
      mixLayoutParams: 'MixLayoutParams',
      mixTranscodeParams: 'MixTranscodeParams',
      notifyAuthKey: 'NotifyAuthKey',
      notifyFileUploadedFormat: 'NotifyFileUploadedFormat',
      notifyUrl: 'NotifyUrl',
      recordParams: 'RecordParams',
      storageParams: 'StorageParams',
      subscribeParams: 'SubscribeParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      maxIdleTime: 'number',
      mixLayoutParams: StartRtcCloudRecordingRequestMixLayoutParams,
      mixTranscodeParams: StartRtcCloudRecordingRequestMixTranscodeParams,
      notifyAuthKey: 'string',
      notifyFileUploadedFormat: { 'type': 'array', 'itemType': 'string' },
      notifyUrl: 'string',
      recordParams: StartRtcCloudRecordingRequestRecordParams,
      storageParams: StartRtcCloudRecordingRequestStorageParams,
      subscribeParams: StartRtcCloudRecordingRequestSubscribeParams,
    };
  }

  validate() {
    if(this.mixLayoutParams && typeof (this.mixLayoutParams as any).validate === 'function') {
      (this.mixLayoutParams as any).validate();
    }
    if(this.mixTranscodeParams && typeof (this.mixTranscodeParams as any).validate === 'function') {
      (this.mixTranscodeParams as any).validate();
    }
    if(Array.isArray(this.notifyFileUploadedFormat)) {
      $dara.Model.validateArray(this.notifyFileUploadedFormat);
    }
    if(this.recordParams && typeof (this.recordParams as any).validate === 'function') {
      (this.recordParams as any).validate();
    }
    if(this.storageParams && typeof (this.storageParams as any).validate === 'function') {
      (this.storageParams as any).validate();
    }
    if(this.subscribeParams && typeof (this.subscribeParams as any).validate === 'function') {
      (this.subscribeParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

