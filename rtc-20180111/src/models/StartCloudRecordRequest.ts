// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartCloudRecordRequestBackgrounds extends $dara.Model {
  /**
   * @remarks
   * The transparency of the image.
   * 
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * The crop mode of the image. Valid values:
   * - **1**: Crops the image while maintaining the aspect ratio.
   * - **2**: Maintains the aspect ratio and adds borders.
   * - **3**: Stretches the image to fill the pane.
   * 
   * @example
   * 2
   */
  backgroundCropMode?: number;
  /**
   * @remarks
   * The height.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @remarks
   * The z-axis layer.
   * 
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * The URL of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123.jpg
   */
  url?: string;
  /**
   * @remarks
   * The width.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * The x-coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * The y-coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      backgroundCropMode: 'BackgroundCropMode',
      height: 'Height',
      layer: 'Layer',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      backgroundCropMode: 'number',
      height: 'number',
      layer: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestBgColor extends $dara.Model {
  /**
   * @remarks
   * The blue component.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * The green component.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * The red component.
   * 
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestClockWidgetsBoxColor extends $dara.Model {
  /**
   * @remarks
   * The blue component.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * The green component.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * The red component.
   * 
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestClockWidgetsFontColor extends $dara.Model {
  /**
   * @remarks
   * The blue component.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * The green component.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * The red component.
   * 
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestClockWidgets extends $dara.Model {
  /**
   * @remarks
   * The transparency of the image.
   * 
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * The transparency of the text box.
   * 
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @remarks
   * The border width of the text box.
   * 
   * @example
   * 5
   */
  boxBorderw?: number;
  /**
   * @remarks
   * The color of the text box.
   */
  boxColor?: StartCloudRecordRequestClockWidgetsBoxColor;
  /**
   * @remarks
   * The font. Valid values:
   * - **0**: Alibaba PuHuiTi Regular
   * - **1**: Alibaba PuHuiTi Light
   * - **2**: Alibaba PuHuiTi Medium
   * - **3**: Alibaba PuHuiTi Bold
   * - **4**: Alibaba PuHuiTi Heavy
   * - **5**: Alimama ShuHeiTi
   * - **6**: DingTalk JinBuTi
   * - **7**: Alimama DaoLiTi
   * - **8**: Alimama DongFangDaKai
   * - **9**: Alimama FangYuanTi
   * 
   * @example
   * 0
   */
  font?: number;
  /**
   * @remarks
   * The font color.
   */
  fontColor?: StartCloudRecordRequestClockWidgetsFontColor;
  /**
   * @remarks
   * The font size of the clock.
   * 
   * @example
   * 30
   */
  fontSize?: number;
  /**
   * @remarks
   * Specifies whether to display a text box.
   */
  hasBox?: boolean;
  /**
   * @remarks
   * The z-axis layer.
   * 
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * The x-coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * The y-coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * 8
   */
  zone?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      x: 'X',
      y: 'Y',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: StartCloudRecordRequestClockWidgetsBoxColor,
      font: 'number',
      fontColor: StartCloudRecordRequestClockWidgetsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      x: 'number',
      y: 'number',
      zone: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestImages extends $dara.Model {
  /**
   * @remarks
   * The transparency of the image.
   * 
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * The height.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @remarks
   * The crop mode of the image. Valid values:
   * - **1**: Crops the image while maintaining the aspect ratio.
   * - **2**: Maintains the aspect ratio and adds borders.
   * - **3**: Stretches the image to fill the pane.
   * 
   * @example
   * 2
   */
  imageCropMode?: number;
  /**
   * @remarks
   * The z-axis layer.
   * 
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * The image URL. The image content cannot be updated during stream ingest.
   * 
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123xxx.jpg
   */
  url?: string;
  /**
   * @remarks
   * The width.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * The x-coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * The y-coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.3
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      imageCropMode: 'ImageCropMode',
      layer: 'Layer',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      imageCropMode: 'number',
      layer: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestLayoutSpecifiedUsers extends $dara.Model {
  /**
   * @remarks
   * The list of specified user IDs.
   * 
   * This parameter is required.
   */
  ids?: string[];
  /**
   * @remarks
   * The type of the user list. Valid values:
   * - black: Blacklist.
   * - white: Whitelist.
   * 
   * This parameter is required.
   * 
   * @example
   * white
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestPanesBackgrounds extends $dara.Model {
  /**
   * @remarks
   * The transparency of the image.
   * 
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * The condition for displaying the background image. Valid values:
   * - streamOnly: The background image is displayed when the current user has a video stream. This is the default value.
   * - backup: The background image is displayed when the current user does not have a video stream.
   * - always: The background image is always displayed.
   * 
   * @example
   * backup
   */
  display?: string;
  /**
   * @remarks
   * The height.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @remarks
   * The z-axis layer.
   * 
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * The crop mode of the image. Valid values:
   * - **1**: Crops the image while maintaining the aspect ratio.
   * - **2**: Maintains the aspect ratio and adds borders.
   * - **3**: Stretches the image to fill the pane.
   * 
   * @example
   * 2
   */
  paneBackgroundCropMode?: number;
  /**
   * @remarks
   * The URL of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123xx.jpg
   */
  url?: string;
  /**
   * @remarks
   * The width.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.3
   */
  width?: number;
  /**
   * @remarks
   * The x-coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * The y-coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      display: 'Display',
      height: 'Height',
      layer: 'Layer',
      paneBackgroundCropMode: 'PaneBackgroundCropMode',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      display: 'string',
      height: 'number',
      layer: 'number',
      paneBackgroundCropMode: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestPanesImages extends $dara.Model {
  /**
   * @remarks
   * The transparency of the image.
   * 
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * The condition for displaying the watermark. Valid values:
   * - streamOnly: The watermark is displayed when the current user has a video stream. This is the default value.
   * - backup: The watermark is displayed when the current user does not have a video stream.
   * - always: The watermark is always displayed.
   * 
   * @example
   * backup
   */
  display?: string;
  /**
   * @remarks
   * The height.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @remarks
   * The z-axis layer.
   * 
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * The crop mode of the image. Valid values:
   * - **1**: Crops the image while maintaining the aspect ratio.
   * - **2**: Maintains the aspect ratio and adds borders.
   * - **3**: Stretches the image to fill the pane.
   * 
   * @example
   * 2
   */
  paneImageCropMode?: number;
  /**
   * @remarks
   * The URL of the image. The image content cannot be updated during stream ingest.
   * 
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123xx.jpg
   */
  url?: string;
  /**
   * @remarks
   * The width.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * The x-coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * The y-coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      display: 'Display',
      height: 'Height',
      layer: 'Layer',
      paneImageCropMode: 'PaneImageCropMode',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      display: 'string',
      height: 'number',
      layer: 'number',
      paneImageCropMode: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestPanesTextsBoxColor extends $dara.Model {
  /**
   * @remarks
   * The blue component.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * The green component.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * The red component.
   * 
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestPanesTextsFontColor extends $dara.Model {
  /**
   * @remarks
   * The blue component.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * The green component.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * The red component.
   * 
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestPanesTexts extends $dara.Model {
  /**
   * @remarks
   * The transparency of the watermark.
   * 
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * The transparency of the text box.
   * 
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @remarks
   * The border width of the text box.
   * 
   * @example
   * 5
   */
  boxBorderw?: number;
  /**
   * @remarks
   * The color of the text box.
   */
  boxColor?: StartCloudRecordRequestPanesTextsBoxColor;
  /**
   * @remarks
   * The condition for displaying the watermark. Valid values:
   * - streamOnly: The watermark is displayed when the current user has a video stream. This is the default value.
   * - backup: The watermark is displayed when the current user does not have a video stream.
   * - always: The watermark is always displayed.
   * 
   * @example
   * backup
   */
  display?: string;
  /**
   * @remarks
   * The font. Valid values:
   * - **0**: Alibaba PuHuiTi Regular
   * - **1**: Alibaba PuHuiTi Light
   * - **2**: Alibaba PuHuiTi Medium
   * - **3**: Alibaba PuHuiTi Bold
   * - **4**: Alibaba PuHuiTi Heavy
   * - **5**: Alimama ShuHeiTi
   * - **6**: DingTalk JinBuTi
   * - **7**: Alimama DaoLiTi
   * - **8**: Alimama DongFangDaKai
   * - **9**: Alimama FangYuanTi
   * 
   * @example
   * 0
   */
  font?: number;
  /**
   * @remarks
   * The font color.
   */
  fontColor?: StartCloudRecordRequestPanesTextsFontColor;
  /**
   * @remarks
   * The font size.
   * 
   * @example
   * 36
   */
  fontSize?: number;
  /**
   * @remarks
   * Specifies whether to display a text box.
   */
  hasBox?: boolean;
  /**
   * @remarks
   * The z-axis layer.
   * 
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * The content of the watermark.
   * 
   * This parameter is required.
   * 
   * @example
   * Text watermark
   */
  texture?: string;
  /**
   * @remarks
   * The x-coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * The y-coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      display: 'Display',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: StartCloudRecordRequestPanesTextsBoxColor,
      display: 'string',
      font: 'number',
      fontColor: StartCloudRecordRequestPanesTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestPanesWhiteboard extends $dara.Model {
  /**
   * @remarks
   * The ID of the whiteboard. Default value: default.
   * 
   * @example
   * default
   */
  whiteboardId?: string;
  static names(): { [key: string]: string } {
    return {
      whiteboardId: 'WhiteboardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteboardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestPanes extends $dara.Model {
  /**
   * @remarks
   * The local background images for the pane.
   */
  backgrounds?: StartCloudRecordRequestPanesBackgrounds[];
  /**
   * @remarks
   * The local image watermarks for the pane.
   */
  images?: StartCloudRecordRequestPanesImages[];
  /**
   * @remarks
   * The crop mode of the image. Valid values:
   * - **1**: Crops the image while maintaining the aspect ratio.
   * - **2**: Maintains the aspect ratio and adds borders.
   * - **3**: Stretches the image to fill the pane.
   * 
   * @example
   * 3
   */
  paneCropMode?: number;
  /**
   * @remarks
   * The ID of the pane. The value starts from 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @remarks
   * Specifies whether to reserve the pane as a placeholder for users who have not joined the meeting.
   * Default value: true. A value of true indicates that if the specific user or wildcard user specified for the pane is offline, the pane is forcibly reserved as a placeholder. A value of false indicates that if the specific user or wildcard user specified for the pane is offline, video streams are displayed based on the automatic fill order.
   */
  reservePaneForOfflineUser?: boolean;
  /**
   * @remarks
   * The media source of the pane. You can specify a user ID. To specify a specific user type, you can use wildcard configurations. The following wildcard types are supported:
   * - **$ActiveSpeaker**: the current speaker in the channel.
   * - **$ScreenShare**: the user who is sharing the screen. If multiple users are sharing their screens in the channel, the panes are filled in chronological order.
   * 
   * @example
   * 22
   */
  source?: string;
  /**
   * @remarks
   * The media type of the pane. Valid values:
   * - **video**: The user camera or screen sharing stream. This is the default value.
   * - **camera**: The camera stream.
   * - **screen**: The screen sharing stream.
   * - **whiteboard**: The whiteboard.
   * 
   * @example
   * video
   */
  sourceType?: string;
  /**
   * @remarks
   * The local text watermarks for the pane.
   */
  texts?: StartCloudRecordRequestPanesTexts[];
  /**
   * @remarks
   * The fill order when SourceType is set to video. Valid values:
   * - screenFirst: Screen sharing takes precedence. This is the default value.
   * - cameraFirst: The camera takes precedence.
   * 
   * @example
   * cameraFirst
   */
  videoOrder?: string;
  /**
   * @remarks
   * The whiteboard configurations.
   */
  whiteboard?: StartCloudRecordRequestPanesWhiteboard;
  static names(): { [key: string]: string } {
    return {
      backgrounds: 'Backgrounds',
      images: 'Images',
      paneCropMode: 'PaneCropMode',
      paneId: 'PaneId',
      reservePaneForOfflineUser: 'ReservePaneForOfflineUser',
      source: 'Source',
      sourceType: 'SourceType',
      texts: 'Texts',
      videoOrder: 'VideoOrder',
      whiteboard: 'Whiteboard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgrounds: { 'type': 'array', 'itemType': StartCloudRecordRequestPanesBackgrounds },
      images: { 'type': 'array', 'itemType': StartCloudRecordRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'number',
      reservePaneForOfflineUser: 'boolean',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': StartCloudRecordRequestPanesTexts },
      videoOrder: 'string',
      whiteboard: StartCloudRecordRequestPanesWhiteboard,
    };
  }

  validate() {
    if(Array.isArray(this.backgrounds)) {
      $dara.Model.validateArray(this.backgrounds);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    if(this.whiteboard && typeof (this.whiteboard as any).validate === 'function') {
      (this.whiteboard as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestRegionColor extends $dara.Model {
  /**
   * @remarks
   * The blue component.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * The green component.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * The red component.
   * 
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestSingleStreamingRecordSpecifiedStreams extends $dara.Model {
  /**
   * @remarks
   * The list of user IDs.
   * 
   * This parameter is required.
   */
  ids?: string[];
  /**
   * @remarks
   * The type of the stream. Valid values:
   * - mic: Audio stream.
   * 
   * This parameter is required.
   * 
   * @example
   * mic
   */
  streamType?: string;
  /**
   * @remarks
   * The blacklists and whitelists type for single-stream recording streams. Valid values:
   * - white: Whitelist. Indicates that the stream is recorded.
   * 
   * @example
   * white
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      streamType: 'StreamType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'string' },
      streamType: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestSingleStreamingRecordTranscodingParametersAudio extends $dara.Model {
  /**
   * @remarks
   * The bitrate, in kbps.
   * 
   * @example
   * 128
   */
  bitrate?: number;
  /**
   * @remarks
   * The audio codec format. Valid values:
   * - mp3
   * - aac
   * 
   * @example
   * mp3
   */
  codec?: string;
  /**
   * @remarks
   * The sample rate. Valid values:
   * - 8000
   * - 16000
   * - 32000
   * - 44100
   * - 48000
   * 
   * @example
   * 48000
   */
  sampleRate?: number;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      codec: 'Codec',
      sampleRate: 'SampleRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      codec: 'string',
      sampleRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestSingleStreamingRecordTranscodingParameters extends $dara.Model {
  /**
   * @remarks
   * The audio encoding settings.
   */
  audio?: StartCloudRecordRequestSingleStreamingRecordTranscodingParametersAudio;
  /**
   * @remarks
   * The container format for the recording file. Valid values:
   * - mp3
   * - aac
   * - mp4
   * - ts
   * 
   * @example
   * aac
   */
  container?: string;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: StartCloudRecordRequestSingleStreamingRecordTranscodingParametersAudio,
      container: 'string',
    };
  }

  validate() {
    if(this.audio && typeof (this.audio as any).validate === 'function') {
      (this.audio as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestSingleStreamingRecord extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to merge the audio file into the video file. Default value: false.
   */
  avMerge?: boolean;
  /**
   * @remarks
   * The streams specified for single-stream recording.
   * 
   * This parameter is required.
   */
  specifiedStreams?: StartCloudRecordRequestSingleStreamingRecordSpecifiedStreams[];
  /**
   * @remarks
   * The transcoding parameters. By default, single-stream recording writes files in MP3 format. Specify this parameter if transcoding is required.
   */
  transcodingParameters?: StartCloudRecordRequestSingleStreamingRecordTranscodingParameters;
  static names(): { [key: string]: string } {
    return {
      avMerge: 'AvMerge',
      specifiedStreams: 'SpecifiedStreams',
      transcodingParameters: 'TranscodingParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avMerge: 'boolean',
      specifiedStreams: { 'type': 'array', 'itemType': StartCloudRecordRequestSingleStreamingRecordSpecifiedStreams },
      transcodingParameters: StartCloudRecordRequestSingleStreamingRecordTranscodingParameters,
    };
  }

  validate() {
    if(Array.isArray(this.specifiedStreams)) {
      $dara.Model.validateArray(this.specifiedStreams);
    }
    if(this.transcodingParameters && typeof (this.transcodingParameters as any).validate === 'function') {
      (this.transcodingParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestStorageConfig extends $dara.Model {
  /**
   * @remarks
   * The AccessKey. Make sure that the RAM user associated with the AccessKey pair is granted the **write** permissions on the object storage service of the corresponding cloud provider. Otherwise, the result files fail to be written.
   * 
   * This parameter is required.
   * 
   * @example
   * LTAX***
   */
  accessKey?: string;
  /**
   * @remarks
   * The name of the bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * test-bucket-for-recording
   */
  bucket?: string;
  /**
   * @remarks
   * The private endpoint for Apsara Stack.
   * 
   * @example
   * https://aliyuns.dalian.oss.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The storage region.
   * 
   * | Region | Alibaba Cloud OSS |
   * |--------|------------|
   * | 0 | CN_Hangzhou |
   * | 1 | CN_Shanghai |
   * | 2 | CN_Qingdao |
   * | 3 | CN_Beijing |
   * | 4 | CN_Zhangjiakou |
   * | 5 | CN_Huhehaote |
   * | 6 | CN_Shenzhen |
   * | 7 | CN_Hongkong |
   * | 8 | US_West_1 |
   * | 9 | US_East_1 |
   * | 10 | AP_Southeast_1 |
   * | 11 | AP_Southeast_2 (Deprecated. Do not use.) |
   * | 12 | AP_Southeast_3 |
   * | 13 | AP_Southeast_5 |
   * | 14 | AP_Northeast_1 |
   * | 15 | AP_South_1 (Deprecated. Do not use.) |
   * | 16 | EU_Central_1 |
   * | 17 | EU_West_1 |
   * | 18 | EU_East_1(ME_East_1) |
   * | 19 | AP_Southeast_6 |
   * | 20 | CN_Heyuan |
   * | 21 | CN_Guangzhou |
   * | 22 | CN_Chengdu |
   * | 23 | CN_Nanjing |
   * | 24 | CN_Fuzhou |
   * | 25 | CN_Wulanchabu |
   * | 26 | CN_Northeast_2 |
   * | 27 | CN_Southeast_7 |
   * | 28 | CN_Wuhan_LR |
   * | 100 | oss-cn-hzjbp |
   * | 101 | oss-cn-shanghai-finance-1 |
   * | 102 | oss-cn-shenzhen-finance-1 |
   * | 103 | oss-cn-beijing-finance-1 |
   * | 104 | oss-cn-hzfinance |
   * | 105 | oss-cn-shanghai-finance-1-pub |
   * | 106 | oss-cn-szfinance |
   * | 107 | oss-cn-beijing-finance-1-pub |
   * 
   * | Region | Apsara Stack OSS |
   * |--------|------------|
   * | 0 | default |
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  region?: number;
  /**
   * @remarks
   * secretKey
   * 
   * This parameter is required.
   * 
   * @example
   * APb6qWYEzKtYxE***
   */
  secretKey?: string;
  /**
   * @remarks
   * The storage platform. Valid values:
   * 
   * | vendor | Object storage service | Remarks |
   * |--------|---------|---------|
   * | 1 | AliYun OSS | Alibaba Cloud |
   * | 2 | Apsara Stack OSS | Alibaba Cloud Apsara Stack |
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      region: 'Region',
      secretKey: 'SecretKey',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      bucket: 'string',
      endpoint: 'string',
      region: 'number',
      secretKey: 'string',
      vendor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestTextsBoxColor extends $dara.Model {
  /**
   * @remarks
   * The blue component.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * The green component.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * The red component.
   * 
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestTextsFontColor extends $dara.Model {
  /**
   * @remarks
   * The blue component.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * The green component.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * The red component.
   * 
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestTexts extends $dara.Model {
  /**
   * @remarks
   * The transparency of the watermark.
   * 
   * @example
   * 0.1
   */
  alpha?: number;
  /**
   * @remarks
   * The transparency of the text box.
   * 
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @remarks
   * The border width of the text box.
   * 
   * @example
   * 5
   */
  boxBorderw?: number;
  /**
   * @remarks
   * The color of the text box.
   */
  boxColor?: StartCloudRecordRequestTextsBoxColor;
  /**
   * @remarks
   * The font. Valid values:
   * - **0**: Alibaba PuHuiTi Regular
   * - **1**: Alibaba PuHuiTi Light
   * - **2**: Alibaba PuHuiTi Medium
   * - **3**: Alibaba PuHuiTi Bold
   * - **4**: Alibaba PuHuiTi Heavy
   * - **5**: Alimama ShuHeiTi
   * - **6**: DingTalk JinBuTi
   * - **7**: Alimama DaoLiTi
   * - **8**: Alimama DongFangDaKai
   * - **9**: Alimama FangYuanTi
   * 
   * @example
   * 0
   */
  font?: number;
  /**
   * @remarks
   * The font color.
   */
  fontColor?: StartCloudRecordRequestTextsFontColor;
  /**
   * @remarks
   * The font size.
   * 
   * @example
   * 36
   */
  fontSize?: number;
  /**
   * @remarks
   * Specifies whether to display a text box.
   */
  hasBox?: boolean;
  /**
   * @remarks
   * The z-axis layer.
   * 
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * The content of the watermark.
   * 
   * This parameter is required.
   * 
   * @example
   * Text watermark
   */
  texture?: string;
  /**
   * @remarks
   * The x-coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * The y-coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: StartCloudRecordRequestTextsBoxColor,
      font: 'number',
      fontColor: StartCloudRecordRequestTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the annotation feature.
   * 
   * @example
   * disable
   */
  annotation?: string;
  /**
   * @remarks
   * The application ID. You can create and query the ID in the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * The local background images for the pane.
   */
  backgrounds?: StartCloudRecordRequestBackgrounds[];
  /**
   * @remarks
   * The global background color.
   */
  bgColor?: StartCloudRecordRequestBgColor;
  /**
   * @remarks
   * The ID of an existing channel. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * The global clock watermark.
   */
  clockWidgets?: StartCloudRecordRequestClockWidgets[];
  /**
   * @remarks
   * The crop mode. Valid values:
   * - **1**: Crops the video while keeping the aspect ratio.
   * - **2**: Keeps the aspect ratio and adds padding (default).
   * - **3**: Stretches the video to fill the pane.
   * 
   * @example
   * 2
   */
  cropMode?: number;
  /**
   * @remarks
   * The global image watermarks.
   * 
   * @example
   * disable
   */
  images?: StartCloudRecordRequestImages[];
  /**
   * @remarks
   * The specified user list for layout generation, which includes Blacklist/Whitelist.
   * 
   * Whitelist: specifies the users whose video streams are subscribed to in the room.
   * * After the settings are applied, padding is automatically performed in sequence based on this list.
   * * When switching between multiple layouts in a template, only users in the whitelist are calculated.
   * 
   * Blacklist: specifies the users whose video streams are not subscribed to in the room.
   * * When switching between multiple layouts in a template, only users not in the blacklist are calculated.
   */
  layoutSpecifiedUsers?: StartCloudRecordRequestLayoutSpecifiedUsers;
  /**
   * @remarks
   * The pane settings. You can configure up to 16 panes.
   * 
   * @example
   * eo85****
   */
  panes?: StartCloudRecordRequestPanes[];
  /**
   * @remarks
   * The recording mode. Valid values:
   * - 0: Mixed-stream recording. This is the default value.
   * - 1: Single-stream recording. Single-stream recording does not support updates.
   * 
   * @example
   * 1
   */
  recordMode?: number;
  /**
   * @remarks
   * The global frame background color.
   */
  regionColor?: StartCloudRecordRequestRegionColor;
  /**
   * @remarks
   * Specifies whether to reserve a pane for a user who does not publish a camera stream. Default value: true. A value of true indicates that a pane is reserved. A value of false indicates that no pane is reserved.
   */
  reservePaneForNoCameraUser?: boolean;
  /**
   * @remarks
   * Specifies whether to display the default background image of the pane when the user is muted. Valid values:
   * - true: Displays the default background image (default).
   * - false: Does not display the default background image. The custom background image of the pane is still displayed.
   */
  showDefaultBackgroundOnMute?: boolean;
  /**
   * @remarks
   * The parameters for single-stream recording.
   */
  singleStreamingRecord?: StartCloudRecordRequestSingleStreamingRecord;
  /**
   * @remarks
   * Specifies whether to allow starting the task when the channel does not exist. Valid values:
   * - true: Yes.
   * - false: No (default).
   */
  startWithoutChannel?: boolean;
  /**
   * @remarks
   * The wait time for the task when the channel is not started, in seconds. This parameter takes effect only when the StartWithoutChannel parameter is set to true. Valid values: 30 to 120.
   * 
   * @example
   * 30
   */
  startWithoutChannelWaitTime?: number;
  /**
   * @remarks
   * The storage configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * testid
   */
  storageConfig?: StartCloudRecordRequestStorageConfig;
  /**
   * @remarks
   * Specifies whether to subscribe to high-resolution streams. Valid values:
   * - false: Subscribes to streams of different resolutions based on the pane area (default).
   * - true: Uses the highest resolution stream published by the client as padding.
   */
  subHighResolutionStream?: boolean;
  /**
   * @remarks
   * The task ID of the cloud recording task. Only a single ID is supported. The ID can contain letters, digits, underscores (_), and hyphens (-), and can be up to 55 bytes in length.
   * 
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 567
   */
  templateId?: string;
  /**
   * @remarks
   * The global text watermarks.
   */
  texts?: StartCloudRecordRequestTexts[];
  static names(): { [key: string]: string } {
    return {
      annotation: 'Annotation',
      appId: 'AppId',
      backgrounds: 'Backgrounds',
      bgColor: 'BgColor',
      channelId: 'ChannelId',
      clockWidgets: 'ClockWidgets',
      cropMode: 'CropMode',
      images: 'Images',
      layoutSpecifiedUsers: 'LayoutSpecifiedUsers',
      panes: 'Panes',
      recordMode: 'RecordMode',
      regionColor: 'RegionColor',
      reservePaneForNoCameraUser: 'ReservePaneForNoCameraUser',
      showDefaultBackgroundOnMute: 'ShowDefaultBackgroundOnMute',
      singleStreamingRecord: 'SingleStreamingRecord',
      startWithoutChannel: 'StartWithoutChannel',
      startWithoutChannelWaitTime: 'StartWithoutChannelWaitTime',
      storageConfig: 'StorageConfig',
      subHighResolutionStream: 'SubHighResolutionStream',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotation: 'string',
      appId: 'string',
      backgrounds: { 'type': 'array', 'itemType': StartCloudRecordRequestBackgrounds },
      bgColor: StartCloudRecordRequestBgColor,
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': StartCloudRecordRequestClockWidgets },
      cropMode: 'number',
      images: { 'type': 'array', 'itemType': StartCloudRecordRequestImages },
      layoutSpecifiedUsers: StartCloudRecordRequestLayoutSpecifiedUsers,
      panes: { 'type': 'array', 'itemType': StartCloudRecordRequestPanes },
      recordMode: 'number',
      regionColor: StartCloudRecordRequestRegionColor,
      reservePaneForNoCameraUser: 'boolean',
      showDefaultBackgroundOnMute: 'boolean',
      singleStreamingRecord: StartCloudRecordRequestSingleStreamingRecord,
      startWithoutChannel: 'boolean',
      startWithoutChannelWaitTime: 'number',
      storageConfig: StartCloudRecordRequestStorageConfig,
      subHighResolutionStream: 'boolean',
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': StartCloudRecordRequestTexts },
    };
  }

  validate() {
    if(Array.isArray(this.backgrounds)) {
      $dara.Model.validateArray(this.backgrounds);
    }
    if(this.bgColor && typeof (this.bgColor as any).validate === 'function') {
      (this.bgColor as any).validate();
    }
    if(Array.isArray(this.clockWidgets)) {
      $dara.Model.validateArray(this.clockWidgets);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(this.layoutSpecifiedUsers && typeof (this.layoutSpecifiedUsers as any).validate === 'function') {
      (this.layoutSpecifiedUsers as any).validate();
    }
    if(Array.isArray(this.panes)) {
      $dara.Model.validateArray(this.panes);
    }
    if(this.regionColor && typeof (this.regionColor as any).validate === 'function') {
      (this.regionColor as any).validate();
    }
    if(this.singleStreamingRecord && typeof (this.singleStreamingRecord as any).validate === 'function') {
      (this.singleStreamingRecord as any).validate();
    }
    if(this.storageConfig && typeof (this.storageConfig as any).validate === 'function') {
      (this.storageConfig as any).validate();
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

