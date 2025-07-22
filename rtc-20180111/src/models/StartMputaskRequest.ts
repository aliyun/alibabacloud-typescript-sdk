// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartMPUTaskRequestBackgrounds extends $dara.Model {
  /**
   * @example
   * 1
   */
  display?: number;
  /**
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      display: 'Display',
      height: 'Height',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'number',
      height: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequestClockWidgets extends $dara.Model {
  /**
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @example
   * 0
   */
  borderColor?: number;
  /**
   * @example
   * 1
   */
  borderWidth?: number;
  /**
   * @example
   * false
   */
  box?: boolean;
  /**
   * @example
   * 0
   */
  boxBorderWidth?: number;
  /**
   * @example
   * 0
   */
  boxColor?: number;
  /**
   * @example
   * 0
   */
  fontColor?: number;
  /**
   * @example
   * 1
   */
  fontSize?: number;
  /**
   * @example
   * 0
   */
  fontType?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      box: 'Box',
      boxBorderWidth: 'BoxBorderWidth',
      boxColor: 'BoxColor',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      fontType: 'FontType',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      borderColor: 'number',
      borderWidth: 'number',
      box: 'boolean',
      boxBorderWidth: 'number',
      boxColor: 'number',
      fontColor: 'number',
      fontSize: 'number',
      fontType: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequestEnhancedParam extends $dara.Model {
  /**
   * @example
   * false
   */
  enablePortraitSegmentation?: boolean;
  static names(): { [key: string]: string } {
    return {
      enablePortraitSegmentation: 'EnablePortraitSegmentation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePortraitSegmentation: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequestUserPanesImages extends $dara.Model {
  /**
   * @example
   * 1
   */
  display?: number;
  /**
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      display: 'Display',
      height: 'Height',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'number',
      height: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequestUserPanesTexts extends $dara.Model {
  /**
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @example
   * 0
   */
  borderColor?: number;
  /**
   * @example
   * 1
   */
  borderWidth?: number;
  /**
   * @example
   * false
   */
  box?: boolean;
  /**
   * @example
   * 0
   */
  boxBorderWidth?: number;
  /**
   * @example
   * 0
   */
  boxColor?: number;
  /**
   * @example
   * 0
   */
  fontColor?: number;
  /**
   * @example
   * 1
   */
  fontSize?: number;
  /**
   * @example
   * 0
   */
  fontType?: number;
  /**
   * @example
   * text
   */
  text?: string;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.2456
   */
  y?: number;
  /**
   * @example
   * 0
   */
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      box: 'Box',
      boxBorderWidth: 'BoxBorderWidth',
      boxColor: 'BoxColor',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      fontType: 'FontType',
      text: 'Text',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      borderColor: 'number',
      borderWidth: 'number',
      box: 'boolean',
      boxBorderWidth: 'number',
      boxColor: 'number',
      fontColor: 'number',
      fontSize: 'number',
      fontType: 'number',
      text: 'string',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequestUserPanes extends $dara.Model {
  images?: StartMPUTaskRequestUserPanesImages[];
  /**
   * @example
   * 2
   */
  paneId?: number;
  /**
   * @example
   * 0
   */
  segmentType?: number;
  /**
   * @example
   * camera
   */
  sourceType?: string;
  texts?: StartMPUTaskRequestUserPanesTexts[];
  /**
   * @example
   * TestId
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneId: 'PaneId',
      segmentType: 'SegmentType',
      sourceType: 'SourceType',
      texts: 'Texts',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': StartMPUTaskRequestUserPanesImages },
      paneId: 'number',
      segmentType: 'number',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': StartMPUTaskRequestUserPanesTexts },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequestWatermarks extends $dara.Model {
  /**
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @example
   * 0
   */
  display?: number;
  /**
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      display: 'Display',
      height: 'Height',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      display: 'number',
      height: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @example
   * 0
   */
  backgroundColor?: number;
  backgrounds?: StartMPUTaskRequestBackgrounds[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  clockWidgets?: StartMPUTaskRequestClockWidgets[];
  /**
   * @example
   * 1
   */
  cropMode?: number;
  enhancedParam?: StartMPUTaskRequestEnhancedParam;
  /**
   * @example
   * 1
   */
  layoutIds?: number[];
  /**
   * @example
   * 2
   */
  mediaEncode?: number;
  /**
   * @example
   * 0
   */
  mixMode?: number;
  ownerId?: number;
  /**
   * @example
   * 0
   */
  payloadType?: number;
  /**
   * @example
   * 0
   */
  reportVad?: number;
  /**
   * @example
   * 0
   */
  rtpExtInfo?: number;
  /**
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @example
   * 0
   */
  streamType?: number;
  /**
   * @example
   * rtmp://example.com/live/stream
   */
  streamURL?: string;
  /**
   * @example
   * audioUserID
   */
  subSpecAudioUsers?: string[];
  subSpecCameraUsers?: string[];
  subSpecShareScreenUsers?: string[];
  /**
   * @example
   * userID
   */
  subSpecUsers?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  /**
   * @example
   * 0
   */
  taskType?: number;
  /**
   * @example
   * 15273582735
   */
  timeStampRef?: number;
  unsubSpecAudioUsers?: string[];
  unsubSpecCameraUsers?: string[];
  unsubSpecShareScreenUsers?: string[];
  userPanes?: StartMPUTaskRequestUserPanes[];
  /**
   * @example
   * 86400
   */
  vadInterval?: number;
  watermarks?: StartMPUTaskRequestWatermarks[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgroundColor: 'BackgroundColor',
      backgrounds: 'Backgrounds',
      channelId: 'ChannelId',
      clockWidgets: 'ClockWidgets',
      cropMode: 'CropMode',
      enhancedParam: 'EnhancedParam',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      mixMode: 'MixMode',
      ownerId: 'OwnerId',
      payloadType: 'PayloadType',
      reportVad: 'ReportVad',
      rtpExtInfo: 'RtpExtInfo',
      sourceType: 'SourceType',
      streamType: 'StreamType',
      streamURL: 'StreamURL',
      subSpecAudioUsers: 'SubSpecAudioUsers',
      subSpecCameraUsers: 'SubSpecCameraUsers',
      subSpecShareScreenUsers: 'SubSpecShareScreenUsers',
      subSpecUsers: 'SubSpecUsers',
      taskId: 'TaskId',
      taskType: 'TaskType',
      timeStampRef: 'TimeStampRef',
      unsubSpecAudioUsers: 'UnsubSpecAudioUsers',
      unsubSpecCameraUsers: 'UnsubSpecCameraUsers',
      unsubSpecShareScreenUsers: 'UnsubSpecShareScreenUsers',
      userPanes: 'UserPanes',
      vadInterval: 'VadInterval',
      watermarks: 'Watermarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgroundColor: 'number',
      backgrounds: { 'type': 'array', 'itemType': StartMPUTaskRequestBackgrounds },
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': StartMPUTaskRequestClockWidgets },
      cropMode: 'number',
      enhancedParam: StartMPUTaskRequestEnhancedParam,
      layoutIds: { 'type': 'array', 'itemType': 'number' },
      mediaEncode: 'number',
      mixMode: 'number',
      ownerId: 'number',
      payloadType: 'number',
      reportVad: 'number',
      rtpExtInfo: 'number',
      sourceType: 'string',
      streamType: 'number',
      streamURL: 'string',
      subSpecAudioUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecCameraUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecShareScreenUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecUsers: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      taskType: 'number',
      timeStampRef: 'number',
      unsubSpecAudioUsers: { 'type': 'array', 'itemType': 'string' },
      unsubSpecCameraUsers: { 'type': 'array', 'itemType': 'string' },
      unsubSpecShareScreenUsers: { 'type': 'array', 'itemType': 'string' },
      userPanes: { 'type': 'array', 'itemType': StartMPUTaskRequestUserPanes },
      vadInterval: 'number',
      watermarks: { 'type': 'array', 'itemType': StartMPUTaskRequestWatermarks },
    };
  }

  validate() {
    if(Array.isArray(this.backgrounds)) {
      $dara.Model.validateArray(this.backgrounds);
    }
    if(Array.isArray(this.clockWidgets)) {
      $dara.Model.validateArray(this.clockWidgets);
    }
    if(this.enhancedParam && typeof (this.enhancedParam as any).validate === 'function') {
      (this.enhancedParam as any).validate();
    }
    if(Array.isArray(this.layoutIds)) {
      $dara.Model.validateArray(this.layoutIds);
    }
    if(Array.isArray(this.subSpecAudioUsers)) {
      $dara.Model.validateArray(this.subSpecAudioUsers);
    }
    if(Array.isArray(this.subSpecCameraUsers)) {
      $dara.Model.validateArray(this.subSpecCameraUsers);
    }
    if(Array.isArray(this.subSpecShareScreenUsers)) {
      $dara.Model.validateArray(this.subSpecShareScreenUsers);
    }
    if(Array.isArray(this.subSpecUsers)) {
      $dara.Model.validateArray(this.subSpecUsers);
    }
    if(Array.isArray(this.unsubSpecAudioUsers)) {
      $dara.Model.validateArray(this.unsubSpecAudioUsers);
    }
    if(Array.isArray(this.unsubSpecCameraUsers)) {
      $dara.Model.validateArray(this.unsubSpecCameraUsers);
    }
    if(Array.isArray(this.unsubSpecShareScreenUsers)) {
      $dara.Model.validateArray(this.unsubSpecShareScreenUsers);
    }
    if(Array.isArray(this.userPanes)) {
      $dara.Model.validateArray(this.userPanes);
    }
    if(Array.isArray(this.watermarks)) {
      $dara.Model.validateArray(this.watermarks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

