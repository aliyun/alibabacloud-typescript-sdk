// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FaceLivenessResponseBodyResultExtFaceInfo } from "./FaceLivenessResponseBodyResultExtFaceInfo";


export class FaceLivenessResponseBodyResult extends $dara.Model {
  extFaceInfo?: FaceLivenessResponseBodyResultExtFaceInfo;
  /**
   * @example
   * N
   */
  passed?: string;
  /**
   * @example
   * 205
   */
  subCode?: string;
  /**
   * @example
   * 08573be80f944d95ac812e019e3655a8
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
      extFaceInfo: FaceLivenessResponseBodyResultExtFaceInfo,
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

