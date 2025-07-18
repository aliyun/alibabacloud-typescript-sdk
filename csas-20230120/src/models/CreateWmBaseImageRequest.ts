// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmBaseImageRequestImageControlLogoVisibleControl extends $dara.Model {
  angle?: number;
  logoBase64?: string;
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmBaseImageRequestImageControlTextVisibleControl extends $dara.Model {
  angle?: number;
  fontColor?: string;
  fontSize?: number;
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmBaseImageRequestImageControl extends $dara.Model {
  logoVisibleControl?: CreateWmBaseImageRequestImageControlLogoVisibleControl;
  textVisibleControl?: CreateWmBaseImageRequestImageControlTextVisibleControl;
  static names(): { [key: string]: string } {
    return {
      logoVisibleControl: 'LogoVisibleControl',
      textVisibleControl: 'TextVisibleControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logoVisibleControl: CreateWmBaseImageRequestImageControlLogoVisibleControl,
      textVisibleControl: CreateWmBaseImageRequestImageControlTextVisibleControl,
    };
  }

  validate() {
    if(this.logoVisibleControl && typeof (this.logoVisibleControl as any).validate === 'function') {
      (this.logoVisibleControl as any).validate();
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

export class CreateWmBaseImageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1080
   */
  height?: number;
  imageControl?: CreateWmBaseImageRequestImageControl;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 255
   */
  opacity?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  scale?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1920
   */
  width?: number;
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
   * 12*****
   */
  wmInfoUint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PureWebappInvisible
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      imageControl: 'ImageControl',
      opacity: 'Opacity',
      scale: 'Scale',
      width: 'Width',
      wmInfoBytesB64: 'WmInfoBytesB64',
      wmInfoSize: 'WmInfoSize',
      wmInfoUint: 'WmInfoUint',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      imageControl: CreateWmBaseImageRequestImageControl,
      opacity: 'number',
      scale: 'number',
      width: 'number',
      wmInfoBytesB64: 'string',
      wmInfoSize: 'number',
      wmInfoUint: 'string',
      wmType: 'string',
    };
  }

  validate() {
    if(this.imageControl && typeof (this.imageControl as any).validate === 'function') {
      (this.imageControl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

