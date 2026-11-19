// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAgentSessionModelRequest extends $dara.Model {
  /**
   * @remarks
   * The client request identifier, which is echoed in the response. It is used to associate this call and does not have idempotent semantics.
   * 
   * @example
   * request-001
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC version. Set this parameter to 2.0.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The defined business parameter structure. For more information about the core nested fields, see the supplementary description.
   * 
   * This parameter is required.
   * 
   * @example
   * {"sessionId":"0123456789abcdef0123456789abcdef","modelId":"text-model-example"}
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

