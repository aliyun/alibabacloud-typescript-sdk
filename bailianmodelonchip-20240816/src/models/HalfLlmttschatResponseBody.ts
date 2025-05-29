// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HalfLLMTTSChatResponseBodyData } from "./HalfLlmttschatResponseBodyData";


export class HalfLLMTTSChatResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  data?: HalfLLMTTSChatResponseBodyData;
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
   * A9CE316B-B616-5A97-8FFC-5D0D664CA7AF
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
      data: HalfLLMTTSChatResponseBodyData,
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

