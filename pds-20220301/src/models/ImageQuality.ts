// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageQuality extends $dara.Model {
  /**
   * @example
   * 0.736
   */
  overallScore?: number;
  static names(): { [key: string]: string } {
    return {
      overallScore: 'overall_score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overallScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

