// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataAgentMcpRequest extends $dara.Model {
  /**
   * @remarks
   * The list of MCP Server IDs to delete.
   */
  mcpServerIds?: string[];
  /**
   * @remarks
   * The ID of the Data Agent workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * atvx***xmz
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      mcpServerIds: 'McpServerIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpServerIds: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mcpServerIds)) {
      $dara.Model.validateArray(this.mcpServerIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

