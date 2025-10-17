// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceCrossCompareIntlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * A to B comparison score, range 0～100.
   * 
   * @example
   * 99
   */
  faceComparisonScoreA2B?: number;
  /**
   * @remarks
   * B to C comparison score, range 0～100.
   * 
   * @example
   * 99
   */
  faceComparisonScoreB2C?: number;
  /**
   * @remarks
   * C to A comparison score, range 0～100.
   * 
   * @example
   * 99
   */
  faceComparisonScoreC2A?: number;
  /**
   * @remarks
   * Final verification result, values:
   * - Y: Pass
   * - N: Fail
   * 
   * @example
   * Y
   */
  facePassed?: string;
  /**
   * @remarks
   * Unique identifier for the authentication request.
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
   * Return code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 130A2C10-B9EE-4D84-88E3-5384FF039795
   */
  requestId?: string;
  /**
   * @remarks
   * Return result.
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

