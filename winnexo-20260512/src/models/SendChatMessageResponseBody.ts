// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   * 
   * @deprecated
   */
  code?: string;
  /**
   * @remarks
   * The streaming response content.
   * 
   * @example
   * yes，i\\"m ready
   */
  content?: string;
  /**
   * @remarks
   * The Server-Sent Events (SSE) event stream payload. If the request is successful, the response is the raw frame of text/event-stream, which must be consumed frame by frame in a streaming manner.
   * 
   * @example
   * {}
   */
  data?: any;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * successful
   * 
   * @deprecated
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   * 
   * @deprecated
   */
  requestId?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * think
   */
  type?: string;
  /**
   * @remarks
   * The session work mode. Valid values: ask (quick Q&A, which trims tools, skills, and connectors for single-turn direct answers), work (deep work, which is the default value), and direct (direct connection mode at the request level, which does not start the sandbox and prevents context pollution, equivalent to directChat=true). The ask and work modes are at the session level. The mode is fixed when a new session is created. Subsequent chats inherit the session mode by default. If the explicitly passed value is inconsistent with the session mode, a parameter error is returned. To switch the mode, create a new session or fork the session. If ask is passed in the multi-digital employee or task execution scenario, it takes effect as work. If directChat is set to true, this parameter is ignored.
   * 
   * @example
   * work
   */
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      content: 'content',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      type: 'type',
      workMode: 'workMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      content: 'string',
      data: 'any',
      message: 'string',
      requestId: 'string',
      type: 'string',
      workMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

