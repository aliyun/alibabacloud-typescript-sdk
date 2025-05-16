// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Personalizedtxt2imgAddModelTrainJobCmd extends $dara.Model {
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
   * 熊猫图片生成
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dog
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'imageUrl',
      name: 'name',
      objectType: 'objectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      objectType: 'string',
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

