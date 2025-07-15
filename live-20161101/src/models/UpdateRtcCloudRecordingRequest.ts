// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRtcCloudRecordingRequestMixLayoutParamsMixBackground extends $dara.Model {
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

export class UpdateRtcCloudRecordingRequestMixLayoutParamsUserPanesSubBackground extends $dara.Model {
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

export class UpdateRtcCloudRecordingRequestMixLayoutParamsUserPanes extends $dara.Model {
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
  subBackground?: UpdateRtcCloudRecordingRequestMixLayoutParamsUserPanesSubBackground;
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
  mixBackground?: UpdateRtcCloudRecordingRequestMixLayoutParamsMixBackground;
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

export class UpdateRtcCloudRecordingRequestSubscribeParams extends $dara.Model {
  /**
   * @remarks
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
  mixLayoutParams?: UpdateRtcCloudRecordingRequestMixLayoutParams;
  /**
   * @remarks
   * This parameter is required.
   */
  subscribeParams?: UpdateRtcCloudRecordingRequestSubscribeParams;
  /**
   * @remarks
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

