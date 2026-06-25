// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the connection, specified as key-value pairs. The configuration keys vary by connection type. For more information, see the supplementary information about the request parameters of the CreateConnection operation.
   */
  configs?: { [key: string]: string };
  /**
   * @remarks
   * The connection ID. For more information about how to obtain the connection ID, see [ListConnections](url).
   * 
   * @example
   * conn-x2wz5zvvbyf2420fi9
   */
  connectionId?: string;
  /**
   * @remarks
   * The connection type. Only connection types that support public network access are available. Valid values:
   * 
   * - DashScopeConnection: a service connection for Alibaba Cloud Model Studio.
   * 
   * - DeepSeekConnection: a service connection for DeepSeek.
   * 
   * - FunctionAIMCPConnection: a connection for Function AI MCP.
   * 
   * - CustomMCPConnection: a custom MCP connection.
   * 
   * @example
   * DashScopeConnection
   */
  connectionType?: string;
  /**
   * @remarks
   * The key-value pairs to encrypt, such as a database logon password or a model connection key.
   */
  secrets?: { [key: string]: string };
  /**
   * @remarks
   * The validation type. Set the value to:
   * 
   * - Connectivity: a connectivity test
   * 
   * @example
   * Connectivity
   */
  validateType?: string;
  /**
   * @remarks
   * The workspace ID. For more information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
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

