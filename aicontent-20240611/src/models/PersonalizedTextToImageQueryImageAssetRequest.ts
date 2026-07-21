// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PersonalizedTextToImageQueryImageAssetRequest extends $dara.Model {
  /**
   * @remarks
   * The image encoding format. For example, specify `base64` to receive the image data as a Base64-encoded string.
   * 
   * @example
   * base64
   */
  encodeFormat?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0000.png
   */
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeFormat: 'encodeFormat',
      imageId: 'imageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeFormat: 'string',
      imageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

