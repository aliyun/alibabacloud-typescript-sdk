// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRtcCloudRecordingRequestMixLayoutParamsMixBackground extends $dara.Model {
  /**
   * @example
   * 0
   */
  renderMode?: number;
  /**
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
   * @example
   * 0
   */
  renderMode?: number;
  /**
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
   * @example
   * 0.5
   */
  height?: string;
  /**
   * @example
   * 0
   */
  sourceType?: number;
  subBackground?: StartRtcCloudRecordingRequestMixLayoutParamsUserPanesSubBackground;
  /**
   * @example
   * userA
   */
  userId?: string;
  /**
   * @example
   * 0.5
   */
  width?: string;
  /**
   * @example
   * 0
   */
  x?: string;
  /**
   * @example
   * 0
   */
  y?: string;
  /**
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
  mixBackground?: StartRtcCloudRecordingRequestMixLayoutParamsMixBackground;
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
   * This parameter is required.
   * 
   * @example
   * 300
   */
  audioBitrate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  audioChannels?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 32000
   */
  audioSampleRate?: number;
  /**
   * @example
   * 0
   */
  frameFillType?: number;
  /**
   * @example
   * 5000
   */
  videoBitrate?: number;
  /**
   * @example
   * H.264
   */
  videoCodec?: string;
  /**
   * @example
   * 30
   */
  videoFramerate?: number;
  /**
   * @example
   * 30
   */
  videoGop?: number;
  /**
   * @example
   * 480
   */
  videoHeight?: number;
  /**
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
   * @example
   * 7200
   */
  maxFileDuration?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  recordMode?: number;
  /**
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
   * @example
   * {AppId}_{ChannelId}_{StartTime}_{UserId}
   */
  fileNamePattern?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HLS
   */
  format?: string;
  /**
   * @example
   * {AppId}_{ChannelId}_{StartTime}_{Sequence}
   */
  sliceNamePattern?: string;
  static names(): { [key: string]: string } {
    return {
      fileNamePattern: 'FileNamePattern',
      format: 'Format',
      sliceNamePattern: 'SliceNamePattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileNamePattern: 'string',
      format: 'string',
      sliceNamePattern: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRtcCloudRecordingRequestStorageParamsOSSParams extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mytest-bucket
   */
  OSSBucket?: string;
  /**
   * @remarks
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

export class StartRtcCloudRecordingRequestStorageParams extends $dara.Model {
  fileInfo?: StartRtcCloudRecordingRequestStorageParamsFileInfo[];
  OSSParams?: StartRtcCloudRecordingRequestStorageParamsOSSParams;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  storageType?: number;
  static names(): { [key: string]: string } {
    return {
      fileInfo: 'FileInfo',
      OSSParams: 'OSSParams',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileInfo: { 'type': 'array', 'itemType': StartRtcCloudRecordingRequestStorageParamsFileInfo },
      OSSParams: StartRtcCloudRecordingRequestStorageParamsOSSParams,
      storageType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.fileInfo)) {
      $dara.Model.validateArray(this.fileInfo);
    }
    if(this.OSSParams && typeof (this.OSSParams as any).validate === 'function') {
      (this.OSSParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRtcCloudRecordingRequestSubscribeParamsSubscribeUserIdList extends $dara.Model {
  /**
   * @example
   * 0
   */
  sourceType?: number;
  /**
   * @example
   * 0
   */
  streamType?: number;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * ********-7074-****-9ef5-85c19a4*****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * room1024
   */
  channelId?: string;
  mixLayoutParams?: StartRtcCloudRecordingRequestMixLayoutParams;
  mixTranscodeParams?: StartRtcCloudRecordingRequestMixTranscodeParams;
  /**
   * @example
   * http://xxxx/test/mycallback
   */
  notifyUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  recordParams?: StartRtcCloudRecordingRequestRecordParams;
  /**
   * @remarks
   * This parameter is required.
   */
  storageParams?: StartRtcCloudRecordingRequestStorageParams;
  /**
   * @remarks
   * This parameter is required.
   */
  subscribeParams?: StartRtcCloudRecordingRequestSubscribeParams;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      mixLayoutParams: 'MixLayoutParams',
      mixTranscodeParams: 'MixTranscodeParams',
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
      mixLayoutParams: StartRtcCloudRecordingRequestMixLayoutParams,
      mixTranscodeParams: StartRtcCloudRecordingRequestMixTranscodeParams,
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

