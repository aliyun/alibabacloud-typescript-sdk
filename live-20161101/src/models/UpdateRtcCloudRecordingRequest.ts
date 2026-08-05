// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRtcCloudRecordingRequestMixLayoutParamsMixBackground extends $dara.Model {
  /**
   * @remarks
   * The display mode for the output. Valid values:
   * - 0: crop. (Default)
   * - 1: scale and display with black borders.
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

export class UpdateRtcCloudRecordingRequestMixLayoutParamsUserPanesSubBackground extends $dara.Model {
  /**
   * @remarks
   * The display mode for the sub-pane output. Valid values:
   * - 0: crop. (Default)
   * - 1: scale and display with black borders.
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

export class UpdateRtcCloudRecordingRequestMixLayoutParamsUserPanes extends $dara.Model {
  /**
   * @remarks
   * The pane height as a normalized percentage. The value must be in the range of [0, 1]. (Default: 0)
   * 
   * @example
   * 0.5
   */
  height?: string;
  /**
   * @remarks
   * The video input stream type of the UserId. This parameter is invalid if UserId is not specified. Valid values:
   * - 0: camera. (Default)
   * - 1: screen sharing.
   * 
   * The combination of UserId and SourceType specified here must be included in SubscribeUserIdList.
   * 
   * @example
   * 0
   */
  sourceType?: number;
  /**
   * @remarks
   * The sub-pane background image. When a user turns off the camera, has not started stream ingest after joining, or leaves the channel midway, the corresponding image is displayed at the layout position.
   */
  subBackground?: UpdateRtcCloudRecordingRequestMixLayoutParamsUserPanesSubBackground;
  /**
   * @remarks
   * The UserId corresponding to this window.
   * - If UserId is not specified, windows are filled in the order in which subscribed users join the channel.
   * - The combination of UserId and SourceType specified here must be included in SubscribeUserIdList.
   * - Audio-only streams cannot be added to the layout.
   * 
   * @example
   * userA
   */
  userId?: string;
  /**
   * @remarks
   * The pane width as a normalized percentage. The value must be in the range of [0, 1]. (Default: 0)
   * 
   * @example
   * 0.5
   */
  width?: string;
  /**
   * @remarks
   * The X coordinate as a normalized percentage. The value must be in the range of [0, 1]. (Default: 0)
   * 
   * @example
   * 0
   */
  x?: string;
  /**
   * @remarks
   * The Y coordinate as a normalized percentage. The value must be in the range of [0, 1]. (Default: 0)
   * 
   * @example
   * 0
   */
  y?: string;
  /**
   * @remarks
   * The stacking order. 0 is the bottom layer, layer 1 is above layer 0, and so on. (Default: 0)
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
      subBackground: UpdateRtcCloudRecordingRequestMixLayoutParamsUserPanesSubBackground,
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

export class UpdateRtcCloudRecordingRequestMixLayoutParams extends $dara.Model {
  /**
   * @remarks
   * The global background image for stream mixing.
   */
  mixBackground?: UpdateRtcCloudRecordingRequestMixLayoutParamsMixBackground;
  /**
   * @remarks
   * The window layout information of the subscribed users. Only UserIds with layout information configured are placed in the output. This parameter is required in stream mixing mode when recording non-audio-only files.
   */
  userPanes?: UpdateRtcCloudRecordingRequestMixLayoutParamsUserPanes[];
  static names(): { [key: string]: string } {
    return {
      mixBackground: 'MixBackground',
      userPanes: 'UserPanes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mixBackground: UpdateRtcCloudRecordingRequestMixLayoutParamsMixBackground,
      userPanes: { 'type': 'array', 'itemType': UpdateRtcCloudRecordingRequestMixLayoutParamsUserPanes },
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

export class UpdateRtcCloudRecordingRequestSubscribeParamsSubscribeUserIdList extends $dara.Model {
  /**
   * @remarks
   * The video input stream type of the UserId. This parameter takes effect only when the video stream is subscribed (StreamType=2). Valid values:
   * 
   * - 0: camera. (Default)
   * 
   * - 1: screen sharing.
   * 
   * @example
   * 0
   */
  sourceType?: number;
  /**
   * @remarks
   * The media type of the subscribed UserId. Valid values:
   * 
   * - 0: original stream, which includes both audio and video. (Default)
   * 
   * - 1: audio-only stream.
   * 
   * - 2: video-only stream.
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

export class UpdateRtcCloudRecordingRequestSubscribeParams extends $dara.Model {
  /**
   * @remarks
   * The list of subscribed UserId entries. In single-stream recording mode, each UserId is recorded separately. In stream mixing recording mode, the audio and video of all UserIds are mixed into a single set of audio and video.
   * > 
   * > - The array supports a maximum of 17 elements.
   * 
   * This parameter is required.
   */
  subscribeUserIdList?: UpdateRtcCloudRecordingRequestSubscribeParamsSubscribeUserIdList[];
  static names(): { [key: string]: string } {
    return {
      subscribeUserIdList: 'SubscribeUserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscribeUserIdList: { 'type': 'array', 'itemType': UpdateRtcCloudRecordingRequestSubscribeParamsSubscribeUserIdList },
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

export class UpdateRtcCloudRecordingRequest extends $dara.Model {
  /**
   * @remarks
   * The updated layout parameters. Leave this parameter empty in single-stream recording mode. This parameter is required in stream mixing recording mode when the transcoding output is not audio-only.
   */
  mixLayoutParams?: UpdateRtcCloudRecordingRequestMixLayoutParams;
  /**
   * @remarks
   * The updated subscription parameters.
   * 
   * This parameter is required.
   */
  subscribeParams?: UpdateRtcCloudRecordingRequestSubscribeParams;
  /**
   * @remarks
   * The task ID. This ID is returned by StartRtcCloudRecording. Only tasks in the running or abnormal state can be updated.
   * 
   * This parameter is required.
   * 
   * @example
   * ******73-8501-****-8ac1-72295a******
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      mixLayoutParams: 'MixLayoutParams',
      subscribeParams: 'SubscribeParams',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mixLayoutParams: UpdateRtcCloudRecordingRequestMixLayoutParams,
      subscribeParams: UpdateRtcCloudRecordingRequestSubscribeParams,
      taskId: 'string',
    };
  }

  validate() {
    if(this.mixLayoutParams && typeof (this.mixLayoutParams as any).validate === 'function') {
      (this.mixLayoutParams as any).validate();
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

