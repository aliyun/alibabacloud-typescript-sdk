// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceCompareV2ResponseBodyResultExtFaceInfo extends $dara.Model {
  /**
   * @example
   * 39.04
   */
  faceQualityScore?: number;
  /**
   * @example
   * 0.02
   */
  illuminationScore?: number;
  /**
   * @example
   * 20
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

export class FaceCompareV2ResponseBodyResult extends $dara.Model {
  extFaceInfo?: FaceCompareV2ResponseBodyResultExtFaceInfo;
  /**
   * @example
   * 98
   */
  faceComparisonScore?: number;
  /**
   * @example
   * Y
   */
  passed?: string;
  /**
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
      extFaceInfo: FaceCompareV2ResponseBodyResultExtFaceInfo,
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

export class FaceCompareV2ResponseBody extends $dara.Model {
  /**
   * @example
   * 200
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
   * 4EB356FE-BB6A-5DCC-B4C5-E8051787EBA1
   */
  requestId?: string;
  result?: FaceCompareV2ResponseBodyResult;
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
      result: FaceCompareV2ResponseBodyResult,
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

