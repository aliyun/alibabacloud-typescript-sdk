// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAtiAgentRegisterInfoMarketResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @example
   * AddRspDomainServerHoldStatusForGatewayOte
   */
  authAction?: string;
  /**
   * @example
   * 2015555733387XXXX
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * 1046973331XXXX
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @example
   * AQFohtp4aIbaeEXXXXQxNjFDLUIzMzgtNTXXXX05NkFCLUI2RkY5XXXXzAzQQ==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
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
  accessDeniedDetail?: DescribeAtiAgentRegisterInfoMarketResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 支付服务
   */
  agentDescription?: string;
  /**
   * @example
   * 测试Agent
   */
  agentDisplayName?: string;
  /**
   * @example
   * www.example.com
   */
  agentHost?: string;
  /**
   * @example
   * gsc01629925@5e0964fd-951c-4e45-b518-d09d4d2db8ca
   */
  agentId?: string;
  /**
   * @example
   * 2074753647748672512
   */
  agentRegisterInfoId?: string;
  /**
   * @example
   * 3.9.3
   */
  agentVersion?: string;
  categories?: DescribeAtiAgentRegisterInfoMarketResponseBodyCategories;
  endpoints?: DescribeAtiAgentRegisterInfoMarketResponseBodyEndpoints;
  /**
   * @example
   * 500
   */
  maxResults?: number;
  /**
   * @example
   * 4698691
   */
  nextToken?: string;
  /**
   * @example
   * 0629502C-6224-5DC9-A8ED-2ED73A2E3931
   */
  requestId?: string;
  /**
   * @example
   * Disable
   */
  status?: string;
  /**
   * @example
   * 忽略
   */
  trustCardContent?: string;
  /**
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

