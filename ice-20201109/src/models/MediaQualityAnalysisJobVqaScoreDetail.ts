// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaQualityAnalysisJobVqaScoreDetail extends $dara.Model {
  intensityValue?: number;
  perceptualScore?: number;
  static names(): { [key: string]: string } {
    return {
      intensityValue: 'IntensityValue',
      perceptualScore: 'PerceptualScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intensityValue: 'number',
      perceptualScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

