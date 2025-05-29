// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HalfLLMChatResponseBodyData } from "./HalfLlmchatResponseBodyData";


export class HalfLLMChatResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  data?: HalfLLMChatResponseBodyData;
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
   * 5DD2E24F-93A2-551D-B192-8DBBEEFE9129
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
      data: HalfLLMChatResponseBodyData,
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

