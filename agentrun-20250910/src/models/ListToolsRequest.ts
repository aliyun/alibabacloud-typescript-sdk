// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListToolsRequest extends $dara.Model {
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Tool Name, supports fuzzy search
   * 
   * @example
   * tool-1
   */
  toolName?: string;
  /**
   * @remarks
   * Tool type
   * 
   * @example
   * MCP
   */
  toolType?: string;
  /**
   * @remarks
   * Workspace ID
   * 
   * @example
   * workspace-xyz789
   */
  workspaceId?: string;
  /**
   * @remarks
   * List of workspace IDs, separated by commas
   * 
   * @example
   * ws1,ws2
   */
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      toolName: 'toolName',
      toolType: 'toolType',
      workspaceId: 'workspaceId',
      workspaceIds: 'workspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      toolName: 'string',
      toolType: 'string',
      workspaceId: 'string',
      workspaceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

