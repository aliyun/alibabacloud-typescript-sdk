// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddImageMosaicRequestTargetsBoundary } from "./AddImageMosaicRequestTargetsBoundary";


export class AddImageMosaicRequestTargets extends $dara.Model {
  /**
   * @remarks
   * The radius of the Gaussian blur. Valid values: 1 to 50. Default value: 3. Unit: pixels.
   * 
   * >  This parameter takes effect only for a Gaussian blur.
   * 
   * @example
   * 3
   */
  blurRadius?: number;
  /**
   * @remarks
   * The position of the bounding box.
   * 
   * This parameter is required.
   */
  boundary?: AddImageMosaicRequestTargetsBoundary;
  /**
   * @remarks
   * The color of the color shape. You can specify a color by using a color code such as`#RRGGBB` or preset color names such as `red` and `white`. The default value is #FFFFFF, which is white.
   * 
   * >  This parameter takes effect only for solid color shapes.
   * 
   * @example
   * #FFFFFF
   */
  color?: string;
  /**
   * @remarks
   * The radius of the mosaic. Default value: 5. Unit: pixels.
   * 
   * >  This parameter does not take effect for Gaussian blurs and solid color shapes.
   * 
   * @example
   * 5
   */
  mosaicRadius?: number;
  /**
   * @remarks
   * The standard deviation of the Gaussian blur. The value must be greater than 0. Default value: 5.
   * 
   * >  This parameter takes effect only for a Gaussian blur.
   * 
   * @example
   * 5
   */
  sigma?: number;
  /**
   * @remarks
   * The type of the mosaic effect. Valid values:
   * 
   * *   square: squares.
   * *   diamond: diamonds.
   * *   hexagon: hexagons.
   * *   blur: Gaussian blurs.
   * *   pure: solid color shapes.
   * 
   * This parameter is required.
   * 
   * @example
   * square
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      blurRadius: 'BlurRadius',
      boundary: 'Boundary',
      color: 'Color',
      mosaicRadius: 'MosaicRadius',
      sigma: 'Sigma',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blurRadius: 'number',
      boundary: AddImageMosaicRequestTargetsBoundary,
      color: 'string',
      mosaicRadius: 'number',
      sigma: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.boundary && typeof (this.boundary as any).validate === 'function') {
      (this.boundary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

