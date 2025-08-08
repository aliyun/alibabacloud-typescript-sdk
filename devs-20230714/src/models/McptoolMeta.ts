// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MCPToolMeta extends $dara.Model {
  /**
   * @example
   * Here is an example
   */
  description?: string;
  inputSchema?: { [key: string]: any };
  /**
   * @example
   * demo-tool
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      inputSchema: 'inputSchema',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      inputSchema: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  validate() {
    if(this.inputSchema) {
      $dara.Model.validateMap(this.inputSchema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

