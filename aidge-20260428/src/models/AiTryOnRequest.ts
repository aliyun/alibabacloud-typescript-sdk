// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiTryOnRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the garment image. Only one image is supported. The URL must be a publicly accessible `http` or `https` address. The image must be in JPG, JPEG, PNG, BMP, or WEBP format. The resolution must be between 256×256 and 2049×2049 pixels, and the file size cannot exceed 10 MB.<br>
   * 
   * @example
   * https://ae01.alicdn.com/kf/S342f0070dc9f4be09a6cbed34e90dc8fs.jpg
   */
  clothImageUrl?: string;
  /**
   * @remarks
   * The clothing type. If specified, valid values are tops, bottoms, dresses, tops_and_bottoms, shoes, and hats. If this parameter is not specified, the clothing type is automatically identified.
   * 
   * @example
   * tops
   */
  clothType?: string;
  /**
   * @remarks
   * The model tier. Set the value to lite. This parameter is required.
   * 
   * @example
   * lite
   */
  mode?: string;
  /**
   * @remarks
   * The URL of the model image. Only one image is supported. The URL must be a publicly accessible `http` or `https` address. The image must be in JPG, JPEG, PNG, BMP, or WEBP format. The resolution must be between 256×256 and 2049×2049 pixels, and the file size cannot exceed 10 MB.<br>
   * 
   * This parameter is required.
   * 
   * @example
   * https://ae01.alicdn.com/kf/S342f0070dc9f4be09a6cbed34e90dc8fs.jpg
   */
  modelImageUrl?: string;
  /**
   * @remarks
   * The URL of the identity template image. Only one image is supported. This parameter is mutually exclusive with PoseTemplateUrl.
   * 
   * @example
   * https://xxxx
   */
  modelTemplateUrl?: string;
  /**
   * @remarks
   * The URL of the pose template image. Only one image is supported. This parameter is mutually exclusive with ModelTemplateUrl.
   * 
   * @example
   * https://xxxx
   */
  poseTemplateUrl?: string;
  /**
   * @remarks
   * The aspect ratio of the output image. Valid values: 1:1, 2:3, 3:4, and 9:16. This parameter is optional. If this parameter is not specified, the aspect ratio of the original model image is used.
   * 
   * @example
   * 1:1
   */
  ratio?: string;
  /**
   * @remarks
   * The resolution of the output image. Synchronous API operations only support 1K resolution.
   * 
   * This parameter is required.
   * 
   * @example
   * 1K
   */
  resolution?: string;
  /**
   * @remarks
   * The try-on type. Valid values: singletryon and multitryon. This parameter is optional. If this parameter is not specified, the workflow defaults to singletryon based on whether a product image is provided.
   * 
   * @example
   * singletryon
   */
  tryonType?: string;
  static names(): { [key: string]: string } {
    return {
      clothImageUrl: 'ClothImageUrl',
      clothType: 'ClothType',
      mode: 'Mode',
      modelImageUrl: 'ModelImageUrl',
      modelTemplateUrl: 'ModelTemplateUrl',
      poseTemplateUrl: 'PoseTemplateUrl',
      ratio: 'Ratio',
      resolution: 'Resolution',
      tryonType: 'TryonType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clothImageUrl: 'string',
      clothType: 'string',
      mode: 'string',
      modelImageUrl: 'string',
      modelTemplateUrl: 'string',
      poseTemplateUrl: 'string',
      ratio: 'string',
      resolution: 'string',
      tryonType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

