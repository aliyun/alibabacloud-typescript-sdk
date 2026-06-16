// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopLivyComputeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 1000000 indicates that the request is successful. Other values indicate that the request failed. For more information about an error, see the message parameter.
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
   * 484D9DDA-300D-525E-AF7A-0CCCA5C64A7A
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

