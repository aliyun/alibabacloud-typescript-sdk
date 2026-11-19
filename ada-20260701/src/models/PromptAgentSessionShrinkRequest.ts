// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PromptAgentSessionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client call identifier used to associate the current response. This parameter does not provide idempotency guarantees.
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
   * The structure of the business parameters. For core nested fields, refer to the supplementary instructions.
   * 
   * This parameter is required.
   * 
   * @example
   * {"sessionId":"0123456789abcdef0123456789abcdef","prompt":[{"type":"text","text":"Explain the issue of accessing the first item when a Python list is empty, and provide modification suggestions."}]}
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

