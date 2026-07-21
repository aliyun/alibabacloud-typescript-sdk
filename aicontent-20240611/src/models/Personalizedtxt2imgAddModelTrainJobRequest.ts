// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Personalizedtxt2imgAddModelTrainJobRequest extends $dara.Model {
  /**
   * @remarks
   * A list of one or more image URLs for training. For example: ["url_1", "url_2", ...]
   * 
   * This parameter is required.
   */
  imageUrl?: string[];
  /**
   * @remarks
   * The name of the model training job.
   * 
   * This parameter is required.
   * 
   * @example
   * 熊猫图片生成
   */
  name?: string;
  /**
   * @remarks
   * A single word that defines the object type in the training images, such as "girl", "person", "man", "boy", or "dog".
   * 
   * This parameter is required.
   * 
   * @example
   * dog
   */
  objectType?: string;
  /**
   * @remarks
   * The number of training steps for the model training job.
   * 
   * @example
   * 800
   */
  trainSteps?: number;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'imageUrl',
      name: 'name',
      objectType: 'objectType',
      trainSteps: 'trainSteps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      objectType: 'string',
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

