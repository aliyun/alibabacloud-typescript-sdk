// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMPUTaskRequestBackgrounds extends $dara.Model {
  /**
   * @remarks
   * Image display. Values:
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
   * Pane height, normalized percentage.
   * 
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @remarks
   * HTTP or HTTPS address of the image.
   * 
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @remarks
   * Pane width, normalized percentage.
   * 
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @remarks
   * X coordinate, normalized percentage.
   * 
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @remarks
   * Y coordinate, normalized percentage.
   * 
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @remarks
   * Stacking order. 0 is the bottom layer, layer 1 is above layer 0, and so on.
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

export class UpdateMPUTaskRequestClockWidgets extends $dara.Model {
  /**
   * @remarks
   * Transparency of the text box and text. 0.0 indicates transparent, and 1.0 indicates completely opaque.
   * 
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @remarks
   * Text border color.
   * The calculation formula is `R + G × 256 + B × 65536`. Values of R (red), G (green), and B (blue): **0** to **255**.
   * 
   * @example
   * 0
   */
  borderColor?: number;
  /**
   * @remarks
   * Text border width (unit: pixels). The default value is 0.
   * 
   * @example
   * 1
   */
  borderWidth?: number;
  /**
   * @remarks
   * Whether to display a text box. Values:
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
   * Text box width (unit: pixels). The default value is 0.
   * 
   * @example
   * 0
   */
  boxBorderWidth?: number;
  /**
   * @remarks
   * Text box color.
   * The calculation formula is `R + G × 256 + B × 65536`. Values of R (red), G (green), and B (blue): **0** to **255**.
   * 
   * @example
   * 0
   */
  boxColor?: number;
  /**
   * @remarks
   * Text color (RGB).
   * 
   * The calculation formula is `R + G × 256 + B × 65536`. Values of R (red), G (green), and B (blue): **0** to **255**.
   * 
   * @example
   * 0
   */
  fontColor?: number;
  /**
   * @remarks
   * Font size. Value range: **0** to **72**.
   * 
   * @example
   * 1
   */
  fontSize?: number;
  /**
   * @remarks
   * Font type. Values:
   * 
   * - **0** (default): NOTO_SERIF_CJKSC_REGULAR
   * - **1**: ALIBABA_PUHUITI_REGULAR
   * - **2**: ALIBABA_PUHUITI_BOLD
   * - **3**: ALIBABA_PUHUITI_Heavy
   * - **4**: ALIBABA_PUHUITI_LIGHT
   * - **5**: ALIBABA_PUHUITI_MEDIUM
   * 
   * @example
   * 0
   */
  fontType?: number;
  /**
   * @remarks
   * X coordinate, normalized percentage.
   * 
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @remarks
   * Y coordinate, normalized percentage.
   * 
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @remarks
   * Stacking order. 0 is the bottom layer, layer 1 is above layer 0, and so on.
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

export class UpdateMPUTaskRequestUserPanesImages extends $dara.Model {
  /**
   * @remarks
   * Image display. Values:
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
   * Pane height, normalized percentage.
   * 
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @remarks
   * HTTP or HTTPS address of the image.
   * 
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @remarks
   * Pane width, normalized percentage.
   * 
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @remarks
   * X coordinate, normalized percentage.
   * 
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @remarks
   * Y coordinate, normalized percentage.
   * 
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @remarks
   * Stacking order. 0 is the bottom layer, layer 1 is above layer 0, and so on.
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

export class UpdateMPUTaskRequestUserPanesTexts extends $dara.Model {
  /**
   * @remarks
   * Transparency of the text box and text. 0.0 indicates transparent, and 1.0 indicates completely opaque.
   * 
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @remarks
   * Text border color.
   * The calculation formula is `R + G × 256 + B × 65536`. Values of R (red), G (green), and B (blue): **0** to **255**.
   * 
   * @example
   * 0
   */
  borderColor?: number;
  /**
   * @remarks
   * Text border width (unit: pixels). The default value is 0.
   * 
   * @example
   * 1
   */
  borderWidth?: number;
  /**
   * @remarks
   * Whether to display a text box. Values:
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
   * Text box width (unit: pixels). The default value is 0.
   * 
   * @example
   * 0
   */
  boxBorderWidth?: number;
  /**
   * @remarks
   * Text box color.
   * The calculation formula is `R + G × 256 + B × 65536`. Values of R (red), G (green), and B (blue): **0** to **255**.
   * 
   * @example
   * 0
   */
  boxColor?: number;
  /**
   * @remarks
   * Text color (RGB).
   * 
   * The calculation formula is `R + G × 256 + B × 65536`. Values of R (red), G (green), and B (blue): **0** to **255**.
   * 
   * @example
   * 0
   */
  fontColor?: number;
  /**
   * @remarks
   * Font size. Value range: **0** to **72**.
   * 
   * @example
   * 1
   */
  fontSize?: number;
  /**
   * @remarks
   * Font type. Values:
   * 
   * - **0** (default): NOTO_SERIF_CJKSC_REGULAR
   * - **1**: ALIBABA_PUHUITI_REGULAR
   * - **2**: ALIBABA_PUHUITI_BOLD
   * - **3**: ALIBABA_PUHUITI_Heavy
   * - **4**: ALIBABA_PUHUITI_LIGHT
   * - **5**: ALIBABA_PUHUITI_MEDIUM
   * 
   * @example
   * 0
   */
  fontType?: number;
  /**
   * @remarks
   * Text content.
   * 
   * @example
   * text
   */
  text?: string;
  /**
   * @remarks
   * X coordinate, normalized percentage.
   * 
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @remarks
   * Y coordinate, normalized percentage.
   * 
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @remarks
   * Stacking order. 0 is the bottom layer, layer 1 is above layer 0, and so on.
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

export class UpdateMPUTaskRequestUserPanes extends $dara.Model {
  /**
   * @remarks
   * The list of image pane positions for the current layout.
   */
  images?: UpdateMPUTaskRequestUserPanesImages[];
  /**
   * @remarks
   * Pane ID. Value range: **0** to **15**.
   * 
   * @example
   * 2
   */
  paneId?: number;
  /**
   * @remarks
   * Portrait segmentation type. Values:
   * 
   * - **0**: no portrait segmentation (default).
   * 
   * - **1**: portrait segmentation. Only effective after the enhancement parameter (portrait segmentation feature) is enabled.
   * 
   * @example
   * 0
   */
  segmentType?: number;
  /**
   * @remarks
   * User video input corresponding to the layout. Values:
   * 
   * - **camera**: camera stream.
   * 
   * - **shareScreen**: shared screen stream.
   * 
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @remarks
   * The list of text pane positions for the current layout.
   */
  texts?: UpdateMPUTaskRequestUserPanesTexts[];
  /**
   * @remarks
   * The user ID corresponding to the layout pane. Values: **1** to **16**.
   * 
   * @example
   * TestUserID
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
      images: { 'type': 'array', 'itemType': UpdateMPUTaskRequestUserPanesImages },
      paneId: 'number',
      segmentType: 'number',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': UpdateMPUTaskRequestUserPanesTexts },
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

export class UpdateMPUTaskRequestWatermarks extends $dara.Model {
  /**
   * @remarks
   * Transparency. 0.0 indicates transparent, and 1.0 indicates completely opaque.
   * 
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @remarks
   * Image display. Values:
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
   * Pane height, normalized percentage.
   * 
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @remarks
   * HTTP or HTTPS address of the image.
   * 
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @remarks
   * Pane width, normalized percentage.
   * 
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @remarks
   * X coordinate, normalized percentage.
   * 
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @remarks
   * Y coordinate, normalized percentage.
   * 
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @remarks
   * Stacking order. 0 is the bottom layer, layer 1 is above layer 0, and so on.
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

export class UpdateMPUTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Application ID. Only a single ID can be passed.
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
   * Background color RGB. The default is **0** (black).
   * 
   * The calculation formula is `R + G × 256 + B × 65536`. Values of R (red), G (green), and B (blue): **0** to **255**.
   * 
   * @example
   * 0
   */
  backgroundColor?: number;
  /**
   * @remarks
   * The list of canvas background image pane positions.
   */
  backgrounds?: UpdateMPUTaskRequestBackgrounds[];
  /**
   * @remarks
   * Clock widget.
   */
  clockWidgets?: UpdateMPUTaskRequestClockWidgets[];
  /**
   * @remarks
   * Video cropping mode. Values:
   * 
   * 
   * - **1**: crop while maintaining ratio.
   * 
   * - **2** (default): keep margins while maintaining ratio.
   * 
   * @example
   * 1
   */
  cropMode?: number;
  /**
   * @remarks
   * Layout ID data.
   */
  layoutIds?: number[];
  /**
   * @remarks
   * Encoding option. See the MediaEncode enumeration values below.
   * 
   * @example
   * 2
   */
  mediaEncode?: number;
  /**
   * @remarks
   * Stream mixing mode. Values:
   * 
   * - **0**: single-stream relay. No stream mixing or transcoding. Only the original single stream is relayed. No need to configure stream mixing and transcoding parameters.
   * - **1**: stream mixing and transcoding (default). Supports stream mixing and transcoding output.
   * 
   * > - Valid parameters in single-stream relay mode: **StreamType**, **SourceType**.
   * - Valid parameters in stream mixing and transcoding mode: **MediaEncode**, **LayoutIds**, **BackgroundColor**, **SubSpecUsers**, **CropMode**, **UserPanes**, **Backgrounds**, **Watermarks**.
   * 
   * @example
   * 0
   */
  mixMode?: number;
  ownerId?: number;
  /**
   * @remarks
   * User video input stream in single-stream relay mode. Values:
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
   * Audio stream relayed in single-stream relay mode. Values:
   * 
   * - **0** (default): relay the original stream.
   * - **1**: relay only the audio stream.
   * - **2**: relay only the video stream.
   * 
   * @example
   * 0
   */
  streamType?: number;
  /**
   * @remarks
   * Specifies the users in the room whose audio streams are subscribed to.
   */
  subSpecAudioUsers?: string[];
  /**
   * @remarks
   * Specifies the users in the room whose camera video streams are subscribed to.
   */
  subSpecCameraUsers?: string[];
  /**
   * @remarks
   * Specifies the users in the room whose shared video streams are subscribed to.
   */
  subSpecShareScreenUsers?: string[];
  /**
   * @remarks
   * The list of users subscribed to by this task.
   */
  subSpecUsers?: string[];
  /**
   * @remarks
   * Task ID. Only a single ID can be passed. It is consistent with the input parameter TaskId in [StartMpuTask](https://help.aliyun.com/document_detail/93183.html).
   * 
   * This parameter is required.
   * 
   * @example
   * testId
   */
  taskId?: string;
  /**
   * @remarks
   * Specifies the users in the room whose audio streams are not subscribed to.
   */
  unsubSpecAudioUsers?: string[];
  /**
   * @remarks
   * Specifies the users in the room whose camera video streams are not subscribed to.
   */
  unsubSpecCameraUsers?: string[];
  /**
   * @remarks
   * Specifies the users in the room whose shared video streams are not subscribed to.
   */
  unsubSpecShareScreenUsers?: string[];
  /**
   * @remarks
   * Layout parameters.
   */
  userPanes?: UpdateMPUTaskRequestUserPanes[];
  /**
   * @remarks
   * The list of watermark image pane positions.
   */
  watermarks?: UpdateMPUTaskRequestWatermarks[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgroundColor: 'BackgroundColor',
      backgrounds: 'Backgrounds',
      clockWidgets: 'ClockWidgets',
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
      unsubSpecAudioUsers: 'UnsubSpecAudioUsers',
      unsubSpecCameraUsers: 'UnsubSpecCameraUsers',
      unsubSpecShareScreenUsers: 'UnsubSpecShareScreenUsers',
      userPanes: 'UserPanes',
      watermarks: 'Watermarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgroundColor: 'number',
      backgrounds: { 'type': 'array', 'itemType': UpdateMPUTaskRequestBackgrounds },
      clockWidgets: { 'type': 'array', 'itemType': UpdateMPUTaskRequestClockWidgets },
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
      unsubSpecAudioUsers: { 'type': 'array', 'itemType': 'string' },
      unsubSpecCameraUsers: { 'type': 'array', 'itemType': 'string' },
      unsubSpecShareScreenUsers: { 'type': 'array', 'itemType': 'string' },
      userPanes: { 'type': 'array', 'itemType': UpdateMPUTaskRequestUserPanes },
      watermarks: { 'type': 'array', 'itemType': UpdateMPUTaskRequestWatermarks },
    };
  }

  validate() {
    if(Array.isArray(this.backgrounds)) {
      $dara.Model.validateArray(this.backgrounds);
    }
    if(Array.isArray(this.clockWidgets)) {
      $dara.Model.validateArray(this.clockWidgets);
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

