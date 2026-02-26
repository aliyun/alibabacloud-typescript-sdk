// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebofficeWatermark extends $dara.Model {
  /**
   * @remarks
   * The color and transparency of the text watermark.
   * 
   * @example
   * rgba(192, 192, 192, 0.6)
   */
  fillStyle?: string;
  /**
   * @remarks
   * The font of the text watermark.
   * 
   * @example
   * bold 20px Serif
   */
  font?: string;
  /**
   * @remarks
   * The horizontal spacing of the text watermark. Unit: pixel.
   * 
   * @example
   * 50
   */
  horizontal?: number;
  /**
   * @remarks
   * The rotation of the text watermark. Unit: radian.
   * 
   * @example
   * -0.7853982
   */
  rotate?: number;
  /**
   * @remarks
   * The watermark type. Valid values:
   * 
   * *   0: no watermark.
   * *   1: text watermark.
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * The watermark text.
   * 
   * >  This parameter takes effect only if you set the Type parameter to 1.
   * 
   * @example
   * example
   */
  value?: string;
  /**
   * @remarks
   * The vertical spacing of the text watermark. Unit: pixel.
   * 
   * @example
   * 100
   */
  vertical?: number;
  static names(): { [key: string]: string } {
    return {
      fillStyle: 'FillStyle',
      font: 'Font',
      horizontal: 'Horizontal',
      rotate: 'Rotate',
      type: 'Type',
      value: 'Value',
      vertical: 'Vertical',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fillStyle: 'string',
      font: 'string',
      horizontal: 'number',
      rotate: 'number',
      type: 'number',
      value: 'string',
      vertical: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

