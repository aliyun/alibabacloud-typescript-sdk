// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EkycVerifyResponseBodyResult extends $dara.Model {
  /**
   * @example
   * {
   * "faceAttack": "N",
   * "faceComparisonScore": 52.57,
   * "facePassed": "N",
   * "authorityComparisonScore": 80.39
   * }
   */
  extFaceInfo?: string;
  extIdInfo?: string;
  /**
   * @example
   * Y
   */
  passed?: string;
  /**
   * @example
   * 205
   */
  subCode?: string;
  /**
   * @example
   * 4ab0b***cbde97
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      extFaceInfo: 'ExtFaceInfo',
      extIdInfo: 'ExtIdInfo',
      passed: 'Passed',
      subCode: 'SubCode',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extFaceInfo: 'string',
      extIdInfo: 'string',
      passed: 'string',
      subCode: 'string',
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

