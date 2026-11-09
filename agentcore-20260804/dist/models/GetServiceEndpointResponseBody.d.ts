import * as $dara from '@darabonba/typescript';
export declare class GetServiceEndpointResponseBodyDataAccessUrls extends $dara.Model {
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
     * The access URL status. Valid values: CREATING, READY, and DEGRADED.
     *
     * @example
     * READY
     */
    status?: string;
    /**
     * @remarks
     * The reason for the access URL status. The specific reason is returned when the status is abnormal.
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
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetServiceEndpointResponseBodyDataAuthentication extends $dara.Model {
    /**
     * @remarks
     * The authentication method. NONE indicates that no authentication is required. API_KEY indicates that authentication is performed by passing an API key in the x-api-key request header.
     *
     * @example
     * API_KEY
     */
    type?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetServiceEndpointResponseBodyDataElasticityPolicy extends $dara.Model {
    /**
     * @remarks
     * Specifies whether elasticity is enabled.
     *
     * @example
     * true
     */
    enabled?: boolean;
    /**
     * @remarks
     * The maximum number of instances. The value must be greater than or equal to 1.
     *
     * @example
     * 5
     */
    maxSandboxCount?: number;
    /**
     * @remarks
     * The minimum number of instances. The value must be greater than or equal to 0 and less than or equal to the value of maxSandboxCount.
     *
     * @example
     * 1
     */
    minSandboxCount?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetServiceEndpointResponseBodyDataTarget extends $dara.Model {
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
     * The target type. Valid values: AGENT_VERSION and TEAM_COLLABORATION.
     *
     * @example
     * AGENT_VERSION
     */
    targetType?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetServiceEndpointResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The list of access URLs for the service endpoint.
     */
    accessUrls?: GetServiceEndpointResponseBodyDataAccessUrls[];
    /**
     * @remarks
     * The authentication configuration of the service endpoint.
     */
    authentication?: GetServiceEndpointResponseBodyDataAuthentication;
    /**
     * @remarks
     * The creation time in UTC format compliant with RFC 3339.
     *
     * @example
     * 2026-08-12T03:04:05Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The result of combining publicAccessEnabled with the public inbound access upper limit of the workspace. The value is true only when both allow public inbound access. This field only indicates the policy target and does not mean that the public endpoint has been published. The actual status is subject to accessUrls and status.
     */
    effectivePublicAccessEnabled?: boolean;
    /**
     * @remarks
     * This object is returned only when elastic override values are configured for the service endpoint. You can configure override values for Router-type service endpoints and DEFAULT service endpoints of the GATEWAY_API_WITH_VPC_INGRESS type. If no override values are configured, this object is not returned, which indicates that the source configuration of the agent is inherited. Do not treat the absence of this object as an empty object or a default policy. When this object is returned, all three fields are included.
     */
    elasticityPolicy?: GetServiceEndpointResponseBodyDataElasticityPolicy;
    /**
     * @remarks
     * The service endpoint type. DEFAULT indicates the default endpoint created and maintained by the platform. NAMED indicates the named endpoint explicitly created by the user.
     *
     * @example
     * NAMED
     */
    endpointType?: string;
    /**
     * @remarks
     * The service endpoint name. The name must be unique within the workspace and be 1 to 128 characters in length.
     *
     * @example
     * my-agent-endpoint
     */
    name?: string;
    /**
     * @remarks
     * The expected public inbound access configured by the user on the service endpoint. For historical service endpoints where this value is not configured, true is returned. This field only indicates the configuration expectation. The actual availability of the public URL is subject to accessUrls and status.
     */
    publicAccessEnabled?: boolean;
    /**
     * @remarks
     * The region ID of the service endpoint.
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
     * The service endpoint status. Valid values: CREATING, READY, UPDATING, DEGRADED, DISABLED, and DELETING.
     *
     * @example
     * READY
     */
    status?: string;
    /**
     * @remarks
     * The reason for the service endpoint status. The specific reason is returned when the status is abnormal.
     *
     * @example
     * ServiceEndpoint.Provider.Unavailable: no provider for the target type
     */
    statusReason?: string;
    /**
     * @remarks
     * The target route configuration of the service endpoint.
     */
    target?: GetServiceEndpointResponseBodyDataTarget;
    /**
     * @remarks
     * The time of the last modification in UTC format compliant with RFC 3339.
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
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetServiceEndpointResponseBody extends $dara.Model {
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
     * The service endpoint details.
     */
    data?: GetServiceEndpointResponseBodyData;
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
     * The response message. An error description is returned if the request fails.
     *
     * @example
     * success
     */
    message?: string;
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
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
