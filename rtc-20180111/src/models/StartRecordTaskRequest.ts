// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRecordTaskRequestUserPanesImages extends $dara.Model {
  /**
   * @remarks
   * The display mode of the image. Valid values:
   * 
   * - **0** (None): The image is not displayed.
   * - **1** (Always): The image is always displayed.
   * - **2** (Backup): The image is displayed when the current user has no video stream.
   * 
   * @example
   * 1
   */
  display?: number;
  /**
   * @remarks
   * The height of the pane, represented as a normalized percentage.
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
   * The width of the pane, represented as a normalized percentage.
   * 
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @remarks
   * The X coordinate, represented as a normalized percentage.
   * 
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @remarks
   * The Y coordinate, represented as a normalized percentage.
   * 
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @remarks
   * The stacking order. 0 indicates the bottom layer, 1 indicates the layer above 0, and so on.
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

export class StartRecordTaskRequestUserPanesTexts extends $dara.Model {
  /**
   * @remarks
   * The text color in RGB format. The calculation formula is R + G × 256 + B × 65536. Valid values of R (red), G (green), and B (blue): **0 to 255**.
   * 
   * @example
   * 1
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
   * The X coordinate, represented as a normalized percentage.
   * 
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @remarks
   * The Y coordinate, represented as a normalized percentage.
   * 
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @remarks
   * The stacking order. 0 indicates the bottom layer, 1 indicates the layer above 0, and so on.
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

export class StartRecordTaskRequestUserPanes extends $dara.Model {
  /**
   * @remarks
   * The list of image panes in the current layout.
   */
  images?: StartRecordTaskRequestUserPanesImages[];
  /**
   * @remarks
   * The pane ID. Valid values: **0** to **15**.
   * 
   * > - If the user specified by PaneId is not found, other streams are displayed by default. The streams are determined based on the order in which users join the channel.
   * - If a parameter related to UserPanes is required, all other related parameters are also required. Otherwise, none of them are required.
   * 
   * @example
   * 2
   */
  paneId?: number;
  /**
   * @remarks
   * The user video input that corresponds to the layout. Valid values:
   * 
   * - **camera** (default): the video stream.
   * - **shareScreen**: the screen sharing stream.
   * 
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @remarks
   * The list of text panes in the current layout.
   */
  texts?: StartRecordTaskRequestUserPanesTexts[];
  /**
   * @remarks
   * The ID of the user that corresponds to the layout pane. Valid values of N: **1 to 16**.
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
  /**
   * @remarks
   * The cropping mode of the video. Valid values:
   * 
   * - **1**: crops the video while maintaining the aspect ratio.
   * - **2** (default): adds padding to the video while maintaining the aspect ratio.
   * 
   * @example
   * 1
   */
  cropMode?: number;
  /**
   * @remarks
   * The list of layout IDs.
   * 
   * @example
   * 1111
   */
  layoutIds?: number[];
  /**
   * @remarks
   * The encoding option. For more information, see the MediaEncode enum values below.
   * 
   * @example
   * 20
   */
  mediaEncode?: number;
  /**
   * @remarks
   * The recording mode. Valid values:
   * 
   * - **0**: single-stream recording. Task parameters cannot be modified during the recording process. You cannot call the UpdateRecordTask operation to modify task parameters.
   * - **1** (default): mixed-stream recording. Multiple video streams are mixed and output.
   * 
   * > - Valid parameters in single-stream recording mode: StreamType and SourceType.
   * - Valid parameters in mixed-stream recording mode: TaskProfile, MediaEncode, LayoutIds, BackgroundColor, SubSpecUsers, CropMode, UserPanes, Backgrounds, Watermarks, and ClockWidgets.
   * 
   * @example
   * 1
   */
  mixMode?: number;
  ownerId?: number;
  /**
   * @remarks
   * The video source in single-stream recording mode. Valid values:
   * 
   * - **camera**: the camera.
   * - **shareScreen**: screen sharing.
   * 
   * > If the video source is shareScreen and only the camera stream is ingested, the camera stream is recorded. If both the camera stream and the screen sharing stream are ingested, the screen sharing stream is recorded.
   * 
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @remarks
   * The single-stream recording mode. Valid values:
   * 
   * - **0** (default): records the original stream.
   * - **1**: records only the audio stream.
   * 
   * @example
   * 0
   */
  streamType?: number;
  /**
   * @remarks
   * Specifies the users whose audio streams are subscribed to in the channel.
   * 
   * @example
   * 1
   */
  subSpecAudioUsers?: string[];
  /**
   * @remarks
   * Specifies the users whose camera streams are subscribed to in the channel.
   * 
   * @example
   * 1
   */
  subSpecCameraUsers?: string[];
  /**
   * @remarks
   * Specifies the users whose screen sharing streams are subscribed to in the channel.
   * 
   * @example
   * 1
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
   * The task ID. Only a single ID is supported and the ID must be unique. The ID must be 1 to 55 characters in length and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * The billing configuration of the task. You are charged based on your settings. For more information, see the TaskProfile enum values below.
   * 
   * > - The resolution of the MediaEncode encoding option must be less than or equal to the resolution of TaskProfile.
   * - The maximum number of panes in the layout must be less than or equal to the number of input streams specified by TaskProfile.
   * 
   * @example
   * 4IN_1080P
   */
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
   * 
   * @example
   * 1
   */
  unsubSpecAudioUsers?: string[];
  /**
   * @remarks
   * Specifies the users whose camera streams are not subscribed to in the channel.
   * 
   * @example
   * 1
   */
  unsubSpecCameraUsers?: string[];
  /**
   * @remarks
   * Specifies the users whose screen sharing streams are not subscribed to in the channel.
   * 
   * @example
   * 1
   */
  unsubSpecShareScreenUsers?: string[];
  /**
   * @remarks
   * The list of layout parameters.
   */
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

