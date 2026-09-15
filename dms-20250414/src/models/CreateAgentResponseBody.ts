// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentResponseBodyDataApiKey extends $dara.Model {
  agentId?: string;
  agentName?: string;
  agentType?: string;
  createdAt?: string;
  creatorId?: string;
  creatorName?: string;
  description?: string;
  expireTime?: string;
  id?: number;
  isRevoked?: boolean;
  keyPrefix?: string;
  lastUsedTime?: string;
  name?: string;
  secret?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      agentType: 'AgentType',
      createdAt: 'CreatedAt',
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      description: 'Description',
      expireTime: 'ExpireTime',
      id: 'Id',
      isRevoked: 'IsRevoked',
      keyPrefix: 'KeyPrefix',
      lastUsedTime: 'LastUsedTime',
      name: 'Name',
      secret: 'Secret',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      agentType: 'string',
      createdAt: 'string',
      creatorId: 'string',
      creatorName: 'string',
      description: 'string',
      expireTime: 'string',
      id: 'number',
      isRevoked: 'boolean',
      keyPrefix: 'string',
      lastUsedTime: 'string',
      name: 'string',
      secret: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentResponseBodyData extends $dara.Model {
  agentId?: string;
  agentName?: string;
  agentType?: string;
  apiKey?: CreateAgentResponseBodyDataApiKey;
  createdAt?: string;
  creationType?: string;
  description?: string;
  ownerId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      agentType: 'AgentType',
      apiKey: 'ApiKey',
      createdAt: 'CreatedAt',
      creationType: 'CreationType',
      description: 'Description',
      ownerId: 'OwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      agentType: 'string',
      apiKey: CreateAgentResponseBodyDataApiKey,
      createdAt: 'string',
      creationType: 'string',
      description: 'string',
      ownerId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.apiKey && typeof (this.apiKey as any).validate === 'function') {
      (this.apiKey as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentResponseBody extends $dara.Model {
  data?: CreateAgentResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateAgentResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

