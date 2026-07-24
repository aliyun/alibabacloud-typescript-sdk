// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceLivenessV2ResponseBodyResultExtFaceInfo extends $dara.Model {
  /**
   * @remarks
   * The predicted reference age of the face. The prediction may fail and return no value.
   * 
   * @example
   * 18
   */
  faceAge?: number;
  /**
   * @remarks
   * The liveness detection result. Valid values: Y (attack detected) and N (Normal).
   * 
   * @example
   * Y
   */
  faceAttack?: string;
  faceAttributeInfo?: string;
  /**
   * @remarks
   * The predicted gender of the face image. The prediction may fail and return no value. Valid values:
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
   * The quality score of the liveness face. Valid values: 0 to 100. A higher value indicates better quality.
   * 
   * @example
   * 79.04
   */
  faceQualityScore?: number;
  /**
   * @remarks
   * The algorithm score for illumination, which is a sub-dimension of quality assessment. Valid values: 0 to 100. A higher value indicates better quality.
   * 
   * @example
   * 97.43
   */
  illuminationScore?: number;
  /**
   * @remarks
   * The algorithm score for key area occlusion, which is a sub-dimension of quality assessment. Valid values: 0 to 100. A higher value indicates better quality.
   * 
   * @example
   * 100
   */
  kaOcclusionScore?: number;
  /**
   * @remarks
   * Indicates whether facial occlusion is detected. A value of Y indicates occlusion is detected. A value of N indicates no occlusion is detected.
   * 
   * @example
   * Y
   */
  occlusionResult?: string;
  /**
   * @remarks
   * The algorithm score for occlusion, which is a sub-dimension of quality assessment. Valid values: 0 to 100. A higher value indicates better quality.
   * 
   * @example
   * 50.26
   */
  occlusionScore?: number;
  /**
   * @remarks
   * The image sharpness score, which is a sub-dimension of quality assessment. Valid values: 0 to 100. A higher value indicates better quality.
   * 
   * @example
   * 60.78
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

export class FaceLivenessV2ResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The face result information.
   */
  extFaceInfo?: FaceLivenessV2ResponseBodyResultExtFaceInfo;
  /**
   * @remarks
   * Indicates whether the authentication is passed. Valid values:
   * 
   * - Y: Passed.
   * - N: Not passed.
   * 
   * @example
   * Y
   */
  passed?: string;
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
   * The unique ID of the authentication request.
   * 
   * @example
   * hksb7ba1b28130d24e015d694361****
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
      extFaceInfo: FaceLivenessV2ResponseBodyResultExtFaceInfo,
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

export class FaceLivenessV2ResponseBody extends $dara.Model {
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
  result?: FaceLivenessV2ResponseBodyResult;
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
      result: FaceLivenessV2ResponseBodyResult,
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

