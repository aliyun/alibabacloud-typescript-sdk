// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration information of the connection. The information is configured in key-value pairs. The keys in the configuration vary based on the connection type. For more information, see the supplementary description of request parameters for the CreateConnection operation.
   */
  configs?: { [key: string]: string };
  /**
   * @remarks
   * The connection ID. For more information about how to obtain the connection ID, see [ListConnections](~~ListConnections~~).
   * 
   * @example
   * conn-x2wz5zvvbyf2420fi9
   */
  connectionId?: string;
  /**
   * @remarks
   * The type of the connection. You can specify a connection type that supports public network access. Valid values:
   * - DashScopeConnection: The Model Studio connection.
   * - DeepSeekConnection: The DeepSeek connection.
   * - FunctionAIMCPConnection: The Function AI MCP connection.
   * - CustomMCPConnection: The custom MCP connection.
   * 
   * @example
   * DashScopeConnection
   */
  connectionType?: string;
  /**
   * @remarks
   * The key-value configurations that require encryption, such as the database logon password and the key for the model connection.
   */
  secrets?: { [key: string]: string };
  /**
   * @remarks
   * The validation type. Valid values:
   * - Connectivity: The connectivity test.
   * 
   * @example
   * Connectivity
   */
  validateType?: string;
  /**
   * @remarks
   * The workspace ID. You can obtain the workspace ID by calling the [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      connectionId: 'ConnectionId',
      connectionType: 'ConnectionType',
      secrets: 'Secrets',
      validateType: 'ValidateType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      connectionId: 'string',
      connectionType: 'string',
      secrets: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      validateType: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.configs) {
      $dara.Model.validateMap(this.configs);
    }
    if(this.secrets) {
      $dara.Model.validateMap(this.secrets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

