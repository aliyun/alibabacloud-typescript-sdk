// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatMessageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * AgentId
   * 
   * @example
   * 3jqqdiuxun******
   */
  agentId?: string;
  /**
   * @remarks
   * Message
   * 
   * @example
   * success
   */
  message?: string;
  messageId?: string;
  /**
   * @remarks
   * SessionId
   * 
   * @example
   * 6zbqbho********
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      message: 'Message',
      messageId: 'MessageId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      message: 'string',
      messageId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: SendChatMessageResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE65CE1F-****-****-****-******
   */
  requestId?: string;
  /**
   * @remarks
   * Success
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SendChatMessageResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
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

