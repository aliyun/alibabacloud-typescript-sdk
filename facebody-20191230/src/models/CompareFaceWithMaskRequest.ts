// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompareFaceWithMaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  imageURLA?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  imageURLB?: string;
  /**
   * @example
   * 97.0
   */
  qualityScoreThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLA: 'ImageURLA',
      imageURLB: 'ImageURLB',
      qualityScoreThreshold: 'QualityScoreThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLA: 'string',
      imageURLB: 'string',
      qualityScoreThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

