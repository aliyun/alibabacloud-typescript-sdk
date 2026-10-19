// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MilkPowderCartonCodeRephotographyDetectionRequest extends $dara.Model {
  /**
   * @remarks
   * The HTTP(S) URL of the image to be analyzed.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/image.jpg
   */
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

