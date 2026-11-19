// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoadAgentSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The `Error` field in the frame. It is an in-stream error and is actually an object.
   * 
   * @example
   * {"code":-32603,"errorCode":"CLI_STREAM_FAILED","message":"The response stream was interrupted."}
   */
  error?: any;
  /**
   * @remarks
   * The `Id` field in the frame, used to associate the request. Notification frames may not contain this field.
   * 
   * @example
   * request-001
   */
  id?: string;
  /**
   * @remarks
   * The `Jsonrpc` field in the frame. The value is `2.0`.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The `Method` field in the frame, used to distinguish notification categories.
   * 
   * @example
   * session/update
   */
  method?: string;
  /**
   * @remarks
   * The `Params` field in the frame. It is the notification payload and is actually an object.
   * 
   * @example
   * {"sessionId":"0123456789abcdef0123456789abcdef","update":{"sessionUpdate":"agent_message_chunk","content":{"type":"text","text":"Hello"}}}
   */
  params?: any;
  /**
   * @remarks
   * The request diagnostic identifier. It is not guaranteed to be included in every frame. You should also retain the diagnostic information in the response headers.
   * 
   * @example
   * 0A1B2C3D-4E5F-6789-ABCD-EF0123456789
   */
  requestId?: string;
  /**
   * @remarks
   * The `Result` field in the frame. It is the normal result and is actually an object.
   * 
   * @example
   * {"stopReason":"end_turn"}
   */
  result?: any;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      id: 'Id',
      jsonrpc: 'Jsonrpc',
      method: 'Method',
      params: 'Params',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'any',
      id: 'string',
      jsonrpc: 'string',
      method: 'string',
      params: 'any',
      requestId: 'string',
      result: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

