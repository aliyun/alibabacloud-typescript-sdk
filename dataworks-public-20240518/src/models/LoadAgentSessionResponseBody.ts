// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoadAgentSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error object of the SSE frame. This field is present when an error occurs.
   * 
   * @example
   * {"code": 400, "errorCode": "0x50000000001", "message": "not exist session", "data": null}
   */
  error?: any;
  /**
   * @remarks
   * The client-generated request ID, returned from the request.
   * 
   * @example
   * 676303114031776
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC version. The value is `2.0`.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The method of the SSE frame.
   * 
   * @example
   * session/update
   */
  method?: string;
  /**
   * @remarks
   * The parameters of the SSE frame.
   * 
   * @example
   * {"sessionId":"af4f5ef8-e8f5-481c-ad1f-94886c6c0aed","update":{"sessionUpdate":"agent_message_chunk","content":{"type":"text","text":"hello world"}}}
   */
  params?: any;
  /**
   * @remarks
   * The unique request ID generated for this request.
   * 
   * @example
   * 0D41C608-0C60-5EB0-B986-1460909CF642
   */
  requestId?: string;
  /**
   * @remarks
   * The result object of the SSE frame. This field is present when the operation is successful.
   * 
   * @example
   * {"stopReason":"end_turn"}
   */
  result?: any;
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 1769479322828
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      id: 'Id',
      jsonrpc: 'Jsonrpc',
      method: 'Method',
      params: 'Params',
      requestId: 'RequestId',
      result: 'Result',
      timestamp: 'Timestamp',
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
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

