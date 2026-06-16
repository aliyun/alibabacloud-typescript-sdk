// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceCrossCompareIntlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The comparison score between A and B. Value range: 0 to 1.
   * 
   * @example
   * 0.9999999999999999
   */
  faceComparisonScoreA2B?: number;
  /**
   * @remarks
   * The comparison score between B and C. Value range: 0 to 1.
   * 
   * @example
   * 0.9999999999999999
   */
  faceComparisonScoreB2C?: number;
  /**
   * @remarks
   * The comparison score between C and A. Value range: 0 to 1.
   * 
   * @example
   * 0.9999999999999999
   */
  faceComparisonScoreC2A?: number;
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
   * The unique identifier of the verification request.
   * 
   * @example
   * 4ab0b***cbde97
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      faceComparisonScoreA2B: 'FaceComparisonScoreA2B',
      faceComparisonScoreB2C: 'FaceComparisonScoreB2C',
      faceComparisonScoreC2A: 'FaceComparisonScoreC2A',
      facePassed: 'FacePassed',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceComparisonScoreA2B: 'number',
      faceComparisonScoreB2C: 'number',
      faceComparisonScoreC2A: 'number',
      facePassed: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceCrossCompareIntlResponseBody extends $dara.Model {
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
   * 130A2C10-B9EE-4D84-88E3-5384FF039795
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: FaceCrossCompareIntlResponseBodyResult;
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
      result: FaceCrossCompareIntlResponseBodyResult,
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

