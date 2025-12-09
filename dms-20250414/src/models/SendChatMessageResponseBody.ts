// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatMessageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * AgentId
   * 
   * @example
   * 3jqqdiuxunfe2f7feren21eeq
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
  /**
   * @remarks
   * SessionId
   * 
   * @example
   * 6zbqbhoamv7gk20p8pgygt4hh
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      message: 'Message',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      message: 'string',
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
  data?: SendChatMessageResponseBodyData;
  /**
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * FE65CE1F-155B-1A38-9A3A-0208982C773B
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

