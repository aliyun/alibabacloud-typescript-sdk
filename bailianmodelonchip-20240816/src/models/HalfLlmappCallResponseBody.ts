// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HalfLLMAppCallResponseBodyData } from "./HalfLlmappCallResponseBodyData";


export class HalfLLMAppCallResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  data?: HalfLLMAppCallResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * D7FEF19A-8B65-5914-9FA3-F26E820294B4
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: HalfLLMAppCallResponseBodyData,
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
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

