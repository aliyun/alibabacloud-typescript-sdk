// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentSessionShrinkRequest extends $dara.Model {
  /**
   * @example
   * 4758330557805415712
   */
  id?: string;
  /**
   * @example
   * 2.0
   */
  jsonrpc?: string;
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

