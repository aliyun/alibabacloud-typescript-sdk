// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GeneralImageGenerationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The task type. Select the generation method.   
   * text_to_image: Generate images using only text descriptions.   
   * image_to_image: Generate or edit images based on existing images.
   * 
   * This parameter is required.
   * 
   * @example
   * text_to_image
   */
  jobType?: string;
  /**
   * @remarks
   * The generation mode. The lite mode is faster and more cost-effective. The plus mode produces finer visual effects and supports more reference images.
   * 
   * This parameter is required.
   * 
   * @example
   * lite
   */
  mode?: string;
  /**
   * @remarks
   * The number of images generated per call. Valid values: 1 to 4. Default value: 1.
   * 
   * @example
   * 1
   */
  n?: number;
  /**
   * @remarks
   * The specific operation for image generation or editing. Only one operation can be selected. Valid values:   
   * [general] scenario
   * *   general_generate (General generation)
   *     
   * *   outpaint (AI outpainting)
   *     
   * [product_ecommerce] scenario
   *     
   * *   scene_generate (Scene image generation)
   *     
   * *   product_replace (Product replacement)
   *     
   * [cloth_ecommerce] scenario
   *     
   * *   model_generate (Model image generation)
   *     
   * [product_ecommerce] scenario & [cloth_ecommerce] scenario
   *     
   * *   detail_generate (Detail image generation)
   *     
   * *   selling_point_generate (Selling point image generation)
   *     
   * *   scene_variation (Scene variation)
   *     
   * *   subject_extract (Subject extraction)
   *     
   * *   recolor (Recolor)
   * 
   * This parameter is required.
   * 
   * @example
   * generate_generate
   */
  operation?: string;
  /**
   * @remarks
   * The content of the image you want to generate. Enter only one prompt, up to 5,000 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * A white ceramic cup placed in a simple studio background
   */
  prompt?: string;
  /**
   * @remarks
   * Specifies whether automatic optimization is enabled for the entered prompt. When the optimization is enabled, it completes image details to make the generated effect closer to the description. Default value: true.
   * 
   * @example
   * true
   */
  promptExtend?: boolean;
  /**
   * @remarks
   * The aspect ratio of the image. Valid values: 1:1, 2:3, 3:2, 4:3, 3:4, 16:9, and 9:16. Default value: 1:1.
   * 
   * @example
   * 1:1
   */
  ratio?: string;
  /**
   * @remarks
   * The URLs of the reference images. Enter publicly accessible links.
   * Used only for image-to-image generation. Not supported for text-to-image generation.
   * The number of images that can be uploaded varies by mode: up to 3 images in lite mode, and up to 9 images in plus mode.
   * 
   * @example
   * ["https://example.com/referece.jpg"]
   */
  referenceUrlShrink?: string;
  /**
   * @remarks
   * The resolution of the output image. Valid values: 1K and 2K. Default value: 1K.
   * 
   * @example
   * 1K
   */
  resolution?: string;
  /**
   * @remarks
   * The scenario. Valid values: general (general scenario), product_ecommerce (general product scenario), and cloth_ecommerce (apparel and accessories scenario). Only one scenario can be selected.
   * *   If the task type is text_to_image, only general is supported.
   *     
   * *   If the task type is image_to_image, general, product_ecommerce, and cloth_ecommerce are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * general
   */
  scene?: string;
  /**
   * @remarks
   * Specifies whether to add a watermark to the generated image. Default value: false.
   * 
   * @example
   * false
   */
  watermark?: boolean;
  static names(): { [key: string]: string } {
    return {
      jobType: 'JobType',
      mode: 'Mode',
      n: 'N',
      operation: 'Operation',
      prompt: 'Prompt',
      promptExtend: 'PromptExtend',
      ratio: 'Ratio',
      referenceUrlShrink: 'ReferenceUrl',
      resolution: 'Resolution',
      scene: 'Scene',
      watermark: 'Watermark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobType: 'string',
      mode: 'string',
      n: 'number',
      operation: 'string',
      prompt: 'string',
      promptExtend: 'boolean',
      ratio: 'string',
      referenceUrlShrink: 'string',
      resolution: 'string',
      scene: 'string',
      watermark: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

