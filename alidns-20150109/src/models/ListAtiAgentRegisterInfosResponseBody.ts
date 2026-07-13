// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAtiAgentRegisterInfosResponseBodyAccessDeniedDetail extends $dara.Model {
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
   * The encrypted diagnostic message.
   * 
   * @example
   * AQFohtp4aIbaeEXXXXQxNjFDLUIzMzgtNTXXXX05NkFCLUI2RkY5XXXXzAzQQ==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The cause of the authentication failure. Valid values:
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

export class ListAtiAgentRegisterInfosResponseBodyAgentRegisterInfosAgentRegisterInfoEndpointsEndpoint extends $dara.Model {
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAtiAgentRegisterInfosResponseBodyAgentRegisterInfosAgentRegisterInfoEndpoints extends $dara.Model {
  endpoint?: ListAtiAgentRegisterInfosResponseBodyAgentRegisterInfosAgentRegisterInfoEndpointsEndpoint[];
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: { 'type': 'array', 'itemType': ListAtiAgentRegisterInfosResponseBodyAgentRegisterInfosAgentRegisterInfoEndpointsEndpoint },
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

export class ListAtiAgentRegisterInfosResponseBodyAgentRegisterInfosAgentRegisterInfo extends $dara.Model {
  agentDisplayName?: string;
  agentHost?: string;
  agentId?: string;
  agentRegisterInfoId?: string;
  agentVersion?: string;
  atiName?: string;
  createTimestamp?: string;
  endpoints?: ListAtiAgentRegisterInfosResponseBodyAgentRegisterInfosAgentRegisterInfoEndpoints;
  status?: string;
  updateTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      agentDisplayName: 'AgentDisplayName',
      agentHost: 'AgentHost',
      agentId: 'AgentId',
      agentRegisterInfoId: 'AgentRegisterInfoId',
      agentVersion: 'AgentVersion',
      atiName: 'AtiName',
      createTimestamp: 'CreateTimestamp',
      endpoints: 'Endpoints',
      status: 'Status',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentDisplayName: 'string',
      agentHost: 'string',
      agentId: 'string',
      agentRegisterInfoId: 'string',
      agentVersion: 'string',
      atiName: 'string',
      createTimestamp: 'string',
      endpoints: ListAtiAgentRegisterInfosResponseBodyAgentRegisterInfosAgentRegisterInfoEndpoints,
      status: 'string',
      updateTimestamp: 'string',
    };
  }

  validate() {
    if(this.endpoints && typeof (this.endpoints as any).validate === 'function') {
      (this.endpoints as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAtiAgentRegisterInfosResponseBodyAgentRegisterInfos extends $dara.Model {
  agentRegisterInfo?: ListAtiAgentRegisterInfosResponseBodyAgentRegisterInfosAgentRegisterInfo[];
  static names(): { [key: string]: string } {
    return {
      agentRegisterInfo: 'AgentRegisterInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRegisterInfo: { 'type': 'array', 'itemType': ListAtiAgentRegisterInfosResponseBodyAgentRegisterInfosAgentRegisterInfo },
    };
  }

  validate() {
    if(Array.isArray(this.agentRegisterInfo)) {
      $dara.Model.validateArray(this.agentRegisterInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAtiAgentRegisterInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This field is returned only when RAM authentication fails.
   */
  accessDeniedDetail?: ListAtiAgentRegisterInfosResponseBodyAccessDeniedDetail;
  agentRegisterInfos?: ListAtiAgentRegisterInfosResponseBodyAgentRegisterInfos;
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
   * The token for the next query.
   * 
   * @example
   * 4698691
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page set for the paged query. This is the paging size. Maximum value: **100**. Default value: **20**. Settings determine how many rows are displayed per page.
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
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 11
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 2
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      agentRegisterInfos: 'AgentRegisterInfos',
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
      accessDeniedDetail: ListAtiAgentRegisterInfosResponseBodyAccessDeniedDetail,
      agentRegisterInfos: ListAtiAgentRegisterInfosResponseBodyAgentRegisterInfos,
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
    if(this.agentRegisterInfos && typeof (this.agentRegisterInfos as any).validate === 'function') {
      (this.agentRegisterInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

