// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BeeBotChatResponseBodyData } from "./BeeBotChatResponseBodyData";


export class BeeBotChatResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access denied for detailed information.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The content of the text message.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The list of the recommended knowledge. When AnswerType is set to Recommend, the list of the recommended knowledge is returned by the bot for this parameter.
   */
  data?: BeeBotChatResponseBodyData;
  /**
   * @remarks
   * Indicates whether the answer is in plain text or rich text.
   * 
   * @example
   * none
   */
  message?: string;
  /**
   * @remarks
   * The passthrough parameter.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: BeeBotChatResponseBodyData,
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

