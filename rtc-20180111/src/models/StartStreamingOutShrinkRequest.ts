// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartStreamingOutShrinkRequestBackgrounds extends $dara.Model {
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
   * - **1**: Crop while maintaining the aspect ratio.
   * - **2**: Maintain the aspect ratio and add borders.
   * - **3**: Stretch to fill.
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

export class StartStreamingOutShrinkRequestBgColor extends $dara.Model {
  /**
   * @remarks
   * The B value.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * The G value.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * The R value.
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

export class StartStreamingOutShrinkRequestClockWidgetsBoxColor extends $dara.Model {
  /**
   * @remarks
   * The B value.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * The G value.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * The R value.
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

export class StartStreamingOutShrinkRequestClockWidgetsFontColor extends $dara.Model {
  /**
   * @remarks
   * The B value.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * The G value.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * The R value.
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

export class StartStreamingOutShrinkRequestClockWidgets extends $dara.Model {
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
   * The transparency of the rectangle box.
   * 
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @remarks
   * The border width of the rectangle box.
   * 
   * @example
   * 5
   */
  boxBorderw?: number;
  /**
   * @remarks
   * The color of the rectangle box.
   */
  boxColor?: StartStreamingOutShrinkRequestClockWidgetsBoxColor;
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
  fontColor?: StartStreamingOutShrinkRequestClockWidgetsFontColor;
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
   * Specifies whether a rectangle box is required.
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
      boxColor: StartStreamingOutShrinkRequestClockWidgetsBoxColor,
      font: 'number',
      fontColor: StartStreamingOutShrinkRequestClockWidgetsFontColor,
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

export class StartStreamingOutShrinkRequestImages extends $dara.Model {
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
   * - **1**: Crop while maintaining the aspect ratio.
   * - **2**: Maintain the aspect ratio and add borders.
   * - **3**: Stretch to fill.
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

export class StartStreamingOutShrinkRequestPanesBackgrounds extends $dara.Model {
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
   * The display condition. Valid values:
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
   * The z-axis layer.
   * 
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * The crop mode. Valid values:
   * - **1**: Crop while maintaining the aspect ratio.
   * - **2**: Maintain the aspect ratio and add borders.
   * - **3**: Stretch to fill.
   * 
   * @example
   * 2
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

export class StartStreamingOutShrinkRequestPanesImages extends $dara.Model {
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
   * The z-axis layer.
   * 
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * The crop mode. Valid values:
   * - **1**: Crop while maintaining the aspect ratio.
   * - **2**: Maintain the aspect ratio and add borders.
   * - **3**: Stretch to fill.
   * 
   * @example
   * 2
   */
  paneImageCropMode?: number;
  /**
   * @remarks
   * The corresponding image content cannot be updated while streaming.
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

export class StartStreamingOutShrinkRequestPanesTextsBoxColor extends $dara.Model {
  /**
   * @remarks
   * The B value.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * The G value.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * The R value.
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

export class StartStreamingOutShrinkRequestPanesTextsFontColor extends $dara.Model {
  /**
   * @remarks
   * The B value.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * The G value.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * The R value.
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

export class StartStreamingOutShrinkRequestPanesTexts extends $dara.Model {
  /**
   * @remarks
   * The watermark transparency.
   * 
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * The transparency of the rectangle box.
   * 
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @remarks
   * The border width of the rectangle box.
   * 
   * @example
   * 5
   */
  boxBorderw?: number;
  /**
   * @remarks
   * The color of the rectangle box.
   */
  boxColor?: StartStreamingOutShrinkRequestPanesTextsBoxColor;
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
  fontColor?: StartStreamingOutShrinkRequestPanesTextsFontColor;
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
   * Specifies whether a rectangle box is required.
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
      boxColor: StartStreamingOutShrinkRequestPanesTextsBoxColor,
      display: 'string',
      font: 'number',
      fontColor: StartStreamingOutShrinkRequestPanesTextsFontColor,
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

export class StartStreamingOutShrinkRequestPanesWhiteboard extends $dara.Model {
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

export class StartStreamingOutShrinkRequestPanes extends $dara.Model {
  /**
   * @remarks
   * The local background images.
   */
  backgrounds?: StartStreamingOutShrinkRequestPanesBackgrounds[];
  /**
   * @remarks
   * The local image watermarks for the pane.
   */
  images?: StartStreamingOutShrinkRequestPanesImages[];
  /**
   * @remarks
   * The crop mode. Valid values:
   * - **1**: Crop while maintaining the aspect ratio.
   * - **2**: Maintain the aspect ratio and add borders.
   * - **3**: Stretch to fill.
   * 
   * @example
   * 2
   */
  paneCropMode?: number;
  /**
   * @remarks
   * The pane ID. The value starts from 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  paneId?: string;
  /**
   * @remarks
   * Specifies whether to reserve the pane for users who have not joined the meeting.
   * Default value: true. This value indicates that when the specific user or wildcard user specified for the grid is offline, the pane is forcibly reserved.
   * A value of false indicates that when the specific user or wildcard user specified for the grid is offline, video streams are displayed based on the automatic fill order.
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
  texts?: StartStreamingOutShrinkRequestPanesTexts[];
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
  whiteboard?: StartStreamingOutShrinkRequestPanesWhiteboard;
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
      backgrounds: { 'type': 'array', 'itemType': StartStreamingOutShrinkRequestPanesBackgrounds },
      images: { 'type': 'array', 'itemType': StartStreamingOutShrinkRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'string',
      reservePaneForOfflineUser: 'boolean',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': StartStreamingOutShrinkRequestPanesTexts },
      videoOrder: 'string',
      whiteboard: StartStreamingOutShrinkRequestPanesWhiteboard,
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

export class StartStreamingOutShrinkRequestRegionColor extends $dara.Model {
  /**
   * @remarks
   * The B value.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * The G value.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * The R value.
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

export class StartStreamingOutShrinkRequestTextsBoxColor extends $dara.Model {
  /**
   * @remarks
   * The B value.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * The G value.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * The R value.
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

export class StartStreamingOutShrinkRequestTextsFontColor extends $dara.Model {
  /**
   * @remarks
   * The B value.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * The G value.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * The R value.
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

export class StartStreamingOutShrinkRequestTexts extends $dara.Model {
  /**
   * @remarks
   * The watermark transparency.
   * 
   * @example
   * 0.1
   */
  alpha?: number;
  /**
   * @remarks
   * The transparency of the rectangle box.
   * 
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @remarks
   * The border width of the rectangle box.
   * 
   * @example
   * 5
   */
  boxBorderw?: number;
  /**
   * @remarks
   * The color of the rectangle box.
   */
  boxColor?: StartStreamingOutShrinkRequestTextsBoxColor;
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
  fontColor?: StartStreamingOutShrinkRequestTextsFontColor;
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
   * Specifies whether a rectangle box is required.
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
      boxColor: StartStreamingOutShrinkRequestTextsBoxColor,
      font: 'number',
      fontColor: StartStreamingOutShrinkRequestTextsFontColor,
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

export class StartStreamingOutShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The annotation switch.
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
   * The background image.
   */
  backgrounds?: StartStreamingOutShrinkRequestBackgrounds[];
  /**
   * @remarks
   * The global background color.
   */
  bgColor?: StartStreamingOutShrinkRequestBgColor;
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
  clockWidgets?: StartStreamingOutShrinkRequestClockWidgets[];
  /**
   * @remarks
   * The crop mode. Valid values:
   * - **1**: Crop the image while maintaining the aspect ratio.
   * - **2**: Maintain the aspect ratio and add borders (default).
   * - **3**: Stretch the image to fill the pane.
   * 
   * @example
   * 2
   */
  cropMode?: number;
  /**
   * @remarks
   * The global image watermark.
   * 
   * @example
   * 30
   */
  images?: StartStreamingOutShrinkRequestImages[];
  /**
   * @remarks
   * The specified user list for layout generation, including Blacklist/Whitelist.
   * 
   * Whitelist: specifies the users whose video streams are subscribed to in the channel.
   * * After the settings are applied, automatic padding is performed in sequence based on this list.
   * * When switching between multiple layouts in a template, only users in the whitelist are considered.
   * 
   * Blacklist: specifies the users whose video streams are not subscribed to in the channel.
   * * When switching between multiple layouts in a template, only users not in the blacklist are considered.
   */
  layoutSpecifiedUsersShrink?: string;
  /**
   * @remarks
   * The pane settings.
   * 
   * @example
   * eo85****
   */
  panes?: StartStreamingOutShrinkRequestPanes[];
  /**
   * @remarks
   * The global pane background color.
   */
  regionColor?: StartStreamingOutShrinkRequestRegionColor;
  /**
   * @remarks
   * Specifies whether to reserve a pane placeholder for users who do not push camera streams. Default value: true. A value of true indicates that a pane is reserved when a user does not push a camera stream. A value of false indicates that no pane is reserved.
   */
  reservePaneForNoCameraUser?: boolean;
  /**
   * @remarks
   * Specifies whether to display the default background image of a pane when the user is muted. Valid values:
   * - true: Displays the default background image (default).
   * - false: Does not display the default background image, but the configured local pane background image is still displayed.
   */
  showDefaultBackgroundOnMute?: boolean;
  /**
   * @remarks
   * The list of specified users for audio mixing.
   */
  specMixedUserList?: string[];
  /**
   * @remarks
   * Specifies whether to allow starting the task when the channel does not exist. Valid values:
   * 
   * - true: Yes.
   * - false: No (default).
   */
  startWithoutChannel?: boolean;
  /**
   * @remarks
   * The wait time for the task when the channel is not started, in seconds. This parameter is valid only when the StartWithoutChannel parameter is set to true. Valid values: 30 to 120.
   * 
   * @example
   * 30
   */
  startWithoutChannelWaitTime?: number;
  /**
   * @remarks
   * Specifies whether to subscribe to high resolution streams. Valid values:
   * - false: Subscribes to streams of different resolutions based on the pane area (default).
   * - true: Uses the highest resolution stream pushed by the client for padding by default.
   */
  subHighResolutionStream?: boolean;
  /**
   * @remarks
   * The task ID of the bypass streaming task. Only a single ID is supported. The ID can contain uppercase and lowercase letters, digits, underscores (_), and hyphens (-), and can be up to 55 bytes in length. If you do not specify this parameter, the system automatically generates a task ID.
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
   * The global text watermark.
   */
  texts?: StartStreamingOutShrinkRequestTexts[];
  /**
   * @remarks
   * The live stream ingest URL. Only a single URL is supported. This URL cannot be used by multiple tasks at the same time.
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp://example.com/live/stream
   */
  url?: string;
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
      layoutSpecifiedUsersShrink: 'LayoutSpecifiedUsers',
      panes: 'Panes',
      regionColor: 'RegionColor',
      reservePaneForNoCameraUser: 'ReservePaneForNoCameraUser',
      showDefaultBackgroundOnMute: 'ShowDefaultBackgroundOnMute',
      specMixedUserList: 'SpecMixedUserList',
      startWithoutChannel: 'StartWithoutChannel',
      startWithoutChannelWaitTime: 'StartWithoutChannelWaitTime',
      subHighResolutionStream: 'SubHighResolutionStream',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      texts: 'Texts',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotation: 'string',
      appId: 'string',
      backgrounds: { 'type': 'array', 'itemType': StartStreamingOutShrinkRequestBackgrounds },
      bgColor: StartStreamingOutShrinkRequestBgColor,
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': StartStreamingOutShrinkRequestClockWidgets },
      cropMode: 'number',
      images: { 'type': 'array', 'itemType': StartStreamingOutShrinkRequestImages },
      layoutSpecifiedUsersShrink: 'string',
      panes: { 'type': 'array', 'itemType': StartStreamingOutShrinkRequestPanes },
      regionColor: StartStreamingOutShrinkRequestRegionColor,
      reservePaneForNoCameraUser: 'boolean',
      showDefaultBackgroundOnMute: 'boolean',
      specMixedUserList: { 'type': 'array', 'itemType': 'string' },
      startWithoutChannel: 'boolean',
      startWithoutChannelWaitTime: 'number',
      subHighResolutionStream: 'boolean',
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': StartStreamingOutShrinkRequestTexts },
      url: 'string',
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

