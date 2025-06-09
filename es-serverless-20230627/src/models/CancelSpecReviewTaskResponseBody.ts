// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelSpecReviewTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 1B64F3E0-25D5-5043-B5C8-4FF22BB12CCD
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

