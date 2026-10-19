// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EcomVideoRecreationRequestInputProductInfo extends $dara.Model {
  /**
   * @remarks
   * The product category.  
   * Example value: Women\\"s clothing/Sun protection clothing.
   * 
   * @example
   * Women\\"s clothing/sun protection clothing
   */
  category?: string;
  /**
   * @remarks
   * The actual product information, such as SKU, brand, color, material, size, specifications, logo, and usage instructions. This information is used to constrain the facts in the voiceover.  
   * Example value: Pale moon yellow, cool-touch fabric, sun protection down to the back of the hand, UPF50+
   * 
   * @example
   * Light moon yellow, cool-touch fabric, sun protection extending to the back of the hand, UPF50+
   */
  detail?: string;
  /**
   * @remarks
   * The name of the target product. This parameter is required for product replacement. The maximum length is 200 characters.  
   * Example value: Pale moon yellow cool-touch sun protection clothing.
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
   * The description or supplementary constraints for the target person in person replacement. The length is 1 to 500 characters. This parameter is required when PersonReferenceImageUrls is not provided.   
   * Example value: The target person is an adult male, retaining the original clothing and actions.
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
   * The URLs of the reference images for the target person in person replacement. You can provide 1 to 5 images, which must be of the same person. We recommend that you arrange the images in the order of facial close-up, front, 45-degree angle, side, and back.  
   * Example value: ["https://example.com/person.jpg"]
   */
  personReferenceImageUrls?: string[];
  /**
   * @remarks
   * The URLs of the target product images. This parameter is required for product replacement. You can upload 1 to 8 images for the same SKU. We recommend that the main subject is clear, unobstructed, and has a clean background.   
   * Example value: ["https://example.com/product.png"]
   */
  productImageUrls?: string[];
  /**
   * @remarks
   * The target product information. We recommend that you specify this parameter to improve the accuracy of the voiceover.
   */
  productInfo?: EcomVideoRecreationRequestInputProductInfo;
  /**
   * @remarks
   * The generation mode. Default value: `reference`. Valid values: `reference` (directly references the original video) and `rebuild` (breaks down the original video before regenerating it).
   * 
   * @example
   * reference
   */
  recreateMode?: string;
  /**
   * @remarks
   * The HTTP(S) URL of the reference video. The duration ranges from 2 to 360 seconds. The URL must remain accessible during task execution. We recommend that the validity period is no less than 24 hours.
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
      recreateMode: 'RecreateMode',
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
      recreateMode: 'string',
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
   * The target duration in seconds. In `reference` mode, the input value is ignored and forced to -1, which follows the duration of the original video. In `rebuild` mode, you can pass an integer from 5 to 60, or pass -1 to indicate an automatic duration.
   * 
   * @example
   * -1
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
   * The input parameters for video variation generation.
   * 
   * This parameter is required.
   */
  input?: EcomVideoRecreationRequestInput;
  /**
   * @remarks
   * The output specifications for the generated video.
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

