// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageScore extends $dara.Model {
  /**
   * @remarks
   * The score for the overall image quality. The image is automatically evaluated by AI. The evaluation is mainly based on subjective aesthetics and is affected by various factors, such as composition, brightness, contrast, color, and definition.
   * 
   * Valid values: 0 to 1. A higher value indicates better quality.
   * 
   * @example
   * 0.736
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

