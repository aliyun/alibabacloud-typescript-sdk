// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecordTaskRequestUserPanesImages extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to display the image. Valid values:
   * 
   * - **0** (None): Not displayed.
   * - **1** (Always): Always displayed.
   * - **2** (Backup): Displayed when the current user has no video stream.
   * 
   * @example
   * 1
   */
  display?: number;
  /**
   * @remarks
   * The height of the pane, as a normalized percentage.
   * 
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @remarks
   * The HTTP or HTTPS URL of the image.
   * 
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @remarks
   * The width of the pane, as a normalized percentage.
   * 
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @remarks
   * The X-coordinate, as a normalized percentage.
   * 
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @remarks
   * The Y-coordinate, as a normalized percentage.
   * 
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @remarks
   * The Z-order. 0 indicates the bottom layer, 1 indicates the layer above 0, and so on.
   * 
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

export class UpdateRecordTaskRequestUserPanesTexts extends $dara.Model {
  /**
   * @remarks
   * The text color in RGB format. The calculation formula is R + G × 256 + B × 65536. Valid values of R (red), G (green), and B (blue): **0 to 255**.
   * 
   * @example
   * 0
   */
  fontColor?: number;
  /**
   * @remarks
   * The font size. Valid values: **(0, 72]**.
   * 
   * @example
   * 1
   */
  fontSize?: number;
  /**
   * @remarks
   * The font type. Valid values:
   * 
   * - **0** (default): NOTO_SERIF_CJKSC_REGULAR.
   * - **1**: ALIBABA_PUHUITI_REGULAR.
   * - **2**: ALIBABA_PUHUITI_BOLD.
   * - **3**: ALIBABA_PUHUITI_Heavy.
   * - **4**: ALIBABA_PUHUITI_LIGHT.
   * - **5**: ALIBABA_PUHUITI_MEDIUM.
   * 
   * @example
   * 0
   */
  fontType?: number;
  /**
   * @remarks
   * The text content.
   * 
   * @example
   * text
   */
  text?: string;
  /**
   * @remarks
   * The X-coordinate, as a normalized percentage.
   * 
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @remarks
   * The Y-coordinate, as a normalized percentage.
   * 
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @remarks
   * The Z-order. 0 indicates the bottom layer, 1 indicates the layer above 0, and so on.
   * 
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

export class UpdateRecordTaskRequestUserPanes extends $dara.Model {
  /**
   * @remarks
   * The list of image panes in the current layout.
   */
  images?: UpdateRecordTaskRequestUserPanesImages[];
  /**
   * @remarks
   * The pane ID. Valid values of N: **1 to 16**. Valid values of PaneId: **0 to 15**.
   * 
   * > If the user specified by PaneId is not found, other streams are displayed by default. The streams are determined based on the order in which users join the channel.
   * 
   * @example
   * 1
   */
  paneId?: number;
  /**
   * @remarks
   * The video input source of the user corresponding to the layout. Valid values:
   * 
   * - **camera** (default): the video stream.
   * - **shareScreen**: the screen sharing stream.
   * 
   * Valid values of N: **1 to 16**.
   * 
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @remarks
   * The list of text panes in the current layout.
   */
  texts?: UpdateRecordTaskRequestUserPanesTexts[];
  /**
   * @remarks
   * The ID of the user corresponding to the layout pane. Valid values of N: **1 to 16**.
   * 
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
      images: { 'type': 'array', 'itemType': UpdateRecordTaskRequestUserPanesImages },
      paneId: 'number',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': UpdateRecordTaskRequestUserPanesTexts },
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

export class UpdateRecordTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can create and query the ID in the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The channel ID. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  cropMode?: number;
  /**
   * @remarks
   * The array of layout IDs.
   */
  layoutIds?: number[];
  mediaEncode?: number;
  ownerId?: number;
  /**
   * @remarks
   * Specifies the users whose audio streams are subscribed to in the channel.
   */
  subSpecAudioUsers?: string[];
  /**
   * @remarks
   * Specifies the users whose camera streams are subscribed to in the channel.
   */
  subSpecCameraUsers?: string[];
  /**
   * @remarks
   * Specifies the users whose screen sharing streams are subscribed to in the channel.
   */
  subSpecShareScreenUsers?: string[];
  /**
   * @remarks
   * Specifies the list of users to which the task subscribes.
   * 
   * @example
   * userID
   */
  subSpecUsers?: string[];
  /**
   * @remarks
   * The task ID. Only a single ID is supported. The value must be the same as the TaskId request parameter of [StartRecordTask](https://help.aliyun.com/document_detail/193528.html).
   * 
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  taskProfile?: string;
  /**
   * @remarks
   * The configuration template ID. For more information about how to obtain the template ID, see [AddRecordTemplate](https://help.aliyun.com/document_detail/193625.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 76dasgb****
   */
  templateId?: string;
  /**
   * @remarks
   * Specifies the users whose audio streams are not subscribed to in the channel.
   */
  unsubSpecAudioUsers?: string[];
  /**
   * @remarks
   * Specifies the users whose camera streams are not subscribed to in the channel.
   */
  unsubSpecCameraUsers?: string[];
  /**
   * @remarks
   * Specifies the users whose screen sharing streams are not subscribed to in the channel.
   */
  unsubSpecShareScreenUsers?: string[];
  /**
   * @remarks
   * The list of layout parameters.
   */
  userPanes?: UpdateRecordTaskRequestUserPanes[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      cropMode: 'CropMode',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      ownerId: 'OwnerId',
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
      ownerId: 'number',
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
      userPanes: { 'type': 'array', 'itemType': UpdateRecordTaskRequestUserPanes },
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

