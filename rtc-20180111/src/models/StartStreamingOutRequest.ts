// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartStreamingOutRequestBackgrounds extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 2
   */
  backgroundCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
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

export class StartStreamingOutRequestBgColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
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

export class StartStreamingOutRequestClockWidgetsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
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

export class StartStreamingOutRequestClockWidgetsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
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

export class StartStreamingOutRequestClockWidgets extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: StartStreamingOutRequestClockWidgetsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartStreamingOutRequestClockWidgetsFontColor;
  /**
   * @example
   * 30
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  /**
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
      boxColor: StartStreamingOutRequestClockWidgetsBoxColor,
      font: 'number',
      fontColor: StartStreamingOutRequestClockWidgetsFontColor,
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

export class StartStreamingOutRequestImages extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 2
   */
  imageCropMode?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123xxx.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
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

export class StartStreamingOutRequestLayoutSpecifiedUsers extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ids?: string[];
  /**
   * @remarks
   * This parameter is required.
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

export class StartStreamingOutRequestPanesBackgrounds extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * backup
   */
  display?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @example
   * 2
   */
  paneBackgroundCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123xx.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
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

export class StartStreamingOutRequestPanesImages extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * backup
   */
  display?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @example
   * 2
   */
  paneImageCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123xxx.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
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

export class StartStreamingOutRequestPanesTextsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
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

export class StartStreamingOutRequestPanesTextsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
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

export class StartStreamingOutRequestPanesTexts extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: StartStreamingOutRequestPanesTextsBoxColor;
  /**
   * @example
   * backup
   */
  display?: string;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartStreamingOutRequestPanesTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
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
      boxColor: StartStreamingOutRequestPanesTextsBoxColor,
      display: 'string',
      font: 'number',
      fontColor: StartStreamingOutRequestPanesTextsFontColor,
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

export class StartStreamingOutRequestPanesWhiteboard extends $dara.Model {
  /**
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

export class StartStreamingOutRequestPanes extends $dara.Model {
  backgrounds?: StartStreamingOutRequestPanesBackgrounds[];
  images?: StartStreamingOutRequestPanesImages[];
  /**
   * @example
   * 2
   */
  paneCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  paneId?: string;
  reservePaneForOfflineUser?: boolean;
  /**
   * @example
   * 1811****
   */
  source?: string;
  /**
   * @example
   * Video
   */
  sourceType?: string;
  texts?: StartStreamingOutRequestPanesTexts[];
  /**
   * @example
   * cameraFirst
   */
  videoOrder?: string;
  whiteboard?: StartStreamingOutRequestPanesWhiteboard;
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
      backgrounds: { 'type': 'array', 'itemType': StartStreamingOutRequestPanesBackgrounds },
      images: { 'type': 'array', 'itemType': StartStreamingOutRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'string',
      reservePaneForOfflineUser: 'boolean',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': StartStreamingOutRequestPanesTexts },
      videoOrder: 'string',
      whiteboard: StartStreamingOutRequestPanesWhiteboard,
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

export class StartStreamingOutRequestRegionColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
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

export class StartStreamingOutRequestTextsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
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

export class StartStreamingOutRequestTextsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
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

export class StartStreamingOutRequestTexts extends $dara.Model {
  /**
   * @example
   * 0.1
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: StartStreamingOutRequestTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartStreamingOutRequestTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
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
      boxColor: StartStreamingOutRequestTextsBoxColor,
      font: 'number',
      fontColor: StartStreamingOutRequestTextsFontColor,
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

export class StartStreamingOutRequest extends $dara.Model {
  /**
   * @example
   * disable
   */
  annotation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  backgrounds?: StartStreamingOutRequestBackgrounds[];
  bgColor?: StartStreamingOutRequestBgColor;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  clockWidgets?: StartStreamingOutRequestClockWidgets[];
  /**
   * @example
   * 2
   */
  cropMode?: number;
  images?: StartStreamingOutRequestImages[];
  layoutSpecifiedUsers?: StartStreamingOutRequestLayoutSpecifiedUsers;
  panes?: StartStreamingOutRequestPanes[];
  regionColor?: StartStreamingOutRequestRegionColor;
  reservePaneForNoCameraUser?: boolean;
  showDefaultBackgroundOnMute?: boolean;
  specMixedUserList?: string[];
  startWithoutChannel?: boolean;
  /**
   * @example
   * 30
   */
  startWithoutChannelWaitTime?: number;
  subHighResolutionStream?: boolean;
  /**
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 567
   */
  templateId?: string;
  texts?: StartStreamingOutRequestTexts[];
  /**
   * @remarks
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
      layoutSpecifiedUsers: 'LayoutSpecifiedUsers',
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
      backgrounds: { 'type': 'array', 'itemType': StartStreamingOutRequestBackgrounds },
      bgColor: StartStreamingOutRequestBgColor,
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': StartStreamingOutRequestClockWidgets },
      cropMode: 'number',
      images: { 'type': 'array', 'itemType': StartStreamingOutRequestImages },
      layoutSpecifiedUsers: StartStreamingOutRequestLayoutSpecifiedUsers,
      panes: { 'type': 'array', 'itemType': StartStreamingOutRequestPanes },
      regionColor: StartStreamingOutRequestRegionColor,
      reservePaneForNoCameraUser: 'boolean',
      showDefaultBackgroundOnMute: 'boolean',
      specMixedUserList: { 'type': 'array', 'itemType': 'string' },
      startWithoutChannel: 'boolean',
      startWithoutChannelWaitTime: 'number',
      subHighResolutionStream: 'boolean',
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': StartStreamingOutRequestTexts },
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

