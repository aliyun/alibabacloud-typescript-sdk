// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectSkinDiseaseResponseBodyData extends $dara.Model {
  /**
   * @example
   * leg
   */
  bodyPart?: string;
  /**
   * @example
   * 90.9812
   */
  imageQuality?: number;
  /**
   * @example
   * skin_lesion
   */
  imageType?: string;
  results?: { [key: string]: any };
  /**
   * @example
   * "psoriasis": 0.998,                     "eczema_dermatitis": 0.0011,                     "lupus_erythematosus": 0.0004
   */
  resultsEnglish?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      bodyPart: 'BodyPart',
      imageQuality: 'ImageQuality',
      imageType: 'ImageType',
      results: 'Results',
      resultsEnglish: 'ResultsEnglish',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyPart: 'string',
      imageQuality: 'number',
      imageType: 'string',
      results: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resultsEnglish: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.results) {
      $dara.Model.validateMap(this.results);
    }
    if(this.resultsEnglish) {
      $dara.Model.validateMap(this.resultsEnglish);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

