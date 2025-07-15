// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartChatResponseBodyData extends $dara.Model {
  /**
   * @example
   * $23086709$EAUNIT
   */
  chatConversationId?: string;
  /**
   * @example
   * chat-525523618219921408
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      chatConversationId: 'ChatConversationId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatConversationId: 'string',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartChatResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: StartChatResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * EEEE671A-3E24-4A04-81E6-6C4F5B39DF75
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: StartChatResponseBodyData,
      httpStatusCode: 'number',
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

