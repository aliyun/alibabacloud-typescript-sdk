// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartCloudRecordShrinkRequestBackgrounds extends $dara.Model {
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

export class StartCloudRecordShrinkRequestBgColor extends $dara.Model {
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

export class StartCloudRecordShrinkRequestClockWidgetsBoxColor extends $dara.Model {
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

export class StartCloudRecordShrinkRequestClockWidgetsFontColor extends $dara.Model {
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

export class StartCloudRecordShrinkRequestClockWidgets extends $dara.Model {
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
  boxColor?: StartCloudRecordShrinkRequestClockWidgetsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartCloudRecordShrinkRequestClockWidgetsFontColor;
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
      boxColor: StartCloudRecordShrinkRequestClockWidgetsBoxColor,
      font: 'number',
      fontColor: StartCloudRecordShrinkRequestClockWidgetsFontColor,
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

export class StartCloudRecordShrinkRequestImages extends $dara.Model {
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

export class StartCloudRecordShrinkRequestPanesBackgrounds extends $dara.Model {
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

export class StartCloudRecordShrinkRequestPanesImages extends $dara.Model {
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

export class StartCloudRecordShrinkRequestPanesTextsBoxColor extends $dara.Model {
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

export class StartCloudRecordShrinkRequestPanesTextsFontColor extends $dara.Model {
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

export class StartCloudRecordShrinkRequestPanesTexts extends $dara.Model {
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
  boxColor?: StartCloudRecordShrinkRequestPanesTextsBoxColor;
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
  fontColor?: StartCloudRecordShrinkRequestPanesTextsFontColor;
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
      boxColor: StartCloudRecordShrinkRequestPanesTextsBoxColor,
      display: 'string',
      font: 'number',
      fontColor: StartCloudRecordShrinkRequestPanesTextsFontColor,
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

export class StartCloudRecordShrinkRequestPanesWhiteboard extends $dara.Model {
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

export class StartCloudRecordShrinkRequestPanes extends $dara.Model {
  backgrounds?: StartCloudRecordShrinkRequestPanesBackgrounds[];
  images?: StartCloudRecordShrinkRequestPanesImages[];
  /**
   * @example
   * 3
   */
  paneCropMode?: number;
  /**
   * @remarks
   * paneId
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  paneId?: number;
  reservePaneForOfflineUser?: boolean;
  /**
   * @remarks
   * source
   */
  source?: string;
  /**
   * @remarks
   * sourceType
   * 
   * @example
   * video
   */
  sourceType?: string;
  texts?: StartCloudRecordShrinkRequestPanesTexts[];
  /**
   * @example
   * cameraFirst
   */
  videoOrder?: string;
  whiteboard?: StartCloudRecordShrinkRequestPanesWhiteboard;
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
      backgrounds: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestPanesBackgrounds },
      images: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'number',
      reservePaneForOfflineUser: 'boolean',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestPanesTexts },
      videoOrder: 'string',
      whiteboard: StartCloudRecordShrinkRequestPanesWhiteboard,
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

export class StartCloudRecordShrinkRequestRegionColor extends $dara.Model {
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

export class StartCloudRecordShrinkRequestStorageConfig extends $dara.Model {
  /**
   * @remarks
   * accessKey
   * 
   * This parameter is required.
   * 
   * @example
   * LTAX***
   */
  accessKey?: string;
  /**
   * @remarks
   * bucket
   * 
   * This parameter is required.
   * 
   * @example
   * test-bucket-for-recording
   */
  bucket?: string;
  /**
   * @example
   * https://aliyuns.dalian.oss.com
   */
  endpoint?: string;
  /**
   * @remarks
   * region
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
   * vendor
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

export class StartCloudRecordShrinkRequestTextsBoxColor extends $dara.Model {
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

export class StartCloudRecordShrinkRequestTextsFontColor extends $dara.Model {
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

export class StartCloudRecordShrinkRequestTexts extends $dara.Model {
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
  boxColor?: StartCloudRecordShrinkRequestTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartCloudRecordShrinkRequestTextsFontColor;
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
      boxColor: StartCloudRecordShrinkRequestTextsBoxColor,
      font: 'number',
      fontColor: StartCloudRecordShrinkRequestTextsFontColor,
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

export class StartCloudRecordShrinkRequest extends $dara.Model {
  /**
   * @example
   * disable
   */
  annotation?: string;
  /**
   * @remarks
   * appId
   * 
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  backgrounds?: StartCloudRecordShrinkRequestBackgrounds[];
  bgColor?: StartCloudRecordShrinkRequestBgColor;
  /**
   * @remarks
   * channelName
   * 
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  clockWidgets?: StartCloudRecordShrinkRequestClockWidgets[];
  /**
   * @example
   * 2
   */
  cropMode?: number;
  images?: StartCloudRecordShrinkRequestImages[];
  layoutSpecifiedUsersShrink?: string;
  /**
   * @remarks
   * panes
   */
  panes?: StartCloudRecordShrinkRequestPanes[];
  recordMode?: number;
  regionColor?: StartCloudRecordShrinkRequestRegionColor;
  reservePaneForNoCameraUser?: boolean;
  showDefaultBackgroundOnMute?: boolean;
  singleStreamingRecordShrink?: string;
  startWithoutChannel?: boolean;
  /**
   * @example
   * 30
   */
  startWithoutChannelWaitTime?: number;
  /**
   * @remarks
   * storageConfig
   * 
   * This parameter is required.
   */
  storageConfig?: StartCloudRecordShrinkRequestStorageConfig;
  subHighResolutionStream?: boolean;
  /**
   * @remarks
   * taskId
   * 
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * templateId
   * 
   * This parameter is required.
   * 
   * @example
   * 567
   */
  templateId?: string;
  texts?: StartCloudRecordShrinkRequestTexts[];
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
      recordMode: 'RecordMode',
      regionColor: 'RegionColor',
      reservePaneForNoCameraUser: 'ReservePaneForNoCameraUser',
      showDefaultBackgroundOnMute: 'ShowDefaultBackgroundOnMute',
      singleStreamingRecordShrink: 'SingleStreamingRecord',
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
      backgrounds: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestBackgrounds },
      bgColor: StartCloudRecordShrinkRequestBgColor,
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestClockWidgets },
      cropMode: 'number',
      images: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestImages },
      layoutSpecifiedUsersShrink: 'string',
      panes: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestPanes },
      recordMode: 'number',
      regionColor: StartCloudRecordShrinkRequestRegionColor,
      reservePaneForNoCameraUser: 'boolean',
      showDefaultBackgroundOnMute: 'boolean',
      singleStreamingRecordShrink: 'string',
      startWithoutChannel: 'boolean',
      startWithoutChannelWaitTime: 'number',
      storageConfig: StartCloudRecordShrinkRequestStorageConfig,
      subHighResolutionStream: 'boolean',
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestTexts },
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

