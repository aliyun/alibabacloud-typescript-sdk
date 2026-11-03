// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentSessionTitleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON-RPC correlation ID for the current request. It is specified by the caller and used to correlate the request and response.
   * 
   * @example
   * updateagentsessiontitle-rpc-001
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC protocol version. Set the value to 2.0.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The request parameters for modifying the session title, including the target session ID and the new title.
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

