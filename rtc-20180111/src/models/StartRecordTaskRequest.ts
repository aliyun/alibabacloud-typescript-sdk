// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRecordTaskRequestUserPanesImages extends $dara.Model {
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

export class StartRecordTaskRequestUserPanesTexts extends $dara.Model {
  /**
   * @example
   * 1
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

export class StartRecordTaskRequestUserPanes extends $dara.Model {
  images?: StartRecordTaskRequestUserPanesImages[];
  /**
   * @example
   * 2
   */
  paneId?: number;
  /**
   * @example
   * camera
   */
  sourceType?: string;
  texts?: StartRecordTaskRequestUserPanesTexts[];
  /**
   * @example
   * TestId
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneId: 'PaneId',
      sourceType: 'SourceType',
      texts: 'Texts',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': StartRecordTaskRequestUserPanesImages },
      paneId: 'number',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': StartRecordTaskRequestUserPanesTexts },
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

export class StartRecordTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @example
   * 1
   */
  cropMode?: number;
  /**
   * @example
   * 1111
   */
  layoutIds?: number[];
  /**
   * @example
   * 20
   */
  mediaEncode?: number;
  /**
   * @example
   * 1
   */
  mixMode?: number;
  ownerId?: number;
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
   * 1
   */
  subSpecAudioUsers?: string[];
  /**
   * @example
   * 1
   */
  subSpecCameraUsers?: string[];
  /**
   * @example
   * 1
   */
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
   * 4IN_1080P
   */
  taskProfile?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 76dasgb****
   */
  templateId?: string;
  /**
   * @example
   * 1
   */
  unsubSpecAudioUsers?: string[];
  /**
   * @example
   * 1
   */
  unsubSpecCameraUsers?: string[];
  /**
   * @example
   * 1
   */
  unsubSpecShareScreenUsers?: string[];
  userPanes?: StartRecordTaskRequestUserPanes[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      cropMode: 'CropMode',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      mixMode: 'MixMode',
      ownerId: 'OwnerId',
      sourceType: 'SourceType',
      streamType: 'StreamType',
      subSpecAudioUsers: 'SubSpecAudioUsers',
      subSpecCameraUsers: 'SubSpecCameraUsers',
      subSpecShareScreenUsers: 'SubSpecShareScreenUsers',
      subSpecUsers: 'SubSpecUsers',
      taskId: 'TaskId',
      taskProfile: 'TaskProfile',
      templateId: 'TemplateId',
      unsubSpecAudioUsers: 'UnsubSpecAudioUsers',
      unsubSpecCameraUsers: 'UnsubSpecCameraUsers',
      unsubSpecShareScreenUsers: 'UnsubSpecShareScreenUsers',
      userPanes: 'UserPanes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      cropMode: 'number',
      layoutIds: { 'type': 'array', 'itemType': 'number' },
      mediaEncode: 'number',
      mixMode: 'number',
      ownerId: 'number',
      sourceType: 'string',
      streamType: 'number',
      subSpecAudioUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecCameraUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecShareScreenUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecUsers: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      taskProfile: 'string',
      templateId: 'string',
      unsubSpecAudioUsers: { 'type': 'array', 'itemType': 'string' },
      unsubSpecCameraUsers: { 'type': 'array', 'itemType': 'string' },
      unsubSpecShareScreenUsers: { 'type': 'array', 'itemType': 'string' },
      userPanes: { 'type': 'array', 'itemType': StartRecordTaskRequestUserPanes },
    };
  }

  validate() {
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

