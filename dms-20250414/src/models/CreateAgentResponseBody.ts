// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentResponseBodyDataApiKey extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent to which the API key belongs.
   * 
   * @example
   * agt-1a2b3c4d5e6f
   */
  agentId?: string;
  /**
   * @remarks
   * The name of the agent to which the API key belongs.
   * 
   * @example
   * order-analysis-agent
   */
  agentName?: string;
  /**
   * @remarks
   * The permission inheritance type of the agent to which the API key belongs.
   * 
   * @example
   * HUMAN_BOUND
   */
  agentType?: string;
  /**
   * @remarks
   * The time when the API key was created. The value is a time string in RFC 3339 format.
   * 
   * @example
   * 2025-12-11T14:04:32Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The user ID of the user who created the API key.
   * 
   * @example
   * usr-1a2b3c4d
   */
  creatorId?: string;
  /**
   * @remarks
   * The name of the user who created the API key.
   * 
   * @example
   * John Doe
   */
  creatorName?: string;
  /**
   * @remarks
   * The description of the API key.
   * 
   * @example
   * Access Token automatically issued when the Agent is created
   */
  description?: string;
  /**
   * @remarks
   * The expiration time of the API key. The value is a time string in RFC 3339 format.
   * 
   * @example
   * 2026-12-11T14:04:32Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The primary key ID of the API key.
   * 
   * @example
   * 1001
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the API key has been revoked.
   */
  isRevoked?: boolean;
  /**
   * @remarks
   * The non-sensitive visible prefix of the API key plaintext, used to identify the credential. The plaintext secret is not returned again.
   * 
   * @example
   * dms_sk_1a2b
   */
  keyPrefix?: string;
  /**
   * @remarks
   * The time when the API key was last used. The value is a time string in RFC 3339 format. This parameter is empty if the API key has never been used.
   * 
   * @example
   * 2025-12-12T09:30:00Z
   */
  lastUsedTime?: string;
  /**
   * @remarks
   * The name of the API key.
   * 
   * @example
   * order-analysis-agent-default
   */
  name?: string;
  /**
   * @remarks
   * The plaintext secret of the API key. This value is returned only once in this creation response. Store it securely. Subsequent API calls do not return the plaintext secret again.
   * 
   * @example
   * dms_sk_1a2b3c4d****
   */
  secret?: string;
  /**
   * @remarks
   * The credential source. Valid values: console (issued from the console), oauth (issued through the OAuth flow), install_token (issued through the install-and-authenticate flow). The API key automatically issued by this operation is always console.
   * 
   * @example
   * console
   */
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
  /**
   * @remarks
   * The globally unique ID of the agent.
   * 
   * @example
   * agt-1a2b3c4d5e6f
   */
  agentId?: string;
  /**
   * @remarks
   * The agent name.
   * 
   * @example
   * order-analysis-agent
   */
  agentName?: string;
  /**
   * @remarks
   * The permission inheritance type of the agent. Valid values: HUMAN_BOUND (inherits user permissions), PERMISSION_NARROW (narrows permissions), STANDALONE (operates as an independent identity principal without inheriting permissions from other principals).
   * 
   * @example
   * HUMAN_BOUND
   */
  agentType?: string;
  /**
   * @remarks
   * The automatically issued API key for the new agent. The plaintext secret is returned only once in this response.
   */
  apiKey?: CreateAgentResponseBodyDataApiKey;
  /**
   * @remarks
   * The time when the agent was created. The value is a time string in RFC 3339 format.
   * 
   * @example
   * 2025-12-11T14:04:32Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The creation method of the agent. Valid values: manual (manually created in the console), auto (automatic creation by the system). Agents created by this operation are always manual.
   * 
   * @example
   * manual
   */
  creationType?: string;
  /**
   * @remarks
   * The description of the agent.
   * 
   * @example
   * An agent for querying and analyzing order data
   */
  description?: string;
  /**
   * @remarks
   * The user ID of the agent owner, which is the current user who initiated the creation request.
   * 
   * @example
   * usr-1a2b3c4d
   */
  ownerId?: string;
  /**
   * @remarks
   * The status of the agent. Valid values: active (enabled), disabled (disabled), deleted (deleted). A newly created agent is always active.
   * 
   * @example
   * active
   */
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
  /**
   * @remarks
   * The agent information and the automatically issued API key returned after the agent is created.
   */
  data?: CreateAgentResponseBodyData;
  /**
   * @remarks
   * The status code of the request result. A value of success indicates success. A specific error code is returned upon failure.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the request fails. This parameter is empty when the request succeeds.
   * 
   * @example
   * agentName must not be blank
   */
  errorMessage?: string;
  /**
   * @remarks
   * The unique ID of the request. You can use this ID for troubleshooting and tracing.
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
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

