// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Personalizedtxt2imgAddInferenceJobRequest extends $dara.Model {
  /**
   * @remarks
   * The number of images to generate. Note: Due to resource limits in the test environment, you can generate up to 10 images per request. The system automatically sets values greater than 10 to 10.
   * 
   * @example
   * 1
   */
  imageNumber?: number;
  /**
   * @remarks
   * The model ID to use for the inference job.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx-xxxx-xxxx
   */
  modelId?: string;
  /**
   * @remarks
   * An English prompt describing the image to generate. Replace the subject with . For example, change "a man in the snow" to "a in the snow", and "a photo of a girl" to "a photo of a ".
   * 
   * This parameter is required.
   * 
   * @example
   * a <special-token> in the snow
   */
  prompt?: string;
  /**
   * @remarks
   * The seed for the random number generator. Using the same seed ensures reproducible results. The value must be between -1 and 2,147,483,647. If the value is outside this range or is not specified, the system automatically generates a suitable seed.
   * 
   * @example
   * 1
   */
  seed?: number;
  static names(): { [key: string]: string } {
    return {
      imageNumber: 'imageNumber',
      modelId: 'modelId',
      prompt: 'prompt',
      seed: 'seed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageNumber: 'number',
      modelId: 'string',
      prompt: 'string',
      seed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

