import * as $dara from '@darabonba/typescript';
export declare class UpdateModelRequestBodyCapabilities extends $dara.Model {
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
     * Specifies whether the model supports reasoning capabilities. A value of true indicates that reasoning is supported, and a value of false indicates that it is not supported. This field is a capability flag and is not used to set reasoning intensity or reasoning token budgets.
     */
    reasoning?: boolean;
    /**
     * @remarks
     * Specifies whether the model is able to invoke streaming tool calling.
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
export declare class UpdateModelRequestBody extends $dara.Model {
    /**
     * @remarks
     * The model capability configurations. When an object is passed, the original capability configurations are replaced as a whole. Unpassed capability fields within the object are treated as false. Passing an empty object {} sets all capabilities to false. If this parameter is omitted or passed as null, the original configurations are retained.
     */
    capabilities?: UpdateModelRequestBodyCapabilities;
    /**
     * @remarks
     * The context token limit of the model. The minimum value is 1000. The updated value must not be less than maxTokens. If maxTokens is not provided in the current request, the existing value is used for validation. If this parameter is omitted or passed as null, the original value is retained.
     *
     * @example
     * 131072
     */
    contextSize?: number;
    /**
     * @remarks
     * The model description. The maximum length is 255 characters after leading and trailing whitespaces are removed. Pass an empty string to clear the description. If this parameter is omitted or passed as null, the original value is retained. Modifying only the description does not refresh the model configuration of associated agents.
     *
     * @example
     * description
     */
    description?: string;
    /**
     * @remarks
     * The maximum number of output tokens for a single generation by the model. The value must be a positive integer. If contextSize is configured, the updated maxTokens must not be greater than contextSize. If contextSize is not provided in the current request, the existing value is used for validation. If this parameter is omitted or passed as null, the original value is retained.
     *
     * @example
     * 8192
     */
    maxTokens?: number;
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
export declare class UpdateModelRequest extends $dara.Model {
    /**
     * @remarks
     * The model update request body. At least one non-null parameter among description, contextSize, maxTokens, and capabilities must be provided.
     */
    body?: UpdateModelRequestBody;
    /**
     * @remarks
     * The client token used for idempotence. This parameter is not supported.
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
