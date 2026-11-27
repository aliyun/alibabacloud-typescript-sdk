// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStreamingOutRequestBackgrounds extends $dara.Model {
  /**
   * @remarks
   * The transparency.
   * 
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * The crop mode. Valid values:
   * - **1**: Crops the image while maintaining the aspect ratio.
   * - **2**: Adds padding to the image while maintaining the aspect ratio.
   * - **3**: Stretches the image to fill the area.
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
   * The Z-axis layer.
   * 
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * The image URL.
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
   * The X-coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * The Y-coordinate.
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

export class UpdateStreamingOutRequestBgColor extends $dara.Model {
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

export class UpdateStreamingOutRequestClockWidgetsBoxColor extends $dara.Model {
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

export class UpdateStreamingOutRequestClockWidgetsFontColor extends $dara.Model {
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

export class UpdateStreamingOutRequestClockWidgets extends $dara.Model {
  /**
   * @remarks
   * The transparency.
   * 
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * The transparency of the rectangle.
   * 
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @remarks
   * The border width of the rectangle.
   * 
   * @example
   * 5
   */
  boxBorderw?: number;
  /**
   * @remarks
   * The color of the rectangle.
   */
  boxColor?: UpdateStreamingOutRequestClockWidgetsBoxColor;
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
  fontColor?: UpdateStreamingOutRequestClockWidgetsFontColor;
  /**
   * @remarks
   * The clock font size.
   * 
   * @example
   * 30
   */
  fontSize?: number;
  /**
   * @remarks
   * Specifies whether to display the rectangle.
   */
  hasBox?: boolean;
  /**
   * @remarks
   * The Z-axis layer.
   * 
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * The X-coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * The Y-coordinate.
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
      boxColor: UpdateStreamingOutRequestClockWidgetsBoxColor,
      font: 'number',
      fontColor: UpdateStreamingOutRequestClockWidgetsFontColor,
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

export class UpdateStreamingOutRequestImages extends $dara.Model {
  /**
   * @remarks
   * The transparency.
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
   * The crop mode. Valid values:
   * - **1**: Crops the image while maintaining the aspect ratio.
   * - **2**: Adds padding to the image while maintaining the aspect ratio.
   * - **3**: Stretches the image to fill the area.
   * 
   * @example
   * 2
   */
  imageCropMode?: number;
  /**
   * @remarks
   * The Z-axis layer.
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
   * The X-coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * The Y-coordinate.
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

export class UpdateStreamingOutRequestLayoutSpecifiedUsers extends $dara.Model {
  /**
   * @remarks
   * The list of specified user IDs.
   * 
   * This parameter is required.
   */
  ids?: string[];
  /**
   * @remarks
   * The user list type. Valid values: black: Blacklist. white: Whitelist.
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

export class UpdateStreamingOutRequestPanesBackgrounds extends $dara.Model {
  /**
   * @remarks
   * The transparency.
   * 
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * The condition for displaying the watermark. Valid values:
   * - streamOnly: Displayed when the current user has a video stream. This is the default value.
   * - backup: Displayed when the current user does not have a video stream.
   * - always: Always displayed.
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
   * 0.79
   */
  height?: number;
  /**
   * @remarks
   * The Z-axis layer.
   * 
   * @example
   * 1
   */
  layer?: number;
  /**
   * @remarks
   * The crop mode. Valid values:
   * - **1**: Crops the image while maintaining the aspect ratio.
   * - **2**: Adds padding to the image while maintaining the aspect ratio.
   * - **3**: Stretches the image to fill the area.
   * 
   * @example
   * 1
   */
  paneBackgroundCropMode?: number;
  /**
   * @remarks
   * The image URL.
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
   * The X-coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * The Y-coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.95
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

export class UpdateStreamingOutRequestPanesImages extends $dara.Model {
  /**
   * @remarks
   * The transparency.
   * 
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * The condition for displaying the watermark. Valid values:
   * - streamOnly: Displayed when the current user has a video stream. This is the default value.
   * - backup: Displayed when the current user does not have a video stream.
   * - always: Always displayed.
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
   * The Z-axis layer.
   * 
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * The crop mode. Valid values:
   * - **1**: Crops the image while maintaining the aspect ratio.
   * - **2**: Adds padding to the image while maintaining the aspect ratio.
   * - **3**: Stretches the image to fill the area.
   * 
   * @example
   * 2
   */
  paneImageCropMode?: number;
  /**
   * @remarks
   * The image URL. The image content cannot be updated during stream ingest.
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
   * The X-coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * The Y-coordinate.
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

export class UpdateStreamingOutRequestPanesTextsBoxColor extends $dara.Model {
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

export class UpdateStreamingOutRequestPanesTextsFontColor extends $dara.Model {
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

export class UpdateStreamingOutRequestPanesTexts extends $dara.Model {
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
   * The transparency of the rectangle.
   * 
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @remarks
   * The border width of the rectangle.
   * 
   * @example
   * 5
   */
  boxBorderw?: number;
  /**
   * @remarks
   * The color of the rectangle.
   */
  boxColor?: UpdateStreamingOutRequestPanesTextsBoxColor;
  /**
   * @remarks
   * The condition for displaying the watermark. Valid values:
   * - streamOnly: Displayed when the current user has a video stream. This is the default value.
   * - backup: Displayed when the current user does not have a video stream.
   * - always: Always displayed.
   * 
   * @example
   * always
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
  fontColor?: UpdateStreamingOutRequestPanesTextsFontColor;
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
   * Specifies whether to display the rectangle.
   */
  hasBox?: boolean;
  /**
   * @remarks
   * The Z-axis layer.
   * 
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * The watermark content.
   * 
   * This parameter is required.
   * 
   * @example
   * Text watermark
   */
  texture?: string;
  /**
   * @remarks
   * The X-coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * The Y-coordinate.
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
      boxColor: UpdateStreamingOutRequestPanesTextsBoxColor,
      display: 'string',
      font: 'number',
      fontColor: UpdateStreamingOutRequestPanesTextsFontColor,
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

export class UpdateStreamingOutRequestPanesWhiteboard extends $dara.Model {
  /**
   * @remarks
   * The whiteboard ID. Default value: default.
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

export class UpdateStreamingOutRequestPanes extends $dara.Model {
  /**
   * @remarks
   * The background image of the pane.
   */
  backgrounds?: UpdateStreamingOutRequestPanesBackgrounds[];
  /**
   * @remarks
   * The local image watermarks for the pane.
   */
  images?: UpdateStreamingOutRequestPanesImages[];
  /**
   * @remarks
   * The crop mode. Valid values:
   * - **1**: Crops the image while maintaining the aspect ratio.
   * - **2**: Adds padding to the image while maintaining the aspect ratio.
   * - **3**: Stretches the image to fill the area.
   * 
   * @example
   * 2
   */
  paneCropMode?: number;
  /**
   * @remarks
   * The pane ID.
   * 
   * @example
   * 1
   */
  paneId?: number;
  /**
   * @remarks
   * Specifies whether to reserve the pane as a placeholder for offline users. Default value: true. A value of true indicates that the pane is forcibly reserved as a placeholder when the specific user or wildcard user specified for the grid is offline. A value of false indicates that video streams are displayed in the automatic fill order when the specific user or wildcard user specified for the grid is offline.
   */
  reservePaneForOfflineUser?: boolean;
  /**
   * @remarks
   * The media source of the pane. You can specify a userId. To specify a specific user type, you can use wildcard configurations. The following types are supported:
   * - **$ActiveSpeaker**: The current speaker in the channel.
   * - **$ScreenShare**: The user who is sharing their screen. If multiple users are sharing their screens in the channel, the panes are filled in chronological order.
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
  texts?: UpdateStreamingOutRequestPanesTexts[];
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
  whiteboard?: UpdateStreamingOutRequestPanesWhiteboard;
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
      backgrounds: { 'type': 'array', 'itemType': UpdateStreamingOutRequestPanesBackgrounds },
      images: { 'type': 'array', 'itemType': UpdateStreamingOutRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'number',
      reservePaneForOfflineUser: 'boolean',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': UpdateStreamingOutRequestPanesTexts },
      videoOrder: 'string',
      whiteboard: UpdateStreamingOutRequestPanesWhiteboard,
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

export class UpdateStreamingOutRequestRegionColor extends $dara.Model {
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

export class UpdateStreamingOutRequestTextsBoxColor extends $dara.Model {
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

export class UpdateStreamingOutRequestTextsFontColor extends $dara.Model {
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

export class UpdateStreamingOutRequestTexts extends $dara.Model {
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
   * The transparency of the rectangle.
   * 
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @remarks
   * The border width of the rectangle.
   * 
   * @example
   * 5
   */
  boxBorderw?: number;
  /**
   * @remarks
   * The color of the rectangle.
   */
  boxColor?: UpdateStreamingOutRequestTextsBoxColor;
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
  fontColor?: UpdateStreamingOutRequestTextsFontColor;
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
   * Specifies whether to display the rectangle.
   */
  hasBox?: boolean;
  /**
   * @remarks
   * The Z-axis layer.
   * 
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * The watermark content.
   * 
   * This parameter is required.
   * 
   * @example
   * Text watermark
   */
  texture?: string;
  /**
   * @remarks
   * The X-coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * The Y-coordinate.
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
      boxColor: UpdateStreamingOutRequestTextsBoxColor,
      font: 'number',
      fontColor: UpdateStreamingOutRequestTextsFontColor,
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

export class UpdateStreamingOutRequest extends $dara.Model {
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
   * The background image.
   */
  backgrounds?: UpdateStreamingOutRequestBackgrounds[];
  /**
   * @remarks
   * The global background color.
   */
  bgColor?: UpdateStreamingOutRequestBgColor;
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
  clockWidgets?: UpdateStreamingOutRequestClockWidgets[];
  /**
   * @remarks
   * The crop mode. Valid values:
   * - **1**: Crops the image while maintaining the aspect ratio.
   * - **2**: Adds padding to the image while maintaining the aspect ratio.
   * - **3**: Stretches the image to fill the area.
   * 
   * @example
   * 2
   */
  cropMode?: number;
  /**
   * @remarks
   * The global image watermark.
   */
  images?: UpdateStreamingOutRequestImages[];
  /**
   * @remarks
   * The specified user list for layout generation, which includes two types: blacklist and whitelist.
   * 
   * Whitelist: specifies the users in the room whose video streams are subscribed to.
   * * After the setting is applied, automatic padding is performed in sequence based on this list.
   * * When switching between multiple layouts in a template, only users in the whitelist are considered.
   * 
   * Blacklist: specifies the users in the room whose video streams are not subscribed to.
   * * When switching between multiple layouts in a template, only users not in the blacklist are considered.
   */
  layoutSpecifiedUsers?: UpdateStreamingOutRequestLayoutSpecifiedUsers;
  /**
   * @remarks
   * The pane settings. You can configure up to 16 panes.
   */
  panes?: UpdateStreamingOutRequestPanes[];
  /**
   * @remarks
   * The global region background color.
   */
  regionColor?: UpdateStreamingOutRequestRegionColor;
  /**
   * @remarks
   * The list of specified users for audio mixing.
   */
  specMixedUserList?: string[];
  /**
   * @remarks
   * The ID of the bypass live streaming task. Only a single ID is supported. The ID can contain uppercase and lowercase letters, digits, underscores (_), and hyphens (-), and can be up to 55 bytes in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * The template ID.
   * >Notice: When you update the template ID, you can only update the layout. The resolution cannot be updated.
   * 
   * This parameter is required.
   * 
   * @example
   * 567
   */
  templateId?: string;
  /**
   * @remarks
   * The global text watermark.
   */
  texts?: UpdateStreamingOutRequestTexts[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgrounds: 'Backgrounds',
      bgColor: 'BgColor',
      channelId: 'ChannelId',
      clockWidgets: 'ClockWidgets',
      cropMode: 'CropMode',
      images: 'Images',
      layoutSpecifiedUsers: 'LayoutSpecifiedUsers',
      panes: 'Panes',
      regionColor: 'RegionColor',
      specMixedUserList: 'SpecMixedUserList',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgrounds: { 'type': 'array', 'itemType': UpdateStreamingOutRequestBackgrounds },
      bgColor: UpdateStreamingOutRequestBgColor,
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': UpdateStreamingOutRequestClockWidgets },
      cropMode: 'number',
      images: { 'type': 'array', 'itemType': UpdateStreamingOutRequestImages },
      layoutSpecifiedUsers: UpdateStreamingOutRequestLayoutSpecifiedUsers,
      panes: { 'type': 'array', 'itemType': UpdateStreamingOutRequestPanes },
      regionColor: UpdateStreamingOutRequestRegionColor,
      specMixedUserList: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': UpdateStreamingOutRequestTexts },
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
    if(Array.isArray(this.specMixedUserList)) {
      $dara.Model.validateArray(this.specMixedUserList);
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

