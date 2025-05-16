// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PersonalizedTextToImageQueryImageAssetRequest extends $dara.Model {
  /**
   * @example
   * base64
   */
  encodeFormat?: string;
  /**
   * @remarks
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

