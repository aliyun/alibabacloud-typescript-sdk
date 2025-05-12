// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplateRatioRefer extends $dara.Model {
  /**
   * @remarks
   * The horizontal offset. Unit: pixel.
   * 
   * @example
   * 0.51
   */
  dx?: string;
  /**
   * @remarks
   * The timeline of the watermark.
   * 
   * @example
   * 0.2
   */
  dy?: string;
  /**
   * @remarks
   * The height of the watermark image. Unit: pixel.
   * 
   * @example
   * 0.33
   */
  height?: string;
  /**
   * @remarks
   * The width of the watermark image. Unit: pixel.
   * 
   * @example
   * 0.36
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      height: 'string',
      width: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

