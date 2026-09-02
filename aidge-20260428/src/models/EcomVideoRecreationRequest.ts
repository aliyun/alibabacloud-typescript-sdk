// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EcomVideoRecreationRequestInputProductInfo extends $dara.Model {
  /**
   * @remarks
   * The product category.  
   * Example: Women\\"s Clothing/Sun Protection Jacket
   * 
   * @example
   * Women\\"s clothing/sun protection clothing
   */
  category?: string;
  /**
   * @remarks
   * The actual product information (SKU, brand, color, material, size, specifications, logo, and usage), used to constrain voiceover facts.  
   * Example: Light moon yellow, cool-touch fabric, sun protection to the back of the hand, UPF50+
   * 
   * @example
   * Light moon yellow, cool-touch fabric, sun protection extending to the back of the hand, UPF50+
   */
  detail?: string;
  /**
   * @remarks
   * Required for product replacement. The name of the target product. Maximum length: 200 characters.  
   * Example: Light Moon Yellow Cool-touch Sun Protection Jacket
   * 
   * @example
   * Light moon yellow cool-touch sun protection clothing
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      detail: 'Detail',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      detail: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EcomVideoRecreationRequestInput extends $dara.Model {
  /**
   * @remarks
   * The description or supplementary constraints for the target person in person replacement mode. 1 to 500 characters. Required when PersonReferenceImageUrls is not provided.   
   * Example: The target person is an adult male. Retain the original clothing and actions.
   * 
   * @example
   * The target character is an adult male, with the original costume and movements preserved.
   */
  changeDescription?: string;
  /**
   * @remarks
   * The replacement mode. Valid values: `product_replacement` (default) and `person_replacement`.
   * 
   * @example
   * product_replacement
   */
  mode?: string;
  /**
   * @remarks
   * The URLs of target person reference images for person replacement. 1 to 5 images of the same person are supported. Arrange images in the following order: face close-up, front view, 45-degree angle, side view, and back view.  
   * Example: ["https://example.com/person.jpg"]
   */
  personReferenceImageUrls?: string[];
  /**
   * @remarks
   * The URL of the target product image. Required for product replacement. Exactly one image must be provided. A clear subject with no occlusion and a clean background is recommended.  
   * Example: ["https://example.com/product.png"]
   */
  productImageUrls?: string[];
  /**
   * @remarks
   * The target product information. Provide this parameter to improve voiceover accuracy.
   */
  productInfo?: EcomVideoRecreationRequestInputProductInfo;
  /**
   * @remarks
   * The HTTP(S) URL of the reference video. The video duration must be in the range of 2 to 360 seconds. The URL must remain accessible during task execution. Set the URL validity period to at least 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/source.mp4
   */
  sourceVideoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      changeDescription: 'ChangeDescription',
      mode: 'Mode',
      personReferenceImageUrls: 'PersonReferenceImageUrls',
      productImageUrls: 'ProductImageUrls',
      productInfo: 'ProductInfo',
      sourceVideoUrl: 'SourceVideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeDescription: 'string',
      mode: 'string',
      personReferenceImageUrls: { 'type': 'array', 'itemType': 'string' },
      productImageUrls: { 'type': 'array', 'itemType': 'string' },
      productInfo: EcomVideoRecreationRequestInputProductInfo,
      sourceVideoUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.personReferenceImageUrls)) {
      $dara.Model.validateArray(this.personReferenceImageUrls);
    }
    if(Array.isArray(this.productImageUrls)) {
      $dara.Model.validateArray(this.productImageUrls);
    }
    if(this.productInfo && typeof (this.productInfo as any).validate === 'function') {
      (this.productInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EcomVideoRecreationRequestOutput extends $dara.Model {
  /**
   * @remarks
   * The target duration in seconds. `"auto"` (default): determined by the system. For product replacement, an integer from 5 to 60 can be specified. For person replacement, only `"auto"` is supported.
   * 
   * @example
   * auto
   */
  duration?: number;
  /**
   * @remarks
   * The output resolution. Default value: `720p`.
   * 
   * @example
   * 720p、1080p
   */
  quality?: string;
  /**
   * @remarks
   * The output aspect ratio. Default value: `auto` (automatically matches the original video).
   * 
   * @example
   * auto、9:16、3:4、1:1、4:3、16:9
   */
  ratio?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      quality: 'Quality',
      ratio: 'Ratio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      quality: 'string',
      ratio: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EcomVideoRecreationRequest extends $dara.Model {
  /**
   * @remarks
   * The input parameters for video remix.
   * 
   * This parameter is required.
   */
  input?: EcomVideoRecreationRequestInput;
  /**
   * @remarks
   * The output specifications for the final video.
   */
  output?: EcomVideoRecreationRequestOutput;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: EcomVideoRecreationRequestInput,
      output: EcomVideoRecreationRequestOutput,
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

