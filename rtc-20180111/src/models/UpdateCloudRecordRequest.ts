// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudRecordRequestBackgrounds extends $dara.Model {
  /**
   * @remarks
   * Transparency.
   * 
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * The cropping mode. Valid values:
   * 
   * - **1**: Crop while maintaining aspect ratio.
   * 
   * - **2**: Maintain aspect ratio with padding.
   * 
   * - **3**: Stretch to fill.
   * 
   * @example
   * 2
   */
  backgroundCropMode?: number;
  /**
   * @remarks
   * Height.
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
   * Width.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * The horizontal coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * The vertical coordinate.
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

export class UpdateCloudRecordRequestClockWidgetsBoxColor extends $dara.Model {
  /**
   * @remarks
   * B.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * G.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * R.
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

export class UpdateCloudRecordRequestClockWidgetsFontColor extends $dara.Model {
  /**
   * @remarks
   * B.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * G.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * R.
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

export class UpdateCloudRecordRequestClockWidgets extends $dara.Model {
  /**
   * @remarks
   * Transparency.
   * 
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * Rectangle box transparency.
   * 
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @remarks
   * Rectangle box border width.
   * 
   * @example
   * 5
   */
  boxBorderw?: number;
  /**
   * @remarks
   * Rectangle box color.
   */
  boxColor?: UpdateCloudRecordRequestClockWidgetsBoxColor;
  /**
   * @remarks
   * Font.
   * 
   * - **0**: Alibaba PuHuiTi Regular
   * 
   * - **1**: Alibaba PuHuiTi Light
   * 
   * - **2**: Alibaba PuHuiTi Medium
   * 
   * - **3**: Alibaba PuHuiTi Bold
   * 
   * - **4**: Alibaba PuHuiTi Heavy
   * 
   * - **5**: Ali Mama ShuHeiTi
   * 
   * - **6**: DingTalk JinBuTi
   * 
   * - **7**: Ali Mama DaoLiTi
   * 
   * - **8**: Ali Mama DongFang DaKai
   * 
   * - **9**: Ali Mama FangYuanTi
   * 
   * @example
   * 0
   */
  font?: number;
  /**
   * @remarks
   * Font color.
   */
  fontColor?: UpdateCloudRecordRequestClockWidgetsFontColor;
  /**
   * @remarks
   * Clock font size.
   * 
   * @example
   * 30
   */
  fontSize?: number;
  /**
   * @remarks
   * Whether to draw a rectangle box.
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
   * The horizontal coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * The vertical coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  /**
   * @remarks
   * Time zone.
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
      boxColor: UpdateCloudRecordRequestClockWidgetsBoxColor,
      font: 'number',
      fontColor: UpdateCloudRecordRequestClockWidgetsFontColor,
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

export class UpdateCloudRecordRequestImages extends $dara.Model {
  /**
   * @remarks
   * Transparency.
   * 
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * Height.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @remarks
   * The cropping mode. Valid values:
   * 
   * - **1**: Crop while maintaining aspect ratio.
   * 
   * - **2**: Maintain aspect ratio with padding.
   * 
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
   * https://aliyun.com/123.jpg
   */
  url?: string;
  /**
   * @remarks
   * Width.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * The horizontal coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * The vertical coordinate.
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

export class UpdateCloudRecordRequestLayoutSpecifiedUsers extends $dara.Model {
  /**
   * @remarks
   * The list of specified user IDs.
   * 
   * This parameter is required.
   */
  ids?: string[];
  /**
   * @remarks
   * The type of the user list. Valid values: \`black\` for a blacklist and \`white\` for a whitelist.
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

export class UpdateCloudRecordRequestPanesBackgrounds extends $dara.Model {
  /**
   * @remarks
   * Transparency.
   * 
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * When to display.
   * 
   * - streamOnly: Display only when the user has a video stream (default).
   * 
   * - backup: Display only when the user has no video stream.
   * 
   * - always: Always display.
   * 
   * @example
   * backup
   */
  display?: string;
  /**
   * @remarks
   * Height.
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
   * The cropping mode. Valid values:
   * 
   * - **1**: Crop while maintaining aspect ratio.
   * 
   * - **2**: Maintain aspect ratio with padding.
   * 
   * - **3**: Stretch to fill.
   * 
   * @example
   * 2
   */
  paneBackgroundCropMode?: number;
  /**
   * @remarks
   * The background image URL.
   * 
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123xx.jpg
   */
  url?: string;
  /**
   * @remarks
   * Width.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * The horizontal coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * The vertical coordinate.
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

export class UpdateCloudRecordRequestPanesImages extends $dara.Model {
  /**
   * @remarks
   * Transparency.
   * 
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * When to display the watermark.
   * 
   * - streamOnly: Display only when the user has a video stream (default).
   * 
   * - backup: Display only when the user has no video stream.
   * 
   * - always: Always display.
   * 
   * @example
   * backup
   */
  display?: string;
  /**
   * @remarks
   * Height.
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
   * The cropping mode. Valid values:
   * 
   * - **1**: Crop while maintaining aspect ratio.
   * 
   * - **2**: Maintain aspect ratio with padding.
   * 
   * - **3**: Stretch to fill.
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
   * https://aliyun.com/123xxx.jpg
   */
  url?: string;
  /**
   * @remarks
   * Width.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * The horizontal coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * The vertical coordinate.
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

export class UpdateCloudRecordRequestPanesTextsBoxColor extends $dara.Model {
  /**
   * @remarks
   * B.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * G.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * R.
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

export class UpdateCloudRecordRequestPanesTextsFontColor extends $dara.Model {
  /**
   * @remarks
   * B.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * G.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * R.
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

export class UpdateCloudRecordRequestPanesTexts extends $dara.Model {
  /**
   * @remarks
   * Watermark transparency.
   * 
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * Rectangle box transparency.
   * 
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @remarks
   * Rectangle box border width.
   * 
   * @example
   * 5
   */
  boxBorderw?: number;
  /**
   * @remarks
   * Rectangle box color.
   */
  boxColor?: UpdateCloudRecordRequestPanesTextsBoxColor;
  /**
   * @remarks
   * When to display the watermark.
   * 
   * - streamOnly: Display only when the user has a video stream (default).
   * 
   * - backup: Display only when the user has no video stream.
   * 
   * - always: Always display.
   * 
   * @example
   * backup
   */
  display?: string;
  /**
   * @remarks
   * Font.
   * 
   * - **0**: Alibaba PuHuiTi Regular
   * 
   * - **1**: Alibaba PuHuiTi Light
   * 
   * - **2**: Alibaba PuHuiTi Medium
   * 
   * - **3**: Alibaba PuHuiTi Bold
   * 
   * - **4**: Alibaba PuHuiTi Heavy
   * 
   * - **5**: Ali Mama ShuHeiTi
   * 
   * - **6**: DingTalk JinBuTi
   * 
   * - **7**: Ali Mama DaoLiTi
   * 
   * - **8**: Ali Mama DongFang DaKai
   * 
   * - **9**: Ali Mama FangYuanTi
   * 
   * @example
   * 0
   */
  font?: number;
  /**
   * @remarks
   * Font color.
   */
  fontColor?: UpdateCloudRecordRequestPanesTextsFontColor;
  /**
   * @remarks
   * Font size.
   * 
   * @example
   * 36
   */
  fontSize?: number;
  /**
   * @remarks
   * Whether to draw a rectangle box.
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
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * The horizontal coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * The vertical coordinate.
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
      boxColor: UpdateCloudRecordRequestPanesTextsBoxColor,
      display: 'string',
      font: 'number',
      fontColor: UpdateCloudRecordRequestPanesTextsFontColor,
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

export class UpdateCloudRecordRequestPanesWhiteboard extends $dara.Model {
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

export class UpdateCloudRecordRequestPanes extends $dara.Model {
  /**
   * @remarks
   * Background images.
   */
  backgrounds?: UpdateCloudRecordRequestPanesBackgrounds[];
  /**
   * @remarks
   * Local image watermarks for the pane.
   */
  images?: UpdateCloudRecordRequestPanesImages[];
  /**
   * @remarks
   * The cropping mode. Valid values:
   * 
   * - **1**: Crop while maintaining aspect ratio.
   * 
   * - **2**: Maintain aspect ratio with padding.
   * 
   * - **3**: Stretch to fill.
   * 
   * @example
   * 2
   */
  paneCropMode?: number;
  /**
   * @remarks
   * The pane ID, starting from 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @remarks
   * Reserves a pane for a user who goes offline. The default value is true. If true, the pane for a specified user or wildcard user remains as a placeholder. If false, the pane is filled with a video stream based on the Auto Fill order.
   */
  reservePaneForOfflineUser?: boolean;
  /**
   * @remarks
   * The media source for the cell. You can specify a userId to target a specific user. Wildcard characters are also supported:
   * 
   * - **$ActiveSpeaker**: The current active speaker in the channel.
   * 
   * - **$ScreenShare**: A screen-sharing user. If multiple users share their screens, they are filled in sequence.
   * 
   * @example
   * 22
   */
  source?: string;
  /**
   * @remarks
   * The media type of the cell. Valid values:
   * 
   * - **video**: Camera or screen sharing stream (default).
   * 
   * - **camera**: Camera stream.
   * 
   * - **screen**: Screen sharing stream.
   * 
   * - **whiteboard**: Whiteboard.
   * 
   * @example
   * video
   */
  sourceType?: string;
  /**
   * @remarks
   * Local text watermarks for the pane.
   */
  texts?: UpdateCloudRecordRequestPanesTexts[];
  /**
   * @remarks
   * The fill order when SourceType is video.
   * 
   * - screenFirst: Prioritize screen sharing (default).
   * 
   * - cameraFirst: Prioritize camera.
   * 
   * @example
   * cameraFirst
   */
  videoOrder?: string;
  /**
   * @remarks
   * Whiteboard configuration.
   */
  whiteboard?: UpdateCloudRecordRequestPanesWhiteboard;
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
      backgrounds: { 'type': 'array', 'itemType': UpdateCloudRecordRequestPanesBackgrounds },
      images: { 'type': 'array', 'itemType': UpdateCloudRecordRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'number',
      reservePaneForOfflineUser: 'boolean',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': UpdateCloudRecordRequestPanesTexts },
      videoOrder: 'string',
      whiteboard: UpdateCloudRecordRequestPanesWhiteboard,
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

export class UpdateCloudRecordRequestTextsBoxColor extends $dara.Model {
  /**
   * @remarks
   * B.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * G.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * R.
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

export class UpdateCloudRecordRequestTextsFontColor extends $dara.Model {
  /**
   * @remarks
   * B.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * G.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * R.
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

export class UpdateCloudRecordRequestTexts extends $dara.Model {
  /**
   * @remarks
   * Watermark transparency.
   * 
   * @example
   * 0.1
   */
  alpha?: number;
  /**
   * @remarks
   * Rectangle box transparency.
   * 
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @remarks
   * Rectangle box border width.
   * 
   * @example
   * 5
   */
  boxBorderw?: number;
  /**
   * @remarks
   * Rectangle box color.
   */
  boxColor?: UpdateCloudRecordRequestTextsBoxColor;
  /**
   * @remarks
   * Font.
   * 
   * - **0**: Alibaba PuHuiTi Regular
   * 
   * - **1**: Alibaba PuHuiTi Light
   * 
   * - **2**: Alibaba PuHuiTi Medium
   * 
   * - **3**: Alibaba PuHuiTi Bold
   * 
   * - **4**: Alibaba PuHuiTi Heavy
   * 
   * - **5**: Ali Mama ShuHeiTi
   * 
   * - **6**: DingTalk JinBuTi
   * 
   * - **7**: Ali Mama DaoLiTi
   * 
   * - **8**: Ali Mama DongFang DaKai
   * 
   * - **9**: Ali Mama FangYuanTi
   * 
   * @example
   * 0
   */
  font?: number;
  /**
   * @remarks
   * Font color.
   */
  fontColor?: UpdateCloudRecordRequestTextsFontColor;
  /**
   * @remarks
   * Font size.
   * 
   * @example
   * 36
   */
  fontSize?: number;
  /**
   * @remarks
   * Whether to draw a rectangle box.
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
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * The horizontal coordinate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * The vertical coordinate.
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
      boxColor: UpdateCloudRecordRequestTextsBoxColor,
      font: 'number',
      fontColor: UpdateCloudRecordRequestTextsFontColor,
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

export class UpdateCloudRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can create and query it in the console. Only one ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * Background images.
   */
  backgrounds?: UpdateCloudRecordRequestBackgrounds[];
  /**
   * @remarks
   * The existing channel ID. Only one ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * Global clock watermarks.
   */
  clockWidgets?: UpdateCloudRecordRequestClockWidgets[];
  /**
   * @remarks
   * Global image watermarks.
   */
  images?: UpdateCloudRecordRequestImages[];
  /**
   * @remarks
   * A list that specifies users for layout generation. It supports both blacklists and whitelists.
   * 
   * Whitelist: Specifies the users whose video streams are subscribed to in the channel.
   * 
   * - The auto-fill feature uses this list for sequential filling.
   * 
   * - During multi-layout switching, only users in the whitelist are included.
   * 
   * Blacklist: Specifies the users whose video streams are not subscribed to in the channel.
   * 
   * - During multi-layout switching, only users not in the blacklist are included.
   */
  layoutSpecifiedUsers?: UpdateCloudRecordRequestLayoutSpecifiedUsers;
  /**
   * @remarks
   * Cell settings.
   */
  panes?: UpdateCloudRecordRequestPanes[];
  /**
   * @remarks
   * The task ID for this cloud recording. Only one ID is supported. It can contain letters, digits, underscores (_), and hyphens (-), with a maximum length of 55 bytes.
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
   * >Notice: To update the layout, change the template ID. Resolution updates are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 567
   */
  templateId?: string;
  /**
   * @remarks
   * Global text watermarks.
   */
  texts?: UpdateCloudRecordRequestTexts[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgrounds: 'Backgrounds',
      channelId: 'ChannelId',
      clockWidgets: 'ClockWidgets',
      images: 'Images',
      layoutSpecifiedUsers: 'LayoutSpecifiedUsers',
      panes: 'Panes',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgrounds: { 'type': 'array', 'itemType': UpdateCloudRecordRequestBackgrounds },
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': UpdateCloudRecordRequestClockWidgets },
      images: { 'type': 'array', 'itemType': UpdateCloudRecordRequestImages },
      layoutSpecifiedUsers: UpdateCloudRecordRequestLayoutSpecifiedUsers,
      panes: { 'type': 'array', 'itemType': UpdateCloudRecordRequestPanes },
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': UpdateCloudRecordRequestTexts },
    };
  }

  validate() {
    if(Array.isArray(this.backgrounds)) {
      $dara.Model.validateArray(this.backgrounds);
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
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

