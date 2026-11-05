import * as $dara from '@darabonba/typescript';
export declare class GetCredentialResponseBodyDataBoundAgents extends $dara.Model {
    /**
     * @remarks
     * The agent ID.
     *
     * @example
     * agent-123456
     */
    agentId?: string;
    /**
     * @remarks
     * The agent name.
     *
     * @example
     * agent-01
     */
    agentName?: string;
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
export declare class GetCredentialResponseBodyDataResourceRefs extends $dara.Model {
    /**
     * @remarks
     * The unique identifier of the resource.
     *
     * @example
     * agent-xxxx
     */
    resourceId?: string;
    /**
     * @remarks
     * The resource name. This field is empty if the resource is deleted.
     *
     * @example
     * my-agent
     */
    resourceName?: string;
    /**
     * @remarks
     * The resource type, such as agent.
     *
     * @example
     * agent
     */
    resourceType?: string;
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
export declare class GetCredentialResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The list of agents bound to the credential.
     */
    boundAgents?: GetCredentialResponseBodyDataBoundAgents[];
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
     * The credential ID.
     *
     * @example
     * cred-123456
     */
    credentialId?: string;
    /**
     * @remarks
     * The masked result of the credential content. When credentialType is apiKey, the value of apiKey is returned as asterisks (*) of the same length.
     *
     * @example
     * {"apiKey":"****************"}
     */
    credentialMetadata?: string;
    /**
     * @remarks
     * The credential type. Currently, only apiKey is supported.
     *
     * @example
     * apiKey
     */
    credentialType?: string;
    /**
     * @remarks
     * The credential description, which cannot exceed 256 characters in length.
     *
     * @example
     * API key used for calling model services in the production environment
     */
    description?: string;
    /**
     * @remarks
     * The credential name. It must be unique within the workspace, contain only letters, digits, periods (.), underscores (_), and hyphens (-), be 3 to 128 characters in length, and cannot use runtime reserved names.
     *
     * @example
     * model-api-key
     */
    name?: string;
    /**
     * @remarks
     * The region ID of the resource.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * Each item includes resourceType, resourceId, and resourceName. If the resource is deleted, resourceName is empty.
     */
    resourceRefs?: GetCredentialResponseBodyDataResourceRefs[];
    /**
     * @remarks
     * The application scope of the credential resource.
     *
     * @example
     * ALL
     */
    resourceScope?: string;
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
export declare class GetCredentialResponseBody extends $dara.Model {
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
     * The credential details.
     */
    data?: GetCredentialResponseBodyData;
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
