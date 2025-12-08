// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class CompareFaceWithMaskAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  imageURLAObject?: Readable;
  /**
   * @remarks
   * This parameter is required.
   */
  imageURLBObject?: Readable;
  /**
   * @example
   * 97.0
   */
  qualityScoreThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLAObject: 'ImageURLA',
      imageURLBObject: 'ImageURLB',
      qualityScoreThreshold: 'QualityScoreThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLAObject: 'Readable',
      imageURLBObject: 'Readable',
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

