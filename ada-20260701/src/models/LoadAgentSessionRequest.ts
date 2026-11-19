// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoadAgentSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The client call identifier used to associate the current response. It does not provide idempotency guarantees.
   * 
   * @example
   * request-001
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC version. Set this parameter to `2.0`.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The business parameter structure. For core nested fields, see the supplementary description.
   * 
   * This parameter is required.
   * 
   * @example
   * {"sessionId":"0123456789abcdef0123456789abcdef"}
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

