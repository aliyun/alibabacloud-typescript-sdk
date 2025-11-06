// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyViewLayoutRequestBackgrounds extends $dara.Model {
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

export class ModifyViewLayoutRequestClockWidgetsBoxColor extends $dara.Model {
  /**
   * @remarks
   * B。
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * G。
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * R。
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

export class ModifyViewLayoutRequestClockWidgetsFontColor extends $dara.Model {
  /**
   * @remarks
   * B。
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * G。
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * R。
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

export class ModifyViewLayoutRequestClockWidgets extends $dara.Model {
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
  boxColor?: ModifyViewLayoutRequestClockWidgetsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: ModifyViewLayoutRequestClockWidgetsFontColor;
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
      boxColor: ModifyViewLayoutRequestClockWidgetsBoxColor,
      font: 'number',
      fontColor: ModifyViewLayoutRequestClockWidgetsFontColor,
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

export class ModifyViewLayoutRequestImages extends $dara.Model {
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

export class ModifyViewLayoutRequestLayoutSpecifiedUsers extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ids?: string[];
  /**
   * @remarks
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

export class ModifyViewLayoutRequestPanesImages extends $dara.Model {
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

export class ModifyViewLayoutRequestPanesTextsBoxColor extends $dara.Model {
  /**
   * @remarks
   * B。
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * G。
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * R。
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

export class ModifyViewLayoutRequestPanesTextsFontColor extends $dara.Model {
  /**
   * @remarks
   * B。
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * G。
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * R。
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

export class ModifyViewLayoutRequestPanesTexts extends $dara.Model {
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
  boxColor?: ModifyViewLayoutRequestPanesTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: ModifyViewLayoutRequestPanesTextsFontColor;
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
      boxColor: ModifyViewLayoutRequestPanesTextsBoxColor,
      font: 'number',
      fontColor: ModifyViewLayoutRequestPanesTextsFontColor,
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

export class ModifyViewLayoutRequestPanes extends $dara.Model {
  images?: ModifyViewLayoutRequestPanesImages[];
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
  /**
   * @example
   * 22
   */
  source?: string;
  /**
   * @example
   * video
   */
  sourceType?: string;
  texts?: ModifyViewLayoutRequestPanesTexts[];
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneCropMode: 'PaneCropMode',
      paneId: 'PaneId',
      source: 'Source',
      sourceType: 'SourceType',
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ModifyViewLayoutRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'string',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': ModifyViewLayoutRequestPanesTexts },
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

export class ModifyViewLayoutRequestTextsBoxColor extends $dara.Model {
  /**
   * @remarks
   * B。
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * G。
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * R。
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

export class ModifyViewLayoutRequestTextsFontColor extends $dara.Model {
  /**
   * @remarks
   * B。
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * G。
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * R。
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

export class ModifyViewLayoutRequestTexts extends $dara.Model {
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
  boxColor?: ModifyViewLayoutRequestTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: ModifyViewLayoutRequestTextsFontColor;
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
      boxColor: ModifyViewLayoutRequestTextsBoxColor,
      font: 'number',
      fontColor: ModifyViewLayoutRequestTextsFontColor,
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

export class ModifyViewLayoutRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  backgrounds?: ModifyViewLayoutRequestBackgrounds[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  clockWidgets?: ModifyViewLayoutRequestClockWidgets[];
  images?: ModifyViewLayoutRequestImages[];
  layoutSpecifiedUsers?: ModifyViewLayoutRequestLayoutSpecifiedUsers;
  panes?: ModifyViewLayoutRequestPanes[];
  /**
   * @remarks
   * This parameter is required.
   * 
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
  texts?: ModifyViewLayoutRequestTexts[];
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
      backgrounds: { 'type': 'array', 'itemType': ModifyViewLayoutRequestBackgrounds },
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': ModifyViewLayoutRequestClockWidgets },
      images: { 'type': 'array', 'itemType': ModifyViewLayoutRequestImages },
      layoutSpecifiedUsers: ModifyViewLayoutRequestLayoutSpecifiedUsers,
      panes: { 'type': 'array', 'itemType': ModifyViewLayoutRequestPanes },
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': ModifyViewLayoutRequestTexts },
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

