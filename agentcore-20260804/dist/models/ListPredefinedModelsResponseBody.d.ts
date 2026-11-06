import * as $dara from '@darabonba/typescript';
export declare class ListPredefinedModelsResponseBodyDataCapabilities extends $dara.Model {
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
     * Specifies whether the model is able to invoke streaming tool calling.
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
export declare class ListPredefinedModelsResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The model capability configurations.
     */
    capabilities?: ListPredefinedModelsResponseBodyDataCapabilities;
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
     * The maximum number of output tokens supported by the model per generation.
     *
     * @example
     * 131072
     */
    maxTokens?: number;
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
     * The release date of the model, in the YYYY-MM-DD format.
     *
     * @example
     * 2025-02-01
     */
    releaseDate?: string;
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
export declare class ListPredefinedModelsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code. The value is SUCCESS if the request succeeds.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The list of predefined models.
     */
    data?: ListPredefinedModelsResponseBodyData[];
    /**
     * @remarks
     * The HTTP status code. The value is 200 if the request succeeds.
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
