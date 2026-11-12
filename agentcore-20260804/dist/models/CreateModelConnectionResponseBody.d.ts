import * as $dara from '@darabonba/typescript';
export declare class CreateModelConnectionResponseBodyData extends $dara.Model {
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
     * The time when the resource was created. The time is in the RFC 3339 UTC format.
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
     * The name of the model connection. It must be 1 to 128 non-whitespace characters in length.
     *
     * @example
     * name
     */
    name?: string;
    /**
     * @remarks
     * The model invoke protocol. Currently, only OpenAI/v1 is supported. If the Settings are not specified when you create a model connection, this default value is used for model creation.
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
     * The failure summary returned when the model connection fails to be published, or when the deletion fails but the connection remains in the deleting state. This field is empty in other states.
     *
     * @example
     * GatewayOperationException
     */
    statusReason?: string;
    /**
     * @remarks
     * The time when the resource was last updated. The time is in the RFC 3339 UTC format.
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
export declare class CreateModelConnectionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code. The value is SUCCESS if the request is successful.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The information about the created model connection.
     */
    data?: CreateModelConnectionResponseBodyData;
    /**
     * @remarks
     * The HTTP status code. The value is 200 if the request is successful.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
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
