// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentInfoAgentAccess extends $dara.Model {
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
  consumerIds?: string[];
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
   * **if can be null:**
   * true
   */
  agentAccess?: AgentInfoAgentAccess;
  agentId?: string;
  agentType?: string;
  allowedCapabilities?: string[];
  createTimestamp?: number;
  description?: string;
  gatewayId?: string;
  /**
   * **if can be null:**
   * true
   */
  modelAccess?: AgentInfoModelAccess;
  name?: string;
  resourceGroupId?: string;
  status?: string;
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

