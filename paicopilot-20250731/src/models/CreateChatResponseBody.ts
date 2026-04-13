// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChatDetail } from "./ChatDetail";


export class CreateChatResponseBody extends $dara.Model {
  answer?: ChatDetail;
  /**
   * @example
   * chat-jkd******
   */
  chatId?: string;
  /**
   * @example
   * 2187322
   */
  errorCode?: string;
  /**
   * @example
   * Stream error
   */
  errorMessage?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 44553E9A-******-37ADC33FE2
   */
  requestId?: string;
  /**
   * @example
   * se-dss******
   */
  sessionId?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      chatId: 'ChatId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      gmtCreateTime: 'GmtCreateTime',
      requestId: 'RequestId',
      sessionId: 'SessionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: ChatDetail,
      chatId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      gmtCreateTime: 'string',
      requestId: 'string',
      sessionId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.answer && typeof (this.answer as any).validate === 'function') {
      (this.answer as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

