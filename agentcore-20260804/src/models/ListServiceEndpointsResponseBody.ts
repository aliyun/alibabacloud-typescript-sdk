// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceEndpointsResponseBodyItemsAccessUrls extends $dara.Model {
  /**
   * @remarks
   * The access URL type. Valid values: INTERNET and VPC.
   * 
   * @example
   * INTERNET
   */
  accessType?: string;
  /**
   * @remarks
   * The status of the access URL. Valid values: CREATING, READY, and DEGRADED.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The reason for the access URL status. Returns the specific reason when the status is abnormal.
   * 
   * @example
   * ServiceEndpoint.Provider.Unavailable: no provider for the target type
   */
  statusReason?: string;
  /**
   * @remarks
   * The access URL.
   * 
   * @example
   * https://endpoint.example.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'accessType',
      status: 'status',
      statusReason: 'statusReason',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      status: 'string',
      statusReason: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceEndpointsResponseBodyItemsAuthentication extends $dara.Model {
  /**
   * @remarks
   * The authentication method. NONE indicates that no authentication is required, and API_KEY indicates that authentication is performed by passing an API key through the x-api-key request header.
   * 
   * @example
   * API_KEY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceEndpointsResponseBodyItemsElasticityPolicy extends $dara.Model {
  /**
   * @remarks
   * Indicates whether elasticity is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum number of instances, which must be no less than 1.
   * 
   * @example
   * 5
   */
  maxSandboxCount?: number;
  /**
   * @remarks
   * The minimum number of instances, which must be no less than 0 and no greater than maxSandboxCount.
   * 
   * @example
   * 1
   */
  minSandboxCount?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      maxSandboxCount: 'maxSandboxCount',
      minSandboxCount: 'minSandboxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      maxSandboxCount: 'number',
      minSandboxCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceEndpointsResponseBodyItemsTarget extends $dara.Model {
  /**
   * @remarks
   * The ID of the target agent. Returned when the target type is AGENT_VERSION.
   * 
   * @example
   * agent-123456
   */
  agentId?: string;
  /**
   * @remarks
   * The version number of the target agent. Returned when the target type is AGENT_VERSION.
   * 
   * @example
   * v1
   */
  agentVersion?: string;
  /**
   * @remarks
   * The type of the collaboration component. Returned when the target type is TEAM_COLLABORATION.
   * 
   * @example
   * ELEMENT_WEB
   */
  collaborationComponent?: string;
  /**
   * @remarks
   * The workspace resource binding ID associated with the target collaboration component. Returned when the target type is TEAM_COLLABORATION.
   * 
   * @example
   * wrb-123456
   */
  resourceBindingId?: string;
  /**
   * @remarks
   * The target type. Valid values: AGENT_VERSION and TEAM_COLLABORATION.
   * 
   * @example
   * AGENT_VERSION
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      agentVersion: 'agentVersion',
      collaborationComponent: 'collaborationComponent',
      resourceBindingId: 'resourceBindingId',
      targetType: 'targetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentVersion: 'string',
      collaborationComponent: 'string',
      resourceBindingId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceEndpointsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The list of access URLs for the service endpoint.
   */
  accessUrls?: ListServiceEndpointsResponseBodyItemsAccessUrls[];
  /**
   * @remarks
   * The authentication configuration of the service endpoint.
   */
  authentication?: ListServiceEndpointsResponseBodyItemsAuthentication;
  /**
   * @remarks
   * The creation time in RFC 3339 UTC format.
   * 
   * @example
   * 2026-08-12T03:04:05Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The result of combining publicAccessEnabled with the workspace public access inbound upper limit. It is true only when both allow it. This only indicates the policy target and does not mean that the public access entry has been published. The actual status is subject to accessUrls and status.
   */
  effectivePublicAccessEnabled?: boolean;
  /**
   * @remarks
   * Returned only when elastic override values are set for the service endpoint. Can be set for Router-type service endpoints and DEFAULT service endpoints of the GATEWAY_API_WITH_VPC_INGRESS type. If no override values are set, this object is not returned, indicating that the source configuration of the agent is inherited. It must not be treated as an empty object or a default policy. When returned, all three fields are always included.
   */
  elasticityPolicy?: ListServiceEndpointsResponseBodyItemsElasticityPolicy;
  /**
   * @remarks
   * The type of the service endpoint. DEFAULT indicates a default endpoint created and maintained by the platform, and NAMED indicates a named endpoint explicitly created by a user.
   * 
   * @example
   * NAMED
   */
  endpointType?: string;
  /**
   * @remarks
   * The name of the service endpoint. It must be unique within the workspace and 1 to 128 characters in length.
   * 
   * @example
   * my-agent-endpoint
   */
  name?: string;
  /**
   * @remarks
   * The expected public access inbound setting configured by the user on the service endpoint. For legacy service endpoints where this has not been set, true is returned. This only indicates the configuration expectation. The actual availability of the public access URL is subject to accessUrls and status.
   */
  publicAccessEnabled?: boolean;
  /**
   * @remarks
   * The ID of the region where the service endpoint resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service endpoint.
   * 
   * @example
   * se-123456
   */
  serviceEndpointId?: string;
  /**
   * @remarks
   * The status of the service endpoint. Valid values: CREATING, READY, UPDATING, DEGRADED, DISABLED, and DELETING.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The reason for the service endpoint status. Returns the specific reason when the status is abnormal.
   * 
   * @example
   * ServiceEndpoint.Provider.Unavailable: no provider for the target type
   */
  statusReason?: string;
  /**
   * @remarks
   * The target routing configuration of the service endpoint.
   */
  target?: ListServiceEndpointsResponseBodyItemsTarget;
  /**
   * @remarks
   * The time of the last modification in RFC 3339 UTC format.
   * 
   * @example
   * 2026-08-12T03:04:05Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-123456
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessUrls: 'accessUrls',
      authentication: 'authentication',
      createdAt: 'createdAt',
      effectivePublicAccessEnabled: 'effectivePublicAccessEnabled',
      elasticityPolicy: 'elasticityPolicy',
      endpointType: 'endpointType',
      name: 'name',
      publicAccessEnabled: 'publicAccessEnabled',
      regionId: 'regionId',
      serviceEndpointId: 'serviceEndpointId',
      status: 'status',
      statusReason: 'statusReason',
      target: 'target',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessUrls: { 'type': 'array', 'itemType': ListServiceEndpointsResponseBodyItemsAccessUrls },
      authentication: ListServiceEndpointsResponseBodyItemsAuthentication,
      createdAt: 'string',
      effectivePublicAccessEnabled: 'boolean',
      elasticityPolicy: ListServiceEndpointsResponseBodyItemsElasticityPolicy,
      endpointType: 'string',
      name: 'string',
      publicAccessEnabled: 'boolean',
      regionId: 'string',
      serviceEndpointId: 'string',
      status: 'string',
      statusReason: 'string',
      target: ListServiceEndpointsResponseBodyItemsTarget,
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accessUrls)) {
      $dara.Model.validateArray(this.accessUrls);
    }
    if(this.authentication && typeof (this.authentication as any).validate === 'function') {
      (this.authentication as any).validate();
    }
    if(this.elasticityPolicy && typeof (this.elasticityPolicy as any).validate === 'function') {
      (this.elasticityPolicy as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of service endpoints.
   */
  items?: ListServiceEndpointsResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of records per page returned in this query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message. Returns an error description if the request fails.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The cursor for the next page. Empty if there is no next page.
   * 
   * @example
   * djE6YWdlbnRjb3JlLnNlcnZpY2UtZW5kcG9pbnQubGlzdDoyMA
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-123456
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of service endpoints that meet the query conditions.
   * 
   * @example
   * 42
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListServiceEndpointsResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

