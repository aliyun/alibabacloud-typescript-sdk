// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadAgentSessionFileShrinkRequest extends $dara.Model {
  /**
   * @example
   * attachment-rpc-001
   */
  id?: string;
  /**
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
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

