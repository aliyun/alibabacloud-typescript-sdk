// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Personalizedtxt2imgQueryImageAssetRequest extends $dara.Model {
  /**
   * @remarks
   * The encoding format of the image. If this parameter is set to `base64`, the image is returned as a Base64-encoded string. If this parameter is omitted, the raw binary data of the image is returned.
   * 
   * @example
   * base64
   */
  encodeFormat?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * 0000.png
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the model.
   * 
   * This parameter is required.
   * 
   * @example
   * girl-xxxx-xxxx-xxxx-xxxx
   */
  modelId?: string;
  /**
   * @remarks
   * The ID of the prompt.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxx
   */
  promptId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeFormat: 'encodeFormat',
      imageId: 'imageId',
      modelId: 'modelId',
      promptId: 'promptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeFormat: 'string',
      imageId: 'string',
      modelId: 'string',
      promptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

