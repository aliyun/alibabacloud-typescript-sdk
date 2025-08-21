// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmEmbedTaskRequestCsvControl extends $dara.Model {
  embedBitsNumberInEachTime?: number;
  embedColumn?: number;
  embedDensity?: string;
  embedPrecision?: number;
  embedTimePosition?: string;
  method?: string;
  timeFormat?: string;
  static names(): { [key: string]: string } {
    return {
      embedBitsNumberInEachTime: 'EmbedBitsNumberInEachTime',
      embedColumn: 'EmbedColumn',
      embedDensity: 'EmbedDensity',
      embedPrecision: 'EmbedPrecision',
      embedTimePosition: 'EmbedTimePosition',
      method: 'Method',
      timeFormat: 'TimeFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embedBitsNumberInEachTime: 'number',
      embedColumn: 'number',
      embedDensity: 'string',
      embedPrecision: 'number',
      embedTimePosition: 'string',
      method: 'string',
      timeFormat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgInvisibleControl extends $dara.Model {
  /**
   * @example
   * 10
   */
  opacity?: number;
  static names(): { [key: string]: string } {
    return {
      opacity: 'Opacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgVisibleControl extends $dara.Model {
  /**
   * @example
   * 30
   */
  angle?: number;
  /**
   * @example
   * 0x000000
   */
  fontColor?: string;
  /**
   * @example
   * 30
   */
  fontSize?: number;
  /**
   * @example
   * 3
   */
  horizontalNumber?: number;
  /**
   * @example
   * pos
   */
  mode?: string;
  /**
   * @example
   * 100
   */
  opacity?: number;
  /**
   * @example
   * 0.5
   */
  posX?: string;
  /**
   * @example
   * 0.5
   */
  posY?: string;
  /**
   * @example
   * 3
   */
  verticalNumber?: number;
  /**
   * @example
   * hello ****
   */
  visibleText?: string;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      horizontalNumber: 'HorizontalNumber',
      mode: 'Mode',
      opacity: 'Opacity',
      posX: 'PosX',
      posY: 'PosY',
      verticalNumber: 'VerticalNumber',
      visibleText: 'VisibleText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      fontColor: 'string',
      fontSize: 'number',
      horizontalNumber: 'number',
      mode: 'string',
      opacity: 'number',
      posX: 'string',
      posY: 'string',
      verticalNumber: 'number',
      visibleText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestDocumentControlBackgroundControl extends $dara.Model {
  /**
   * @example
   * true
   */
  bgAddInvisible?: boolean;
  /**
   * @example
   * true
   */
  bgAddVisible?: boolean;
  bgInvisibleControl?: CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgInvisibleControl;
  bgVisibleControl?: CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgVisibleControl;
  static names(): { [key: string]: string } {
    return {
      bgAddInvisible: 'BgAddInvisible',
      bgAddVisible: 'BgAddVisible',
      bgInvisibleControl: 'BgInvisibleControl',
      bgVisibleControl: 'BgVisibleControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgAddInvisible: 'boolean',
      bgAddVisible: 'boolean',
      bgInvisibleControl: CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgInvisibleControl,
      bgVisibleControl: CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgVisibleControl,
    };
  }

  validate() {
    if(this.bgInvisibleControl && typeof (this.bgInvisibleControl as any).validate === 'function') {
      (this.bgInvisibleControl as any).validate();
    }
    if(this.bgVisibleControl && typeof (this.bgVisibleControl as any).validate === 'function') {
      (this.bgVisibleControl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestDocumentControl extends $dara.Model {
  backgroundControl?: CreateWmEmbedTaskRequestDocumentControlBackgroundControl;
  /**
   * @example
   * true
   */
  invisibleAntiAllCopy?: boolean;
  /**
   * @example
   * true
   */
  invisibleAntiTextCopy?: boolean;
  static names(): { [key: string]: string } {
    return {
      backgroundControl: 'BackgroundControl',
      invisibleAntiAllCopy: 'InvisibleAntiAllCopy',
      invisibleAntiTextCopy: 'InvisibleAntiTextCopy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundControl: CreateWmEmbedTaskRequestDocumentControlBackgroundControl,
      invisibleAntiAllCopy: 'boolean',
      invisibleAntiTextCopy: 'boolean',
    };
  }

  validate() {
    if(this.backgroundControl && typeof (this.backgroundControl as any).validate === 'function') {
      (this.backgroundControl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestImageControlLogoVisibleControlMargin extends $dara.Model {
  bottom?: number;
  left?: number;
  right?: number;
  top?: number;
  static names(): { [key: string]: string } {
    return {
      bottom: 'Bottom',
      left: 'Left',
      right: 'Right',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bottom: 'number',
      left: 'number',
      right: 'number',
      top: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestImageControlLogoVisibleControl extends $dara.Model {
  angle?: number;
  logoBase64?: string;
  margin?: CreateWmEmbedTaskRequestImageControlLogoVisibleControlMargin;
  mode?: string;
  opacity?: number;
  posAx?: number;
  posAy?: number;
  posX?: number;
  posY?: number;
  spaceX?: number;
  spaceY?: number;
  visible?: boolean;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      logoBase64: 'LogoBase64',
      margin: 'Margin',
      mode: 'Mode',
      opacity: 'Opacity',
      posAx: 'PosAx',
      posAy: 'PosAy',
      posX: 'PosX',
      posY: 'PosY',
      spaceX: 'SpaceX',
      spaceY: 'SpaceY',
      visible: 'Visible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      logoBase64: 'string',
      margin: CreateWmEmbedTaskRequestImageControlLogoVisibleControlMargin,
      mode: 'string',
      opacity: 'number',
      posAx: 'number',
      posAy: 'number',
      posX: 'number',
      posY: 'number',
      spaceX: 'number',
      spaceY: 'number',
      visible: 'boolean',
    };
  }

  validate() {
    if(this.margin && typeof (this.margin as any).validate === 'function') {
      (this.margin as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestImageControlMetadataControl extends $dara.Model {
  enable?: boolean;
  xmpKvBase64?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      xmpKvBase64: 'XmpKvBase64',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      xmpKvBase64: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestImageControlTextVisibleControlMargin extends $dara.Model {
  bottom?: number;
  left?: number;
  right?: number;
  top?: number;
  static names(): { [key: string]: string } {
    return {
      bottom: 'Bottom',
      left: 'Left',
      right: 'Right',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bottom: 'number',
      left: 'number',
      right: 'number',
      top: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestImageControlTextVisibleControl extends $dara.Model {
  angle?: number;
  fontColor?: string;
  fontSize?: number;
  margin?: CreateWmEmbedTaskRequestImageControlTextVisibleControlMargin;
  mode?: string;
  opacity?: number;
  posAx?: number;
  posAy?: number;
  posX?: number;
  posY?: number;
  spaceX?: number;
  spaceY?: number;
  visible?: boolean;
  visibleText?: string;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      margin: 'Margin',
      mode: 'Mode',
      opacity: 'Opacity',
      posAx: 'PosAx',
      posAy: 'PosAy',
      posX: 'PosX',
      posY: 'PosY',
      spaceX: 'SpaceX',
      spaceY: 'SpaceY',
      visible: 'Visible',
      visibleText: 'VisibleText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      fontColor: 'string',
      fontSize: 'number',
      margin: CreateWmEmbedTaskRequestImageControlTextVisibleControlMargin,
      mode: 'string',
      opacity: 'number',
      posAx: 'number',
      posAy: 'number',
      posX: 'number',
      posY: 'number',
      spaceX: 'number',
      spaceY: 'number',
      visible: 'boolean',
      visibleText: 'string',
    };
  }

  validate() {
    if(this.margin && typeof (this.margin as any).validate === 'function') {
      (this.margin as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestImageControl extends $dara.Model {
  logoVisibleControl?: CreateWmEmbedTaskRequestImageControlLogoVisibleControl;
  metadataControl?: CreateWmEmbedTaskRequestImageControlMetadataControl;
  textVisibleControl?: CreateWmEmbedTaskRequestImageControlTextVisibleControl;
  static names(): { [key: string]: string } {
    return {
      logoVisibleControl: 'LogoVisibleControl',
      metadataControl: 'MetadataControl',
      textVisibleControl: 'TextVisibleControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logoVisibleControl: CreateWmEmbedTaskRequestImageControlLogoVisibleControl,
      metadataControl: CreateWmEmbedTaskRequestImageControlMetadataControl,
      textVisibleControl: CreateWmEmbedTaskRequestImageControlTextVisibleControl,
    };
  }

  validate() {
    if(this.logoVisibleControl && typeof (this.logoVisibleControl as any).validate === 'function') {
      (this.logoVisibleControl as any).validate();
    }
    if(this.metadataControl && typeof (this.metadataControl as any).validate === 'function') {
      (this.metadataControl as any).validate();
    }
    if(this.textVisibleControl && typeof (this.textVisibleControl as any).validate === 'function') {
      (this.textVisibleControl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequest extends $dara.Model {
  csvControl?: CreateWmEmbedTaskRequestCsvControl;
  documentControl?: CreateWmEmbedTaskRequestDocumentControl;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://example.com/abc****.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc****.pdf
   */
  filename?: string;
  imageControl?: CreateWmEmbedTaskRequestImageControl;
  /**
   * @example
   * 95
   */
  imageEmbedJpegQuality?: number;
  /**
   * @example
   * 2
   */
  imageEmbedLevel?: number;
  /**
   * @example
   * 3000k
   */
  videoBitrate?: string;
  /**
   * @example
   * false
   */
  videoIsLong?: boolean;
  /**
   * @example
   * aGVsbG8gc2F*****
   */
  wmInfoBytesB64?: string;
  /**
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @example
   * 123***
   */
  wmInfoUint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PureDocument
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      csvControl: 'CsvControl',
      documentControl: 'DocumentControl',
      fileUrl: 'FileUrl',
      filename: 'Filename',
      imageControl: 'ImageControl',
      imageEmbedJpegQuality: 'ImageEmbedJpegQuality',
      imageEmbedLevel: 'ImageEmbedLevel',
      videoBitrate: 'VideoBitrate',
      videoIsLong: 'VideoIsLong',
      wmInfoBytesB64: 'WmInfoBytesB64',
      wmInfoSize: 'WmInfoSize',
      wmInfoUint: 'WmInfoUint',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csvControl: CreateWmEmbedTaskRequestCsvControl,
      documentControl: CreateWmEmbedTaskRequestDocumentControl,
      fileUrl: 'string',
      filename: 'string',
      imageControl: CreateWmEmbedTaskRequestImageControl,
      imageEmbedJpegQuality: 'number',
      imageEmbedLevel: 'number',
      videoBitrate: 'string',
      videoIsLong: 'boolean',
      wmInfoBytesB64: 'string',
      wmInfoSize: 'number',
      wmInfoUint: 'string',
      wmType: 'string',
    };
  }

  validate() {
    if(this.csvControl && typeof (this.csvControl as any).validate === 'function') {
      (this.csvControl as any).validate();
    }
    if(this.documentControl && typeof (this.documentControl as any).validate === 'function') {
      (this.documentControl as any).validate();
    }
    if(this.imageControl && typeof (this.imageControl as any).validate === 'function') {
      (this.imageControl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

