// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RejectSolutionResponseBody extends $dara.Model {
  /**
   * @example
   * PARTNER.CONFIG.NOT.FOUND
   */
  errorCode?: string;
  errorMsg?: string;
  /**
   * @example
   * 2174AA97-56FB-50FA-B243-0460B9E4CE0C
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

