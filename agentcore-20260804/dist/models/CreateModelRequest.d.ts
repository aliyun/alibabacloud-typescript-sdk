import * as $dara from '@darabonba/typescript';
export declare class CreateModelRequestBodyCapabilities extends $dara.Model {
    /**
     * @remarks
     * Specifies whether the model supports audio input or output.
     */
    audio?: boolean;
    /**
     * @remarks
     * Specifies whether the model supports document input.
     */
    document?: boolean;
    /**
     * @remarks
     * Specifies whether the model is able to invoke tool calling multiple times in a single response.
     */
    multiToolCall?: boolean;
    /**
     * @remarks
     * Specifies whether the model supports reasoning capabilities.
     */
    reasoning?: boolean;
    /**
     * @remarks
     * Specifies whether the model is able to invoke tool calling in a streaming manner.
     */
    streamToolCall?: boolean;
    /**
     * @remarks
     * Specifies whether the model supports tool calling.
     */
    toolCall?: boolean;
    /**
     * @remarks
     * Specifies whether the model supports video input.
     */
    video?: boolean;
    /**
     * @remarks
     * Specifies whether the model supports image input.
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
export declare class CreateModelRequestBody extends $dara.Model {
    /**
     * @remarks
     * The model capability configurations.
     */
    capabilities?: CreateModelRequestBodyCapabilities;
    /**
     * @remarks
     * The model connection ID.
     *
     * This parameter is required.
     *
     * @example
     * mc-1
     */
    connectionId?: string;
    /**
     * @remarks
     * The context window size of the model, in tokens. Must be a positive integer.
     *
     * @example
     * 128000
     */
    contextSize?: number;
    /**
     * @remarks
     * The model description. Maximum length: 255 characters.
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
     * The upstream model name.
     *
     * This parameter is required.
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
export declare class CreateModelRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: CreateModelRequestBody;
    /**
     * @remarks
     * The client token used for idempotence. Not supported.
     *
     * @example
     * client-token-1
     */
    clientToken?: string;
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
