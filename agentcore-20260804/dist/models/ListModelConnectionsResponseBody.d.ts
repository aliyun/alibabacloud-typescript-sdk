import * as $dara from '@darabonba/typescript';
export declare class ListModelConnectionsResponseBodyItemsModels extends $dara.Model {
    /**
     * @remarks
     * The model ID.
     *
     * @example
     * model-1
     */
    modelId?: string;
    /**
     * @remarks
     * The name of the upstream model.
     *
     * @example
     * qwen-max
     */
    modelName?: string;
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
export declare class ListModelConnectionsResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The number of API keys configured in the model connection.
     *
     * @example
     * 1
     */
    apiKeyCount?: number;
    /**
     * @remarks
     * The model connection ID.
     *
     * @example
     * mc-1
     */
    connectionId?: string;
    /**
     * @remarks
     * The time when the resource was created. The time is displayed in the RFC 3339 UTC format.
     *
     * @example
     * 2026-08-09T00:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * Indicates whether access credentials are configured for the model connection.
     */
    credentialConfigured?: boolean;
    /**
     * @remarks
     * The description of the model connection. The description can be up to 255 characters in length.
     *
     * @example
     * description
     */
    description?: string;
    /**
     * @remarks
     * The absolute HTTP or HTTPS URL of the upstream model service. The URL can be up to 1,024 characters in length.
     *
     * @example
     * https://dashscope.aliyuncs.com/compatible-mode/v1
     */
    endpoint?: string;
    /**
     * @remarks
     * The list of summaries of models associated with the model connection.
     */
    models?: ListModelConnectionsResponseBodyItemsModels[];
    /**
     * @remarks
     * The name of the model connection. The name must be 1 to 128 characters in length and cannot contain whitespace characters.
     *
     * @example
     * name
     */
    name?: string;
    /**
     * @remarks
     * The model invocation protocol. Currently, only OpenAI/v1 is supported. If this parameter is not specified during model connection creation, this default value is used.
     *
     * @example
     * OpenAI/v1
     */
    protocol?: string;
    /**
     * @remarks
     * The model provider type.
     *
     * @example
     * qwen
     */
    providerType?: string;
    /**
     * @remarks
     * The resource status.
     *
     * @example
     * Active
     */
    status?: string;
    /**
     * @remarks
     * The failure summary returned when the model connection fails to be published, or when deletion fails but the connection remains in the deleting state. This field is empty in other states.
     *
     * @example
     * GatewayOperationException
     */
    statusReason?: string;
    /**
     * @remarks
     * The time when the resource was last updated. The time is displayed in the RFC 3339 UTC format.
     *
     * @example
     * 2026-08-09T00:00:00Z
     */
    updatedAt?: string;
    /**
     * @remarks
     * The workspace ID.
     *
     * @example
     * ws-1
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
export declare class ListModelConnectionsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code. A value of SUCCESS indicates success.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The HTTP status code. A value of 200 indicates success.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The list of model connections.
     */
    items?: ListModelConnectionsResponseBodyItems[];
    /**
     * @remarks
     * The maximum number of entries to return on each page. Valid values: 0 to 100. Default value: 10. If this parameter is not specified or is set to 0, the default value is used.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The message about the request processing result.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The pagination token. Pass the token returned in the previous query for the current request. An empty response indicates that no more pages are available.
     *
     * @example
     * bW9kZWwtbWFuYWdlbWVudC1vZmZzZXQ6bW9kZWwtY29ubmVjdGlvbjoxMA
     */
    nextToken?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * request-1
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
     */
    success?: boolean;
    /**
     * @remarks
     * The total number of resources that meet the query conditions.
     *
     * @example
     * 1
     */
    totalCount?: number;
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
