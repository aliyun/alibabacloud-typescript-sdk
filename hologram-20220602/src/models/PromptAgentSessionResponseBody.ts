// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PromptAgentSessionResponseBody extends $dara.Model {
  /**
   * @example
   * {"code": 400, "errorCode": "0x50000000001", "message": "not exist session", "data": null}
   */
  error?: any;
  /**
   * @example
   * 2072736942627512345
   */
  id?: string;
  /**
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @example
   * session/update
   */
  method?: string;
  /**
   * @example
   * {"sessionId":"403e9e4a-457f-404e-9963-c5ca9b3997cf","update":{"sessionUpdate":"agent_message_chunk","content":{"type":"text","text":"I have 13 skills."}}}
   */
  params?: any;
  /**
   * @example
   * 403e9e4a-457f-404e-9963-c5ca9b3997cf
   */
  requestId?: string;
  /**
   * @example
   * {"stopReason":"end_turn"}
   */
  result?: any;
  /**
   * @example
   * 1789367332
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

