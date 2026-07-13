// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAtiAgentRegisterInfoMarketResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The unauthorized operation that was attempted.
   * 
   * @example
   * CreateUser
   */
  authAction?: string;
  /**
   * @remarks
   * The display name of the authorization principal.
   * 
   * @example
   * 2015555733387XXXX
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The owner ID of the authorization principal.
   * 
   * @example
   * 10469733312XXX
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The identity type.
   * 
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The encrypted diagnostic message.
   * 
   * @example
   * AQFohtp4aIbaeEXXXXQxNjFDLUIzMzgtNTXXXX05NkFCLUI2RkY5XXXXzAzQQ==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The reason for the authentication failure. Valid values:
   * - ExplicitDeny: explicit deny.
   * - ImplicitDeny: implicit deny.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * DlpSend
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAtiAgentRegisterInfoMarketResponseBodyAgentsAgentProtocols extends $dara.Model {
  protocol?: string[];
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.protocol)) {
      $dara.Model.validateArray(this.protocol);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAtiAgentRegisterInfoMarketResponseBodyAgentsAgent extends $dara.Model {
  agentDescription?: string;
  agentDisplayName?: string;
  agentHost?: string;
  agentId?: string;
  agentVersion?: string;
  createTimestamp?: number;
  protocols?: SearchAtiAgentRegisterInfoMarketResponseBodyAgentsAgentProtocols;
  status?: string;
  trustCardUrl?: string;
  trustLevel?: string;
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      agentDescription: 'AgentDescription',
      agentDisplayName: 'AgentDisplayName',
      agentHost: 'AgentHost',
      agentId: 'AgentId',
      agentVersion: 'AgentVersion',
      createTimestamp: 'CreateTimestamp',
      protocols: 'Protocols',
      status: 'Status',
      trustCardUrl: 'TrustCardUrl',
      trustLevel: 'TrustLevel',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentDescription: 'string',
      agentDisplayName: 'string',
      agentHost: 'string',
      agentId: 'string',
      agentVersion: 'string',
      createTimestamp: 'number',
      protocols: SearchAtiAgentRegisterInfoMarketResponseBodyAgentsAgentProtocols,
      status: 'string',
      trustCardUrl: 'string',
      trustLevel: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.protocols && typeof (this.protocols as any).validate === 'function') {
      (this.protocols as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAtiAgentRegisterInfoMarketResponseBodyAgents extends $dara.Model {
  agent?: SearchAtiAgentRegisterInfoMarketResponseBodyAgentsAgent[];
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: { 'type': 'array', 'itemType': SearchAtiAgentRegisterInfoMarketResponseBodyAgentsAgent },
    };
  }

  validate() {
    if(Array.isArray(this.agent)) {
      $dara.Model.validateArray(this.agent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAtiAgentRegisterInfoMarketResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial. This field is returned only when RAM authentication fails.
   */
  accessDeniedDetail?: SearchAtiAgentRegisterInfoMarketResponseBodyAccessDeniedDetail;
  agents?: SearchAtiAgentRegisterInfoMarketResponseBodyAgents;
  /**
   * @remarks
   * The number of entries per batch query.
   * 
   * @example
   * 500
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query.
   * 
   * @example
   * 4698691
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number. Minimum value: **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for the paged query. Settings: maximum value: **100**. Default value: **20**. This parameter controls paging behavior.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 11
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      agents: 'Agents',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: SearchAtiAgentRegisterInfoMarketResponseBodyAccessDeniedDetail,
      agents: SearchAtiAgentRegisterInfoMarketResponseBodyAgents,
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.agents && typeof (this.agents as any).validate === 'function') {
      (this.agents as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

