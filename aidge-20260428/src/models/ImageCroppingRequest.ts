// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageCroppingRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the image to process.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/image.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The target height.
   * 
   * This parameter is required.
   * 
   * @example
   * 800
   */
  targetHeight?: number;
  /**
   * @remarks
   * The target width.
   * 
   * This parameter is required.
   * 
   * @example
   * 800
   */
  targetWidth?: number;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      targetHeight: 'TargetHeight',
      targetWidth: 'TargetWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      targetHeight: 'number',
      targetWidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

