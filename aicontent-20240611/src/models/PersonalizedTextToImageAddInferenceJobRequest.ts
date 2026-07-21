// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PersonalizedTextToImageAddInferenceJobRequest extends $dara.Model {
  /**
   * @remarks
   * The number of images to generate. Note: The maximum is 10 images per request in the test environment. If the value exceeds 10, it is treated as 10.
   * 
   * @example
   * 1
   */
  imageNumber?: number;
  /**
   * @remarks
   * An array containing one or more image URLs. For example, `["url_1", "url_2", ...]`.
   * 
   * This parameter is required.
   */
  imageUrl?: string[];
  /**
   * @remarks
   * The English prompt for image generation. Use the placeholder for the subject. For example, change "a man in the snow" to "a in the snow".
   * 
   * This parameter is required.
   * 
   * @example
   * a <special-token> in the snow
   */
  prompt?: string;
  /**
   * @remarks
   * A random seed to ensure reproducible image generation. The value must be within `[-1, 2147483647]`. If the value is outside this range or omitted, the system automatically generates a seed.
   * 
   * @example
   * 1
   */
  seed?: number;
  /**
   * @remarks
   * Determines the influence of the reference image.
   * Valid values: `0.3`, `0.4`, `0.5`, `0.6`, `0.7`, and `0.8`.
   * A lower value decreases the influence of the reference image and increases the influence of the text prompt.
   * The default is `0.5`, and you typically do not need to change this value.
   * 
   * @example
   * 1
   */
  strength?: number;
  /**
   * @remarks
   * The number of training steps for the model.
   * 
   * @example
   * 800
   */
  trainSteps?: number;
  static names(): { [key: string]: string } {
    return {
      imageNumber: 'imageNumber',
      imageUrl: 'imageUrl',
      prompt: 'prompt',
      seed: 'seed',
      strength: 'strength',
      trainSteps: 'trainSteps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageNumber: 'number',
      imageUrl: { 'type': 'array', 'itemType': 'string' },
      prompt: 'string',
      seed: 'number',
      strength: 'number',
      trainSteps: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.imageUrl)) {
      $dara.Model.validateArray(this.imageUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

