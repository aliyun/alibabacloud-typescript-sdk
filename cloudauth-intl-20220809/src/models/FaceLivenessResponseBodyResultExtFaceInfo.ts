// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceLivenessResponseBodyResultExtFaceInfo extends $dara.Model {
  faceAge?: number;
  /**
   * @example
   * Y
   */
  faceAttack?: string;
  faceGender?: string;
  /**
   * @example
   * 87.19
   */
  faceQualityScore?: number;
  /**
   * @example
   * Y
   */
  occlusionResult?: string;
  static names(): { [key: string]: string } {
    return {
      faceAge: 'FaceAge',
      faceAttack: 'FaceAttack',
      faceGender: 'FaceGender',
      faceQualityScore: 'FaceQualityScore',
      occlusionResult: 'OcclusionResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceAge: 'number',
      faceAttack: 'string',
      faceGender: 'string',
      faceQualityScore: 'number',
      occlusionResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

