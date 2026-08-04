// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataAgentMcpShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of MCP Server IDs to delete.
   */
  mcpServerIdsShrink?: string;
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
      mcpServerIdsShrink: 'McpServerIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpServerIdsShrink: 'string',
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

