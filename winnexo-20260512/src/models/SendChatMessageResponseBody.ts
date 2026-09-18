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
   * The SSE event stream payload. On success, the response is a text/event-stream raw frame that must be consumed frame by frame in streaming mode.
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
   * The session work mode that takes effect for the current turn. Valid values:
   * - ask: Quick Q&A.
   * - work: Deep work.
   * - direct: Direct connection (request-level).
   * 
   * In multi-digital-employee or task execution scenarios, if ask is provided, work takes effect instead.
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

