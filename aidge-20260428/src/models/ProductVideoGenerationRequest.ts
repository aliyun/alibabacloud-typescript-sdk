// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProductVideoGenerationRequest extends $dara.Model {
  /**
   * @remarks
   * The aspect ratio of the video. Default value: 9:16. Valid values: 16:9, 1:1, 3:4, and 9:16.
   * 
   * @example
   * 9:16
   */
  aspectRatio?: string;
  /**
   * @remarks
   * The duration of the video in seconds. Default value: 15. If no script is provided, the value must be an integer from 5 to 15. If a script is provided, the value must be an integer from 5 to 30. A value of 15.0 is treated as 15.
   * 
   * @example
   * 15
   */
  duration?: number;
  /**
   * @remarks
   * The public image URLs. At least one image URL is required. Each URL must start with http:// or https:// after leading and trailing whitespaces are removed.
   * 
   * This parameter is required.
   */
  productImages?: string[];
  /**
   * @remarks
   * The product title. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * White minimalist ceramic mug
   */
  productTitle?: string;
  /**
   * @remarks
   * The resolution of the video. Default value: 720P. Valid values: 720P and 1080P. The value is case-insensitive and is automatically converted to uppercase by the service.
   * 
   * @example
   * 720P
   */
  resolution?: string;
  /**
   * @remarks
   * The existing storyboard script. If this parameter is not provided or is left blank, automatic planning is used.
   * 
   * @example
   * create a dog
   */
  script?: string;
  static names(): { [key: string]: string } {
    return {
      aspectRatio: 'aspect_ratio',
      duration: 'duration',
      productImages: 'product_images',
      productTitle: 'product_title',
      resolution: 'resolution',
      script: 'script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aspectRatio: 'string',
      duration: 'number',
      productImages: { 'type': 'array', 'itemType': 'string' },
      productTitle: 'string',
      resolution: 'string',
      script: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.productImages)) {
      $dara.Model.validateArray(this.productImages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

