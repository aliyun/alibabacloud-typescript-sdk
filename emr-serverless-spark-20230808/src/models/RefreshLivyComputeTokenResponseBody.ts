// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshLivyComputeTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 1000000 indicates that the request was successful. For other values, the request failed. For more information, see the message parameter.
   * 
   * @example
   * 1000000
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
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

