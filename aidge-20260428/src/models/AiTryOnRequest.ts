// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiTryOnRequest extends $dara.Model {
  /**
   * @remarks
   * The list of product image URLs. This parameter is required for single-item and multi-item outfit scenarios.   
   * * Single-item try-on: Pass images of the same product from different angles. The standard edition supports up to two product images, but requires that all images contain one and only one main product. We recommend that you use product images with a white background.   
   * * Multi-item outfit: Pass images of all products to be worn. The standard edition supports up to two product images (each image can contain multiple products). A single outfit can include up to six clothing items and accessories.   
   * Note: For the clothing replacement, face replacement, and posture replacement modes, specify only one mode per call. Do not upload parameters for multiple modes at the same time.
   * 
   * @example
   * https://ae01.alicdn.com/kf/S3470dc9f4be09a6cbed34e90dc8fs.jpg
   */
  clothImageUrl?: string;
  /**
   * @remarks
   * Specifies the types of products to try on. You can specify multiple types at a time. If you do not specify this parameter, the system automatically identifies all supported categories in the product image.   
   * Valid values: tops, outwear, bottoms, dresses, tops and bottoms, socks, shoes, hats, earrings, necklaces, braceles, scarves, bags, and glasses.
   * 
   * @example
   * tops
   */
  clothType?: string;
  /**
   * @remarks
   * The try-on mode, which determines the maximum number of product images and outfit items. Currently, only `lite` is supported.
   * 
   * @example
   * lite
   */
  mode?: string;
  /**
   * @remarks
   * The URL of the model scene image. You can specify only one image.   
   * * The image must support public network access over HTTP or HTTPS.   
   * * Supported formats: JPG, JPEG, PNG, BMP, and WEBP.   
   * * The width and height must be between 256 and 2049 pixels.   
   * * The size of a single file cannot exceed 10 MB.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/model.jpg\
   */
  modelImageUrl?: string;
  /**
   * @remarks
   * The URL of the model template image. You can specify only one image. This image provides reference identity information such as gender, skin color, age, and body type.   
   * This parameter is required for the model skin replacement scenario. Do not specify this parameter for the clothing replacement or posture replacement scenarios. For the clothing replacement, face replacement, and posture replacement modes, specify only one mode per call. Do not upload parameters for multiple modes at the same time.    
   * We recommend that you use the official model templates. Experience URL: [E-commerce Operation Assistant Aidge console](https://ecoa.console.aliyun.com/translate?category=assetOptimize&apiType=VirtualTryOn)
   * 
   * @example
   * https://xxxx
   */
  modelTemplateUrl?: string;
  /**
   * @remarks
   * The URL of the posture template image. You can specify only one image. This image provides a reference for the person\"s posture.
   * This parameter is required for the posture fission scenario.
   * If this parameter is specified, the image is generated based on the template posture.
   * If this parameter is not specified, the posture in the scene image is used if a model scene image is provided. Otherwise, the posture in the model source image is preserved.
   * Note: For the clothing replacement, face replacement, and posture replacement modes, specify only one mode per call. Do not upload parameters for multiple modes at the same time.
   * We recommend that you use the official posture templates. Experience URL: [E-commerce Operation Assistant Aidge console](https://ecoa.console.aliyun.com/translate?category=assetOptimize&apiType=VirtualTryOn)
   * 
   * @example
   * https://xxxx
   */
  poseTemplateUrl?: string;
  /**
   * @remarks
   * The aspect ratio of the output image. By default, the aspect ratio is the same as that of the original image specified by ModelImageUrl. Valid values: 1:1, 2:3, 3:4, and 9:16.
   * 
   * @example
   * 1:1
   */
  ratio?: string;
  /**
   * @remarks
   * The resolution of the output image.
   * * Synchronous API: supports 1K.
   * * Asynchronous API: supports 1K and 2K. The asynchronous API only supports single-item outfit scenarios.
   * 
   * This parameter is required.
   * 
   * @example
   * 1K
   */
  resolution?: string;
  /**
   * @remarks
   * This parameter takes effect only in try-on scenarios and specifies the number of products to try on. Default value: `singletryon`.   
   * Valid values:   
   * * `singletryon`: single-item try-on.   
   * * `multitryon`: multi-item outfit.
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

