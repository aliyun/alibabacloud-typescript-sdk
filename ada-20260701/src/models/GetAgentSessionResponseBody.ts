// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response object. The business result is located in `result`.
   * 
   * @example
   * {"jsonrpc":"2.0","id":"request-001","result":{"sessionId":"0123456789abcdef0123456789abcdef","title":"Code review","displayName":"Code review","agentName":"review-agent-demo","createdAtMs":1793232000000,"lastMessageAtMs":1793232060000}}
   */
  jsonRpcResponse?: any;
  /**
   * @remarks
   * The server-side request ID, which is used to troubleshoot this call.
   * 
   * @example
   * 0A1B2C3D-4E5F-6789-ABCD-EF0123456789
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jsonRpcResponse: 'JsonRpcResponse',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonRpcResponse: 'any',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

