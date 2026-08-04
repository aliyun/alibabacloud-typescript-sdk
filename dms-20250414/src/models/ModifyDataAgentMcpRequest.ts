// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDataAgentMcpRequest extends $dara.Model {
  /**
   * @remarks
   * The brief description of the artifact. This parameter can be empty.
   * 
   * @example
   * project name pass the check
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the MCP server is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The endpoint of the MCP instance.
   * 
   * @example
   * http://***.com/mcp
   */
  endpoint?: string;
  /**
   * @remarks
   * The request header settings.
   * 
   * @example
   * {"Authorization":"Bearer ***"}
   */
  headers?: string;
  /**
   * @remarks
   * The ID of the MCP server.
   * 
   * This parameter is required.
   * 
   * @example
   * 6126jk***h2
   */
  mcpServerId?: string;
  /**
   * @remarks
   * The MCP name.
   * 
   * @example
   * Efficiency Diagnostics V3
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to include the Alibaba Cloud UID in the request header.
   * 
   * @example
   * true
   */
  needUidInHeader?: boolean;
  /**
   * @remarks
   * The transport channel type. Valid values: streamablehttp, sse.
   * 
   * @example
   * sse
   */
  transportType?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * e3p***v4
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      enable: 'Enable',
      endpoint: 'Endpoint',
      headers: 'Headers',
      mcpServerId: 'McpServerId',
      name: 'Name',
      needUidInHeader: 'NeedUidInHeader',
      transportType: 'TransportType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enable: 'boolean',
      endpoint: 'string',
      headers: 'string',
      mcpServerId: 'string',
      name: 'string',
      needUidInHeader: 'boolean',
      transportType: 'string',
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

