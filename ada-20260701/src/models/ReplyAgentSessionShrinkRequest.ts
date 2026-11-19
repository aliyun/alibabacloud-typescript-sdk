// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplyAgentSessionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client call identifier used to associate the current response. This parameter does not provide idempotence guarantees.
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
   * {"sessionId":"0123456789abcdef0123456789abcdef","permissionRequestId":"permission-example","outcome":{"outcome":"selected","optionId":"allow_once"}}
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

