// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceEndpointsResponseBodyItemsAccessUrls extends $dara.Model {
  /**
   * @remarks
   * The access URL type. Valid values: INTERNET, VPC.
   * 
   * @example
   * INTERNET
   */
  accessType?: string;
  /**
   * @remarks
   * The access URL status. Valid values: CREATING, READY, DEGRADED.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The reason for the access URL status. A specific reason is returned when the status is abnormal.
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
   * The authentication method. NONE indicates that no authentication is required. API_KEY indicates that authentication is performed by passing an API key through the x-api-key request header.
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

export class ListServiceEndpointsResponseBodyItemsTarget extends $dara.Model {
  /**
   * @remarks
   * The target agent ID. This parameter is returned when the target type is AGENT_VERSION.
   * 
   * @example
   * agent-123456
   */
  agentId?: string;
  /**
   * @remarks
   * The target agent version number. This parameter is returned when the target type is AGENT_VERSION.
   * 
   * @example
   * v1
   */
  agentVersion?: string;
  /**
   * @remarks
   * The collaboration component type. This parameter is returned when the target type is TEAM_COLLABORATION.
   * 
   * @example
   * ELEMENT_WEB
   */
  collaborationComponent?: string;
  /**
   * @remarks
   * The workspace resource binding ID associated with the target collaboration component. This parameter is returned when the target type is TEAM_COLLABORATION.
   * 
   * @example
   * wrb-123456
   */
  resourceBindingId?: string;
  /**
   * @remarks
   * The target type. Valid values: AGENT_VERSION, TEAM_COLLABORATION.
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
   * The creation time in UTC, formatted according to RFC 3339.
   * 
   * @example
   * 2026-08-12T03:04:05Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The service endpoint type. DEFAULT indicates a default endpoint created and maintained by the platform. NAMED indicates a named endpoint explicitly created by the user.
   * 
   * @example
   * NAMED
   */
  endpointType?: string;
  /**
   * @remarks
   * The service endpoint name. The name is unique within the workspace and is 1 to 128 characters in length.
   * 
   * @example
   * my-agent-endpoint
   */
  name?: string;
  /**
   * @remarks
   * The region ID where the service endpoint is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service endpoint ID.
   * 
   * @example
   * se-123456
   */
  serviceEndpointId?: string;
  /**
   * @remarks
   * The service endpoint status. Valid values: CREATING, READY, UPDATING, DEGRADED, DISABLED, DELETING.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The reason for the service endpoint status. A specific reason is returned when the status is abnormal.
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
   * The last modification time in UTC, formatted according to RFC 3339.
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
      endpointType: 'endpointType',
      name: 'name',
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
      endpointType: 'string',
      name: 'string',
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
   * The maximum number of records per page that takes effect for this query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message. An error description is returned if the request fails.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next page. This value is empty if no more pages exist.
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
   * Indicates whether the request was successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of service endpoints that match the query conditions.
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

