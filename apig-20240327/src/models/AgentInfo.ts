// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentInfoAgentAccess extends $dara.Model {
  /**
   * @remarks
   * The HTTP API ID associated with the Agent access capability. The frontend uses this ID to call existing HTTP API, route, consumer authorization, policy, and plugin query interfaces.
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
   * The list of consumer identity bindings maintained by the Agent domain. The Model API ID and the consumer IDs in this list together identify the Agent identity and take effect on all routes of the Model API. Consumer details and their Model API authorization details can be obtained through existing Consumer API and consumer authorization query interfaces.
   */
  consumerIds?: string[];
  /**
   * @remarks
   * The Model API ID associated with the model access capability. Model Access does not distinguish routes. The frontend uses this ID to query the Model API basic information and all routes.
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
   * The associated resource information for the Agent access capability. Returns null if the Agent access capability is not configured.
   * 
   * **if can be null:**
   * true
   */
  agentAccess?: AgentInfoAgentAccess;
  /**
   * @remarks
   * Agent ID。
   * 
   * @example
   * agent-1
   */
  agentId?: string;
  /**
   * @remarks
   * The Agent type. DashScope (Bailian) allows only Agent access. Dify allows both Agent access and model access. ClaudeCode allows only model access. Custom allows both Agent access and model access.
   * 
   * @example
   * Custom
   */
  agentType?: string;
  /**
   * @remarks
   * The list of capabilities that the current Agent type allows to be configured. This field does not indicate that the capabilities are already configured. To determine whether a capability is configured, check whether agentAccess or modelAccess is null.
   */
  allowedCapabilities?: string[];
  /**
   * @remarks
   * The Agent creation time, in Unix millisecond timestamp.
   * 
   * @example
   * 1755129600000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The Agent description.
   * 
   * @example
   * custom agent
   */
  description?: string;
  /**
   * @remarks
   * The gateway ID to which the Agent belongs. When reading the associated API deployment configuration, select the configuration whose gatewayId matches this value.
   * 
   * @example
   * gateway-1
   */
  gatewayId?: string;
  /**
   * @remarks
   * The associated resource information for the model access capability. Returns null if the model access capability is not configured.
   * 
   * **if can be null:**
   * true
   */
  modelAccess?: AgentInfoModelAccess;
  /**
   * @remarks
   * The Agent name.
   * 
   * @example
   * my-agent
   */
  name?: string;
  /**
   * @remarks
   * The resource group ID in which the Agent is saved.
   * 
   * @example
   * rg-1
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Agent status. An Agent that is successfully created and queryable always returns Ready. Internal creation or compensation states are not returned externally.
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The Agent last update time, in Unix millisecond timestamp.
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

