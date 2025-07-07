// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLivyComputeTokenResponseBodyData } from "./GetLivyComputeTokenResponseBodyData";


export class GetLivyComputeTokenResponseBody extends $dara.Model {
  /**
   * @example
   * 1000000
   */
  code?: string;
  data?: GetLivyComputeTokenResponseBodyData;
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
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetLivyComputeTokenResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

