// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AIGCFaceVerifyResponseBodyResultObject extends $dara.Model {
  certifyId?: string;
  /**
   * @example
   * Y
   */
  result?: string;
  /**
   * @example
   * 1.0000
   */
  score?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      result: 'Result',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      result: 'string',
      score: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

