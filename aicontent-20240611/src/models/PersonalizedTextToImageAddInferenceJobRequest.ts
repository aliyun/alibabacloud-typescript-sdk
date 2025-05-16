// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PersonalizedTextToImageAddInferenceJobRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  imageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  imageUrl?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a <special-token> in the snow
   */
  prompt?: string;
  /**
   * @example
   * 1
   */
  seed?: number;
  /**
   * @example
   * 1
   */
  strength?: number;
  /**
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

