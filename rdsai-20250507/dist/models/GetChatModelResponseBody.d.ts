import * as $dara from '@darabonba/typescript';
export declare class GetChatModelResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The context window size of the model.
     *
     * @example
     * 1000000
     */
    contextWindow?: number;
    /**
     * @remarks
     * Indicates whether this is the default model.
     *
     * @example
     * true
     */
    default?: boolean;
    /**
     * @remarks
     * The list of supported modalities.
     */
    features?: string[];
    /**
     * @remarks
     * The model ID.
     *
     * @example
     * qwen3.7-max
     */
    modelId?: string;
    /**
     * @remarks
     * The list of thinking depth levels for the model.
     */
    thinkingLevels?: string[];
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
export declare class GetChatModelResponseBody extends $dara.Model {
    /**
     * @remarks
     * The query result.
     */
    data?: GetChatModelResponseBodyData[];
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329****
     */
    requestId?: string;
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
