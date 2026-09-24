// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiTryOnRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the clothing image. Only one image is supported. The URL must be a publicly accessible `http`/`https` address. The image must be in JPG, JPEG, PNG, BMP, or WEBP format, with a resolution between 256 × 256 and 2049 × 2049 pixels, and a file size of no more than 10 MB.<br>
   * 
   * This parameter is required.
   * 
   * @example
   * https://ae01.alicdn.com/kf/S342f0070dc9f4be09a6cbed34e90dc8fs.jpg
   */
  clothImageUrl?: string;
  /**
   * @remarks
   * The clothing type. If specified, the value must be one of the following: tops/bottoms/dresses/tops_and_bottoms/shoes/hats. If not specified, the system automatically identifies the type.
   * 
   * @example
   * tops
   */
  clothType?: string;
  /**
   * @remarks
   * The URL of the model image. Only one image is supported. The URL must be a publicly accessible `http`/`https` address. The image must be in JPG, JPEG, PNG, BMP, or WEBP format, with a resolution between 256 × 256 and 2049 × 2049 pixels, and a file size of no more than 10 MB.<br>
   * 
   * This parameter is required.
   * 
   * @example
   * https://ae01.alicdn.com/kf/S342f0070dc9f4be09a6cbed34e90dc8fs.jpg
   */
  modelImageUrl?: string;
  /**
   * @remarks
   * The output image resolution. The synchronous API supports only 1K.
   * 
   * This parameter is required.
   * 
   * @example
   * 1K
   */
  resolution?: string;
  static names(): { [key: string]: string } {
    return {
      clothImageUrl: 'ClothImageUrl',
      clothType: 'ClothType',
      modelImageUrl: 'ModelImageUrl',
      resolution: 'Resolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clothImageUrl: 'string',
      clothType: 'string',
      modelImageUrl: 'string',
      resolution: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

