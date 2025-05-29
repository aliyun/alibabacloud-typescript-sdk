// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HalfLLMImageChatResponseBodyData } from "./HalfLlmimageChatResponseBodyData";


export class HalfLLMImageChatResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  data?: HalfLLMImageChatResponseBodyData;
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
   * 84656A01-32F0-5D12-8C72-E3AFAA0C8A29
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
      data: HalfLLMImageChatResponseBodyData,
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

