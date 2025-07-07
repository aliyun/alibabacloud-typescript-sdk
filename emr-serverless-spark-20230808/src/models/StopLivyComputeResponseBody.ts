// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopLivyComputeResponseBody extends $dara.Model {
  /**
   * @example
   * 1000000
   */
  code?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
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

