// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSessionArtifactsShrinkRequest extends $dara.Model {
  /**
   * @example
   * 10001
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

