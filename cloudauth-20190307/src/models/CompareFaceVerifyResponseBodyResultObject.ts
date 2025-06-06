// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompareFaceVerifyResponseBodyResultObject extends $dara.Model {
  certifyId?: string;
  /**
   * @example
   * T
   */
  passed?: string;
  /**
   * @example
   * 99.60875
   */
  verifyScore?: number;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      passed: 'Passed',
      verifyScore: 'VerifyScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      passed: 'string',
      verifyScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

