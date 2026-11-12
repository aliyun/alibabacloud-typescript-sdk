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
     * The ID of the applicable MCP service.
     *
     * @example
     * mcp-example
     */
    resourceId?: string;
    /**
     * @remarks
     * The resource name. This field is empty if the resource has been deleted.
     *
     * @example
     * my-mcp-service
     */
    resourceName?: string;
    /**
     * @remarks
     * The resource type. Currently, the value is mcpServer, which indicates an MCP service.
     *
     * @example
     * mcpServer
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
     * The creation time in UTC format based on RFC 3339.
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
     * The masked credential content. For the apiKey type, the masked key is returned. For the mcpHeader type, only the header name is returned, and the value is not returned.
     *
     * @example
     * {"apiKey":"****************"}
     */
    credentialMetadata?: string;
    /**
     * @remarks
     * The credential type. Valid values: apiKey (API key) and mcpHeader (MCP request header).
     *
     * @example
     * apiKey
     */
    credentialType?: string;
    /**
     * @remarks
     * The credential description. It can be up to 256 characters in length.
     *
     * @example
     * API key used to call the model service in the production environment
     */
    description?: string;
    /**
     * @remarks
     * The credential name. It must be unique within the workspace, contain only letters, digits, periods, underscores, and hyphens, and be 3 to 99 characters in length. Runtime reserved names are not allowed.
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
     * The list of MCP services applicable to the credential.
     */
    resourceRefs?: GetCredentialResponseBodyDataResourceRefs[];
    /**
     * @remarks
     * The application scope of the credential. ALL indicates all scopes, and SPECIFIED indicates specific MCP services.
     *
     * @example
     * ALL
     */
    resourceScope?: string;
    /**
     * @remarks
     * The last modification time in UTC format based on RFC 3339.
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
