// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectImageScoreResponseBodyImageScore extends $dara.Model {
  /**
   * @remarks
   * The overall quality score.
   * 
   * @example
   * 0.6
   */
  overallQualityScore?: number;
  static names(): { [key: string]: string } {
    return {
      overallQualityScore: 'OverallQualityScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overallQualityScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

