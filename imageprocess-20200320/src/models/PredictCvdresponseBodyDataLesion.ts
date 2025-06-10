// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PredictCVDResponseBodyDataLesionFeatureScore } from "./PredictCvdresponseBodyDataLesionFeatureScore";


export class PredictCVDResponseBodyDataLesion extends $dara.Model {
  /**
   * @example
   * 0.5
   */
  CVDProbability?: number;
  featureScore?: PredictCVDResponseBodyDataLesionFeatureScore;
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
      featureScore: PredictCVDResponseBodyDataLesionFeatureScore,
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

