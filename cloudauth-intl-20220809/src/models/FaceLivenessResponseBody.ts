// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceLivenessResponseBodyResultExtFaceInfo extends $dara.Model {
  /**
   * @remarks
   * The predicted reference age based on the face. The prediction may fail and return no value.
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
   * The predicted gender based on the face photo. The prediction may fail and return no value. Valid values:
   * 
   * - M: male.
   * - F: female.
   * 
   * @example
   * M
   */
  faceGender?: string;
  /**
   * @remarks
   * The face quality score (0 to 100). This value is returned only when the face quality score switch is enabled in the request parameters.
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
   * The key area occlusion score.
   * 
   * @example
   * 20
   */
  kaOcclusionScore?: number;
  /**
   * @remarks
   * The occlusion detection result. Valid values: Y (occluded) and N (not occluded). This value is returned only when the occlusion detection switch is enabled.
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
   * Indicates whether the authentication passed. Valid values:
   * 
   * - Y: passed.
   * - N: not passed.
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
   * The unique ID of the authentication request.
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
   * The message returned with the result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID that Alibaba Cloud generates for the request.
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

