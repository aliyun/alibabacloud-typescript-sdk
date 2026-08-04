// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataAgentMcpRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the MCP Server to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 44lg***z65
   */
  mcpServerId?: string;
  /**
   * @remarks
   * The Data Agent workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * atvx***xmz
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      mcpServerId: 'McpServerId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpServerId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

