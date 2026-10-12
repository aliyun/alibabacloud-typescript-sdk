// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentInfoAgentAccess extends $dara.Model {
  /**
   * @remarks
   * The ID of the HTTP API associated with the agent access capability. The frontend uses this ID to call existing HTTP API, route, consumer authorization, policy, and plugin query operations.
   * 
   * @example
   * { "httpApiId": "api-abc123" }
   */
  httpApiId?: string;
  static names(): { [key: string]: string } {
    return {
      httpApiId: 'httpApiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpApiId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentInfoModelAccess extends $dara.Model {
  /**
   * @remarks
   * The list of consumer identity bindings maintained by the agent domain. The Model API ID and the consumer IDs in the list jointly identify the agent and take effect for all routes of the Model API. You can obtain consumer details and their Model API authorization details by calling existing Consumer API and consumer authorization query operations.
   */
  consumerIds?: string[];
  /**
   * @remarks
   * The ID of the Model API associated with the model access capability. Model access does not distinguish between routes. The frontend uses this ID to query the basic information and all routes of the Model API.
   * 
   * @example
   * { "modelApiId": "model-api-1" }
   */
  modelApiId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerIds: 'consumerIds',
      modelApiId: 'modelApiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerIds: { 'type': 'array', 'itemType': 'string' },
      modelApiId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.consumerIds)) {
      $dara.Model.validateArray(this.consumerIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentInfo extends $dara.Model {
  /**
   * @remarks
   * The associated resource information for the agent access capability. If the agent access capability is not configured, null is always returned.
   * 
   * **if can be null:**
   * true
   */
  agentAccess?: AgentInfoAgentAccess;
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * agent-1
   */
  agentId?: string;
  /**
   * @remarks
   * The type of the agent. DashScope allows only agent access. Dify allows agent access and model access. ClaudeCode allows only model access. Custom allows agent access and model access.
   * 
   * @example
   * Custom
   */
  agentType?: string;
  /**
   * @remarks
   * The list of capabilities that the current agent type is allowed to configure. This field does not indicate that the capabilities are already configured. To check whether a capability is configured, determine whether agentAccess or modelAccess is null.
   */
  allowedCapabilities?: string[];
  /**
   * @remarks
   * The time when the agent was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1755129600000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The description of the agent.
   * 
   * @example
   * custom agent
   */
  description?: string;
  /**
   * @remarks
   * The ID of the gateway to which the agent belongs. When reading the associated API deployment configuration, select the configuration whose gatewayId matches this value.
   * 
   * @example
   * gateway-1
   */
  gatewayId?: string;
  /**
   * @remarks
   * The associated resource information for the model access capability. If the model access capability is not configured, null is always returned.
   * 
   * **if can be null:**
   * true
   */
  modelAccess?: AgentInfoModelAccess;
  /**
   * @remarks
   * The name of the agent.
   * 
   * @example
   * my-agent
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group where the agent is saved.
   * 
   * @example
   * rg-1
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the agent. In the current phase, agents that are successfully created and can be queried always return Ready. Internal creation or compensation statuses are not returned externally.
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The time when the agent was last updated. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1755129600000
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      agentAccess: 'agentAccess',
      agentId: 'agentId',
      agentType: 'agentType',
      allowedCapabilities: 'allowedCapabilities',
      createTimestamp: 'createTimestamp',
      description: 'description',
      gatewayId: 'gatewayId',
      modelAccess: 'modelAccess',
      name: 'name',
      resourceGroupId: 'resourceGroupId',
      status: 'status',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentAccess: AgentInfoAgentAccess,
      agentId: 'string',
      agentType: 'string',
      allowedCapabilities: { 'type': 'array', 'itemType': 'string' },
      createTimestamp: 'number',
      description: 'string',
      gatewayId: 'string',
      modelAccess: AgentInfoModelAccess,
      name: 'string',
      resourceGroupId: 'string',
      status: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.agentAccess && typeof (this.agentAccess as any).validate === 'function') {
      (this.agentAccess as any).validate();
    }
    if(Array.isArray(this.allowedCapabilities)) {
      $dara.Model.validateArray(this.allowedCapabilities);
    }
    if(this.modelAccess && typeof (this.modelAccess as any).validate === 'function') {
      (this.modelAccess as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

