// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceVerifyIntlResponseBodyResultExtFaceInfo extends $dara.Model {
  /**
   * @remarks
   * The attribute detection result of the main face, returned as a string. The result includes information such as gender, glasses, hat, mask, tattoo, smoking, other people, environment, expression, and age.
   * 
   * @example
   * {"gender":1,"glasses":0,"hat":1,"mask":1,"tattoo":0,"smoking":0,"others":1,"env":"office","expression":1,"age":16}
   */
  faceAttributeInfo?: string;
  /**
   * @remarks
   * The quality score of the live face. Valid values: 0 to 100. A higher value indicates better quality.
   * 
   * @example
   * 39.04
   */
  faceQualityScore?: number;
  /**
   * @remarks
   * The algorithm score for illumination, which is a sub-dimension of quality judgment. Valid values: 0 to 100. A higher value indicates better quality.
   * 
   * @example
   * 97.43
   */
  illuminationScore?: number;
  /**
   * @remarks
   * The algorithm score for key area occlusion, which is a sub-dimension of quality judgment. Valid values: 0 to 100. A higher value indicates better quality.
   * 
   * @example
   * 100
   */
  kaOcclusionScore?: number;
  /**
   * @remarks
   * The algorithm score for occlusion, which is a sub-dimension of quality judgment. Valid values: 0 to 100. A higher value indicates better quality.
   * 
   * @example
   * 50.26
   */
  occlusionScore?: number;
  /**
   * @remarks
   * The image sharpness score, which is a sub-dimension of quality judgment. Valid values: 0 to 100. A higher value indicates better quality.
   * 
   * @example
   * 86.47
   */
  sharpnessScore?: number;
  /**
   * @remarks
   * The comprehensive quality score of the reference face image. Valid values: 0 to 100. A higher value indicates better quality.
   * 
   * @example
   * 39.04
   */
  targetFaceQualityScore?: number;
  /**
   * @remarks
   * The illumination score of the reference face image. Valid values: 0 to 100. A higher value indicates better quality.
   * 
   * @example
   * 0.02
   */
  targetIlluminationScore?: number;
  /**
   * @remarks
   * The key area occlusion score of the reference face image. Valid values: 0 to 100. A higher value indicates better quality.
   * 
   * @example
   * 20
   */
  targetKaOcclusionScore?: number;
  /**
   * @remarks
   * The occlusion score of the reference face image. Valid values: 0 to 100. A higher value indicates better quality.
   * 
   * @example
   * 50.26
   */
  targetOcclusionScore?: number;
  /**
   * @remarks
   * The sharpness score of the reference face image. Valid values: 0 to 100. A higher value indicates better quality.
   * 
   * @example
   * 86.47
   */
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
   * The face ID, user ID, and comparison score of the duplicate face in the face library when a duplicate face is retrieved.
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
   * The predicted reference age of the face. This parameter may not be returned if the prediction fails.
   * 
   * @example
   * 30
   */
  faceAge?: number;
  /**
   * @remarks
   * Indicates whether the collected face involves a liveness attack. Valid values:
   * - Y: attack detected.
   * - N: no attack detected.
   * This parameter is returned only when passive liveness detection is enabled.
   * 
   * @example
   * N
   */
  faceAttack?: string;
  /**
   * @remarks
   * The probability of a liveness attack detected by passive liveness detection. Valid values: 0 to 100.
   * This parameter is returned only when passive liveness detection is enabled.
   * 
   * @example
   * 99
   */
  faceAttackScore?: number;
  /**
   * @remarks
   * The comparison score between the submitted face photo and the reference face image during authentication. Valid values: 0 to 100.
   * 
   * @example
   * 95.0
   */
  faceComparisonScore?: number;
  /**
   * @remarks
   * The predicted gender of the face image. This parameter may not be returned if the prediction fails. Valid values:
   * - M: male.
   * - F: female.
   * 
   * @example
   * M
   */
  faceGender?: string;
  /**
   * @remarks
   * The final authentication result. Valid values:
   * - Y: passed.
   * - N: failed.
   * 
   * @example
   * Y
   */
  facePassed?: string;
  /**
   * @remarks
   * The FACEID returned when face registration succeeds. This parameter is returned only when automatic registration is enabled by the customer.
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
   * The unique identifier of the authentication request.
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
   * The response code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The response message.
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
   * The response result.
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

