import * as $dara from '@darabonba/typescript';
export declare class GetServiceEndpointResponseBodyDataAccessUrls extends $dara.Model {
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
     * The authentication method. NONE indicates that no authentication is required. API_KEY indicates that an API key is passed through the x-api-key request header for authentication.
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
     * The target type. Valid values: AGENT_VERSION, TEAM_COLLABORATION.
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
     * The creation time in UTC, formatted in RFC 3339.
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
     * The service endpoint name. The name must be unique within the workspace and can be 1 to 128 characters in length.
     *
     * @example
     * my-agent-endpoint
     */
    name?: string;
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
    target?: GetServiceEndpointResponseBodyDataTarget;
    /**
     * @remarks
     * The time of the last modification in UTC, formatted in RFC 3339.
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
     * The response message. An error description is returned when the request fails.
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
     * Indicates whether the request was successful.
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
