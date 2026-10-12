// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplyAgentSessionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON-RPC correlation ID for the current reply request. It is returned as-is in the response and is different from PermissionRequestId.
   * 
   * This parameter is required.
   * 
   * @example
   * reply-rpc-001
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC protocol version. Fixed to 2.0.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The user interaction reply parameters.
   * 
   * This parameter is required.
   */
  paramsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      jsonrpc: 'Jsonrpc',
      paramsShrink: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      jsonrpc: 'string',
      paramsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

