import * as $dara from '@darabonba/typescript';
export declare class UpdateCredentialResponseBodyDataResourceRefs extends $dara.Model {
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
     * The resource name. This field is empty if the resource is deleted.
     *
     * @example
     * my-mcp-service
     */
    resourceName?: string;
    /**
     * @remarks
     * The resource type. The current value is mcpServer, which indicates an MCP service.
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
export declare class UpdateCredentialResponseBodyData extends $dara.Model {
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
     * The masked result of the credential content. For the apiKey type, a key mask is returned. For the mcpHeader type, only the header names are returned, and the values are not returned.
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
     * The credential description. The description can be up to 256 characters in length.
     *
     * @example
     * API key used to call the model service in the production environment
     */
    description?: string;
    /**
     * @remarks
     * The credential name. It must be unique within the workspace, contain only letters, digits, periods, underscores, and hyphens, and be 3 to 99 characters in length. Runtime reserved names cannot be used.
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
     * The list of MCP services to which the credential applies.
     */
    resourceRefs?: UpdateCredentialResponseBodyDataResourceRefs[];
    /**
     * @remarks
     * The application scope of the credential. ALL indicates all scopes, and SPECIFIED indicates the specified MCP services.
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
export declare class UpdateCredentialResponseBody extends $dara.Model {
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
     * The updated credential information.
     */
    data?: UpdateCredentialResponseBodyData;
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
