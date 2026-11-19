// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplyAgentSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The JSON-RPC response. For core embedded fields, see the supplementary description.
   * 
   * @example
   * {"jsonrpc":"2.0","id":"request-001","result":{"accepted":true}}
   */
  jsonRpcResponse?: any;
  /**
   * @remarks
   * The ID of the current request, used for troubleshooting.
   * 
   * @example
   * 0A1B2C3D-4E5F-6789-ABCD-EF0123456789
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the current API call is successful. This parameter cannot replace the business acceptance result.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      jsonRpcResponse: 'JsonRpcResponse',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonRpcResponse: 'any',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

