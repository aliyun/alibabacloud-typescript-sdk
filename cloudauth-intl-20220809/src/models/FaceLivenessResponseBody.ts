// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceLivenessResponseBodyResultExtFaceInfo extends $dara.Model {
  /**
   * @remarks
   * The predicted reference age of the face. This parameter may be empty if the prediction fails.
   * 
   * @example
   * 18
   */
  faceAge?: number;
  /**
   * @remarks
   * The liveness detection result. Valid values: Y (attack detected) and N (normal).
   * 
   * @example
   * Y
   */
  faceAttack?: string;
  /**
   * @remarks
   * Detects the facial attributes of the main face (the face closest to the camera, with the largest facial area, and clear) in the input image. The detection result is returned as a string, which can be used for decision-making.
   * 
   * The returned fields are defined as follows:
   * 
   * **gender**: The gender of the main person. 1 indicates male, and 0 indicates female.
   * 
   * **glasses**: Indicates whether the main person is wearing glasses. 1 indicates detected, and 0 indicates not detected.
   * 
   * **hat**: Indicates whether the main person is wearing a hat (including headscarves or veils). 1 indicates detected, and 0 indicates not detected.
   * 
   * **mask**: Indicates whether the main person is wearing a mask. 1 indicates detected, and 0 indicates not detected.
   * 
   * **tattoo**: Indicates whether the main person has visible tattoos. 1 indicates detected, and 0 indicates not detected.
   * 
   * **smoking**: Indicates whether the main person is smoking. 1 indicates detected, and 0 indicates not detected.
   * 
   * **others**: Indicates whether there are other people present besides the main person. 1 indicates detected, and 0 indicates not detected.
   * 
   * **env**: The environment where the main person is located, such as an office, factory, hospital, or inside a vehicle. Valid values: office, hospital, factory, vehical, and other.
   * 
   * **expression**: Indicates whether the main person has an exaggerated expression (referring to strong facial expressions that are significantly different from a natural or calm state). 1 indicates detected, and 0 indicates not detected.
   * 
   * **age**: The actual age (in years) of the main person.
   * 
   * @example
   * {
   *         gender: 1
   *         glasses: 0
   *         hat: 1
   *         mask: 1
   *         tattoo: 0
   *         smoking: 0
   *         others: 1
   *         env：office
   *         expression：1
   *         age：16
   * }
   */
  faceAttributeInfo?: string;
  /**
   * @remarks
   * The predicted gender of the face in the image. This parameter may be empty if the prediction fails. Valid values:
   * - M: Male.
   * - F: Female.
   * 
   * @example
   * M
   */
  faceGender?: string;
  /**
   * @remarks
   * The face quality score, which ranges from 0 to 100. This parameter is returned only when the face quality score switch in the request parameters is turned on.
   * 
   * @example
   * 87.19
   */
  faceQualityScore?: number;
  /**
   * @remarks
   * The illumination score.
   * 
   * @example
   * 0.02
   */
  illuminationScore?: number;
  /**
   * @remarks
   * The occlusion score of the key area.
   * 
   * @example
   * 20
   */
  kaOcclusionScore?: number;
  /**
   * @remarks
   * The occlusion detection result. Valid values: Y (occluded) and N (not occluded). This parameter is returned only when the occlusion detection switch in the request parameters is turned on.
   * 
   * @example
   * Y
   */
  occlusionResult?: string;
  /**
   * @remarks
   * The occlusion score.
   * 
   * @example
   * 50.26
   */
  occlusionScore?: number;
  /**
   * @remarks
   * The sharpness score.
   * 
   * @example
   * 86.47
   */
  sharpnessScore?: number;
  static names(): { [key: string]: string } {
    return {
      faceAge: 'FaceAge',
      faceAttack: 'FaceAttack',
      faceAttributeInfo: 'FaceAttributeInfo',
      faceGender: 'FaceGender',
      faceQualityScore: 'FaceQualityScore',
      illuminationScore: 'IlluminationScore',
      kaOcclusionScore: 'KaOcclusionScore',
      occlusionResult: 'OcclusionResult',
      occlusionScore: 'OcclusionScore',
      sharpnessScore: 'SharpnessScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceAge: 'number',
      faceAttack: 'string',
      faceAttributeInfo: 'string',
      faceGender: 'string',
      faceQualityScore: 'number',
      illuminationScore: 'number',
      kaOcclusionScore: 'number',
      occlusionResult: 'string',
      occlusionScore: 'number',
      sharpnessScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceLivenessResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The face result information.
   */
  extFaceInfo?: FaceLivenessResponseBodyResultExtFaceInfo;
  /**
   * @remarks
   * Indicates whether the authentication is passed. Valid values:
   * - Y: Passed.
   * - N: Not passed.
   * 
   * @example
   * N
   */
  passed?: string;
  /**
   * @remarks
   * The sub-result code.
   * 
   * @example
   * 205
   */
  subCode?: string;
  /**
   * @remarks
   * The unique identifier of the authentication request.
   * 
   * @example
   * 08573be80f944d95ac812e019e3655a8
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      extFaceInfo: 'ExtFaceInfo',
      passed: 'Passed',
      subCode: 'SubCode',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extFaceInfo: FaceLivenessResponseBodyResultExtFaceInfo,
      passed: 'string',
      subCode: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    if(this.extFaceInfo && typeof (this.extFaceInfo as any).validate === 'function') {
      (this.extFaceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceLivenessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The prompt message returned in the response.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier generated by Alibaba Cloud for the request.
   * 
   * @example
   * 42EA58CA-5DF4-55D5-82C4-5E7A40DA62BA
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: FaceLivenessResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: FaceLivenessResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

