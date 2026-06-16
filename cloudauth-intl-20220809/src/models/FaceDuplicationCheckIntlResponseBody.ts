// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceDuplicationCheckIntlResponseBodyResultExtFaceInfo extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      faceQualityScore: 'FaceQualityScore',
      illuminationScore: 'IlluminationScore',
      kaOcclusionScore: 'KaOcclusionScore',
      occlusionScore: 'OcclusionScore',
      sharpnessScore: 'SharpnessScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceQualityScore: 'number',
      illuminationScore: 'number',
      kaOcclusionScore: 'number',
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

export class FaceDuplicationCheckIntlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The face ID and UserID retrieved from the face database when a duplicate face is detected.
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
   * The additional result information.
   */
  extFaceInfo?: FaceDuplicationCheckIntlResponseBodyResultExtFaceInfo;
  /**
   * @remarks
   * The estimated age of the face. This value may not be returned if the prediction fails.
   * 
   * @example
   * 30
   */
  faceAge?: string;
  /**
   * @remarks
   * Indicates whether the captured face involves a liveness attack. A value of Y indicates an attack, and a value of N indicates no attack. This field is returned only when passive liveness detection is enabled.
   * 
   * @example
   * N
   */
  faceAttack?: string;
  /**
   * @remarks
   * The probability of a passive liveness detection attack. Value range: 0 to 100. This field is returned only when passive liveness detection is enabled.
   * 
   * @example
   * 99
   */
  faceAttackScore?: string;
  /**
   * @remarks
   * The 1:1 face comparison score returned when the verification mode is 1 or 2. Value range: 0 to 100.
   * 
   * @example
   * 98
   */
  faceComparisonScore?: string;
  /**
   * @remarks
   * The predicted gender of the face. This value may not be returned if the prediction fails. Valid values:
   * - M: Male.
   * - F: Female.
   * 
   * @example
   * M
   */
  faceGender?: string;
  /**
   * @remarks
   * The final verification result. Valid values:
   * - Y: Passed.
   * - N: Not passed.
   * 
   * @example
   * Y
   */
  facePassed?: string;
  /**
   * @remarks
   * The FACEID returned only when automatic registration is enabled and the face is registered successfully.
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
   * The description of the verification result. For more information, refer to the ResultObject.SubCode error code description.
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
   * The returned result.
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

