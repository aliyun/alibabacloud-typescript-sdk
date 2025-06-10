// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenChestCTResponseBodyDataPredictCVDLesionFeatureScore } from "./ScreenChestCtresponseBodyDataPredictCvdlesionFeatureScore";


export class ScreenChestCTResponseBodyDataPredictCVDLesion extends $dara.Model {
  CVDProbability?: number;
  featureScore?: ScreenChestCTResponseBodyDataPredictCVDLesionFeatureScore;
  imagesURL?: string;
  resultURL?: string[];
  static names(): { [key: string]: string } {
    return {
      CVDProbability: 'CVDProbability',
      featureScore: 'FeatureScore',
      imagesURL: 'ImagesURL',
      resultURL: 'ResultURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CVDProbability: 'number',
      featureScore: ScreenChestCTResponseBodyDataPredictCVDLesionFeatureScore,
      imagesURL: 'string',
      resultURL: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.featureScore && typeof (this.featureScore as any).validate === 'function') {
      (this.featureScore as any).validate();
    }
    if(Array.isArray(this.resultURL)) {
      $dara.Model.validateArray(this.resultURL);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

