// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMcpShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The address list of the MCP server.
   * 
   * This parameter is required.
   * 
   * @example
   * ["https://example.com/mcp"]
   */
  addressesShrink?: string;
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
   * The client idempotency token that ensures the idempotence of the request.
   * 
   * @example
   * client-token-xxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The creation type.
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
   * Optional. Fuzzy matches by instance name.
   * 
   * This parameter is required.
   * 
   * @example
   * AgentTeams
   */
  id?: string;
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
   * Required if Type is set to HTTP_TO_MCP.
   * 
   * @example
   * {"url":"https://example.com/swagger.json"}
   */
  swaggerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      addressesShrink: 'Addresses',
      authConfig: 'AuthConfig',
      authEnabled: 'AuthEnabled',
      clientToken: 'ClientToken',
      createType: 'CreateType',
      description: 'Description',
      id: 'Id',
      instanceId: 'InstanceId',
      swaggerConfig: 'SwaggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressesShrink: 'string',
      authConfig: 'string',
      authEnabled: 'boolean',
      clientToken: 'string',
      createType: 'string',
      description: 'string',
      id: 'string',
      instanceId: 'string',
      swaggerConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

