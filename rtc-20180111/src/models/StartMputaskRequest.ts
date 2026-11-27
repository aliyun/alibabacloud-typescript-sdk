// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartMPUTaskRequestBackgrounds extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to display the image. Valid values:
   * 
   * - **0 (None)**: not displayed.
   * - **1 (Always)**: always displayed.
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

export class StartMPUTaskRequestClockWidgets extends $dara.Model {
  /**
   * @remarks
   * The transparency of the text box and text. A value of 0.0 indicates fully transparent, and 1.0 indicates fully opaque.
   * 
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @remarks
   * The text stroke color in RGB format.
   * The formula is `R + G × 256 + B × 65536`. Valid values for R (red), G (green), and B (blue): **0** to **255**.
   * 
   * @example
   * 0
   */
  borderColor?: number;
  /**
   * @remarks
   * The text stroke width, in pixels. Default value: 0.
   * 
   * @example
   * 1
   */
  borderWidth?: number;
  /**
   * @remarks
   * Specifies whether to display the text box. Valid values:
   * 
   * - false (default): not displayed.
   * - true: displayed.
   * 
   * @example
   * false
   */
  box?: boolean;
  /**
   * @remarks
   * The text box border width, in pixels. Default value: 0.
   * 
   * @example
   * 0
   */
  boxBorderWidth?: number;
  /**
   * @remarks
   * The text box color in RGB format.
   * The formula is `R + G × 256 + B × 65536`. Valid values for R (red), G (green), and B (blue): **0** to **255**.
   * 
   * @example
   * 0
   */
  boxColor?: number;
  /**
   * @remarks
   * The text color in RGB format.
   * 
   * The formula is `R + G × 256 + B × 65536`. Valid values for R (red), G (green), and B (blue): **0** to **255**.
   * 
   * @example
   * 0
   */
  fontColor?: number;
  /**
   * @remarks
   * The font size. Valid values: **0** to **72**.
   * 
   * @example
   * 1
   */
  fontSize?: number;
  /**
   * @remarks
   * The font type. Valid values:
   * 
   * - **0**: NOTO_SERIF_CJKSC_REGULAR (default).
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
   * The stacking order. 0 indicates the bottom layer, 1 indicates the layer above 0, and so on.
   * 
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
   * @remarks
   * Specifies whether to enable the portrait segmentation feature (in closed beta). Valid values:
   * 
   * - **true**: enabled.
   * - **false** (default): disabled.
   * 
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
   * @remarks
   * Specifies whether to display the image. Valid values:
   * 
   * - **0 (None)**: not displayed.
   * - **1 (Always)**: always displayed.
   * - **2 (Backup)**: displayed when the current user has no video stream.
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

export class StartMPUTaskRequestUserPanesTexts extends $dara.Model {
  /**
   * @remarks
   * The transparency of the text box and text. A value of 0.0 indicates fully transparent, and 1.0 indicates fully opaque.
   * 
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @remarks
   * The text stroke color in RGB format.
   * The formula is `R + G × 256 + B × 65536`. Valid values for R (red), G (green), and B (blue): **0** to **255**.
   * 
   * @example
   * 0
   */
  borderColor?: number;
  /**
   * @remarks
   * The text stroke width, in pixels. Default value: 0.
   * 
   * @example
   * 1
   */
  borderWidth?: number;
  /**
   * @remarks
   * Specifies whether to display the text box. Valid values:
   * 
   * - false (default): not displayed.
   * - true: displayed.
   * 
   * @example
   * false
   */
  box?: boolean;
  /**
   * @remarks
   * The text box border width, in pixels. Default value: 0.
   * 
   * @example
   * 0
   */
  boxBorderWidth?: number;
  /**
   * @remarks
   * The text box color in RGB format.
   * The formula is `R + G × 256 + B × 65536`. Valid values for R (red), G (green), and B (blue): **0** to **255**.
   * 
   * @example
   * 0
   */
  boxColor?: number;
  /**
   * @remarks
   * The text color in RGB format.
   * 
   * The formula is `R + G × 256 + B × 65536`. Valid values for R (red), G (green), and B (blue): **0** to **255**.
   * 
   * @example
   * 0
   */
  fontColor?: number;
  /**
   * @remarks
   * The font size. Valid values: **0** to **72**.
   * 
   * @example
   * 1
   */
  fontSize?: number;
  /**
   * @remarks
   * The font type. Valid values:
   * 
   * - **0**: NOTO_SERIF_CJKSC_REGULAR (default).
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
   * 0.2456
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
  /**
   * @remarks
   * The image panes in the current layout.
   */
  images?: StartMPUTaskRequestUserPanesImages[];
  /**
   * @remarks
   * The pane ID. Valid values: **0** to **15**.
   * >If the user specified by PaneId is not found, the system displays other streams by default. The streams are determined based on the order in which users join the channel.
   * 
   * @example
   * 2
   */
  paneId?: number;
  /**
   * @remarks
   * The portrait segmentation type. Valid values:
   * 
   * - **0**: no portrait segmentation (default).
   * 
   * - **1**: portrait segmentation. This value takes effect only after the portrait segmentation feature is enabled.
   * 
   * @example
   * 0
   */
  segmentType?: number;
  /**
   * @remarks
   * The user video input corresponding to the layout. Valid values:
   * 
   * - **camera**: video stream (default).
   * - **shareScreen**: screen sharing stream.
   * 
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @remarks
   * The text panes in the current layout.
   */
  texts?: StartMPUTaskRequestUserPanesTexts[];
  /**
   * @remarks
   * The ID of the user corresponding to the layout pane. Valid values: **1** to **16**.
   * 
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
   * @remarks
   * The transparency. A value of 0.0 indicates fully transparent, and 1.0 indicates fully opaque.
   * 
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @remarks
   * Specifies whether to display the image. Valid values:
   * 
   * - **0 (None)**: not displayed.
   * - **1 (Always)**: always displayed.
   * 
   * @example
   * 0
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
   * The stacking order. 0 indicates the bottom layer, 1 indicates the layer above 0, and so on.
   * 
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
   * The application ID. Only a single ID is supported.
   * 
   * You can create and query it in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The RGB value of the background color. Default value: **0** (black).
   * 
   * The formula is `R + G × 256 + B × 65536`. Valid values for R (red), G (green), and B (blue): 0 to 255.
   * 
   * @example
   * 0
   */
  backgroundColor?: number;
  /**
   * @remarks
   * The canvas background image panes.
   */
  backgrounds?: StartMPUTaskRequestBackgrounds[];
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
   * The clock widgets.
   */
  clockWidgets?: StartMPUTaskRequestClockWidgets[];
  /**
   * @remarks
   * The video cropping mode. Valid values:
   * 
   * - **1**: crop while keeping the aspect ratio.
   * 
   * - **2**: keep the aspect ratio and add padding (default).
   * 
   * @example
   * 1
   */
  cropMode?: number;
  /**
   * @remarks
   * The enhanced parameters.
   */
  enhancedParam?: StartMPUTaskRequestEnhancedParam;
  /**
   * @remarks
   * The layout IDs.
   * 
   * @example
   * 1
   */
  layoutIds?: number[];
  /**
   * @remarks
   * The encoding options. For more information, see the MediaEncode enum values below.
   * 
   * @example
   * 2
   */
  mediaEncode?: number;
  /**
   * @remarks
   * The mixed streaming mode. Valid values:
   * 
   * - **0**: single-stream relay. The original single stream is relayed without mixed-stream transcoding. You do not need to configure mixed-stream transcoding parameters.
   * - **1**: mixed-stream transcoding (default). Mixed-stream transcoding output is supported.
   * 
   * > - Valid parameters in single-stream relay mode: **StreamType**, **SourceType**, and **SubSpecUsers**.
   * - Valid parameters in mixed-stream transcoding mode: **MediaEncode**, **LayoutIds**, **BackgroundColor**, **SubSpecUsers**, **CropMode**, **UserPanes**, **Backgrounds**, and **Watermarks**.
   * 
   * @example
   * 0
   */
  mixMode?: number;
  ownerId?: number;
  /**
   * @remarks
   * The payload type. Valid values:
   * - **0**: do not use a payload.
   * - **1**: use VideoSEI.
   * 
   * @example
   * 0
   */
  payloadType?: number;
  /**
   * @remarks
   * The voice activity detection (VAD) flag. Valid values:
   * - **0**: do not pass VAD information.
   * - **1**: pass VAD information.
   * 
   * @example
   * 0
   */
  reportVad?: number;
  /**
   * @remarks
   * The RTP extension header information. Valid values:
   * - **0**: do not pass.
   * - **1**: pass.
   * 
   * @example
   * 0
   */
  rtpExtInfo?: number;
  /**
   * @remarks
   * The user video input stream in single-stream relay mode. Valid values:
   * 
   * - **camera**: camera.
   * - **shareScreen**: screen sharing.
   * 
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @remarks
   * The stream type to relay in single-stream relay mode. Valid values:
   * 
   * - **0**: relay the original stream.
   * - **1**: relay only the audio stream.
   * - **2**: relay only the video stream.
   * 
   * By default, the original stream is relayed.
   * 
   * @example
   * 0
   */
  streamType?: number;
  /**
   * @remarks
   * The live streaming ingest URL. Only a single URL is supported. For more information about the generation rules, see [Ingest and streaming URLs](https://help.aliyun.com/document_detail/199339.html).
   * 
   * >- For domain names with hotlink protection authentication enabled, the ingest URL must include an authentication string.
   * - The same StreamURL cannot be used simultaneously in different tasks.
   * - The same StreamURL cannot be used within 10 seconds after a task is stopped.
   * 
   * @example
   * rtmp://example.com/live/stream
   */
  streamURL?: string;
  /**
   * @remarks
   * Specifies the users whose audio streams are subscribed to in the channel.
   * 
   * @example
   * audioUserID
   */
  subSpecAudioUsers?: string[];
  /**
   * @remarks
   * Specifies the users whose camera video streams are subscribed to in the channel.
   */
  subSpecCameraUsers?: string[];
  /**
   * @remarks
   * Specifies the users whose screen sharing video streams are subscribed to in the channel.
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
   * The task ID. Only a single ID is supported. The ID can contain letters, digits, underscores (_), and hyphens (-), and can be up to 55 bytes in length.
   * 
   * > This ID identifies the bypass live streaming task and must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * The media processing type. Valid values:
   * 
   * - **0**: bypass live streaming task.
   * - **1**: MCU mixed-stream low-latency distribution task.
   * 
   * @example
   * 0
   */
  taskType?: number;
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 15273582735
   */
  timeStampRef?: number;
  /**
   * @remarks
   * Specifies the users whose audio streams are not subscribed to in the channel.
   */
  unsubSpecAudioUsers?: string[];
  /**
   * @remarks
   * Specifies the users whose camera video streams are not subscribed to in the channel.
   */
  unsubSpecCameraUsers?: string[];
  /**
   * @remarks
   * Specifies the users whose screen sharing video streams are not subscribed to in the channel.
   */
  unsubSpecShareScreenUsers?: string[];
  /**
   * @remarks
   * The layout parameters.
   */
  userPanes?: StartMPUTaskRequestUserPanes[];
  /**
   * @remarks
   * The callback interval for voice activity detection.
   * 
   * @example
   * 86400
   */
  vadInterval?: number;
  /**
   * @remarks
   * The watermark image panes.
   */
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

