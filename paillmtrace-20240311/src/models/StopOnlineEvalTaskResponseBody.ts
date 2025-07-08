// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopOnlineEvalTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Internal error code. Set only when the response is in error.
   * 
   * @example
   * InvalidInputParams
   */
  code?: string;
  /**
   * @remarks
   * Response error message. Set only when the response is in error.
   * 
   * @example
   * task id is empty
   */
  message?: string;
  /**
   * @remarks
   * ID of the POP request
   * 
   * @example
   * 31E5FBC2-792D-5B5C-A5EB-3019984ABFC8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

