// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceCompareResponseBodyResultExtFaceInfo extends $dara.Model {
  /**
   * @remarks
   * Overall quality score
   * 
   * @example
   * 39.04
   */
  faceQualityScore?: number;
  /**
   * @remarks
   * Illumination score
   * 
   * @example
   * 0.02
   */
  illuminationScore?: number;
  /**
   * @remarks
   * Key area occlusion score
   * 
   * @example
   * 20
   */
  kaOcclusionScore?: number;
  /**
   * @remarks
   * Occlusion score
   * 
   * @example
   * 50.26
   */
  occlusionScore?: number;
  /**
   * @remarks
   * Sharpness score
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

export class FaceCompareResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Related result information
   */
  extFaceInfo?: FaceCompareResponseBodyResultExtFaceInfo;
  /**
   * @remarks
   * The comparison score between the submitted face photo and the reference face image during the authentication process. Value range: **0** to **100**.
   * 
   * @example
   * 98
   */
  faceComparisonScore?: number;
  /**
   * @remarks
   * Whether the authentication passed.
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
   * The unique identifier of the authentication request.
   * 
   * @example
   * 08573be80f944d95ac812e019e3655a8
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      extFaceInfo: 'ExtFaceInfo',
      faceComparisonScore: 'FaceComparisonScore',
      passed: 'Passed',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extFaceInfo: FaceCompareResponseBodyResultExtFaceInfo,
      faceComparisonScore: 'number',
      passed: 'string',
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

export class FaceCompareResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * 200: Success.
   * Other: Error code. For error code details, see Error Codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Response message.
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
   * 4EB356FE-BB6A-5DCC-B4C5-E8051787EBA1
   */
  requestId?: string;
  /**
   * @remarks
   * Response result.
   */
  result?: FaceCompareResponseBodyResult;
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
      result: FaceCompareResponseBodyResult,
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

