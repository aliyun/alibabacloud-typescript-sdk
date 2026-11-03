// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageUpscaleRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the original image. It must be a publicly accessible image URL. Private network addresses such as localhost are not supported. The width and height of the input image must be greater than 100 pixels and less than 3000 pixels. The width and height of the upscaled image must not exceed 3000 pixels.
   * 
   * This parameter is required.
   * 
   * @example
   * http://example.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The upscaling factor of the image. Valid values: 2 and 4. Default value: 2.
   * 
   * @example
   * 2
   */
  upscaleFactor?: number;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      upscaleFactor: 'UpscaleFactor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      upscaleFactor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

