// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmBaseImageRequestImageControlLogoVisibleControlMargin extends $dara.Model {
  /**
   * @remarks
   * Takes effect when Mode is set to bottom-left or bottom-right. The bottom margin.
   * 
   * @example
   * 0
   */
  bottom?: number;
  /**
   * @remarks
   * Takes effect when Mode is set to top-left or bottom-left. The left margin.
   * 
   * @example
   * 0
   */
  left?: number;
  /**
   * @remarks
   * Takes effect when Mode is set to top-right or bottom-right. The right margin.
   * 
   * @example
   * 0
   */
  right?: number;
  /**
   * @remarks
   * Takes effect when Mode is set to top-left or top-right. The top margin.
   * 
   * @example
   * 0
   */
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

export class CreateWmBaseImageRequestImageControlLogoVisibleControl extends $dara.Model {
  /**
   * @remarks
   * The clockwise rotation angle of the logo watermark. Valid values: 1 to 360.
   * 
   * @example
   * 30
   */
  angle?: number;
  /**
   * @remarks
   * Specifies whether to enable enhanced visible watermark. When enabled, the logo is converted to a watermark logo and added to the image.
   */
  enhance?: boolean;
  /**
   * @remarks
   * The logo watermark in Base64 format. The logo file is a PNG image converted to Base64 format.
   * 
   * @example
   * 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
   */
  logoBase64?: string;
  /**
   * @remarks
   * Takes effect when Mode is set to top-left, top-right, bottom-left, or bottom-right. The margin settings.
   */
  margin?: CreateWmBaseImageRequestImageControlLogoVisibleControlMargin;
  /**
   * @remarks
   * The logo watermark display mode. Valid values:
   * - **pos**: fixed position mode.
   * - **repeat**: tile mode.
   * 
   * @example
   * pos
   */
  mode?: string;
  /**
   * @remarks
   * The opacity of the logo watermark. Valid values: 1 to 255. A larger value indicates lower transparency.
   * 
   * @example
   * 255
   */
  opacity?: number;
  /**
   * @remarks
   * The horizontal anchor point of the logo watermark. Valid values: 0 to 1. When (PosAx, PosAy) is set to (0, 0), the logo is drawn from the upper-left corner. When set to 0.5, the logo is drawn from the center. When set to (1, 1), the logo is drawn from the lower-right corner.
   * 
   * @example
   * 0
   */
  posAx?: number;
  /**
   * @remarks
   * The vertical anchor point of the logo watermark. Valid values: 0 to 1. When (PosAx, PosAy) is set to (0, 0), the logo is drawn from the upper-left corner. When set to 0.5, the logo is drawn from the center. When set to (1, 1), the logo is drawn from the lower-right corner.
   * 
   * @example
   * 0
   */
  posAy?: number;
  /**
   * @remarks
   * Takes effect when Mode is set to pos. Specifies the horizontal position of the visible watermark in pixels, with the upper-left corner as the origin.
   * 
   * @example
   * 0
   */
  posX?: number;
  /**
   * @remarks
   * Takes effect when Mode is set to pos. Specifies the vertical position of the visible watermark in pixels, with the upper-left corner as the origin.
   * 
   * @example
   * 0
   */
  posY?: number;
  /**
   * @remarks
   * Takes effect when Mode is set to repeat. Specifies the horizontal spacing for tiled visible watermarks.
   * 
   * @example
   * 30
   */
  spaceX?: number;
  /**
   * @remarks
   * Takes effect when Mode is set to repeat. Specifies the vertical spacing for tiled visible watermarks.
   * 
   * @example
   * 30
   */
  spaceY?: number;
  /**
   * @remarks
   * The visibility. Valid values:
   * 
   * - **true**: displayed.
   * 
   * - **false**: not displayed.
   * 
   * @example
   * true
   */
  visible?: boolean;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      enhance: 'Enhance',
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
      enhance: 'boolean',
      logoBase64: 'string',
      margin: CreateWmBaseImageRequestImageControlLogoVisibleControlMargin,
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

export class CreateWmBaseImageRequestImageControlTextVisibleControlMargin extends $dara.Model {
  /**
   * @remarks
   * Takes effect when Mode is set to bottom-left or bottom-right. The bottom margin.
   * 
   * @example
   * 0
   */
  bottom?: number;
  /**
   * @remarks
   * Takes effect when Mode is set to top-left or bottom-left. The left margin.
   * 
   * @example
   * 0
   */
  left?: number;
  /**
   * @remarks
   * Takes effect when Mode is set to top-right or bottom-right. The right margin.
   * 
   * @example
   * 0
   */
  right?: number;
  /**
   * @remarks
   * Takes effect when Mode is set to top-left or top-right. The top margin.
   * 
   * @example
   * 0
   */
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

export class CreateWmBaseImageRequestImageControlTextVisibleControl extends $dara.Model {
  /**
   * @remarks
   * The clockwise rotation angle of the text watermark. Valid values: 0 to 360.
   * 
   * @example
   * 30
   */
  angle?: number;
  /**
   * @remarks
   * The font color of the text watermark. The format is 0xFFFFFF or #FFFFFF RGB color format. For example, 0x000000 or #000000 represents black.
   * 
   * @example
   * #FF0000
   */
  fontColor?: string;
  /**
   * @remarks
   * The font size of the text watermark. A larger value indicates a larger font.
   * 
   * @example
   * 30
   */
  fontSize?: number;
  /**
   * @remarks
   * Takes effect when Mode is set to top-left, top-right, bottom-left, or bottom-right. The margin settings.
   */
  margin?: CreateWmBaseImageRequestImageControlTextVisibleControlMargin;
  /**
   * @remarks
   * The text watermark display mode. Valid values:
   * - **pos**: fixed position mode.
   * - **repeat**: tile mode.
   * 
   * @example
   * pos
   */
  mode?: string;
  /**
   * @remarks
   * The opacity of the text watermark. Valid values: 1 to 255. A larger value indicates lower transparency.
   * 
   * @example
   * 255
   */
  opacity?: number;
  /**
   * @remarks
   * The horizontal anchor point of the text watermark. Valid values: 0 to 1. When (PosAx, PosAy) is set to (0, 0), the text is drawn from the upper-left corner. When set to 0.5, the text is drawn from the center. When set to (1, 1), the text is drawn from the lower-right corner.
   * 
   * @example
   * 0
   */
  posAx?: number;
  /**
   * @remarks
   * The vertical anchor point of the text watermark. Valid values: 0 to 1. When (PosAx, PosAy) is set to (0, 0), the text is drawn from the upper-left corner. When set to 0.5, the text is drawn from the center. When set to (1, 1), the text is drawn from the lower-right corner.
   * 
   * @example
   * 0
   */
  posAy?: number;
  /**
   * @remarks
   * Takes effect when Mode is set to pos. Specifies the horizontal position of the text watermark in pixels, with the upper-left corner as the origin.
   * 
   * @example
   * 0
   */
  posX?: number;
  /**
   * @remarks
   * Takes effect when Mode is set to pos. Specifies the vertical position of the text watermark in pixels, with the upper-left corner as the origin.
   * 
   * @example
   * 0
   */
  posY?: number;
  /**
   * @remarks
   * Takes effect when Mode is set to repeat. Specifies the horizontal spacing for tiled text watermarks.
   * 
   * @example
   * 30
   */
  spaceX?: number;
  /**
   * @remarks
   * Takes effect when Mode is set to repeat. Specifies the vertical spacing for tiled text watermarks.
   * 
   * @example
   * 0
   */
  spaceY?: number;
  /**
   * @remarks
   * The visibility. Valid values:
   * 
   * - **true**: displayed.
   * 
   * - **false**: not displayed.
   * 
   * @example
   * true
   */
  visible?: boolean;
  /**
   * @remarks
   * The text watermark content. The format is a UTF-8 string.
   * 
   * @example
   * Watermark text
   */
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
      margin: CreateWmBaseImageRequestImageControlTextVisibleControlMargin,
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

export class CreateWmBaseImageRequestImageControl extends $dara.Model {
  /**
   * @remarks
   * The logo watermark control parameters.
   */
  logoVisibleControl?: CreateWmBaseImageRequestImageControlLogoVisibleControl;
  /**
   * @remarks
   * The text watermark control parameters for the image.
   */
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
   * The height of the watermark image, in pixels. Valid values: 100 to 5000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1080
   */
  height?: number;
  /**
   * @remarks
   * The image watermark control parameters.
   */
  imageControl?: CreateWmBaseImageRequestImageControl;
  /**
   * @remarks
   * The opacity of the watermark image. Valid values: 1 to 255. A larger value indicates lower transparency.
   * 
   * This parameter is required.
   * 
   * @example
   * 255
   */
  opacity?: number;
  /**
   * @remarks
   * The scaling ratio of the watermark image.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  scale?: number;
  /**
   * @remarks
   * The width of the watermark image, in pixels. Valid values: 100 to 5000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1920
   */
  width?: number;
  /**
   * @remarks
   * The watermark information in Base64-encoded string format. The length is 1 to 300 characters. If this parameter is set, the WmInfoUint parameter cannot be set.
   * 
   * @example
   * aGVsbG8gc2F*****
   */
  wmInfoBytesB64?: string;
  /**
   * @remarks
   * The bit width of the watermark information capacity. Default value: 32. This parameter must be consistent between embedding and extraction. For example, if the SDK used for embedding is 40-bit, set this parameter to 40 during extraction as well.
   * 
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @remarks
   * The watermark information in decimal number format. If this parameter is set, WmInfoBytesB64 cannot be set.
   * 
   * The valid range depends on the WmInfoSize parameter:
   * 
   * - If WmInfoSize is **32**, the valid range is 1 to 4294967295.
   * 
   * - If WmInfoSize is **40**, the valid range is 1 to 1099511627775.
   * 
   * - If WmInfoSize is **64**, the valid range is 1 to 18446744073709551615.
   * 
   * @example
   * 12*****
   */
  wmInfoUint?: string;
  /**
   * @remarks
   * The watermark type. Valid values:
   * - **PureWebappInvisible**: web watermark.
   * - **PureAppInvisible**: App watermark.
   * - **PureScreenInvisible**: screen watermark.
   * - **AigcWebappInvisible**: AIGC web watermark.
   * - **AigcAppInvisible**: AIGC App watermark.
   * - **AigcScreenInvisible**: AIGC screen watermark.
   * 
   * This parameter is required.
   * 
   * @example
   * PureWebappInvisible
   */
  wmType?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * Remarks
   */
  comment?: string;
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
      comment: 'comment',
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
      comment: 'string',
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

