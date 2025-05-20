// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceCompareResponseBodyResult extends $dara.Model {
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
      faceComparisonScore: 'FaceComparisonScore',
      passed: 'Passed',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceComparisonScore: 'number',
      passed: 'string',
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

