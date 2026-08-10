// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceVerifyIntlResponseBodyResultExtFaceInfo extends $dara.Model {
  faceAttributeInfo?: string;
  /**
   * @remarks
   * The liveness face quality score. Value range: 0 to 100. A higher value indicates better quality.
   * 
   * @example
   * 39.04
   */
  faceQualityScore?: number;
  /**
   * @remarks
   * The algorithm score for illumination as a sub-dimension of quality assessment. Value range: 0 to 100. A higher value indicates better quality.
   * 
   * @example
   * 97.43
   */
  illuminationScore?: number;
  /**
   * @remarks
   * The algorithm score for key area occlusion as a sub-dimension of quality assessment. Value range: 0 to 100. A higher value indicates better quality.
   * 
   * @example
   * 100
   */
  kaOcclusionScore?: number;
  /**
   * @remarks
   * The algorithm score for occlusion as a sub-dimension of quality assessment. Value range: 0 to 100. A higher value indicates better quality.
   * 
   * @example
   * 50.26
   */
  occlusionScore?: number;
  /**
   * @remarks
   * The image sharpness score as a sub-dimension of quality assessment. Value range: 0 to 100. A higher value indicates better quality.
   * 
   * @example
   * 86.47
   */
  sharpnessScore?: number;
  targetFaceQualityScore?: number;
  targetIlluminationScore?: number;
  targetKaOcclusionScore?: number;
  targetOcclusionScore?: number;
  targetSharpnessScore?: number;
  static names(): { [key: string]: string } {
    return {
      faceAttributeInfo: 'FaceAttributeInfo',
      faceQualityScore: 'FaceQualityScore',
      illuminationScore: 'IlluminationScore',
      kaOcclusionScore: 'KaOcclusionScore',
      occlusionScore: 'OcclusionScore',
      sharpnessScore: 'SharpnessScore',
      targetFaceQualityScore: 'TargetFaceQualityScore',
      targetIlluminationScore: 'TargetIlluminationScore',
      targetKaOcclusionScore: 'TargetKaOcclusionScore',
      targetOcclusionScore: 'TargetOcclusionScore',
      targetSharpnessScore: 'TargetSharpnessScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceAttributeInfo: 'string',
      faceQualityScore: 'number',
      illuminationScore: 'number',
      kaOcclusionScore: 'number',
      occlusionScore: 'number',
      sharpnessScore: 'number',
      targetFaceQualityScore: 'number',
      targetIlluminationScore: 'number',
      targetKaOcclusionScore: 'number',
      targetOcclusionScore: 'number',
      targetSharpnessScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceVerifyIntlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The face ID, user ID, and comparison score of the corresponding face in the face library when a duplicate face is found during retrieval.
   * 
   * @example
   * [
   *     {
   *         "faceGroupCode": "sg7****uzt",
   *         "faceId": "f5a921*******9e792ec84c8f0ca592a",
   *         "merchantUserId": "fa****01"
   *     }
   * ]
   */
  duplicateFace?: string;
  /**
   * @remarks
   * The additional face result information.
   */
  extFaceInfo?: FaceVerifyIntlResponseBodyResultExtFaceInfo;
  /**
   * @remarks
   * The predicted reference age of the face. Prediction may fail and the value may not be returned in some cases.
   * 
   * @example
   * 30
   */
  faceAge?: number;
  /**
   * @remarks
   * Indicates whether the captured face involves a liveness attack. Valid values:
   * - Y: attack detected.
   * - N: no attack detected.
   * 
   * Returned when passive liveness detection is enabled.
   * 
   * @example
   * N
   */
  faceAttack?: string;
  /**
   * @remarks
   * The probability of a passive liveness detection attack on the face. Value range: 0 to 100. Returned when passive liveness detection is enabled.
   * 
   * @example
   * 99
   */
  faceAttackScore?: number;
  /**
   * @remarks
   * The comparison score between the submitted face image and the reference face image during verification. Value range: 0 to 100.
   * 
   * @example
   * 95.0
   */
  faceComparisonScore?: number;
  /**
   * @remarks
   * The predicted gender of the face image. Prediction may fail and the value may not be returned in some cases. Valid values:
   * - M: male.
   * - F: female.
   * 
   * @example
   * M
   */
  faceGender?: string;
  /**
   * @remarks
   * The final verification result. Valid values:
   * - Y: passed.
   * - N: not passed.
   * 
   * @example
   * Y
   */
  facePassed?: string;
  /**
   * @remarks
   * The corresponding FACEID returned only when the customer has enabled automatic registration and the face is registered successfully.
   * 
   * @example
   * 9e792ec84c8f0ca592a
   */
  faceRegistrationId?: string;
  /**
   * @remarks
   * The face registration result. Valid values: 
   * - 0: failed. 
   * - 1: succeeded.
   * 
   * @example
   * 0
   */
  faceRegistrationResult?: number;
  /**
   * @remarks
   * The sub-result code.
   * 
   * @example
   * 200
   */
  subCode?: string;
  /**
   * @remarks
   * The unique identifier of the verification request.
   * 
   * @example
   * 4ab0b***cbde97
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      duplicateFace: 'DuplicateFace',
      extFaceInfo: 'ExtFaceInfo',
      faceAge: 'FaceAge',
      faceAttack: 'FaceAttack',
      faceAttackScore: 'FaceAttackScore',
      faceComparisonScore: 'FaceComparisonScore',
      faceGender: 'FaceGender',
      facePassed: 'FacePassed',
      faceRegistrationId: 'FaceRegistrationId',
      faceRegistrationResult: 'FaceRegistrationResult',
      subCode: 'SubCode',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duplicateFace: 'string',
      extFaceInfo: FaceVerifyIntlResponseBodyResultExtFaceInfo,
      faceAge: 'number',
      faceAttack: 'string',
      faceAttackScore: 'number',
      faceComparisonScore: 'number',
      faceGender: 'string',
      facePassed: 'string',
      faceRegistrationId: 'string',
      faceRegistrationResult: 'number',
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

export class FaceVerifyIntlResponseBody extends $dara.Model {
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
   * The return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5E63B760-0ECB-5C07-8503-A65C27876968
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: FaceVerifyIntlResponseBodyResult;
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
      result: FaceVerifyIntlResponseBodyResult,
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

