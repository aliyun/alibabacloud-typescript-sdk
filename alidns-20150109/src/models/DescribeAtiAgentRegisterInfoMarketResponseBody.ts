// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAtiAgentRegisterInfoMarketResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The unauthorized operation that was attempted.
   * 
   * @example
   * AddRspDomainServerHoldStatusForGatewayOte
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
   * 1046973331XXXX
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
   * The encrypted complete diagnostic message.
   * 
   * @example
   * AQFohtp4aIbaeEXXXXQxNjFDLUIzMzgtNTXXXX05NkFCLUI2RkY5XXXXzAzQQ==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The reason for the authentication failure. Valid values:
   * - ExplicitDeny: Explicit denial.
   * - ImplicitDeny: Implicit denial.
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

export class DescribeAtiAgentRegisterInfoMarketResponseBodyCategories extends $dara.Model {
  category?: string[];
  static names(): { [key: string]: string } {
    return {
      category: 'category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.category)) {
      $dara.Model.validateArray(this.category);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAtiAgentRegisterInfoMarketResponseBodyEndpointsEndpointTransports extends $dara.Model {
  transport?: string[];
  static names(): { [key: string]: string } {
    return {
      transport: 'Transport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transport: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.transport)) {
      $dara.Model.validateArray(this.transport);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAtiAgentRegisterInfoMarketResponseBodyEndpointsEndpoint extends $dara.Model {
  agentUrl?: string;
  metadataUrl?: string;
  protocol?: string;
  transports?: DescribeAtiAgentRegisterInfoMarketResponseBodyEndpointsEndpointTransports;
  static names(): { [key: string]: string } {
    return {
      agentUrl: 'AgentUrl',
      metadataUrl: 'MetadataUrl',
      protocol: 'Protocol',
      transports: 'Transports',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentUrl: 'string',
      metadataUrl: 'string',
      protocol: 'string',
      transports: DescribeAtiAgentRegisterInfoMarketResponseBodyEndpointsEndpointTransports,
    };
  }

  validate() {
    if(this.transports && typeof (this.transports as any).validate === 'function') {
      (this.transports as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAtiAgentRegisterInfoMarketResponseBodyEndpoints extends $dara.Model {
  endpoint?: DescribeAtiAgentRegisterInfoMarketResponseBodyEndpointsEndpoint[];
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: { 'type': 'array', 'itemType': DescribeAtiAgentRegisterInfoMarketResponseBodyEndpointsEndpoint },
    };
  }

  validate() {
    if(Array.isArray(this.endpoint)) {
      $dara.Model.validateArray(this.endpoint);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAtiAgentRegisterInfoMarketResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This field is returned only when RAM authentication fails.
   */
  accessDeniedDetail?: DescribeAtiAgentRegisterInfoMarketResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The capability description of the agent.
   * 
   * @example
   * Payment service
   */
  agentDescription?: string;
  /**
   * @remarks
   * The display name of the agent.
   * 
   * @example
   * TestAgent
   */
  agentDisplayName?: string;
  /**
   * @remarks
   * The host address of the agent.
   * 
   * @example
   * www.example.com
   */
  agentHost?: string;
  /**
   * @remarks
   * The agent ID, which is uniformly assigned by CNNIC after real-name verification. The AgentID serves as the unique identifier that binds the agent to the real-name authenticated registrant.
   * 
   * @example
   * gsc01629925@5e0964fd-951c-4e45-b518-d09d4d2db8ca
   */
  agentId?: string;
  /**
   * @remarks
   * The agent registration ID. This ID is automatically generated by the Alibaba Cloud ATS platform and is globally unique within the platform. It is automatically generated during the agent registration process. In the multi-step registration process through the API, this ID must be carried throughout all steps to ensure that each step is associated with the same agent and the complete registration process is completed.
   * 
   * @example
   * 2074753647748672512
   */
  agentRegisterInfoId?: string;
  /**
   * @remarks
   * The agent version.
   * 
   * @example
   * 3.9.3
   */
  agentVersion?: string;
  categories?: DescribeAtiAgentRegisterInfoMarketResponseBodyCategories;
  endpoints?: DescribeAtiAgentRegisterInfoMarketResponseBodyEndpoints;
  /**
   * @remarks
   * The maximum number of entries to return in this request.
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
   * The unique request ID.
   * 
   * @example
   * 0629502C-6224-5DC9-A8ED-2ED73A2E3931
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the DNS record. Valid values:
   * 
   * - Enable: DNS resolution is enabled.
   * - Disable: DNS resolution is paused.
   * 
   * @example
   * Disable
   */
  status?: string;
  /**
   * @remarks
   * Ignore.
   * 
   * @example
   * 忽略
   */
  trustCardContent?: string;
  /**
   * @remarks
   * The trust level. Valid values:
   * 
   * - Basic authentication
   * - Enhanced authentication
   * - Advanced authentication
   * 
   * @example
   * 基础认证
   */
  trustLevel?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      agentDescription: 'AgentDescription',
      agentDisplayName: 'AgentDisplayName',
      agentHost: 'AgentHost',
      agentId: 'AgentId',
      agentRegisterInfoId: 'AgentRegisterInfoId',
      agentVersion: 'AgentVersion',
      categories: 'Categories',
      endpoints: 'Endpoints',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      status: 'Status',
      trustCardContent: 'TrustCardContent',
      trustLevel: 'TrustLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: DescribeAtiAgentRegisterInfoMarketResponseBodyAccessDeniedDetail,
      agentDescription: 'string',
      agentDisplayName: 'string',
      agentHost: 'string',
      agentId: 'string',
      agentRegisterInfoId: 'string',
      agentVersion: 'string',
      categories: DescribeAtiAgentRegisterInfoMarketResponseBodyCategories,
      endpoints: DescribeAtiAgentRegisterInfoMarketResponseBodyEndpoints,
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      status: 'string',
      trustCardContent: 'string',
      trustLevel: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.categories && typeof (this.categories as any).validate === 'function') {
      (this.categories as any).validate();
    }
    if(this.endpoints && typeof (this.endpoints as any).validate === 'function') {
      (this.endpoints as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

