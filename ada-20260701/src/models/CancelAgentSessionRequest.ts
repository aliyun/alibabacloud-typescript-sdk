// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelAgentSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The correlation identifier for this call, which is echoed in the response. This parameter does not provide idempotence guarantees.
   * 
   * @example
   * request-001
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC protocol version. Set this parameter to `2.0`.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The business parameter object. For nested fields, refer to the supplementary description of request parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * {"sessionId":"0123456789abcdef0123456789abcdef","_meta":{"promptId":"prompt-example-001"}}
   */
  params?: any;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      jsonrpc: 'Jsonrpc',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      jsonrpc: 'string',
      params: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

