// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageQuality extends $dara.Model {
  /**
   * @remarks
   * The overall quality score of the image. The image is automatically evaluated by AI. The evaluation is mainly based on subjective aesthetics and is affected by various factors, such as composition, brightness, contrast, color, and definition. Valid values: 0 to 1. The higher the score, the better the quality.
   * 
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

