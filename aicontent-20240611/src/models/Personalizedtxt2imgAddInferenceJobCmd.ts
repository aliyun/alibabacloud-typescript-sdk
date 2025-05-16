// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Personalizedtxt2imgAddInferenceJobCmd extends $dara.Model {
  /**
   * @example
   * 1
   */
  imageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx-xxxx-xxxx
   */
  modelId?: string;
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

