// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StreamChatMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The incremental content of the current SSE frame.
   * 
   * @example
   * Hello
   */
  content?: string;
  /**
   * @remarks
   * The SSE event stream payload. On success, the response is returned as raw text/event-stream frames that must be consumed frame by frame in streaming mode.
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
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The SSE event type, such as text, think, heartbeat, done, or error.
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      content: 'content',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      type: 'type',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

