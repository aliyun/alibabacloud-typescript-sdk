// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcpRequest extends $dara.Model {
  /**
   * @remarks
   * The list of MCP server addresses.
   * 
   * This parameter is required.
   * 
   * @example
   * ["https://example.com/mcp"]
   */
  addresses?: string[];
  /**
   * @remarks
   * The authentication information.
   * 
   * @example
   * {"type":"bearer","token":"xxx"}
   */
  authConfig?: string;
  /**
   * @remarks
   * Specifies whether to enable authentication.
   * 
   * @example
   * false
   */
  authEnabled?: boolean;
  /**
   * @remarks
   * The client idempotency token that is used to ensure the idempotence of the request.
   * 
   * @example
   * client-token-xxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The creation type. Default value: DIRECT_PROXY.
   * 
   * @example
   * DIRECT_PROXY
   */
  createType?: string;
  /**
   * @remarks
   * The description of the MCP server.
   * 
   * @example
   * This is an MCP server.
   */
  description?: string;
  /**
   * @remarks
   * The AgentTeams instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ins-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Optional. Fuzzy match by instance name.
   * 
   * This parameter is required.
   * 
   * @example
   * AgentTeams
   */
  name?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * streamable
   */
  protocol?: string;
  /**
   * @remarks
   * The Swagger configuration. This parameter is required if Type is set to HTTP_TO_MCP.
   * 
   * @example
   * {"url":"https://example.com/swagger.json"}
   */
  swaggerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      authConfig: 'AuthConfig',
      authEnabled: 'AuthEnabled',
      clientToken: 'ClientToken',
      createType: 'CreateType',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      protocol: 'Protocol',
      swaggerConfig: 'SwaggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      authConfig: 'string',
      authEnabled: 'boolean',
      clientToken: 'string',
      createType: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      protocol: 'string',
      swaggerConfig: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

