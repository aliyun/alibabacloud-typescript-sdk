// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceDuplicationCheckIntlResponseBodyResultExtFaceInfo extends $dara.Model {
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
   * The overall quality score.
   * 
   * @example
   * 39.04
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
  /**
   * @remarks
   * The overall quality score of the retained face image. Valid values: 0 to 100. A higher score indicates better quality.
   * 
   * @example
   * 39.04
   */
  targetFaceQualityScore?: number;
  /**
   * @remarks
   * The illumination score of the retained face image. Valid values: 0 to 100. A higher score indicates better quality.
   * 
   * @example
   * 0.02
   */
  targetIlluminationScore?: number;
  /**
   * @remarks
   * The key area occlusion score of the retained face image. Valid values: 0 to 100. A higher score indicates better quality.
   * 
   * @example
   * 20
   */
  targetKaOcclusionScore?: number;
  /**
   * @remarks
   * The occlusion score of the retained face image. Valid values: 0 to 100. A higher score indicates better quality.
   * 
   * @example
   * 50.26
   */
  targetOcclusionScore?: number;
  /**
   * @remarks
   * The sharpness score of the retained face image. Valid values: 0 to 100. A higher score indicates better quality.
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

export class FaceDuplicationCheckIntlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The face ID and user ID retrieved from the face library when a duplicate face is detected.
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
   * The extended face information.
   */
  extFaceInfo?: FaceDuplicationCheckIntlResponseBodyResultExtFaceInfo;
  /**
   * @remarks
   * The predicted reference age of the face. This parameter may not be returned if the prediction fails.
   * 
   * @example
   * 30
   */
  faceAge?: string;
  /**
   * @remarks
   * Specifies whether the collected face involves a liveness attack. Valid values: Y (attack) and N (no attack). This parameter is returned only when passive liveness detection is enabled.
   * 
   * @example
   * N
   */
  faceAttack?: string;
  /**
   * @remarks
   * The probability of a liveness attack detected by passive liveness detection. Valid values: 0 to 100. This parameter is returned only when passive liveness detection is enabled.
   * 
   * @example
   * 99
   */
  faceAttackScore?: string;
  /**
   * @remarks
   * The 1:1 verification comparison score returned when the verification mode is 1 or 2. The score ranges from 0 to 100.
   * 
   * @example
   * 98
   */
  faceComparisonScore?: string;
  /**
   * @remarks
   * The predicted gender of the face image. This parameter may not be returned if the prediction fails. Valid values:
   * - M: Male.
   * - F: Female.
   * 
   * @example
   * M
   */
  faceGender?: string;
  /**
   * @remarks
   * The final authentication result. Valid values:
   * - Y: Passed.
   * - N: Failed.
   * 
   * @example
   * Y
   */
  facePassed?: string;
  /**
   * @remarks
   * The face ID returned only when automatic registration is configured by the customer and the face is successfully registered.
   * 
   * @example
   * 9e792ec84c8f0ca592a
   */
  faceRegistrationId?: string;
  /**
   * @remarks
   * The face registration result. Valid values: 
   * - 0: Failed. 
   * - 1: Succeeded.
   * 
   * @example
   * 0
   */
  faceRegistrationResult?: number;
  /**
   * @remarks
   * The description of the authentication result. For more information, see the ResultObject.SubCode error code description.
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
      extFaceInfo: FaceDuplicationCheckIntlResponseBodyResultExtFaceInfo,
      faceAge: 'string',
      faceAttack: 'string',
      faceAttackScore: 'string',
      faceComparisonScore: 'string',
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

export class FaceDuplicationCheckIntlResponseBody extends $dara.Model {
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
   * The return result.
   */
  result?: FaceDuplicationCheckIntlResponseBodyResult;
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
      result: FaceDuplicationCheckIntlResponseBodyResult,
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

