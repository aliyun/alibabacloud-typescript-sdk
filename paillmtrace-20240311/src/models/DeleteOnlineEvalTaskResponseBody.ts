// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOnlineEvalTaskResponseBody extends $dara.Model {
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
   * ID of the request
   * 
   * @example
   * 6A87228C-969A-1381-98CF-AE07AE630FA5
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

