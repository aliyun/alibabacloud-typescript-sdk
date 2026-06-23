// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PromptAgentSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error information returned in the SSE frame. The response content conforms to the open-source Agent Client Protocol (ACP) specification. For more information, see https\\://agentclientprotocol.com/protocol/prompt-turn
   * 
   * @example
   * {"code": 400, "errorCode": "0x50000000001", "message": "not exist session", "data": null}
   */
  error?: any;
  /**
   * @remarks
   * The ID passed in by the caller. The value is returned as-is in the response.
   * 
   * @example
   * 631478864897630XXXX
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC version. Fixed value: 2.0.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The SSE method. The response content conforms to the open-source Agent Client Protocol (ACP) specification. For more information, see https\\://agentclientprotocol.com/protocol/prompt-turn
   * 
   * @example
   * session/update
   */
  method?: string;
  /**
   * @remarks
   * The SSE params. The response content conforms to the open-source Agent Client Protocol (ACP) specification. For more information, see https\\://agentclientprotocol.com/protocol/prompt-turn
   * 
   * @example
   * {"sessionId":"af4f5ef8-e8f5-481c-ad1f-94886c6c0aed","update":{"sessionUpdate":"agent_message_chunk","content":{"type":"text","text":"hello world"}}}
   */
  params?: any;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D5D70885-7CC7-594A-80C7-2EF1B00FFB4B
   */
  requestId?: string;
  /**
   * @remarks
   * The SSE frame result set. The response content conforms to the open-source Agent Client Protocol (ACP) specification. For more information, see https\\://agentclientprotocol.com/protocol/prompt-turn
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
   * 1747447032
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

