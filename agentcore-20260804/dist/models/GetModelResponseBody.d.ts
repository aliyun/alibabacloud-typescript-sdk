import * as $dara from '@darabonba/typescript';
export declare class GetModelResponseBodyDataCapabilities extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the model supports audio input or output.
     */
    audio?: boolean;
    /**
     * @remarks
     * Indicates whether the model supports document input.
     */
    document?: boolean;
    /**
     * @remarks
     * Specifies whether the model is able to invoke multiple tool calling operations in a single response.
     */
    multiToolCall?: boolean;
    /**
     * @remarks
     * Indicates whether the model supports reasoning capabilities.
     */
    reasoning?: boolean;
    /**
     * @remarks
     * Indicates whether the model supports streaming tool calling.
     */
    streamToolCall?: boolean;
    /**
     * @remarks
     * Indicates whether the model supports tool calling.
     */
    toolCall?: boolean;
    /**
     * @remarks
     * Indicates whether the model supports video input.
     */
    video?: boolean;
    /**
     * @remarks
     * Indicates whether the model supports image input.
     */
    vision?: boolean;
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
export declare class GetModelResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The capability configurations of the model.
     */
    capabilities?: GetModelResponseBodyDataCapabilities;
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
     * The context window size of the model, in tokens. The value must be a positive integer.
     *
     * @example
     * 128000
     */
    contextSize?: number;
    /**
     * @remarks
     * The time when the resource was created, in RFC 3339 UTC format.
     *
     * @example
     * 2026-08-09T00:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The model description, which can be up to 255 characters in length.
     *
     * @example
     * description
     */
    description?: string;
    /**
     * @remarks
     * The maximum number of output tokens supported by the model in a single generation.
     *
     * @example
     * 131072
     */
    maxTokens?: number;
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
     * The upstream model name.
     *
     * @example
     * qwen-max
     */
    modelName?: string;
    /**
     * @remarks
     * The ID of the region to which the resource belongs.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The time when the resource was last updated, in RFC 3339 UTC format.
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
export declare class GetModelResponseBody extends $dara.Model {
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
     * The detailed information about the model.
     */
    data?: GetModelResponseBodyData;
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
