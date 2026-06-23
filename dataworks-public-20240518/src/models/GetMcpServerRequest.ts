// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMcpServerRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the MCP Server to retrieve.
   * 
   * This parameter is required.
   * 
   * @example
   * my-mcp-server
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

