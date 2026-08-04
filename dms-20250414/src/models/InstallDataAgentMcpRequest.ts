// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallDataAgentMcpRequest extends $dara.Model {
  /**
   * @remarks
   * The brief description of the artifact. This parameter can be empty.
   * 
   * @example
   * query user information by user ID
   */
  description?: string;
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
   * The JSON used to create the MCP.
   * 
   * @example
   * {
   *   "mcpServers": {
   *     "sse-server-name": {
   *       "description": "describe sse mcp server",
   *       "type": "sse",
   *       "netType": "vpc",
   *       "vpcId": "vpc-xxxx",
   *       "url": "http://sse-in-vpc.com/sse",
   *       "needUidInHeader": true,
   *       "headers": {
   *         "Authorization": "Bearer <token>"
   *       }
   *     }
   *   }
   * }
   */
  fromJson?: string;
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
   * The MCP name.
   * 
   * @example
   * query_tool
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
   * The network type. Valid values:
   * 
   * - `vpc`: virtual private cloud.
   * - `public`: public network.
   * 
   * @example
   * public
   */
  netType?: string;
  /**
   * @remarks
   * The transport channel type. Valid values: streamablehttp and sse.
   * 
   * @example
   * sse
   */
  transportType?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-uf63***o5
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-8vb5j***6h
   */
  vswId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 20923*****7291
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      endpoint: 'Endpoint',
      fromJson: 'FromJson',
      headers: 'Headers',
      name: 'Name',
      needUidInHeader: 'NeedUidInHeader',
      netType: 'NetType',
      transportType: 'TransportType',
      vpcId: 'VpcId',
      vswId: 'VswId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      endpoint: 'string',
      fromJson: 'string',
      headers: 'string',
      name: 'string',
      needUidInHeader: 'boolean',
      netType: 'string',
      transportType: 'string',
      vpcId: 'string',
      vswId: 'string',
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

