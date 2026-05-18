// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceVerifyIntlResponseBodyResultExtFaceInfo extends $dara.Model {
  /**
   * @example
   * 39.04
   */
  faceQualityScore?: number;
  /**
   * @example
   * 97.43
   */
  illuminationScore?: number;
  /**
   * @example
   * 100
   */
  kaOcclusionScore?: number;
  /**
   * @example
   * 50.26
   */
  occlusionScore?: number;
  /**
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

export class FaceVerifyIntlResponseBodyResult extends $dara.Model {
  /**
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
  extFaceInfo?: FaceVerifyIntlResponseBodyResultExtFaceInfo;
  /**
   * @example
   * 30
   */
  faceAge?: number;
  /**
   * @example
   * N
   */
  faceAttack?: string;
  /**
   * @example
   * 99
   */
  faceAttackScore?: number;
  /**
   * @example
   * 95.0
   */
  faceComparisonScore?: number;
  /**
   * @example
   * M
   */
  faceGender?: string;
  /**
   * @example
   * Y
   */
  facePassed?: string;
  /**
   * @example
   * 9e792ec84c8f0ca592a
   */
  faceRegistrationId?: string;
  /**
   * @example
   * 0
   */
  faceRegistrationResult?: number;
  /**
   * @example
   * 200
   */
  subCode?: string;
  /**
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
   * @example
   * Success
   */
  code?: string;
  /**
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

