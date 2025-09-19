// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceCompareResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The face comparison score. The value ranges from 0 to 100.
   * 
   * @example
   * 98
   */
  faceComparisonScore?: number;
  /**
   * @remarks
   * The final authentication result. Valid values:
   * 
   * - **Y**: The authentication is passed.
   * 
   * - **N**: The authentication failed.
   * 
   * @example
   * Y
   */
  passed?: string;
  /**
   * @remarks
   * The transaction ID.
   * 
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

export class FaceCompareResponseBody extends $dara.Model {
  /**
   * @remarks
   * The [response code](https://www.alibabacloud.com/help/en/ekyc/latest/facecompare?spm=a3c0i.23458820.2359477120.28.21167d3fzUmXQC#c43fd16d07mae).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The detailed description of the response code.
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
   * Result object
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

