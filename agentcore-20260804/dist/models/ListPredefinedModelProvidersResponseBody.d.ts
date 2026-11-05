import * as $dara from '@darabonba/typescript';
export declare class ListPredefinedModelProvidersResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The default model service endpoint of the provider.
     *
     * @example
     * https://dashscope.aliyuncs.com/compatible-mode/v1
     */
    defaultEndpoint?: string;
    /**
     * @remarks
     * The default model invocation protocol of the provider.
     *
     * @example
     * OpenAI/v1
     */
    defaultProtocol?: string;
    /**
     * @remarks
     * The display name of the model provider.
     *
     * @example
     * Alibaba Cloud Model Studio
     */
    displayName?: string;
    /**
     * @remarks
     * The model provider type.
     *
     * @example
     * qwen
     */
    providerType?: string;
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
export declare class ListPredefinedModelProvidersResponseBody extends $dara.Model {
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
     * The list of predefined model providers.
     */
    data?: ListPredefinedModelProvidersResponseBodyData[];
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
